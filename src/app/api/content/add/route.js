import { cookies } from "next/headers";

import pool from "@/lib/db";

export async function POST(req) {
    try {
        const cookieStore = await cookies()
        const username = JSON.parse(cookieStore.get("session").value).username;
        const { title, description, image, tag } = await req.json();
        await pool.query(`INSERT INTO Content (title, description, image, username, tag) VALUES (?, ?, ?, ?, ?);`, [title, description, image, username, tag]);
        return Response.json({ status: 200 });
    } catch (error) {
        return Response.json({ status: 500, message: error.message});
    }
}