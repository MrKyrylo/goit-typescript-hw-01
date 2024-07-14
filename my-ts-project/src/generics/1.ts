import axios from 'axios'; 
async function fetchData<T>(url: string): Promise<T> { 
  try { 
    const response = await axios.get(url); 
    console.log("response>> ", response);
    return response.data as T; 
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`); 
  } 
}
export{};