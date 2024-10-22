import React, { useState, useEffect } from 'react';
import build_stack from '../pages/stacklist';

const useFetchData = (api_url) => {
  {/*GPT - setting triggers for re render */}
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  {/*useEffect --> GPT - a hook to run when rendered / refreshed */}
  useEffect(() => {
    const fetchData = async () => {
       {/* Try the API request */}
      try {
        const myRequest = new Request(api_url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'x-app-id': process.env.REACT_APP_API_ID, 
            'x-app-key': process.env.REACT_APP_API_KEY, 
          },
        });

        const response = await fetch(myRequest);
        {/* If invalid, raise error */}
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json(); 
        const formattedData = jsonData.branded.map(item => ({
          thumb: item.photo.thumb,
          foodName: item.food_name,
          brandName: item.brand_name,
        }));
        
        setData(formattedData); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); 
      } finally { // GPT - set loading to false to display the result OR error 
        setLoading(false); 
      }
    };

    fetchData();
  }, [api_url]); 

  return { data, loading, error }; 
};

const DisplayData = ({ api_url }) => {
  const { data, loading, error } = useFetchData(api_url); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // build_stack is imported from stacklist.js
  return (
    <div className="food-stack">
      {build_stack(data)} {/* Render the food stack */}
                          {/* This way, the returned data from the API is already formatted */}
    </div>
  );
};

export default DisplayData;
