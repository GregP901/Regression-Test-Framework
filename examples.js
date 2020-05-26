
//GET
  const axios = require('axios');

    axios.get('http://localhost:3000')
    .then(response => {
      console.log(response.data);
      //console.log(response.data.explanation);
      })
    .catch(error => {
      console.log(error);
      });

//POST
      const axios = require('axios');

    const response = await axios.post('http://localhost:3000/add', {
      number1: '10',
      number2: '20'
    });
    console.log(response);