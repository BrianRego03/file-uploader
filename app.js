const path = require("node:path");

const express =require("express");
const session =require("express-session");
const passport =require("passport");
const{PrismaSessionStore}=require('@quixo3/prisma-session-store');
const { PrismaClient } = require("./generated/prisma");

const app=express();

const indexRouter=require("./routers/indexRouter");
const loginRouter=require("./routers/loginRouter");
const signUpRouter=require("./routers/signUpRouter");
const logOutRouter=require("./routers/logoutRouter");
const driveRouter=require("./routers/driveRouter");
const initializeAuth=require("./config/passport-config");

app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(
    session(
        {
            cookie:{
                maxAge: 24 * 7 * 60 * 60 * 1000
            },
            secret:"someStuff",
            resave:false,
            saveUninitialized:false,
            store: new PrismaSessionStore(
                new PrismaClient(),
                {
                    checkPeriod: 2*60*1000,
                    dbRecordIdIsSessionId:true,
                    dbRecordIdFunction:undefined,
                }
            )
        }
    )
)

initializeAuth();
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.user=req.user;
    next();
})

app.use("/",indexRouter);
app.use("/signup",signUpRouter);
app.use("/login",loginRouter);
app.use("/logout",logOutRouter);
app.use("/drive",driveRouter);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("we're good")
})