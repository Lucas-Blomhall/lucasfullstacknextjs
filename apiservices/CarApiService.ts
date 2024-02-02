// Base API configuration
const API_BASE_URL = "http://127.0.0.1:8000";

// Fetch cars
export const fetchCars = async (): Promise<Car[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/cars`);
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to load data');
    }
  };
  
  async function fetchData(url:any, method = 'GET', body = null, headers = {}) {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Rethrow the error so it can be caught and handled where the function is called
    }
  }
  
  // Add more functions here for POST, DELETE, PUT as needed