'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios";

export default function SocialShare() {
    const [post, setPost] = useState("");
    const [loading, setLoading] = useState(false);

    const shareOnLinkedIn = async () => {
        setLoading(true);
        try {
            const response = await axios.post("/api/linkedin", { post });
            alert("Posted on LinkedIn successfully!");
        } catch (error) {
            alert("Failed to post on LinkedIn.");
        }
        setLoading(false);
    };

    const shareOnX = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/twitter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ post: "Hello Twitter! 🚀" }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            alert("Failed to post on Twitter.");
        }
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-96 p-4 shadow-lg">
                <CardContent>
                    <h2 className="text-xl font-bold mb-2">Share Your Post</h2>
                    <Input
                        type="text"
                        placeholder="Write your post here..."
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        className="w-full mb-4"
                    />
                    <div className="flex justify-between">
                        <Button onClick={shareOnLinkedIn} disabled={loading}>
                            {loading ? "Posting..." : "Share on LinkedIn"}
                        </Button>
                        <Button onClick={shareOnX} disabled={loading}>
                            {loading ? "Posting..." : "Share on X"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
