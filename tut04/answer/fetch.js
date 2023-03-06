/**
 * Fetch Demo
 */
// Making a basic GET request 
const getRequest = () => {
  fetch(`${url}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// Making a POST request
const postRequest = () => {
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({ name: 'John Doe' }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// Making a PUT request
const putRequest = () => {
  fetch(`${url}`, {
    method: 'PUT',
    body: JSON.stringify({ name: 'John Doe' }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// Making a DELETE request
const deleteRequest = () => {
  fetch(`${url}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

getRequest();
postRequest();
putRequest();
deleteRequest();