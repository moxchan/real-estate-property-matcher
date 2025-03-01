import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { Listing } from "@/@types/listing";
import { FILE_PATH } from "../constants";

// Vercel Edge Function params
export const preferredRegion = ["syd1"];
export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const listing: Listing = await req.json();

    const listings: Listing[] = JSON.parse(
      await readFile(FILE_PATH, {
        encoding: "utf-8",
      })
    );

    // Just inc 1 from the highest id on the list.
    const newId =
      1 +
      listings.reduce(
        (prev, curr) => (curr.id > prev.id ? curr : prev),
        listings[0]
      ).id;

    listings.push({ ...listing, id: newId });

    await writeFile(FILE_PATH, JSON.stringify(listings));

    return NextResponse.json(
      {
        data: listings,
      },
      {
        status: 200,
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(`Error: ${error}`);
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
