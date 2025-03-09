import { NextResponse } from "next/server";
import { TwitterApi } from "twitter-api-v2";

export async function POST(req) {
    try {
        const { post } = await req.json();

        // ✅ Correctly initializing Twitter API Client
        const client = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY,
            appSecret: process.env.TWITTER_API_SECRET,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessSecret: process.env.TWITTER_ACCESS_SECRET,
        });

        // const readOnlyClient = client.readOnly;
        // const response = await readOnlyClient.v2.userByUsername('khatabkhatir');

        const rwClient = client.readWrite;
        const response = await rwClient.v2.tweet({
            text: 'My tweet text with two images!',
        });
        console.log(response);

        return NextResponse.json(response);
    } catch (error) {
        console.error("Twitter API Error:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
