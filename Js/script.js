//////////////////////////// Js For All Pages ////////////////////////////

// Get Icons For Change Themes And Mode
const showThemeColorsBtn = document.querySelector(".show-theme-colors-icon");
const changeModeBtn = document.querySelector(".change-mode-icon")


// Add Click Event On ChangeModeBtn to Change Mode (Dark Mode or Light Mode)
changeModeBtn.addEventListener('click', function () {
  document.body.classList.toggle("light-mode");
  this.firstElementChild.classList.toggle("fa-sun");
  this.firstElementChild.classList.toggle("fa-moon");
})


// Function to Animate Aman Name
function animateAmanName() {
  const amanName = document.querySelector(".hero-left h1 span");
  amanName.classList.remove("animate-aman-name");
  setTimeout(function () {
    amanName.classList.add("animate-aman-name");
  }, 0)
}


// Add Click Event On showThemeColorsBtn to Change Display Theme Colors
showThemeColorsBtn.addEventListener('click', function () {
  const themeColorsBox = document.querySelector(".theme-colors-box");

  // Show Theme Colors Options
  if (getComputedStyle(themeColorsBox).maxWidth == "0px")
    themeColorsBox.style.maxWidth = themeColorsBox.scrollWidth + 'px';
  else
    themeColorsBox.style.maxWidth = 0;

  // Apply Selected Theme
  const themeColors = document.querySelectorAll(".colors span");
  themeColors.forEach(function (themeColor) {
    themeColor.addEventListener('click', function () {
      document.documentElement.style.setProperty("--active-theme", getComputedStyle(this).backgroundColor);
      animateAmanName();
    })
  })

})


// Function to Generate Random Number Between Two Numbers
function randomBetweenMtoN(lowerNum, upperNum) {
  return (Math.floor(Math.random() * (upperNum - lowerNum + 1) + lowerNum));
}


// Get Nav Links 
const navLinks = document.querySelectorAll(".aside-nav-links li a");

// Add Event Listner On Nav Links to Display Appropriate Page 
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {

    // Prevent Default Behaiour
    event.preventDefault();

    if (!this.classList.contains("active-nav-link"))
      showPage(this.getAttribute("href"));

  })
})

// Function to Display Page
function showPage(page) {
  const pages = document.querySelectorAll(".pages-container > .page");

  for (let i = 0; i < pages.length; i++) {
    navLinks[i].classList.remove("active-nav-link");
    pages[i].classList.remove("active-page");
  }

  document.querySelector(`.aside-nav-links li a[href="${page}"]`).classList.add("active-nav-link");
  document.querySelector(`.pages-container section${page}`).classList.add("active-page");
}


// Get All Buttons that Requires Redirection to Another Page
const redirectBtns = document.querySelectorAll("a[data-redirect]");

// Add Event Lisnter on showContactPageBtns to Show Contact Page When Clicked
redirectBtns.forEach(function (btn) {
  btn.addEventListener('click', function (event) {

    // Prevent Default Behaiour
    event.preventDefault();

    if (!document.querySelector(`.aside-nav-links li a[href='${btn.getAttribute("href")}']`).classList.contains("active-nav-link")) {
      showPage(this.getAttribute("href"));
    }

  })
})



//////////////////////////// Js For About Page ////////////////////////////


// Get About Info Open Btns
const aboutInfoOpenBtns = document.querySelectorAll(".about-info-open-btn");

// Add Event Listner On About Info Open Btn to Show About Info
aboutInfoOpenBtns.forEach(function (aboutInfoOpenBtn) {
  aboutInfoOpenBtn.addEventListener('click', function () {

    this.firstElementChild.classList.toggle("fa-minus");
    this.firstElementChild.classList.toggle("fa-plus");

    const aboutInfoContent = this.parentElement.nextElementSibling;
    if (getComputedStyle(aboutInfoContent).maxHeight == "0px")
      aboutInfoContent.style.maxHeight = aboutInfoContent.scrollHeight + 'px';
    else
      aboutInfoContent.style.maxHeight = 0;

  })
})


//////////////////////////// Js For Projects Page ////////////////////////////


