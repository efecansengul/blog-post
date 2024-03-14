import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function POST(req) {
  const user = await getCurrentUser();
  console.log(user);
  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }
    const { title, content } = await req.json();
    //return NextResponse.json({ user, title, content });
    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorEmail: user.email,
      },
    });
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (error) {
    console.error("Post creation error: ", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: "500" }
    );
  }
}
