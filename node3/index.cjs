
const axios = require('axios');

axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=56794778')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

/*

async function getData() {
    const url = "https://api.restful-api.dev/objects";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
}
getData();
*/