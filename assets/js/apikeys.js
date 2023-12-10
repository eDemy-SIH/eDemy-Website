let api_arr = [];
document.addEventListener('DOMContentLoaded', () => {
    // Fetch weather data from your server
    fetch('https://api-server-jex0.onrender.com/Weather/fsd') // Replace 'your-search-text' with the actual search text
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Process and display the data
        const [url, apiKey] = data;
        localStorage.setItem("api_arr",[url, apiKey]);
      })
      .catch(error => console.error('Error fetching data:', error.message));
});

api_arr = localStorage.getItem("api_arr").replaceAll("'","").split(",");
export default api_arr;