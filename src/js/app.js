const ul = document.querySelector('ul');

const datosJson = "./data.json";
let li = document.querySelectorAll('li');

fetch(datosJson)
.then(resp => resp.json())
.then(data => {
  data.forEach((item, index) => {
    let category = item.category;
    let imgs = item.icon;
    let scores = item.score;
    
        let primerParrafo = li[index].firstElementChild;
        primerParrafo.innerHTML += `
        <img src="${imgs}">
        ${category}
        `
      
      
        let ultimoParrafo = li[index].lastElementChild.firstElementChild;
        ultimoParrafo.innerHTML += `${scores}`
      
    })
  });
      
      
    
