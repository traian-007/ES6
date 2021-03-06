const $btn1 = document.getElementById('btn1')

async function fetchJson(url) {
    try {
        let request = await fetch(url);
        let text = await request.text();
        return JSON.parse(text);
    } catch (err) {
        console.log(`Error: ${err.stack}`);
    }
}

async function getResp() {
    let resp = await fetchJson('https://swapi.dev/api/people/')
    console.log(resp)
}

$btn1.addEventListener('click', getResp)