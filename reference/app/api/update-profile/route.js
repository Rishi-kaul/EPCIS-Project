import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../../models/User";
import { getServerSession } from "next-auth";

export async function POST(req) {
  const session = await getServerSession(req);
  if (!session) return Response.json({ error: "Not authenticated" }, { status: 401 });

  const { name, bio, phone, profilePicture } = await req.json();
  await connectToDatabase();

  await User.updateOne({ email: session.user.email }, { name, bio, phone, profilePicture });

  return Response.json({ success: true });
}
