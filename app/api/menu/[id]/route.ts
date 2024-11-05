import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const client = await clientPromise;

        const db = client.db("mydatabase");

        const result = await db.collection("menu").findOne({_id: new ObjectId(params.id)})

        return NextResponse.json({ 
            success: true, 
            data: result, 
            message: "Data was getting!",
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message });
    }
};

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const client = await clientPromise;

        const db = client.db("mydatabase");
        const body = await req.json();
        const result = await db.collection("menu").findOneAndUpdate({ _id: new ObjectId(params.id) }, { $set: body });

        return NextResponse.json({ 
            success: true, 
            data: result, 
            message: "Data was updated!", 
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message });
    }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const client = await clientPromise;

        const db = client.db("mydatabase");

        const result = await db.collection("menu").findOneAndDelete({_id: new ObjectId(params.id) });

        return NextResponse.json({ 
            success: true, 
            data: result, 
            message: "Data was removed!",
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message });
    }
};
