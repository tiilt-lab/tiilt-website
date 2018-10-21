function filterWindows(group, b) {
  tohide = document.getElementsByClassName("aGroup");
  for (let index = 0; index < tohide.length; index++) {
    tohide[index].style.display = "none";
  }

  toshow = document.getElementById(group);

  if (toshow != cPage) {
    for (let index = 0; index < document.getElementsByClassName("filter").length; index++) {
      document.getElementsByClassName("filter")[index].style.backgroundColor = "#fff";
    }
    b.style.background = b.getAttribute("color");
    zindex += 1;
    document.getElementById(group).style.display = "block";
    document.getElementById(group).style.opacity = "1";
    document.getElementById(group).style.zIndex = zindex;
    cPage = document.getElementById(group);
  } else {
    cPage = null;''
    b.style.background = "white";
    document.getElementById(group).style.display = "none";
  }

  for (let index = 0; index < toshow.children.length; index++) {
    toshow.children[index].style.marginRight = String(Math.random() * (toshow.offsetWidth - toshow.children[index].offsetWidth)) + "px";
    toshow.children[index].style.marginBottom = String(Math.random() * 90 + 10) + "px";
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

// document.addEventListener('click', function (e) {
//   console.log(e);
//   e = e || window.event;
//   var target = e.target || e.srcElement,
//     text = target.textContent || target.innerText;
//   // if (target.classList.contains("window-clicked")) {
//   //   target.classList.remove("window-clicked");
//   // } else {
//   //   target.classList.add("window-clicked");
//   // }
//   zindex += 1;
//   target.style.zIndex = zindex;
// }, false);

// add margin-top to sections
// for (
//   let index = 0;
//   index < document.getElementsByClassName("aGroup").length;
//   index++
// ) {
//   // document.getElementsByClassName("aGroup")[index].style.Top = String(Math.random() * 15) + "vh";

//   for (let index2 = 0; index < document.getElementsByClassName("aGroup")[index].children.length; index++) {
//     // document.getElementsByClassName("aGroup")[index].children[index2].style.marginRight = String(Math.random() * 15) + "vw";
//     // document.getElementsByClassName("aGroup")[index].children[index2].style.marginBottom = String(Math.random() * 150) + "px";
//   }
// }
