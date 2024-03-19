import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "../../../../../helpers/getDataFromToken";
import {connect} from "@/dbconfig/dbconfig"
import User from "@/model/usermodel";

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjkzYjhkMWQwZDI1NTE0YzUxYTMzMCIsImVtYWlsIjoiYXNodWNoYXVoYW44NDBAZ21haWwuY29tIiwiaWF0IjoxNzEwODMzOTA0LCJleHAiOjE3MTA5MjAzMDR9.nJSB4nInCSzqEFVQP12NaUb2Ww1IxDgofzENWyY-cbo'

export async function GET(request: NextRequest){
    //console.log('request', request.cookies.getAll());
     const token = getDataFromToken(request);
     //console.log('helperResult', token);
     try{
             
        const user = await User.findOne({_id: token})
        console.log(user);
        if(!user){
            return NextResponse.json({
                message: 'Bad Request'
            },{
                status: 400
            })
        }
        return NextResponse.json({
            user
        },{
            status: 200
        })
     }catch(error){
        return NextResponse.json({
            error
        },{
            status: 500
        })
     }
}