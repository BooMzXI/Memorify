"use server";

import pool from "@/lib/db";
import { createSession } from "@/lib/session";

export async function login(username, password) {
    if (!username || !password) return;

    try {
        const [rows] = await pool.query(
            `SELECT * FROM User WHERE username = ? AND password = ?`,
            [username, password]
        );

        if (rows.length > 0) {
            await createSession(username);
            return '/home';
        } else {
            return null;
        }
    } catch (error) {
        console.log(error.message);
    }
}