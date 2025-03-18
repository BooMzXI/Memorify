import { deleteSession } from "@/lib/session";

export async function POST(req) {
    try {
        await deleteSession();
        return Response.json({ status: 200, message: "Logged out successfully", redirectUrl: "/" });
    } catch (err){
        Response.json({ status: 500, message: "Failed to logout" })
    }
}