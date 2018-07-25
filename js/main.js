function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

let data = loadData("Personality Data - Ricky");

const body = document.querySelector("body");
const script = document.querySelector("script");

function addContentWithClass(element, className, location){
    let newElement = document.createElement(element);
    newElement.setAttribute("class", className);
    body.insertBefore(newElement, location);
}

addContentWithClass("div", "main-content", script);

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML +=
    `<div class="wrapper">
        <h1>Ricky's Personality Profile</h1>
        <div class="general-container">
            <div>
                <h3>${data.general[0].name}</h3>
                <ul>
                    <li>${data.general[0].statements[0]}</li>
                    <li>${data.general[0].statements[1]}</li>
                    <li>${data.general[0].statements[2]}</li>
                    
                </ul>
            </div>
            <div>
                <h3>${data.general[1].name}</h3>
                <ul>
                    <li>${data.general[1].statements[0]}<br><small>${data.general[2].name}${data.general[2].details[0]}</small></li>
                    <li>${data.general[1].statements[1]}<br><small>${data.general[2].name}${data.general[2].details[1]}</small></li>
                    <li>${data.general[1].statements[2]}<br><small>${data.general[2].name}${data.general[2].details[2]}</small></li>
                </ul>
            </div>
            
        </div>
    </div>`

mainContent.innerHTML +=
    `<h2>People Like Me!</h2>
    <div class="people-container">
        <div>
            <img src="${data.peopleLikeMe[0].image}" alt="${data.peopleLikeMe[0].name}">
            <h4>${data.peopleLikeMe[0].name}</h4>
        </div>
        <div>
            <img src="${data.peopleLikeMe[1].image}" alt="${data.peopleLikeMe[1].name}">
            <h4>${data.peopleLikeMe[1].name}</h4>
        </div>
        <div>
            <img src="${data.peopleLikeMe[2].image}" alt="${data.peopleLikeMe[2].name}">
            <h4>${data.peopleLikeMe[2].name}</h4>
        </div>
        <div>
            <img src="${data.peopleLikeMe[3].image}" alt="${data.peopleLikeMe[3].name}">
            <h4>${data.peopleLikeMe[3].name}</h4>
        </div>
    </div>`   
    
mainContent.innerHTML += 
    `<h2>Communication: Me, You, and Us!</h2>
     <div class="communication-container">
        <div>
            <h4>${data.communication[0].name}</h4>
            <p>${data.communication[0].details}</p>
        </div>
        <div>
            <h4>${data.communication[1].name}</h4>
            <p>${data.communication[1].details}</p>
        </div>
        <div>
            <h4>${data.communication[2].name}</h4>
            <p>${data.communication[2].details}</p>
        </div>
     </div>`