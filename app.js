const path =require("node:path");

const express =require("express");
const session =require("express-session");
const passport =require("passport");
const{PrismaSessionStore}=require('@quixo3/prisma-session-store');
import { PrismaClient } from "@prisma/client";
import prisma from "./db/prismaClient";

const app=express();

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

