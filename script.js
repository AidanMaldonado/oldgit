//DOM variables
const loginSection = document.getElementById("login-section");
const appSection = document.getElementById("app-section");
const newAppSection = document.getElementById("new-app-section");
const statusSection = document.getElementById("status-section");
const createAccSection = document.getElementById("create-acc-section");
const createAccBtn = document.getElementById("create-acc-btn");
const accSection = document.getElementById("acc-section");
const appSubmitSection = document.getElementById("app-submit-section");
const mgmtSection = document.getElementById("mgmt-section");
const mgmtStatus = document.getElementById("mgmt-status");
const statusLine = document.getElementById("status-line");
//Btns
const newBtn = document.getElementById("new-btn");
const appBtn = document.getElementById("app-btn");
//Forms
const loginForm = document.getElementById("login-form");
const newAppForm = document.getElementById("new-app-form");
//Form fields
const userField = document.getElementById("user");
const passField = document.getElementById("pass");
//Headings
const loginHeading = document.getElementById("login-heading");
//Sorting Links
const testLink = document.getElementById("test-link");
const test2Link = document.getElementById("test2-link");

//Event listeners
createAccBtn.addEventListener("click", () => {
  createAccSection.style.display = "block";
  accSection.style.display = "none";
});

testLink.addEventListener("click", () => {
  mgmtSection.style.display = "none";
  mgmtStatus.style.display = "block";
});

test2Link.addEventListener("click", () => {
  statusLine.style.display = "block";
});

//Displays app status
appBtn.addEventListener("click", () => {
  statusSection.style.display = "block";
  appSection.style.display = "none";
});

//Displays app form
newBtn.addEventListener("click", () => {
  newAppSection.style.display = "block";
  appSection.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
  if (userField.value == "user" && passField.value == "1234") {
    console.log("Logged in");
    loginSection.style.display = "none";
    appSection.style.display = "block";
  } else if (userField.value == "mgmt" && passField.value == "1234") {
    console.log("Logged in as mgmt");
    loginSection.style.display = "none";
    mgmtSection.style.display = "block";
  } else {
    console.log("Log in failed");
    loginHeading.style.color = "red";
    loginHeading.innerHTML = "Incorrect Username/Password";
  }

  userField.value = "";

  e.preventDefault();
});

newAppForm.addEventListener("submit", (e) => {
  newAppSection.style.display = "none";
  appSubmitSection.style.display = "block";
  e.preventDefault();
});

//Functions
const onStart = () => {
  appSection.style.display = "none";
  appSubmitSection.style.display = "none";
  newAppSection.style.display = "none";
  statusSection.style.display = "none";
  createAccSection.style.display = "none";
  mgmtSection.style.display = "none";
  mgmtStatus.style.display = "none";
  statusLine.style.display = "none";
};

onStart();
