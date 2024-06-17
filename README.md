# Weather Dashboard

## Overview

Weather Dashboard is a React-based web application that allows users to search for the current weather and a 5-day forecast for any city. Users can also save their favorite cities and toggle between Celsius and Fahrenheit for temperature display. The application leverages the OpenWeatherMap API for fetching weather data and a JSON server to store and manage favorite cities.

## Features

- **Search for Weather:** Users can enter a city name to fetch and display the current weather and a 5-day forecast.
- **Favorites Management:** Users can add cities to their favorites list, remove them, and view weather data for their favorite cities.
- **Temperature Unit Toggle:** Users can switch between Celsius and Fahrenheit for temperature display.
- **Persistent State:** The application remembers the last searched city using local storage.
- **Responsive Design:** The application is styled using CSS for a visually appealing and user-friendly interface.

## Components

1. **App:** The main component that sets up the application layout.
2. **WeatherDashboard:** The core component that handles fetching weather data, managing favorites, and state.
3. **Search:** A component for entering the city name and triggering a weather search.
4. **WeatherDisplay:** A component for displaying the current weather and 5-day forecast.
5. **Favorites:** A component for displaying and managing favorite cities.
6. **Navbar:** A component for the application's navigation bar.

## Technologies Used

- **React:** For building the user interface.
- **Axios:** For making API requests.
- **OpenWeatherMap API:** For fetching weather data.
- **JSON Server:** For storing and managing favorite cities.
- **CSS:** For styling the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- OpenWeatherMap API key.

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Vikassinghrathor/RiDiv_Assignment_Weather_App.git
    cd weather-dashboard
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up JSON server:**
    - Create a `db.json` file in the project root with the following content:
      ```json
      {
        "favorites": []
      }
      ```
    - Start the JSON server:
      ```sh
      npx json-server --watch db.json --port 5000
      ```

4. **Add your OpenWeatherMap API key:**
    - Open `WeatherDashboard.jsx` and replace `const apiKey = 'YOUR_API_KEY';` with your actual API key.

5. **Start the React application:**
    ```sh
    npm run dev
    ```
   **Start the Json Server : **
   ```sh
   npm run server
   ```

### Usage

- **Search for Weather:** Type a city name in the search bar and click the "Search" button.
- **Manage Favorites:** Add a city to favorites by typing its name in the "Favorites" section and clicking "Add." Remove a favorite city by clicking the "Remove" button next to it.
- **Toggle Temperature Unit:** Switch between Celsius and Fahrenheit by clicking the toggle button.

## Screenshots

![Weather_App_Screenshot](https://github.com/Vikassinghrathor/RiDiv_Assignment_Weather_App/assets/79059917/990a2ea6-4b16-40c4-8249-523c074a7c76)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.
- [JSON Server](https://github.com/typicode/json-server) for the mock backend server.

---
## Author 
- Vikas Singh Rathore .
