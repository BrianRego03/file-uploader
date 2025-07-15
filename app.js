const path =require("node:path");

const express =require("express");
const session =require("express-session");
const passport =require("passport");
const{PrismaSessionStore}=require('@quixo3/prisma-session-store');
import { PrismaClient } from "@prisma/client";
import prisma from "./db/prismaClient";

const app=express();

const indexRouter=require("./routers/indexRouter");
const loginRouter=require("./routers/loginRouter");
const signUpRouter=require("./routers/signUpRouter");
const initializeAuth=require("./config/passport-config");

app.use(express.urlencoded({extended:true}));

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
app.use(passport.session);

app.use((req,res,next)=>{
    res.locals.user=req.user;
    next();
})

app.use("/",indexRouter);
app.use("/signup",signUpRouter);
app.use("/login",loginRouter);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("we're good")
})