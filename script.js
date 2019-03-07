function showPicture(e) {
    console.log(e);
    
    e.classList.toggle("visually_hidden");
}

function rotate(e) {
    e.classList.toggle("rotated");
}

function expandText(e) {
    const p_Sibling = e.previousElementSibling; 
    //conld be a better way to do this
    p_Sibling.classList.toggle("expanded_text");
}

function addReadMoreButtons() {
    const paragraphs = document.querySelectorAll("article:not(.leaders) > .people-group section p");
    const paragraphArr = Array.from(paragraphs);
    let filtered = paragraphArr.filter(para => para.clientHeight > 200);
    
    filtered.map((bigPara) => {
        bigPara.classList.add('expanded_text');

        const button = document.createElement("button"); 
        const newContent = document.createTextNode("read more"); 
        button.appendChild(newContent); 
        button.addEventListener('click', () => expandText(button));

        bigPara.after(button);
    });
}
function hideImage(e) {
    const spanElement = e.querySelector('span');
    rotate(spanElement);

    const imgElements = e.getElementsByTagName('img');
    const imgElementsInArray = Array.from(imgElements);
    imgElementsInArray.map((imgTag) => showPicture(imgTag));
}

window.onload = () => { 
    if (location.href.includes("projects")) {
        const projectBoxes = document.getElementsByClassName('project_box');
        const projectBoxesInArray = Array.from(projectBoxes);
        projectBoxesInArray.map((box) => box.addEventListener('click', () => hideImage(box)));
    }

    if (location.href.includes("people")) {

        addReadMoreButtons();
    }

    const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
};
