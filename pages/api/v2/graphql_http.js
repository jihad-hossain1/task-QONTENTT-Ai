import { createHandler } from "graphql-http/lib/use/express";
import schema from "@/src/graphql/schema/schema";
import mongooseConnection from "@/config/connectDB";

// connect to database
mongooseConnection();

export default function handler(req, res) {
  if (
    req.method === "POST" ||
    req.method === "GET" ||
    req.method === "PATCH" ||
    req.method === "PUT" ||
    req.method ||
    "DELETE"
  ) {
    // handle both GET and POST requests
    return createHandler({ schema })(req, res);
  }

  res.setHeader("Allow", ["POST", "GET", "PATCH", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
