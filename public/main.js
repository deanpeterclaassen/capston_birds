const aForm = document.querySelector('#aForm')
const bName = document.querySelector('#birdName')
const mainList = document.querySelector('#mainList')
const wishLists =document.querySelector('#wishLists')
const wForm = document.querySelector('#wForm')
const addTo = document.querySelector('#addTo')
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
    console.log(selectedBird);
    const seenBird = document.querySelector(selectedBird)
    
    seenBird.remove()
    axios.put(`/bird/seen`,{bird_id: id})
    
    .then(()=>{
    location.reload()})
    .catch(err => console.log('mark bird as seen bird failed', err))

}

function deleteBird(id){
    const selectedBird = `#bird-${id}`;
    console.log(selectedBird);
    const deleteBird = document.querySelector(selectedBird)
    console.log(deleteBird)
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
        `<div id ="bird-${birdList['bird_id']}">
        <p>${birdList.bird_id}    ${birdList.bird_name}</p>
        <button onclick = "markBirdAsSeen(${birdList.bird_id})">xxx</button>
        </div>`
        wishLists.innerHTML +=  nameElement

    })
})
}

function getBirds(){
    
    axios.get('/bird')
    .then(res=>{
    res.data.forEach(birdList=>{
        const nameElement =
        `<div id ="bird-${birdList['bird_id']}">
        <p>${birdList.bird_id}    ${birdList.bird_name}</p> <button onclick= "deleteBird(${birdList.bird_id})">x</button>
        </div>`
        mainList.innerHTML +=  nameElement

    })
})
}



// function addToWishlist (e){
//     e.preventDefault();
//     axios.post('/wish', {
//         name: bName.value
//     })
//     const addTo = document.querySelector('#addTo');
//     let newBird = document.createElement('li');
//     let newBirdname = document.createElement('span');
//     newBirdname.textContent = addTo.value

//     newBird.appendChild(newBirdname);

//     document.querySelector('ul').appendChild(newBird)
//     .then(()=>{
//         location.reload()})
//         .catch(err => console.log('add day failed', err))
// }
getBirds()
getWishBirds()
