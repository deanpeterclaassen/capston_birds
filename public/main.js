const aForm = document.querySelector('#aForm')
const bName = document.querySelector('#bName')
const mainList = document.querySelector('#mainList')
const wishLists =document.querySelector('#wishLists')
const wForm = document.querySelector('#wForm')
const addTo = document.querySelector('#addTo')
const addButton = document.querySelector('#addBird')
const num = document.querySelector('#lifeCount')
const rImg = document.querySelector('.randomImg')
const rImg1 = document.querySelector('.randomImg1')
const count = document.querySelector('.lifeCount')
aForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    axios.post('/bird',{
        name: bName.value
    })
    
    .then(()=>{
        location.reload()})
    .catch(err => console.log('add day failed', err))
})
wForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios.post('/wish',{
        name: addTo.value

    })
    
    .then(()=>{
        location.reload()})
        .catch(err => console.log('add bird failed', err))
})
function markBirdAsSeen(id){
    const selectedBird = `#bird-${id}`;
    
    const seenBird = document.querySelector(selectedBird)
    
    seenBird.remove()
    axios.put(`/bird/seen`,{bird_id: id})
    .then(()=>{
        location.reload()})
    
    .catch(err => console.log('mark bird as seen bird failed', err))

}

function deleteBird(id){
    const selectedBird = `#bird-${id}`;
    
    const deleteBird = document.querySelector(selectedBird)
    deleteBird.remove()
    axios.put(`/bird/delete`,{bird_id: id})
    .then(()=>{
    location.reload()})
    .catch(err => console.log('delete bird failed', err))

}

function getWishBirds(){
    
    axios.get('/wish')
    .then(res=>{
    res.data.forEach(birdList=>{
        const nameElement =
        `<div id ="bird-${birdList['bird_id']}" class="birdElm" >
        <p>${birdList.bird_name}</p>
        <button class="addBut" onclick = "markBirdAsSeen(${birdList.bird_id});">I've Seen This Bird!!!</button>
        </div>`
        wishLists.innerHTML +=  nameElement

    })
})
}
function getLifeCount(){
    axios.get('/count')
    .then(res=>{
        res.data.forEach(birdList=>{
        const numElm =
        `${birdList.count}`
        count.innerHTML += numElm
    })
})
}

function getBirds(){
    
    axios.get('/bird')
    .then(res=>{
    res.data.forEach(birdList=>{
        const nameElement =
        `<div id ="bird-${birdList['bird_id']}" class="birdElm">
        <p> ${birdList.bird_name}</p> <button class="addBut" onclick= "deleteBird(${birdList.bird_id})">Delete This Bird</button>
        </div>`
        mainList.innerHTML +=  nameElement

    })
})
}
 function randomImg(){
    let images = ["1.jpg",'2.jpg','3.jpg','4.jpg'];
    let size = images.length
    let i = Math.floor(size*Math.random());
    console.log(images[i])
    const img = `<img src="${images[i]}"> `
    rImg.innerHTML += img 
 }
 function randomImg1(){
    let images = ["1.jpg",'2.jpg','3.jpg','4.jpg'];
    let size = images.length
    let i = Math.floor(size*Math.random());
    console.log(images[i])
    const img = `<img src="${images[i]}"> `
    rImg1.innerHTML += img 
 }
 randomImg()
 randomImg1()
getLifeCount()
getBirds()
getWishBirds()
