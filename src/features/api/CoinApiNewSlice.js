async function fetchData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      
      // Creating a slice of the data (for example, selecting the first 10 elements)
      const sliceOfData = jsonData.slice(0, 10);
      
      console.log(sliceOfData); // Output the sliced data
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  