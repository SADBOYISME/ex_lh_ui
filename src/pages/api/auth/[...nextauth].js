import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const users = [
  { id: 1, username: "pipo", password: "123", name: "pipo" },
  { id: 2, username: "jane.doe", password: "password456", name: "Jane Doe" },
];

const yourExistingAuthSystem = async (credentials) => {
  const { username, password } = credentials;

  // Simulating a database query to find the user
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Return the user object if found
    return user;
  } else {
    // Return null if the user is not found
    return null;
  }
};

const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        // Simulating a database query to find the user
        const user = users.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          // Return the user object if found
          return user;
        } else {
          // Return null if the user is not found
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "./../../login.tsx",
  },
};

export default (req, res) => NextAuth(req, res, options);
