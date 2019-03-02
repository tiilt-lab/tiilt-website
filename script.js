function showPicture(e) {
    if (e.classList.contains("img_hidden")) {
        e.classList.remove("img_hidden");
    } else {
        e.classList.add("img_hidden");
    }
}

window.onload = () => { 
    const hiddenProjects = document.getElementsByClassName("img_hidden");
    
}
