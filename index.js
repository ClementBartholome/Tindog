import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
let likedDogs = []
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', nope)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex += 1
    if (currentDogIndex < dogsData.length) {
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    } else {
        renderLikedDogs()
    }
}

function yes() {
    currentDog.setMatchStatus(true)
    currentDog.hasBeenLiked = true
    likedDogs.push(currentDog)
    render()
    setTimeout(()=>{
        getNewDog()
    }, 1000) 
}

function nope() {
    currentDog.setMatchStatus(true)
    render()
    setTimeout(()=>{
        getNewDog()
    }, 1000)
}

function renderLikedDogs() {
    document.getElementById("end-message").classList.toggle("hidden")
    document.getElementById("card").classList.toggle("hidden")
    document.getElementById("actions").classList.toggle("hidden")
     
    const likedDogsContainer = document.querySelector(".liked-dogs-container")
    likedDogsContainer.innerHTML = ""
  
    likedDogs.forEach(dog => {
      const gridItem = document.createElement("div")
      gridItem.classList.add("liked-dog")
      gridItem.innerHTML = `
            <img src="${dog.avatar}" alt="${dog.name}">
            <h3 class="name"> ${dog.name}, ${dog.age} </h3>
          </div>
      `
      likedDogsContainer.appendChild(gridItem)
    })
}