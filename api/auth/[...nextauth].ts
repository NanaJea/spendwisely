import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        // Remplacez par votre logique d'authentification réelle
        const user = { id: '1', name: 'John Doe', email: 'john@example.com' };

        if (credentials.email === 'john@example.com' && credentials.password === 'password') {
          return user;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/signup'
  },
});
