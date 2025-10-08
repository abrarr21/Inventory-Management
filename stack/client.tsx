import { StackClientApp } from "@stackframe/stack";

export const stackClientApp = new StackClientApp({
    tokenStore: "nextjs-cookie",
});

//  stackClientApp is used to access the Stach Auth and its features in a client component.
