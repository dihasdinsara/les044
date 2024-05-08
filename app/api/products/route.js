import connectMongoDB from "@/libs/mongo";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({products});
}

export async function POST(request) {
    const {id, name, price, href, imageSrc} = await request.json();
    console.log(id, name, price, href, imageSrc);
    await connectMongoDB()
    await Product.create({id, name, price, href, imageSrc});


    return NextResponse.json({ message: "welcome to next post route"});
}