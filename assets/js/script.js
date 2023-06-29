'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function sortList() {
  var list = document.getElementById("myList");
  var items = list.getElementsByTagName("li");
  var arr = Array.from(items);

  arr.sort(function (a, b) {
    return a.innerHTML.localeCompare(b.innerHTML);
  });

  for (var i = 0; i < arr.length; i++) {
    list.appendChild(arr[i]);
  }
}

function listup() {
  var list = document.getElementById("myList");
  list.innerHTML = "";

  var items = [
    "Operating Systems",
    "Data Structures",
    "Algorithms",
    "System Programming",
    "Programming Languages (Compiler & Functional Programming)",
    "Introduction to Databases",
    "Introduction to Computer Architecture",
    "Seminar in Computer Engineering",
    "etc..",

    "Calculus 1",
    "Calculus 2",
    "Linear Algebra",
    "Big Data and Statistics",
    "Engineering Economics",
    "Engineering Mathematics 1",
    "Engineering Mathematics 2",
    "Signals and Systems",
    "Machine Learning and Deep Learning",
    "Introduction to Automatic Control",
    "Robust System Design with Big Data Analytics and Artificial Intelligence",
    "Engineering Numerical Analysis",
    "Fundamentals of Data Analytics",
    "etc..",

    "IoT Projects (NoSQL & IoT)",
    "Open Source Software Practice",
    "Java Programming Lab (OOP: Java)",
    "Logic Design Laboratory (HDL: Verilog)",
    "Electronic and Electrical Programming Laboratory",
    "The Fourth Industrial Revolution and Career Exploration",
    "The Fourth Industrial Revolution and Startup Business",
    "Entrepreneurship and Leadership",
    "etc.."
  ];

  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(items[i]));
    list.appendChild(li);
  }
}

function searchList() {
  var input = document.getElementById("searchInput").value;
  var list = document.getElementById("myList");
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var text = item.innerText;

    var regex = new RegExp(input, "i");
    if (regex.test(text)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}