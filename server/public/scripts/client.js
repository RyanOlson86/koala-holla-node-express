console.log( 'test' );
// create an array of the koala's

let koalaArray = [
  {
    id: '1',
    name: 'Scotty',
    gender: 'M',
    age: 4,
    transferReady: true,
    notes: 'Born in Guatemala'
  }
];

function renderKoalas(array){
  let tableBody = document.getElementById('viewKoalas')
  for (const koala of array) {
    tableBody.innerHTML += `
  <tr>
    <td>${koala.name}</td>
    <td>${koala.gender}</td>
    <td>${koala.age}</td>
    <td>${koala.transferReady}</td>
    <td>${koala.notes}</td>
    <td></td>
    <td></td>
  </tr>
  `
  }
}

renderKoalas(koalaArray);


function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios.get('/koalas')
  .then((response)=>{
    console.log(response.data);
    renderKoalas(response.data)
  })
 // end getKoalas
}
function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}



