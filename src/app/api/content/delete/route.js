import { cookies } from "next/headers";

import pool from "@/lib/db";

export async function DELETE(req) {
    try {
        const cookieStore = await cookies()
        const username = JSON.parse(cookieStore.get('session').value).username
        
        const { title, timestamp } = await req.json()
        const res = await pool.query('DELETE FROM Content WHERE username = ? AND title = ? AND timestamp = ? ',[username , title , timestamp])
        if (res.affectedRows > 0) {
            return Response.json({ status: 200, message: "Content deleted successfully"});
        } else {
            return Response.json({ status: 404, message: "Content not found-1" + timestamp });
        }
    } catch (error) {
        return Response.json({ status: 404, message: "Content not found-2" });
    }
}