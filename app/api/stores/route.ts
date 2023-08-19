import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"

export async function POST(req: Request) {
  try {
    // userId that is going to create the store
    const { userId } = auth()
    const { name } = await req.json()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    })

    return NextResponse.json(store)
  } catch (error) {
    console.log("[STORES_POST]", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}