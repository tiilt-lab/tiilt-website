function showPicture(e) {
    e.classList.toggle("img_hidden");
}

function rotate(e) {
    if (e.classList.contains("rotated")) {
        e.classList.remove("rotated");
    } else {
        e.classList.add("rotated");
    }
}

function hideImage(e) {
    const spanElements = e.getElementsByTagName('span');
    const span = spanElements[0];
    rotate(span);

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
