import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const { post, accessToken } = req.body;

    const apiUrl = "https://api.linkedin.com/v2/ugcPosts";
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "X-Restli-Protocol-Version": "2.0.0",
        "Content-Type": "application/json",
    };

    const body = {
        author: `urn:li:person:your-linkedin-user-id`,
        lifecycleState: "PUBLISHED",
        specificContent: {
            "com.linkedin.ugc.ShareContent": {
                shareCommentary: { text: post },
                shareMediaCategory: "NONE",
            },
        },
        visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    };

    try {
        const response = await axios.post(apiUrl, body, { headers });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data });
    }
}
