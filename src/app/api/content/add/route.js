import pool from "@/lib/db";

export async function POST(req) {
    try {
        const { title, description, image, username } = await req.json();
        await pool.query(`INSERT INTO Content (title, description, image, username) VALUES (
            ${title ? `'${title}'` : 'NULL'},
            ${description ? `'${description}'` : 'NULL'},
            ${image ? `'${image}'` : 'NULL'},
            ${username ? `'${username}'` : 'NULL'}
            );`);
        return Response.json({ status: 200 });
    } catch (error) {
        return Response.json({ status: 500, message: error.message});
    }
}