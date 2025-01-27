import supabase from './supabase';

export const getProjects = async (table) => {
  try {
  
    const { data, error } = await supabase
      .from(table)  
      .select('*')
 
    if (error) {
      console.error('Error fetching data:', error.message);
      return null;  
    }

    if (data && data.length === 0) {
      console.warn('No data found for the specified language');
      return null;  
    }

    return data;  
  } catch (error) {
    console.error('Error fetching data from Supabase:', error);
    return null;  
  }
};
