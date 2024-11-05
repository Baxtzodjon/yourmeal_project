import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (res: NextResponse, req: NextRequest) => {
    try {
        const client = await clientPromise;

        const db = client.db("mydatabase");

        const categories = await db.collection("users").find().toArray();

        return NextResponse.json({ 
            success: true, 
            data: categories, 
            message: "got users",
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message });
    }
};

export const POST = async (req: NextRequest) => {
    try {
        const client = await clientPromise;

        const db = client.db("mydatabase");
        const body = await req.json();
        const result = await db.collection("users").insertOne(body);

        return NextResponse.json({ 
            success: true, 
            data: result,
            message: "new user was created!",
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message });
    }
};