# Movie Search App

A simple and responsive movie search web application built with **React.js** and the **OMDb API**.  
It allows users to search for movies by title, fetches details in real time, and displays them with a clean, modern UI.

## 🚀 Features

- 🔍 Search movies by title using the OMDb API
- 🎞️ Displays posters, titles, and movie types
- 💡 Smooth loader animation while fetching data
- ❌ Error handling for invalid searches
- 💻 Responsive and modern glassmorphic design
- ⚡ Built with React hooks and environment variables

## 🧩 Tech Stack

- **Frontend:** React.js (Hooks, Components, CSS)
- **API:** [OMDb API](https://www.omdbapi.com/)
- **Styling:** Custom CSS with gradients and animations

## Installation

1. Clone the repository to your local machine:

   ```shell
      git clone https://github.com/Ankitbargali/movie-search-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Movie-search-app
   ```

3. Create an `.env` file in the root directory of the project.

4. Paste the copied content into the `.env` file.

5. Obtain an API key from the OMDb API (http://www.omdbapi.com/) and replace `REACT_APP_MOVIES_API_URL` in the `.env` file with your API URL.

   Example `.env` file:

   ```shell
   REACT_APP_MOVIES_API_URL=http://www.omdbapi.com/?apikey=your-api-key
   ```

6. Save the `.env` file.

7. Install the project dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000` 🚀 to access the Movie Search App.

3. Enter a movie title in the search input and click the search icon or press Enter to fetch and display the corresponding movie information.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify the README file as per your requirements and add any additional sections or details that you think are necessary.
