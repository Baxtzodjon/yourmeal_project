import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (res: NextResponse, req: NextRequest) => {
    try {
        const client = await clientPromise;

        const db = client.db("mydatabase");

        const categories = await db.collection("categories").find().toArray();

        return NextResponse.json({ 
            success: true, 
            data: categories, 
            message: "got categories",
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message });
    }
};