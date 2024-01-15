// src/api.js
import axios from 'axios';

const baseURL = ''; // Replace with your base URL
const apiKey = ''; // Replace with your API key

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${apiKey}` // Set the API key in the 'Authorization' header
  }
});

export const fetchData = async (endpoint, page, limit) => {
  try {
    debugger;
    const response = await axiosInstance.get(`/${endpoint}`, {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//   },
// });
// // src/api.js
// export async function getCharacters(page, limit) {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/character`, {
//         params: { page, limit },
//         headers: {
//           'Authorization': `Bearer ${API_KEY}`, // Include your API key here
//         },
//       });
//       debugger;
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
  
//   export async function getMovies(page, limit) {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/movie`, {
//         params: { page, limit },
//         headers: {
//           'Authorization': `Bearer ${API_KEY}`, // Include your API key here
//         },
        
//       });
//       debugger;
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
  
//   export async function getQuotes(page, limit) {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/quote`, {
//         params: { page, limit },
//         headers: {
//           'Authorization': `Bearer ${API_KEY}`, // Include your API key here
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
  