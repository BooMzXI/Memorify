import { cookies } from "next/headers";
import pool from "@/lib/db";

export async function GET(req) {
    try {
        const cookieStore = await cookies()
        const username = JSON.parse(cookieStore.get("session").value).username;
        const [rows] = await pool.query(`SELECT * FROM Content WHERE username = ? ORDER BY timestamp;`, [username]);
        return Response.json(rows);
    } catch (error) {
        return Response.json([]);
    }
}