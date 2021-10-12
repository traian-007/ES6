import alert  from "./moduli1.js"

const $btn2 = document.getElementById('btn2')
$btn2.addEventListener('click', alert)
////////////////////////////////////////////////////////////////
class Animal {
    #name;
    constructor(name) {
        this.#name = name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name) 
        this.name = name
    }
    // created(){return new Date()}
}
const ab = new Dog('bob')
ab.created = new Date()
// console.log(ab.created())
console.log(ab.created)
console.log(ab.name)

////////////////////////////////////////////////
const $btn1 = document.getElementById('btn1')

async function fetchJson(url) {
    try {
        let request = await fetch(url);
        let text = await request.text();
        return JSON.parse(text);
    }catch (err) {
        console.log(`Error: ${err.stack}`);
    }
}

async function getResp() {
    let resp = await fetchJson('https://swapi.dev/api/people/')
    console.log(resp)
}

$btn1.addEventListener('click', getResp )

//////////////////////////////////////////////////////////