// list of All Categories Projects Details
const allCategoriesProjectsDetails = [
  {
    projectsCategory: "html",
    projectsList: [
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-1.jpg",
        projectTitle: "simple portfolio website",
        viewProjectLiveUrl: "https://amansimpleportfolio.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/portfolio-using-only-html"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-2.png",
        projectTitle: "simple blogs website",
        viewProjectLiveUrl: "https://blogwebsitebyaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/blog-website-using-only-html"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-3.jpg",
        projectTitle: "simple music website",
        viewProjectLiveUrl: "https://musicwebsitebyaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/music-website-using-only-html"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-4.svg",
        projectTitle: "calender using tables",
        viewProjectLiveUrl: "https://calenderbyaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/calender-using-html-tables"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-5.jpg",
        projectTitle: "time-table layout",
        viewProjectLiveUrl: "https://tablelayout1byaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/table-layout-1"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-6.jpg",
        projectTitle: "flag colors table layout",
        viewProjectLiveUrl: "https://tablelayout2byaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/table-layout-2"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-7.jpg",
        projectTitle: "designed time table",
        viewProjectLiveUrl: "https://tablelayout3byaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/table-layout-3"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-8.jpg",
        projectTitle: "dark table layout",
        viewProjectLiveUrl: "https://tablelayout4byaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/table-layout-4"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-9.svg",
        projectTitle: "colorful table",
        viewProjectLiveUrl: "https://tablelayout5byaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/table-layout-5"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-10.jpg",
        projectTitle: "complex table layout",
        viewProjectLiveUrl: "https://tablelayout6byaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/table-layout-6"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Projects Thumbnails/thumbnail-11.jpg",
        projectTitle: "website layout using tables",
        viewProjectLiveUrl: "https://websitelayoutusingtablesbyaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/website-layout-using-tables"
      }
    ]
  },
  {
    projectsCategory: "html css js",
    projectsList: [
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-1.jpg",
        projectTitle: "super shoes store",
        viewProjectLiveUrl: "https://supershoesstore.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Super-Shoes-Store"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-2.jpg",
        projectTitle: "gym and fitness",
        viewProjectLiveUrl: "https://gymandfitnesscenter.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Gym-And-Fitness-Responsive-Website"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-3.jpg",
        projectTitle: "tour and travels",
        viewProjectLiveUrl: "https://tourandtravelsagency.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Tour-And-Travels-Website"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-4.jpg",
        projectTitle: "animated cartoon portfolio",
        viewProjectLiveUrl: "https://animatedcartoonportfolio.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Animated-Cartoon-Portfolio"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-5.jpg",
        projectTitle: "photohd studio",
        viewProjectLiveUrl: "https://photohdstudio.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/PhotoHD-Studio-Website/tree/main"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-6.svg",
        projectTitle: "code with aman",
        viewProjectLiveUrl: "https://codewithaman06.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Code-With-Aman"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-7.jpg",
        projectTitle: "marketing with aman",
        viewProjectLiveUrl: "https://marketingwithaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Marketing-Agency-Website"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-8.jpg",
        projectTitle: "introspect website",
        viewProjectLiveUrl: "https://introspectwebsite.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/introspect-website"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-9.jpg",
        projectTitle: "online education institute",
        viewProjectLiveUrl: "https://onlineeducationinstitute.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Online-Education-Institute/tree/main"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-10.jpg",
        projectTitle: "portfolio landing page",
        viewProjectLiveUrl: "https://webwithamanlandingpage.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Portfolio-Landing-Page"
      },
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Projects Thumbnails/thumbnail-11.jpg",
        projectTitle: "netron website",
        viewProjectLiveUrl: "https://netronwebsite.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Netron-Website"
      }
    ]
  },
  {
    projectsCategory: "neogcamp",
    projectsList: [
      {
        projectThumbnailSrc: "Assets/Images/Neogcamp Projects Thumbnails/thumbnail-1.jpg",
        projectTitle: "how well you know me",
        viewProjectLiveUrl: "https://replit.com/@webwithaman/how-well-you-know-me-quiz-app?embed=1&output=1",
        viewProjectCodeUrl: "https://github.com/WebWithAman/how-well-you-know-me/tree/main"
      },
      {
        projectThumbnailSrc: "Assets/Images/Neogcamp Projects Thumbnails/thumbnail-2.jpg",
        projectTitle: "cli quiz app",
        viewProjectLiveUrl: "https://replit.com/@webwithaman/cli-quiz-app?embed=1&output=1",
        viewProjectCodeUrl: "https://github.com/WebWithAman/cli-quiz-app/tree/main"
      }
    ]
  },
  {
    projectsCategory: "html css js mini",
    projectsList: [
      {
        projectThumbnailSrc: "Assets/Images/Html Css Js Mini Projects Thumbnails/thumbnail-1.jpg",
        projectTitle: "animated auto scrolling slider",
        viewProjectLiveUrl: "https://animatedautoscrollingsliderbyaman.netlify.app",
        viewProjectCodeUrl: "https://github.com/WebWithAman/Animated-Auto-Scrolling-Slider"
      },
    ]
  },
];



