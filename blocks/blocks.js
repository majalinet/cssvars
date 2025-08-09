// Header, Hero, breadcrumb, Content, Feature, Contact, CTA, Footer, Blog, E-commerce, Gallery, List, Navigation, 
// Step, Team, Pricing, Product, Section, Testimonial, Video, Statistic, portfolio,

const blocks = [
    {
        name: "Header",
        items: [
            {   
                title: "Header 1",
                description: "Description for item 1",
                code: `
        <div class="main-nav p1 nav-top-border-hover">
        <div class="main-menu">
            <a href="#" id="logo1">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem">
            </a>
            <label for="toggle-1" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </label>
            <input type="checkbox" id="toggle-1">
            <nav class="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact" class="bold">Contact</a></li>
                </ul>
            </nav>
        </div>
        </div>`
            },
            {   
                title: "Header 2",
                description: "Description for item 1",
                code: `
<div class="bga-color-1 p-1-2 row justify-content-end">
    <span class="small m-r-2">
    <svg viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill">
        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z">
        </path>
    </svg>
      (123) 456-78-90</span>
    <span class="small m-r-1">
    <svg viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill">
        <path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"></path>
    </svg>
    mail@example.com</span>
    </div>
    <div class="main-nav nav-top-border-hover">
        <div class="main-menu">
            <a href="#" id="logo1">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem">
            </a>
            <label for="toggle-1" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </label>
            <input type="checkbox" id="toggle-1">
            <nav class="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact" class="bold">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>`
            },
            {   
                title: "Header 3",
                description: "Description for item 3",
                code: `
           <div class="main-nav p1">
        <div class="main-menu  bga-color-1 rounded">
            <a href="#" id="logo1">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2">
            </a>
            <label for="toggle-1" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </label>
            <input type="checkbox" id="toggle-1">
            <nav class="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact" class="bold">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>`
            },
            {   
                title: "Header 4",
                description: "Description for item 4",
                code: `
                    <div class="main-nav p1 rounded">
        <div class="main-menu bg-dark rounded">
            <a href="#" id="logo1">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2">
            </a>
            <label for="toggle-1" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </label>
            <input type="checkbox" id="toggle-1">
            <nav class="nav ">
                <ul>
                    <li><a href="#about" class="white">About</a></li>
                    <li><a href="#portfolio" class="white">Portfolio</a></li>
                    <li><a href="#services" class="white">Services</a></li>
                    <li><a href="#gallery" class="white">Gallery</a></li>
                    <li><a href="#contact" class="white bold">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>`
            },
            {   
                title: "Header 5",
                description: "Description for item 5",
                code: `
    <div class="main-nav p1 rounded">
        <div class="main-menu rounded row ">
          <div class="col-2">
            <a href="#" id="logo1">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2 shadow-3 p0 rounded">
            </a>
          </div>


            <div class="col-10 col-md-6">
              <label for="toggle-1" class="toggle-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon-color-1-fill icon-s" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
              </label>
              <input type="checkbox" id="toggle-1">
              <nav class="nav">
                  <ul class="shadow-3 p0 rounded">
                      <li><a href="#about" class="">About</a></li>
                      <li><a href="#portfolio" class="">Portfolio</a></li>
                      <li><a href="#services" class="">Services</a></li>
                      <li><a href="#gallery" class="">Gallery</a></li>
                      <li><a href="#contact" class=" bold">Contact</a></li>
                  </ul>
              </nav>
            </div>

            <div class="col-2 col-md-4 col-lg-4">
              <nav class="nav">
                  <ul class=" shadow-3 p0 rounded">
                      <li><a href="#gallery">Login</a></li>
                      <li><a href="#contact">Sign Up</a></li>
                  </ul>
              </nav>
            </div>
        </div>
    </div>`
            },
        ]
    },
    {
        name: "Hero",
        items: [
            {
                title: "Hero 1",
                description: "Description for item 1",
                code: `<div class="row h-100-vh p2 m-v-auto">
  <div class="row m-v-auto">
    <div class="col-md-5 m-v-auto p2">
      <p class="grey text-uppercase bold">Free 30 days trial</p>
      <h1 class="black  bold">The best way<br> to showcase<br> your project.</h1>
      <p class="dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqua.</p>
      <div>            
        <a href="#" class="button button-lg" target="_blank">Try for free</a>
        <a href="#" class="button button-lg color-1 outline-color-1 bg-white">How it works</a>
      </div>
    </div>
    <div class="col-md-7 m-v-auto">
        <img src="../img/blocks/technology.jpg" class="img-responsive rounded">
    </div>
  </div>
</div>`
            },
            {
                title: "Hero 2",
                description: "Description for item 2",
                code: `<div class="row h-75-vh">
  <div class="m-auto">
        <div class="p1 m-auto img-container">
        <img src="../img/blocks/technology.jpg" class="rounded img-responsive">
        </div>
    <div class="m-v-auto center">
      <h1 class="black bold h2">The best way to showcaseyour project.</h1>
      <p class="dark font-weight-400 m-v-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqua.</p>
      <div>            
        <a href="#" class="button button-lg" target="_blank">Try for free</a>
        <a href="#" class="button button-lg color-1 outline-color-1 bg-white">How it works</a>
      </div>
    </div>
  </div>
</div>`
            },
            {
                title: "Hero 3",
                description: "Description for item 3",
                code: `<div class="row h-100-vh p2 m-v-auto">
  <div class="row m-v-auto">
        <div class="col-md-6 p2">
        <img src="../img/blocks/technology.jpg" class="img-responsive rounded">
    </div>
    <div class="col-md-6 m-v-auto p2">
      <p class="grey text-uppercase bold">Free 30 days trial</p>
      <h1 class="black  bold">The best way<br> to showcase<br> your project.</h1>
      <p class="dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor.</p>
      <div>            
        <a href="#" class="button button-lg" target="_blank">Try for free</a>
        <a href="#" class="button button-lg color-1 outline-color-1 bg-white">How it works</a>
      </div>
    </div>
  </div>
</div>`
            },
            {
                title: "Hero 4",
                description: "Description for item 4",
                code: `<div class="p3 h-75-vh m-v-2">
  <div class="row">
    <div class="col-md-7 m-v-auto p2">
      <p class="grey text-uppercase bold">Free 30 days trial</p>
      <h1 class="black bold">The best way to showcase<br> your project.</h1>
      <p class="dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <div class="row align-items-center">
        <div class="col-md-6 p-1-2">
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="col-md-3 p-1-2">
            <button class="button m-1-16 bg-black">Subscribe</button>
        </div>
      </div>
      <div class="row m-v-2">
                      <div class="col-3 p-1-8">
                          <div class="bg-light-grey p-1-4 brightness-90-hover rounded">
                              <div class="row">
                                  <div class=" col-3 p-1-4">
                                      <svg viewBox="0 0 24 24" class="icon-s icon-black-fill">
                                          <path  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path>
                                      </svg>
                                  </div>
                                  <div class="col-9 p-1-4">
                                      <div class="black p0 small">Get it on</div>
                                      <div class="p0 m0"><span class="p bold black">Google</span> <span class="dark p">Play</span></div>
                                  </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-3 p-1-8">
                          <div class="bg-light-grey p-1-4 brightness-90-hover rounded">
                              <div class="row">
                                  <div class=" col-3 p-1-4">
                                      <svg viewBox="0 0 24 24" class="icon-s icon-black-fill">
                                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"></path>
                                      </svg>
                                  </div>
                                  <div class="col-9 p-1-4">
                                      <div class="black p0 small">Download on</div>
                                      <div class="p0 m0"><span class="p bold black">App Store</span></div>
                                  </div>
                              </div>
                            </div>
                      </div>

                    <div class="col-3 p-1-8">
                        <div class="bg-light-grey p-1-4 brightness-90-hover rounded">
                            <div class="row">
                                <div class=" col-3 p-1-4">
                                    <svg viewBox="0 0 24 24" class="icon-s icon-black-fill">
                                        <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z"></path>
                                    </svg>
                                </div>
                                <div class="col-9 p-1-4">
                                    <div class="black p0 small">Download on</div>
                                    <div class="p0 m0"><span class="p bold black">Windows</span></div>
                                </div>
                            </div>
                          </div>

                  </div>
      </div>
    </div>
    <div class="col-md-5 m-v-auto p0 m0">
        <img src="../img/blocks/technology.jpg" class=" img-responsive rounded" alt="alt text">
    </div>
  </div>
</div>`
            },
            {
                title: "Hero 5",
                description: "Description for item 5",
                code: `<div class="h-100-vh d-flex flex-column justify-content-center bg-light-grey" style="background-image: url('../img/blocks/portfolio-1.jpg'); background-size: cover;">
    <h1 class="center black font-weight-600 display-3">Welcome to our adventure</h1>
    <h5 class="center black font-weight-400">A place where amazing things get done!</h5>
  <div class="center m-t-2"> 
    <a href="#" class="button button-lg bg-black whilte" target="_blank">Get Started</a>
    <a href="#" class="button button-lg black outline-black bg-white">Learn more</a>
  </div>
</div>`
            },
            {
                title: "Hero 6",
                description: "Description for item 6",
                code: `<div class="h-75-vh d-flex flex-column justify-content-center shadow-3">
  <div class="container m-t-6">
    <p class="d-inline font-weight-600 left bga-success">Our Blog</p>
    <h1 class="bold display-2 black left m-t-2">Resources for businesses</h1>
    <p class="left m-t-2 dark font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  </div>
</div>`
            },
            {
                title: "Hero 7",
                description: "Description for item 7",
                code: `<div class="h-75-vh d-flex flex-column bga-info" style="background-size: cover;">
  <div class="container m-t-4">
    <div class="row">
      <div class="col-md-6">
        <img src="../img/blocks/portfolio-1.jpg" class="rounded img-responsive m-b-2" alt="Design Company">
      </div>
      <div class="col-md-6 p-l-3">
        <p class="m-t-2"><span class="badge dark font-weight-400">
            March 7, 2023</span> <span class="badge  bg-color-1 white ">Web Design</span>
        </p>
        <h1 class="left dark display-3 bold m-t-2">The 10 Best Web<br>Design Tools</h1>
        <h5 class="m-t-2"><img src="../img/blocks/u12.jpg" class="circle icon-s"> <span class="badge">John Doe
          </span>
        </h5>
      </div>
    </div>
  </div>
</div>`
            },
            {
                title: "Hero 8",
                description: "Description for item 8",
                code: `<div class="carousel p0 h-100-vh">
  <input type="radio" name="slides" id="radio-1" class="radio-1" checked="">
  <input type="radio" name="slides" id="radio-2" class="radio-2">
  <input type="radio" name="slides" id="radio-3" class="radio-3">
  <input type="radio" name="slides" id="radio-4" class="radio-4">
  <ul class="slides" style="height: 100%;">
    <li>
      <div class="h-100 d-flex align-items-center justify-content-center"
        style="background-image: url('../img/blocks/laptop.jpg'); background-size: cover;">
        <div class="col-9 col-lg-3 bg-black white center p1">
          <h2 class="white">Slide 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</p>
        </div>
      </div>
    </li>
    <li>
      <div class="h-100 d-flex align-items-center justify-content-center"
        style="background-image: url('../img/blocks/achievement.jpg'); background-size: cover;">
        <div class="col-9 col-lg-3 bg-black white center p1">
          <h2 class="white">Slide 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</p>
        </div>
      </div>
    </li>
    <li>
      <div class="h-100 d-flex align-items-center justify-content-center"
        style="background-image: url('../img/blocks/technology.jpg'); background-size: cover;">
        <div class="col-9 col-lg-3 bg-black white center p1">
          <h2 class="white">Slide 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</p>
        </div>
      </div>
    </li>
    <li>
      <div class="h-100 d-flex align-items-center justify-content-center"
        style="background-image: url('../img/blocks/portfolio-1.jpg'); background-size: cover;">
        <div class="col-9 col-lg-3 bg-black white center p1">
          <h2 class="white">Slide 4</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</p>
        </div>
      </div>
    </li>
  </ul>
  <div class="slidesNavigation m-v-2">
    <label for="radio-1" id="dotForRadio-1"></label>
    <label for="radio-2" id="dotForRadio-2"></label>
    <label for="radio-3" id="dotForRadio-3"></label>
    <label for="radio-4" id="dotForRadio-4"></label>
  </div>
</div>`
            },
        ]
    }
]

