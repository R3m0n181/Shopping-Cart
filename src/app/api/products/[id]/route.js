import { data } from "@/utils/data";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(data.products, {status:200})
}