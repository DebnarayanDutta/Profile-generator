const firstName = document.getElementById('first-name')
const secondName = document.getElementById('second-name')
const image = document.getElementById('image')
const info = document.getElementById('space')
let maindata;



function call(){
const data = fetch("https://randomuser.me/api/")
data.then(res => res.json())
.then(ab =>{
    console.log(ab)

    firstName.textContent = ab.results[0].name.first
    secondName.textContent = ab.results[0].name.last
    image.src = ab.results[0].picture.large
    maindata = ab;
})
}

call()

function Refresh(){
    call()
    info.textContent=" "
}

function Age(){
    info.textContent = maindata.results[0].dob.age
}

function Email(){
    info.textContent = maindata.results[0].email
}

function Phone(){
    info.textContent = maindata.results[0].phone
}


 