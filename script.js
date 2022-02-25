//Dom Vars
const albumLink = document.getElementById("album");
const homeLink = document.getElementById("home");
const merchLink = document.getElementById("merch");
const ticketLink = document.getElementById("tickets");
const aboutLink = document.getElementById("about");
const albumSection = document.getElementById("album-section");
const homeSection = document.getElementById("home-section");
const ticketSection = document.getElementById("ticket-section");
const merchSection = document.getElementById("merch-section");
const aboutSection = document.getElementById("about-section");
const wrapper = document.getElementById("wrapper");
//Text
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");
const span5 = document.getElementById("span5");
const span6 = document.getElementById("span6");
const span7 = document.getElementById("span7");
const span8 = document.getElementById("span8");
const span9 = document.getElementById("span9");
const span10 = document.getElementById("span10");
const span11 = document.getElementById("span11");
const span12 = document.getElementById("span12");

const firstPhrase = document.getElementById("first-phrase");
const secondPhrase = document.getElementById("second-phrase");

//Nav toggles
albumLink.addEventListener("click", () => {
  wrapper.style.backgroundImage = "url('assets/album.jpg')";
  wrapper.style.backgroundPosition = "center";
  albumSection.style.display = "flex";
  ticketSection.style.display = "none";
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  merchSection.style.display = "none";
});

ticketLink.addEventListener("click", () => {
  wrapper.style.backgroundImage = "url('assets/crowd.jpg')";
  wrapper.style.backgroundPosition = "center";
  albumSection.style.display = "none";
  ticketSection.style.display = "flex";
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  merchSection.style.display = "none";
});

aboutLink.addEventListener("click", () => {
  wrapper.style.backgroundImage = "url('assets/band.jpg')";
  wrapper.style.backgroundPosition = "center";
  albumSection.style.display = "none";
  ticketSection.style.display = "none";
  homeSection.style.display = "none";
  aboutSection.style.display = "flex";
  merchSection.style.display = "none";
});

merchLink.addEventListener("click", () => {
  albumSection.style.display = "none";
  ticketSection.style.display = "none";
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  merchSection.style.display = "flex";
});

homeLink.addEventListener("click", () => {
  wrapper.style.backgroundImage = "url('assets/deadbolts.jpeg')";
  wrapper.style.backgroundPosition = "unset";
  albumSection.style.display = "none";
  ticketSection.style.display = "none";
  homeSection.style.display = "flex";
  aboutSection.style.display = "none";
  merchSection.style.display = "none";
});

const startUp = () => {
  albumSection.style.display = "none";
  merchSection.style.display = "none";
  aboutSection.style.display = "none";
  ticketSection.style.display = "none";
  colorExecOrder();
};

const colorChangeFunc = (spanVar) => {
  if (spanVar.style.color == "white") {
    spanVar.style.color = "black";
  } else {
    spanVar.style.color = "white";
  }
};

//Required counter for function to cycle
let counter = 1;

const colorChangeFunc2 = (spanVar) => {
  if (counter % 2 == 0) {
    spanVar.style.color = "black";
    spanVar.style.textShadow = "3px 3px 3px #27ae60";
    counter++;
  } else if (counter == 1) {
    spanVar.style.color = "#d35400";
    spanVar.style.textShadow = "3px 3px 3px #2c3e50";
    counter++;
  } else if (counter == 3) {
    spanVar.style.color = "#16a085";
    spanVar.style.textShadow = "3px 3px 3px #2c3e50";
    counter++;
  } else {
    spanVar.style.color = "#f39c12";
    spanVar.style.textShadow = "3px 3px 3px #2c3e50";
    counter = 0;
  }
};

const colorExecOrder = () => {
  colorChangeFunc(span1);
  colorChangeFunc(span2);
  colorChangeFunc(span3);
};

const colorExecOrder2 = () => {
  colorChangeFunc(span4);
  colorChangeFunc(span5);
  colorChangeFunc(span6);
  colorChangeFunc(span7);
  colorChangeFunc2(span8);
};

startUp();

window.setInterval(colorExecOrder, 2500);

window.setInterval(colorExecOrder2, 2500);

//Toggle
let textToggle = true;
