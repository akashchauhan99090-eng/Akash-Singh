# Weather Dashboard Configuration

## API Setup Instructions

1. **Register for Weather API:**  
   Sign up for an API key from a weather service provider (e.g., OpenWeatherMap, WeatherAPI).

2. **Install Required Dependencies:**  
   Ensure you have the necessary libraries in your project. Depending on your technology stack, you might need:
   - `axios` for making HTTP requests (JavaScript)
   - `requests` for Python

3. **Configuration File Setup:**  
   Create a file named `.env` at the root of your project and add the following line:
   
   `WEATHER_API_KEY=your_api_key_here`

4. **Usage in Code:**  
   To use the API key in your application, load the environment variable:
   ```javascript
   const apiKey = process.env.WEATHER_API_KEY;
   // Example API Call
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
   ```

5. **Testing:**  
   Make sure to test your API connectivity and responses to ensure everything is working as expected.

6. **Handle Errors:**  
   Implement error handling to manage possible API errors, including invalid API keys, rate limits, or unavailable services.

## Additional Notes
- Keep your API key secret and never expose it in your front-end code. 
- Consider using a `.gitignore` file to prevent committing sensitive information from the `.env` file to your repository.