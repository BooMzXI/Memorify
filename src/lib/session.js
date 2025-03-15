import "server-only";
import { cookies } from "next/headers";

export async function createSession(id) {
    const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // expire in 7 days
    const session = id; // set session identify
    const cookieStore = await cookies();
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiredAt,
        sameSite: "lax",
        path: '/'
    });
}