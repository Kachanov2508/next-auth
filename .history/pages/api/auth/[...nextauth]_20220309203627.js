import NextAuth from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb"

import YandexProvider from "next-auth/providers/yandex";
import MailRuProvider from "next-auth/providers/mailru";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID,
            clientSecret: process.env.YANDEX_CLIENT_SECRET
        }),
        MailRuProvider({
            clientId: process.env.MAILRU_CLIENT_ID,
            clientSecret: process.env.MAILRU_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
});
