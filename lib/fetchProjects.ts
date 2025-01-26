import supabase from "./supabase";

export default async function fetchProjects() {
  try {
    const { data, error } = await supabase.from("projects-en").select("*");
    console.log(data)
    if (error) {
      throw error;
    }
    return data;

  } catch (error:any) {
    console.error("Error fetching projects:", error.message);
    throw error;
  }
}

