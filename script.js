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
        const readMoreButtons = document.querySelectorAll('button');
        const buttonArr = Array.from(readMoreButtons);
        console.log(buttonArr);
        
        buttonArr.map((button) => button.addEventListener('click', () => expandText(button)));
    }

    const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
};
