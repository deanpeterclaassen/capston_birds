const form = document.querySelector('form')
const bName = document.querySelector('#birdName')
const mainList = document.querySelector('#mainList')

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    
    axios.post('/bird',{
        name: bName.value
    })
    .then(()=>{
    location.reload()})
    .catch(err => console.log('add day failed', err))
})
function getBirds(){
    
    axios.get('/bird')
    .then(res=>{
    res.data.forEach(birdList=>{
        const nameElement =
        `<div>
        <p>${birdList.bird_id}    ${birdList.bird_name}</p>
        </div>`
        mainList.innerHTML +=  nameElement

    })
})
}
getBirds()
