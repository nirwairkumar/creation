let btn = document.querySelector('button')
let p = document.querySelector('p')
let url = "https://catfact.ninja/fact"


btn.addEventListener('click', async ()=>{
    try{
        let data = await fetch(url);
        let fresh = await data.json()
        p.innerText = fresh.fact
    } catch(e){
        p.innerText="try again "+ e;
    }
    
})