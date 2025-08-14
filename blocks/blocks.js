// Header, Hero, breadcrumb, Content, List, Feature, CTA, Contact, Footer, Blog, E-commerce, Gallery, Navigation, 
// Step, Team, Pricing, Product, Testimonial, Video, Statistic, portfolio,

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
    },
    {
        name: "Breadcrumb",
        items: [
            {
                title: "Breadcrumb 1",
                description: "Description for Breadcrumb 1",
                code: `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb p0">
    <li class="breadcrumb-item"><a href="#"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-xs"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg></a></li>
    <li class="breadcrumb-item"><a href="#">Category</a></li>
    <li class="breadcrumb-item bold" aria-current="page">Page</li>
  </ol>
</nav>
`
            },
            {
                title: "Breadcrumb 2",
                description: "Description for Breadcrumb 2",
                code: `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb shadow-3 p-1-8">
    <li class="breadcrumb-item"><a href="#"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-xs"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg> Home</a></li>
    <li class="breadcrumb-item"><a href="#">Category</a></li>
    <li class="breadcrumb-item bold" aria-current="page">Page</li>
  </ol>
</nav>
`
            },
            {
                title: "Breadcrumb 3",
                description: "Description for Breadcrumb 3",
                code: `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb_back_slash bga-color-1 p-1-8">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#"> Category</a></li>
    <li class="breadcrumb-item bold" aria-current="page">Page</li>
  </ol>
</nav>
`
            },
            {
                title: "Breadcrumb 4",
                description: "Description for Breadcrumb 4",
                code: `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb_arrow p-1-8 border border-color-1">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#"> Category</a></li>
    <li class="breadcrumb-item bold" aria-current="page">Page</li>
  </ol>
</nav>
`
            },
        ]
    },
    {
        name: "Content",
        items: [
            {
                title: "Content 1",
                description: "Description for Content 1",
                code: `
<div class="row" id="about">
  <div class="topmargin container p-v-1">
    <h4 class="black bold center text-uppercase">About CSS Vars</h4>
    <p class="dark center display-6 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil illo
      omnis,<br> Enim nihil illo omnis libero voluptatibus.</p>
    <hr class="width-short center w-50">
  </div>
  <div class="row container">
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-8.jpg" alt="alttext" class="img-responsive">
      </a>
      <section>
        <div class="p-v-2">
          <a href="#" class="bold black p0 h6">OUR MISSION</a>
          <p class="line-height-17 dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim nihil illo omnis.
          </p>
        </div>
      </section>
    </div>
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-10.jpg" alt="alttext" class="img-responsive">
      </a>
      <section>
        <div class="p-v-2">
          <a href="#" class="bold black p0 h6">OUR FOCUS</a>
          <p class="line-height-17 dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim nihil illo omnis.
          </p>
        </div>
      </section>
    </div>
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-11.jpg" alt="alttext" class="img-responsive">
      </a>
      <section>
        <div class="p-v-2">
          <a href="#" class="bold black p0 h6">OUR VALUES.</a>
          <p class="line-height-17 dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim nihil illo omnis.
          </p>
        </div>
      </section>
    </div>
  </div>
</div>
`
            },
            {
                title: "Content 2",
                description: "Description for Content 2",
                code: `
  <div class="row m-v-10" id="services">
    <div class="topmargin container">
      <h4 class="black bold center text-uppercase topmargin">SERVICES</h4>
      <p class="dark center display-6">Our main AI and development services.
      </p>
      <hr class="width-short center w-50">
    </div>
    <div class="row justify-content-center container m-v-1">
      <div class="col-md-4 p1">
        <div class="black">
          <div class="d-flex justify-content-center">
            <i class="icon-box circle bg-black">
              <svg class="icon-m m1 icon-white-fill" viewBox="0 0 24 24">
                <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"></path>
              </svg>
            </i>
          </div>
          <h5 class="center m-v-1 text-uppercase black bold h6">AIaaS</h5>
          <p class="center m0 p0 dark font-weight-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae ad ipsam.</p>
        </div>
      </div>
      <div class="col-md-4 p1">
        <div class="black">
          <div class="d-flex justify-content-center">
            <i class="icon-box circle bg-black">
              <svg class="icon-m m1 icon-white-fill" viewBox="0 0 24 24">
                <path d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z"></path>
              </svg>
            </i>
          </div>
          <p class="center m-v-1 text-uppercase black bold h6">AI Development</p>
          <p class="center m0 p0 dark font-weight-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae ad ipsam.</p>
        </div>
      </div>
      <div class="col-md-4 p1">
        <div class=" black">
          <div class="d-flex justify-content-center">
            <i class="icon-box circle bg-black">
              <svg class="icon-m m1 icon-white-fill" viewBox="0 0 24 24">
                <path d="M20.45 17.39L12.36 21.97V18.4L17.4 15.63L20.45 17.39M21 16.89V7.31L18.04 9V15.18L21 16.89M3.55 17.39L11.64 21.96V18.4L6.6 15.63L3.55 17.39M3 16.89V7.31L5.96 9V15.18L3 16.89M3.35 6.69L11.64 2V5.45L6.33 8.37L6.28 8.39L3.35 6.69M20.65 6.69L12.36 2V5.45L17.67 8.38L17.71 8.4L20.65 6.69M11.64 17.59L6.67 14.85V9.44L11.64 12.31V17.59M12.36 17.59L17.33 14.86V9.44L12.36 12.31V17.59M7 8.81L12 6.06L17 8.81L12 11.69L7 8.81Z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </i>
          </div>
          <h5 class="center m-v-1 text-uppercase black bold h6">Web Development</h5>
          <p class="center m0 p0 dark font-weight-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae ad ipsam.</p>
        </div>
      </div>
    </div>

</div>
`
            },
            {
                title: "Content 3",
                description: "Description for Content 3",
                code: `
<div class=" bg-light-grey">
  <div class="container row p-v-3">
    <div class="col-md-6 p-h-3">
      <h3 class="left black"><strong>Who</strong> We Are</h3>
      <hr class="m0 width-short m-v-2">

      <p class="m-v-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam
        posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat
        nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.
      </p>
      <div class="container m-v-2">
        <a href="#" class="bold">Learn More →</a>
      </div>
      <p></p>
    </div>

    <div class="col-md-6 p-h-3">
      <h5 class="left display-5 black"><strong>Our</strong> Commitment</h5>
      <hr class="m0 left width-short m-v-2">


      <p class="m-v-2">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
        elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
        sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        Sed non mauris vitae erat consequat.
      </p>
    </div>
  </div>
</div>
`
            },
            {
                title: "Content 4",
                description: "Description for Content 4",
                code: `
<div class="container m-t-6">
  <h1 class="black bold display-3 center">We help and solve your<br> business problem</h1>
  <div class="row container justify-content-center m-t-2">
    <div class="col-md-4">
      <div class=" black  center p2">
        <i class="icon-box bga-color-2 circle">
          <svg viewBox="0 0 24 24" class="icon-color-2-fill icon-ml p1">
            <path
              d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z">
            </path>
          </svg>
        </i>
        <h4 class="center black bold  h5">Fast Service</h4>
        <p class="dark font-weight-400">Euismod in pellentesque massa placerat. Aliquet lectus proin nibh nisl
          condimentum id venenatis.</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class=" black  center p2">
        <i class="icon-box bga-color-2 circle">
          <svg viewBox="0 0 24 24" class="icon-color-2-fill icon-ml p1">
            <path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"></path>
          </svg>
        </i>
        <h4 class="center black bold h5">Great Support</h4>
        <p class="dark font-weight-400">Suspendisse sed nisi lacus sed. Tincidunt vitae semper quis lectus.Mi quis
          hendrerit dolor magna eget. </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class=" black center  p2">
        <i class="icon-box bga-color-2 circle">
          <svg viewBox="0 0 24 24" class="icon-color-2-fill icon-ml p1">
            <path d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"></path>
          </svg>
        </i>
        <h4 class="center black bold h5">Use it anywhere</h4>
        <p class="dark font-weight-400">Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Risus
          pretium quam vulputate. </p>
      </div>
    </div>
  </div>
  <div class="center">
    <button class="bg-color-2 white p-h-2">READ MORE</button>
  </div>
</div>
`
            },
            {
                title: "Content 5",
                description: "Description for Content 5",
                code: `
<section class="parallax-img m-t-4 h-100-vh m-auto" style="background-image: url('../img/blocks/portfolio-1.jpg');">
  <div class="h-100-vh d-flex flex-column justify-content-center align-items-center p-v-3">
    <div class="col-8 shadow-3 p3 rounded bg-white center">
        <svg class="icon-color-1-fill icon-ml" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path></svg>
        <h3 class="black bold center">We believe that people can be truly happy on the outside only after reaching happiness within.</h3>
        <p class="m-t-2 black bold h6">Victoria Perry</p>
        <p class="grey ">CEO and Co-Founder</p>
    </div>
  </div>
</section>
`
            },
            {
                title: "Content 6",
                description: "Description for Content 6",
                code: `
<section class="row m-h-3">
  <div class="col-md-6 m-t-2">
    <img src="../img/blocks/technology.jpg" class="img-responsive">
  </div>
  <div class="col-md-6">
    <div class="row">
    <div class="col-md-6">
        <div class=" black  center p2">
            <i class="icon-box bga-color-2 circle">
                <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m">
                    <path fill="color-1" d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M7.5,6A1.5,1.5 0 0,1 9,7.5A1.5,1.5 0 0,1 7.5,9A1.5,1.5 0 0,1 6,7.5A1.5,1.5 0 0,1 7.5,6M6,14L11,9L13,11L18,6V14H6Z"></path>
                </svg>
            </i>
            <p class="center black m-t-05 text-uppercase font-weight-600">PROTOTYPE AN IDEA</p>
            <p class="dark ">Euismod in pellentesque massa placerat. Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
        </div>
    </div>
    <div class="col-md-6">
        <div class=" black  center p2">
            <i class="icon-box bga-color-2 circle">
                <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m">
                    <path fill="color-1" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
                </svg>
            </i>
            <p class="center black m-t-05 text-uppercase font-weight-600">RESEARCH USER NEEDS</p>
            <p class="dark ">Euismod in pellentesque massa placerat. Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-6">
        <div class=" black  center p2">
            <i class="icon-box bga-color-2 circle">
                <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m">
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"></path>
                </svg>
            </i>
            <p class="center black m-t-05 text-uppercase font-weight-600">DESIGN A NEW PRODUCT</p>
            <p class="dark ">Euismod in pellentesque massa placerat. Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
        </div>
      </div>
      <div class="col-md-6">
          <div class=" black  center p2">
              <i class="icon-box bga-color-2 circle">
                  <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m">
                      <path fill="color-1" d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z"></path>
                  </svg>
              </i>
              <p class="center black m-t-05 text-uppercase font-weight-600">IMPROVE A PRODUCT</p>
              
              <p class="dark ">Euismod in pellentesque massa placerat. Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
          </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Content 7",
                description: "Description for Content 7",
                code: `
<section class="container p-v-3">
  <div class="m-v-2">
    <h4 class="black bold center">What We Do</h4>
    <p class="text-uppercase dark center">OUR AMAZING SERVICES</p>
  </div>
  <div class="row m-v-2">
    <div class="col-md-6 line-height-2 left p0">
      <div class="row m-v-1">
        <div class="col-md-2 p0 center">
          <svg viewBox="0 0 24 24" class="icon-s icon-color-2-fill m-v-1">
            <path
              d="M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14">
            </path>
          </svg>
        </div>

        <div class="col-md-10 p0">
          <p class="bold black h6 m0">WEB DESIGN</p>
          <p class="dark font-weight-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorem et ut
            praesentium consectetur, voluptas commodi laboriosam modi suscipit?</p>

        </div>
      </div>
      <div class="row m-v-1">
        <div class="col-md-2 p0 center">
          <svg viewBox="0 0 24 24" class="icon-s icon-color-2-fill m-v-1">
            <path
              d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z">
            </path>
          </svg>
        </div>

        <div class="col-md-10 p0">
          <p class="bold black h6 m0">MOBILE APPS</p>
          <p class="dark font-weight-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorem et ut
            praesentium consectetur, voluptas commodi laboriosam modi suscipit?</p>

        </div>
      </div>
      <div class="row m-v-1">
        <div class="col-md-2 p0 center">
          <svg viewBox="0 0 24 24" class="icon-s icon-color-2-fill m-v-1">
            <path
              d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z">
            </path>
          </svg>
        </div>

        <div class="col-md-10 p0">
          <p class="bold black h6 m0">WEB DEVELOPMENT + ECOMMERCE</p>
          <p class="dark font-weight-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            dolorem et ut
            praesentium consectetur, voluptas commodi laboriosam modi suscipit?</p>
          <button class="outline-color-1 text-uppercase bold small p-v-1 p-h-2">contact us</button>
        </div>
      </div>
    </div>

    <div class="col-md-6 row d-inline p0">
      <div class="center m-v-2">
        <img src="../img/blocks/work-10.jpg" class="col-md-4 m-v-2 p0 img-responsive">
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Content 8",
                description: "Description for Content 8",
                code: `
<section class="row container">
          <div class="col-md-6 p-v-3">
              <div class="row">
                  <div class="row m-v-1">
                      <div class="col-md-5 p0">
                          <img src="../img/blocks/worker-2.jpg" alt="alttext" class="img-responsive">
                      </div>

                      <div class="col-md-7 p0 m-v-3 position-absolute outline-light-grey bg-white right-2 top-4 w-75">
                          <div class="p-v-1 p-h-2">
                              <p class="h6 bold black text-uppercase">Long format image</p>
                              <span class="p05 bg-grey black"> 30 May </span>
                              <p class="dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit...
                              </p>
                              <a href="#" class="noHover-dark text-uppercase bold">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-md-6 p-v-3">
              <div class="row">
                  <div class="row m-v-1">
                      <div class="col-md-5 p0">
                          <img src="../img/blocks/worker-4.jpg" alt="alttext" class="img-responsive">
                      </div>

                      <div class="col-md-7 p0 m-v-3 position-absolute outline-light-grey bg-white right-2 top-4 w-75">
                          <div class="p1">
                              <p class="h6 bold black text-uppercase">Long format image</p>
                              <span class="p05 bg-grey black"> 17 Jun </span>
                              <p class="dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit...
                              </p>
                              <a href="#" class="noHover-dark text-uppercase bold">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
</section>
`
            },
            {
                title: "Content 9",
                description: "Description for Content 9",
                code: `
<section class="container m-t-6">
  <h1 class="bold black center">Benefits galore when you join</h1>
  <p class="center h6 font-weight-400 m-t-1 dark">Tortor at auctor urna nunc id. Sed elementum tempus egestas<br> sed
    sed risus pretium quam. At ultrices mi tempus.</p>
  <div class="row m-t-4">
    <div class="col-md-6">
      <div class="outline-light-grey black m05 p2">
        <div class="d-flex left m1">
          <svg viewBox="0 0 24 24" class="icon-info-fill icon-s">
            <path
              d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z">
            </path>
          </svg>
        </div>
        <h4 class="left bold black">Competitive Salary</h4>
        <p class="dark left font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, RipenApps is the
          best place to acquire the same.</p>
      </div>
    </div>

    <div class="col-md-6">
      <div class="outline-light-grey black m05 p2">
        <div class="d-flex left m1">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-info-fill icon-s" viewBox="0 0 24 24">
            <path
              d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z">
            </path>
          </svg>
        </div>
        <h4 class="left bold black">Daily Meals</h4>
        <p class="dark left font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, RipenApps is the
          best place to acquire the same.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="outline-light-grey black m05 p2">
          <div class="d-flex left m1">
            <svg viewBox="0 0 24 24" class="icon-info-fill icon-s">
              <path
                d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z">
              </path>
            </svg>
          </div>
          <h4 class="left bold black">Free Equipment</h4>
          <p class="dark left font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, RipenApps is the
            best place to acquire the same.</p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="outline-light-grey black m05 p2">
          <div class="d-flex left m1">
            <svg viewBox="0 0 24 24" class="icon-info-fill icon-s">
              <path fill="color-1"
                d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
              </path>
            </svg>
          </div>
          <h4 class="left bold black">Team Retreats</h4>
          <p class="dark left font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud, RipenApps is the
            best place to acquire the same.</p>
        </div>
      </div>

    </div>
  </div>
</section>
`
            },
        ]
    },
        {
        name: "List",
        items: [
                {
                title: "List 1",
                description: "Description for list 1",
                code: `
<section class="p-v-4 container">
  <div class="row">
    <div class="col-4 col-md-2">
      <img src="../img/blocks/client-logo.png" alt="client" class="img-responsive m0 p0">
    </div>
    <div class="col-4 col-md-2">
      <img src="../img/blocks/client-logo.png" alt="client" class="img-responsive m0 p0">
    </div>
    <div class="col-4 col-md-2">
      <img src="../img/blocks/client-logo.png" alt="client" class="img-responsive m0 p0">
    </div>
    <div class="col-4 col-md-2">
      <img src="../img/blocks/client-logo.png" alt="client" class="img-responsive m0 p0">
    </div>
    <div class="col-4 col-md-2">
      <img src="../img/blocks/client-logo.png" alt="client" class="img-responsive m0 p0">
    </div>
    <div class="col-4 col-md-2">
      <img src="../img/blocks/client-logo.png" alt="client" class="img-responsive m0 p0">
    </div>
  </div>
</section>
`
            },
                {
                title: "List 2",
                description: "Description for list 2",
                code: `
<section class="container p-v-4">
  <h2 class="black center">Design and Concept Development</h2>
  <p class="dark center h6">Lorem ipsum dolor sit, consectetur some adipiscing elit<br> eiusmod tempor
    incididu</p>
  <div class="row m-t-4">
    <div class="col-md-4 p-h-2">
      <h4 class="black bold">Design</h4>
      <ul class="no-indent-ul">
        <li class="h6 dark m-t-1 p-1-4"><span class="large black">+</span> Product Mockup</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Branding</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Illustrations</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> UI/UX</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Websites</li>
      </ul>
    </div>
    <div class="col-md-4 p-h-2">
      <h4 class="black bold"> Web Design</h4>
      <ul class="no-indent-ul">
        <li class="h6 dark m-t-1 p-1-4"><span class="large black">+</span> Prototype</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Website Analysis</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Illustrations</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Content Writing</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Website Hosting</li>
      </ul>
    </div>
    <div class="col-md-4 p-h-2">
      <h4 class="black bold">Development</h4>
      <ul class="no-indent-ul">
        <li class="h6 dark m-t-1 p-1-4"><span class="large black">+</span> WordPress</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Application Devloment</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Front-end</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> PHP</li>
        <li class="h6 dark p-1-4"><span class="large black">+</span> Javascript</li>
      </ul>


    </div>
  </div>
</section>
`
            },
                {
                title: "List 3",
                description: "Description for list 3",
                code: `
<section class="row p-v-4  bg-dark">
  <div class="row m-v-4 container-fluid">
    <div class="col-md-4 p1">
      <h6 class="white text-uppercase left">My skills<br> <span class="display-3">Expertise</span></h6>
      <p class="grey left h6 m-t-1">Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Malesuada proin libero
        nunc. Mattis aliquam faucibus purus in massa tempor nec. </p>
      <a href="#" class="button button-m bg-white black p-h-1">RESUME</a>
    </div>
    <div class="col-md-4 p1">
      <h6 class="grey">— Brand Development &amp; Advertising</h6>
      <h6 class="grey m-t-05">— Direct-Response Marketing</h6>
      <h6 class="grey m-t-05">— Search Marketing: SEO &amp; PPC</h6>
      <h6 class="grey m-t-05">— Digital Video &amp; TV, including Super Bowl</h6>
      <h6 class="grey m-t-05">— Streaming &amp; Radio</h6>
      <h6 class="grey m-t-05">— Out-of-Home</h6>
      <h6 class="grey m-t-05">— Influencer Marketing: Podcast &amp; YouTube</h6>
      <h6 class="grey m-t-05">— Email Marketing, Design &amp; Dev</h6>
    </div>
    <div class="col-md-4 p1">
      <h6 class="grey">— Website Design &amp; Development</h6>
      <h6 class="grey m-t-05">— Advertising Creative (All Mediums)</h6>
      <h6 class="grey m-t-05">— Identity Design</h6>
      <h6 class="grey m-t-05">— Conversion Rate Optimization</h6>
      <h6 class="grey m-t-05">— Copywriting (Ad, Web, &amp; Product)</h6>
      <h6 class="grey m-t-05">— Media Planning &amp; Buying (up to $100MM)</h6>
      <h6 class="grey m-t-05">— Content Strategy &amp; Execution</h6>
      <h6 class="grey m-t-05">— Business Development</h6>
    </div>
  </div>
</section>
`
            },
                {
                title: "List 4",
                description: "Description for list 4",
                code: `
<section class="container-fluid m-p-4 h-100-vh bg-light-grey center d-flex flex-column justify-content-center">
  <h2 class="center black font-weight-600">Our Services</h2>
  <p class="h5 dark">List of awsome Services CSS Vars</p>
  <div class="row justify-content-center">
      <div class="col-md-4">
          <div class="black p2 bg-white m1">
              <div class="d-flex justify-content-center">
                  <i class="icon-box">
                      <svg class="icon-black-fill  icon-m" viewBox="0 0 24 24">
                          <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                      </svg>
                  </i>
              </div>
              <h5 class="center black font-weight-600">Based on Variables</h5>
              <p class="center">Easy to use and customize</p>
          </div>
      </div>
      <div class="col-md-4">
      <div class=" black p2 bg-white m1">
          <div class="d-flex justify-content-center">
              <i class="icon-box">
                  <svg class="icon-black-fill  icon-m" viewBox="0 0 24 24">
                      <path d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"></path>
                  </svg>
              </i>
          </div>
          <h5 class="center black font-weight-600">Pure HTML CSS</h5>
          <p class="center">Everything you need without JS</p>
      </div>
      </div>
      <div class="col-md-4">
          <div class=" black   p2 bg-white m1">
              <div class="d-flex justify-content-center">
                  <i class="icon-box">
                      <svg class="icon-black-fill  icon-m" viewBox="0 0 24 24">
                          <path d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z"></path>
                      </svg>
                  </i>
              </div>
              <h5 class="center black font-weight-600">Fast Loading</h5>
              <p class="center">A small CSS file makes wonders</p>
          </div>
      </div>
  </div>
  <div class="row justify-content-center">
      <div class="col-md-4 m-t-1">
          <div class=" black p2 bg-white m1">
              <div class="d-flex justify-content-center">
                  <i class="icon-box">
                      <svg class="icon-black-fill  icon-m" viewBox="0 0 24 24">
                          <path d="M19.5,3.09L20.91,4.5L16.41,9H20V11H13V4H15V7.59L19.5,3.09M20.91,19.5L19.5,20.91L15,16.41V20H13V13H20V15H16.41L20.91,19.5M4.5,3.09L9,7.59V4H11V11H4V9H7.59L3.09,4.5L4.5,3.09M3.09,19.5L7.59,15H4V13H11V20H9V16.41L4.5,20.91L3.09,19.5Z"></path>
                  </svg> 
                  </i>
              </div>
              <h5 class="center black font-weight-600">Responsive &amp; Mobile first</h5>
              <p class="center">Much more than just a grid</p>
          </div>
      </div>


      <div class="col-md-4 m-t-1">
          <div class=" black p2 bg-white m1">
              <div class="d-flex justify-content-center">
                  <i class="icon-box">
                      <svg class="icon-black-fill  icon-m" viewBox="0 0 24 24">
                          <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
                      </svg>
                  </i>
              </div>
              <h5 class="center black font-weight-600">100's of Free UI Elements</h5>
              <p class="center">All needed elements are ready</p>
          </div>
      </div>
      <div class="col-md-4 m-t-1">
          <div class=" black p2 bg-white m1">
              <div class="d-flex justify-content-center">
                  <i class="icon-box">
                      <svg class="icon-black-fill  icon-m" viewBox="0 0 24 24">
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                      </svg>
                  </i>
              </div>
              <h5 class="center black font-weight-600">Free &amp; Open Source</h5>
              <p class="center">Built with love to be used</p>
          </div>
      </div>
  </div>
</section>
`
            },
                {
                title: "List 5",
                description: "Description for list 5",
                code: `
<section class="row container m-v-4">
  <div class="col-md-4 m0 p0">
    <img src="../img/blocks/work-2.jpg" class="img-responsive p1">
  </div>

  <div class="col-md-8 left">
    <h4 class="bold p-v-1 black">Overview</h4>
    <hr class="width-short m0">

    <p class="m-v-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
      <span><a href="#" class="color-2">(View More...)</a></span>
    </p>

    <div class="row topmargin">
      <div class="col-md-4">
        <table id="tables" class="table">
          <tbody>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">20 ROOMS, 5 LUXURY SUITES</span></td>
            </tr>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">FITNESS CENTER</span></td>
            </tr>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">AIRPORT TRANSPORATION</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-4">
        <table id="tables" class="table">
          <tbody>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">24-HOUR IN-ROOM DINING</span></td>
            </tr>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">FREE WI-FI</span></td>
            </tr>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">PETS STAY FREE</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-4">
        <table id="tables" class="table">
          <tbody>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">VALET CAR SERVICE</span></td>
            </tr>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">POOL</span></td>
            </tr>
            <tr>
              <td><span class="large warning bold">✓</span> <span class="small p p0">SPA PROCEDURES</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "Feature",
        items: [
            {
                title: "Feature 1",
                description: "Description for feature 1",
                code: `
<section class="row container justify-content-center">
  <div class="col-md-4">
    <div class=" black  center p2">
      <svg viewBox="0 0 24 24" class="icon-success-fill icon-ml">
        <path
          d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z">
        </path>
      </svg>
      <h4 class="center black bold  h5">Fast Service</h4>

      <p class="dark font-weight-400">Euismod in pellentesque massa placerat. Aliquet lectus proin nibh nisl condimentum
        id venenatis.</p>
    </div>
  </div>

  <div class="col-md-4">
    <div class=" black  center p2">
      <svg viewBox="0 0 24 24" class="icon-info-fill icon-ml">
        <path fill="color-1"
          d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z">
        </path>
      </svg>
      <h4 class="center black bold h5">Great Support</h4>

      <p class="dark font-weight-400">Suspendisse sed nisi lacus sed. Tincidunt vitae semper quis lectus.Mi quis
        hendrerit dolor magna eget. </p>
    </div>
  </div>


  <div class="col-md-4">
    <div class=" black center  p2">
      <svg viewBox="0 0 24 24" class="icon-color-2-fill icon-ml">
        <path fill="color-1"
          d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z">
        </path>
      </svg>
      <h4 class="center black bold h5">Use it anywhere</h4>

      <p class="dark font-weight-400">Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Risus pretium
        quam vulputate. </p>
    </div>
  </div>

</section>
`
            },
            {
                title: "Feature 2",
                description: "Description for feature 2",
                code: `
<section class="h-25  m-t-6 d-flex flex-column bg-light-grey">
  <div class="row m-h-7">
    <div class="col-md-4 center m-t-4">
      <svg viewBox="0 0 24 24" class="icon-dark-fill icon-m">
        <path fill="color-1"
          d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z">
        </path>
      </svg>
      <p class="black m-t-05 font-weight-600 h6">Web Design</p>
      <p class="dark">Diam maecenas ultricies mi eget mauris<br> pharetra et ultrices neque. Cursus vitae<br> congue
        mauris rhoncus aenean.</p>
    </div>
    <div class="col-md-4 center m-t-4">
      <svg viewBox="0 0 24 24" class="icon-dark-fill icon-m">
        <path fill="color-1"
          d="M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z">
        </path>
      </svg>
      <p class="black m-t-05 font-weight-600 h6">Branding Design</p>
      <p class="dark">Diam maecenas ultricies mi eget mauris<br> pharetra et ultrices neque. Cursus vitae<br> congue
        mauris rhoncus aenean.</p>
    </div>
    <div class="col-md-4 center m-t-4">
      <svg viewBox="0 0 24 24" class="icon-dark-fill icon-m">
        <path fill="color-1"
          d="M9.75 20.85C11.53 20.15 11.14 18.22 10.24 17C9.35 15.75 8.12 14.89 6.88 14.06C6 13.5 5.19 12.8 4.54 12C4.26 11.67 3.69 11.06 4.27 10.94C4.86 10.82 5.88 11.4 6.4 11.62C7.31 12 8.21 12.44 9.05 12.96L10.06 11.26C8.5 10.23 6.5 9.32 4.64 9.05C3.58 8.89 2.46 9.11 2.1 10.26C1.78 11.25 2.29 12.25 2.87 13.03C4.24 14.86 6.37 15.74 7.96 17.32C8.3 17.65 8.71 18.04 8.91 18.5C9.12 18.94 9.07 18.97 8.6 18.97C7.36 18.97 5.81 18 4.8 17.36L3.79 19.06C5.32 20 7.88 21.47 9.75 20.85M20.84 5.25C21.06 5.03 21.06 4.67 20.84 4.46L19.54 3.16C19.33 2.95 18.97 2.95 18.76 3.16L17.74 4.18L19.82 6.26M11 10.92V13H13.08L19.23 6.85L17.15 4.77L11 10.92Z">
        </path>
      </svg>
      <p class="black m-t-05 font-weight-600 h6">Print Design</p>
      <p class="dark p-b-4">Diam maecenas ultricies mi eget mauris<br> pharetra et ultrices neque. Cursus vitae<br>
        congue mauris rhoncus aenean.</p>
    </div>
  </div>
</section>                
`
            },
            {
                title: "Feature 3",
                description: "Description for feature 3",
                code: `
<section class="container m-v-4 p-v-4">
  <h4 class="dark m-t-4 center font-weight-600">Trusted by teams at the world's best companies</h4>
  <div class="m-h-7">
    <div class="row  m-t-4">
      <div class="col-md-3 center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="icon-dark-fill  icon-sm" viewBox="0 0 16 16">
          <path
            d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z">
          </path>
        </svg>
        <h4 class="dark m-t-05">Windows</h4>
      </div>
      <div class="col-md-3 center">

        <svg viewBox="0 0 24 24" class="icon-dark-fill  icon-sm">
          <path fill="color-1"
            d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z">
          </path>
        </svg>
        <h4 class="dark font-weight-400 m-t-05">Google play</h4>
      </div>
      <div class="col-md-3 center">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-dark-fill  icon-sm" viewBox="0 0 24 24">
          <path
            d="M6.5,2H10.5L13.44,10.83L13.5,2H17.5V22C16.25,21.78 14.87,21.64 13.41,21.58L10.5,13L10.43,21.59C9.03,21.65 7.7,21.79 6.5,22V2Z">
          </path>
        </svg>
        <h4 class="dark font-weight-400 m-t-05">Netflix</h4>
      </div>
      <div class="col-md-3 center">
        <svg viewBox="0 0 24 24" class="icon-dark-fill  icon-sm">
          <path fill="color-1"
            d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z">
          </path>
        </svg>
        <h4 class="dark font-weight-400 m-t-05">Apple</h4>
      </div>

    </div>
  </div>

</section>
`
            },
            {
                title: "Feature 4",
                description: "Description for feature 4",
                code: `
<div class="row  m-t-6 justify-content-center">
  <div class="col-md-4">
    <div class="">
      <div class="p-v-4 bga-grey center">
        <svg class="icon-dark-fill  icon-lg" viewBox="0 0 24 24">
          <path
            d="M19.5,3.09L20.91,4.5L16.41,9H20V11H13V4H15V7.59L19.5,3.09M20.91,19.5L19.5,20.91L15,16.41V20H13V13H20V15H16.41L20.91,19.5M4.5,3.09L9,7.59V4H11V11H4V9H7.59L3.09,4.5L4.5,3.09M3.09,19.5L7.59,15H4V13H11V20H9V16.41L4.5,20.91L3.09,19.5Z">
          </path>
        </svg>
        <h5 class="black center font-weight-600 p-h-1">Responsive &amp; Mobile first</h5>
        <p class="m-t-05 dark font-weight-400">Responsive images, videos, galleries,<br> tables, menus, maps, frames,
          embeds</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="">
      <div class="p-v-4 bga-grey center">
        <svg class="icon-dark-fill  icon-lg" viewBox="0 0 24 24">
          <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
        </svg>
        <h5 class="black center font-weight-600 p-h-1">100's of Free UI Elements</h5>
        <p class="m-t-05 dark font-weight-400">Typography, buttons, cards, icons,<br> tabs, carousel, masonry, Flex
          gallery</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="">
      <div class="p-v-4 bga-grey center">
        <svg class="icon-dark-fill  icon-lg" viewBox="0 0 24 24">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
          </path>
        </svg>
        <h5 class="black center font-weight-600 p-h-1">Free &amp; Open Source</h5>
        <p class="m-t-05 dark font-weight-400">Free framework, UI elements, &amp;<br> themes. Download, use, enjoy &amp;
          share</p>
      </div>
    </div>
  </div>
</div>
`
            },
            {
                title: "Feature 5",
                description: "Description for feature 5",
                code: `
<section class="">
  <div class="row container-fluid m-v-4 p-v-4">
    <div class="col-md-6">
      <img src="../img/blocks/technology.jpg" class="img-responsive">
    </div>
    <div class="col-md-6">
      <p class="grey font-weight-600 text-uppercase center m-t-1">Feature</p>
      <h3 class="black center font-weight-600 m-t-4">Simple and super-easy to use!</h3>
      <p class="dark center m-t-1">Diam quam nulla porttitor massa id neque aliquam. Hendrerit dolor<br> magna eget est
        lorem ipsum dolor. Turpis egestas maecenas<br> pharetra convallis.</p>
      <div class="center">
        <button class="bg-white-hover black-hover p-h-4 m-t-2 rounded">Learn more</button>
      </div>
    </div>
  </div>

  <div class="row container-fluid m-v-4 p-v-4">
    <div class="col-md-6">
      <p class="grey font-weight-600 text-uppercase center m-t-1">Feature</p>
      <h3 class="black center font-weight-600 m-t-4">Simplicity is the key!</h3>
      <p class="dark center m-t-1">Diam quam nulla porttitor massa id neque aliquam. Hendrerit dolor<br> magna eget est
        lorem ipsum dolor. Turpis egestas maecenas<br> pharetra convallis.</p>
      <div class="center">
        <button class="bg-white-hover black-hover p-h-4 m-t-2 rounded">Learn more</button>
      </div>
    </div>
    <div class="col-md-6">
      <img src="../img/blocks/laptop.jpg" class="img-responsive">
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "Steps",
        items: [
                {
                title: "Steps 1",
                description: "Description for steps 1",
                code: `
<section class="container bg-white rounded m-t-6">
  <div class="row m-t-2">
    <div class="col-md-6 p-v-2">
      <img src="../img/blocks/technology.jpg" width="430" height="230" class="img-responsive m-l-2">
      <h2 class="left black m-t-2 font-weight-600 m-l-2">How to join to our<br> community</h2>
      <p class="dark m-t-1 m-l-2 h6">Just 3 simple steps to optimize your company<br> operations.</p>
      <a href="#" class="button rounded bg-info d-inline- m-l-2" target="_blank">Try for free</a>


    </div>
    <div class="col-md-6">
      <h3 class="black  bold  left m-t-4 m-l-3">Step 1</h3>
      <p class="dark font-weight-400 left  m-v-2 m-l-3">Sagittis orci a scelerisque purus semper eget<br> duis. Nulla
        facilisi morbi tempus iaculis. </p>
      <hr class="col-9">
      <h3 class="black  bold  left  m-l-3">Step 2</h3>
      <p class="dark font-weight-400 left  m-v-2 m-l-3">Egestas diam in arcu cursus euismod quis viverra<br> nibh. Sem
        et tortor consequat id porta nibh. </p>
      <hr class="col-9">
      <h3 class="black  bold  left  m-l-3">Step 3</h3>
      <p class="dark font-weight-400 left  m-v-2 m-l-3">Adipiscing elit pellentesque habitant morbi tristique<br>
        senectus et netus et. Mollis aliquam ut porttitor leo. </p>
    </div>
  </div>
</section>
`
            },
                {
                title: "Steps 2",
                description: "Description for steps 2",
                code: `
<section class="container m-t-6">
  <div class="row">
    <div class="col-md-6">
      <img src="../img/blocks/worker-2.jpg" class="img-responsive">
    </div>
    <div class="col-md-6">
      <h1 class="black center bold left display-3 m-t-4 m-l-3" style="font-family: Segoe UI Emoji">We partner with<br>
        your business</h1>
      <p class="dark font-weight-400 m-l-3 h6 left">Eget nunc lobortis mattis aliquam faucibus purus<br> in massa.Donec
        ultrices tincidunt arcu non<br> sodales neque sodales ut etiam.</p>

      <div class="row align-items-center m-b-1">
        <div class="icon-m rounded m-l-3 bg-color-2 white center display-3 bold">1</div>
        <p class="m-l-1 h6 dark">Risus feugiat in ante.</p>
      </div>
      <div class="row align-items-center m-b-1">
        <div class="icon-m rounded m-l-3 bg-color-2 white center display-3 bold">2</div>
        <p class="m-l-1 h6 dark">Lectus magna fringilla urna.</p>
      </div>
      <div class="row align-items-center m-b-1">
        <div class="icon-m rounded m-l-3 bg-color-2 white center display-3 bold">3</div>
        <p class="m-l-1 h6 dark">Leo vel orci porta non pulvinar</p>
      </div>
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "Statistics",
        items: [
            {
                title: "Statistics 1",
                description: "Description for Statistics 1",
                code: `
<section class="parallax-img h-50 m-v-2 opacity1" style="background-image: url('../img/blocks/design-8.jpg');">
  <div class="p-v-1">

    <div class="row justify-content-center container center m-v-2">
      <div class="col-md-3 p1">
        <svg viewBox="0 0 24 24" class="icon-m icon-white-fill">
          <path
            d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z">
          </path>
        </svg>
        <p class=" white h2">50000+</p>
        <hr class="width-short center w-50 m-v-2">
        <p class="white text-uppercase  ">LINES OF CODES</p>
      </div>


      <div class="col-md-3 p1">
        <svg viewBox="0 0 24 24" class="icon-m icon-white-fill">
          <path
            d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74">
          </path>
        </svg>
        <p class=" white h2">12345+</p>
        <hr class="width-short center w-50 m-v-2">
        <p class="white text-uppercase  ">KBS OF HTML FILES</p>
      </div>

      <div class="col-md-3 p1">
        <svg viewBox="0 0 24 24" class="icon-m icon-white-fill">
          <path
            d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z">
          </path>
        </svg>
        <p class=" white h2">365*</p>
        <hr class="width-short center w-50 m-v-2">
        <p class="white text-uppercase  ">NO. OF TEMPLATES</p>
      </div>

      <div class="col-md-3 p1">
        <svg viewBox="0 0 24 24" class="icon-m icon-white-fill">
          <path
            d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z">
          </path>
        </svg>
        <p class=" white h2">10000+</p>
        <hr class="width-short center w-50 m-v-2">
        <p class="white text-uppercase  ">HOURS OF CODING</p>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Statistics 2",
                description: "Description for Statistics 2",
                code: `
<section class="row  m-t-6 justify-content-center">
  <div class="col-md-4">
    <div class="">
      <div class="p-v-4 bga-grey">
        <h1 class="center bold display-2 dark p-h-1">100+</h1>
        <p class="dark center font-weight-600 p-h-1">Websites developed</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="">


      <div class="p-v-4 bga-grey">
        <h5 class="center bold display-2 dark p-h-1">800K</h5>
        <p class="dark center font-weight-600 p-h-1">Quality leads</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="">


      <div class="p-v-4 bga-grey">
        <h5 class="center bold display-2 dark p-h-1"> 45K</h5>
        <p class="dark center font-weight-600 p-h-1">Paid subscribers &amp; users</p>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Statistics 3",
                description: "Description for Statistics 3",
                code: `
<section class="parallax-img" style="background-image: url('../img/blocks/design-8.jpg'); min-height: 400px;">
  <div class="row m-h-4">
    <div class="col-md-3 m-v-4 p1">
      <div class="promo-box-s outline-white rounded center">
        <h1 class="white display-2">233</h1>
        <h6 class="white m-t-1 text-uppercase">Happy Customers</h6>
      </div>
    </div>
    <div class="col-md-3 m-v-4 p1">
      <div class="promo-box-s outline-white rounded center">
        <h1 class="white display-2">132</h1>
        <h6 class="white m-t-1 text-uppercase">Project Completed</h6>
      </div>
    </div>
    <div class="col-md-3 m-v-4 p1">
      <div class="promo-box-s outline-white rounded center">
        <h1 class="white display-2">250</h1>
        <h6 class="white m-t-1 text-uppercase">Cups of coffee</h6>
      </div>
    </div>
    <div class="col-md-3 m-v-4 p1">
      <div class="promo-box-s outline-white rounded center">
        <h1 class="white display-2">25</h1>
        <h6 class="white m-t-1 text-uppercase">Awards</h6>
      </div>
    </div>
  </div>

</section>
`
            },
            {
                title: "Statistics 4",
                description: "Description for Statistics 4",
                code: `
<section class="h-25 d-flex  m-t-6 flex-column bg-gradient-black">
  <div class="row  m-h-3 m-v-2 p0">
    <div class="col-md-4">
      <div class="row m-t-2">
        <div class="col-2">
          <h1 class="white font-weight-600">12%</h1>
        </div>
        <div class="col-10 left p-h-1">
          <p class="m-t--1-2 white p0 dark font-weight-400">Lorem ipsum dolor sit amet,<br> consectetur adipisicing
            elit.</p>
        </div>

      </div>
    </div>
    <div class="col-md-4 p05">
      <div class="row m-t-2">
        <div class="col-2">
          <h1 class="white font-weight-600">1,8x</h1>
        </div>
        <div class="col-10 left p-h-1">
          <p class="m-t--1-2 white p0 dark font-weight-400">Lorem ipsum dolor sit amet,<br> consectetur adipisicing
            elit.</p>
        </div>

      </div>
    </div>
    <div class="col-md-4 p05">
      <div class="row m-t-2">
        <div class="col-2">
          <h1 class="white  font-weight-600">3k+</h1>
        </div>
        <div class="col-10 left p-h-1">
          <p class="m-t--1-2 white p0 dark font-weight-400">Lorem ipsum dolor sit amet,<br> consectetur adipisicing
            elit.</p>
        </div>

      </div>
    </div>
  </div>
</section>
`
            },
        ]
    },    
    {
        name: "Gallery",
        items: [
            {
                title: "Gallery 1",
                description: "Description for Gallery 1",
                code: `
<section class="container m-v-4">
  <h4 class="center black">Our <strong>Masonry Gallery</strong></h4>
  <div class="m-v-1">
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar
          magna.</p>
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>
        
  <div class="masonry-container">
            <div class="masonry-large masonry-gallery-img">
              <img src="https://images.pexels.com/photos/595747/pexels-photo-595747.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/1029039/pexels-photo-1029039.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-large masonry-gallery-img">
              <img src="https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/1028437/pexels-photo-1028437.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-large masonry-gallery-img">
              <img src="https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-medium masonry-gallery-img">
              <img src="https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/1018797/pexels-photo-1018797.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-medium masonry-gallery-img">
              <img src="https://images.pexels.com/photos/830912/pexels-photo-830912.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-large masonry-gallery-img">
              <img src="https://images.pexels.com/photos/890500/pexels-photo-890500.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/863985/pexels-photo-863985.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-medium masonry-gallery-img">
              <img src="https://images.pexels.com/photos/398549/pexels-photo-398549.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/1024252/pexels-photo-1024252.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-large masonry-gallery-img">
              <img src="https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-small masonry-gallery-img">
              <img src="https://images.pexels.com/photos/1018350/pexels-photo-1018350.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-large masonry-gallery-img">
              <img src="https://images.pexels.com/photos/881462/pexels-photo-881462.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-medium masonry-gallery-img">
              <img src="https://images.pexels.com/photos/380285/pexels-photo-380285.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
            <div class="masonry-medium masonry-gallery-img">
              <img src="https://images.pexels.com/photos/837500/pexels-photo-837500.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
            </div>
  </div>
</section>
`
            },
            {
                title: "Gallery 2",
                description: "Description for Gallery 2",
                code: `
<section class="container m-v-4">
  <h4 class="center black">Our <strong>Flex Gallery</strong></h4>
  <div class="m-v-1">
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar
          magna.</p>
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>

  <div class="flex-gallery-container">
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/863985/pexels-photo-863985.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/830912/pexels-photo-830912.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1029039/pexels-photo-1029039.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1029594/pexels-photo-1029594.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/983436/pexels-photo-983436.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1028437/pexels-photo-1028437.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1018797/pexels-photo-1018797.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/890500/pexels-photo-890500.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/398549/pexels-photo-398549.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1024252/pexels-photo-1024252.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
    <div class="flex-gallery-image-container">
      <img src="https://images.pexels.com/photos/1105534/pexels-photo-1105534.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260">
    </div>
  </div>
</section>
`
            },
            {
                title: "Gallery 3",
                description: "Description for Gallery 3",
                code: `
<section class=" m-v-4">
  <h4 class="center black">Our <strong>Light Box Gallery</strong></h4>
  <div class="m-v-1">
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar
          magna.</p>
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>

    <div class="row justify-content-center container">
      <div class="light-box shadow-3 col-4">
        <a class="light-box-link" href="#light-box-img1">
          <img src="../img/blocks/img1.jpg" class="img-responsive" alt="Demo image">
        </a>
        <div id="light-box-img1" class="light-box-overlay fadeIn">
          <figure class="light-box-content light-box-figure">
            <div class="light-box-image"
              style="width: 800px; padding-top: 66.25%; background-image: url(../img/blocks//img1.jpg);">
            </div>
          </figure>
          <a href="#light-box-untarget" class="light-box-close light-box-control">Close</a>
          <a class="light-box-next light-box-control" href="#light-box-img2">Next</a>
        </div>
      </div>
  
      <div class="light-box shadow-3 col-4">
        <a class="light-box-link" href="#light-box-img2">
          <img src="../img/blocks/img2.jpg" class="img-responsive" alt="Demo image">
        </a>
        <div id="light-box-img2" class="light-box-overlay fadeIn">
          <figure class="light-box-content light-box-figure">
            <div class="light-box-image"
              style="width: 800px; padding-top: 66.25%; background-image: url(../img/blocks/img2.jpg);">
            </div>
          </figure>
          <a href="#light-box-untarget" class="light-box-close light-box-control">Close</a>
          <a class="light-box-next light-box-control" href="#light-box-img3">Next</a>
          <a class="light-box-prev light-box-control" href="#light-box-img1">Prev</a>
        </div>
      </div>
  
      <div class="light-box shadow-3 col-4">
        <a class="light-box-link" href="#light-box-img3">
          <img src="../img/blocks/img3.jpg" class="img-responsive" alt="Demo image">
        </a>
        <div id="light-box-img3" class="light-box-overlay fadeIn">
          <figure class="light-box-content light-box-figure">
            <div class="light-box-image"
              style="width: 800px; padding-top: 66.25%; background-image: url(../img/blocks/img3.jpg);">
            </div>
          </figure>
          <a href="#light-box-untarget" class="light-box-close light-box-control">Close</a>
          <a class="light-box-prev light-box-control" href="#light-box-img2">Prev</a>
        </div>
      </div>
    </div>
</section>
`
            },
            {
                title: "Gallery 4",
                description: "Description for Gallery 4",
                code: `
<section class=" m-v-4">
  <h4 class="center black">Our <strong>Gallery Box</strong></h4>
  <div class="m-v-1">
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar
          magna.</p>
      <p class="center dark m0 p0">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </div>

  <div class="row justify-content-center container">
    <div id="gallery-box-photo-container" class="gallery-box-photo-container rounded shadow-3">
      <img id="main-image" src="../img/blocks/img1.jpg"><br>
    <div class="gallery-box-thumbnail-image shadow">
      <img src="../img/blocks/img1.jpg" onclick="document.getElementById('main-image').src='../img/blocks/img1.jpg'">
    </div>
    <div class="gallery-box-thumbnail-image shadow">
      <img src="../img/blocks/img2.jpg" onclick="document.getElementById('main-image').src='../img/blocks/img2.jpg'">
    </div>
    <div class="gallery-box-thumbnail-image shadow">
      <img src="../img/blocks/img3.jpg" onclick="document.getElementById('main-image').src='../img/blocks/img3.jpg'">
    </div>
    </div>
  </div>
</section>
`
            },
        ]
    },    
    {
        name: "Video",
        items: [
            {
                title: "Video 1",
                description: "Description for Video 1",
                code: `
<section class="row container m-t-6">
  <div class="col-md-7 m0 p0 embed embed-wide-screen ">
      <iframe class="embed-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
  </div>
  <div class="col-md-5">
    <p class="text-uppercase dark m-r-05 m-l-2 font-weight-400 m-t-4">SELL YOUR MESSAGE</p>
    <h2 class="m-t-05 bold black left m-l-2">Tell your product story with a video demo</h2>
    <p class="dark font-weight-400 left m-l-2">Quis commodo odio aenean sed adipiscing diam. Accumsan in nisl nisi
      scelerisque eu ultrices vitae. </p>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "Testimonial",
        items: [
            {
                title: "Testimonial 1",
                description: "Description for Testimonial 1",
                code: `
<section class="parallax-img h-100-vh m-v-2"
  style="background-image: url('../img/vika/design-company/background-2.jpg');">
  <div class="p-v-4">
    <div class="row">
      <div class="col-md-5"></div>
      <div class="col-md-7">
        <div class="d-flex flex-column justify-content-center h-100-vh">
          <div class="center">
            <div class="container">
              <h6 class="white bold center text-uppercase">WHAT CLIENTS SAY?</h6>
              <p class="light-grey center">Some of our Clients love us &amp; so we do!
              </p>
              <hr class="width-short center w-50">
            </div>
          </div>
          <div class="row" id="carousel">
            <div class="carousel carousel-small-img">
              <input type="radio" name="slides" id="radio-1" class="radio-1" checked="">
              <input type="radio" name="slides" id="radio-2" class="radio-2">
              <input type="radio" name="slides" id="radio-3" class="radio-3">
              <ul class="slides  ">
                <li class="slide p-b-4">
                  <p class="white font-weight-400 italic center h6">
                    "Similique fugit repellendus expedita excepturi iure perferendis<br> provident
                    quia
                    eaque. Repellendus, vero numquam?"
                  </p>
                  <p class="center white text-uppercase background-color m0 p0 bold">- STEVE JOBS</p>
                  <p class="center small dark">Apple Inc.</p>
                </li>
                <li class="slide p-b-4">
                  <p class="white font-weight-400 italic center h6">
                    "Natus voluptatum enim quod necessitatibus quis expedita harum<br> provident eos
                    obcaecati id culpa corporis molestias."
                  </p>
                  <p class="center white text-uppercase background-color m0 p0 bold">- COLLIS TA'EED
                  </p>
                  <p class="center small dark">Envato Inc.</p>
                </li>
                <li class="slide p-b-4">
                  <p class="white font-weight-400 italic center h6">
                    "Incidunt deleniti blanditiis quas aperiam recusandae consequatur<br> ullam
                    quibusdam cum libero illo rerum!"
                  </p>
                  <p class="center white text-uppercase background-color m0 p0 bold">- JOHN DOE
                  </p>
                  <p class="center small dark">XYZ Inc.</p>
                </li>
              </ul>
              <div class="slidesNavigation">
                <label for="radio-1" id="dotForRadio-1"></label>
                <label for="radio-2" id="dotForRadio-2"></label>
                <label for="radio-3" id="dotForRadio-3"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Testimonial 2",
                description: "Description for Testimonial 2",
                code: `
<section class="row container m-v-4">
  <div class="col-12">
    <h1 class="black center m-t-6 font-weight-600">Testimonials</h1>
    <p class="center dark m-v-05 font-weight-400">People love what we do and we want to let your know</p>
  </div>

  <div class="col-md-4 center p1">
    <div class="center shadow-3 rounded">
      <div class="p-h-1 center m-v-1">
        <p class="black font-weight-600">"Once you try this product you will never go back. Lovely to see so many
          professionals."</p>
      </div>
      <div class="p-b-1 center h6">
        ⭐⭐⭐⭐⭐
      </div>
      <div class="center m-b-1">
          <span class="font-weight-600 black m-v-2">Melly Doe<br><span class="small dark">Lead Manager</span>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4 center p1">
    <div class="center shadow-3 rounded">
      <div class="p-h-1 center m-v-1">
        <p class="black font-weight-600">"Once you try this product you will never go back. Lovely to see so many
          professionals."</p>
      </div>
      <div class="p-b-1 center h6">
        ⭐⭐⭐⭐⭐
      </div>
      <div class="center m-b-1">
          <span class="font-weight-600 black m-v-2">Jess Doe<br><span class="small dark">Designer</span>
          </span>
      </div>
    </div>

  </div>
  <div class="col-md-4 center p1">
    <div class="center shadow-3 rounded">
      <div class="p-h-1 center m-v-1">
        <p class="black font-weight-600">"Once you try this product you will never go back. Lovely to see so many
          professionals."</p>
      </div>
      <div class="p-b-1 center h6">
        ⭐⭐⭐⭐⭐
      </div>
      <div class="center m-b-1">
          <span class="font-weight-600 black m-v-2">Ann Doe<br><span class="small dark">Product Manager</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Testimonial 3",
                description: "Description for Testimonial 3",
                code: `
<section class="p-v-4 bg-color-1">
  <div class="">
    <h4 class="center bold white">Reviews</h4>
    <hr class="width-short center">
  </div>
  <div class="row container">
    <div class="col-md-6 p2">
      <p class="bold white">Kris Doe <br>⭐⭐⭐⭐⭐</p>
      <p class="m0 light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        vehicula est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula
        est, in
        consequat, in consequat.</p>
    </div>

    <div class="col-md-6 p2">
      <p class="bold white">Bob Doe <br>⭐⭐⭐⭐⭐</p>
      <p class="m0 light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        vehicula est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula
        est, in
        consequat, in consequat.</p>
    </div>
  </div>

  <div class="row container">
    <div class="col-md-6 p2">
      <p class="bold white">Anna Doe <br>⭐⭐⭐⭐⭐</p>
      <p class="m0 light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        vehicula est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula
        est, in
        consequat, in consequat.</p>
    </div>

    <div class="col-md-6 p2">
      <p class="bold white">Emma Doe <br>⭐⭐⭐⭐⭐</p>

      <p class="m0 light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        vehicula est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula
        est, in
        consequat, in consequat.</p>
    </div>
  </div>
</section>
`
            },
            {
                title: "Testimonial 4",
                description: "Description for Testimonial 4",
                code: `
<section class="p-v-4">
  <div class="row p-v-2 container">
    <div class="col-md-6">
      <p class="h3">«</p>
      <p class="m0 p-h-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula
        est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in
        consequatt,in consequat.</p>
      <p class="h3 right">»</p>
      <p></p>

      <div class="row m-v-2">
        <div class="col-3 p-h-2">
          <img src="../img/blocks/worker-2-s.jpg" class="circle icon-m">
        </div>

        <div class="col-9 p-v-1">
          <span class="font-weight-400"> Hanna Joe<br><span class="small dark">Developer</span>
          </span>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <p class="h3">«</p>
      <p class="m0 p-h-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula
        est,
        in consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in
        consequatt,
        in consequat.</p>
      <p class="h3 right">»</p>
      <p></p>

      <div class="row m-v-2">
        <div class="col-3 p-h-2">
          <img src="../img/blocks/worker-3-s.jpg" class="circle icon-m">
        </div>
        <div class="col-9 p-v-1">
          <span class="font-weight-400"> Ann Doe<br><span class="small dark">CEO &amp; Founder</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Testimonial 5",
                description: "Description for Testimonial 5",
                code: `
<section class="m-v-4">
  <h1 class="black bold center m-t-6">Our customers are lovin' it</h1>
  <p class="center dark h6">Condimentum mattis pellentesque id nibh tortor id aliquet lectus<br> proin.Fermentum leo vel orci porta.</p>
  <div class="row container justify-content-center">
    <div class="col-md-4">
      <div class=" black center p2">
        <img src="../img/blocks/worker-1-s.jpg" class=" img-responsive icon-ml circle">
        <p class="dark font-weight-400 h6 m-t-1">"Scelerisque in dictum non consectetur. Id aliquet lectus proin nibh nisl
          condimentum id."</p>
        <p class="black bold">Ann Doe<br><span class="dark">Senior Developer</span></p>
      </div>
    </div>

    <div class="col-md-4">
      <div class=" black center p2">
        <img src="../img/blocks/worker-2-s.jpg" class=" img-responsive icon-ml circle">
        <p class="dark font-weight-400 h6 m-t-1">"Scelerisque in dictum non consectetur. Id aliquet lectus proin nibh nisl
          condimentum id."</p>
        <p class="black bold">Emma Joe<br><span class="dark">Interface Designer</span></p>
      </div>
    </div>


    <div class="col-md-4">
      <div class=" black center p2">
        <img src="../img/blocks/worker-3-s.jpg" class=" img-responsive icon-ml circle">
        <p class="dark font-weight-400 h6 m-t-1">"Scelerisque in dictum non consectetur. Id aliquet lectus proin nibh nisl
          condimentum id."</p>
        <p class="black bold">Jess Smith<br><span class="dark">Product Specialist</span></p>
      </div>
    </div>
    <hr class="col-12">
  </div>
</section>
`
            },
            {
                title: "Testimonial 6",
                description: "Description for Testimonial 6",
                code: `
<section class="container m-t-2">
  <h1 class="black left font-weight-600 m-t-6">What Our Customers Say</h1>
  <div class="row p-v-4 container">
    <div class="col-md-4">
      <p class="h3">❝</p>
      <p class="m0 p-h-2 center">Great user experience on your website. I found exactly what I was looking for at a
        great price. I will definitely be telling my friends.</p>
      <div class="row m-v-2">
        <div class="col-3 p-h-2">
          <img src="../img/blocks/worker-1-s.jpg" class="circle icon-m">
        </div>
        <div class="col-9 p-v-1">
          <span class="font-weight-400 m-l-1"> Jess Doe<br></span>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p class="h3">❝</p>
      <p class="m0 p-h-2 center">Great user experience on your website. I found exactly what I was looking for at a
        great price. I will definitely be telling my friends.</p>
      <div class="row m-v-2">
        <div class="col-3 p-h-2">
          <img src="../img/blocks/worker-2-s.jpg" class="circle icon-m">
        </div>
        <div class="col-9 p-v-1">
          <span class="font-weight-400 m-l-1"> Hanna Doe<br> </span>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <p class="h3">❝</p>
      <p class="m0 p-h-2 center">Great user experience on your website. I found exactly what I was looking for at a
        great price. I will definitely be telling my friends.
      </p>
      <p></p>

      <div class="row m-v-2">
        <div class="col-3 p-h-2">
          <img src="../img/blocks/worker-3-s.jpg" class="circle icon-m">
        </div>
        <div class="col-9 p-v-1">
          <span class="font-weight-400 m-l-1">Helen Joe<br> </span>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "FAQ",
        items: [
            {
                title: "FAQ 1",
                description: "Description for FAQ 1",
                code: `
<section class="container row m-v-2">
  <div class="col-md-6 p1">
    <h4 class="black m-t-4">How do I become a member?</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo
      voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim
      libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas
      beatae vero vitae nulla.
    </p>

    <h4 class="black m-t-4">Is it free to be a member?</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo
      voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim
      libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas
      beatae vero vitae nulla.
    </p>
  </div>

  <div class="col-md-6 p1">
    <h4 class="black m-t-4">Is it free to use?</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo
      voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim
      libero eaque explicabo suscipit animi at quaerat aliquid.
    </p>

    <h4 class="black m-t-4">Will I receive updates for free?</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo
      voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim
      libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas
      beatae vero vitae nulla.
    </p>
  </div>
</section>
`
            },
            {
                title: "FAQ 2",
                description: "Description for FAQ 2",
                code: `
<section class="container m-v-3 p2">
  <h3 class="center bold black">FAQ'S</h3>
  <hr class=" width-short center w-50">

  <p class="center font-weight-400 p-h-4 m-h-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur
    repudiandae et saepe, veniam aliquam molestias quod, quasi minus sequi, doloremque dolorum eaque similique
    eligendi omnis ea!
  </p>
  
  <div class="accordion">
    <div class="accordion-block">
      <input type="radio" name="accordionTitle" id="accordionTitle1">
      <label for="accordionTitle1" class="accordion-label bg-black">Lorem ipsum dolor sit amet, consectetur
        adipisicing?</label>
      <div class="accordion-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </div>
    </div>
    <div class="accordion-block">
      <input type="radio" name="accordionTitle" id="accordionTitle2">
      <label for="accordionTitle2" class="accordion-label bg-black">Lorem ipsum dolor sit amet, consectetur adipisicing
        elit?</label>
      <div class="accordion-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer
      </div>
    </div>
    <div class="accordion-block">
      <input type="radio" name="accordionTitle" id="accordionTitle3">
      <label for="accordionTitle3" class="accordion-label bg-black">Lorem ipsum dolor sit amet, consectetur
        adipisicing?</label>
      <div class="accordion-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "CTA",
        items: [
            {
                title: "CTA 1",
                description: "Description for CTA 1",
                code: `
<section>
  <div class="container m-t-6 p-v-4 m-v-4">
    <h2 class="center black font-weight-600">Take your first leap towards success</h2>
    <p class="center">Meet our experts and we will help you elevate your business to new levels.</p>
    <div class="center">
    <a href="#" class=" button button-lg bg-black m-t-2 rounded">Sign up for free</a>
    </div>
  </div>
</section>
`
            },
            {
                title: "CTA 2",
                description: "Description for CTA 2",
                code: `
<section class="p-v-4">
  <div class="d-flex bg-color-1 m-v-4 flex-column">
    <h1 class="center white font-weight-600 m-t-4">Try it for free</h1>
    <p class="h6 center white m-t-1">No credit card required. Start your 14-day free trial now.</p>
    <div class="center m-b-4">
      <a href="#" class=" button button-lg bg-white color-1 m-1-2 rounded">Try it now</a>
      <a href="#" class=" button button-lg outline-white white m-1-2 rounded">Contact Sales</a>
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "Pricing",
        items: [
            {
                title: "Pricing 1",
                description: "Description for Pricing 1",
                code: `
<section class="m-v-4 center d-flex flex-column justify-content-center">
  <h2 class="black center text-uppercase">Pricing</h2>
  <p class="display-6 dark">Pick the right plan</p>
  <hr class="width-short m-v-1">
  <div class="row container">
    <div class="col-md-4 bg-light-grey p-v-1 shadow">
      <p class="h3 text-uppercase p-v-1 dark">Standard</p>
      <hr class="width-short">
      <p><span class="display-1 m-v-1">$9</span> /mo</p>
      <hr class="width-short m-v-2">
      <ul class="list-style-none m-v-1 center">
        <li>Full Access</li>
        <li>Source Files</li>
        <li>100 User Accounts</li>
        <li>1 Year License</li>
      </ul>
      <hr class="width-short">
      <a href="#" class="button w-50 button-lg bg-black">Subscribe</a>
    </div>
    <div class="col-md-4  p-v-1 shadow">
      <p class="h3 text-uppercase p-v-1">Professional</p>
      <p class="display-6 dark">Most Popular</p>
      <hr class="width-short">
      <p class="color-1"><span class="display-1 m-v-1">$19</span> /mo</p>
      <hr class="width-short m-v-2">
      <ul class="list-style-none m-v-1 center">
        <li>Full Access</li>
        <li>Source Files</li>
        <li>200 User Accounts</li>
        <li>2 Year License</li>
      </ul>
      <hr class="width-short">
      <a href="#" class="button w-50 button-lg">Subscribe</a>
    </div>
    <div class="col-md-4 bg-light-grey p-v-1 shadow">
      <p class="h3 text-uppercase p-v-1 dark">Business</p>
      <hr class="width-short">
      <p><span class="display-1 m-v-1">$29</span> /mo</p>
      <hr class="width-short m-v-2">
      <ul class="list-style-none m-v-1 center">
        <li>Full Access</li>
        <li>Source Files</li>
        <li>300 User Accounts</li>
        <li>3 Year License</li>
      </ul>
      <hr class="width-short">
      <a href="#" class="button w-50 button-lg bg-black">Subscribe</a>
    </div>

  </div>
</section>
`
            },
            {
                title: "Pricing 2",
                description: "Description for Pricing 2",
                code: `
<section class="m-v-4">
  <p class="display-5 dark center">Package Details</p>
  <hr class="width-short">
  <div class="row container">
    <div class="col-md-9 p1 shadow">
      <p class="display-5 dark p1">Get all what you need in one package?</p>
      <hr class="m1 width-short">
      <div class="row p1">
        <div class="col-md-6 left">
            <ul style="list-style-type:none" class="font-weight-400 line-height-2 p0">
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#222225" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                    </svg>


                    <p class="black d-inline">Ultra Responsive Layouts</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#222225" d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12A0.5,0.5 0 0,1 13,12.5A0.5,0.5 0 0,1 12.5,13A0.5,0.5 0 0,1 12,12.5A0.5,0.5 0 0,1 12.5,12Z"></path>
                    </svg>
                    <p class="black d-inline">Advanced Admin Panel</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#2222225" d="M9.62,12L12,5.67L14.37,12M11,3L5.5,17H7.75L8.87,14H15.12L16.25,17H18.5L13,3H11Z"></path>
                    </svg>
                    <p class="black d-inline">Support for Custom Fonts</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#2222225" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"></path>
                    </svg>
                    <p class="black d-inline">Photoshop Source Files Included</p>
                </li>
            </ul>
        </div>
        <div class="col-md-6 p-h-1 left">
            <ul style="list-style-type:none" class="font-weight-400 line-height-2 p0">
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#2222225" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z">
                        </path>
                    </svg>
                    <p class="black d-inline">Photoshop Source Files Included</p>
                </li>
                <li><svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#222225" d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z"></path>
                    </svg>
                    <p class="black d-inline">Tons of Customization Options</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#222225" d="M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z"></path>
                    </svg>
                    <p class="black d-inline">Premium Sliders Included</p>
                </li>
                <li>
                    <svg viewBox="0 0 24 24" class="m-h-05 icon-xs img-responsive">
                        <path fill="#222225" d="M19.79,15.41C20.74,13.24 20.74,10.75 19.79,8.59L17.05,9.83C17.65,11.21 17.65,12.78 17.06,14.17L19.79,15.41M15.42,4.21C13.25,3.26 10.76,3.26 8.59,4.21L9.83,6.94C11.22,6.35 12.79,6.35 14.18,6.95L15.42,4.21M4.21,8.58C3.26,10.76 3.26,13.24 4.21,15.42L6.95,14.17C6.35,12.79 6.35,11.21 6.95,9.82L4.21,8.58M8.59,19.79C10.76,20.74 13.25,20.74 15.42,19.78L14.18,17.05C12.8,17.65 11.22,17.65 9.84,17.06L8.59,19.79M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"></path>
                    </svg>
                    <p class="black d-inline">24x7 Priority Email Support</p>
                </li>
            </ul>
        </div>
      </div>

    </div>
    <div class="col-md-3 p-v-2 shadow center bg-light-grey">
      <p class="display-6 dark text-uppercase">as low as</p>
      <p class="color-1 display-1 m-v-1">$19</p>
      <p class="display-6 dark text-uppercase">monthly</p>
      <a href="#" class="button w-100 button-lg">Subscribe</a>
    </div>
  </div>
</section>
`
            },
            {
                title: "Pricing 3",
                description: "Description for Pricing 3",
                code: `
<section class="container m-v-4 ">
  <p class="display-5 dark center">Compare Plans</p>
  <hr class="width-short m-v-1">
<div class="container auto-overflow-x">
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="w-50"></th>
        <th>Standard</th>
        <th>Professional</th>
        <th>Business</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Accounts</th>
        <td>1</td>
        <td>5</td>
        <td>20</td>
      </tr>
      <tr>
        <th>Space</th>
        <td>1 GB</td>
        <td>3 GB</td>
        <td>10 GB</td>
      </tr>
      <tr>
        <th>Email Support</th>
        <td>✕</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
      <tr>
        <th>Phone Support</th>
        <td>✕</td>
        <td>✕</td>
        <td>✓</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>$9</td>
        <td>$19</td>
        <td>$29</td>
      </tr>
      <tr>
        <th></th>
        <td>
          <a href="#" class="button bg-black">Subscribe</a>
        </td>
        <td>
          <a href="#" class="button">Subscribe</a>
        </td>
        <td>
          <a href="#" class="button bg-black">Subscribe</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</section>
`
            },
        ]
    },
    {
        name: "Contact",
        items: [
            {
                title: "Contact 1",
                description: "Description for Contact 1",
                code: `
<section class="h-100 d-flex flex-column m-v-2" id="contacts">
  <div class="container m-v-2">
    <h4 class="black bold center text-uppercase">GET IN TOUCH WITH US</h4>
    <p class="dark center display-6">Still have Questions? Contact Us using the Form below.
    </p>
    <hr class="width-short center">
  </div>
  <div class="row container">
    <div class="col-md-6 p1">
      <div class="fancy-title title-fancy-right top-margin">
        <p class="h5 bold black">Send us an email</p>
      </div>
      <div class="row">
        <div class="col-md-4 p-1-8">
          <div class="form-group">
            <label for="exampleInputName1" class="bold">NAME*</label>
            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col-md-4 p-1-8">
          <div class="form-group">
            <label for="exampleInputEmail1" class="bold">EMAIL*</label>
            <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col-md-4 p-1-8">
          <div class="form-group">
            <label for="exampleInputPhone1" class="bold">PHONE</label>
            <input type="tel" class="form-control" id="exampleInputPhone1">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 p-1-8">
          <label for=" exampleInputSubject1" class="bold">SUBJECT*</label>
          <input type="text" class="form-control" id="exampleInputSubject1" aria-describedby="emailHelp">
        </div>
        <div class="col-md-4 p-1-8">
          <div class="form-group">
            <label for="exampleselectServices1" class="bold">SERVICES*</label>
            <select id="exampleselectServices1" class="form-control">
              <option selected="" disabled="">--Select One--</option>
              <option>Wordpress</option>
              <option>PHP / MySQL</option>
              <option>HTML5 / CSS3</option>
              <option>Graphic Design</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 p-1-8">
          <div class="form-group">
            <label for="exampleselectServices1" class="bold">MESSAGE*</label>
            <textarea class="form-control" rows="5" id="comment2"></textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary bg-color-2 text-uppercase">send message</button>
    </div>
    <div class="col-md-6 p1">
      <iframe class="h-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.0995438058467!2d36.32569397172177!3d50.028230542620506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a7655bee7ecd%3A0xade22c5c2ba08ae2!2sKaravan+Mall!5e0!3m2!1sen!2sua!4v1540825240830"
        allowfullscreen="" style="border: 0;" width="100%">
      </iframe>
    </div>
  </div>
</section>
`
            },
            {
                title: "Contact 2",
                description: "Description for Contact 2",
                code: `
<section class="row container m-v-4">
  <div class="col-md-3 p1">
    <div class="outline-color-2 black rounded p2">
      <div class="d-flex justify-content-center m1">
        <i class="icon-box">
          <svg class="icon-color-2-fill icon-m" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
            </path>
          </svg>
        </i>
      </div>
      <h5 class="center bold">OUR LOCATION</h5>
      <p class="center dark h6">Kharkov, Ukraine</p>
    </div>
  </div>
  <div class="col-md-3 p1">
    <div class="outline-color-2 black rounded p2">
      <div class="d-flex justify-content-center m1">
        <i class="icon-box">
          <svg class="icon-color-2-fill  icon-m" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z">
            </path>
          </svg>
        </i>
      </div>
      <h5 class="center bold">PHONE CALL</h5>
      <p class="center dark h6">(86) 123 456 789</p>
    </div>
  </div>
  <div class="col-md-3 p1">
    <div class="outline-color-2 black rounded p2">
      <div class="d-flex justify-content-center m1">
        <i class="icon-box">
          <svg class="icon-color-2-fill  icon-m" viewBox="0 0 24 24">
            <path
              d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z">
            </path>
          </svg>
        </i>
      </div>
      <h5 class="center bold">Send Email</h5>
      <p class="center dark h6">info@example.com</p>
    </div>
  </div>
  <div class="col-md-3 p1">
    <div class="outline-color-2 black rounded p2">
      <div class="d-flex justify-content-center m1">
        <i class="icon-box">
          <svg viewBox="0 0 24 24" class="icon-color-2-fill  icon-m">
            <path
              d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z">
            </path>
          </svg>
        </i>
      </div>
      <h5 class="center bold">FOLLOW US</h5>
      <p class="center dark h6">4.3K Followers</p>
    </div>
  </div>
</section>
`
            },
            {
                title: "Contact 3",
                description: "Description for Contact 3",
                code: `
<section class="row w-100">
  <div class="map col-md-8">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.3389252056154!2d36.23284021559873!3d50.00500237941637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e09c6500c1%3A0xac08227baf5f1911!2z0L_Quy4g0KHQstC-0LHQvtC00YssIDgsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1555663309439!5m2!1sru!2sua"
      width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="">
    </iframe>
  </div>
  <div class="container col-md-4 bg-dark p1">
    <h5 class="white bold m1">Contact Us</h5>
    <div class="">
      <div class="row white">
        <div class=" col-2 p0">
          <svg viewBox="0 0 24 24" class="icon-s m-v-1 icon-white-fill">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path>
          </svg>
        </div>
        <div class="col-10 p0">
          <div class="p0 grey small">Call Us</div>
          <div class="p0 m0 bold white">(86) 123 456 789</div>
        </div>
      </div>
      <div class="row white">
        <div class=" col-2 p0">
          <svg viewBox="0 0 24 24" class="icon-s m-v-1 icon-white-fill">
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"></path>
          </svg>
        </div>
        <div class="col-10 p0">
          <div class="p0 grey small">Our Location</div>
          <div class="p0 m0 bold white text-uppercase">Kharkov, Ukraine</div>
        </div>
      </div>
      <div class="m-t-2">
        <p class="text-uppercase white bold">send a message</p>
        <div class="row">
          <div class="form-group col-md-6 p-1-16">
            <input type="text" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp"
              placeholder="YOUR NAME">
          </div>
          <div class="form-group col-md-6 w-100  p-1-16">
            <input type="tel" class="form-control" id="exampleInputLastName1" aria-describedby="emailHelp"
              placeholder="PHONE">
          </div>
        </div>
        <div class="row">
          <div class="form-group w-100 p-1-16">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="EMAIL ADDRESS">
          </div>
        </div>
        <div class="form-group">
          <textarea class="form-control p-1-16" rows="5" id="comment" placeholder="COMMENT"></textarea>
        </div>
        <div class="right">
          <a type="submit" class="button white small bold bg-black">SUBMIT</a>
        </div>
      </div>

    </div>
  </div>

</section>
`
            },
            {
                title: "Contact 4",
                description: "Description for Contact 4",
                code: `
<section class="m-v-4">

  <div class=" container row m-t-6">
    <div class="col-md-4 center">
      <h5 class="grey bold">Email Us</h5>
      <p class="bold info h6">cssvars@company.pro</p>
    </div>
    <div class="col-md-4 center">
      <h5 class="grey bold">Call</h5>
      <p class="bold info h6">123 456 789</p>
    </div>
    <div class="col-md-4 center">
      <h5 class="grey bold">Support</h5>
      <p class="bold info h6"><a class="info">Leave a message</a></p>
    </div>
    <hr class="col-12">
  </div>
  <h1 class="m-t-2 center bold black">Start the conversation</h1>
  <h6 class="dark center font-weight-400 m-t-1">Duis aute irure dolor in reprehenderit in voluptate velit esse<br>
    cillum dolore eu fugiat nulla pariatur.</h6>
  <div class="container-half-fluid m-t-4">

    <form class="container">
      <div class="form-row">
        <div class="form-group col-md-6">
          <input type="name" class="form-control" id="inputName4" placeholder="Full Name">
        </div>
        <div class="form-group col-md-6">
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email Adress">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input type="text" class="form-control" id="inputCompany" placeholder="Company optional">

        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" id="inputCompany" placeholder="Phone">


        </div>

      </div>


      <div class="form-group">
        <textarea class="form-control" rows="5" id="comment" placeholder="Comments"></textarea>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" class="btn bg-info btn-primary">Send Message</button>
    </form>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "Footer",
        items: [
            {
                title: "Footer 1",
                description: "Description for Footer 1",
                code: `
<footer class="center p2 color-1 bg-light-grey m-t-4">
  <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/cssvars-logo-with-text.png" class="h-4rem">
  <p class="color-1 smaller">
    Built with love in by Kim Majali,
    <a href="https://www.europeitoutsourcing.com/">EITO</a> team, and contributors.

    <a href="https://github.com/majalinet/Agile-CSS" target="_blank">
      <i class="icon-box">
        <svg viewBox="0 0 24 24" class="icon-color-1-fill  icon-s">
          <path
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z">
          </path>
        </svg>
      </i>
    </a>
  </p>
</footer>
`
            },
            {
                title: "Footer 2",
                description: "Description for Footer 2",
                code: `
<footer class="p-v-1 row container">
  <div class="col-md-6">
    <p class="center small black left m-v-1"> © Copyright 2025. All Rights Reserved Europe IT Outsourcing
      Company. <span class="smaller"><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></span>
    </p>
  </div>
  <div class="col-md-6 right">
    <i class="icon-box hover-grey">
      <svg viewBox="0 0 24 24" class="icon-xs">
        <path fill="#222225"
          d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
      </svg>
    </i>
    <i class="icon-box hover-grey">
      <svg viewBox="0 0 24 24" class="icon-xs">
        <path fill="#222225"
          d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z">
        </path>
      </svg>
    </i>
  </div>
</footer>
`
            },
            {
                title: "Footer 3",
                description: "Description for Footer 3",
                code: `
<footer class="bordered-top-light-grey  d-block">
  <div class="row container m-v-1">
    <div class="col-md-6 col-lg-3">
      <h5 class="h6 m-v-05 font-weight-400">Company</h5>
      <ul class="no-indent-ul">
        <li class="m-h-1"><a href="about.html">About</a></li>
        <li class="m-h-1"><a href="news.html">News</a></li>
      </ul>
    </div>
    <div class="col-md-6 col-lg-3">
      <h5 class="h6 m-v-05 font-weight-400">Products</h5>
      <ul class="no-indent-ul">
        <li class="m-h-1"><a href="search.html">Search products</a></li>
        <li class="m-h-1"><a href="Products.html">Browse products</a></li>
      </ul>
    </div>
    <div class="col-md-6 col-lg-3">
      <h5 class="h6 m-v-05 font-weight-400">Sellers</h5>
      <ul class="no-indent-ul">
        <li class="m-h-1"><a href="Responsibility.html">Responsibility</a></li>
        <li class="m-h-1"><a href="how-to-host.html">How to join</a></li>
      </ul>
    </div>
    <div class="col-md-6 col-lg-3">
      <h5 class="h6 m-v-05 font-weight-400">Support</h5>
      <ul class="no-indent-ul">
        <li class="m-h-1"><a href="faq.html">F.A.Q</a></li>
        <li class="m-h-1"><a href="contact-us.html">Contact us</a></li>
      </ul>
    </div>
    <div class=" p-v-1 small row bordered-top-light-grey m-t-2">
      <p class="color-1">
        <a href="#" id="logo" target="_blank" rel="noopener noreferrer">
          <img class="icon-xs" src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png">
        </a>
        © Copyright 2025. All rights reserved for inc. <a href="terms.html">Terms</a>. 
        <a href="privacy.html">Privacy</a></p>
      <p>
        <i><a href="#" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" class="hover-shadow icon-ssm icon-box icon-color-1-fill">
              <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
            </svg>
          </a></i>
        <i><a href="#" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" class="hover-shadow icon-ssm icon-box icon-color-1-fill">
              <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
            </svg>
          </a></i>
      </p>
    </div>
  </div>
</footer>
`
            },
            {
                title: "Footer 4",
                description: "Description for Footer 4",
                code: `
<footer class="container-fluid row">
  <div class="col-md-6 col-lg-3 p2">
    <a href="https://www.europeitoutsourcing.com">
      <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="icon-m m-b-2" alt="Europe IT Outsourcing Logo"></a>
    <p class="smaller">Europe IT Outsourcing is your team of expert and certified professionals,
      accompanied with many well-trained professionals, and 10's of essential tools to grow your business.</p>

      <p class="small"></a>
      © Copyright 2025. All rights reserved for inc. <a href="terms.html">Terms</a>. 
      <a href="privacy.html">Privacy</a></p>

  </div>
  <div class="col-md-6 col-lg-3 p2">
    <p class="h4 black">Location</p>
    <iframe class=" w-100"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10163.10790377248!2d30.5048645!3d50.4452547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8176aca03e72dc3!2sHilton+Kyiv!5e0!3m2!1sen!2sua!4v1540554610949"
      width="100%" height="200px" style="border:0;" allowfullscreen=""></iframe>


  </div>
  <div class="col-md-6 col-lg-3 p2">
    <p class="h4 black">Connect</p>
    <div itemscope="" itemtype="http://schema.org/Organization" style="font-size: 14px; color:#4e4e4e;">
      <span itemprop="name">Europe IT Outsourcing</span><br>
      <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">Geroyev Truda 4,</span>
        <span itemprop="addressCity">Kharkov</span> <span itemprop="addressCountry">Ukraine</span><br>
        <span style="font-weight: 600">Phone:</span>
        <span itemprop="telephone">+123 456 7890</span>
        <br><span style="font-weight: 600">Email:</span><span> info@example.com</span>
      </div>
      
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="icon-box  hover-shadow">
          <svg viewBox="0 0 24 24" class="icon-color-1-fill  icon-s">
            <path
              d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z">
            </path>
          </svg>
        </i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="icon-box  hover-shadow">
          <svg viewBox="0 0 24 24" class="icon-color-1-fill  icon-s">
            <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
          </svg>
        </i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="icon-box hover-shadow">
          <svg viewBox="0 0 24 24" class="icon-color-1-fill  icon-s">
            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
          </svg>
        </i>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="icon-box hover-shadow">
          <svg viewBox="-7 0 32 32" class="icon-color-1-fill  icon-s">
            <path d="M16.844 9.156l-6.375 7.875 6.938 8.563h-2.906l-5.469-6.781-5.5 6.781h-2.906l6.969-8.563-6.375-7.875h2.906l4.906 6.063 4.875-6.063h2.938z"></path>
          </svg>
        </i>
      </a>


      <form class="row">
        <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
          placeholder="Enter your email to receive our newsletter">


        <button type="submit" class="button w-100 w-100">Submit</button>

      </form>
    </div>


  </div>
  <div class="col-md-6 col-lg-3 p2">
    <p class="h4 black">Links</p>
    <ul class="no-indent-ul">
      <li><a href="#">Who We Are</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Partnership</a></li>
      <li><a href="#get-quote" class="bold">Get A Free Consultation</a></li>
    </ul>
  </div>    
</footer>
`
            },
        ]
    },
    {
        name: "Blog",
        items: [
            {
                title: "Blog 1",
                description: "Description for Blog 1",
                code: `
<section class=" bg-light-grey p-v-3">
  <div class="container p-v-1">
    <h4 class="black bold center">Our Blog</h4>
    <p class="text-uppercase dark center">RECENT POSTS</p>
  </div>
  <div class="row container">
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-1.jpg" alt="alttext" class="img-responsive">
      </a>
      <div class="row justify-content-end p-h-1">
        <span class="p-h-1 small bg-black p-1-2">
          <p class="font-weight-400 m0 white text-uppercase smaller font-weight-400">oct-4-2025</p>
        </span>
      </div>
      <div class="bg-white">
        <div class="p-h-2 p-v-2">
          <p class="text-uppercase dark small m0 p0">marketing</p>
          <a href="#" class="bold black text-uppercase p0">How to Attract a Customer with a Marketing
            Model AIDA?</a>
          <p class="line-height-17 dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-10.jpg" alt="alttext" class="img-responsive">
      </a>
      <div class="row justify-content-end p-h-1">
        <span class="p-h-1 small bg-black p-1-2">
          <p class="font-weight-400 m0 white text-uppercase smaller font-weight-400">sep-7-2025</p>
        </span>
      </div>
      <div class="bg-white">
        <div class="p-h-2 p-v-2">
          <p class="text-uppercase dark small m0 p0">GRAPHIC DESIGN</p>
          <a href="#" class="bold black text-uppercase p0">Masking, Effects &amp; Patterns in Adobe
            Illustrator</a>
          <p class="line-height-17 dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-2.jpg" alt="alttext" class="img-responsive">
      </a>
      <div class="row justify-content-end p-h-1">
        <span class="p-h-1 small bg-black p-1-2">
          <p class="font-weight-400 m0 white text-uppercase smaller font-weight-400">sep-4-2025</p>
        </span>
      </div>
      <div class="bg-white">
        <div class="p-h-2 p-v-2">
          <p class="text-uppercase dark small m0 p0">web design</p>
          <a href="#" class="bold black text-uppercase p0">Quality Web Design Principles To Follow in 2025</a>
          <p class="line-height-17 dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center m-v-2">
    <a href="#" class="button bg-black text-uppercase bold small p-v-1 p-h-2">view our blog</a>
  </div>
</section>
`
            },
            {
                title: "Blog 2",
                description: "Description for Blog 2",
                code: `
<section class=" bg-light-grey p-v-3">
  <div class="row m-v-1">
      <div class="col-md-12 center">
          <h2 class="center black">Latest News</h2>
          <hr class=" width-short m-v-2">
      </div>
  </div>
  <div class="row container">
      <div class="col-md-6">
          <div class="outline-light-grey m0">
              <div class="row">
                  <div class="col-4 p0 m0">
                      <img src="../img/blocks/shop1.jpg" class="img-responsive">
                  </div>
                  <div class="col-8 left p1">
                      <p><span class="font-weight-400 left"><a href="#" class=" h5 black">Related article post
                                  name</a></span>
                          <span class="badge black">Admin wrote on 5/2/2019</span>
                        </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nisi perferendis.
                      </p>
                      <div class="m-v-1">
                          <a href="#">Read More →</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-md-6">
          <div class="outline-light-grey m0">
              <div class="row">
                  <div class="col-4 p0 m0">
                      <img src="../img/blocks/shop6.jpg" class="img-responsive">
                  </div>

                  <div class="col-8 left p1">
                      <p><span class="font-weight-400 left"><a href="#" class=" h5 black">Related article post
                                  name</a></span>
                          <span class="badge black">Admin wrote on 5/2/2019</span>
                        </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nisi perferendis.
                      </p>
                      <div class="m-v-1">
                          <a href="#">Read More →</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
`
            },
            {
                title: "Blog 3",
                description: "Description for Blog 3",
                code: `
<section class="section bg-light-grey p-v-4">
  <div class="row m4 bg-white outline-color-grey">
    <div class="col-md-6 p1 m-auto">
      <div class="container">
        <p class="d-inline font-weight-600 left h6 badge larger bga-success">Marketing</p>
        <p class="d-inline dark font-weight-400 m-h-1">2 March, 2023</p>
        <h3 class="black bold left m-t-2">How to Attract a Customer with a Marketing Model AIDA?</h3>
        <p class="m-t-1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.</p>
        <div class="row">
          <div class="col-9 p-h-2">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 m0 p0">
      <img src="../img/blocks/work-4.jpg" class=" img-responsive  h-100">
    </div>
  </div>
  <div class="row m4 m-t-2 bg-white outline-color-grey">
    <div class="col-md-6 p1 m-auto">
      <div class="container m-t-4">
        <p class="d-inline font-weight-600 left h6 badge larger bga-success">Startups</p>
        <p class="d-inline dark font-weight-400 m-h-1">13 March, 2023</p>
        <h3 class="black bold left m-t-2">10 Tips on How to Make Your Content Better</h3>
        <p class="m-t-1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.</p>
        <div class="row">
          <div class="col-9 p-h-2">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 m0 p0">
      <img src="../img/blocks/work-5.jpg" class=" img-responsive  h-100">
    </div>
  </div>
</section>
`
            },
            {
                title: "Blog 4",
                description: "Description for Blog 4",
                code: `
<section class="bg-color-1 p-v-4">
  <div class="p-v-3 container m-b-4 bga-grey">
    <div class="row">
      <div class="col-md-2">
        <img src="../img/blocks/worker-2-s.jpg" class="img-responsive circle icon-lg">
      </div>
      <div class="col-md-10">
        <p class="grey">March 10, 2025</p>
        <h5 class="white bold left">How to Attract a Customer with a Marketing Model AIDA?</h5>
        <p class="grey left">Habitant morbi tristique senectus et netus et malesuada fames. Tristique nulla aliquet enim
          tortor at<br> auctor urna.Aliquam nulla facilisi cras fermentum odio. Fermentum dui faucibus in ornare. </p>
        <a href="#" class="info bold">Read Story</a>
      </div>
    </div>
  </div>

  <div class="p-v-3 container bga-grey">
    <div class="row">
      <div class="col-md-2">
        <img src="../img/blocks/worker-1-s.jpg" class="img-responsive circle icon-lg">
      </div>
      <div class="col-md-10">
        <p class="grey">March 19, 2025</p>
        <h5 class="white bold left">How do Content Marketing, Content Strategy Differ?</h5>
        <p class="grey left">Habitant morbi tristique senectus et netus et malesuada fames. Tristique nulla aliquet enim
          tortor at<br> auctor urna.Aliquam nulla facilisi cras fermentum odio. Fermentum dui faucibus in ornare. </p>
        <a href="#" class="info bold">Read Story</a>
      </div>
    </div>
  </div>
</section>
`
            },
        ]
    },
//     {
//         name: "E-commerce",
//         items: [
//           {
//                 title: "E-commerce 1",
//                 description: "Description for E-commerce 1",
//                 code: `

// `
//             },
//         ]
//     },
    {
        name: "Portfolio",
        items: [
            {
                title: "Portfolio 1",
                description: "Description for Portfolio 1",
                code: `
<section class="row container" id="portfolio">
  <div class="topmargin container p-v-1">
    <h4 class="black bold center text-uppercase">OUR WORKS</h4>
    <p class="dark center display-6">Some of the Awesome Projects we've worked on.</p>
    <hr class="width-short center w-50">
  </div>
  <div class="col-md-3 p0">
    <div class="position-relative">
      <img src="../img/blocks/work-1.jpg" alt="alttext" class="img-responsive brightness-33-hover">
      <div class="center p-v-2">
        <a href="#" class="h6 black">Open Imagination</a><br>
        <a href="#" class="dark">Media,</a> <a href="#" class="dark">Icons</a>
      </div>
    </div>
  </div>
  <div class="col-md-3 p0">
    <div class="position-relative">
      <img src="../img/blocks/work-5.jpg" alt="alttext" class="img-responsive brightness-33-hover">
      <div class="center p-v-2">
        <a href="#" class="h6 black">Locked Steel Gate</a><br>
        <a href="#" class="dark">Illustrations</a>
      </div>
    </div>
  </div>
  <div class="col-md-3 p0">
    <div class="position-relative">
      <img src="../img/blocks/work-2.jpg" alt="alttext" class="img-responsive brightness-33-hover">
      <div class="center p-v-2">
        <a href="#" class="h6 black">Mac Sunglasses</a><br>
        <a href="#" class="dark">Graphics,</a> <a href="#" class="dark">UI Elements</a>
      </div>
    </div>
  </div>
  <div class="col-md-3 p0">
    <div class="position-relative">
      <img src="../img/blocks/work-4.jpg" alt="alttext" class="img-responsive brightness-33-hover">
      <div class="center p-v-2">
        <a href="#" class="h6 black">Morning Dew</a><br>
        <a href="#" class="dark">Icons,</a> <a href="#" class="dark">Illustrations</a>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Portfolio 2",
                description: "Description for Portfolio 2",
                code: `
<section class="row bg-light-grey p-v-3">
  <div class="topmargin container p-v-1">
    <h4 class="black bold center">Cases</h4>
    <p class="text-uppercase dark center">SUCCESFULL PROJECTS</p>
  </div>
  <div class="row container">
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-1.jpg" alt="alttext" class="img-responsive brightness-100-hover brightness-66">
      </a>
      <div class="bg-white">
        <div class="center p-v-2">
          <a href="#" class="bold black text-uppercase">agile website</a>
          <p class="text-uppercase dark small">SUCCESFULL PROJECTS</p>
        </div>
        <div class="center p-v-1 bg-light-grey m0">
          <a href="#" class="button bg-black text-uppercase bold small p-v-1 p-h-2 button-s">View more</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-2.jpg" alt="alttext" class="img-responsive brightness-100-hover brightness-66">
      </a>
      <div class="bg-white">
        <div class="center p-v-2">
          <a href="#" class="bold black text-uppercase">agile app</a>
          <p class="text-uppercase dark small">mobile app</p>
        </div>
        <div class="center p-v-1 bg-light-grey m0">
          <a href="#" class="button bg-black text-uppercase bold small p-v-1 p-h-2 button-s">View more</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 p1">
      <a href="#">
        <img src="../img/blocks/work-4.jpg" alt="alttext" class="img-responsive brightness-100-hover brightness-66">
      </a>
      <div class="bg-white">
        <div class="center p-v-2">
          <a href="#" class="bold black text-uppercase">agile brand</a>
          <p class="text-uppercase dark small">brand</p>
        </div>
        <div class="center p-v-1 bg-light-grey m0">
          <a href="#" class="button bg-black text-uppercase bold small p-v-1 p-h-2 button-s">View more</a>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Portfolio 3",
                description: "Description for Portfolio 3",
                code: `
<div class="row container-fluid m-v-4">
  <div class="col-md-4 outline-light-grey p1">
    <div class="post">
      <div class="post-top">
        <a href="#">
          <figure><img src="../img/blocks/work-1.jpg" class="post-top-img img-responsive rounded"></figure>
        </a>
      </div>
      <div class="post-content">
        <a href="#">
          <h5 class="bold black left">Project World Media</h5>
        </a>
        <p class="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. </p>
        <a href="" class="info bold">Read Story</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 outline-light-grey p1">
    <div class="post">
      <div class="post-top">
        <a href="#">
          <figure><img src="../img/blocks/work-2.jpg" class="post-top-img img-responsive rounded"></figure>
        </a>
      </div>
      <div class="post-content">
        <a href="#">
          <h5 class="bold black left">The Project</h5>
        </a>
        <p class="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. </p>
        <a href="" class="info bold">Read Story</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 outline-light-grey p1">
    <div class="post">
      <div class="post-top">
        <a href="#">
          <figure><img src="../img/blocks/work-4.jpg" class="post-top-img img-responsive rounded"></figure>
        </a>
      </div>
      <div class="post-content">
        <a href="#">
          <h5 class="bold black left">City Project</h5>
        </a>
        <p class="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. </p>
        <a href="" class="info bold">Read Story</a>

      </div>
    </div>
  </div>
</div>
`
            },
        ]
    },
    {
        name: "Team",
        items: [
            {
                title: "Team 1",
                description: "Description for Team 1",
                code: `
<section class="row container m-v-4">
  <div class="p-v-1 col-md-12">
    <h4 class="center black text-uppercase bold">Our team</h4>
    <p class="dark center display-6">People who have contributed enormously to our Company.
    </p>
    <hr class="width-short center w-50">
  </div>
  <div class="col-md-6 row m-v-2">
      <div class="col-md-5 p0">
        <img src="../img/blocks/worker-1.jpg" alt="alttext" class="img-responsive col-md-5">
      </div>
      <div class="col-md-7 p-h-1 bg-white">
        <p class="h6 bold black text-uppercase m0">bob DOE</p>
        <p class="color-2 italic">CEO</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6 row m-v-2">
      <div class="col-md-5 p0">
        <img src="../img/blocks/worker-2.jpg" alt="alttext" class="img-responsive col-md-5">
      </div>
      <div class="col-md-7 p-h-1 bg-white">
        <p class="h6 bold black text-uppercase m0">bella DOE</p>
        <p class="color-2 italic">Developer</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6 row m-v-2">
      <div class="col-md-5 p0">
        <img src="../img/blocks/worker-4.jpg" alt="alttext" class="img-responsive col-md-5">
      </div>
      <div class="col-md-7 p-h-1 bg-white">
        <p class="h6 bold black text-uppercase m0">kim DOE</p>
        <p class="color-2 italic">Co-Founder</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6 row m-v-2">
      <div class="col-md-5 p0">
        <img src="../img/blocks/worker-3.jpg" alt="alttext" class="img-responsive col-md-5">
      </div>
      <div class="col-md-7 p-h-1 bg-white">
        <p class="h6 bold black text-uppercase m0">Ann DOE</p>
        <p class="color-2 italic">Support</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
</div>
</section>
`
            },
            {
                title: "Team 2",
                description: "Description for Team 2",
                code: `
<section class="row container m-v-4">
  <div class="p-v-1 col-md-12">
    <h4 class="center black text-uppercase bold">Our team</h4>
    <p class="dark center display-6">People who have contributed enormously to our Company.
    </p>
    <hr class="width-short center w-50">
  </div>
  <div class=" col-12 col-md-6 col-lg-3 row p-1-2">
      <img src="../img/blocks/worker-1.jpg" alt="alttext" class="col-12 img-responsive">
      <div class="p-t-1 bg-white shadow-3 p-1-2">
        <p class="h6 bold black text-uppercase m0">bob DOE</p>
        <p class="color-2 italic">CEO</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
  <div class=" col-12 col-md-6 col-lg-3 row p-1-2">
      <img src="../img/blocks/worker-2.jpg" alt="alttext" class="col-12 img-responsive">
      <div class="p-t-1 bg-white shadow-3 p-1-2">
        <p class="h6 bold black text-uppercase m0">bella DOE</p>
        <p class="color-2 italic">Developer</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
  <div class=" col-12 col-md-6 col-lg-3 row p-1-2">
      <img src="../img/blocks/worker-4.jpg" alt="alttext" class="col-12 img-responsive">
      <div class="p-t-1 bg-white shadow-3 p-1-2">
        <p class="h6 bold black text-uppercase m0">kim DOE</p>
        <p class="color-2 italic">Co-Founder</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
  <div class=" col-12 col-md-6 col-lg-3 row p-1-2">
      <img src="../img/blocks/worker-3.jpg" alt="alttext" class="col-12 img-responsive">
      <div class="p-t-1 bg-white shadow-3 p-1-2">
        <p class="h6 bold black text-uppercase m0">Ann DOE</p>
        <p class="color-2 italic">Support</p>
        <p class="dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          assumenda similique unde mollitia.
        </p>
        <div class="row">
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </i>
          </a>
          <a href="#:">
            <i class="icon-box circle m0 bordered hover-grey">
              <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
</div>
</section>
`
            },
        ]
    },
]










const blockList = document.getElementById("blocksList")
const blocksIndex = document.getElementById("blocksIndex")
for (const block of blocks) {
    const categoryHeader = document.createElement("p")
    categoryHeader.className = "text-uppercase font-semibold m-b-0"
    categoryHeader.id = block.name.replace(/\s+/g, '-').toLowerCase() + "-header"
    categoryHeader.innerHTML = `<a href="#${categoryHeader.id}">${block.name}</a>`;
    categoryHeader.innerHTML = block.name;
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
    blockId = title.replace(/\s+/g, '-').toLowerCase()
    window.location.hash = blockId;
    document.title = `${blockItem.title} | CSSvars Blocks`;

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

function loadBlockFromHashOrDefault() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    console.log('found')
    // Try to find block by hash (title converted to id)
    for (const block of blocks) {
      for (const item of block.items) {
        if (item.title.replace(/\s+/g, '-').toLowerCase() === hash) {
          loadBlock(item.title);
          return;
        }
      }
    }
  }
  // If no hash or not found, load first block
      console.log('not found')
  if (blocks.length && blocks[0].items.length) {
    loadBlock(blocks[0].items[0].title);
  }
}

// Call on page load
window.addEventListener("DOMContentLoaded", loadBlockFromHashOrDefault);