// Getting info from SpaceX's public API

/**
 * SpaceX's Organization info
 */
const getSpacexInfo = () => {
  fetch('https://api.spacexdata.com/v4/company', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      document.getElementById('info').textContent = `${data.name} ${data.founder} ${data.links.twitter}`
    })
    .catch(error => console.error(error))
}

/**
 * SpaceX's Rockets info
 */
const getSpacexRockets = () => {
  fetch('https://api.spacexdata.com/v4/rockets', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.filter(rocket => {
      return rocket.name !== "Falcon 1"
    }).map(rocket => {
      const rocketDiv = document.createElement('div');
      rocketDiv.className = 'rocket';
      rocketDiv.style.border = '1px solid black'
      rocketDiv.margin = '10px'
      rocketDiv.textContent = rocket.name;
      
      document.getElementById('rockets').appendChild(rocketDiv);
      
      rocket.flickr_images.forEach(image => {
        const imageDiv = document.createElement('img');
        imageDiv.src = image
        imageDiv.style.width = '100px'
        imageDiv.style.height = '100px'
        imageDiv.alt = rocket.name
        
        document.getElementById('rockets').appendChild(imageDiv)
      })
    })
  })
  .catch(error => console.error(error))
}


// getSpacexInfo();
getSpacexRockets();


