const { fetchUserById,fetchUserByName } = require("../db/query") ;
const passport=require("passport");
const localStrategy=require("passport-local").Strategy;
const bcrypt=require("bcryptjs");

function initializeAuth(){
    passport.use(new localStrategy(
        async(username,password,done)=>{
            try{
                const user=await fetchUserByName(username);
                if(!user){
                    return done(null,false,{message:"No user found"});
                }
                const match = await bcrypt.compare(password,user.password);
                if(!match){
                    return done(null,false,{message:"In correct password"});
                }

                return done(null,user);
            }
            catch(err){
                return done(err);
            }
        }
    ));

    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });

    passport.deserializeUser(async(id,done)=>{
        try{
            const user= await fetchUserById(id);
            done(null,user);
        }
        catch(err){
            done(err);
        }
    });
}

module.exports=initializeAuth;