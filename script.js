function filterWindows(group, b) {
  allGroups = document.getElementsByClassName("aGroup");
  toshow = document.getElementById(group);

  // scroll to the top of page
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  // hide all groups
  for (let index = 0; index < allGroups.length; index++) {
    allGroups[index].style.display = "none";
  }

  // if new group selected
  if (toshow != currentPage) {
    currentPage = document.getElementById(group);

    document.body.style.background = b.getAttribute("color");

    if (document.getElementsByClassName("current-nav__filters__filter")[0]) {
      document.getElementsByClassName("current-nav__filters__filter")[0].classList.remove("current-nav__filters__filter");
    } 
    b.classList.add("current-nav__filters__filter");

    document.getElementById(group).style.display = "block";
  } else {
    currentPage = null;
    b.style.background = "rgba(0,0,0,0)";
    b.classList.remove("current-nav__filters__filter");
    document.body.style.background = "white";
  }

  document.getElementById("nav--primary").style.background = b.style.background;

  // positions windows randomly horizontally and vertially using margin-top and margin-right
  for (let index = 0; index < toshow.children.length; index++) {
    console.log(toshow.offsetWidth, toshow.children[index].offsetWidth);
    toshow.children[index].style.marginRight =
      String(
        Math.random() *
          (toshow.offsetWidth - toshow.children[index].offsetWidth*1.2)
      ) + "px";
    toshow.children[index].style.marginBottom =
      String(Math.random() * 90 + 10) + "px";
    toshow.style.marginTop = String(Math.random() * 1) + "vh";
  }

  // positions grid__items horizontally using margin-left
  for (index = 0; index < document.getElementsByClassName("grid__item").length; index++) {
    document.getElementsByClassName("grid__item")[index].style.marginLeft =
      String(
        Math.random() *
        (document.getElementsByClassName("grid__col")[0].offsetWidth - document.getElementsByClassName("grid__item")[index].offsetWidth)
      ) + "px";
  }
}

function hiddenBoxToggle(e) {
  if (e.classList.contains("window--active")) {
    e.classList.remove("window--active");
  } else {
    e.classList.add("window--active");
  }
}

window.onload = () => {
  // variable declaration
  zindex = 0;
  currentPage = null;

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