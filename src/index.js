let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

patchToyObj = {
  method: "PATCH",
  headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
},
body: JSON.stringify({
  "likes": ``
})
}
    
function addLikesToToy() {
  const toyCollection = document.querySelector('#toy-collection')
  
  toyCollection.addEventListener("click", function(e) {
      if (e.target.matches('#1')) {
        const button = e.target
        const likes = button.previousElementSibling
        console.log(likes)
      }
      
  })
}

addLikesToToy()








  let fidgetSpinner = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": "Fidget Spinner",
        "image": "https://i.pinimg.com/originals/21/1d/34/211d3453dbcbafebed8d77cc19b6ad7b.jpg",
        "likes" : 1000000 
      })
}



  
  function postToy(toyData) {
    fetch('http://localhost:3000/toys', toyData).then(function(response) {
      return response.json()

      }).then(function(json) {
        console.log(json)
      })
  }

  //postToy(fidgetSpinner)


  
  
  function fetchAndyToy() {
    fetch('http://localhost:3000/toys').then(function(response) {
      return response.json()
    }).then(function(json) {
      makeToy(json)
    }
    )}


  
  
  
  
  
  
  
  
  
  
  fetchAndyToy();

  function makeToy(obj) {
    for (const element of obj) {
    const divTag = document.querySelector('#toy-collection')
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `<h2>${element.name}</h2>
                       <img src=${element.image} class="toy-avatar" />
                      <p>${element.likes} Likes </p>
                      <button id=${element.id} class="like-btn">Like <3</button>`
    divTag.appendChild(card)
    
    }
  }






});
