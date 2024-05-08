import connectMongoDB from "@/libs/mongo";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: "welcome to next route"});
}

export async function POST(request) {
    const {firstName, lastName} = await request.json();
    console.log(firstName, lastName);
    await connectMongoDB()
    await User.create({firstName, lastName});


    return NextResponse.json({ message: "welcome to next post route"});
}