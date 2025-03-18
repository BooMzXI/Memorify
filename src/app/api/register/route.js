import pool from "@/lib/db";

export async function POST(req) {
    try {
        const newAccount = await req.json()
        const [rows] = await pool.query(`SELECT * FROM User WHERE username = ?`, [newAccount.user])
        if (rows.length > 0){
            return Response.json({ success: false , error: "This username already in use!" })
        }
        await pool.query(`INSERT INTO User (username , password) VALUES (? , ?)`,[newAccount.user,newAccount.password])
        return Response.json({ success: true, redirectUrl: '/' })
    } catch (err) {
        Response.json({ success: false , error: err })
    }
}