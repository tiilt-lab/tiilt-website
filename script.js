function showPicture(e) {
    e.classList.toggle("img_hidden");
}

function rotate(e) {
    e.classList.toggle("rotated");
}

function hideImage(e) {
    const spanElement = e.querySelector('span');
    rotate(spanElement);

    const imgElements = e.getElementsByTagName('img');
    const imgElementsInArray = Array.from(imgElements);
    imgElementsInArray.map((imgTag) => showPicture(imgTag));
}

window.onload = () => { 
    const projectBoxes = document.getElementsByClassName('project_box');
    const projectBoxesInArray = Array.from(projectBoxes);
    projectBoxesInArray.map((box) => box.addEventListener('click', () => hideImage(box)));

    const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
};
