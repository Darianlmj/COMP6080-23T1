// Getting info from SpaceX's public API

/**
 * SpaceX's Organization info
 */
const getSpacexInfo = () => {
  fetch('https://api.spacexdata.com/v4/company', {
    method: 'GET',
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById('info').textContent = data.name + data.founder;
    document.getElementById('links').textContent = data['links']['twitter'];
  });
}


/**
 * SpaceX's Rockets info
 */
const getSpacexRockets = () => {
  // TODO: Implement this function
}


getSpacexInfo();
// getSpacexRockets();