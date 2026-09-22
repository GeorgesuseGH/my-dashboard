
import type { NextAuthConfig } from "next-auth";
export const authConfig={
    pages:{
        signIn:"/login",//the page that the user is gonna be redirected to rather then the default next.js login page
    }
, callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true; //user will be authenticated authorized
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard',nextUrl)); //the nextUrl carries the actual domain +protocol etc 
      }
      return true;//for users who are visiting the page for the first time , they will be authorized to do so
    },
  },
  providers: [],//array for differnet login options ,like google ,github,..

} satisfies NextAuthConfig;

