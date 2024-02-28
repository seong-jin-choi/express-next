import connectDB from "@/app/lib/db";
import User from "@/app/model/User";

export async function GET(request: Request) {
  await connectDB();

  const existingUser = await User.find({}).select("userID name role updatedAt");
  return Response.json({ existingUser });
}
