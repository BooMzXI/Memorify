import pool from "@/lib/db";

export async function POST(req) {
    try {
        const { username } = await req.json();
        const [rows] = await pool.query(`SELECT * FROM Content WHERE username = '${username}' ORDER BY timestamp;`);
        return Response.json(rows);
    } catch (error) {
        return Response.json([]);
    }
}