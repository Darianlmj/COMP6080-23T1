// Getting info from SpaceX's public API

/**
 * SpaceX's Organization info
 */
const getSpacexInfo = () => {
  fetch("https://api.spacexdata.com/v4/company", {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const infoDiv = document.getElementById('info');
    infoDiv.textContent = JSON.stringify(data);
  })
  .catch((err) => {
    console.error(`Organisation Error: ${err}`);
  });
}


/**
 * SpaceX's Rockets info
 */
const getSpacexRockets = () => {
  // Will be shown in class
}


getSpacexInfo();
// getSpacexRockets();