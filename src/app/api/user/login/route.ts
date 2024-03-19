

import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/usermodel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connect()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {email , password} = reqBody;
       
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({
                error: "User does not exist"
            },{
                status: 400
            })
        }

        //check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({
                error: "Invalid Password"
            },{
                status: 400
            })
        }

        //create a token
        const tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'})
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,

        })
        return response;

    }catch(error){
        return NextResponse.json({
            error
        },{
            status: 500
        })
    }
}
