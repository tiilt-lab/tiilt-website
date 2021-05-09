function headerGenerator() { 
    var header = document.getElementsByTagName("header")[0]; 
    var page = Array.from(document.getElementsByTagName("meta"))
    var curr_page = window.location.href.slice(window.location.href.indexOf("edu") + 3)
    var rt = "/" 
    var srt = "/projects/"
    if (page.some(m => m.content.includes("Project"))) { 
        rt = "../../" 
        srt = "../"
    }
    // } else if (curr_page == "/") { 
    //     rt = "/" 
    //     srt = "/projects/"
    // }
    header.innerHTML = 
    `<h1 role="banner">technological innovations for inclusive learning &amp; teaching</h1>
    <nav aria-label= "Main Navigation">
        <ul>
            <li>
                <a href=${rt}>
                    home
                    <i class='uil uil-home'></i>
                </a>
            </li>
            <li>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary">
                        <a href=${rt + "projects/"}>projects
                            <i class='uil uil-drill'></i>
                        </a>
                    </button>
                    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>▼</span>
                    </button>
                    <div class="dropdown-menu">
                        <a href=${srt + "blinc/"}>blinc</a>
                        <a href=${srt + "famjam/"}>famjam</a>
                        <a href=${srt + "imr/"}>imr</a>
                        <a href=${srt + "minecraft/"}>minecraft</a>
                        <a href=${srt + "multicraft/"}>multicraft</a>
                        <a href=${srt + "sportsanalytics/"}>sport analytics</a>
                    </div>
                </div>
            </li>
            <li>
                <a href=${rt + "people/"}>people
                    <i class='uil uil-users-alt'></i>
                </a>
            </li>
            <li>
                <a href=${rt + "papers/"}>papers
                    <i class='uil uil-file-alt'></i>
                </a>
            </li>
            <li>
                <a href=${rt + "classes/"}>classes
                    <i class='uil uil-book'></i>
                </a>
            </li>
            <li>
                <a href=${rt + "contact/"}>contact
                    <i class='uil uil-envelope'></i></a>
            </li>
            <!-- <li>
                <a href=${rt + "events/"} class="current-page">events
                    <i class='uil uil-meeting-board'></i></a>
            </li> -->
        </ul>
    </nav>`

    var links = Array.from(document.getElementsByTagName("a"))
    curr_page = curr_page.split("/").filter(i => i != "")
    links = links.filter(l => window.location.href == l.href || subset(l.href.slice(l.href.indexOf("edu") + 3).split("/").filter(i => i != ""), curr_page)) 
    links.forEach(l => l.setAttribute("class", "current-page"))
}

function changeToDropup() { 
    if (window.screen.width < 640) { 
        var dropdown = document.getElementsByClassName("btn-group")[0] 
        dropdown.setAttribute("class", "btn-group dropup")
    }
}

headerGenerator();
changeToDropup();

function subset(l1, l2) { 
    if (l1.length == 0) { 
        return false
    }
    return l1.every(i => l2.includes(i))
}

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
        projectBoxesInArray.map((box) => box.addEventListener('click', function () { 
            var headerElement = box.querySelector('span')  
            toggleHelper(box, toggleImage); 
            // This is to change the accessibility tags when the box does get expanded
            if (headerElement.getAttribute('aria-expanded') == "true") { 
                headerElement.setAttribute('aria-expanded', "false")
            } else { 
                headerElement.setAttribute('aria-expanded', "true")
            } 
        }));
        projectBoxesInArray.map((box) => box.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                var headerElement = box.querySelector('span') 
              toggleHelper(box, toggleImage)
              if (headerElement.getAttribute('aria-expanded') == "true") { 
                  headerElement.setAttribute('aria-expanded', "false")
              } else { 
                  headerElement.setAttribute('aria-expanded', "true")
              }
            }
        }));

        // Here are the hover features
        projectBoxesInArray.map(function(box) {
            var headerElement = box.querySelector('h1') 
            headerElement.addEventListener("mouseenter", 
                function() {  
                    var spanElement = box.querySelector('span')
                    clearTimeout(timer);  
                    if (spanElement.getAttribute('aria-expanded') == "false") { 
                        toggleHelper(box, onlyShow); 
                        spanElement.setAttribute('aria-expanded', "true")
                    } 
                }
            ); 
        })
        projectBoxesInArray.map(function(box) { 
            box.addEventListener("mouseleave", () => timer = setTimeout(
                function() { 
                    var headerElement = box.querySelector('span')
                    if (headerElement.getAttribute('aria-expanded') == "true") { 
                        toggleHelper(box, onlyHide); 
                        headerElement.setAttribute('aria-expanded', "false")
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