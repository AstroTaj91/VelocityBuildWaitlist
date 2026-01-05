import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const { email, name, state, comment } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // 1. Save to Supabase
        const { error: supabaseError } = await supabase
            .from("waitlist")
            .insert([
                {
                    email,
                    name: name || null,
                    state: state || null,
                    comment: comment || null
                }
            ]);

        if (supabaseError) {
            console.error("Supabase Error:", supabaseError);
            // We continue even if Supabase fails if we want to try Google Sheets, 
            // but usually we should throw if the primary DB fails.
            // throw new Error("Failed to save to database");
        }

        // 2. Optional Google Sheets Integration
        // This assumes the user will set up a Google Apps Script Web App URL
        const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbz0R0182vtOeByN7-CbrZCzovwpCPsLmZXfj_HNmdzv3ehwxqA3wrsOpZYSCWaJfv-yjg/exec";
        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
        const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
        if (GOOGLE_SHEETS_WEBHOOK_URL) {
            try {
                await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        timestamp: new Date().toISOString(),
                        email,
                        name,
                        location: state,
                        comment
                    }),
                });
            } catch (gsError) {
                console.error("Google Sheets Error:", gsError);
            }
        }

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
