function filterWindows(group, b) {
  tohide = document.getElementsByClassName("aGroup");
  toshow = document.getElementById(group);

  for (let index = 0; index < tohide.length; index++) {
    tohide[index].style.display = "none";
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }

  if (toshow != cPage) {
    cPage = document.getElementById(group);
    for (
      let index = 0;
      index < document.getElementsByClassName("filter").length;
      index++
    ) {
      document.getElementsByClassName("filter")[index].style.background = "rgba(0,0,0,0)";
    }

    if (document.getElementsByClassName("current-filter")[0]) {
      document
        .getElementsByClassName("current-filter")[0]
        .classList.remove("current-filter");
    } 
    b.style.background = "rgba(0,0,0,0)";
    document.body.style.background = b.getAttribute("color");
    b.classList.add("current-filter");
    zindex += 1;
    toshow.style.left = "0";
    document.getElementById(group).style.display = "block";
    document.getElementById(group).style.zIndex = zindex;
    console.log(cPage.id);
    
    if (cPage.id == "peopleGroup") {
      for (index = 0; index < document.getElementsByClassName("person").length; index++) {
        // document.getElementsByClassName("person")[index].style.display = "block";
        document.getElementsByClassName("person")[index].style.marginLeft =
          String(
            Math.random() *
          (document.getElementsByClassName("col")[0].offsetWidth - document.getElementsByClassName("person")[index].offsetWidth)
          ) + "px";
      }
    }
  } else {
    cPage = null;
    b.style.background = "rgba(0,0,0,0)";
    b.classList.remove("current-filter");
    document.body.style.background = "white";
    // document.getElementById(group).style.display = "none";
    document.getElementById(group).style.left = "-100vw";
  }

  for (let index = 0; index < toshow.children.length; index++) {
    console.log(toshow.offsetWidth, toshow.children[index].offsetWidth);
    toshow.children[index].style.marginRight =
      String(
        Math.random() *
          (toshow.offsetWidth - toshow.children[index].offsetWidth)
      ) + "px";
    toshow.children[index].style.marginBottom =
      String(Math.random() * 90 + 10) + "px";
    toshow.style.marginTop = String(Math.random() * 1) + "vh";
  }
}

function hiddenBoxToggle(e) {
  if (e.classList.contains("window-clicked")) {
    e.classList.remove("window-clicked");
  } else {
    e.classList.add("window-clicked");
  }
}

function latency() {
  console.log('lag');
}

window.onload = () => {
  // variable declaration
  zindex = 0;
  cPage = null;

  // lazy load
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  // adding onclick for clickable windows
  for (
    let index = 1;
    index < document.getElementsByClassName("window").length;
    index++
  ) {
    document.getElementsByClassName("window")[index].onclick = function() {
      hiddenBoxToggle(this);
    };
  }
};