import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Hardcoded user, production e DB use korbe
                const hardcodedUser = {
                    id: "1",
                    name: "J Smith",
                    email: "jsmith@example.com",
                    username: "jsmith",
                    password: "123456",
                };

                if (
                    credentials.username === hardcodedUser.username &&
                    credentials.password === hardcodedUser.password
                ) {
                    return hardcodedUser;
                }

                return null; // Login fail
            },
        }),
    ],

    pages: {
        signIn: "/login", // Custom login page
    },

    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
