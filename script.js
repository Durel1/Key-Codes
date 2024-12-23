const container = document.getElementById("keycontainer");

container.innerHTML = generateHTML("-","-","-")
 window.addEventListener("keydown", (e) =>{
    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));

 }) 

 function generateHTML(key, code, keyCode){

    return `
    <div class="key-container" >
        <h4>key</h4>
        <div class="key-content ">${key === "" ? "space" : key}
        </div>
    </div>

    <div class="key-container" >
        <h4>Code</h4>
        <div class="key-content ">${code}
        </div>
    </div>

    <div class="key-container" >
        <h4>key Code</h4>
        <div class="key-content ">${keyCode}
        </div>
    </div>
    
    `;

 }
