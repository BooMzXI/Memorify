import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const newAccount = await req.json()
        const [rows] = await pool.query(`SELECT * FROM User WHERE username = ?`, [newAccount.user])
        if (rows.length > 0){
            return NextResponse.json({ success: false , error: "This username already use!" })
        }
        await pool.query(`INSERT INTO User (username , password) VALUES (? , ?)`,[newAccount.user,newAccount.password])
        return NextResponse.json({ success: true })
    } catch (err) {
        NextResponse.json({ success: false , error: err })
    }
}