const blockList = document.getElementById("blocksList")
for (const block of blocks) {
    const categoryHeader = document.createElement("p")
    categoryHeader.className = "text-uppercase font-semibold m-b-0"
    categoryHeader.textContent = block.name;
    blockList.appendChild(categoryHeader);

    for (const item of block.items) {
        const itemListItem = document.createElement("p");
        itemListItem.textContent = `${item.title}`;
        blockList.appendChild(itemListItem);
        itemListItem.addEventListener("click", () => {loadBlock(item.title)})
    }
}

function findItemByTitle(title) {
    for (const block of blocks) {
        for (const item of block.items) {
            if (item.title === title) {
                return item;
            }
        }
    }
    return null;
}

function loadBlock(title) {
    const previewPanelMain = document.getElementById("previewPanelMain")
    const blockItem = findItemByTitle(title)
    previewPanelMain.innerHTML = blockItem.code
}

function switchTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
}

function copyCode() {
    const previewPanelMain = document.getElementById("previewPanelMain")
    const code = previewPanelMain.innerHTML
    navigator.clipboard.writeText(code)
    // Show a message to the user
    const msg = document.getElementById("msg-1")
    msg.classList.remove("d-none")
    setTimeout(() => {
        msg.classList.add("d-none")
    }, 3000)
}