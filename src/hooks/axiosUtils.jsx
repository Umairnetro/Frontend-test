import axios from 'axios';

const dynamicAxiosRequest = async ({ url, method = 'GET', data = null, params = null }) => {
  try {
    let response;
    
    // Handle GET request with dynamic params
    if (method === 'GET') {
      response = await axios.get(url, { params });
    }
    
    // Handle POST request with dynamic data
    else if (method === 'POST') {
      response = await axios.post(url, data);
    }
    
    // Handle PUT request
    else if (method === 'PUT') {
      response = await axios.put(url, data);
    }
    
    // Handle DELETE request
    else if (method === 'DELETE') {
      response = await axios.delete(url, { data });
    }

    // Return the response data
    console.log("Connected")
    return response.data;
    
  } catch (error) {
    console.error('Error in Axios request:', error);
    throw error; // Throw error for further handling
  }
};

export default dynamicAxiosRequest;
