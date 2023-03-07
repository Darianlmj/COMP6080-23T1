// Getting info from SpaceX's public API

/**
 * SpaceX's Organization info
 */
const getSpacexInfo = () => {
  fetch("https://api.spacexdata.com/v4/company", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const infoDiv = document.getElementById("info");
      infoDiv.textContent = JSON.stringify(data);
    })
    .catch((err) => {
      console.error(`Organisation Error: ${err}`);
    });
};

/**
 * SpaceX's Rockets info
 */
const getSpacexRockets = () => {
  fetch("https://api.spacexdata.com/v4/rockets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data
        .filter((rocket) => {
          // Filter out Falcon 1 from rendering cause the images are broken
          // Refer to broken_image.png to see what I mean
          return rocket.name !== "Falcon 1";
        })
        .map((rocket) => {
          // Displaying names of landing pads
          const rocketDiv = document.createElement("div");
          rocketDiv.className = "rocket";
          rocketDiv.style.border = "1px solid black";
          rocketDiv.style.margin = "10px";
          rocketDiv.textContent = rocket.name;
          document.getElementById("rockets").appendChild(rocketDiv);

          // Displaying images of rockets
          rocket.flickr_images.forEach((image) => {
            const imageDiv = document.createElement("img");
            imageDiv.src = image;
            imageDiv.alt = rocket.name;
            imageDiv.style.width = "300px";
            imageDiv.style.height = "auto";
            imageDiv.style.margin = "10px";
            document.getElementById("rockets").appendChild(imageDiv);
          });
        });
    })
    .catch((err) => {
      console.error(`Rocket Error: ${err}`);
    });
};

// getSpacexInfo();
getSpacexRockets();
