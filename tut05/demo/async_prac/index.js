/**
 * SpaceX's Rockets info
 */
const getSpacexRockets = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/rockets", {
    method: "GET",
  });

  try {
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      data
        .filter((rocket) => {
          return rocket.name !== "Falcon 1";
        })
        .map((rocket) => {
          const rocketDiv = document.createElement("div");
          rocketDiv.className = "rocket";
          rocketDiv.style.border = "1px solid black";
          rocketDiv.margin = "10px";
          rocketDiv.textContent = rocket.name;

          document.getElementById("rockets").appendChild(rocketDiv);

          rocket.flickr_images.forEach((image) => {
            const imageDiv = document.createElement("img");
            imageDiv.src = image;
            imageDiv.style.width = "100px";
            imageDiv.style.height = "100px";
            imageDiv.alt = rocket.name;

            document.getElementById("rockets").appendChild(imageDiv);
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
};

getSpacexRockets();
