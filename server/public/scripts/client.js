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
  tableBody.innerHTML = ''
  for (const koala of array) {
    let isReady = ''
    if(koala.transferReady === false){
      isReady = `<button onCLick='updateReady(${koala.id})'>
      Ready for transfer
    </button>`
    }
    tableBody.innerHTML += `
  <tr>
    <td>${koala.name}</td>
    <td>${koala.age}</td>
    <td>${koala.gender}</td>
    <td>${koala.transferReady}</td>
    <td>${koala.notes}</td>
    <td class="center">${isReady}</td>
    <td class="center">
      <button onCLick='deleteKoala(${koala.id})'>
        Delete
      </button>
    </td>
  </tr>
  `
  }
}

getKoalas()

function updateReady(koalaId){
  //console.log('mark as ready clicked')
  axios.put(`/koalas/${koalaId}`)
  .then((response)=>{
    getKoalas()
  })
  .catch((error)=>{
    console.log('Error in updateReady', error);
  })
}



function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios.get('/koalas')
  .then((response)=>{
    console.log(response.data);
    renderKoalas(response.data)
  })
  .catch((error)=>{
    console.log('Error in getKoalas', error);
  })
 // end getKoalas
}
function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

function submitKoala(event){
  event.preventDefault()
  let newKoala = {
    name: document.getElementById(`nameIn`).value,
    gender: document.getElementById(`genderIn`).value,
    age: document.getElementById(`ageIn`).value,
    transferReady: document.getElementById(`readyForTransferIn`).value,
    notes: document.getElementById(`notesIn`).value
  }
  console.log(newKoala)
  axios.post('/koalas', newKoala)
  .then((response)=>{
    getKoalas()
    console.log('in post request')
  })
  .catch((error)=>{
    console.log('Error in post', error);
  })
}

function deleteKoala(koalaId){
  axios.delete(`/koalas/${koalaId}`)
  .then((response)=>{
    getKoalas();
  })
  .catch((error)=>{
    console.log('Error in delete', error);
  })
}




