import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../../models/User";
import { getServerSession } from "next-auth";

export async function GET(req) {
  const session = await getServerSession(req);
  if (!session) return Response.json({ error: "Not authenticated" }, { status: 401 });

  await connectToDatabase();
  const user = await User.findOne({ email: session.user.email });
  return Response.json({ user });
}
