const pop_up = document.getElementById("pop-up");
const pop_up_2 = document.getElementById("pop-up-2");
const number = document.getElementById("main");
const lander = document.getElementById("lander-top");
const datalist = document.getElementById("datalist");

function closePopup(){
    pop_up.style.display = "none";
    number.style.opacity = 1;
    lander.style.opacity = 1;
}

function openPopup(){
    number.style.opacity = 0.1;
    lander.style.opacity = 0.1;
    pop_up_2.style.display = "block";
}

function closePopup2(){
    pop_up_2.style.display = "none";
    number.style.opacity = 1;
    lander.style.opacity = 1;
}

const api = "https://restcountries.com/v3.1/all";

async function fetchCountry(){
    const response = await fetch(api);
    const result = await response.json();
    
    result.map(cntry => {
        const opt = document.createElement("option");
        opt.innerText = `${cntry.name.common}`;
        datalist.append(opt);
    });
}

fetchCountry();