import supabase from "./supabase";

export default async function fetchProjects () {
  let { data, error } = await supabase.from("ibhs-projects").select("*");
  try {
    if (error) {
      throw error;
    }
    const exdata = (await data) || [];
    return exdata;
  } catch (error) {
    console.error("Error fetching projects:");
  }
};