// Get All Projects Container to Append and Show Projects
const allProjectsContainer = document.querySelector(".all-projects-container");

// Function to Display Given Categories Projects
function displayGivenCategoryProjects(projectsOfAnyCategory) {

  // Create Inner Projects Container And Append to All Projects Container
  const innerProjectsContainer = document.createElement("div");
  innerProjectsContainer.className = "inner-projects-container sub-sec-margin-bottom";
  allProjectsContainer.appendChild(innerProjectsContainer);

  // Create Projects Category Heading And Append to Inner Projects Container
  const projectsCategoryHeading = document.createElement("h3");
  projectsCategoryHeading.classList.add("projects-category-heading");
  projectsCategoryHeading.setAttribute("data-projects-category", `${projectsOfAnyCategory.projectsCategory}`);
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
      if (projectIndex > 2)
        projectBox.classList.add("hide-project");


      // Set Inner Content of Project Box
      projectBox.innerHTML = `
      <div class="project-thumbnail-box"></div>
      <h4 class="project-title">${project.projectTitle}</h4>
      <div class="project-view-btns-group">
         <a target="_blank" class="project-view-btn" href="${project.viewProjectLiveUrl}">view live <i
               class="fa-solid fa-arrow-right"></i></a>
         <a target="_blank" class="project-view-btn" href="${project.viewProjectCodeUrl}">view code <i
               class="fa-solid fa-arrow-right"></i></a>
      </div>
      `;

      // Add Thumbnail 
      const projectThumbnailBox = projectBox.querySelector(".project-thumbnail-box");
      projectThumbnailBox.style.cssText += ` background-image:url("${project.projectThumbnailSrc}")`;

      projectThumbnailBox.onclick = function () {
        window.open(
          `${project.viewProjectLiveUrl}`,
          '_blank'
        );
      }

      // Append to Project Boxes Container
      projectsBoxesContainer.appendChild(projectBox);
    })

  }

  displayProjectsListBoxes(projectsOfAnyCategory.projectsList);

  // Create Show More Projects Btn If There Are More Than 3 Projects
  if (projectsOfAnyCategory.projectsList.length > 3) {
    const moreProjectsBtn = document.createElement("button");
    moreProjectsBtn.className = "primary-btn more-projects-btn";
    moreProjectsBtn.innerText = "show more"

    // Append to Inner Projects Container
    innerProjectsContainer.appendChild(moreProjectsBtn);

    // Add Event Listner On Show More Projects Btn to Display More Projects
    moreProjectsBtn.addEventListener('click', function () {

      if (this.innerText.toLocaleLowerCase() == "show more")
        this.innerText = "show less";
      else
        this.innerText = "show more";


      const projectBoxes = this.previousElementSibling.querySelectorAll(".project-box");

      projectBoxes.forEach(function (projectBox, projectBoxIndex) {
        if (projectBoxIndex > 2)
          projectBox.classList.toggle("hide-project");
      })

    })
  }

}

// Display All Projects of All Categories
allCategoriesProjectsDetails.forEach(function (projectsCategory) {
  displayGivenCategoryProjects(projectsCategory);
});



// Function to Display Projects of Searching Category
function displayProjectsOfSearchedCategory() {

  // Get Projects Category Headings
  const projectsCategoryHeadings = document.querySelectorAll(".projects-category-heading");
  const searchedValue = searchProjectsInput.value;

  projectsCategoryHeadings.forEach(function (projectsCategoryHeading) {

    if (projectsCategoryHeading.getAttribute("data-projects-category").indexOf(searchedValue.toLocaleLowerCase()) < 0)
      projectsCategoryHeading.parentElement.style.display = "none";
    else
      projectsCategoryHeading.parentElement.style.display = "block";
  })
}

// Get Search Box And Input to Display Searched Projects
const projectSearchBar = document.querySelector(".project-search-bar");
const projectSearchField = document.getElementById("project-search-field");

projectSearchBar.addEventListener('mouseover', function () {
  projectSearchField.focus();
})

projectSearchBar.addEventListener('mouseout', function () {
  projectSearchField.blur();
})

projectSearchField.addEventListener("input", function (event) {
  displayProjectsOfSearchedCategory();
});



