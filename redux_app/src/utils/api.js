const headers = {
    'Authorization': 'whatever-you-want',
    'credentials': "same-origin"
}

export const getCategories = () =>
  fetch('http://localhost:3001/categories', {headers:headers})
  	.then(response => response.json())
  	.then(response => {
        //   console.log(response)
      })