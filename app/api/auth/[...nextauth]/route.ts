import { NEXT_AUTH } from "@/app/config/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH);

export { handler as GET, handler as POST };
function GoogleProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }): import("next-auth/providers/index").Provider {
  throw new Error("Function not implemented.");
}

