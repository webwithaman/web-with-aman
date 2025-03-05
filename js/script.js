document.documentElement.style.setProperty(
  "--designationWidth",
  getComputedStyle(document.querySelector(".designation")).width
);

//////////////////////////// Js For All Pages ////////////////////////////

// Get Icons For Change Themes And Mode
const showThemeColorsBtn = document.querySelector(".show-theme-colors-icon");
const changeModeBtn = document.querySelector(".change-mode-icon");

// Add Click Event On ChangeModeBtn to Change Mode (Dark Mode or Light Mode)
changeModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  this.firstElementChild.classList.toggle("fa-sun");
  this.firstElementChild.classList.toggle("fa-moon");
});

// Function to Animate Aman Name
function animateAmanName() {
  const amanName = document.querySelector(".hero-left h1 span");
  amanName.classList.remove("animate-aman-name");
  setTimeout(function () {
    amanName.classList.add("animate-aman-name");
  }, 0);
}

// Add Click Event On showThemeColorsBtn to Change Display Theme Colors
showThemeColorsBtn.addEventListener("click", function () {
  const themeChangeBox = document.querySelector(".theme-change-box");
  const themeColorsBox = document.querySelector(".theme-colors-box");

  themeChangeBox.classList.toggle("change-right");

  // Show Theme Colors Options
  if (getComputedStyle(themeColorsBox).maxWidth == "0px")
    themeColorsBox.style.maxWidth = themeColorsBox.scrollWidth + "px";
  else themeColorsBox.style.maxWidth = 0;

  // Apply Selected Theme
  const themeColors = document.querySelectorAll(".colors span");
  themeColors.forEach(function (themeColor) {
    themeColor.addEventListener("click", function () {
      document.documentElement.style.setProperty(
        "--active-theme",
        getComputedStyle(this).backgroundColor
      );
      animateAmanName();
    });
  });
});

// Function to Generate Random Number Between Two Numbers
function randomBetweenMtoN(lowerNum, upperNum) {
  return Math.floor(Math.random() * (upperNum - lowerNum + 1) + lowerNum);
}

// Get Nav Links
let navLinks = document.querySelectorAll(".aside-nav-links li a");
navLinks = Array.from(navLinks);
navLinks.shift();

// Add Event Listner On Nav Links to Display Appropriate Page
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {
    // Prevent Default Behaiour
    event.preventDefault();

    document.querySelector(".aside-nav").classList.remove("show-navbar");

    if (!this.classList.contains("active-nav-link"))
      showPage(this.getAttribute("href"));
  });
});

// Function to Display Page
function showPage(page) {
  const pages = document.querySelectorAll(".pages-container > .page");

  for (let i = 0; i < pages.length; i++) {
    navLinks[i].classList.remove("active-nav-link");
    pages[i].classList.remove("active-page");
  }

  document
    .querySelector(`.aside-nav-links li a[href="${page}"]`)
    .classList.add("active-nav-link");

  document
    .querySelector(`.pages-container section${page}`)
    .classList.add("active-page");
}

// Get All Buttons that Requires Redirection to Another Page
const redirectBtns = document.querySelectorAll("a[data-redirect]");

// Add Event Lisnter on showContactPageBtns to Show Contact Page When Clicked
redirectBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    // Prevent Default Behaiour
    event.preventDefault();

    if (
      !document
        .querySelector(
          `.aside-nav-links li a[href='${btn.getAttribute("href")}']`
        )
        .classList.contains("active-nav-link")
    ) {
      showPage(this.getAttribute("href"));
    }
  });
});

//////////////////////////// Js For About Page ////////////////////////////

// Get About Info Open Btns
const aboutInfoOpenBtns = document.querySelectorAll(".about-info-open-btn");

// Add Event Listner On About Info Open Btn to Show About Info
aboutInfoOpenBtns.forEach(function (aboutInfoOpenBtn) {
  aboutInfoOpenBtn.addEventListener("click", function () {
    this.firstElementChild.classList.toggle("fa-minus");
    this.firstElementChild.classList.toggle("fa-plus");

    const aboutInfoContent = this.parentElement.nextElementSibling;
    if (getComputedStyle(aboutInfoContent).maxHeight == "0px")
      aboutInfoContent.style.maxHeight = aboutInfoContent.scrollHeight + "px";
    else aboutInfoContent.style.maxHeight = 0;
  });
});

// Get All Projects Container to Append and Show Projects
const allProjectsContainer = document.querySelector(".all-projects-container");

