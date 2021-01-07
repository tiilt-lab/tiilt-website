function onlyShow(e) { 
    e.className = "lazy" 
}

function onlyHide(e) { 
    e.className = "visually_hidden"
}

// These functions were renamed so that purpose will be more clear
function toggleImage(e) {
    e.classList.toggle("visually_hidden");
}

function rotate(e) {
    e.classList.toggle("rotated");
}

function contractText(e) {
    const p_Sibling = e.parentElement.querySelector('p');

    const textContracted = p_Sibling.classList.toggle("contracted_text");
    if (textContracted) {
        e.innerHTML = "read more";
    } else {
        e.innerHTML = "read less";
    }
}

function addReadMoreButtons() {
    const paragraphs = document.querySelectorAll("article:not(.leaders) > .people-group section p");
    const paragraphArr = Array.from(paragraphs);
    const filtered = paragraphArr.filter(para => para.clientHeight > 200);

    filtered.map((bigPara) => {
        bigPara.classList.add('contracted_text');

        const button = document.createElement("button");
        const newContent = document.createTextNode("read more");
        button.appendChild(newContent);
        button.addEventListener('click', () => contractText(button));

        bigPara.after(button);
    });
}

// Makes function more versatile.
function toggleHelper(e, f) {
    const spanElement = e.querySelector('span');
    rotate(spanElement);

    const imgElements = e.getElementsByTagName('img');
    const imgElementsInArray = Array.from(imgElements);
    imgElementsInArray.map((imgTag) => f(imgTag));
}

window.onload = () => {
    var timer = null;
    if (location.href.includes("projects")) {
        const projectBoxes = document.getElementsByClassName('project_box');
        const projectBoxesInArray = Array.from(projectBoxes);
        projectBoxesInArray.map((box) => box.setAttribute('aria-expanded', "false"))
        projectBoxesInArray.map((box) => box.addEventListener('click', function () { 
            toggleHelper(box, toggleImage); 
            // This is to change the accessibility tags when the box does get expanded
            if (box.getAttribute('aria-expanded') == "true") { 
                box.setAttribute('aria-expanded', "false")
            } else { 
                box.setAttribute('aria-expanded', "true")
            } 
        }));
        projectBoxesInArray.map((box) => box.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
              toggleHelper(box, toggleImage)
              if (box.getAttribute('aria-expanded') == "true") { 
                  box.setAttribute('aria-expanded', "false")
              } else { 
                  box.setAttribute('aria-expanded', "true")
              }
            }
        }));

        // Here are the hover features
        projectBoxesInArray.map(function(box) {
            //var headerElement = box
            var headerElement = box.querySelector('h1')   
            headerElement.addEventListener("mouseenter", 
                function() {  
                    clearTimeout(timer); 
                    if (box.getAttribute('aria-expanded') == "false") { 
                        toggleHelper(box, onlyShow); 
                        box.setAttribute('aria-expanded', "true")
                    } 
                }
            ); 
        })
        projectBoxesInArray.map(function(box) { 
            box.addEventListener("mouseleave", () => timer = setTimeout(
                function() { 
                    if (box.getAttribute('aria-expanded') == "true") { 
                        toggleHelper(box, onlyHide); 
                        box.setAttribute('aria-expanded', "false")
                    } 
                }, 
            1000));
        })
    }

    if (location.href.includes("people")) {
        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            console.log('lol @ Firefox');
        } else {
            addReadMoreButtons();
        }
    }

    const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
};