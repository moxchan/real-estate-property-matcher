import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { FILE_PATH } from "../constants";
import { Listing } from "@/@types/listing";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const data = await readFile(FILE_PATH, {
    encoding: "utf-8",
  });
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    const data = await readFile(FILE_PATH, {
      encoding: "utf-8",
    });

    const listings: Listing[] = JSON.parse(data);

    return NextResponse.json(
      listings.find((l) => l.id === id),
      { status: 200 }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
