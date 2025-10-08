import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
    tokenStore: "nextjs-cookie",
});

//  stackServerApp is used to access the Stach Auth and its features in a server component.
