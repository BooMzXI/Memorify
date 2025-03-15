import pool from "@/lib/db";

export async function POST(req) {
    try {
        const { title, description, image, username } = await req.json();
        await pool.query(`INSERT INTO Content (title, description, image, username) VALUES (?, ?, ?, ?);`, [title, description, image, username]);
        return Response.json({ status: 200 });
    } catch (error) {
        return Response.json({ status: 500, message: error.message});
    }
}