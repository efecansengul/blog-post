import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req) {
  const user = await getCurrentUser();

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }

    const { postId, text } = await req.json();
    const newComment = await prisma.comment.create({
      data: {
        postId,
        text,
        authorEmail: user.email,
      },
    });
    return NextResponse.json({ newComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
