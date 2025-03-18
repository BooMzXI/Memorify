import pool from "@/lib/db";
import { createSession , checkSession , deleteSession } from '@/lib/session'


export async function POST(req) {
    try {
        const account = await req.json()
        const [rows] = await pool.query(`SELECT * FROM User WHERE username = ?`,[account.username]);
        if (rows.length === 0) {
            return Response.json({ success: false, error: "Username not found" });
        }
        if (rows[0].password !== account.password){
            return Response.json({success: false, error: "Wrong password"})
        }
        await createSession(account.username)
        return Response.json({success: true, redirectUrl: '/home'})
    } catch (error) {
        return Response.json({ success: false, error: "An error occurred during login." })
    }
}