// async function sendDataToPython(data) {
//     const response = await fetch('http://127.0.0.1:5000/data', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     const responseData = await response.json();
//     console.log(responseData);
//   }
//   sendDataToPython({name: 'John', age: 30});

import axios from 'axios';
const data = [1,1,1,1,1,1,1,1,1,1,1,1];

axios.post('http://127.0.0.1:5000', {
  data
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});
