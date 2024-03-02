import supabase from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabase.from("ibhs-projects").select("*");
    if (error) {
      throw error;
    }
    if (data) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
  } catch (error: any) {
    console.log("Error fetching data from DB", error);
    
    return NextResponse.json({ error:'Internal Server Error' },{status:500});
  }
}
