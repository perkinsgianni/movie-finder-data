Create a server using the Express framework - Log all incoming requests with the morgan logging library - Accept requests for the Open Movie DataBase (OMDB) API - Make the requests to the OMDB using the axios library - Cache, or store, the responses for subsequent requests - Ensure the data is updated at least once a day.

Before trying to access the data from the OMDb we need to go generate our own API key at http://www.omdbapi.com/. Click API key and select the free one.

Next look up what a .env file is and how to incorporate it in your file so you can save your API key.

Now you will build a web server that will respond to GET requests for http://localhost:3000/ and return the data from the OMDb API.

When making a second request to the same endpoint http://localhost:3000/?i=${your api key}, the server should not return data from the OMDB API, but instead from some object or array.