// Function to Display Given Categories Projects
function displayGivenCategoryProjects(projectsOfAnyCategory) {
  // Create Inner Projects Container And Append to All Projects Container
  const innerProjectsContainer = document.createElement("div");
  innerProjectsContainer.className =
    "inner-projects-container sub-sec-margin-bottom";
  allProjectsContainer.appendChild(innerProjectsContainer);

  // Create Projects Category Heading And Append to Inner Projects Container
  const projectsCategoryHeading = document.createElement("h3");
  projectsCategoryHeading.classList.add("projects-category-heading");
  projectsCategoryHeading.setAttribute(
    "data-projects-category",
    `${projectsOfAnyCategory.projectsCategory}`
  );
  projectsCategoryHeading.innerHTML = `<i class="fa-solid fa-star"></i> ${projectsOfAnyCategory.projectsCategory} Projects`;
  innerProjectsContainer.appendChild(projectsCategoryHeading);

  // Create Project Boxes Container And Append to Inner Projects Container
  const projectsBoxesContainer = document.createElement("div");
  projectsBoxesContainer.classList.add("projects-boxes-container");
  innerProjectsContainer.appendChild(projectsBoxesContainer);

  // Function to Display Given Projects List Boxes
  function displayProjectsListBoxes(projectsList) {
    projectsList.forEach(function (project, projectIndex) {
      // Create Project Box
      const projectBox = document.createElement("div");
      projectBox.classList.add("project-box");
      if (projectIndex > 2) projectBox.classList.add("hide-project");

      // Set Inner Content of Project Box
      projectBox.innerHTML = `
              <div class="project-thumbnail-box">
              <img src="${project.projectThumbnailSrc}">
              </div>
              <h4 class="project-title">${project.projectTitle}</h4>
              <div class="project-view-btns-group">
                 <a target="_blank" class="project-view-btn" href="${project.viewProjectLiveUrl}">view live <i
                       class="fa-solid fa-arrow-right"></i></a>
                 <a target="_blank" class="project-view-btn" href="${project.viewProjectCodeUrl}">view code <i
                       class="fa-solid fa-arrow-right"></i></a>
              </div>
              `;

      // Add Event on Thumbnail to Redirect to Live Project
      projectBox.querySelector(".project-thumbnail-box").onclick = function () {
        window.open(`${project.viewProjectLiveUrl}`, "_blank");
      };

      // Append to Project Boxes Container
      projectsBoxesContainer.appendChild(projectBox);
    });
  }

  displayProjectsListBoxes(projectsOfAnyCategory.projectsList);

  // Create Show More Projects Btn If There Are More Than 3 Projects
  if (projectsOfAnyCategory.projectsList.length > 3) {
    const moreProjectsBtn = document.createElement("button");
    moreProjectsBtn.className = "primary-btn more-projects-btn";
    moreProjectsBtn.innerText = "show more";

    // Append to Inner Projects Container
    innerProjectsContainer.appendChild(moreProjectsBtn);

    // Add Event Listner On Show More Projects Btn to Display More Projects
    moreProjectsBtn.addEventListener("click", function () {
      if (this.innerText.toLocaleLowerCase() == "show more")
        this.innerText = "show less";
      else this.innerText = "show more";

      const projectBoxes =
        this.previousElementSibling.querySelectorAll(".project-box");

      projectBoxes.forEach(function (projectBox, projectBoxIndex) {
        if (projectBoxIndex > 2) projectBox.classList.toggle("hide-project");
      });
    });
  }
}

// Fetch Projects from JSON file
fetch("projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // Process the data
    data.forEach(function (projectsCategory) {
      displayGivenCategoryProjects(projectsCategory);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Function to Display Projects of Searching Category
function displayProjectsOfSearchedCategory() {
  // Get Projects Category Headings
  const projectsCategoryHeadings = document.querySelectorAll(
    ".projects-category-heading"
  );
  const searchedValue = projectSearchField.value;

  projectsCategoryHeadings.forEach(function (projectsCategoryHeading) {
    if (
      projectsCategoryHeading
        .getAttribute("data-projects-category")
        .indexOf(searchedValue.toLocaleLowerCase()) < 0
    )
      projectsCategoryHeading.parentElement.style.display = "none";
    else projectsCategoryHeading.parentElement.style.display = "block";
  });
}

// Get Search Box And Input to Display Searched Projects
const projectSearchBar = document.querySelector(".project-search-bar");
const projectSearchField = document.getElementById("project-search-field");

projectSearchBar.addEventListener("mouseover", function () {
  projectSearchField.focus();
});

projectSearchBar.addEventListener("mouseout", function () {
  projectSearchField.blur();
});

projectSearchField.addEventListener("input", function (event) {
  displayProjectsOfSearchedCategory();
});

// Mobile Toggle
let mobileToggle = document.querySelector(".mobile-toggle");
let navbar = document.querySelector(".aside-nav");
let closeNav = document.querySelector(".close-nav");

mobileToggle.addEventListener("click", function () {
  navbar.classList.add("show-navbar");
});

closeNav.addEventListener("click", function () {
  navbar.classList.remove("show-navbar");
});

// Music Functionality
const songsList = [
  {
    songUrl: "assets/music/song-3.mp3",
  },
  {
    songUrl: "assets/music/song-7.mp3",
  },
  {
    songUrl: "assets/music/song-1.mp3",
  },
  {
    songUrl: "assets/music/song-5.mp3",
  },
  {
    songUrl: "assets/music/song-2.mp3",
  },
  {
    songUrl: "assets/music/song-8.mp3",
  },
  {
    songUrl: "assets/music/song-4.mp3",
  },
  {
    songUrl: "assets/music/song-6.mp3",
  },
];

let musicPlayIcon = document.querySelector(".music-play-icon");
let previousSongIcon = document.querySelector(".previous-song-icon");
let nextSongIcon = document.querySelector(".next-song-icon");
let songIndex = 0,
  isMusicOn = false,
  song = new Audio(`${songsList[songIndex].songUrl}`);

musicPlayIcon.addEventListener("click", function () {
  if (!isMusicOn) {
    isMusicOn = true;
    song.play();
    song.loop = true;
    this.firstElementChild.setAttribute("name", "pause-circle");
  } else {
    isMusicOn = false;
    song.pause();
    this.firstElementChild.setAttribute("name", "play-circle");
  }
});

previousSongIcon.onclick = function () {
  if (isMusicOn) {
    song.pause();
    songIndex = songIndex ? --songIndex : songsList.length - 1;
    song = new Audio(`${songsList[songIndex].songUrl}`);
    song.play();
  }
};

nextSongIcon.onclick = function () {
  if (isMusicOn) {
    song.pause();
    songIndex = songIndex == songsList.length - 1 ? 0 : ++songIndex;
    song = new Audio(`${songsList[songIndex].songUrl}`);
    song.play();
  }
};
