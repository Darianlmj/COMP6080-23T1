// Getting info from SpaceX's public API
// But this time... using async await

/**
 * SpaceX's Organization info
 */
const getSpacexInfo = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/company", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const infoDiv = document.getElementById("info");
      infoDiv.textContent = JSON.stringify(data);
    } else {
      console.error(`Some other response was returned: ${ response.status }`);
    }
  } catch (err) {
    // To catch random errors (ie. TypeError, ReferenceError, etc.)
    console.error(`Organisation Error: ${err}`);
  }
};

getSpacexInfo();

// const getSpacexInfo = () => {
//   fetch("https://api.spacexdata.com/v4/company", {
//     "method": "GET",
//     "headers": {
//       "Content-Type": "application/json"
//     }
//   })
//   .then((response) => {                                      // Line 16 - 17
//     return response.json();
//   })
//   .then((data) => {                                          // Line 18 - 20
//     console.log(data);
//     const infoDiv = document.getElementById('info');
//     infoDiv.textContent = JSON.stringify(data);
//   })
//   .catch((err) => {                                          // Line 24 - 25
//     console.error(`Organisation Error: ${err}`);        
//   });
// }
