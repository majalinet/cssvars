// Header, Hero, breadcrumb, Content, List, Feature, CTA, Contact, Footer, Blog, E-commerce, Gallery, Navigation, 
// Step, Team, Pricing, Product, Testimonial, Video, Statistic, portfolio,

const blocks = [
    {
        name: "Header",
        items: [
            {
                title: "Header Default",
                display: "Default",
                description: "Simple nav, top-border hover, logo left, links right, burger on mobile",
                code: `
    <div class="main-nav p1">
        <div class="main-menu nav-top-border-hover">
            <input type="checkbox" id="toggle-h1">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem" alt="Logo">
            </a>
            <div class="nav-panel">
                <nav class="nav justify-content-end">
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact" class="bold">Contact</a>
                </nav>
            </div>
            <label for="toggle-h1" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header With sub-header",
                display: "With sub-header",
                description: "Contact info bar above a bottom-border hover nav",
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
    <div class="main-nav ">
        <div class="main-menu nav-bottom-border-hover">
            <input type="checkbox" id="toggle-h2">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem" alt="Logo">
            </a>
            <div class="nav-panel">
                <nav class="nav justify-content-end">
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact" class="bold">Contact</a>
                </nav>
            </div>
            <label for="toggle-h2" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header Background",
                display: "Background",
                description: "Tinted background bar, background-hover nav links",
                code: `
    <div class="main-nav p1">
        <div class="main-menu bga-color-1 rounded nav-bg-hover">
            <input type="checkbox" id="toggle-h3">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2" alt="Logo">
            </a>
            <div class="nav-panel">
                <nav class="nav justify-content-end">
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact" class="bold">Contact</a>
                </nav>
            </div>
            <label for="toggle-h3" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header Dark",
                display: "Dark",
                description: "Dark background nav, white links, top-border hover",
                code: `
    <div class="main-nav p1 rounded">
        <div class="main-menu bg-dark rounded main-nav-white nav-top-border-hover">
            <input type="checkbox" id="toggle-h4">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2" alt="Logo">
            </a>
            <div class="nav-panel">
                <nav class="nav justify-content-end">
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact" class="bold">Contact</a>
                </nav>
            </div>
            <label for="toggle-h4" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-white-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-white-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header Shadow",
                display: "Shadow",
                description: "Grouped-right layout: logo left, links + persistent Login/Sign Up actions grouped on the right",
                code: `
    <div class="main-nav p1 rounded">
        <div class="main-menu rounded shadow-3">
            <input type="checkbox" id="toggle-h5">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2" alt="Logo">
            </a>
            <div class="nav-panel">
                <div class="nav-group">
                    <nav class="nav nav-top-border-hover ">
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#services">Services</a>
                        <a href="#gallery">Gallery</a>
                    </nav>
                    <div class="nav-actions">
                        <a href="#login">Login</a>
                        <a href="#signup" class="button">Sign Up</a>
                    </div>
                </div>
            </div>
            <label for="toggle-h5" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header Dropdown",
                display: "Dropdown",
                description: "Nav with a dropdown submenu (checkbox toggle, no JS) using the shared .dropdown component",
                code: `
    <div class="main-nav p1 nav-top-border-hover">
        <div class="main-menu">
            <input type="checkbox" id="toggle-h6">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem" alt="Logo">
            </a>
            <div class="nav-panel">
                <nav class="nav justify-content-end">
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <div class="dropdown">
                        <input type="checkbox" id="services-dropdown" class="dropdown-state">
                        <label for="services-dropdown" class="dropdown-toggle">Services</label>
                        <ul class="dropdown-menu menu">
                            <li class="dropdown-header">Our Services</li>
                            <li class="menu-item">
                                <a href="#web-design">
                                    <svg viewBox="0 0 24 24" class="menu-item-icon icon-color-1-fill">
                                        <path d="M4,2A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H10V20H8V22H16V20H14V18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2H4M4,4H20V14H4V4Z"></path>
                                    </svg>
                                    Web Design
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="#development">
                                    <svg viewBox="0 0 24 24" class="menu-item-icon icon-color-1-fill">
                                        <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path>
                                    </svg>
                                    Development
                                </a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li class="menu-item">
                                <a href="#consulting">
                                    <svg viewBox="0 0 24 24" class="menu-item-icon icon-color-1-fill">
                                        <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"></path>
                                    </svg>
                                    Consulting
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact" class="bold">Contact</a>
                </nav>
            </div>
            <label for="toggle-h6" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header Mega Menu",
                display: "Mega Menu",
                description: "Nav with a full-width mega menu panel using .nav-mega (its own dedicated component, no JS)",
                code: `
    <div class="main-nav p1 nav-top-border-hover">
        <div class="main-menu">
            <input type="checkbox" id="toggle-h7">
            <a href="#" class="logo">
                <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem" alt="Logo">
            </a>
            <div class="nav-panel">
                <nav class="nav justify-content-end">
                    <a href="#about">About</a>
                    <div class="nav-mega">
                        <input type="checkbox" id="products-mega" class="nav-mega-state">
                        <label for="products-mega" class="nav-mega-toggle">Products</label>
                        <div class="nav-mega-panel">
                            <div class="row">
                                <div class="col-12 col-md-4">
                                    <p class="bold text-uppercase small color-1">Platform</p>
                                    <ul class="menu">
                                        <li class="menu-item"><a href="#analytics">Analytics</a></li>
                                        <li class="menu-item"><a href="#automation">Automation</a></li>
                                        <li class="menu-item"><a href="#integrations">Integrations</a></li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-4">
                                    <p class="bold text-uppercase small color-1">Solutions</p>
                                    <ul class="menu">
                                        <li class="menu-item"><a href="#startups">For Startups</a></li>
                                        <li class="menu-item"><a href="#enterprise">For Enterprise</a></li>
                                        <li class="menu-item"><a href="#agencies">For Agencies</a></li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-4">
                                    <img src="../img/blocks/worker-1.jpg" alt="Featured" class="w-4rem rounded">
                                    <p class="bold m-t-1 m-b-0">New: Workflow Builder</p>
                                    <p class="dark small">Automate repetitive tasks in minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact" class="bold">Contact</a>
                </nav>
            </div>
            <label for="toggle-h7" class="toggle-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
            </label>
        </div>
    </div>`
            },
            {
                title: "Header 8",
                display: "Left on Hero",
                description: "Nav with a full-width mega menu panel using .nav-mega (its own dedicated component, no JS)",
                code: `
<section class="position-relative" style="height:85vh;min-height:34rem;">
<header class="position-absolute top-0 left-0 w-100" style="z-index:10;">
  <div class="container">
    <nav class="main-nav">
      <div class="main-menu p-v-2">
        <input type="checkbox" id="nav-toggle-4">
        <a href="#" class="logo h3 m-b-0 white">Lorem</a>
        <div class="nav-panel">
          <nav class="nav">
            <a href="#menu" class="white">Menu</a>
            <a href="#about" class="white">Our story</a>
            <a href="#gallery" class="white">Gallery</a>
          </nav>
          <div class="nav-actions">
            <a href="#reserve" class="button outline-color-white white rounded-0">Reserve a table</a>
          </div>
        </div>
        <label for="nav-toggle-4" class="toggle-menu">
          <span class="icon-menu-open"><svg class="icon icon-sm icon-white-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg></span>
          <span class="icon-menu-close"><svg class="icon icon-sm icon-white-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></span>
        </label>
      </div>
    </nav>
  </div>
</header>
  <img src="https://picsum.photos/seed/restauranthero1/1600/1000" class="position-absolute top-0 left-0 w-100 h-100" style="object-fit:cover;" alt="Lorem ipsum dining room">
  <div class="position-absolute top-0 left-0 w-100 h-100 bg-black opacity05"></div>
  <div class="position-relative h-100 grid-center">
    <div class="center container">
      <span class="white small text-uppercase" style="letter-spacing:.2em;">Est. lorem ipsum</span>
      <h1 class="display-1 white m-v-2">Dolor Sit Amet</h1>
      <p class="white lead m-b-3" style="opacity:.85;">Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
      <a href="#reserve" class="button button-lg bg-color-1 white rounded-0">Reserve a table</a>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Header 9",
                display: "Sticky transparent",
                description: "Nav with a full-width mega menu panel using .nav-mega (its own dedicated component, no JS)",
                code: `
<div class="position-fixed w-100-vw top-0 left-0  shadow-none">
        <div class="main-nav container">
            <div class="main-menu rounded-0 ">
                <input type="checkbox" id="toggle-h5">
                <a href="index.html" class="logo">
                    <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2" alt="Logo">
                </a>
                <div class="nav-panel">
                    <div class="nav-group">
                        <nav class="nav nav-top-border-hover">
                                    <a href="#pages" class="white">pages</a>
                                    <a href="#portfolio" class="white">portfolio</a>
                                    <a href="#blog" class="white">blog</a>
                                    <a href="#shop" class="white">shop</a>
                                    <a href="#elements" class="white">elements</a>
                        </nav>
    
                    </div>
                </div>
                <label for="toggle-h5" class="toggle-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                    </svg>
                </label>
            </div>
        </div>
    </div>
    <div class="h-100-vh rounded-0 parallax-img p0" style="background-image: url('../img/templates/technology-2.jpg'); ">
        <div class="container p-v-2">
            <div class="p-v-4 m-v-4">
                <h1 class="p0 white center display-1 topmargin">Inspirational &amp;<br> Innovative Technology</h1>
                <div class="p-v-2 font-weight-200 white center">
                    <a href="#" class="button button-m text-uppercase font-weight-200 text-uppercase" style="background-color: #ff8a73;">Read
                        More
                    </a>
                    <a href="#" class="button button-m bg-color-1 text-uppercase font-weight-200">Contact
                        Us</a>
                </div>

            </div>

        </div>
    </div>
                `
            },
            {
                title: "Header 10",
                display: "Sticky background",
                description: "Nav with a full-width mega menu panel using .nav-mega (its own dedicated component, no JS)",
                code: `
<div class="position-fixed w-100-vw top-0 left-0  shadow-none bg-black">
        <div class="main-nav container">
            <div class="main-menu rounded-0 ">
                <input type="checkbox" id="toggle-h5">
                <a href="index.html" class="logo">
                    <img src="https://cssvars.com/wp-content/themes/AgileCSS/images/logo.png" class="h-4rem p-1-2" alt="Logo">
                </a>
                <div class="nav-panel">
                    <div class="nav-group">
                        <nav class="nav nav-top-border-hover">
                                    <a href="#pages" class="white">pages</a>
                                    <a href="#portfolio" class="white">portfolio</a>
                                    <a href="#blog" class="white">blog</a>
                                    <a href="#shop" class="white">shop</a>
                                    <a href="#elements" class="white">elements</a>
                        </nav>
    
                    </div>
                </div>
                <label for="toggle-h5" class="toggle-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-open icon-color-1-fill icon-s" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon-menu-close icon-color-1-fill icon-s" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                    </svg>
                </label>
            </div>
        </div>
    </div>
                `
            },
        ]
    },
    {
        name: "Hero",
        items: [
            {
                title: "Hero Split container",
                display: "Split container",
                description: "Description for item 1",
                code: `<div class="row h-100-vh p2 m-v-auto container">
  <div class="row m-v-auto">
    <div class="col-md-6 m-v-auto p2">
      <p class="grey text-uppercase bold">Free 30 days trial</p>
      <h1 class="black  bold">The best way<br> to showcase<br> your project.</h1>
      <p class="dark font-weight-400 m-v-1">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqua.</p>
      <div>            
        <a href="#" class="button button-lg" target="_blank">Try for free</a>
        <a href="#" class="button button-lg color-1 outline-color-1 bg-white">How it works</a>
      </div>
    </div>
    <div class="col-md-6 m-v-auto">
        <img src="../img/blocks/technology.jpg" class="img-responsive rounded">
    </div>
  </div>
</div>`
            },
            {
                title: "Hero Column",
                display: "Column",
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
                title: "Hero Split wide",
                display: "Split wide",
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
                title: "Hero Split download",
                display: "Split download",
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
            <div class="col-4 col-md-12 col-lg-3 p-1-4">
                <div class="bg-light-grey p-1-4 brightness-90-hover rounded">
                    <div class="row">
                        <div class=" col-3 p-1-4">
                            <svg viewBox="0 0 24 24" class="icon-s icon-black-fill">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path>
                            </svg>
                        </div>
                        <div class="col-9 p-1-4">
                            <div class="black p0 small">Get it on</div>
                            <div class="p0 m0"><span class="p bold black">Google</span> <span class="dark p">Play</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 col-md-12 col-lg-3 p-1-4">
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

        <div class="col-4 col-md-12 col-lg-3 p-1-4">
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
                title: "Hero Image",
                display: "Image",
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
                title: "Hero Clean",
                display: "Clean",
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
                title: "Hero Split Background",
                display: "Split Background",
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
                title: "Hero Slides Autoplay",
                display: "Slides Autoplay",
                description: "Description for item 8",
                code: `<!-- Uses carousel-autoplay-linked (see cssvars-carousel-final.css) —
     built for exactly 4 slides, which this block already has. Advances
     automatically; dots track the current slide and clicking one jumps
     there while the cycle keeps going. The "hero8-" prefix on name/id
     is what lets this coexist with other carousels on the same page. -->
<div class="carousel-autoplay-linked p0 h-100-vh">
  <input type="radio" name="hero8-slides" id="hero8-radio-1">
  <input type="radio" name="hero8-slides" id="hero8-radio-2">
  <input type="radio" name="hero8-slides" id="hero8-radio-3">
  <input type="radio" name="hero8-slides" id="hero8-radio-4">
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
    <label for="hero8-radio-1"></label>
    <label for="hero8-radio-2"></label>
    <label for="hero8-radio-3"></label>
    <label for="hero8-radio-4"></label>
  </div>
</div>`
            },
            {
                title: "Hero 9",
                display: "Search",
                description: "Description for Hero 9",
                code: `
<div class="h-75-vh d-flex flex-column justify-content-center" style="background-image:linear-gradient(0deg, rgba(0,20,30,.6), rgba(0,20,30,.2)), url('https://picsum.photos/seed/travel-hero/1600/900'); background-size:cover; background-position:center;">
  <div class="container center">
    <h1 class="white bold display-2">Explore the world, guided.</h1>
    <p class="white h6 font-weight-400 m-t-1">Small-group tours to the places worth flying for.</p>
  </div>
  <div class="container m-t-2">
    <div class="row justify-content-center bg-white p1 rounded shadow-4" style="max-width:50rem; margin:0 auto;">
      <div class="col-md-4 p-1-2"><input type="text" class="form-control" placeholder="Where to?"></div>
      <div class="col-md-3 p-1-2"><input type="date" class="form-control"></div>
      <div class="col-md-3 p-1-2"><input type="number" class="form-control" placeholder="Travelers" value="2"></div>
      <div class="col-md-2 p-1-2"><button class="button w-100 bg-color-1 white">Search</button></div>
    </div>
  </div>
</div>
                `
            },
            {
                title: "Hero 10",
                display: "Form",
                description: "Description for Hero 9",
                code: `
<section class="p-v-4">
  <div class="container row align-items-start">
    <div class="col-7">
      <span class="badge bg-color-1 white bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-white-fill m-r--1-2"><path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z"></path></svg>Federal Practice Area</span>
      <h1 class="h1 bold black m-t-1">Healthcare Fraud Defense</h1>
      <p class="lead dark m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
      <div class="row m-t-2">
        <div class="col-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-s icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg><span class="small dark bold">Free Consultation</span>
        </div>
        <div class="col-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-s icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg><span class="small dark bold">24/7 Availability</span>
        </div>
        <div class="col-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-s icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg><span class="small dark bold">Nationwide Cases</span>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="card p2 rounded-1-4 shadow-4 bg-color-1 white">
        <p class="bold h5 white m-b-1">Request a Confidential Consultation</p>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Full Name">
        </div>
        <div class="form-group">
          <input type="tel" class="form-control" placeholder="Phone Number">
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="3" placeholder="Briefly describe your situation"></textarea>
        </div>
        <button type="button" class="button w-100 bg-color-2 black">Submit Confidentially</button>
        <p class="grey small center m-t-1 m-b-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-white-fill m-r--1-2"><path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M14.8,11V9.5C14.8,8.1 13.4,7 12,7C10.6,7 9.2,8.1 9.2,9.5V11C8.6,11 8,11.6 8,12.2V15.7C8,16.4 8.6,17 9.2,17H14.7C15.4,17 16,16.4 16,15.8V12.3C16,11.6 15.4,11 14.8,11M13.5,11H10.5V9.5C10.5,8.7 11.2,8.2 12,8.2C12.8,8.2 13.5,8.7 13.5,9.5V11Z"></path></svg>All submissions are 100% confidential</p>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Hero 11",
                display: "Rotate",
                description: "Description for Hero 9",
                code: `
<section class="container p-v-1 position-relative overflow-hidden">
  <span class="badge bg-color-2 white p-h-1 p-v--1-4 m-b-2 rotate--10">Velit Elit Ipsum</span>
  <h1 class="display-4 m-b-2">Excepteur Magna Et Labore Sed</h1>
  <p class="lead grey m-b-3" style="max-width:36rem">Adipiscing eu excepteur deserunt duis consectetur in laboris dolor.</p>
  <div class="d-flex gap-1 flex-wrap">
    <a href="#contact" class="button button-lg rounded bg-color-2">Start a project <svg viewBox="0 0 24 24" class="icon-xs icon-white-fill"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></a>
    <a href="#work" class="button button-lg rounded color-1 outline-color-1 bg-white">See our work</a>
  </div>
  <div class="row m-t-4 gap-default">
    <div class="col-md-4">
      <img src="https://picsum.photos/seed/cat-hero1/500/400" class="img-responsive rounded-1-4 shadow-2 rotate--10" alt="Aute Incididunt">
    </div>
    <div class="col-md-4">
      <img src="https://picsum.photos/seed/cat-hero2/500/560" class="img-responsive rounded-1-4 shadow-3" alt="Nulla Esse">
    </div>
    <div class="col-md-4">
      <img src="https://picsum.photos/seed/cat-hero3/500/400" class="img-responsive rounded-1-4 shadow-2 rotate-10" alt="Fugiat Duis">
    </div>
  </div>
</section>
                `
            },
            {
                title: "Hero 12",
                display: "Bold",
                description: "Description for Hero 9",
                code: `
<section class="p-v-4">
  <div class="container center">
    <p class="overline letter-spacing-2 color-1">Digital Product Studio</p>
    <h1 class="display-2">We design software people enjoy using.</h1>
    <p class="lead grey w-66 w-100-max m-h-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</section>
                `
            },
            {
                title: "Hero 13",
                display: "Chips",
                description: "Description for Hero 9",
                code: `
<section class="p-v-4 center">
  <div class="container">
    <span class="chip chip-color-1 bold">Selected Work</span>
    <h1 class="h1 bold black m-t-1">Stories, brands, and products we've helped build</h1>
    <p class="lead dark m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
    <div class="m-t-2">
      <span class="chip">All</span>
      <span class="chip">Branding</span>
      <span class="chip">Web</span>
      <span class="chip">Product</span>
      <span class="chip">Campaigns</span>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Hero 14",
                display: "Card image",
                description: "Description for Hero 9",
                code: `
<div class="h-50-vh d-flex align-items-center" style="background-image: url('../img/blocks/work-1.jpg'); background-size: cover; background-position: center;">
  <div class="container">
    <div class="col-10 col-md-7 bg-white p2 rounded shadow-3">
      <span class="badge bg-dark white">Retail</span>
      <h1 class="black bold m-t-1">Store Manager — Flagship</h1>
      <p class="dark h6 m-t-1">San Francisco, CA · Full-time · $70k – $85k + bonus</p>
      <a href="#apply" class="button bg-color-1 white m-t-1">Apply for this role</a>
    </div>
  </div>
</div>
                `
            },
            {
                title: "Hero 15",
                display: "Profile",
                description: "Description for Hero 9",
                code: `
<section class="row h-75-vh">
  <div class="m-auto">
    <div class="p1 m-auto center">
      <img src="../img/blocks/worker-1-s.jpg" class="circle icon-lg shadow-3" alt="Kim Majali">
    </div>
    <div class="m-v-auto center">
      <p class="color-1 text-uppercase bold small m0">Author Profile</p>
      <h1 class="black bold h2">Kim Doe</h1>
      <p class="dark font-weight-400 m-v-1">Frontend Architect &amp; Creator of CSS Vars Framework<br>
        Building single-stylesheet, zero-JavaScript UI systems since 2014.</p>
      <div class="m-v-1">
        <a href="#:">
          <i class="icon-box circle m0 border hover-grey">
            <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
            </svg>
          </i>
        </a>
        <a href="#:">
          <i class="icon-box circle m0 border hover-grey">
            <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
              <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
            </svg>
          </i>
        </a>
        <a href="#:">
          <i class="icon-box circle m0 border hover-grey">
            <svg viewBox="-7 0 32 32" class="icon-xs icon-black-fill">
              <path d="M16.844 9.156l-6.375 7.875 6.938 8.563h-2.906l-5.469-6.781-5.5 6.781h-2.906l6.969-8.563-6.375-7.875h2.906l4.906 6.063 4.875-6.063h2.938z"></path>
            </svg>
          </i>
        </a>
      </div>
      <div>
        <a href="#articles" class="button button-lg" target="_blank">Follow</a>
        <a href="#" class="button button-lg color-1 outline-color-1 bg-white">View Articles</a>
      </div>
    </div>
  </div>
</section>
                `
            },
        ]
    },
    {
        name: "Breadcrumb",
        items: [
            {
                title: "Breadcrumb Clean",
                display: "Clean",
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
                display: "Shadow",
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
                display: "Background color",
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
                display: "Outlined",
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
                title: "Content 14",
                display: "Split",
                description: "Description for Content 1",
                code: `
<section class="container m-v-2">
  <div class="row shadow-3 rounded bg-white">
    <div class="col-md-6 p0">
      <img src="../img/blocks/work-1.jpg" alt="Team reviewing analytics dashboards at Northwind" class="img-responsive h-100">
    </div>
    <div class="col-md-6 p2">
      <span class="pill pill-color-1">Featured</span>
      <h2 class="black bold m-t-1">Northwind Retail cut reporting time from 3 days to 20 minutes</h2>
      <p class="dark m-t-1">Northwind runs 400+ stores across Europe. Before Orbit, weekly performance reports were
        stitched together by hand across six spreadsheets. Here's how their data team automated the entire pipeline
        without hiring a single new engineer.</p>
      <div class="row m-t-2">
        <div class="col-4">
          <p class="h3 black bold m0">92%</p>
          <p class="small dark">faster reporting</p>
        </div>
        <div class="col-4">
          <p class="h3 black bold m0">400+</p>
          <p class="small dark">stores tracked</p>
        </div>
        <div class="col-4">
          <p class="h3 black bold m0">$1.2M</p>
          <p class="small dark">saved per year</p>
        </div>
      </div>
      <a href="case-study-detail.html" class="button bg-black m-t-2 rounded">Read the full story</a>
    </div>
  </div>
</section>
`
            },
            {
                title: "Content 1",
                display: "3 cols images",
                description: "Description for Content 1",
                code: `
<div class="row" id="about">
  <div class="topmargin container p-v-1">
    <h4 class="black bold center text-uppercase">About CSS Vars</h4>
    <p class="dark center font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil illo
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
                display: "3cols icons",
                description: "Description for Content 2",
                code: `
  <section id="services" class="p-v-4 bg-light-grey">
  <div class="container">
    <h2 class="display-6 bold center">What we do</h2>
    <div class="row gap-2 m-t-3">
      <div class="col-md-3">
        <div class="panel h-100 center">
          <svg viewBox="0 0 24 24" class="icon-ml icon-color-1-fill m-h-auto"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,7V13L16.2,16.1L17,14.8L12.5,12.2V7H11Z"></path></svg>
          <p class="bold h5 m-t-1">Brand strategy</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel h-100 center">
          <svg viewBox="0 0 24 24" class="icon-ml icon-color-1-fill m-h-auto"><path d="M12,3C7.79,3.14 4.16,6.06 3.16,10.16C2.16,14.27 4.06,18.54 7.84,20.5C8,15.71 10.5,11.4 14.4,8.8C11.2,11.75 9.29,15.83 9.1,20.14C13.16,20.67 17.13,18.19 18.5,14.14C20.16,9.29 17.66,4 12,3Z"></path></svg>
          <p class="bold h5 m-t-1">Identity design</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel h-100 center">
          <svg viewBox="0 0 24 24" class="icon-ml icon-color-1-fill m-h-auto"><path d="M6,2C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5Z"></path></svg>
          <p class="bold h5 m-t-1">Web design</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel h-100 center">
          <svg viewBox="0 0 24 24" class="icon-ml icon-color-1-fill m-h-auto"><path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"></path></svg>
          <p class="bold h5 m-t-1">Growth campaigns</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Content 3",
                display: "2cols text",
                description: "Description for Content 3",
                code: `
<div class=" bg-light-grey">
  <div class="container row p-v-4">
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
                display: "Tabs",
                description: "Description for Content 4",
                code: `
<section id="paths" class="p-v-4 bg-light-grey">
  <div class="container">
    <h2 class="display-6 bold center">Explore a learning path</h2>
    <p class="dark center m-t--1-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div class="tabs tabs-boxed m-t-3">
      <input type="radio" name="path" id="path1" checked="">
      <label for="path1">Product Design</label>
      <div class="tab">
        <div class="row align-items-center gap-2">
          <div class="col-md-6">
            <p class="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul class="no-indent-ul stack gap-1">
              <li>UX Foundations</li>
              <li>Interaction Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div class="col-md-6"><img src="https://picsum.photos/seed/learnloop-path-design/700/450" class="img-responsive rounded" alt="Design learning path"></div>
        </div>
      </div>
      <input type="radio" name="path" id="path2">
      <label for="path2">Data Analytics</label>
      <div class="tab">
        <div class="row align-items-center gap-2">
          <div class="col-md-6">
            <p class="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <ul class="no-indent-ul stack gap-1">
              <li>SQL for Analysts</li>
              <li>Data Visualization</li>
              <li>Statistics Basics</li>
            </ul>
          </div>
          <div class="col-md-6"><img src="https://picsum.photos/seed/learnloop-path-data/700/450" class="img-responsive rounded" alt="Data learning path"></div>
        </div>
      </div>
      <input type="radio" name="path" id="path3">
      <label for="path3">Full-Stack Dev</label>
      <div class="tab">
        <div class="row align-items-center gap-2">
          <div class="col-md-6">
            <p class="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <ul class="no-indent-ul stack gap-1">
              <li>React from Scratch</li>
              <li>APIs &amp; Databases</li>
              <li>Deployment &amp; DevOps</li>
            </ul>
          </div>
          <div class="col-md-6"><img src="https://picsum.photos/seed/learnloop-path-dev/700/450" class="img-responsive rounded" alt="Development learning path"></div>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Content 5",
                display: "Parallax",
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
                display: "Split row",
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
                display: "Split col",
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
                display: "Row overlay",
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
                display: "Row outline",
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
            {
                title: "Content 10",
                display: "Split Bento",
                description: "Description for Content 10",
                code: `
<section class="container p-v-4">
        <div class="row gap-4 align-items-center">
            <div class="col-6">
                <p class="color-1 bold letter-spacing-2 text-uppercase small m-b-1">Welcome</p>
                <h2 class="display-3 heading-font m-b-2">A quiet luxury above the coastline</h2>
                <p class="grey m-b-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div class="row gap-2">
                    <div class="col-4">
                        <p class="display-4 heading-font color-1">48</p>
                        <p class="small grey">Suites &amp; Villas</p>
                    </div>
                    <div class="col-4">
                        <p class="display-4 heading-font color-1">12</p>
                        <p class="small grey">Years of Service</p>
                    </div>
                    <div class="col-4">
                        <p class="display-4 heading-font color-1">4.9</p>
                        <p class="small grey">Guest Rating</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="bento gap-1">
                    <div class="bento-item bento-2x2 rounded p0">
                        <img src="https://picsum.photos/seed/aurelia-1/700/700" class="img-responsive w-100 h-100" alt="Suite">
                    </div>
                    <div class="bento-item bento-2x1 rounded p0">
                        <img src="https://picsum.photos/seed/aurelia-2/700/320" class="img-responsive w-100 h-100 p0 m0" alt="Pool">
                    </div>
                    <div class="bento-item bento-2x1 rounded p0">
                        <img src="https://picsum.photos/seed/aurelia-3/700/320" class="img-responsive w-100 h-100" alt="Spa">
                    </div>
                </div>
            </div>
        </div>
    </section>
                `
            },
            {
                title: "Content 11",
                display: "Bento",
                description: "Description for Content 10",
                code: `
<section id="features" class="p-v-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 center">
        <h2 class="display-5 bold">Everything an analytics stack should be</h2>
        <p class="lead dark m-t-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>

    <div class="bento m-t-3">
      <div class="bento-2x2 bento-item bg-dark">
        <svg viewBox="0 0 24 24" class="icon-ml icon-white-fill"><path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"></path></svg>
        <h3 class="h3 bold white m-t-2">Live dashboards</h3>
        <p class="white m-t--1-2">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div class="bento-2x1 bento-item">
        <svg viewBox="0 0 24 24" class="icon-m icon-color-2-fill"><path d="M12,3C7.79,3.14 4.16,6.06 3.16,10.16C2.16,14.27 4.06,18.54 7.84,20.5C8,15.71 10.5,11.4 14.4,8.8C11.2,11.75 9.29,15.83 9.1,20.14C13.16,20.67 17.13,18.19 18.5,14.14C20.16,9.29 17.66,4 12,3Z"></path></svg>
        <h4 class="h4 bold m-t-1">AI-generated forecasts</h4>
        <p class="dark m-t--1-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="bento-1x1 bento-item bg-light-grey">
        <svg viewBox="0 0 24 24" class="icon-m icon-color-1-fill"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
        <h4 class="h5 bold m-t-1">SOC 2 secure</h4>
      </div>
      <div class="bento-1x1 bento-item bg-light-grey">
        <svg viewBox="0 0 24 24" class="icon-m icon-color-1-fill"><path d="M6,2C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2H6M13,3.5L18.5,9H13V3.5Z"></path></svg>
        <h4 class="h5 bold m-t-1">200+ integrations</h4>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Content 12",
                display: "Split accordion",
                description: "Description for Content 10",
                code: `
<section id="studio" class="container p-v-4">
        <div class="row gap-4 align-items-center">
            <div class="col-12 col-md-5">
                <img src="https://picsum.photos/seed/marrow-studio/700/850" class="img-responsive rounded shadow-2">
            </div>
            <div class="col-12 col-md-6">
                <h2 class="display-4">Our Process</h2>
                <p class="grey m-b-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                <div class="accordion accordion-closable accordion-underline">
                    <div class="accordion-block">
                        <input type="checkbox" id="proc1">
                        <label for="proc1" class="accordion-label row justify-content-between align-items-center">Discovery &amp; Site Analysis <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div class="accordion-block">
                        <input type="checkbox" id="proc2">
                        <label for="proc2" class="accordion-label row justify-content-between align-items-center">Concept &amp; Massing <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div class="accordion-block">
                        <input type="checkbox" id="proc3">
                        <label for="proc3" class="accordion-label row justify-content-between align-items-center">Documentation <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                    <div class="accordion-block">
                        <input type="checkbox" id="proc4">
                        <label for="proc4" class="accordion-label row justify-content-between align-items-center">Build Oversight <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                `
            },
            {
                title: "Content 13",
                display: "Split accordion card",
                description: "Description for Content 10",
                code: `
<section id="practice" class="bg-light-grey p-v-4">
  <div class="container">
    <p class="color-1 bold text-uppercase letter-spacing-1 small center m-b-1">Practice areas</p>
    <h2 class="center black bold">How we can help.</h2>
    <div class="row m-t-3">
      <div class="col-md-6 p2">
        <div class="accordion">
          <div class="accordion-block">
            <input type="radio" name="lawfaq" id="lawfaq1" checked="">
            <label for="lawfaq1" class="accordion-label bg-white border-default"><svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M12,3L2,9V11H4V20H10V14H14V20H20V11H22V9L12,3M12,5.28L18,9H6L12,5.28M6,11H8V18H6V11M11,11H13V18H11V11M16,11H18V18H16V11Z"></path></svg> Business &amp; Corporate Law</label>
            <div class="accordion-content dark">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</div>
          </div>
          <div class="accordion-block">
            <input type="radio" name="lawfaq" id="lawfaq2">
            <label for="lawfaq2" class="accordion-label bg-white border-default"><svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20H20.5Z"></path></svg> Family &amp; Divorce</label>
            <div class="accordion-content dark">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</div>
          </div>
          <div class="accordion-block">
            <input type="radio" name="lawfaq" id="lawfaq3">
            <label for="lawfaq3" class="accordion-label bg-white border-default"><svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14Z"></path></svg> Employment Disputes</label>
            <div class="accordion-content dark">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
          </div>
          <div class="accordion-block">
            <input type="radio" name="lawfaq" id="lawfaq4">
            <label for="lawfaq4" class="accordion-label bg-white border-default"><svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M12,3A1,1 0 0,1 13,4V5H18.5C18.8,5 19,5.3 18.9,5.6L16.9,10.6C16.8,10.9 16.5,11 16.2,10.9L13,9.8V19H16A1,1 0 0,1 17,20A1,1 0 0,1 16,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19H11V9.8L7.8,10.9C7.5,11 7.2,10.9 7.1,10.6L5.1,5.6C5,5.3 5.2,5 5.5,5H11V4A1,1 0 0,1 12,3Z"></path></svg> Civil Litigation</label>
            <div class="accordion-content dark">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</div>
          </div>
        </div>
      </div>
      <div class="col-md-6 p2">
        <img src="https://picsum.photos/seed/gravitas-practice/700/560" class="img-responsive rounded" alt="Lorem ipsum">
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
                display: "Images",
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
                display: "icons text",
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
                title: "List 3",
                display: "3cols text",
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
                title: "List 4",
                display: "Lead 2cols",
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
                title: "List 5",
                display: "3cols icons text",
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
                title: "List 6",
                display: "Split image",
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
            {
                title: "List 7",
                display: "2cols dark",
                description: "Description for list 1",
                code: `
<section id="menu" class="p-v-4 bg-color-1">
        <div class="container">
            <p class="color-1 light-grey letter-spacing-2 text-uppercase small m-b-1 center">Menu</p>
            <h2 class="display-3 heading-font white center m-b-4">Tonight's Selection</h2>
            <div class="row gap-3">
                <div class="col-6">
                    <p class="bold larger color-1 border-b p-b-1 m-b-2 light-grey">Starters</p>
                    <div class="between-row m-b-2">
                        <div>
                            <p class="bold m-b-0 warning">Charred Octopus</p>
                            <p class="small grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <p class="color-1 bold m-b-0 warning">$19</p>
                    </div>
                    <div class="between-row m-b-2">
                        <div>
                            <p class="bold m-b-0 warning">Wood-Roasted Beets</p>
                            <p class="small grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <p class="color-1 bold m-b-0 warning">$14</p>
                    </div>
                    <div class="between-row m-b-2">
                        <div>
                            <p class="bold m-b-0 warning">Smoked Burrata</p>
                            <p class="small grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <p class="color-1 bold m-b-0 warning">$16</p>
                    </div>
                </div>
                <div class="col-6">
                    <p class="bold larger color-1 border-b p-b-1 m-b-2 light-grey">Mains</p>
                    <div class="between-row m-b-2">
                        <div>
                            <p class="bold m-b-0 warning">Oak-Grilled Ribeye</p>
                            <p class="small grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <p class="color-1 bold m-b-0 warning">$48</p>
                    </div>
                    <div class="between-row m-b-2">
                        <div>
                            <p class="bold m-b-0 warning">Ember Roast Chicken</p>
                            <p class="small grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <p class="color-1 bold m-b-0 warning">$32</p>
                    </div>
                    <div class="between-row m-b-2">
                        <div>
                            <p class="bold m-b-0 warning">Charcoal Salmon</p>
                            <p class="small grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <p class="color-1 bold m-b-0 warning">$36</p>
                    </div>
                </div>
            </div>
            <div class="center m-t-3">
                <a href="#" class="button border-a-color-1 color-1">View Full Menu &amp; Wine List</a>
            </div>
        </div>
    </section>
                `
            },
            {
                title: "List 8",
                display: "Breif cards",
                description: "Description for list 1",
                code: `
                <div class="row container m-v-2 gap-2">
        <div class="col-md-4">
            <a href="#" class="card card-hover center d-block">
                <svg viewBox="0 0 24 24" class="icon-m icon-color-1-fill d-inline">
                    <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"></path>
                </svg>
                <p class="bold m-v-1 dark">Money Back Guarantee</p>
                <p class="grey m0 small">100% moneyback guarantee on all orders</p>
            </a>
        </div>
        <div class="col-md-4">
            <a href="#" class="card card-hover center d-block">
                <svg viewBox="0 0 24 24" class="icon-m icon-color-1-fill d-inline">
                    <path d="M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z"></path>
                </svg>
                <p class="bold m-v-1 dark">Online Support 24/7</p>
                <p class="grey m0 small">Need assistance with our products</p>
            </a>
        </div>
        <div class="col-md-4">
            <a href="#" class="card card-hover center d-block">
                <svg viewBox="0 0 24 24" class="icon-m icon-color-1-fill d-inline">
                    <path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z"></path>
                </svg>
                <p class="bold m-v-1 dark">Free Shipping &amp; Returns</p>
                <p class="grey m0 small">Free shipping on all orders over $99</p>
            </a>
        </div>
    </div>
`
            },
        ]
    },
    {
        name: "Feature",
        items: [
            {
                title: "Feature 1",
                display: "3cols icons",
                description: "Description for feature 1",
                code: `
<section class="p-v-4">
  <div class="container">
    <h2 class="display-6 bold center">Why book with Wanderly</h2>
    <div class="row gap-2 m-t-3">
      <div class="col-md-4">
        <div class="center">
          <svg viewBox="0 0 24 24" class="icon-lg icon-color-1-fill"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
          <p class="bold h5 m-t--1-2">Best price guarantee</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="center">
          <svg viewBox="0 0 24 24" class="icon-lg icon-color-1-fill"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
          <p class="bold h5 m-t--1-2">Free cancellation</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="center">
          <svg viewBox="0 0 24 24" class="icon-lg icon-color-1-fill"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path></svg>
          <p class="bold h5 m-t--1-2">24/7 trip support</p>
          <p class="dark small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Feature 2",
                display: "4cols cards",
                description: "4cols cards",
                code: `
<section id="services" class="container p-v-4">
        <div class="center m-b-3">
            <p class="color-1 bold letter-spacing-2 text-uppercase small m-b-1">Services</p>
            <h2 class="display-6 heading-font">Comprehensive family care</h2>
            <p class="grey m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="grid-cols-4 d-grid gap-2">
            <div class="panel p1 card-hover">
                <span class="icon-box bg-light-grey circle" style="display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M6 2V8C6 10.2 7.8 12 10 12C12.2 12 14 10.2 14 8V2H12V8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8V2H6ZM10 12V16C10 18.2 11.8 20 14 20C16.2 20 18 18.2 18 16V14.8C19.2 14.4 20 13.3 20 12C20 10.3 18.7 9 17 9C15.3 9 14 10.3 14 12H16C16 11.4 16.4 11 17 11C17.6 11 18 11.4 18 12C18 12.6 17.6 13 17 13H16V16C16 17.1 15.1 18 14 18C12.9 18 12 17.1 12 16V12H10Z"></path></svg></span>
                <p class="bold larger m-t-1 m-b-1">Primary Care</p>
                <p class="small grey m-b-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i...</p>
                <a href="#" class="btn-link color-1 small bold">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill"><path d="M13 5L20 12L13 19L11.6 17.6L16.2 13H4V11H16.2L11.6 6.4Z"></path></svg></a>
            </div>
            <div class="panel p1 card-hover">
                <span class="icon-box bg-light-grey circle" style="display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M12 21C12 21 3 15 3 9C3 6 5.5 4 8 4C9.7 4 11.2 4.9 12 6.3C12.8 4.9 14.3 4 16 4C18.5 4 21 6 21 9C21 15 12 21 12 21Z"></path></svg></span>
                <p class="bold larger m-t-1 m-b-1">Cardiology</p>
                <p class="small grey m-b-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i...</p>
                <a href="#" class="btn-link color-1 small bold">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill"><path d="M13 5L20 12L13 19L11.6 17.6L16.2 13H4V11H16.2L11.6 6.4Z"></path></svg></a>
            </div>
            <div class="panel p1 card-hover">
                <span class="icon-box bg-light-grey circle" style="display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M17 2C10 2 4 8 4 15C4 18 6 20 9 20C16 20 22 14 22 7C22 5 21 3 19 3C13 3 8 8 8 13C8 12 12 6 17 2Z"></path></svg></span>
                <p class="bold larger m-t-1 m-b-1">Pediatrics</p>
                <p class="small grey m-b-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i...</p>
                <a href="#" class="btn-link color-1 small bold">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill"><path d="M13 5L20 12L13 19L11.6 17.6L16.2 13H4V11H16.2L11.6 6.4Z"></path></svg></a>
            </div>
            <div class="panel p1 card-hover">
                <span class="icon-box bg-light-grey circle" style="display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M4 20V10H8V20H4ZM10 20V4H14V20H10ZM16 20V13H20V20H16Z"></path></svg></span>
                <p class="bold larger m-t-1 m-b-1">Diagnostics</p>
                <p class="small grey m-b-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i...</p>
                <a href="#" class="btn-link color-1 small bold">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill"><path d="M13 5L20 12L13 19L11.6 17.6L16.2 13H4V11H16.2L11.6 6.4Z"></path></svg></a>
            </div>
        </div>
    </section>
                `
            },            
            {
                title: "Feature 3",
                display: "3cols icons background",
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
                title: "Feature 4",
                display: "4cols big icons",
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
                display: "Split image",
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
            {
                title: "Feature 6",
                display: "Split image container",
                description: "Description for feature 1",
                code: `
<section class="">
  <div class="container row align-items-center p-v-3">
    <div class="col-6">
      <div class="aspect-video rounded overflow-hidden shadow-2" style="background-image:url('https://picsum.photos/seed/forge-cnc/700/460');background-size:cover;background-position:center;"></div>
    </div>
    <div class="col-6 p-l-4">
      <span class="color-1 bold small text-uppercase letter-spacing-1">Capability 01</span>
      <h2 class="h3 bold black m-t-1">Five-axis CNC milling</h2>
      <p class="dark m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
    </div>
  </div>
  <div class="container row align-items-center flex-row-reverse p-v-3">
  <div class="col-6">
  <div class="aspect-video rounded overflow-hidden shadow-2" style="background-image:url('https://picsum.photos/seed/forge-tool/700/460');background-size:cover;background-position:center;"></div>
  </div>
  <div class="col-6 p-r-4">
  <span class="color-1 bold small text-uppercase letter-spacing-1">Capability 02</span>
  <h2 class="h3 bold black m-t-1">In-house tooling &amp; fixturing</h2>
  <p class="dark m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
  </div>
  </div>
  </section>
                `
            },
            {
                title: "Feature 7",
                display: "Split row",
                description: "Description for feature 1",
                code: `
<section id="services" class="p-v-4">
  <div class="container">
    <div class="row gap-4">
      <div class="col-12 col-lg-4">
        <p class="color-2 letter-spacing-1 text-uppercase small">Elit sed</p>
        <h2 class="display-6 m-t-1">Sed do eiusmod tempor incididunt</h2>
        <p class="grey m-t-1">Do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
      </div>
      <div class="col-12 col-lg-8">
        <div class="row gap-2">

          <div class="col-12 col-md-6">
            <div class="card card-hover transition h-100-min">
              <svg class="icon icon-sm icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M5 5l-3 7a3 3 0 0 0 6 0zM19 5l-3 7a3 3 0 0 0 6 0zM4 21h16M2 5h20M5 5l7-3 7 3"></path></svg>
              <h3 class="h4 m-t-1">Eiusmod tempor incididunt</h3>
              <p class="grey smaller">Qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur.</p>
              <a href="#" class="cluster gap-1 color-1 bold small">Minim veniam <svg class="icon icon-xxs icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"></path></svg></a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card card-hover transition h-100-min">
              <svg class="icon icon-sm icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="1.5"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2.5 12h19"></path></svg>
              <h3 class="h4 m-t-1">Tempor incididunt ut</h3>
              <p class="grey smaller">Officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing.</p>
              <a href="#" class="cluster gap-1 color-1 bold small">Veniam quis <svg class="icon icon-xxs icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"></path></svg></a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card card-hover transition h-100-min">
              <svg class="icon icon-sm icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5z"></path><path d="m9 12 2 2 4-4"></path></svg>
              <h3 class="h4 m-t-1">Incididunt ut labore</h3>
              <p class="grey smaller">Deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <a href="#" class="cluster gap-1 color-1 bold small">Quis nostrud <svg class="icon icon-xxs icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"></path></svg></a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card card-hover transition h-100-min">
              <svg class="icon icon-sm icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 12.5-8 8a2.1 2.1 0 0 1-3-3l8-8m3 3 5.5-5.5a2.1 2.1 0 0 0-3-3L11.5 9.5m3 3-3-3m-7 12h9M17 3l4 4M12 8l4 4"></path></svg>
              <h3 class="h4 m-t-1">Ut labore et</h3>
              <p class="grey smaller">Mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed.</p>
              <a href="#" class="cluster gap-1 color-1 bold small">Nostrud exercitation <svg class="icon icon-xxs icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"></path></svg></a>
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
                title: "Feature 8",
                display: "Text col",
                description: "Description for feature 1",
                code: `
<section id="services" class="bg-light-grey p-v-4">
        <div class="container">
            <h2 class="display-4 m-b-3">What We Do</h2>
            <div class="row border-b p-v-2 align-items-center">
                <div class="col-1"><p class="display-5 grey m-b-0">01</p></div>
                <div class="col-7"><p class="display-6 bold m-b-0">Residential Architecture</p></div>
                <div class="col-4"><p class="grey small m-b-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt </p></div>
            </div>
            <div class="row border-b p-v-2 align-items-center">
                <div class="col-1"><p class="display-5 grey m-b-0">02</p></div>
                <div class="col-7"><p class="display-6 bold m-b-0">Interior Design</p></div>
                <div class="col-4"><p class="grey small m-b-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p></div>
            </div>
            <div class="row border-b p-v-2 align-items-center">
                <div class="col-1"><p class="display-5 grey m-b-0">03</p></div>
                <div class="col-7"><p class="display-6 bold m-b-0">Landscape &amp; Site Planning</p></div>
                <div class="col-4"><p class="grey small m-b-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul</p></div>
            </div>
            <div class="row border-b p-v-2 align-items-center">
                <div class="col-1"><p class="display-5 grey m-b-0">04</p></div>
                <div class="col-7"><p class="display-6 bold m-b-0">Adaptive Reuse</p></div>
                <div class="col-4"><p class="grey small m-b-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit </p></div>
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
                display: "Split image CTA",
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
                display: "Split image full",
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
        <div class="icon-m rounded m-l-3 bg-color-2 white center display-5 bold">1</div>
        <p class="m-l-1 h6 dark">Risus feugiat in ante.</p>
      </div>
      <div class="row align-items-center m-b-1">
        <div class="icon-m rounded m-l-3 bg-color-2 white center display-5 bold">2</div>
        <p class="m-l-1 h6 dark">Lectus magna fringilla urna.</p>
      </div>
      <div class="row align-items-center m-b-1">
        <div class="icon-m rounded m-l-3 bg-color-2 white center display-5 bold">3</div>
        <p class="m-l-1 h6 dark">Leo vel orci porta non pulvinar</p>
      </div>
    </div>
  </div>
</section>
`
            },
              {
                title: "Steps 3",
                display: "Vertical",
                description: "Description for steps 1",
                code: `
<div class="container">
    <p class="color-1 bold text-uppercase letter-spacing-1 small center m-b-1">Process</p>
    <h2 class="center black bold">From idea to production.</h2>
    <ul class="stepper m-t-4">
      <li class="stepper-step is-complete">
        <div class="stepper-circle">1</div>
        <span class="stepper-label">Discovery</span>
      </li>
      <li class="stepper-step is-complete">
        <div class="stepper-circle">2</div>
        <span class="stepper-label">Design</span>
      </li>
      <li class="stepper-step is-active">
        <div class="stepper-circle">3</div>
        <span class="stepper-label">Build</span>
      </li>
      <li class="stepper-step">
        <div class="stepper-circle">4</div>
        <span class="stepper-label">QA &amp; Test</span>
      </li>
      <li class="stepper-step">
        <div class="stepper-circle">5</div>
        <span class="stepper-label">Launch</span>
      </li>
    </ul>
  </div>
                `
            },
              {
                title: "Steps 4",
                display: "Vertical Numbers",
                description: "Description for steps 1",
                code: `
<section class="container m-v-4">
  <h2 class="black center bold">How It Works</h2>
  <div class="row m-t-2 justify-content-center">
    <div class="col-md-3 center p1">
      <div class="icon-m rounded m-auto bg-color-1 white center display-5 bold">1</div>
      <p class="black bold m-t-1">Choose a tour</p>
      <p class="dark small">Browse itineraries by region, length, or activity level.</p>
    </div>
    <div class="col-md-3 center p1">
      <div class="icon-m rounded m-auto bg-color-1 white center display-5 bold">2</div>
      <p class="black bold m-t-1">Reserve your spot</p>
      <p class="dark small">Secure your place with a small deposit.</p>
    </div>
    <div class="col-md-3 center p1">
      <div class="icon-m rounded m-auto bg-color-1 white center display-5 bold">3</div>
      <p class="black bold m-t-1">Pack your bags</p>
      <p class="dark small">We handle logistics — you just show up ready.</p>
    </div>
  </div>
</section>
                `
            },
              {
                title: "Steps 5",
                display: "Timeline",
                description: "Description for steps 1",
                code: `
<section class="container m-v-4">
  <h3 class="black bold center">Rollout timeline</h3>
  <hr class="width-short center w-50">
  <div class="row m-t-2">
    <div class="col-md-8 m-h-auto">
      <ul class="stepper stepper-vertical">
        <li class="stepper-step is-complete">
          <span class="stepper-circle">1</span>
          <span class="stepper-label bold black">Day 1 — Kickoff &amp; data mapping</span>
          <p class="dark small">Orbit's onboarding team mapped POS and inventory fields to Orbit's event schema.</p>
        </li>
        <li class="stepper-step is-complete">
          <span class="stepper-circle">2</span>
          <span class="stepper-label bold black">Day 3 — First live dashboard</span>
          <p class="dark small">A pilot dashboard went live for two flagship stores in Amsterdam and Berlin.</p>
        </li>
        <li class="stepper-step is-complete">
          <span class="stepper-circle">3</span>
          <span class="stepper-label bold black">Day 6 — Template cloned to all stores</span>
          <p class="dark small">The saved view was cloned across all 400+ locations with store-level filters.</p>
        </li>
        <li class="stepper-step is-active">
          <span class="stepper-circle">4</span>
          <span class="stepper-label bold black">Day 9 — Full rollout &amp; training</span>
          <p class="dark small">Store managers were trained; the manual reporting process was retired for good.</p>
        </li>
      </ul>
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
                display: "Parallax",
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
                display: "Background",
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
                display: "Parallax outline",
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
                display: "Gradient background",
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
            {
              title: "Statistics 5",
              display: "Clean",
              description: "Description for Statistics 1",
              code: `
<section class="container p-v-3">
  <div class="row gap-2 text-capitalize" style="text-align:center">
    <div class="col-md-3 stack" style="align-items:center">
      <span class="display-5 bold color-1">99.98%</span>
      <span class="grey">Platform uptime</span>
    </div>
    <div class="col-md-3 stack" style="align-items:center">
      <span class="display-5 bold color-1">4.2B</span>
      <span class="grey">Events processed daily</span>
    </div>
    <div class="col-md-3 stack" style="align-items:center">
      <span class="display-5 bold color-1">180+</span>
      <span class="grey">Native connectors</span>
    </div>
    <div class="col-md-3 stack" style="align-items:center">
      <span class="display-5 bold color-1">6 min</span>
      <span class="grey">Average setup time</span>
    </div>
  </div>
</section>
              `
            },
            {
              title: "Statistics 6",
              display: "Porgrees bar",
              description: "Description for Statistics 1",
              code: `
<section class="p-v-4 bg-black">
  <div class="container">
    <div class="row align-items-center gap-3">
      <div class="col-md-6">
        <img src="https://picsum.photos/seed/fitforge-tracking/900/700" class="img-responsive rounded" alt="Progress tracking screen">
      </div>
      <div class="col-md-6">
        <h2 class="display-5 bold white">Track everything that matters</h2>
        <p class="grey m-t-1">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div class="m-t-2">
          <p class="white small between-row m0"><span>Weekly volume</span><span>82%</span></p>
          <progress value="82" max="100" class="w-100 h-1rem border-solid"></progress>
        </div>
        <div class="m-t-1">
          <p class="white small between-row m0"><span>Recovery score</span><span>91%</span></p>
          <progress value="91" max="100" class="w-100 h-1rem border-solid"></progress>
        </div>
        <div class="m-t-1">
          <p class="white small between-row m0"><span>Consistency streak</span><span>65%</span></p>
          <progress value="65" max="100" class="w-100 h-1rem border-solid"></progress>
        </div>
      </div>
    </div>
  </div>
</section>
              `
            },
            {
                title: "Statistics 7",
                display: "Statistic cards",
                description: "Description for list 1",
                code: `
<div class="row">
      <div class="col-md-3 p1">
        <div class="card card-hover shadow-3">
          <div class="d-flex justify-content-between align-items-start">
            <p class="small grey text-uppercase font-weight-600 m-b-0">Total Revenue</p>
            <div class="circle bga-success p-1 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-xs icon-success-fill">
                <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
              </svg>
            </div>
          </div>
          <h2 class="bold m-t-1 m-b-0">$48,200</h2>
          <p class="small success bold m-t-1 m-b-0">▲ 12.4% <span class="grey font-weight-400">vs last month</span></p>
        </div>
      </div>

      <div class="col-md-3 p1">
        <div class="card card-hover shadow-3">
          <div class="d-flex justify-content-between align-items-start">
            <p class="small grey text-uppercase font-weight-600 m-b-0">Active Users</p>
            <div class="circle bga-info p-1 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-xs icon-info-fill">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
          </div>
          <h2 class="bold m-t-1 m-b-0">8,942</h2>
          <p class="small success bold m-t-1 m-b-0">▲ 4.1% <span class="grey font-weight-400">vs last month</span></p>
        </div>
      </div>

      <div class="col-md-3 p1">
        <div class="card card-hover shadow-3">
          <div class="d-flex justify-content-between align-items-start">
            <p class="small grey text-uppercase font-weight-600 m-b-0">Avg. Session</p>
            <div class="circle bga-warning p-1 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-xs icon-warning-fill">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
              </svg>
            </div>
          </div>
          <h2 class="bold m-t-1 m-b-0">4m 12s</h2>
          <p class="small danger bold m-t-1 m-b-0">▼ 1.8% <span class="grey font-weight-400">vs last month</span></p>
        </div>
      </div>

      <div class="col-md-3 p1">
        <div class="card card-hover shadow-3">
          <div class="d-flex justify-content-between align-items-start">
            <p class="small grey text-uppercase font-weight-600 m-b-0">Satisfaction</p>
            <div class="circle bga-luxury p-1 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-xs icon-luxury-fill">
                <path d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"></path>
              </svg>
            </div>
          </div>
          <h2 class="bold m-t-1 m-b-0">96.2%</h2>
          <p class="small success bold m-t-1 m-b-0">▲ 0.6% <span class="grey font-weight-400">vs last month</span></p>
        </div>
      </div>
    </div>
                `
            },
            {
                title: "Statistics 8",
                display: "Statistic cards big",
                description: "Description for list 1",
                code: `
<div class="row">
    <div class="col-md-3 p1">
      <div class="card center">
        <i class="icon-box circle bga-color-1 m0">
          <svg viewBox="0 0 24 24" class="icon-s icon-color-1-fill">
            <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path>
          </svg>
        </i>
        <p class="display-4 black bold m-v-05">128K</p>
        <p class="dark text-uppercase small">Monthly Visitors</p>
      </div>
    </div>
    <div class="col-md-3 p1">
      <div class="card center">
        <i class="icon-box circle bga-success m0">
          <svg viewBox="0 0 24 24" class="icon-s icon-success-fill">
            <path d="M11.8,10.9C9.53,10.31 8.8,9.7 8.8,8.75C8.8,7.66 9.81,6.9 11.5,6.9C13.28,6.9 13.94,7.75 14,9H16.21C16.14,7.28 15.09,5.7 13,5.19V3H10V5.16C8.06,5.58 6.5,6.84 6.5,8.77C6.5,11.08 8.41,12.23 11.2,12.9C13.7,13.5 14.2,14.38 14.2,15.31C14.2,16 13.71,17.1 11.5,17.1C9.44,17.1 8.63,16.18 8.5,15H6.32C6.44,17.19 8.08,18.42 10,18.83V21H13V18.85C14.95,18.5 16.5,17.35 16.5,15.3C16.5,12.46 14.07,11.5 11.8,10.9Z"></path>
          </svg>
        </i>
        <p class="display-4 black bold m-v-05">$54.2K</p>
        <p class="dark text-uppercase small">Monthly Revenue</p>
      </div>
    </div>
    <div class="col-md-3 p1">
      <div class="card center">
        <i class="icon-box circle bga-info m0">
          <svg viewBox="0 0 24 24" class="icon-s icon-info-fill">
            <path d="M16,17V19H2V17S2,13 9,13 16,17 16,17M12.5,7.5A3.5,3.5 0 0,0 9,4A3.5,3.5 0 0,0 5.5,7.5A3.5,3.5 0 0,0 9,11A3.5,3.5 0 0,0 12.5,7.5M15.94,13A5.32,5.32 0 0,1 18,17V19H22V17S22,13.37 15.94,13M13,4A3.39,3.39 0 0,0 12.07,4.1A5.5,5.5 0 0,1 12.07,10.9A3.39,3.39 0 0,0 13,11A3.5,3.5 0 0,0 13,4Z"></path>
          </svg>
        </i>
        <p class="display-4 black bold m-v-05">3,481</p>
        <p class="dark text-uppercase small">Active Users</p>
      </div>
    </div>
    <div class="col-md-3 p1">
      <div class="card center">
        <i class="icon-box circle bga-warning m0">
          <svg viewBox="0 0 24 24" class="icon-s icon-warning-fill">
            <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
          </svg>
        </i>
        <p class="display-4 black bold m-v-05">99.98%</p>
        <p class="dark text-uppercase small">Uptime</p>
      </div>
    </div>
  </div>
                `
            },
            {
                title: "Statistics 9",
                display: "Progress cards",
                description: "Description for list 1",
                code: `
<section class="m-b-4">
    <div class="row">
      <div class="col-md-4 p1">
        <div class="card shadow-3">
          <div class="d-flex justify-content-between align-items-center m-b-1">
            <p class="bold m-b-0">Storage Used</p>
            <span class="pill pill-info">62%</span>
          </div>
          <progress value="62" max="100" class="w-100"></progress>
          <p class="small grey m-t-1 m-b-0">31 GB of 50 GB used</p>
        </div>
      </div>

      <div class="col-md-4 p1">
        <div class="card shadow-3">
          <div class="d-flex justify-content-between align-items-center m-b-1">
            <p class="bold m-b-0">Sprint Progress</p>
            <span class="pill pill-success">84%</span>
          </div>
          <progress value="84" max="100" class="w-100"></progress>
          <p class="small grey m-t-1 m-b-0">21 of 25 tasks completed</p>
        </div>
      </div>

      <div class="col-md-4 p1">
        <div class="card shadow-3">
          <div class="d-flex justify-content-between align-items-center m-b-1">
            <p class="bold m-b-0">Budget Spent</p>
            <span class="pill pill-danger">93%</span>
          </div>
          <progress value="93" max="100" class="w-100"></progress>
          <p class="small grey m-t-1 m-b-0">$9,300 of $10,000 spent</p>
        </div>
      </div>
    </div>
  </section>
                `
            },
            {
                title: "Statistics 10",
                display: "Metric cards",
                description: "Description for list 1",
                code: `
<section class="m-b-4">
    <div class="row">
      <div class="col-md-6 p1">
        <div class="card shadow-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="circle bg-color-1 p-2 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-s icon-white-fill">
                <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
              </svg>
            </div>
            <div class="p-l-2">
              <p class="small grey text-uppercase font-weight-600 m-b-0">New Orders</p>
              <h3 class="bold m-t-0 m-b-0">1,284</h3>
            </div>
          </div>
          <span class="pill pill-success">+18%</span>
        </div>
      </div>

      <div class="col-md-6 p1">
        <div class="card shadow-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="circle bg-danger p-2 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-s icon-white-fill">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
              </svg>
            </div>
            <div class="p-l-2">
              <p class="small grey text-uppercase font-weight-600 m-b-0">Support Tickets</p>
              <h3 class="bold m-t-0 m-b-0">37</h3>
            </div>
          </div>
          <span class="pill pill-danger">+6%</span>
        </div>
      </div>

      <div class="col-md-6 p1">
        <div class="card shadow-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="circle bg-success p-2 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-s icon-white-fill">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </div>
            <div class="p-l-2">
              <p class="small grey text-uppercase font-weight-600 m-b-0">Team Growth</p>
              <h3 class="bold m-t-0 m-b-0">+12</h3>
            </div>
          </div>
          <span class="pill pill-success">+9%</span>
        </div>
      </div>

      <div class="col-md-6 p1">
        <div class="card shadow-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="circle bg-info p-2 d-inline-flex align-items-center justify-content-center">
              <svg viewBox="0 0 24 24" class="icon-s icon-white-fill">
                <path d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"></path>
              </svg>
            </div>
            <div class="p-l-2">
              <p class="small grey text-uppercase font-weight-600 m-b-0">Uptime</p>
              <h3 class="bold m-t-0 m-b-0">99.98%</h3>
            </div>
          </div>
          <span class="pill pill-success">stable</span>
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
                display: "Masonry",
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
                display: "Flex",
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
                display: "Light Box",
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
                display: "Gallery Box",
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
            {
                title: "Gallery 5",
                display: "Grid",
                description: "Description for Gallery 4",
                code: `
<section id="work" class="container p-v-4">
  <h2 class="center display-6 m-b-3">Recent work</h2>
  <div class="d-grid grid-cols-3 gap-2">
    <div class="card-hover" style="overflow:hidden;border-radius:var(--panel-radius)">
      <img src="https://picsum.photos/seed/aster-p1/500/500" class="img-responsive aspect-square" alt="Project one" style="object-fit:cover">
    </div>
    <div class="card-hover" style="overflow:hidden;border-radius:var(--panel-radius)">
      <img src="https://picsum.photos/seed/aster-p2/500/500" class="img-responsive aspect-square" alt="Project two" style="object-fit:cover">
    </div>
    <div class="card-hover" style="overflow:hidden;border-radius:var(--panel-radius)">
      <img src="https://picsum.photos/seed/aster-p3/500/500" class="img-responsive aspect-square" alt="Project three" style="object-fit:cover">
    </div>
    <div class="card-hover" style="overflow:hidden;border-radius:var(--panel-radius)">
      <img src="https://picsum.photos/seed/aster-p4/500/500" class="img-responsive aspect-square" alt="Project four" style="object-fit:cover">
    </div>
    <div class="card-hover" style="overflow:hidden;border-radius:var(--panel-radius)">
      <img src="https://picsum.photos/seed/aster-p5/500/500" class="img-responsive aspect-square" alt="Project five" style="object-fit:cover">
    </div>
    <div class="card-hover" style="overflow:hidden;border-radius:var(--panel-radius)">
      <img src="https://picsum.photos/seed/aster-p6/500/500" class="img-responsive aspect-square" alt="Project six" style="object-fit:cover">
    </div>
  </div>
</section>
                `
            },
            {
                title: "Gallery 6",
                display: "Bento",
                description: "Description for Gallery 4",
                code: `
<section id="work" class="container p-v-2">
        <div class="row justify-content-between align-items-end m-b-3">
            <h2 class="display-4 m-b-0">Selected Work</h2>
            <a href="#" class="btn-link bold">Full portfolio <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></a>
        </div>
        <div class="bento">
            <div class="bento-item bento-3x2 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj0/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Cliffside Residence</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj1/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Kade Gallery</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj2/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Linden Loft</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj3/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Studio Nave</p>
                </div>
            </div>
            <div class="bento-item bento-2x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj4/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Harbor Pavilion</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj1/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Kade Gallery</p>
                </div>
            </div>
        </div>
    </section>
                `
            },
            {
                title: "Gallery 7",
                display: "Bento text",
                description: "Description for Gallery 4",
                code: `
<section id="work" class="p-v-2">
  <div class="container-fluid">
    <div class="bento" style="grid-template-columns:repeat(4,1fr);">
      <div class="bento-item bento-2x2" style="padding:0;">
        <img src="https://picsum.photos/seed/agencywork1/800/800" class="img-responsive h-100" style="object-fit:cover;" alt="Lorem ipsum project">
        <div class="p2 bg-white">
          <p class="m-b-0 small grey">Branding</p>
          <p class="m-b-0 h5">Lorem Ipsum Co.</p>
        </div>
      </div>
      <div class="bento-item bento-2x1" style="padding:0;">
        <img src="https://picsum.photos/seed/agencywork2/800/400" class="img-responsive h-100" style="object-fit:cover;" alt="Lorem ipsum project">
      </div>
      <div class="bento-item bento-1x1 bg-color-1" style="justify-content:center;">
        <p class="white h4 m-b-0">Dolor Sit</p>
        <p class="white small opacity07">Web Design</p>
      </div>
      <div class="bento-item bento-1x1" style="padding:0;">
        <img src="https://picsum.photos/seed/agencywork3/400/400" class="img-responsive h-100" style="object-fit:cover;" alt="Lorem ipsum project">
      </div>
      <div class="bento-item bento-2x1" style="padding:0;">
        <img src="https://picsum.photos/seed/agencywork4/800/400" class="img-responsive h-100" style="object-fit:cover;" alt="Lorem ipsum project">
        <div class="p2 bg-white">
          <p class="m-b-0 small grey">Motion</p>
          <p class="m-b-0 h5">Amet Studio</p>
        </div>
      </div>
      <div class="bento-item bento-2x1 bg-dark" style="justify-content:center;">
        <p class="white h4 m-b-0">Consectetur</p>
        <p class="white small opacity07">Product Design</p>
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
                display: "Split",
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
            {
                title: "Video 2",
                display: "Parallax",
                description: "Description for Video 2",
                code: `
<div class="parallax-img" style="background-image: url('../img/templates/background.jpg'); height: 600px;">
        <div class="row">
            <div class="col-md-6">
    <h1 class="white bold left p-t-2 m-l-3">A Few Facts About Our<br>  University</h1>
    <div class="row">
        <div class="col-md-6">
    <div class="p-v-1 m-t-2 bga-grey rounded">
        <h1 class="warning font-weight-600  center">94%</h1>
        <h4 class="bold white center">Succesed Students</h4>
        </div>
        <div class="p-v-1 m-t-1 bga-grey rounded">
            <h1 class="warning font-weight-600  center">3423</h1>
            <h4 class="bold white center">New Students</h4>
        
            </div> 
        </div>
        <div class="col-md-6">
            <div class="p-v-1 m-t-4 bga-grey rounded">
                <h1 class="warning font-weight-600  center">126</h1>
                <h4 class="bold white center">Current Teachers</h4>
            
                </div> 
                <div class="p-v-1 m-t-1 bga-grey rounded">
                    <h1 class="warning font-weight-600  center">32</h1>
                    <h4 class="bold white center">Awards</h4>
                
                    </div> 
        </div>
        </div>
    </div>
    <div class="col-md-6 m-t-4">
        <div class="embed embed-wide-screen rounded">
            <iframe src="https://www.youtube.com/embed/GtH4z-7ixPI" title="YouTube video player" frameborder="0" class="embed-item" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
        </div>
    </div>
    </div>
    </div>
                `
            },
            {
                title: "Video 3",
                display: "Grid",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <h2 class="center bold black">Lorem Ipsum Dolor Sit Amet</h2>
  <p class="center dark display-6 m-b-2">Consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
  <div class="row gap-2">
    <div class="col-md-4">
      <div class="card p0 overflow-hidden shadow-1 shadow-2-hover transition-shadow">
        <div class="embed embed-wide-screen">
          <iframe class="embed-item" src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="card-body">
          <p class="bold black m0">Big Buck Bunny</p>
          <p class="dark small m-t--1-2 m0">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p0 overflow-hidden shadow-1 shadow-2-hover transition-shadow">
        <div class="embed embed-wide-screen">
          <iframe class="embed-item" src="https://www.youtube.com/embed/eRsGyueVLvQ" title="Sintel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="card-body">
          <p class="bold black m0">Sintel</p>
          <p class="dark small m-t--1-2 m0">Elit sed do eiusmod tempor incididunt ut labore.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p0 overflow-hidden shadow-1 shadow-2-hover transition-shadow">
        <div class="embed embed-wide-screen">
          <iframe class="embed-item" src="https://www.youtube.com/embed/OHOpb2fS-cM" title="Tears of Steel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="card-body">
          <p class="bold black m0">Tears of Steel</p>
          <p class="dark small m-t--1-2 m0">Tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Video 4",
                display: "Backround",
                description: "Description for Video 2",
                code: `
<section class="position-relative overflow-hidden" style="height:60vh;">
  <div class="position-absolute" style="inset:0;overflow:hidden;">
    <iframe
      style="position:absolute;top:50%;left:50%;width:100vw;height:56.25vw;min-height:100%;min-width:177.78vh;transform:translate(-50%,-50%);border:0;"
      src="https://www.youtube.com/embed/TLkA0RELQ1g?autoplay=1&mute=1&controls=0&loop=1&playlist=TLkA0RELQ1g&modestbranding=1"
      title="Elephants Dream" allow="autoplay; encrypted-media"></iframe>
  </div>
  <div class="position-absolute bg-black" style="inset:0;background-color:rgba(0,0,0,.45);"></div>
  <div class="center-overlay">
    <div class="center">
      <h1 class="white bold display-2 m0">Lorem Ipsum Dolor Sit Amet</h1>
      <p class="white display-6 m-t-1">Consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Video 5",
                display: "Playlist",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <div class="row gap-2">
    <div class="col-md-8">
      <div class="embed embed-wide-screen rounded-1-4 overflow-hidden shadow-2">
        <iframe id="playlistMain" class="embed-item" src="https://www.youtube.com/embed/OHOpb2fS-cM" title="Tears of Steel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h3 id="playlistMainTitle" class="bold black m-t-1">Tears of Steel</h3>
      <p class="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="col-md-4">
      <p class="text-uppercase dark small bold m-b-1">Up Next</p>
      <div class="d-flex gap-1 m-b-2" style="cursor:pointer;" onclick="document.getElementById('playlistMain').src='https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1';document.getElementById('playlistMainTitle').textContent='Big Buck Bunny';">
        <div class="position-relative rounded-1-8 overflow-hidden" style="width:7rem;height:4.5rem;flex-shrink:0;">
          <img src="https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg" alt="Big Buck Bunny" class="w-100 h-100" style="object-fit:cover;">
          <div class="center-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-xs icon-white-fill"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="badge bg-black white position-absolute" style="bottom:0.15rem;right:0.15rem;font-size:60%;">09:56</span>
        </div>
        <div>
          <p class="black bold small m0">Big Buck Bunny</p>
          <p class="dark small m0">Blender Foundation</p>
        </div>
      </div>
      <div class="d-flex gap-1 m-b-2" style="cursor:pointer;" onclick="document.getElementById('playlistMain').src='https://www.youtube.com/embed/eRsGyueVLvQ?autoplay=1';document.getElementById('playlistMainTitle').textContent='Sintel';">
        <div class="position-relative rounded-1-8 overflow-hidden" style="width:7rem;height:4.5rem;flex-shrink:0;">
          <img src="https://i.ytimg.com/vi/eRsGyueVLvQ/hqdefault.jpg" alt="Sintel" class="w-100 h-100" style="object-fit:cover;">
          <div class="center-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-xs icon-white-fill"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="badge bg-black white position-absolute" style="bottom:0.15rem;right:0.15rem;font-size:60%;">14:48</span>
        </div>
        <div>
          <p class="black bold small m0">Sintel</p>
          <p class="dark small m0">Blender Foundation</p>
        </div>
      </div>
      <div class="d-flex gap-1" style="cursor:pointer;" onclick="document.getElementById('playlistMain').src='https://www.youtube.com/embed/TLkA0RELQ1g?autoplay=1';document.getElementById('playlistMainTitle').textContent='Elephants Dream';">
        <div class="position-relative rounded-1-8 overflow-hidden" style="width:7rem;height:4.5rem;flex-shrink:0;">
          <img src="https://i.ytimg.com/vi/TLkA0RELQ1g/hqdefault.jpg" alt="Elephants Dream" class="w-100 h-100" style="object-fit:cover;">
          <div class="center-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-xs icon-white-fill"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="badge bg-black white position-absolute" style="bottom:0.15rem;right:0.15rem;font-size:60%;">10:53</span>
        </div>
        <div>
          <p class="black bold small m0">Elephants Dream</p>
          <p class="dark small m0">Blender Foundation</p>
        </div>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Video 6",
                display: "Slides",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <h2 class="center bold black m-b-2">Lorem Ipsum Dolor Sit Amet</h2>
  <div class="carousel-fixed rounded-1-4 overflow-hidden shadow-2">
    <input type="radio" name="vidcar1-slides" id="vidcar1-radio-1" checked="">
    <input type="radio" name="vidcar1-slides" id="vidcar1-radio-2">
    <input type="radio" name="vidcar1-slides" id="vidcar1-radio-3">
    <ul class="slides">
      <li class="position-relative aspect-video">
        <iframe src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </li>
      <li class="position-relative aspect-video">
        <iframe src="https://www.youtube.com/embed/eRsGyueVLvQ" title="Sintel" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </li>
      <li class="position-relative aspect-video">
        <iframe src="https://www.youtube.com/embed/OHOpb2fS-cM" title="Tears of Steel" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </li>
    </ul>
    <div class="slidesNavigation">
      <label for="vidcar1-radio-1"></label>
      <label for="vidcar1-radio-2"></label>
      <label for="vidcar1-radio-3"></label>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Video 7",
                display: "Card stats",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <div class="row">
    <div class="col-md-6 m-h-auto">
      <div class="panel p0 overflow-hidden shadow-2">
        <div class="embed embed-wide-screen">
          <iframe class="embed-item" src="https://www.youtube.com/embed/eRsGyueVLvQ" title="Sintel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="card-body">
          <p class="bold black display-6 m0">Sintel</p>
          <p class="dark small m-t--1-2">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.</p>
          <div class="d-flex justify-content-between align-items-center m-t-1">
            <div class="d-flex align-items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-xs icon-grey-fill">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span class="dark small">12.4K</span>
            </div>
            <div class="d-flex align-items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-xs icon-danger-fill">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span class="dark small">892</span>
            </div>
            <span class="badge bg-color-1 white">14:48</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Video 8",
                display: "Comparison",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <h2 class="center bold black m-b-2">Lorem Ipsum Dolor Sit Amet</h2>
  <div class="row gap-2">
    <div class="col-md-6">
      <div class="position-relative embed embed-wide-screen rounded-1-4 overflow-hidden shadow-1">
        <iframe class="embed-item" src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <span class="chip bg-white position-absolute z-overlay" style="top:1rem;left:1rem;pointer-events:none;">Big Buck Bunny</span>
      </div>
      <p class="dark center m-t-1">Dolor sit amet consectetur adipisicing elit sed do eiusmod.</p>
    </div>
    <div class="col-md-6">
      <div class="position-relative embed embed-wide-screen rounded-1-4 overflow-hidden shadow-1">
        <iframe class="embed-item" src="https://www.youtube.com/embed/eRsGyueVLvQ" title="Sintel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <span class="chip bg-white position-absolute z-overlay" style="top:1rem;left:1rem;pointer-events:none;">Sintel</span>
      </div>
      <p class="dark center m-t-1">Tempor incididunt ut labore et dolore magna aliqua enim ad minim.</p>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Video 9",
                display: "Testimonial",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <div class="row">
    <div class="col-md-8 m-h-auto center">
      <div class="position-relative m0 shadow-2 circle overflow-hidden d-inline-block w-10rem h-10rem">
        <iframe src="https://www.youtube.com/embed/TLkA0RELQ1g" title="Elephants Dream" class="boeder-none w-100 h-100" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p class="dark italic display-6 m-t-2">"Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <p class="black bold m-t-1 m0">Elephants Dream</p>
      <p class="dark small m0">Blender Foundation</p>
    </div>
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
                display: "Parallax",
                description: "Description for Testimonial 1",
                code: `
<section class="parallax-img h-100-vh m-v-2"
  style="background-image: url('../img/blocks/background-2.jpg');">
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
          <!-- Uses carousel-fixed (see cssvars-carousel-final.css). The
               "testi1-" prefix on name/id is what lets this coexist with
               other carousels on the same page. -->
          <div class="row">
            <div class="carousel-fixed carousel-small-img">
              <input type="radio" name="testi1-slides" id="testi1-radio-1" checked="">
              <input type="radio" name="testi1-slides" id="testi1-radio-2">
              <input type="radio" name="testi1-slides" id="testi1-radio-3">
              <ul class="slides  ">
                <li class="slide p-b-4">
                  <p class="white font-weight-400 italic center h6">
                    "Similique fugit repellendus expedita excepturi iure perferendis<br> provident
                    quia
                    eaque. Repellendus, vero numquam?"
                  </p>
                  <p class="center white text-uppercase background-color m0 p0 bold">- ALEX MORGAN</p>
                  <p class="center small dark">Nimbus Co.</p>
                </li>
                <li class="slide p-b-4">
                  <p class="white font-weight-400 italic center h6">
                    "Natus voluptatum enim quod necessitatibus quis expedita harum<br> provident eos
                    obcaecati id culpa corporis molestias."
                  </p>
                  <p class="center white text-uppercase background-color m0 p0 bold">- JAMIE LEE
                  </p>
                  <p class="center small dark">Brightline Studio</p>
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
                <label for="testi1-radio-1"></label>
                <label for="testi1-radio-2"></label>
                <label for="testi1-radio-3"></label>
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
                display: "3cols stars",
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
                display: "2cols stars dark",
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
                display: "2cols quotes",
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
                display: "3cols images",
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
                display: "3cols quotes avatar",
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
            {
                title: "Testimonial 7",
                display: "Single",
                description: "Description for Testimonial 7",
                code: `
<section class="p-v-4 bg-light-grey">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 center">
        <blockquote class="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bright Studio didn't just redesign our brand — they gave it a point of view.
        </blockquote>
        <p class="bold m0">Elena Marsh, CMO at Circuit</p>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Testimonial 8",
                display: "Single starts",
                description: "Description for Testimonial 8",
                code: `
<section class="container p-v-4 center">
        <div style="max-width:40rem;margin:0 auto;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-m icon-color-1-fill"><path d="M7 7C4.8 7 3 8.8 3 11C3 13.1 4.6 14.8 6.6 15C6.1 16.5 5 17.6 3.5 18L4 20C7.3 19.3 9.5 16.5 9.5 12.5V11C9.5 8.8 8.5 7 7 7ZM17 7C14.8 7 13 8.8 13 11C13 13.1 14.6 14.8 16.6 15C16.1 16.5 15 17.6 13.5 18L14 20C17.3 19.3 19.5 16.5 19.5 12.5V11C19.5 8.8 18.5 7 17 7Z"></path></svg>
            <p class="lead m-v-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="bold">Isabelle Marchetti</p>
            <p class="grey small">Return guest, 6 stays</p>
            <div class="warning display-6">
                ★ ★ ★ ★ ★
            </div>
        </div>
    </section>
                `
            },
            {
                title: "Testimonial 9",
                display: "Single Image",
                description: "Description for Testimonial 8",
                code: `
<section class="bg-light-grey p-v-4 m-t-2">
  <div class="container row align-items-center">
    <div class="col-4 center">
      <div class="aspect-square rounded-1-4 overflow-hidden shadow m-h-2" style="background-image:url('https://picsum.photos/seed/iron-client/400/400');background-size:cover;background-position:center;"></div>
    </div>
    <div class="col-8 p-l-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-lg icon-color-1-fill"><path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"></path></svg>
      <p class="h5 dark italic m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
      <p class="bold black m-t-2 m-b-0">Talia Brooks</p>
      <p class="dark small">Founder, Basecamp Outfitters</p>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Testimonial 10",
                display: "Single video",
                description: "Description for Video 2",
                code: `
<section class="container p-v-4">
  <div class="row">
    <div class="col-md-8 m-h-auto center">
      <div class="position-relative m0 shadow-2 circle overflow-hidden d-inline-block w-10rem h-10rem">
        <iframe src="https://www.youtube.com/embed/TLkA0RELQ1g" title="Elephants Dream" class="boeder-none w-100 h-100" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p class="dark italic h4 m-t-2">"Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <p class="black bold m-t-1 m0">Elephants Dream</p>
      <p class="dark small m0">Blender Foundation</p>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Testimonial 11",
                display: "Single dark",
                description: "Description for Video 2",
                code: `
<div class="p-v-4 center bg-black";">
  <div class="container center bg-black col-10 col-lg-6">
    <svg viewBox="0 0 24 24" class="icon-m icon-warning-fill m-b-1"><path d="M6,17H10L12,13V7H6V13H9M14,17H18L20,13V7H14V13H17"></path></svg>
    <p class="lead italic m-b-1 warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    <span class="warning bold small">— Lorem I., Verified Buyer</span>
  </div>
</div>
                `
            },
        ]
    },
    {
        name: "FAQ",
        items: [
              {
                title: "FAQ 1",
                display: "Closable accordion",
                description: "Description for FAQ 4",
                code: `
<section id="studio" class="container p-v-4">
        <div class="row gap-4 align-items-center">
            <div class="col-12">
                <h2 class="display-5">FAQ</h2>
                <p class="grey m-b-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                <div class="accordion accordion-closable accordion-underline">
                    <div class="accordion-block">
                        <input type="checkbox" id="proc1">
                        <label for="proc1" class="accordion-label row justify-content-between align-items-center">Do I need an account to start?<svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div class="accordion-block">
                        <input type="checkbox" id="proc2">
                        <label for="proc2" class="accordion-label row justify-content-between align-items-center">Do I need a credit card to start?<svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    <div class="accordion-block">
                        <input type="checkbox" id="proc3">
                        <label for="proc3" class="accordion-label row justify-content-between align-items-center">Do you have documentation?<svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                    <div class="accordion-block">
                        <input type="checkbox" id="proc4">
                        <label for="proc4" class="accordion-label row justify-content-between align-items-center">BIf i have more questions? <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></label>
                        <div class="accordion-content grey small">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                `
            },
            {
                title: "FAQ 2",
                display: "Accordion default",
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
      <label for="accordionTitle1" class="accordion-label">Lorem ipsum dolor sit amet, consectetur
        adipisicing?</label>
      <div class="accordion-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </div>
    </div>
    <div class="accordion-block">
      <input type="radio" name="accordionTitle" id="accordionTitle2">
      <label for="accordionTitle2" class="accordion-label">Lorem ipsum dolor sit amet, consectetur adipisicing
        elit?</label>
      <div class="accordion-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer
      </div>
    </div>
    <div class="accordion-block">
      <input type="radio" name="accordionTitle" id="accordionTitle3">
      <label for="accordionTitle3" class="accordion-label">Lorem ipsum dolor sit amet, consectetur
        adipisicing?</label>
      <div class="accordion-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "FAQ 3",
                display: "Vertical tabs",
                description: "Description for FAQ 2",
                code: `
<section id="faq" class="p-v-4 bg-light-grey">
  <div class="container">
    <h2 class="display-6 bold center m-b-2">Frequently asked questions</h2>
    <div class="tabs-vertical">
      <input type="radio" name="v-tab" id="v-tab1" checked="">
      <input type="radio" name="v-tab" id="v-tab2">
      <input type="radio" name="v-tab" id="v-tab3">
      <div class="tabs-vertical-nav p-r-2">
        <label for="v-tab1" class="p1">Is Nova a real bank?</label>
        <label for="v-tab2" class="p1">How fast can I open an account?</label>
        <label for="v-tab3" class="p1">What happens if my card is lost?</label>
      </div>
      <div class="tabs-vertical-content">
        <p id="v-panel1" class="tab-panel dark">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p id="v-panel2" class="tab-panel dark">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <p id="v-panel3" class="tab-panel dark">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "FAQ 4",
                display: "Tabs accordion",
                description: "Description for FAQ 4",
                code: `
<section class="container center m-v-3">
  <p class="grey text-uppercase bold m-t-2">Help Center</p>
  <h1 class="black bold">Browse the FAQ by category</h1>
  <p class="dark font-weight-400 p-h-4 m-h-4">Jump straight to the topic you need — installation, theming,
    components, or licensing.</p>
</section>

<section class="container m-v-4 p1">
  <div class="tabs-vertical">
    <input type="radio" name="v-tabs" id="v-tab1" checked="">
    <input type="radio" name="v-tabs" id="v-tab2">
    <input type="radio" name="v-tabs" id="v-tab3">
    <input type="radio" name="v-tabs" id="v-tab4">

    <div class="tabs-vertical-nav p2 bg-light-grey rounded">
      <label for="v-tab1" class="p1 rounded">
        <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"></path></svg>
        Getting Started
      </label>
      <label for="v-tab2" class="p1 rounded">
        <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"></path></svg>
        Theming &amp; Variables
      </label>
      <label for="v-tab3" class="p1 rounded">
        <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M22,21H2V19H22V21M13.5,8H10.5L4,15H8L14.5,8H13.5M20,15L15,10L20,5L21.5,6.5L18,10L21.5,13.5L20,15Z"></path></svg>
        Components
      </label>
      <label for="v-tab4" class="p1 rounded">
        <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11C15.4,11 16,11.6 16,12.3V15.7C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.3C8,11.6 8.6,11 9.2,11V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"></path></svg>
        Licensing &amp; Support
      </label>
    </div>

    <div class="tabs-vertical-content p2">

      <!-- Panel 1: Getting Started -->
      <div id="v-panel1" class="tab-panel">
        <h3 class="black m-b-1">Getting Started</h3>
        <div class="accordion-closable">
          <div class="accordion-block">
            <input type="checkbox" id="gs1" checked="">
            <label for="gs1" class="accordion-label bg-white border-b p1">How do I install CSS Vars Framework?</label>
            <div class="accordion-content">
              Add one line to your <code>&lt;head&gt;</code>: <code>&lt;link rel="stylesheet" href="https://cdn.cssvars.com/cssvars.css"&gt;</code>.
              That's the entire setup — no package manager required.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="gs2">
            <label for="gs2" class="accordion-label bg-white border-b p1">Can I use it with a static site generator?</label>
            <div class="accordion-content">
              Yes. Since it's a single CSS file, it works with any static-site generator, server-rendered
              framework, or plain HTML page.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="gs3">
            <label for="gs3" class="accordion-label bg-white border-b p1">Is there a starter template?</label>
            <div class="accordion-content">
              The GitHub repository includes demo pages you can copy as a starting point for layouts, navigation,
              and common components.
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 2: Theming -->
      <div id="v-panel2" class="tab-panel">
        <h3 class="black m-b-1">Theming &amp; Variables</h3>
        <div class="accordion-closable">
          <div class="accordion-block">
            <input type="checkbox" id="th1" checked="">
            <label for="th1" class="accordion-label bg-white border-b p1">Where are the design tokens defined?</label>
            <div class="accordion-content">
              All tokens — colors, spacing, radii, shadows — live as CSS custom properties inside <code>:root</code>
              at the top of <code>cssvars.css</code>.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="th2">
            <label for="th2" class="accordion-label bg-white border-b p1">How do I build a dark mode?</label>
            <div class="accordion-content">
              Override the token values inside a <code>prefers-color-scheme: dark</code> media query or a class on
              <code>&lt;html&gt;</code>. No JavaScript theme switcher is required.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="th3">
            <label for="th3" class="accordion-label bg-white border-b p1">Does the layout scale fluidly across screen sizes?</label>
            <div class="accordion-content">
              Yes — spacing and typography tokens use <code>clamp()</code> so type and rhythm scale smoothly with
              the viewport instead of jumping at fixed breakpoints.
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 3: Components -->
      <div id="v-panel3" class="tab-panel">
        <h3 class="black m-b-1">Components</h3>
        <div class="accordion-closable">
          <div class="accordion-block">
            <input type="checkbox" id="cp1" checked="">
            <label for="cp1" class="accordion-label bg-white border-b p1">How do toggles and accordions work without JS?</label>
            <div class="accordion-content">
              Interactive components use the CSS checkbox/radio toggle pattern: a hidden input drives visibility
              through the <code>:checked</code> selector and adjacent-sibling combinators.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="cp2">
            <label for="cp2" class="accordion-label bg-white border-b p1">Can I combine gap utilities with the grid?</label>
            <div class="accordion-content">
              Add the opt-in <code>.col-gap</code> class to your <code>.row</code> to enable gap support in the
              flex-based grid columns.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="cp3">
            <label for="cp3" class="accordion-label bg-white border-b p1">Where can I browse all available blocks?</label>
            <div class="accordion-content">
              The block library ships as named HTML snippets you can copy directly into your project and
              customize with utility classes.
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 4: Licensing -->
      <div id="v-panel4" class="tab-panel">
        <h3 class="black m-b-1">Licensing &amp; Support</h3>
        <div class="accordion-closable">
          <div class="accordion-block">
            <input type="checkbox" id="li1" checked="">
            <label for="li1" class="accordion-label bg-white border-b p1">Is CSS Vars Framework free to use?</label>
            <div class="accordion-content">
              Yes, it's open source and free for personal and commercial projects. See the license file in the
              GitHub repository for full terms.
            </div>
          </div>
          <div class="accordion-block">
            <input type="checkbox" id="li2">
            <label for="li2" class="accordion-label bg-white border-b p1">How do I report a bug or request a feature?</label>
            <div class="accordion-content">
              Open an issue on the GitHub repository with a short reproduction — the maintainers review issues
              regularly.
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
                title: "FAQ 5",
                display: "Outline accordion",
                description: "Description for FAQ 4",
                code: `
<section id="faq" class="p-v-4 bg-light-grey">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="display-6 bold center m-b-2">Frequently asked questions</h2>
        <div class="accordion accordion-underline">
          <div class="accordion-block">
            <input type="radio" name="faq" id="faq1" checked="">
            <label for="faq1" class="accordion-label between-row p-v-1">
              <span class="bold">Do I need a credit card to start?</span>
              <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
            </label>
            <div class="accordion-content"><p class="dark m0">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p></div>
          </div>
          <div class="accordion-block">
            <input type="radio" name="faq" id="faq2">
            <label for="faq2" class="accordion-label between-row p-v-1">
              <span class="bold">Can I connect my own data warehouse?</span>
              <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
            </label>
            <div class="accordion-content"><p class="dark m0">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p></div>
          </div>
          <div class="accordion-block">
            <input type="radio" name="faq" id="faq3">
            <label for="faq3" class="accordion-label between-row p-v-1">
              <span class="bold">Is my data encrypted?</span>
              <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill accordion-chevron"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
            </label>
            <div class="accordion-content"><p class="dark m0">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "FAQ 6",
                display: "2cols",
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
        ]
    },
    {
        name: "CTA",
        items: [
            {
                title: "CTA 1",
                display: "1button",
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
                display: "2buttons dark",
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
            {
                title: "CTA 3",
                display: "Form text",
                description: "Description for CTA 3",
                code: `
<section id="book" class="container p-v-4">
  <div class="panel bg-color-1 row align-items-center gap-3" style="overflow:hidden">
    <div class="col-lg-6 stack">
      <h2 class="white">Ready to feel like yourself again?</h2>
      <p class="white opacity07">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
    </div>
    <div class="col-lg-6">
      <div class="bg-white rounded p2 stack">
        <div class="form-group">
          <label>Full name</label>
          <input type="text" class="form-control" placeholder="Jane Doe">
        </div>
        <div class="form-group">
          <label>Preferred service</label>
          <input type="text" class="form-control" placeholder="Therapeutic Massage">
        </div>
        <button class="button bg-color-1 white button-w-100">Request Appointment</button>
      </div>
    </div>
  </div>
</section>
                `
            },
            {
                title: "CTA 4",
                display: "Form col",
                description: "Description for CTA 3",
                code: `
                <div class=" bg-color-1 p-v-4">
    <div class="row justify-content-center container">
      <div class="col-md-7 center">
        <h2 class="display-5 bold white">Let's build something bright</h2>
        <p class="grey m-t-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form class="m-t-2 stack gap-1">
          <input type="text" class="form-control form-control-border" placeholder="Your name">
          <input type="email" class="form-control form-control-border" placeholder="Email address">
          <textarea class="form-control form-control-border" rows="4" placeholder="Tell us about your project"></textarea>
          <button type="submit" class="button bg-dark w-100">Send inquiry</button>
        </form>
      </div>
    </div>
  </div>
                `
            },
            {
                title: "CTA 5",
                display: "Search",
                description: "Description for CTA 3",
                code: `
<section id="book" class="container p-b-4">
        <div class="panel p2 bg-gradient-luxury">
            <div class="row gap-2 align-items-end">
                <div class="col-3">
                    <label class="small bold m-b-1 d-block white">Check in</label>
                    <input type="date" class="form-control w-100">
                </div>
                <div class="col-3">
                    <label class="small bold m-b-1 d-block white">Check out</label>
                    <input type="date" class="form-control w-100">
                </div>
                <div class="col-3">
                    <label class="small bold m-b-1 d-block white">Guests</label>
                    <select class="form-control w-100">
                        <option>2 Adults</option>
                        <option>2 Adults, 1 Child</option>
                        <option>4 Adults</option>
                    </select>
                </div>
                <div class="col-3">
                    <button class="button button-w-100 bg-color-1 white">Check Availability</button>
                </div>
            </div>
        </div>
    </section>
            `
            },
            {
                title: "CTA 6",
                display: "Donation",
                description: "Description for CTA 3",
                code: `
<section id="donate" class="p-v-4">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="panel center p-v-3">
          <h2 class="display-6 m-b-2">Make a donation</h2>
          <p class="grey m-b-3">Every lorem ipsum dollar helps dolor sit amet consectetur adipiscing.</p>
          <div class="cluster gap-1 justify-content-center m-b-3">
            <button class="button outline-color-1 color-1 bg-white rounded">$25</button>
            <button class="button bg-color-1 white rounded">$50</button>
            <button class="button outline-color-1 color-1 bg-white rounded">$100</button>
            <button class="button outline-color-1 color-1 bg-white rounded">Other</button>
          </div>
          <a href="#" class="button button-lg w-100 bg-color-2 white rounded">Donate now</a>
        </div>
      </div>
    </div>
  </div>
</section>
            `
            },
            {
                title: "CTA 7",
                display: "Button call",
                description: "Description for CTA 3",
                code: `
<section id="contact" class="p-v-4">
  <div class="container">
    <div class="promo-box bg-light-grey center">
      <h2 class="display-6">Duis aute irure dolor in reprehenderit</h2>
      <p class="grey m-v-2">Aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
      <div class="cluster justify-content-center gap-2">
        <a href="#" class="button button-lg">Contact us</a>
        <span class="cluster gap-1 grey display-6"><svg class="icon icon-s icon-color-1-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h4l2 5-2.5 2A12 12 0 0 0 12.5 16.5L14.5 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z"></path></svg>(415) 555-0199</span>
      </div>
    </div>
  </div>
</section>
            `
            },
            {
                title: "CTA 8",
                display: "Wide",
                description: "Description for CTA 3",
                code: `
<section id="contact" class="bg-dark p-v-4 rounded-0">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-7">
        <h2 class="display-5 white m-b-1">Aliquip Lorem Est Pariatur Officia</h2>
        <p class="grey">Pariatur dolore laborum commodo sint tempor commodo mollit adipiscing qui velit enim sunt velit.</p>
      </div>
      <div class="col-md-5 m-t-2 d-flex justify-content-end">
        <a href="#" class="button button-lg">Contact sales <svg viewBox="0 0 24 24" class="icon-xs icon-white-fill"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></a>
      </div>
    </div>
  </div>
</section>
            `
            },
            {
                title: "CTA 9",
                display: "Subscribe",
                description: "Description for CTA 3",
                code: `
<section class="container-fluid bga-color-1 p-v-4">
  <div class="container center">
    <h3 class="dark bold m0">Join the AURA list</h3>
    <p class="dark p-b-1">10% off your first order, plus early access to new collections.</p>
    <form class="row justify-content-center cluster">
      <div class="col-md-4 col-8 p-h--1-2">
        <input type="email" placeholder="Your email address" class="w-100  form-control">
      </div>
      <div class="col-md-2 col-4 p-h--1-2">
        <button type="submit" class="bg-black white w-100">Subscribe</button>
      </div>
    </form>
  </div>
</section>
            `
            },
            {
                title: "CTA 10",
                display: "Wid 2 buttons",
                description: "Description for CTA 3",
                code: `
<section class="container p-v-4">
  <div class="row bg-light-grey rounded p2 align-items-center">
    <div class="col-md-8 p1">
      <h5 class="black bold m0">Didn't find your answer?</h5>
      <p class="dark m0 m-t-1">Search the full help center or open a ticket — our team reads every one.</p>
    </div>
    <div class="col-md-4 p1 right">
      <a href="support-1.html" class="button bg-white color-1">Search help center</a>
      <a href="support-2.html" class="button">Submit a ticket</a>
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
                display: "3cols",
                description: "Description for Pricing 1",
                code: `
<section id="pricing" class="p-v-4 bg-light-grey">
  <div class="container">
    <div class="center m-b-4">
      <h2 class="display-5">Lorem ipsum pricing</h2>
      <p class="grey">Dolor sit amet consectetur adipiscing elit.</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 m-b-2">
      <div class="card h-100">
        
        <h3 class="h5">Starter</h3>
        <p class="display-6 m-b-2">$19<span class="small grey">/mo</span></p>
        <ul class="m-b-3" style="list-style:none;padding-left:0;"><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Lorem ipsum dolor</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Sit amet consectetur</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Adipiscing elit sed</span></li></ul>
        <a href="#" class="button w-100 outline-color-1 color-1 bg-white rounded center">Choose plan</a>
      </div>
    </div>
      <div class="col-12 col-md-4 m-b-2">
      <div class="card shadow-3 border-solid border-2 border-color-1 h-100">
        <span class="pill bg-color-1 white m-b-1">Most popular</span>
        <h3 class="h5">Growth</h3>
        <p class="display-6 m-b-2">$49<span class="small grey">/mo</span></p>
        <ul class="m-b-3" style="list-style:none;padding-left:0;"><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Everything in Starter</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Do eiusmod tempor</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Incididunt ut labore</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Dolore magna aliqua</span></li></ul>
        <a href="#" class="button w-100 bg-color-1 white rounded center">Choose plan</a>
      </div>
    </div>
      <div class="col-12 col-md-4 m-b-2">
      <div class="card h-100">
        
        <h3 class="h5">Scale</h3>
        <p class="display-6 m-b-2">$99<span class="small grey">/mo</span></p>
        <ul class="m-b-3" style="list-style:none;padding-left:0;"><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Everything in Growth</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Ut enim ad minim</span></li><li class="cluster gap-1 m-b-1"><svg class="icon icon-xs icon-success-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg><span class="small">Veniam quis nostrud</span></li></ul>
        <a href="#" class="button w-100 outline-color-1 color-1 bg-white rounded center">Choose plan</a>
      </div>
    </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Pricing 2",
                display: "Details",
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
                display: "Compare",
                description: "Description for Pricing 3",
                code: `
<section class="container m-v-4 ">
  <p class="display-5 dark center">Compare Plans</p>
  <hr class="width-short m-v-1">
<div class="container auto-overflow-x">
  <table class="table table-hover left ">
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
            {
                title: "Pricing 4",
                display: "3cols seperate",
                description: "Description for Pricing 1",
                code: `
<section id="plans" class="bg-light-grey p-v-4 m-t-2">
  <div class="container">
    <h2 class="h2 bold black center">Simple, transparent pricing</h2>
    <p class="dark center m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
    <div class="row m-t-3 align-items-center">
      
    <div class="col-4 p1">
      <div class="card p2 rounded-1-4 bg-panel black shadow center">
        
        <p class="bold h5 m-b-0">Starter</p>
        <p class="h2 bold m-t--1-2 m-b-0">$249<span class="small">/mo</span></p>
        <p class="dark small m-t--1-2">For early-stage teams</p>
        <ul class="no-indent-ul left m-t-2">
          <li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Monthly bookkeeping</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Quarterly tax review</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Email support</li>
        </ul>
        <a href="#contact" class="button w-100 bg-color-1 white m-t-1">Choose Plan</a>
      </div>
    </div>
      
    <div class="col-4 p1">
      <div class="card p2 rounded-1-4 bg-color-1 white shadow-4 center">
        <span class="badge bg-color-2 black bold m-b-1">Most Popular</span><br>
        <p class="bold white h5 m-b-0">Growth</p>
        <p class="h2 bold white m-t--1-2 m-b-0">$599<span class="small">/mo</span></p>
        <p class="grey small m-t--1-2">For scaling businesses</p>
        <ul class="no-indent-ul left m-t-2">
          <li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-white-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Everything in Starter</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-white-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Dedicated advisor</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-white-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Cash flow forecasting</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-white-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Priority support</li>
        </ul>
        <a href="#contact" class="button w-100 bg-white color-1 m-t-1">Choose Plan</a>
      </div>
    </div>
      
    <div class="col-4 p1">
      <div class="card p2 rounded-1-4 bg-panel black shadow center">
        
        <p class="bold h5 m-b-0">Enterprise</p>
        <p class="h2 bold m-t--1-2 m-b-0">$1,299<span class="small">/mo</span></p>
        <p class="dark small m-t--1-2">For complex organizations</p>
        <ul class="no-indent-ul left m-t-2">
          <li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Everything in Growth</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Fractional CFO</li><li class="m-b--1-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-xs icon-color-1-fill m-r--1-2"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"></path></svg>Custom reporting suite</li>
        </ul>
        <a href="#contact" class="button w-100 bg-color-1 white m-t-1">Choose Plan</a>
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
        name: "Contact",
        items: [
            {
                title: "Contact 1",
                display: "Form map",
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
                display: "icons",
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
                display: "Wide map form",
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
                display: "Contacts form",
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
            {
                title: "Contact 5",
                display: "Form",
                description: "Description for Contact 4",
                code: `
<section class="container p-v-4">
  <div class="row justify-content-center">
    <div class="col-md-6 center">
      <h1 class="black bold">Say hello</h1>
      <p class="dark h6 font-weight-400 m-t-1">One inbox, one small team, no ticket queue.
        Ask us anything about the framework.</p>

      <div class="left m-t-3">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Your name">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Your email">
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="6" placeholder="Your message"></textarea>
        </div>
        <button type="submit" class="button w-100 center">Send message</button>
      </div>

      <div class="row justify-content-center m-t-3 gap-2">
        <a href="#" class="hover-grey"><svg viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg></a>
        <a href="#" class="hover-grey"><svg viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.19,14.41 4.53,14.44 3.89,14.32C4.16,15.14 4.68,15.85 5.37,16.36C6.06,16.87 6.9,17.15 7.76,17.15C6.14,18.44 4.13,19.13 2.07,19.13C1.72,19.13 1.36,19.11 1,19.07C3.06,20.42 5.5,21.19 8.06,21.19C16,21.19 20.33,14.53 20.33,8.79C20.33,8.6 20.32,8.42 20.31,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg></a>
        <a href="#" class="hover-grey"><svg viewBox="0 0 24 24" class="icon-sm icon-color-1-fill"><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path></svg></a>
      </div>
      <p class="smaller dark center m-t-2">or email us directly at
        <a href="mailto:hello@cssvars.com" class="bold color-1">hello@cssvars.com</a></p>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Contact 6",
                display: "Locations form faq",
                description: "Description for Contact 4",
                code: `
<section class="container p-v-4">
  <h4 class="black bold">Our offices</h4>
  <div class="row m-t-2">
    <div class="col-md-4 p1">
      <img src="https://picsum.photos/seed/office-kharkiv/500/320" class="img-responsive rounded shadow-1 w-100" alt="Kharkiv, Ukraine">
      <h6 class="black bold m-t-1">Kharkiv, Ukraine</h6>
      <p class="small dark">HQ &amp; core engineering</p>
    </div>
    <div class="col-md-4 p1">
      <img src="https://picsum.photos/seed/office-lisbon/500/320" class="img-responsive rounded shadow-1 w-100" alt="Lisbon, Portugal">
      <h6 class="black bold m-t-1">Lisbon, Portugal</h6>
      <p class="small dark">Developer relations</p>
    </div>
    <div class="col-md-4 p1">
      <img src="https://picsum.photos/seed/office-austin/500/320" class="img-responsive rounded shadow-1 w-100" alt="Austin, USA">
      <h6 class="black bold m-t-1">Austin, USA</h6>
      <p class="small dark">Partnerships &amp; sales</p>
    </div>
  </div>
</section>
<section class="container p-b-4">
  <div class="row">
    <div class="col-md-7 p1">
      <div class="panel shadow-1 rounded p2">
        <h5 class="black bold">Send a message</h5>
        <div class="row m-t-1">
          <div class="col-md-6 p-1-2">
            <div class="form-group">
              <label class="small bold">NAME</label>
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="col-md-6 p-1-2">
            <div class="form-group">
              <label class="small bold">EMAIL</label>
              <input type="email" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="small bold">DEPARTMENT</label>
          <select class="form-control">
            <option selected="" disabled="">Choose a department</option>
            <option>Sales</option>
            <option>Support</option>
            <option>Engineering</option>
            <option>Press</option>
          </select>
        </div>
        <div class="form-group">
          <label class="small bold">MESSAGE</label>
          <textarea class="form-control" rows="4"></textarea>
        </div>
        <button type="submit" class="button">Send message</button>
      </div>
    </div>

    <div class="col-md-5 p1">
      <h5 class="black bold">Before you write in…</h5>
      <div class="accordion m-t-1">
        <div class="accordion-block">
          <input type="radio" name="cfaq" id="cfaq1" checked="">
          <label for="cfaq1" class="accordion-label">What's your typical response time?</label>
          <div class="accordion-content">Under 24 hours on business days for general questions;
            support tickets are usually answered same-day.</div>
        </div>
        <div class="accordion-block">
          <input type="radio" name="cfaq" id="cfaq2">
          <label for="cfaq2" class="accordion-label">Do you offer implementation help?</label>
          <div class="accordion-content">Yes — mention it in the department field and our
            developer relations team will follow up with next steps.</div>
        </div>
        <div class="accordion-block">
          <input type="radio" name="cfaq" id="cfaq3">
          <label for="cfaq3" class="accordion-label">Is the framework really free?</label>
          <div class="accordion-content">Always. CSS Vars Framework is MIT licensed and free for
            commercial and personal use.</div>
        </div>
      </div>
      <a href="support-3.html" class="button w-100 center m-t-2">Browse the full FAQ</a>
    </div>
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
                display: "Short",
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
                display: "Minimum",
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
                display: "4cols links",
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
                display: "4cols full",
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
            {
                title: "Footer 5",
                display: "Dark container",
                description: "Description for Footer 4",
                code: `
<footer class="p-v-4 bg-dark">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 m-b-3">
        <a href="#" class="logo h4 white"><svg class="icon icon-sm icon-white-fill m-r-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"></path></svg>Lorem</a>
        <p class="small light-grey m-t-2" style="opacity:.7;">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
      </div>
      <div class="col-6 col-md-2 m-b-3">
        <p class="white small text-uppercase m-b-2">Product</p>
        <div class="footer-links stack gap-1">
          <a href="#" class="light-grey small">Features</a>
          <a href="#" class="light-grey small">Pricing</a>
          <a href="#" class="light-grey small">Integrations</a>
        </div>
      </div>
      <div class="col-6 col-md-2 m-b-3">
        <p class="white small text-uppercase m-b-2">Company</p>
        <div class="footer-links stack gap-1">
          <a href="#" class="light-grey small">About</a>
          <a href="#" class="light-grey small">Careers</a>
          <a href="#" class="light-grey small">Blog</a>
        </div>
      </div>
      <div class="col-12 col-md-4 m-b-3">
        <p class="white small text-uppercase m-b-2">Stay up to date</p>
        <div class="form-row cluster gap-1">
          <input type="email" class="form-control" placeholder="you@example.com">
          <button class="button bg-color-1 white rounded">Subscribe</button>
        </div>
      </div>
    </div>
    <hr class="border-color-2 m-v-3">
    <p class="small light-grey center m-b-0" style="opacity:.6;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</footer>                
                `
            },
            {
                title: "Footer 6",
                display: "1line",
                description: "Description for Footer 4",
                code: `
<footer class="footer p-v-2 m-t-0">
  <div class="container">
    <div class="footer-content">
      <div>
        <p class="bold h5 color-1 m0">HomeFind</p>
        <p class="dark small m0">© 2026 HomeFind Realty Group.</p>
      </div>
      <ul class="footer-links">
        <li><a href="#listings">Listings</a></li>
        <li><a href="#agents">Agents</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
  </div>
</footer>
                `
            },
            {
                title: "Footer 7",
                display: "Form contacts",
                description: "Description for Footer 4",
                code: `
<footer class="footer p-v-2 m-t-0">
<section id="contact" class="p-v-4">
  <div class="container">
    <div class="row align-items-center gap">
      <div class="col-12 col-md-6 m-b-3">
        <span class="small color-1 text-uppercase">Get in touch</span>
        <h2 class="display-5 m-t-1 m-b-2">Lorem ipsum dolor sit amet consectetur</h2>
        <p class="grey m-b-3">Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        <div class="cluster gap-1 m-b-1"><svg class="icon icon-sm icon-color-1-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5C20.55,15.5 21,15.95 21,16.5V20C21,20.55 20.55,21 20,21C10.61,21 3,13.39 3,4C3,3.45 3.45,3 4,3H7.5C8.05,3 8.5,3.45 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path></svg><span class="small">(555) 020-0200</span></div>
        <div class="cluster gap-1"><svg class="icon icon-sm icon-color-1-fill" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"></path></svg><span class="small">hello@loremestates.com</span></div>
      </div>
      <div class="col-12 col-md-6">
        <div class="panel">
          <div class="form-row m-b-2"><input type="text" class="form-control" placeholder="Your name"></div>
          <div class="form-row m-b-2"><input type="email" class="form-control" placeholder="Your email"></div>
          <div class="form-row m-b-2"><textarea class="form-control" rows="3" placeholder="Tell us what you're looking for"></textarea></div>
          <button class="button w-100 bg-color-1 white rounded">Send message</button>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container">
    <div class="between-row" style="flex-wrap:wrap;">
      <p class="m-b-0 small grey">© Lorem Estates</p>
      <div class="cluster gap-3">
        <a href="#" class="small black">Instagram</a>
        <a href="#" class="small black">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>
                `
            },
            {
                title: "Footer 8",
                display: "E-commerce",
                description: "Description for Footer 4",
                code: `
<footer class="bg-dark p2 line-height-17 m-t-4 rounded-0">
        <div class="row container-fluid child-padding-1">
            <div class="col-md-6 col-lg-4 p-v-1">
                <p class="white text-uppercase bold">Subscribe Newsletter</p>
                <p class="light-grey font-weight-400">
                    Get all the latest information on Events, Sales and Offers.
                    Sign up for newsletter today.
                </p>
            </div>

            <div class="col-md-6 col-lg-4 p-v-1">
                <div class="d-flex gap-1 m-v-2">
                    <div class="form-group flex-grow-1 m0">
                        <input type="email" class="form-control" id="inputSubscribeEmail" placeholder="Email Address">
                    </div>
                    <button class="m0 hover-shadow bga-color-1 white">Subscribe</button>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 p-v-1">
                <div class="d-flex gap-1 justify-content-center m-v-2">
                    <a href="#"><i class="icon-box hover-grey">
                        <svg viewBox="0 0 24 24" class="icon-s">
                            <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
                        </svg>
                    </i></a>
                    <a href="#"><i class="icon-box hover-grey">
                        <svg viewBox="0 0 512 512" class="icon-s">
                            <path fill="#fff" d="M381.384,198.639c24.157-1.993,40.543-12.975,46.849-27.876c-8.714,5.353-35.764,11.189-50.703,5.631c-0.732-3.51-1.55-6.844-2.353-9.854c-11.383-41.798-50.357-75.472-91.194-71.404c3.304-1.334,6.655-2.576,9.996-3.691c4.495-1.61,30.868-5.901,26.715-15.21c-3.5-8.188-35.722,6.188-41.789,8.067c8.009-3.012,21.254-8.193,22.673-17.396c-12.27,1.683-24.315,7.484-33.622,15.919c3.36-3.617,5.909-8.025,6.45-12.769C241.68,90.963,222.563,133.113,207.092,174c-12.148-11.773-22.915-21.044-32.574-26.192c-27.097-14.531-59.496-29.692-110.355-48.572c-1.561,16.827,8.322,39.201,36.8,54.08c-6.17-0.826-17.453,1.017-26.477,3.178c3.675,19.277,15.677,35.159,48.169,42.839c-14.849,0.98-22.523,4.359-29.478,11.642c6.763,13.407,23.266,29.186,52.953,25.947c-33.006,14.226-13.458,40.571,13.399,36.642C113.713,320.887,41.479,317.409,0,277.828c108.299,147.572,343.716,87.274,378.799-54.866c26.285,0.224,41.737-9.105,51.318-19.39C414.973,206.142,393.023,203.486,381.384,198.639z"></path>
                        </svg>
                    </i></a>
                    <a href="#"><i class="icon-box hover-grey">
                        <svg viewBox="0 0 24 24" class="icon-s">
                            <path fill="#fff" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
                        </svg>
                    </i></a>
                </div>
            </div>
        </div>

        <div class="row container-fluid">
            <div class="col-md-6 col-lg-3 p-v-1">
                <p class="white text-uppercase bold">Contact Information</p>
                <div class="m-v-1 smaller">
                    <p class="white text-uppercase font-weight-400 m0 smaller">Address:</p>
                    <p class="grey left m0 smaller font-weight-400">Svobody Square, 8, Kharkiv, Ukraine</p>
                </div>
                <div class="m-v-1 smaller">
                    <p class="white text-uppercase font-weight-400 m0 smaller">Phone:</p>
                    <p class="grey left m0 smaller font-weight-400">+380 96 926 5003</p>
                </div>
                <div class="m-v-1 smaller">
                    <p class="white text-uppercase font-weight-400 m0 smaller">Email:</p>
                    <p class="grey left m0 smaller font-weight-400">info@europeitoutsourcing.com</p>
                </div>
            </div>

            <div class="col-md-6 col-lg-9">
                <div class="row">
                    <div class="col-md-6 col-lg-4 p-v-1">
                        <p class="white text-uppercase bold">My Account</p>
                        <div class="row">
                            <div class="col-6">
                                <ul class="no-indent-ul p0 line-height-2 smaller">
                                    <li><a href="#" class="grey m0">About us</a></li>
                                    <li><a href="#" class="grey m0">Contact us</a></li>
                                    <li><a href="#" class="grey m0">My account</a></li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul class="no-indent-ul p0 line-height-2 smaller">
                                    <li><a href="#" class="grey m0">Orders history</a></li>
                                    <li><a href="#" class="grey m0">Advanced search</a></li>
                                    <li><a href="#" class="grey m0">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-5 p-v-1">
                        <p class="white text-uppercase bold">Main Features</p>
                        <div class="row">
                            <div class="col-6">
                                <ul class="no-indent-ul p0 line-height-2 smaller">
                                    <li><a href="#" class="grey m0">Pure HTML CSS</a></li>
                                    <li><a href="#" class="grey m0">Fast Loading</a></li>
                                    <li><a href="#" class="grey m0">Extendable with Variables</a></li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul class="no-indent-ul p0 line-height-2 smaller">
                                    <li><a href="#" class="grey m0">Responsive &amp; Mobile first</a></li>
                                    <li><a href="#" class="grey m0">100's of Free UI Elements</a></li>
                                    <li><a href="#" class="grey m0">Free &amp; Open Source</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 p-v-1">
                        <p class="white text-uppercase bold">Working Hours</p>
                        <p class="grey font-weight-400">Mon - Fri / 8:00AM - 5:00PM</p>
                    </div>
                </div>

                <hr class="m0">

                <div class="row p-v-1">
                    <div class="col-md-12">
                        <p class="grey left m-v-1 smaller">© Copyright 2026. All Rights Reserved Europe IT
                            Outsourcing Company.</p>
                    </div>
                </div>
            </div>
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
                display: "3cols",
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
                display: "2cols Split",
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
                display: "1col",
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
                display: "1col dark",
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
            {
                title: "Blog 5",
                display: "Sidebar",
                description: "Description for Blog 4",
                code: `
<section class="container p-v-2">
  <div class="row">
    <div class="col-md-8">
      <h4 class="black bold left m-b-2">Recent Posts</h4>

      <div class="row m-v-1">
        <div class="col-4 p0 m0">
          <img src="../img/blocks/work-1.jpg" class="img-responsive">
        </div>
        <div class="col-8 left p1">
          <p>
            <span class="font-weight-400 left"><a href="#" class="h5 black">A Beginner's Guide to CSS Layers</a></span>
            <span class="badge black">Admin wrote on 5/2/2026</span>
          </p>
          <p>An honest, no-nonsense walkthrough of the @layer cascade and why it finally solves
            specificity wars for good.</p>
          <a href="#" class="bold">Read More →</a>
        </div>
      </div>
      <hr class="width-short">

      <div class="row m-v-1">
        <div class="col-4 p0 m0">
          <img src="../img/blocks/work-4.jpg" class="img-responsive">
        </div>
        <div class="col-8 left p1">
          <p>
            <span class="font-weight-400 left"><a href="#" class="h5 black">How to Attract a Customer with a
              Marketing Model AIDA?</a></span>
            <span class="badge black">Admin wrote on 3/2/2026</span>
          </p>
          <p>Attention, Interest, Desire, Action — a model that's decades old and still shapes every
            landing page you visit.</p>
          <a href="#" class="bold">Read More →</a>
        </div>
      </div>
      <hr class="width-short">

      <div class="row m-v-1">
        <div class="col-4 p0 m0">
          <img src="../img/blocks/work-5.jpg" class="img-responsive">
        </div>
        <div class="col-8 left p1">
          <p>
            <span class="font-weight-400 left"><a href="#" class="h5 black">10 Tips on How to Make Your
              Content Better</a></span>
            <span class="badge black">Admin wrote on 3/13/2026</span>
          </p>
          <p>Ten small, unglamorous edits that compound into noticeably better writing over time.</p>
          <a href="#" class="bold">Read More →</a>
        </div>
      </div>

      <!-- Pagination -->
      <ul class="pagination m-t-2">
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>

    <div class="col-md-4 p1">
      <div class="card m-b-2">
        <div class="card-header">Search</div>
        <div class="card-body">
          <input type="text" class="form-control" placeholder="Search articles...">
        </div>
      </div>

      <div class="card m-b-2">
        <div class="card-header">Categories</div>
        <div class="card-body">
          <ul class="half-indent-ul">
            <li class="m-v-05"><a href="#">Guides <span class="badge bga-success m-l-1">14</span></a></li>
            <li class="m-v-05"><a href="#">Reviews <span class="badge bga-success m-l-1">8</span></a></li>
            <li class="m-v-05"><a href="#">Marketing <span class="badge bga-success m-l-1">6</span></a></li>
            <li class="m-v-05"><a href="#">Opinion <span class="badge bga-success m-l-1">3</span></a></li>
          </ul>
        </div>
      </div>

      <div class="card m-b-2">
        <div class="card-header">Recent Posts</div>
        <div class="card-body">
          <ul class="half-indent-ul">
            <li class="m-v-05"><a href="#">Quality Web Design Principles To Follow in 2026</a></li>
            <li class="m-v-05"><a href="#">Masking, Effects &amp; Patterns in Illustrator</a></li>
            <li class="m-v-05"><a href="#">Why Zero-JS Frameworks Are Having a Moment</a></li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header">Newsletter</div>
        <div class="card-body">
          <p class="small dark font-weight-400">One good read, every Friday.</p>
          <form class="row">
            <input type="email" class="form-control" placeholder="Enter your email">
            <button type="submit" class="button w-100 m-t-1">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
            {
                title: "Blog 6",
                display: "Single",
                description: "Description for Blog 4",
                code: `
<article class="bg-white p-v-4">
  <div class="container">

    <!-- breadcrumb -->
    <ul class="breadcrumb dark small p0">
      <li><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#" class="black">Marketing</a></li>
    </ul>

    <!-- meta row -->
    <div class="row m-t-2">
      <div class="col-md-12">
        <p class="d-inline badge larger bga-color-1 text-uppercase bold">Marketing</p>
        <span class="d-inline dark m-h-1">
          <svg viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill"><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8H19V19Z"></path></svg>
          March 10, 2026
        </span>
        <span class="d-inline dark m-h-1">
          <svg viewBox="0 0 24 24" class="icon-xxs icon-color-1-fill"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path></svg>
          6 min read
        </span>
      </div>
    </div>

    <!-- title -->
    <h1 class="black bold left m-t-1">How to Attract a Customer with a Marketing Model AIDA</h1>
    <p class="dark left h6 font-weight-400 m-t-1">A practical, no-fluff walkthrough of the Attention–Interest–Desire–Action framework, with real examples you can steal for your next campaign.</p>

    <!-- author + share row -->
    <div class="row justify-content-between align-items-center m-t-2 p-v-1 outline-light-grey m0">
      <div class="d-flex align-items-center gap-2 p1">
        <img src="../img/blocks/worker-2-s.jpg" class="img-responsive circle icon-lg" alt="Victoria Perry">
        <div>
          <p class="black bold m0">Victoria Perry</p>
          <p class="dark small m0">CEO &amp; Co-Founder</p>
        </div>
      </div>
      <div class="d-flex gap-1 p1">
        <a href="#"><svg viewBox="0 0 24 24" class="icon-s icon-color-1-fill"><path d="M17,2H7A5,5 0 0,0 2,7V17A5,5 0 0,0 7,22H17A5,5 0 0,0 22,17V7A5,5 0 0,0 17,2M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M17.5,6.5A1,1 0 0,0 16.5,7.5A1,1 0 0,0 17.5,8.5A1,1 0 0,0 18.5,7.5A1,1 0 0,0 17.5,6.5Z"></path></svg></a>
        <a href="#"><svg viewBox="0 0 24 24" class="icon-s icon-color-1-fill"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg></a>
        <a href="#"><svg viewBox="0 0 24 24" class="icon-s icon-color-1-fill"><path d="M4,2A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4A2,2 0 0,0 20,2H4M8.34,8.63C7.13,8.63 6.29,7.79 6.29,6.75C6.29,5.71 7.14,4.87 8.38,4.87C9.62,4.87 10.44,5.71 10.46,6.75C10.46,7.79 9.62,8.63 8.34,8.63M10.13,19.24H6.44V9.93H10.13V19.24M19.5,19.24H15.83V14C15.83,12.61 15.13,11.87 14.19,11.87C13.27,11.87 12.62,12.59 12.62,14V19.24H8.93V9.93H12.62V11.54C12.94,10.85 13.94,9.69 15.66,9.69C17.5,9.69 19.5,10.86 19.5,14.15V19.24Z"></path></svg></a>
      </div>
    </div>

    <!-- hero image -->
     <div class="centered-col">
      <img src="../img/blocks/technology.jpg" class="img-responsive rounded m-t-2" alt="AIDA marketing model">
      <p class="small dark center m-t--1-2">The AIDA funnel in action across a modern acquisition campaign.</p>
     </div>

    <!-- body -->
    <div class="row justify-content-center m-t-2">
      <div class="col-md-8">
        <p class="line-height-17 dark m-t-1">Every customer decision, no matter how small, follows a psychological arc. The AIDA model breaks that arc into four stages — Attention, Interest, Desire, and Action — and gives marketers a repeatable structure for guiding a stranger toward a buyer.</p>

        <h3 class="black bold left m-t-2">1. Capture Attention</h3>
        <p class="line-height-17 dark m-t-1">Before anything else, your message has to interrupt the scroll. That means a bold headline, a striking visual, or a claim specific enough to feel earned rather than generic.</p>

        <blockquote class="m-t-2">
          <p>"People don't buy what you do, they buy why you do it — attention is earned by clarity, not volume."</p>
          <span class="blockquote-footer">Victoria Perry, CEO</span>
        </blockquote>

        <h3 class="black bold left m-t-2">2. Build Interest</h3>
        <p class="line-height-17 dark m-t-1">Once you have eyes on the page, interest is sustained through relevance. Speak directly to the problem your audience already knows they have.</p>
        <ul class="dark line-height-17">
          <li>Lead with the customer's problem, not your product spec sheet</li>
          <li>Use concrete numbers instead of vague adjectives</li>
          <li>Keep the first three sentences skimmable on mobile</li>
        </ul>

        <h3 class="black bold left m-t-2">3. Create Desire</h3>
        <p class="line-height-17 dark m-t-1">Desire is where features become benefits. Show the after-state, not just the mechanism, and let social proof do the convincing for you.</p>

        <h3 class="black bold left m-t-2">4. Drive Action</h3>
        <p class="line-height-17 dark m-t-1">Every piece of content should end with exactly one next step. Multiple competing calls-to-action dilute conversion more than a mediocre offer ever will.</p>

        <!-- tags -->
        <div class="pills m-t-3">
          <a href="#" class="pill">Marketing</a>
          <a href="#" class="pill">Growth</a>
          <a href="#" class="pill">Copywriting</a>
          <a href="#" class="pill">Conversion</a>
        </div>
      </div>
    </div>

    <!-- author bio card -->
    <div class="row justify-content-center m-t-3">
      <div class="col-md-8">
        <div class="card d-flex align-items-center gap-2">
          <img src="../img/blocks/worker-2-s.jpg" class="img-responsive circle icon-lg" alt="Victoria Perry">
          <div>
            <p class="black bold m0">Written by Victoria Perry</p>
            <p class="dark small m0">CEO and Co-Founder, writing about growth marketing, positioning, and customer psychology.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- prev / next -->
    <div class="row justify-content-center m-t-3">
      <div class="col-md-8">
        <div class="row justify-content-between outline-light-grey p1 m0">
          <a href="#" class="dark small">← 10 Tips on How to Make Your Content Better</a>
          <a href="#" class="dark small">Masking, Effects &amp; Patterns in Illustrator →</a>
        </div>
      </div>
    </div>

  </div>
</article>
`
            },
            {
                title: "Blog 7",
                display: "Single sidebar",
                description: "Description for Blog 4",
                code: `
<div class="container">

    <div class="row">
      <div class="col-md-8">

        <p class="dark small m0">Blog / Startups</p>
        <h1 class="black bold left m-t-1">10 Tips on How to Make Your Content Better</h1>
        <div class="d-flex align-items-center gap-1 m-t-1">
          <img src="../img/blocks/worker-1-s.jpg" class="img-responsive circle icon-s" alt="Author">
          <p class="dark small m0">By James Carter · 13 March, 2026 · 8 min read</p>
        </div>

        <img src="../img/blocks/laptop.jpg" class="img-responsive rounded m-t-2" alt="Content strategy workspace">

        <div class="bg-white p2 m-t-2">
          <h4 id="planning" class="black bold left">Start with a Content Plan</h4>
          <p class="line-height-17 dark m-t-1">Publishing without a plan is the fastest way to burn out an editorial team. Map topics to funnel stages before a single word is written.</p>

          <h4 id="research" class="black bold left m-t-3">Research Before You Write</h4>
          <p class="line-height-17 dark m-t-1">Every well-performing post starts as a question your audience is already asking. Search intent, not inspiration, should drive the outline.</p>
          <ul class="dark line-height-17">
            <li>Mine your support inbox for recurring questions</li>
            <li>Check competitor content for coverage gaps</li>
            <li>Validate demand with basic keyword volume</li>
          </ul>

          <h4 id="structure" class="black bold left m-t-3">Structure for Skimmers</h4>
          <p class="line-height-17 dark m-t-1">Most readers scan before they commit. Descriptive subheadings and short paragraphs do more for retention than clever prose.</p>

          <blockquote class="m-t-2">
            <p>"Good structure is invisible — readers only notice it when it's missing."</p>
            <span class="blockquote-footer">James Carter, Content Lead</span>
          </blockquote>

          <h4 id="edit" class="black bold left m-t-3">Edit Ruthlessly</h4>
          <p class="line-height-17 dark m-t-1">A first draft is a starting position, not a finished asset. Cut every sentence that doesn't earn its place.</p>
        </div>

        <div class="pills m-t-2">
          <a href="#" class="pill pill-color-1">Content Strategy</a>
          <a href="#" class="pill">Editing</a>
          <a href="#" class="pill">SEO</a>
        </div>
      </div>

      <!-- sticky sidebar -->
      <div class="col-md-4">
        <div class="position-sticky top-0">

          <div class="card m-t-1">
            <p class="black bold m0 m-b-1">On This Page</p>
            <ul class="menu">
              <li class="menu-item"><a href="#planning">Start with a Content Plan</a></li>
              <li class="menu-item"><a href="#research">Research Before You Write</a></li>
              <li class="menu-item"><a href="#structure">Structure for Skimmers</a></li>
              <li class="menu-item"><a href="#edit">Edit Ruthlessly</a></li>
            </ul>
          </div>

          <div class="card m-t-2 center">
            <img src="../img/blocks/worker-1-s.jpg" class="img-responsive circle icon-lg m-auto" alt="James Carter">
            <p class="black bold m-t-1 m0">James Carter</p>
            <p class="dark small m0">Content Lead</p>
            <p class="dark small line-height-17 m-t-1">Writes about editorial workflows, SEO, and building content teams that scale.</p>
            <a href="#" class="button button-s bg-black text-uppercase small p-v-1 p-h-2 m-t-1">Follow</a>
          </div>

          <div class="card m-t-2">
            <p class="black bold m0 m-b-1">Related Posts</p>
            <div class="menu">
              <a href="#" class="d-flex align-items-center gap-1 p-v-1">
                <img src="../img/blocks/work-1.jpg" class="img-responsive rounded icon-lg" alt="Related post">
                <span class="small dark">How to Attract a Customer with AIDA</span>
              </a>
              <a href="#" class="d-flex align-items-center gap-1 p-v-1">
                <img src="../img/blocks/work-10.jpg" class="img-responsive rounded icon-lg" alt="Related post">
                <span class="small dark">Masking, Effects &amp; Patterns</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
`
            },
            {
                title: "Blog 8",
                display: "Single parallax",
                description: "Description for Blog 4",
                code: `
<article class="bg-white">

  <!-- full-bleed hero -->
  <section class="parallax-img h-100-vh m-auto" style="background-image: url('../img/blocks/portfolio-1.jpg');">
    <div class="h-100-vh d-flex flex-column justify-content-center align-items-center p-v-3">
      <p class="badge larger bga-color-1 white text-uppercase bold">Web Design</p>
      <h1 class="white bold center m-t-1 col-md-8">Quality Web Design Principles To Follow in 2026</h1>
      <p class="grey center m-t-1">By Elena Ross · September 4, 2026 · 5 min read</p>
    </div>
  </section>

  <!-- meta strip -->
  <section class="bg-color-1 p-v-1">
    <div class="container row justify-content-between align-items-center">
      <p class="white small m0">Design</p>
      <div class="d-flex gap-1">
        <svg viewBox="0 0 24 24" class="icon-xxs icon-color-2-fill"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>
        <span class="grey small">2,481</span>
      </div>
    </div>
  </section>

  <!-- content -->
  <div class="container p-v-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <p class="line-height-17 dark larger m-t-1">Web design in 2026 is no longer about decoration — it's about restraint. The sites that convert best strip away everything that doesn't serve the reader's next decision.</p>

        <h3 class="black bold left m-t-2">Fluid, Not Fixed</h3>
        <p class="line-height-17 dark m-t-1">Viewport-responsive typography and spacing remove the need for a dozen breakpoints. Design once, let the browser do the scaling.</p>

        <div class="row m-t-2">
          <div class="col-md-6 p1">
            <img src="../img/blocks/work-2.jpg" class="img-responsive rounded" alt="Design detail one">
          </div>
          <div class="col-md-6 p1">
            <img src="../img/blocks/work-4.jpg" class="img-responsive rounded" alt="Design detail two">
          </div>
        </div>
        <p class="small dark center m-t--1-2">Fluid grids adapt without a single fixed breakpoint.</p>

        <h3 class="black bold left m-t-3">Contrast Does the Heavy Lifting</h3>
        <p class="line-height-17 dark m-t-1">Color and type-scale contrast guide the eye more reliably than motion or ornamentation ever will.</p>

        <blockquote class="m-t-2">
          <p>"The best interface is the one the user forgets they're using."</p>
          <span class="blockquote-footer">Elena Ross, Design Director</span>
        </blockquote>

        <h3 class="black bold left m-t-2">Performance Is a Design Constraint</h3>
        <p class="line-height-17 dark m-t-1">A beautiful layout that loads slowly is a broken layout. Treat page weight as a design decision, not an engineering afterthought.</p>
      </div>
    </div>

    <!-- author closer -->
    <div class="row justify-content-center m-t-3">
      <div class="col-md-8 center bg-light-grey p2 rounded">
        <img src="../img/blocks/worker-3-s.jpg" class="img-responsive circle icon-lg m-auto" alt="Elena Ross">
        <p class="black bold m-t-1 m0">Elena Ross</p>
        <p class="dark small">Design Director — writes about visual systems and interface craft.</p>
      </div>
    </div>
  </div>
</article>
`
            },
            {
                title: "Blog 9",
                display: "Author",
                description: "Description for Blog 4",
                code: `
<section class="bg-light-grey p-v-4">
  <div class="container row p-v-1">
    <div class="col-md-4 p1 center">
      <img src="../img/blocks/worker-1.jpg" alt="Kim Doe" class="img-responsive rounded shadow-3">
    </div>
    <div class="col-md-8 p-h-3">
      <p class="badge larger bga-color-1 white text-uppercase font-weight-600 d-inline">Framework Author</p>
      <h1 class="black bold m-t-1">Kim Doe</h1>
      <p class="color-1 italic h6">Frontend Architect &amp; Creator of CSS Vars Framework</p>
      <hr class="m0 width-short m-v-2">
      <p class="dark line-height-17 m-v-1">
        Kim writes about dependency-free, zero-JavaScript CSS architecture — from
        <code>@layer</code> cascade design to fluid <code>clamp()</code> typography. Twelve
        years building for the web taught one lesson above the rest: the browser already
        ships most of what a framework needs to do.
      </p>
      <div class="row m-v-2">
        <a href="#:">
          <i class="icon-box circle m0 border hover-grey">
            <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
            </svg>
          </i>
        </a>
        <a href="#:">
          <i class="icon-box circle m0 border hover-grey">
            <svg viewBox="0 0 24 24" class="icon-xs icon-black-fill">
              <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
            </svg>
          </i>
        </a>
        <a href="#:">
          <i class="icon-box circle m0 border hover-grey">
            <svg viewBox="-7 0 32 32" class="icon-xs icon-black-fill">
              <path d="M16.844 9.156l-6.375 7.875 6.938 8.563h-2.906l-5.469-6.781-5.5 6.781h-2.906l6.969-8.563-6.375-7.875h2.906l4.906 6.063 4.875-6.063h2.938z"></path>
            </svg>
          </i>
        </a>
      </div>
      <a href="#articles" class="button bg-black">Read the articles</a>
      <a href="#" class="button color-1 outline-color-1 bg-white">Contact</a>
    </div>
  </div>
</section>
`
            },
        ]
    },
    {
        name: "E-commerce",
        items: [
          {
                title: "E-commerce 1",
                display: "Single Gallery",
                description: "Description for E-commerce 1",
                code: `
<div class="container">
<div class="row">

  <!-- ============ PRODUCT GALLERY ============ -->
  <div class="col-md-6 p1">
    <div class="row justify-content-center">
      <div id="gallery-box-photo-container" class="gallery-box-photo-container rounded shadow-3">
        <img id="p1-main-image" src="https://picsum.photos/seed/aura-prod1-4/800/800" alt="Ceramic Pour-Over Set"><br>
        <div class="gallery-box-thumbnail-image shadow">
          <img src="https://picsum.photos/seed/aura-prod1-main/800/800" onclick="document.getElementById('p1-main-image').src='https://picsum.photos/seed/aura-prod1-main/800/800'" alt="Thumbnail 1">
        </div>
        <div class="gallery-box-thumbnail-image shadow">
          <img src="https://picsum.photos/seed/aura-prod1-2/800/800" onclick="document.getElementById('p1-main-image').src='https://picsum.photos/seed/aura-prod1-2/800/800'" alt="Thumbnail 2">
        </div>
        <div class="gallery-box-thumbnail-image shadow">
          <img src="https://picsum.photos/seed/aura-prod1-3/800/800" onclick="document.getElementById('p1-main-image').src='https://picsum.photos/seed/aura-prod1-3/800/800'" alt="Thumbnail 3">
        </div>
        <div class="gallery-box-thumbnail-image shadow">
          <img src="https://picsum.photos/seed/aura-prod1-4/800/800" onclick="document.getElementById('p1-main-image').src='https://picsum.photos/seed/aura-prod1-4/800/800'" alt="Thumbnail 4">
        </div>
      </div>
    </div>
  </div>

  <!-- ============ BUY BOX ============ -->
  <div class="col-md-6 p1">
    <p class="text-uppercase small dark bold m0">Kitchen</p>
    <h1 class="black bold m-t--1-2">Ceramic Pour-Over Set</h1>
    <div class="row align-items-center m-t--1-2" style="align-items:center;">
        <div class="center display-6 warning">
          ★ ★ ★ ★ ★
        </div>
      <a href="#p1-reviews" class="dark small m-l-1">128 reviews</a>
    </div>
    <p class="black bold h3 m-t-1">$68</p>
    <p class="dark">Hand-glazed stoneware carafe and dripper, designed for a single-cup pour-over ritual.
      Pairs with any standard #2 filter. Dishwasher safe.</p>

    <p class="bold black m-t-2 small text-uppercase">Color</p>
    <div class="pills">
      <a href="#" class="pill pill-color-1">Natural</a>
      <a href="#" class="pill">Charcoal</a>
      <a href="#" class="pill">Sage</a>
    </div>

    <p class="bold black m-t-1 small text-uppercase">Quantity</p>
    <input type="number" value="1" min="1" class="form-control col-4 col-lg-2">

    <div class="m-t-2">
      <a href="#" class="button button-lg bg-black white">Add to Cart — $68</a>
      <a href="#" class="button button-lg color-1 outline-color-1 bg-white icon-box" aria-label="Add to wishlist">
        <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-s" style="vertical-align:middle;"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>
      </a>
    </div>

    <div class="row m-t-2">
      <div class="col-4 center">
        <i class="icon-box"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z"></path></svg></i>
        <p class="dark small m0">Free shipping</p>
      </div>
      <div class="col-4 center">
        <i class="icon-box"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"></path></svg></i>
        <p class="dark small m0">30-day returns</p>
      </div>
      <div class="col-4 center">
        <i class="icon-box"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"></path></svg></i>
        <p class="dark small m0">Secure checkout</p>
      </div>
    </div>

    <!-- ============ DETAIL ACCORDION ============ -->
    <div class="accordion m-t-2">
      <div class="accordion-block">
        <input type="radio" id="p1-acc1" name="p1-acc" checked="">
        <label for="p1-acc1" class="accordion-label p1">Materials &amp; Care</label>
        <div class="accordion-content">Hand-glazed stoneware. Dishwasher and microwave safe. Avoid extreme temperature changes.</div>
      </div>
      <div class="accordion-block">
        <input type="radio" id="p1-acc2" name="p1-acc">
        <label for="p1-acc2" class="accordion-label p1">Dimensions</label>
        <div class="accordion-content">Carafe: 5.5" H x 4" W. Dripper: 4" H x 4.5" W. Holds 500ml.</div>
      </div>
      <div class="accordion-block">
        <input type="radio" id="p1-acc3" name="p1-acc">
        <label for="p1-acc3" class="accordion-label p1">Shipping &amp; Returns</label>
        <div class="accordion-content">Ships within 2 business days. Free 30-day returns on unused items.</div>
      </div>
    </div>
  </div>
</div>

<!-- ============ REVIEWS ============ -->
<div class="row m-t-4" id="p1-reviews">
  <div class="col-12">
    <h2 class="black bold center">Customer Reviews</h2>
    <div class="row m-t-2">
      <div class="col-md-4 p1">
        <div class="center display-6 warning">
          ★ ★ ★ ★ ★
        </div>
        <p class="dark m-t--1-2">The nicest thing in my kitchen. It photographs even better in person.</p>
        <p class="bold black m0">— Priya N.</p>
      </div>
      <div class="col-md-4 p1">
        <div class="center display-6 warning">
          ★ ★ ★ ★ ★
        </div>
        <p class="dark m-t--1-2">Pours evenly and cleans up in seconds. Wish I'd bought two.</p>
        <p class="bold black m0">— Marcus T.</p>
      </div>
      <div class="col-md-4 p1">
        <div class="center display-6 warning">
          ★ ★ ★ ★ ★
        </div>
        <p class="dark m-t--1-2">Beautiful glaze, though the carafe runs slightly smaller than I expected.</p>
        <p class="bold black m0">— Elena R.</p>
      </div>
    </div>
  </div>
</div>

<!-- ============ RELATED PRODUCTS CAROUSEL ============ -->
<div class="row m-t-4">
  <div class="col-12">
    <h2 class="black bold center">You May Also Like</h2>
    <!-- Uses carousel-fixed (see cssvars-carousel-final.css). -->
    <div class="carousel-fixed h-50-vh m-t-2">
      <input type="radio" name="p1-related-slides" id="p1-related-1" checked="">
      <input type="radio" name="p1-related-slides" id="p1-related-2">
      <ul class="slides">
        <li>
          <div class="row justify-content-center">
            <div class="col-6 col-md-3 p1">
              <img src="https://picsum.photos/seed/aura-rel1/400/400" class="img-responsive rounded" alt="Stoneware Mug Set">
              <a href="#" class="bold black d-block m-t--1-2">Stoneware Mug Set</a>
              <p class="dark m0">$46</p>
            </div>
            <div class="col-6 col-md-3 p1">
              <img src="https://picsum.photos/seed/aura-rel2/400/400" class="img-responsive rounded" alt="Oak Cutting Board">
              <a href="#" class="bold black d-block m-t--1-2">Oak Cutting Board</a>
              <p class="dark m0">$38</p>
            </div>
          </div>
        </li>
        <li>
          <div class="row justify-content-center">
            <div class="col-6 col-md-3 p1">
              <img src="https://picsum.photos/seed/aura-rel3/400/400" class="img-responsive rounded" alt="Linen Tea Towels">
              <a href="#" class="bold black d-block m-t--1-2">Linen Tea Towels</a>
              <p class="dark m0">$24</p>
            </div>
            <div class="col-6 col-md-3 p1">
              <img src="https://picsum.photos/seed/aura-rel4/400/400" class="img-responsive rounded" alt="Glass Storage Jars">
              <a href="#" class="bold black d-block m-t--1-2">Glass Storage Jars</a>
              <p class="dark m0">$52</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="slidesNavigation ">
        <label for="p1-related-1"></label>
        <label for="p1-related-2"></label>
      </div>
    </div>
  </div>
</div>

</div>
`
            },
          {
                title: "E-commerce 2",
                display: "Single bento",
                description: "Description for E-commerce 1",
                code: `
<div class="container p-v-2">

<!-- ============ BENTO IMAGE GALLERY ============ -->
<div class="bento">
  <div class="bento-item bento-2x2" style="background-image:url('https://picsum.photos/seed/aura-prod2-1/800/800'); background-size:cover; background-position:center; padding:0;"></div>
  <div class="bento-item bento-1x1" style="background-image:url('https://picsum.photos/seed/aura-prod2-2/400/400'); background-size:cover; background-position:center; padding:0;"></div>
  <div class="bento-item bento-1x1" style="background-image:url('https://picsum.photos/seed/aura-prod2-3/400/400'); background-size:cover; background-position:center; padding:0;"></div>
  <div class="bento-item bento-2x1" style="background-image:url('https://picsum.photos/seed/aura-prod2-4/800/400'); background-size:cover; background-position:center; padding:0;"></div>
</div>

<div class="row m-t-2">
  <div class="col-md-7 p1">
    <!-- ============ TABS: DESCRIPTION / SPECS / REVIEWS ============ -->
    <div class="tabs">
      <input type="radio" id="p2tab1" name="p2tabs" checked="">
      <label for="p2tab1" class="p1">Description</label>
      <div class="tab">
        <p class="dark">Each piece in this handblown glassware set is shaped individually by our glassblowing
          partners, so no two glasses are exactly alike. Slight variations in bubble and tint are part of the
          craft, not a flaw.</p>
        <p class="dark">Set of 6 tumblers, dishwasher safe on the gentle cycle. Recommended hand wash for
          longevity.</p>
      </div>
      <input type="radio" id="p2tab2" name="p2tabs">
      <label for="p2tab2" class="p1">Specs</label>
      <div class="tab">
        <table class="table">
          <tbody>
            <tr><th>Material</th><td>Handblown recycled glass</td></tr>
            <tr><th>Set size</th><td>6 tumblers</td></tr>
            <tr><th>Capacity</th><td>350ml each</td></tr>
            <tr><th>Dimensions</th><td>4" H x 3" diameter</td></tr>
            <tr><th>Care</th><td>Dishwasher safe (gentle cycle)</td></tr>
          </tbody>
        </table>
      </div>
      <input type="radio" id="p2tab3" name="p2tabs">
      <label for="p2tab3" class="p1">Reviews (86)</label>
      <div class="tab">
        <div class="center display-6 warning">
          ★ ★ ★ ★ ★
        </div>
        <p class="dark">"Every glass is a little different, which is exactly why we bought them." — Nora S.</p>
        <p class="dark m-t-1">"Heavier and better made than I expected for the price." — Jamal K.</p>
      </div>
    </div>
  </div>

  <!-- ============ STICKY BUY BOX ============ -->
  <div class="col-md-5 p1">
    <div class="panel position-sticky" style="top:1rem;">
      <p class="text-uppercase small dark bold m0">Living</p>
      <h1 class="black bold m-t--1-2 h3">Handblown Glassware, Set of 6</h1>
      <p class="black bold h4 m-t--1-2">$84</p>
      <p class="dark small">In stock — ships within 2 business days.</p>
      <a href="#" class="button button-lg bg-black white w-100 m-t-1">Add to Cart</a>
      <a href="#" class="button button-lg outline-color-1 color-1 bg-white w-100">Buy Now</a>
      <hr>
      <div class="d-flex align-items-center m-b--1-2">
        <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-s"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg>
        <span class="dark small m-l-1">Free shipping over $75</span>
      </div>
      <div class="d-flex align-items-center m-b--1-2">
        <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-s"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg>
        <span class="dark small m-l-1">30-day free returns</span>
      </div>
      <div class="d-flex align-items-center">
        <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-s"><path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"></path></svg>
        <span class="dark small m-l-1">Secure checkout</span>
      </div>
    </div>
  </div>
</div>

</div>
`
            },
          {
                title: "E-commerce 3",
                display: "Image split",
                description: "Description for E-commerce 1",
                code: `
<div class="container p-v-1">
<div class="row">

  <div class="col-md-6 p1">
    <img src="https://picsum.photos/seed/aura-prod3-main/800/800" alt="Rattan Lounge Chair" class="img-responsive rounded shadow-3">
    <div class="row m-t-1">
      <div class="col-4 p-h--1-2"><img src="https://picsum.photos/seed/aura-prod3-a/300/300" class="img-responsive rounded" alt="Detail"></div>
      <div class="col-4 p-h--1-2"><img src="https://picsum.photos/seed/aura-prod3-b/300/300" class="img-responsive rounded" alt="Detail"></div>
      <div class="col-4 p-h--1-2"><img src="https://picsum.photos/seed/aura-prod3-c/300/300" class="img-responsive rounded" alt="Detail"></div>
    </div>
  </div>

  <div class="col-md-6 p1">
    <p class="text-uppercase small dark bold m0">Living — Seating</p>
    <h1 class="black bold m-t--1-2">Rattan Lounge Chair</h1>
    <p class="black bold h3 m-t--1-2"><del class="dark h5">$320</del> $260</p>
    <p class="dark">Weather-resistant natural rattan frame with a removable cotton cushion. Sized for
      balconies, sunrooms, and reading corners alike.</p>

    <p class="bold black m-t-2 small text-uppercase">Finish</p>
    <div class="pills">
      <a href="#" class="pill pill-color-1">Natural Rattan</a>
      <a href="#" class="pill">Charcoal Weave</a>
    </div>

    <div class="m-t-2">
      <a href="#" class="button button-lg bg-black white">Add to Cart — $260</a>
    </div>
  </div>
</div>

<!-- ============ REVIEWS AS TESTIMONIALS ============ -->
<div class="row m-t-4">
  <div class="col-12">
    <h2 class="black center bold">What Customers Say</h2>
    <hr class="width-short center">
    <div class="row m-t-2">
      <div class="col-md-4 p1">
        <p class="h3 color-1 m0">❝</p>
        <p class="dark">Sturdier than I expected and looks incredible on our balcony. Assembly took ten minutes.</p>
        <p class="bold black m-t-1">— Dana K.</p>
      </div>
      <div class="col-md-4 p1">
        <p class="h3 color-1 m0">❝</p>
        <p class="dark">The cushion cover is removable and washable, which sold me immediately.</p>
        <p class="bold black m-t-1">— Théo B.</p>
      </div>
      <div class="col-md-4 p1">
        <p class="h3 color-1 m0">❝</p>
        <p class="dark">Held up through a full summer outdoors with no fading. Very happy with this purchase.</p>
        <p class="bold black m-t-1">— Aiko M.</p>
      </div>
    </div>
  </div>
</div>

<!-- ============ PRODUCT FAQ ============ -->
<div class="row m-t-4">
  <div class="col-md-4">
    <h2 class="black bold">Product<br>Questions</h2>
  </div>
  <div class="col-md-8">
    <div class="accordion">
      <div class="accordion-block">
        <input type="radio" id="p3faq1" name="p3faq" checked="">
        <label for="p3faq1" class="accordion-label p1">Is this chair suitable for outdoor use?</label>
        <div class="accordion-content">Yes, the rattan frame is weather-resistant, though we recommend storing the cushion indoors during heavy rain.</div>
      </div>
      <div class="accordion-block">
        <input type="radio" id="p3faq2" name="p3faq">
        <label for="p3faq2" class="accordion-label p1">Does it require assembly?</label>
        <div class="accordion-content">Minimal assembly — attaching the legs, which takes about 10 minutes with the included tool.</div>
      </div>
      <div class="accordion-block">
        <input type="radio" id="p3faq3" name="p3faq">
        <label for="p3faq3" class="accordion-label p1">What is the weight capacity?</label>
        <div class="accordion-content">The chair is rated for up to 300 lbs.</div>
      </div>
    </div>
  </div>
</div>

</div>
`
            },
          {
                title: "E-commerce 4",
                display: "Single image",
                description: "Description for E-commerce 1",
                code: `
<div class="container p-v-4 w-50-vw-max">

  <!-- ============ CENTERED MINIMAL LAYOUT ============ -->
  <div class="center">
    <div class="col-12">
      <span class="badge bg-dark white text-uppercase">New</span>
    </div>
    <img src="https://picsum.photos/seed/aura-prod4-main/700/700" alt="Ceramic Table Lamp" class="img-responsive rounded m-t-1" style="max-width:26rem;">
  </div>

  <div class="center m-t-2">
    <p class="text-uppercase small dark bold m0">Lighting</p>
    <h1 class="black bold m-t--1-2">Ceramic Table Lamp</h1>
        <div class="center display-6 warning">
          ★ ★ ★ ★ ★
        </div>
    <p class="black bold h3 m-t--1-2">$88</p>
    <p class="dark">A soft, sculptural glow for bedside tables and reading nooks. Linen shade included.</p>
    <a href="#" class="button button-lg bg-black white m-t-1">Add to Cart</a>
  </div>

  <!-- ============ TRUST ICONS ROW ============ -->
  <div class="row justify-content-center m-t-2">
    <div class="col-4 center">
      <i class="icon-box"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z"></path></svg></i>
      <p class="dark small m0">Free shipping</p>
    </div>
    <div class="col-4 center">
      <i class="icon-box"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"></path></svg></i>
      <p class="dark small m0">30-day returns</p>
    </div>
    <div class="col-4 center">
      <i class="icon-box"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"></path></svg></i>
      <p class="dark small m0">Secure checkout</p>
    </div>
  </div>

  <!-- ============ VARIANT COMPARISON TABLE ============ -->
  <div class="m-t-4">
    <h2 class="black bold center">Compare Lamp Sizes</h2>
    <div class="container overflow-x-auto m-t-2">
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="w-50"></th>
            <th>Small</th>
            <th>Standard</th>
            <th>Large</th>
          </tr>
        </thead>
        <tbody>
          <tr><th>Height</th><td>10"</td><td>14"</td><td>18"</td></tr>
          <tr><th>Shade Diameter</th><td>7"</td><td>9"</td><td>11"</td></tr>
          <tr><th>Best For</th><td>Nightstand</td><td>Side table</td><td>Console table</td></tr>
          <tr><th>Price</th><td>$68</td><td>$88</td><td>$118</td></tr>
          <tr>
            <th></th>
            <td><a href="#" class="button bg-black">Select</a></td>
            <td><a href="#" class="button">Select</a></td>
            <td><a href="#" class="button bg-black">Select</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ============ CTA ============ -->
  <div class="center m-t-4 bg-light-grey p2 rounded">
    <h4 class="black bold m0">Not sure which size to pick?</h4>
    <p class="dark">Our team is happy to help you choose the right fit for your space.</p>
    <a href="#" class="button">Contact Us</a>
  </div>

</div>
`
            },
          {
                title: "E-commerce 5",
                display: "Single video",
                description: "Description for E-commerce 1",
                code: `
<div class="row container m-t-2">
  <div class="col-md-7 m0 p0 embed embed-wide-screen">
    <iframe class="embed-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="How our baskets are woven"></iframe>
  </div>
  <div class="col-md-5">
    <p class="text-uppercase dark m-l-2 m-t-4 small bold">Outdoor — Storage</p>
    <h1 class="m-t--1-2 bold black left m-l-2">Woven Rattan Basket</h1>
    <p class="left m-l-2 dark">Watch how each basket is hand-woven from sustainably harvested rattan, then
      sealed for outdoor durability.</p>
    <p class="black bold h4 left m-l-2">$46</p>
    <a href="#" class="button button-lg m-l-2">Add to Cart</a>
  </div>
</div>
<div class="row m-t-2 container">
    <div class="col-md-7 p1">
      <h3 class="black bold">Specifications</h3>
      <table class="table">
        <tbody>
          <tr><th>Material</th><td>Natural rattan, sealed finish</td></tr>
          <tr><th>Dimensions</th><td>16" W x 12" H</td></tr>
          <tr><th>Weight</th><td>2.4 lbs</td></tr>
          <tr><th>Weather Rating</th><td>Suitable for covered outdoor use</td></tr>
          <tr><th>Origin</th><td>Handwoven, Southeast Asia</td></tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-5 p1">
      <h3 class="black bold">Care Instructions</h3>
      <p class="dark">Wipe clean with a damp cloth. Avoid prolonged direct rain exposure. Store indoors during
        winter months in freezing climates to extend lifespan.</p>
      <div class="d-flex align-items-center m-t-1">
        <svg viewBox="0 0 24 24" class="icon-color-1-fill icon-m"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"></path></svg>
        <span class="dark small m-l-1">Sustainably sourced materials</span>
      </div>
    </div>
  </div>
`
            },
          {
                title: "E-commerce 6",
                display: "Promo parallax",
                description: "Description for E-commerce 1",
                code: `
<div class=" p0 parallax-img  h-100-vh centered-col" style="background-image: url('../img/shop/parallax.jpg'); height: 500px;">
        <div class="container m-v-4 p-v-4">
            <p class="center h2">
                UP TO <span class="bold display-1">40%</span> OFF
            </p>
            <p class="h2 center bold display-2 center">SPECIAL PROMO</p>
            <div class="m-v-2 center">
                <a href="#" class="button button-m d-inline font-weight-400 white text-uppercase p-h-2 p-v-05">purchase
                    now</a>
            </div>
        </div>
    </div>
`
            },
          {
                title: "E-commerce 7",
                display: "Slides",
                description: "Description for E-commerce 1",
                code: `
<div class="carousel-autoplay-linked slides-2">
    <input type="radio" name="link-slides" id="link-radio-1">
    <input type="radio" name="link-slides" id="link-radio-2">
    <ul class="slides h-100-vh">
      <li><div class="h-100-vh d-flex align-items-center justify-content-center bga-color-2" style="background-image: url('https://picsum.photos/seed/dress1/1600/900'); background-size: cover;">
          <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-6">
            <h1 class="bold white m0 text-uppercase display-1">dresses</h1>
            <div class="row align-items-center">
              <div class="col-2 p0">
                <span class="white m0 text-uppercase h5 p0">up to</span>
              </div>
              <div class="col-3 p0">
                <span class="white text-uppercase p0 font-weight-400 italic display-2 m0">30%</span>
              </div>
              <div class="col-7">
                <span class="white m0 text-uppercase h5 p0">off in the<br>collection</span>
              </div>
            </div>
            <div class="m-v-2">
              <a href="#" class="button button-m d-inline m-v-2 black font-weight-400 bg-white text-uppercase p-h-2 p-v--1-2">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div></li>
      <li><div class="h-100-vh d-flex align-items-center justify-content-center bga-success" style="background-image: url('https://picsum.photos/seed/dress2/1600/900'); background-size: cover;">
          <div class="container">
        <div class="row justify-content-start">
          <div class="col-md-6">
            <h1 class="bold white m0 text-uppercase display-1">dresses</h1>
            <div class="row align-items-center">
              <div class="col-2 p0">
                <span class="white m0 text-uppercase h5 p0">up to</span>
              </div>
              <div class="col-3 p0">
                <span class="white text-uppercase p0 font-weight-400 italic display-2 m0">30%</span>
              </div>
              <div class="col-7">
                <span class="white m0 text-uppercase h5 p0">off in the<br>collection</span>
              </div>
            </div>
            <div class="m-v-2">
              <a href="#" class="button button-m d-inline m-v-2 black font-weight-400 bg-white text-uppercase p-h-2 p-v--1-2">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div></li>
    </ul>
    <div class="slidesNavigation">
      <label for="link-radio-1"></label>
      <label for="link-radio-2"></label>
    </div>
  </div>
`
            },
          {
                title: "E-commerce 8",
                display: "List parallax",
                description: "Description for E-commerce 1",
                code: `
<div class="parallax-img p0 h-150 w-100" style="background-image: url('../img/shop/dress-1.jpg'); background-size: cover; height= 100%;">
        <div class="container">
            <div class="row p-v-4">
                <div class="col-md-4"></div>
                <div class="col-md-8 topmargin">
                    <p class="h4 text-uppercase topmargin">fashion dresses</p>
                    <div class="row">
                        <h2 class="bold text-uppercase p0 d-inline">fashion clothes</h2>
                        <a href="#" class="button button-m d-inline font-weight-400 white text-uppercase p-h-2 p-v-1 m-h-2">shop
                            now
                        </a>
                    </div>

                </div>
            </div>
            <div class="container row p-v-2">
                <div class="col-md-3">
                    <div class="hover-shadow">
                        <a href="#">
                            <img src="../img/shop/fashion-dress-2.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="p-v-1" style="background-color: #fff;">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Long White Knitted Dress</a>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <p class="h5 bold p0 m0 black m-v-05">$139</p>
                                <button class="d-inline m-h-1 outline-color-grey bg-white black text-uppercase">
                                    <svg viewBox="0 0 24 24" class="img-responsive icon-xs">
                                        <path fill="#000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z">
                                        </path>
                                    </svg>
                                    add to cart
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="hover-shadow">
                        <a href="#">
                            <img src="../img/shop/fashion-dress-1.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="p-v-1" style="background-color: #fff;">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Black Midi Dress</a>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <p class="h5 bold p0 m0 black m-v-05">$159</p>
                                <button class="d-inline m-h-1 outline-color-grey bg-white black text-uppercase">
                                    <svg viewBox="0 0 24 24" class="img-responsive icon-xs">
                                        <path fill="#000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z">
                                        </path>
                                    </svg>
                                    add to cart
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="hover-shadow">
                        <a href="#">
                            <img src="../img/shop/fashion-dress-3.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="p-v-1" style="background-color: #fff;">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Dress with a Bright Print</a>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <p class="h5 bold p0 m0 black m-v-05">$189</p>
                                <button class="d-inline m-h-1 outline-color-grey bg-white black text-uppercase">
                                    <svg viewBox="0 0 24 24" class="img-responsive icon-xs">
                                        <path fill="#000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z">
                                        </path>
                                    </svg>
                                    add to cart
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="hover-shadow">
                        <a href="#">
                            <img src="../img/shop/fashion-dress-4.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="p-v-1" style="background-color: #fff;">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Linen Dress with Stripes</a>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="star" class="icon-xs" role="img" viewBox="0 0 576 512">
                                        <path fill="#ccc" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                        </path>
                                    </svg>
                                </div>
                                <p class="h5 bold p0 m0 black m-v-05">$219</p>
                                <button class="d-inline m-h-1 outline-color-grey bg-white black text-uppercase">
                                    <svg viewBox="0 0 24 24" class="img-responsive icon-xs">
                                        <path fill="#000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z">
                                        </path>
                                    </svg>
                                    add to cart
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
            },
          {
                title: "E-commerce 9",
                display: "List clean",
                description: "Description for E-commerce 1",
                code: `
<div class="container row m-v-2">
                <div class="col-md-3">
                    <div>
                        <a href="#">
                            <img src="../img/shop/featured-sunglasses.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="m-v-1 bg-white">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Women's Sunglasses-White
                                </a>
                                <p class="h5 bold p0 m0 black m-v-05">$189</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <a href="#">
                            <img src="../img/shop/featured-sunglasses-2.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="m-v-1 bg-white">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Women's Sunglasses-Blue
                                </a>
                                <p class="h5 bold p0 m0 black m-v-05">$299</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <a href="#">
                            <img src="../img/shop/featured-sunglasses-3.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="m-v-1 bg-white">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Men's Sunglasses
                                </a>
                                <p class="h5 bold p0 m0 black m-v-05">$119</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <a href="#">
                            <img src="../img/shop/featured-sunglasses-1.jpg" alt="alttext" class="img-responsive">
                        </a>
                        <section class="m-v-1 bg-white">
                            <div class="center">
                                <a href="#" class="font-weight-400 dark">Women's Sunglasses-Black
                                </a>
                                <p class="h5 bold p0 m0 black m-v-05">$189</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
`
            },
          {
                title: "E-commerce 10",
                display: "Bento promo",
                description: "Description for E-commerce 1",
                code: `
<div class="container p-v-3">
    <div class="bento">
        <div class="bento-2x2 position-relative rounded-1-4 overflow-hidden bg-color-2">
            <img src="https://picsum.photos/seed/playbox-hero/900/900" class="w-100 h-100 img-responsive opacity07" alt="Lorem">
            <div class="position-absolute bottom-2 left-2">
                <h1 class="display-3 white bold m-b-1">Lorem Ipsum<br>Playtime!</h1>
                <a href="#" class="button bg-warning m-t-1">Shop Toys</a>
            </div>
        </div>
        <div class="bento-2x1 rounded-1-4 overflow-hidden position-relative bg-color-1">
            <img src="https://picsum.photos/seed/playbox-2/600/280" class="w-100 h-100 img-responsive opacity07" alt="Lorem">
            <span class="position-absolute top-1 left-1 white bold">Building Blocks</span>
        </div>
        <div class="bento-1x1 rounded-1-4 overflow-hidden position-relative bg-warning">
            <img src="https://picsum.photos/seed/playbox-3/280/280" class="w-100 h-100 img-responsive opacity07" alt="Lorem">
            <span class="position-absolute top-1 left-1 bold small">Board Games</span>
        </div>
        <div class="bento-1x1 rounded-1-4 overflow-hidden position-relative bg-info">
            <img src="https://picsum.photos/seed/playbox-4/280/280" class="w-100 h-100 img-responsive opacity07" alt="Lorem">
            <span class="position-absolute top-1 left-1 white bold small">Plush</span>
        </div>
    </div>
</div>
`
            },
          {
                title: "E-commerce 11",
                display: "By Category",
                description: "Description for E-commerce 1",
                code: `
<section class="container-fluid p-v-4">
  <h2 class="black center bold">Shop by Category</h2>
  <p class="dark center display-6 font-thin">Four collections, one point of view.</p>
  <div class="row m-t-2">
    <div class="col-md-3 p1">
      <a href="store-category-1.html" class="position-relative d-block">
        <img src="https://picsum.photos/seed/aura-cat-kitchen/500/600" alt="Kitchen" class="img-responsive rounded">
        <p class="white bold text-uppercase position-absolute" style="bottom:1.5rem;left:1.5rem;">Kitchen</p>
      </a>
    </div>
    <div class="col-md-3 p1">
      <a href="store-category-1.html" class="position-relative d-block">
        <img src="https://picsum.photos/seed/aura-cat-living/500/600" alt="Living" class="img-responsive rounded">
        <p class="white bold text-uppercase position-absolute" style="bottom:1.5rem;left:1.5rem;">Living</p>
      </a>
    </div>
    <div class="col-md-3 p1">
      <a href="store-category-1.html" class="position-relative d-block">
        <img src="https://picsum.photos/seed/aura-cat-bath/500/600" alt="Bath" class="img-responsive rounded">
        <p class="white bold text-uppercase position-absolute" style="bottom:1.5rem;left:1.5rem;">Bath</p>
      </a>
    </div>
    <div class="col-md-3 p1">
      <a href="store-category-1.html" class="position-relative d-block">
        <img src="https://picsum.photos/seed/aura-cat-outdoor/500/600" alt="Outdoor" class="img-responsive rounded">
        <p class="white bold text-uppercase position-absolute" style="bottom:1.5rem;left:1.5rem;">Outdoor</p>
      </a>
    </div>
  </div>
</section>
`
            },
          {
                title: "E-commerce 12",
                display: "Bestseller",
                description: "Description for E-commerce 1",
                code: `
<section class="container-fluid p-v-4" id="new-in">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h2 class="black bold m0">Bestsellers</h2>
      <p class="dark m0">The pieces everyone keeps coming back for.</p>
    </div>
    <div class="col-md-4 right">
      <a href="store-category-1.html" class="bold color-1">View all products →</a>
    </div>
  </div>
  <div class="row m-t-2">
    <div class="col-md-3 p1">
      <div class="card card-hover transition-shadow p-1-2">
        <div class="position-relative">
          <img src="https://picsum.photos/seed/aura-p1/500/500" alt="Ceramic Pour-Over Set" class="img-responsive rounded-t">
          <span class="badge bg-color-1 white position-absolute left-1 top-1">Bestseller</span>
        </div>
        <div class="card-body">
          <p class="dark small text-uppercase m0">Kitchen</p>
          <a href="store-product-1.html" class="bold black">Ceramic Pour-Over Set</a>
          <p class="black bold m-t--1-2">$68</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 p1">
      <div class="card card-hover transition-shadow p-1-2">
        <img src="https://picsum.photos/seed/aura-p2/500/500" alt="Linen Throw Blanket" class="img-responsive rounded-t">
        <div class="card-body">
          <p class="dark small text-uppercase m0">Living</p>
          <a href="store-product-1.html" class="bold black">Linen Throw Blanket</a>
          <p class="black bold m-t--1-2">$54</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 p1">
      <div class="card card-hover transition-shadow p-1-2">
        <div class="position-relative">
          <img src="https://picsum.photos/seed/aura-p3/500/500" alt="Oak Bath Caddy" class="img-responsive rounded-t">
          <span class="badge bg-color-2 white position-absolute left-1 top-1">New</span>
        </div>
        <div class="card-body">
          <p class="dark small text-uppercase m0">Bath</p>
          <a href="store-product-1.html" class="bold black">Oak Bath Caddy</a>
          <p class="black bold m-t--1-2">$42</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 p1">
      <div class="card card-hover transition-shadow p-1-2">
        <img src="https://picsum.photos/seed/aura-p4/500/500" alt="Rattan Lounge Chair" class="img-responsive rounded-t">
        <div class="card-body">
          <p class="dark small text-uppercase m0">Outdoor</p>
          <a href="store-product-1.html" class="bold black">Rattan Lounge Chair</a>
          <p class="black bold m-t--1-2"><del class="dark">$320</del> $260</p>
        </div>
      </div>
    </div>
  </div>
</section>
`
            },
          {
                title: "E-commerce 13",
                display: "Category boxed",
                description: "Description for E-commerce 1",
                code: `
<div class="row">

  <!-- ============ STICKY CATEGORY TREE ============ -->
  <aside class="col-md-3 p1">
    <div class="panel position-sticky top-1">
      <p class="bold black text-uppercase small m-b-1">Shop By</p>
      <ul class="menu">
        <li class="menu-item"><a href="store-category-1.html">Kitchen</a></li>
        <li class="menu-item"><a href="store-category-3.html">Living</a></li>
        <li class="menu-item"><a href="#">Bath</a></li>
        <li class="menu-item active"><a href="store-category-5.html">Outdoor</a></li>
      </ul>
      <p class="dark small m-t-1 m-b--1-2 bold">Outdoor subcategories</p>
      <ul class="no-indent-ul">
        <li class="m-b--1-2"><a href="#" class="dark">Seating</a></li>
        <li class="m-b--1-2"><a href="#" class="dark">Lanterns</a></li>
        <li class="m-b--1-2"><a href="#" class="dark">Planters</a></li>
        <li class="m-b--1-2"><a href="#" class="dark">Textiles</a></li>
      </ul>
    </div>
  </aside>

  <!-- ============ PRODUCT LIST VIEW ============ -->
  <div class="col-md-9 p1">
    <div class="row align-items-center m-b-2">
      <div class="col-md-6">
        <h1 class="black bold m0">Outdoor</h1>
        <p class="dark small m0">12 products</p>
      </div>
      <div class="col-md-6 right">
        <a href="#" class="icon-box" aria-label="Grid view"><svg viewBox="0 0 24 24" class="icon-color-1-fill icon-s"><path d="M3,3H11V11H3V3M13,3H21V11H13V3M3,13H11V21H3V13M13,13H21V21H13V13Z"></path></svg></a>
        <a href="#" class="icon-box" aria-label="List view"><svg viewBox="0 0 24 24" class="icon-black-fill icon-s"><path d="M3,4H21V6H3V4M3,11H21V13H3V11M3,18H21V20H3V18Z"></path></svg></a>
      </div>
    </div>

    <!-- Row 1 -->
    <div class="row align-items-center p1 border-b border-solid border-light-grey gap">
      <div class="col-4 col-md-3">
        <img src="https://picsum.photos/seed/aura-cat5-1/300/300" alt="Rattan Lounge Chair" class="img-responsive rounded">
      </div>
      <div class="col-8 col-md-6">
        <a href="store-product-5.html" class="bold black h6">Rattan Lounge Chair</a>
        <p class="dark small m-t--1-2">Weather-resistant rattan with removable cushion. Available in three finishes.</p>
        <div class="rating" style="justify-content:flex-start; font-size:1rem;">
          <input type="radio" id="c5r1-5" name="c5r1" checked=""><label for="c5r1-5"></label>
          <input type="radio" id="c5r1-4" name="c5r1"><label for="c5r1-4"></label>
          <input type="radio" id="c5r1-3" name="c5r1"><label for="c5r1-3"></label>
          <input type="radio" id="c5r1-2" name="c5r1"><label for="c5r1-2"></label>
          <input type="radio" id="c5r1-1" name="c5r1"><label for="c5r1-1"></label>
        </div>
      </div>
      <div class="col-md-3 right">
        <p class="black bold h6"><del class="dark">$320</del> $260</p>
        <a href="store-product-5.html" class="button">View</a>
      </div>
    </div>

    <!-- Row 2 (alternating shade) -->
    <div class="row align-items-center p1 border-b border-solid border-light-grey gap">
      <div class="col-4 col-md-3">
        <img src="https://picsum.photos/seed/aura-cat5-2/300/300" alt="Iron Outdoor Lantern" class="img-responsive rounded">
      </div>
      <div class="col-8 col-md-6">
        <a href="store-product-5.html" class="bold black h6">Iron Outdoor Lantern</a>
        <p class="dark small m-t--1-2">Hand-forged iron, holds a standard pillar candle. Rustproof coating.</p>
        <div class="rating" style="justify-content:flex-start; font-size:1rem;">
          <input type="radio" id="c5r2-5" name="c5r2" checked=""><label for="c5r2-5"></label>
          <input type="radio" id="c5r2-4" name="c5r2"><label for="c5r2-4"></label>
          <input type="radio" id="c5r2-3" name="c5r2"><label for="c5r2-3"></label>
          <input type="radio" id="c5r2-2" name="c5r2"><label for="c5r2-2"></label>
          <input type="radio" id="c5r2-1" name="c5r2"><label for="c5r2-1"></label>
        </div>
      </div>
      <div class="col-md-3 right">
        <p class="black bold h6">$62</p>
        <a href="store-product-5.html" class="button">View</a>
      </div>
    </div>

    <!-- Row 3 -->
    <div class="row align-items-center p1 border-b border-solid border-light-grey gap">
      <div class="col-4 col-md-3">
        <img src="https://picsum.photos/seed/aura-cat5-3/300/300" alt="Terracotta Planter" class="img-responsive rounded">
      </div>
      <div class="col-8 col-md-6">
        <a href="store-product-5.html" class="bold black h6">Terracotta Planter, Large</a>
        <p class="dark small m-t--1-2">Frost-resistant terracotta with drainage hole. 16" diameter.</p>
        <div class="rating" style="justify-content:flex-start; font-size:1rem;">
          <input type="radio" id="c5r3-5" name="c5r3"><label for="c5r3-5"></label>
          <input type="radio" id="c5r3-4" name="c5r3" checked=""><label for="c5r3-4"></label>
          <input type="radio" id="c5r3-3" name="c5r3"><label for="c5r3-3"></label>
          <input type="radio" id="c5r3-2" name="c5r3"><label for="c5r3-2"></label>
          <input type="radio" id="c5r3-1" name="c5r3"><label for="c5r3-1"></label>
        </div>
      </div>
      <div class="col-md-3 right">
        <p class="black bold h6">$29</p>
        <a href="store-product-5.html" class="button">View</a>
      </div>
    </div>

    <!-- Row 4 (alternating shade) -->
    <div class="row align-items-center p1 bg-light-grey gap">
      <div class="col-4 col-md-3">
        <img src="https://picsum.photos/seed/aura-cat5-4/300/300" alt="Outdoor Cushion Set" class="img-responsive rounded">
      </div>
      <div class="col-8 col-md-6">
        <a href="store-product-5.html" class="bold black h6">Outdoor Cushion Set of 2</a>
        <p class="dark small m-t--1-2">Fade-resistant fabric, quick-dry foam fill. Fits most standard lounge chairs.</p>
        <div class="rating" style="justify-content:flex-start; font-size:1rem;">
          <input type="radio" id="c5r4-5" name="c5r4" checked=""><label for="c5r4-5"></label>
          <input type="radio" id="c5r4-4" name="c5r4"><label for="c5r4-4"></label>
          <input type="radio" id="c5r4-3" name="c5r4"><label for="c5r4-3"></label>
          <input type="radio" id="c5r4-2" name="c5r4"><label for="c5r4-2"></label>
          <input type="radio" id="c5r4-1" name="c5r4"><label for="c5r4-1"></label>
        </div>
      </div>
      <div class="col-md-3 right">
        <p class="black bold h6">$48</p>
        <a href="store-product-5.html" class="button">View</a>
      </div>
    </div>

    <nav aria-label="Product pages" class="row justify-content-center m-t-2">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">«</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">»</a></li>
      </ul>
    </nav>
  </div>
</div>
`
            },
          {
                title: "E-commerce 14",
                display: "Chips filter",
                description: "Description for E-commerce 1",
                code: `
<div class="container p-v-2">
  <!-- ============ TOP FILTER BAR ============ -->
  <div class="row align-items-center m-b-1">
    <div class="col-md-8">
      <div class="pills">
        <a href="#" class="pill pill-color-1">All</a>
        <a href="#" class="pill">Kitchen</a>
        <a href="#" class="pill">Living</a>
        <a href="#" class="pill">Bath</a>
        <a href="#" class="pill">Lighting</a>
        <a href="#" class="pill">Outdoor</a>
      </div>
    </div>
    <div class="col-md-4 right">
      <div class="dropdown">
        <input type="checkbox" id="c2-sort-state" class="dropdown-state">
        <label for="c2-sort-state" class="dropdown-toggle button bg-white color-1 outline-color-1">Sort: Newest</label>
        <ul class="dropdown-menu menu" style="right:0; left:auto;">
          <li class="menu-item"><a href="#">Newest</a></li>
          <li class="menu-item"><a href="#">Price: Low to High</a></li>
          <li class="menu-item"><a href="#">Price: High to Low</a></li>
          <li class="menu-item"><a href="#">Top Rated</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Active filter chips -->
  <div class="m-b-2">
    <span class="chip chip-color-1">Kitchen <button class="chip-close" aria-label="Remove">×</button></span>
    <span class="chip chip-color-1">Under $50 <button class="chip-close" aria-label="Remove">×</button></span>
    <a href="store-category-2.html" class="small dark m-l-1">Clear all</a>
  </div>

  <!-- ============ PRODUCT GRID (grid-cols) ============ -->
  <div class="d-grid grid-cols-3" style="gap:var(--default-gap);">
    <div class="card card-hover transition-shadow">
      <div class="position-relative">
        <img src="https://picsum.photos/seed/aura-cat2-1/500/500" alt="Ceramic Vase" class="img-responsive rounded-t">
        <span class="badge bga-color-1 white position-absolute left-1" style="top:0.5rem;">-20%</span>
      </div>
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Handthrown Ceramic Vase</a>
        <p class="black bold m0"><del class="dark">$58</del> $46</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-2/500/500" alt="Wool Rug" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Handwoven Wool Rug</a>
        <p class="black bold m0">$210</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-3/500/500" alt="Brass Candle Holders" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Brass Candle Holders</a>
        <p class="black bold m0">$44</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-4/500/500" alt="Wood Serving Tray" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Walnut Serving Tray</a>
        <p class="black bold m0">$36</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <div class="position-relative">
        <img src="https://picsum.photos/seed/aura-cat2-5/500/500" alt="Linen Cushion" class="img-responsive rounded-t">
        <span class="badge bga-color-2 white position-absolute left-1" style="top:0.5rem;">New</span>
      </div>
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Linen Floor Cushion</a>
        <p class="black bold m0">$74</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-6/500/500" alt="Rattan Basket" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Woven Rattan Basket</a>
        <p class="black bold m0">$46</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-7/500/500" alt="Glass Pendant Lamp" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Glass Pendant Lamp</a>
        <p class="black bold m0">$119</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-8/500/500" alt="Stoneware Bowl Set" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Stoneware Bowl Set</a>
        <p class="black bold m0">$58</p>
      </div>
    </div>
    <div class="card card-hover transition-shadow">
      <img src="https://picsum.photos/seed/aura-cat2-9/500/500" alt="Outdoor Lantern" class="img-responsive rounded-t">
      <div class="card-body">
        <a href="store-product-2.html" class="bold black">Iron Outdoor Lantern</a>
        <p class="black bold m0">$62</p>
      </div>
    </div>
  </div>

  <nav aria-label="Product pages" class="row justify-content-center m-t-2">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">«</a></li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">»</a></li>
    </ul>
  </nav>
</div>
`
            },
          {
                title: "E-commerce 15",
                display: "Filter side",
                description: "Description for E-commerce 1",
                code: `
<div class="row">

  <!-- ============ SIDEBAR FILTERS ============ -->
  <aside class="col-md-3 p1">
    <div class="panel">
      <p class="bold black text-uppercase small m-b-1">Category</p>
      <ul class="menu">
        <li class="menu-item active"><a href="#">Kitchen <span class="menu-item-badge">24</span></a></li>
        <li class="menu-item"><a href="#">Living <span class="menu-item-badge">31</span></a></li>
        <li class="menu-item"><a href="#">Bath <span class="menu-item-badge">18</span></a></li>
        <li class="menu-item"><a href="#">Outdoor <span class="menu-item-badge">12</span></a></li>
      </ul>

      <p class="bold black text-uppercase small m-t-2 m-b-1">Price</p>
      <label><input type="checkbox" checked=""> Under $25</label><br>
      <label><input type="checkbox"> $25 – $50</label><br>
      <label><input type="checkbox"> $50 – $100</label><br>
      <label><input type="checkbox"> $100+</label>

      <p class="bold black text-uppercase small m-t-2 m-b-1">Material</p>
      <label><input type="checkbox"> Ceramic</label><br>
      <label><input type="checkbox"> Oak / Wood</label><br>
      <label><input type="checkbox"> Linen</label><br>
      <label><input type="checkbox"> Glass</label>

      <p class="bold black text-uppercase small m-t-2 m-b-1">Rating</p>
      <div class="rating" style="justify-content:flex-start; font-size:1rem;">
        <input type="radio" id="c1-r5" name="c1-rate"><label for="c1-r5"></label>
        <input type="radio" id="c1-r4" name="c1-rate"><label for="c1-r4"></label>
        <input type="radio" id="c1-r3" name="c1-rate"><label for="c1-r3"></label>
        <input type="radio" id="c1-r2" name="c1-rate"><label for="c1-r2"></label>
        <input type="radio" id="c1-r1" name="c1-rate"><label for="c1-r1"></label>
      </div>

      <a href="store-category-1.html" class="button w-100 m-t-2">Apply Filters</a>
    </div>
  </aside>

  <!-- ============ PRODUCT GRID ============ -->
  <div class="col-md-9 p1">
    <div class="row align-items-center m-b-1">
      <div class="col-md-6">
        <h1 class="black bold m0">Kitchen</h1>
        <p class="dark small m0">24 products</p>
      </div>
      <div class="col-md-6 right">
        <div class="dropdown">
          <input type="checkbox" id="c1-sort-state" class="dropdown-state">
          <label for="c1-sort-state" class="dropdown-toggle button bg-white color-1 outline-color-1">Sort: Featured</label>
          <ul class="dropdown-menu menu" style="right:0; left:auto;">
            <li class="menu-item"><a href="#">Featured</a></li>
            <li class="menu-item"><a href="#">Price: Low to High</a></li>
            <li class="menu-item"><a href="#">Price: High to Low</a></li>
            <li class="menu-item"><a href="#">Newest</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 col-md-4 p1">
        <div class="card card-hover transition-shadow">
          <div class="position-relative">
            <img src="https://picsum.photos/seed/aura-cat1-1/450/450" alt="Ceramic Pour-Over Set" class="img-responsive rounded-t">
            <span class="badge bg-color-1 white position-absolute left-1" style="top:0.5rem;">Bestseller</span>
          </div>
          <div class="card-body">
            <a href="store-product-1.html" class="bold black">Ceramic Pour-Over Set</a>
            <p class="black bold m0">$68</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 p1">
        <div class="card card-hover transition-shadow">
          <img src="https://picsum.photos/seed/aura-cat1-2/450/450" alt="Stoneware Mug Set" class="img-responsive rounded-t">
          <div class="card-body">
            <a href="store-product-1.html" class="bold black">Stoneware Mug Set of 4</a>
            <p class="black bold m0">$46</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 p1">
        <div class="card card-hover transition-shadow">
          <div class="position-relative">
            <img src="https://picsum.photos/seed/aura-cat1-3/450/450" alt="Oak Cutting Board" class="img-responsive rounded-t">
            <span class="badge bga-color-2 white position-absolute left-1" style="top:0.5rem;">New</span>
          </div>
          <div class="card-body">
            <a href="store-product-1.html" class="bold black">Oak Cutting Board</a>
            <p class="black bold m0">$38</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 p1">
        <div class="card card-hover transition-shadow">
          <img src="https://picsum.photos/seed/aura-cat1-4/450/450" alt="Glass Storage Jars" class="img-responsive rounded-t">
          <div class="card-body">
            <a href="store-product-1.html" class="bold black">Glass Storage Jars (Set of 3)</a>
            <p class="black bold m0">$52</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 p1">
        <div class="card card-hover transition-shadow">
          <img src="https://picsum.photos/seed/aura-cat1-5/450/450" alt="Linen Tea Towels" class="img-responsive rounded-t">
          <div class="card-body">
            <a href="store-product-1.html" class="bold black">Linen Tea Towels, Set of 2</a>
            <p class="black bold m0">$24</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-4 p1">
        <div class="card card-hover transition-shadow">
          <img src="https://picsum.photos/seed/aura-cat1-6/450/450" alt="Cast Iron Skillet" class="img-responsive rounded-t">
          <div class="card-body">
            <a href="store-product-1.html" class="bold black">Cast Iron Skillet</a>
            <p class="black bold m0"><del class="dark">$95</del> $78</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ PAGINATION ============ -->
    <nav aria-label="Product pages" class="row justify-content-center m-t-2">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">«</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">»</a></li>
      </ul>
    </nav>
  </div>
</div>
`
            },
          {
                title: "E-commerce 16",
                display: "Slides promo",
                description: "Description for E-commerce 1",
                code: `
<section class="container-fluid bg-light-grey p-v-4">
  <div class="container">
    <h2 class="black bold center">This Week's Highlights</h2>
  </div>
  <div class="carousel-autoplay-linked slides-3 p0 h-50-vh m-t-2">
    <input type="radio" name="h2c-slides" id="h2c-radio-1">
    <input type="radio" name="h2c-slides" id="h2c-radio-2">
    <input type="radio" name="h2c-slides" id="h2c-radio-3">
    <ul class="slides" style="height:100%;">
      <li>
        <div class="h-100 d-flex align-items-center justify-content-center" style="background-image:url('https://picsum.photos/seed/aura2-slide1/1400/700'); background-size:cover;">
          <div class="col-9 col-lg-4 bg-white center p2 rounded">
            <h3 class="black m0">Handblown Glassware</h3>
            <p class="dark m-v--1-2">Starting at $28</p>
            <a href="store-product-2.html" class="button">Shop Now</a>
          </div>
        </div>
      </li>
      <li>
        <div class="h-100 d-flex align-items-center justify-content-center" style="background-image:url('https://picsum.photos/seed/aura2-slide2/1400/700'); background-size:cover;">
          <div class="col-9 col-lg-4 bg-white center p2 rounded">
            <h3 class="black m0">Woven Floor Baskets</h3>
            <p class="dark m-v--1-2">Starting at $46</p>
            <a href="store-product-2.html" class="button">Shop Now</a>
          </div>
        </div>
      </li>
      <li>
        <div class="h-100 d-flex align-items-center justify-content-center" style="background-image:url('https://picsum.photos/seed/aura2-slide3/1400/700'); background-size:cover;">
          <div class="col-9 col-lg-4 bg-white center p2 rounded">
            <h3 class="black m0">Stoneware Dinner Sets</h3>
            <p class="dark m-v--1-2">Starting at $84</p>
            <a href="store-product-2.html" class="button">Shop Now</a>
          </div>
        </div>
      </li>
    </ul>
    <div class="slidesNavigation m-v-1">
      <label for="h2c-radio-1"></label>
      <label for="h2c-radio-2"></label>
      <label for="h2c-radio-3"></label>
    </div>
  </div>
</section>
                `
          },
        ]
    },
    {
        name: "Portfolio",
        items: [
            {
                title: "Portfolio 1",
                display: "4cols connected",
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
                display: "3cols container",
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
                display: "3cols wide",
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
            {
                title: "Portfolio 4",
                display: "Different sizes",
                description: "Description for Portfolio 1",
                code: `
                <section id="work" class="container p-v-2">
  <p class="color-1 bold text-uppercase letter-spacing-1 small center m-b-1">Selected work</p>
  <div class="row m-t-2 gap-2">
    <div class="col-md-4 p-1-2">
      <img src="https://picsum.photos/seed/sl-work-1/600/750" class="img-responsive rounded" alt="Lorem">
      <p class="black bold m-t--1-2 m0">Ipsum Coffee — Identity</p>
      <p class="dark small m0">Branding</p>
    </div>
    <div class="col-md-4 p-1-2">
      <img src="https://picsum.photos/seed/sl-work-2/600/750" class="img-responsive rounded" alt="Lorem">
      <p class="black bold m-t--1-2 m0">Dolorem App — UI/UX</p>
      <p class="dark small m0">Product Design</p>
    </div>
    <div class="col-md-4 p-1-2">
      <img src="https://picsum.photos/seed/sl-work-3/600/750" class="img-responsive rounded" alt="Lorem">
      <p class="black bold m-t--1-2 m0">Consectetur — Packaging</p>
      <p class="dark small m0">Packaging</p>
    </div>
  </div>
  <div class="row m-t-2 gap-2">
    <div class="col-md-6 p-1-2">
      <img src="https://picsum.photos/seed/sl-work-4/800/560" class="img-responsive rounded" alt="Lorem">
      <p class="black bold m-t--1-2 m0">Faro Studio — Web</p>
      <p class="dark small m0">Web Design</p>
    </div>
    <div class="col-md-6 p-1-2">
      <img src="https://picsum.photos/seed/sl-work-5/800/560" class="img-responsive rounded" alt="Lorem">
      <p class="black bold m-t--1-2 m0">Nordica — Editorial</p>
      <p class="dark small m0">Print &amp; Editorial</p>
    </div>
  </div>
</section>
`
            },
            {
                title: "Portfolio 5",
                display: "Hover Text",
                description: "Description for Portfolio 1",
                code: `
<section class="section bg-color-1 m-t-6">
            <h1 class="center display-2 bold white p-t-2">My Works</h1>
            <p class="m-t-05 grey center font-weight-400 h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div class="row m-t-2">
        <div class="col-md-4 p0">
                    <div class="tooltip position-relative w-100 d-block">
                        <img src="../img/blocks/work-1.jpg" class="img-responsive brightness-33-hover">
                        <div class="tooltip-body rounded-0 w-100 h-100 bottom-0 left-0 bg-surface-overlay white d-flex align-items-end p1 justify-content-center transition-slow">
                        <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
        </div>
        <div class="col-md-4 p0">
            <div class="tooltip position-relative w-100 d-block">
                <img src="../img/blocks/work-2.jpg" class="img-responsive brightness-33-hover">
                <div class="tooltip-body rounded-0 w-100 h-100 bottom-0 left-0 bg-surface-overlay white d-flex align-items-end p1 justify-content-center transition-slow">
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 p0">
            <div class="tooltip position-relative w-100 d-block">
                <img src="../img/blocks/work-3.jpg" class="img-responsive brightness-33-hover">
                <div class="tooltip-body rounded-0 w-100 h-100 bottom-0 left-0 bg-surface-overlay white d-flex align-items-end p1 justify-content-center transition-slow">
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 p0">
            <div class="tooltip position-relative w-100 d-block">
                <img src="../img/blocks/work-4.jpg" class="img-responsive brightness-33-hover">
                <div class="tooltip-body rounded-0 w-100 h-100 bottom-0 left-0 bg-surface-overlay white d-flex align-items-end p1 justify-content-center transition-slow">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>

            <div class="col-md-4 p0">
                <div class="tooltip position-relative w-100 d-block">
                    <img src="../img/blocks/work-5.jpg" class="img-responsive brightness-33-hover">
                    <div class="tooltip-body rounded-0 w-100 h-100 bottom-0 left-0 bg-surface-overlay white d-flex align-items-end p1 justify-content-center transition-slow">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p0">
                <div class="tooltip position-relative w-100 d-block">
                    <img src="../img/blocks/work-6.jpg" class="img-responsive brightness-33-hover">
                    <div class="tooltip-body rounded-0 w-100 h-100 bottom-0 left-0 bg-surface-overlay white d-flex align-items-end p1 justify-content-center transition-slow">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>   
</section>
                `
            },
            {
                title: "Portfolio 6",
                display: "Tabs",
                description: "Description for Portfolio 1",
                code: `
<section class="p-v-4 center">
  <div class="container">
    <h1 class="h1 bold black">Our Portfolio</h1>
    <p class="lead dark m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
  </div>
</section>
<section id="work" class="p-v-2">
  <div class="container">
    <div class="tabs tabs-underline center">
      <input type="radio" name="p3-tabs" id="p3-tab-all" checked="">
      <label for="p3-tab-all">All Work</label>
      <div class="tab">
        <div class="row">
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-aurora/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Product</span>
          <p class="bold black h6 m-t--1-2">Aurora Fintech App</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-basecamp/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Branding</span>
          <p class="bold black h6 m-t--1-2">Basecamp Outfitters</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-willow/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Web</span>
          <p class="bold black h6 m-t--1-2">Willowbrook Realty</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-kettle/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Branding</span>
          <p class="bold black h6 m-t--1-2">Kettle &amp; Co. Roastery</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-pulse/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Product</span>
          <p class="bold black h6 m-t--1-2">Pulsewave Analytics</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-granite/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Web</span>
          <p class="bold black h6 m-t--1-2">Granite Peak Outdoors</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
        </div>
      </div>

      <input type="radio" name="p3-tabs" id="p3-tab-branding">
      <label for="p3-tab-branding">Branding</label>
      <div class="tab">
        <div class="row">
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-basecamp/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Branding</span>
          <p class="bold black h6 m-t--1-2">Basecamp Outfitters</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-kettle/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Branding</span>
          <p class="bold black h6 m-t--1-2">Kettle &amp; Co. Roastery</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
        </div>
      </div>

      <input type="radio" name="p3-tabs" id="p3-tab-web">
      <label for="p3-tab-web">Web</label>
      <div class="tab">
        <div class="row">
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-willow/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Web</span>
          <p class="bold black h6 m-t--1-2">Willowbrook Realty</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-granite/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Web</span>
          <p class="bold black h6 m-t--1-2">Granite Peak Outdoors</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
        </div>
      </div>

      <input type="radio" name="p3-tabs" id="p3-tab-product">
      <label for="p3-tab-product">Product</label>
      <div class="tab">
        <div class="row">
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-aurora/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Product</span>
          <p class="bold black h6 m-t--1-2">Aurora Fintech App</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
        </div>
      </div>
    </div>
          
    <div class="col-4 p1">
      <div class="card rounded overflow-hidden card-hover transition p0">
        <div class="aspect-4-3" style="background-image:url('https://picsum.photos/seed/iron-pulse/500/380');background-size:cover;background-position:center;"></div>
        <div class="p1">
          <span class="badge bga-color-1 color-1 bold m-b--1-2">Product</span>
          <p class="bold black h6 m-t--1-2">Pulsewave Analytics</p>
          <p class="dark small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.</p>
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
                title: "Portfolio 7",
                display: "Grid",
                description: "Description for Portfolio 1",
                code: `
<section class="p-v-4 center">
  <div class="container">
    <span class="chip chip-color-1 bold">Selected Work</span>
    <h1 class="h1 bold black m-t-1">Stories, brands, and products we've helped build</h1>
    <p class="lead dark m-t-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet.</p>
    <div class="m-t-2">
      <span class="chip">All</span>
      <span class="chip">Branding</span>
      <span class="chip">Web</span>
      <span class="chip">Product</span>
      <span class="chip">Campaigns</span>
    </div>
  </div>
</section>
<section id="work" class="p-v-2">
  <div class="container">
    <div class="d-grid grid-cols-4 gap-2">
      
    <a href="#" class="col-span-2 position-relative overflow-hidden rounded-1-4 card-hover transition" style="display:block;height:24rem;background-image:url('https://picsum.photos/seed/hal-solstice/900/700');background-size:cover;background-position:center;">
      <div class="position-absolute" style="inset:0;background:linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 60%);"></div>
      <div class="position-absolute p1" style="bottom:0;left:0;">
        <span class="badge bg-color-1 white bold">Branding</span>
        <p class="white bold h5 m-b-0">Solstice Rebrand</p>
      </div>
    </a>
      
    <a href="#" class="col-span-1 position-relative overflow-hidden rounded-1-4 card-hover transition" style="display:block;height:24rem;background-image:url('https://picsum.photos/seed/hal-fernweg/500/700');background-size:cover;background-position:center;">
      <div class="position-absolute" style="inset:0;background:linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 60%);"></div>
      <div class="position-absolute p1" style="bottom:0;left:0;">
        <span class="badge bg-color-1 white bold m-b--1-2">Product</span>
        <p class="white bold h5 m-b-0">Fernweg App</p>
      </div>
    </a>
      
    <a href="#" class="col-span-1 position-relative overflow-hidden rounded-1-4 card-hover transition" style="display:block;height:24rem;background-image:url('https://picsum.photos/seed/hal-nimbus/500/700');background-size:cover;background-position:center;">
      <div class="position-absolute" style="inset:0;background:linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 60%);"></div>
      <div class="position-absolute p1" style="bottom:0;left:0;">
        <span class="badge bg-color-1 white bold m-b--1-2">Web</span>
        <p class="white bold h5 m-b-0">Nimbus Web</p>
      </div>
    </a>
      
    <a href="#" class="col-span-1 position-relative overflow-hidden rounded-1-4 card-hover transition" style="display:block;height:18rem;background-image:url('https://picsum.photos/seed/hal-rowan/500/500');background-size:cover;background-position:center;">
      <div class="position-absolute" style="inset:0;background:linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 60%);"></div>
      <div class="position-absolute p1" style="bottom:0;left:0;">
        <span class="badge bg-color-1 white bold m-b--1-2">Branding</span>
        <p class="white bold h5 m-b-0">Rowan Coffee</p>
      </div>
    </a>
      
    <a href="#" class="col-span-1 position-relative overflow-hidden rounded-1-4 card-hover transition" style="display:block;height:18rem;background-image:url('https://picsum.photos/seed/hal-vantage/500/500');background-size:cover;background-position:center;">
      <div class="position-absolute" style="inset:0;background:linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 60%);"></div>
      <div class="position-absolute p1" style="bottom:0;left:0;">
        <span class="badge bg-color-1 white bold m-b--1-2">Campaign</span>
        <p class="white bold h5 m-b-0">Vantage Launch</p>
      </div>
    </a>
      
    <a href="#" class="col-span-2 position-relative overflow-hidden rounded-1-4 card-hover transition" style="display:block;height:18rem;background-image:url('https://picsum.photos/seed/hal-meridian/900/500');background-size:cover;background-position:center;">
      <div class="position-absolute" style="inset:0;background:linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0) 60%);"></div>
      <div class="position-absolute p1" style="bottom:0;left:0;">
        <span class="badge bg-color-1 white bold m-b--1-2">Product</span>
        <p class="white bold h5 m-b-0">Meridian Dashboard</p>
      </div>
    </a>
    </div>
  </div>
</section>
                `
            },
            {
                title: "Portfolio 8",
                display: "Bento",
                description: "Description for Portfolio 1",
                code: `
<section id="work" class="container p-v-2">
        <div class="row justify-content-between align-items-end m-b-3">
            <h2 class="display-4 m-b-0">Selected Work</h2>
            <a href="#" class="btn-link bold">Full portfolio <svg viewBox="0 0 24 24" class="icon-xs icon-color-1-fill"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></a>
        </div>
        <div class="bento">
            <div class="bento-item bento-3x2 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj0/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Cliffside Residence</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj1/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Kade Gallery</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj2/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Linden Loft</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj3/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Studio Nave</p>
                </div>
            </div>
            <div class="bento-item bento-2x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj4/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Harbor Pavilion</p>
                </div>
            </div>
            <div class="bento-item bento-1x1 rounded overflow-hidden p0 m0">
                <img src="https://picsum.photos/seed/marrow-proj1/700/700" class="img-responsive d-block h-100 w-100">
                <div class="position-absolute bottom-0 left-0 bg-black opacity07 p1 w-100">
                    <p class="white bold m-b-0 small">Kade Gallery</p>
                </div>
            </div>
        </div>
    </section>
                `
            },
            {
                title: "Portfolio 9",
                display: "Cards",
                description: "Description for Portfolio 1",
                code: `
<section id="process" class="p-v-4">
  <div class="container">
    <h2 class="center m-b-3">Selected Work</h2>
    <div class="row gap-3">
      <div class="col-md-6 col-12">
        <div class="card-hover rounded overflow-hidden">
          <img src="https://picsum.photos/seed/pixelpine-1/700/460" alt="Fintech dashboard product screens" class="w-100">
          <div class="p1">
            <span class="chip chip-color-1">Fintech</span>
            <h5>Ledgerly — Finance Dashboard</h5>
            <p class="small grey">Curabitur pretium tincidunt lacus, ut interdum tellus elit sed risus.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="card-hover rounded overflow-hidden">
          <img src="https://picsum.photos/seed/pixelpine-2/700/460" alt="Health app onboarding screens" class="w-100">
          <div class="p1">
            <span class="chip chip-color-1">Health Tech</span>
            <h5>Vitality — Wellness App</h5>
            <p class="small grey">Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
          </div>
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
        name: "Team",
        items: [
            {
                title: "Team 1",
                display: "2cols split",
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
                display: "4cols",
                description: "Description for Team 2",
                code: `
<section class="row container m-v-4">
  <div class="p-v-1 col-md-12">
    <h4 class="center black text-uppercase bold">Our team</h4>
    <p class="dark center">People who have contributed enormously to our Company.
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
            {
                title: "Team 3",
                display: "cards",
                description: "Description for Team 3",
                code: `
<div class="container">
    <h2 class="display-6 center m-b-4">Meet our team</h2>
    <div class="row gap">
      <div class="card col-lg-4 center">
            <img src="../img/blocks/worker-1-s.jpg" class="img-responsive circle icon-lg m-auto" alt="James Carter">
            <p class="black bold m-t-1 m0">James Carter</p>
            <p class="dark small m0">Content Lead</p>
            <p class="dark small line-height-17 m-t-1">Writes about editorial workflows, SEO, and building content teams that scale.</p>
            <a href="#" class="button button-s bg-black text-uppercase small p-v-1 p-h-2 m-t-1">Follow</a>
        </div>
      <div class="card col-lg-4 center">
            <img src="../img/blocks/worker-2-s.jpg" class="img-responsive circle icon-lg m-auto" alt="James Carter">
            <p class="black bold m-t-1 m0">Linda Carter</p>
            <p class="dark small m0">Content Lead</p>
            <p class="dark small line-height-17 m-t-1">Writes about editorial workflows, SEO, and building content teams that scale.</p>
            <a href="#" class="button button-s bg-black text-uppercase small p-v-1 p-h-2 m-t-1">Follow</a>
        </div>
      <div class="card col-lg-4 center">
            <img src="../img/blocks/worker-3-s.jpg" class="img-responsive circle icon-lg m-auto" alt="James Carter">
            <p class="black bold m-t-1 m0">Anna Carter</p>
            <p class="dark small m0">Content Lead</p>
            <p class="dark small line-height-17 m-t-1">Writes about editorial workflows, SEO, and building content teams that scale.</p>
            <a href="#" class="button button-s bg-black text-uppercase small p-v-1 p-h-2 m-t-1">Follow</a>
        </div>
    </div>
  </div> `
            },
            {
                title: "Team 4",
                display: "4cols cricle",
                description: "Description for Team 3",
                code: `
<div class="container">
    <h2 class="display-6 center m-b-4">Meet our agents</h2>
    <div class="row">
      <div class="col-6 col-md-3 m-b-3 center">
      <img src="https://i.pravatar.cc/240?img=15" class="circle m-b-2" style="width:100%;max-width:8rem;" alt="Lorem ipsum agent">
      <p class="h6 m-b-0">Lorem Ipsum</p>
      <p class="small grey m-b-0">Senior Agent</p>
    </div>
      <div class="col-6 col-md-3 m-b-3 center">
      <img src="https://i.pravatar.cc/240?img=28" class="circle m-b-2" style="width:100%;max-width:8rem;" alt="Lorem ipsum agent">
      <p class="h6 m-b-0">Dolor Sit</p>
      <p class="small grey m-b-0">Listing Agent</p>
    </div>
      <div class="col-6 col-md-3 m-b-3 center">
      <img src="https://i.pravatar.cc/240?img=41" class="circle m-b-2" style="width:100%;max-width:8rem;" alt="Lorem ipsum agent">
      <p class="h6 m-b-0">Amet Consec.</p>
      <p class="small grey m-b-0">Buyer's Agent</p>
    </div>
      <div class="col-6 col-md-3 m-b-3 center">
      <img src="https://i.pravatar.cc/240?img=52" class="circle m-b-2" style="width:100%;max-width:8rem;" alt="Lorem ipsum agent">
      <p class="h6 m-b-0">Adip Elit</p>
      <p class="small grey m-b-0">Rentals Lead</p>
    </div>
    </div>
  </div> `
            },
        ]
    },
]








const blocksListCategories = document.getElementById("blocksListCategories")
const blocksListSubItems = document.getElementById("blocksListSubItems")
let activeCategoryName = null

// function renderCategories(selectedCategoryName) {
//     blocksListCategories.innerHTML = ""
//     for (const block of blocks) {
//         const isActive = block.name === selectedCategoryName
//         const link = document.createElement("a")
//         link.href = "#"
//         link.className = "p-1-8 smaller flex-shrink-0" +
//             (isActive ? " bold" : "")
//         link.textContent = block.name
//         link.addEventListener("click", (e) => {
//             e.preventDefault()
//             if (block.items.length) loadBlock(block.items[0].title)
//         })
//         blocksListCategories.appendChild(link)
//     }
// }

// function renderSubItems(categoryName, selectedTitle) {
//     blocksListSubItems.innerHTML = ""
//     const block = blocks.find(b => b.name === categoryName)
//     if (!block) return
//     for (const item of block.items) {
//         const isActive = item.title === selectedTitle
//         const link = document.createElement("a")
//         link.href = "#"
//         link.className = "p-h-1 p-v--1-4 smaller flex-shrink-0" +
//             (isActive ? " color-1 bold" : "")
//         link.textContent = item.title
//         link.addEventListener("click", (e) => {
//             e.preventDefault()
//             loadBlock(item.title)
//         })
//         blocksListSubItems.appendChild(link)
//     }
// }

function renderCategories(selectedCategoryName) {
    blocksListCategories.innerHTML = ""
    for (const block of blocks) {
        const isActive = block.name === selectedCategoryName
        const link = document.createElement("a")
        link.href = "#"
        link.className = "p-1-8 smaller flex-shrink-0" +
            (isActive ? " bold" : "")
        link.textContent = block.name
        link.addEventListener("click", (e) => {
            e.preventDefault()
            if (block.items.length) loadBlock(block.items[0].title)
        })
        blocksListCategories.appendChild(link)
    }
}

function renderSubItems(categoryName, selectedTitle) {
    blocksListSubItems.innerHTML = ""
    const block = blocks.find(b => b.name === categoryName)
    if (!block) return
    for (const item of block.items) {
        const isActive = item.title === selectedTitle
        const link = document.createElement("a")
        link.href = "#"
        link.className = "p-h-1 p-v--1-4 smaller flex-shrink-0" +
            (isActive ? " color-1 bold" : "")
        link.textContent = item.display   // ← was item.title
        link.addEventListener("click", (e) => {
            e.preventDefault()
            loadBlock(item.title)
        })
        blocksListSubItems.appendChild(link)
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

function findCategoryByItemTitle(title) {
    for (const block of blocks) {
        for (const item of block.items) {
            if (item.title === title) return block.name
        }
    }
    return null
}

function loadBlock(title) {
    const previewPanelMain = document.getElementById("previewPanelMain")
    const blockItem = findItemByTitle(title)
    if (!blockItem) return
    previewPanelMain.innerHTML = blockItem.code
    const blockId = title.replace(/\s+/g, '-').toLowerCase()
    window.location.hash = blockId;
    document.title = `${blockItem.title} | CSSvars Blocks`;

    const categoryName = findCategoryByItemTitle(title)
    if (categoryName !== activeCategoryName) {
        activeCategoryName = categoryName
        renderCategories(categoryName)
    }
    renderSubItems(categoryName, title)
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
    const msg = document.getElementById("msg-1")
    msg.classList.remove("d-none")
    setTimeout(() => {
        msg.classList.add("d-none")
    }, 3000)
}

function loadBlockFromHashOrDefault() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    for (const block of blocks) {
      for (const item of block.items) {
        if (item.title.replace(/\s+/g, '-').toLowerCase() === hash) {
          loadBlock(item.title);
          return;
        }
      }
    }
  }
  if (blocks.length && blocks[0].items.length) {
    loadBlock(blocks[0].items[0].title);
  }
}

window.addEventListener("DOMContentLoaded", loadBlockFromHashOrDefault);