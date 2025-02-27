import { connectToDatabase } from "../../../lib/mongodb";
import Document from "../../../models/Document";

export async function GET() {
  await connectToDatabase();

  const pending = await Document.countDocuments({ status: "pending" });
  const approved = await Document.countDocuments({ status: "approved" });
  const rejected = await Document.countDocuments({ status: "rejected" });

  return Response.json({
    stats: [
      { name: "Pending", value: pending },
      { name: "Approved", value: approved },
      { name: "Rejected", value: rejected },
    ],
  });
}
