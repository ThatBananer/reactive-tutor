import React from "react";
import styles from './landingPage.css'

function landingPage(){
    return(
        <div>      
      <body id="body" data-spy="scroll" data-target=".navbar" data-offset="100">
        <header id="header-section">
          <nav class="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
          <div class="container">
            <div class="navbar-brand-wrapper d-flex w-100">
              <img src="images/Group2.svg" alt=""/>
              <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="mdi mdi-menu navbar-toggler-icon"></span>
              </button> 
            </div>
            <div class="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
              <ul class="navbar-nav align-items-lg-center align-items-start ml-auto">
                <li class="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
                  <div class="navbar-collapse-logo">
                    <img src="images/Group2.svg" alt=""/>
                  </div>
                  <button class="navbar-toggler close-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="mdi mdi-close navbar-toggler-icon pl-5"></span>
                  </button>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#header-section">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#features-section">About</a>
                </li>
                
                <li class="nav-item btn-contact-us pl-4 pl-lg-0">
                  <button class="btn btn-info" data-toggle="modal" data-target="#exampleModal">Login / Signup</button>
                </li>
              </ul>
            </div>
          </div> 
          </nav>   
        </header>
        <div class="banner" >
          <div class="container">
            <h1 class="font-weight-semibold">Peer To Peer Tutoring<br/>at Umass Boston</h1>
            <h6 class="font-weight-normal text-muted pb-3">BLANK is a simple way get tutoring and/or make money that can solve your GPA and/or money problems.</h6>
            <div>
              <button class="btn btn-opacity-light mr-1">Tutor</button>
              <button class="btn btn-opacity-success ml-1">Be Tutored</button>
            </div>
            <img src="images/Group171.svg" alt="" class="img-fluid"/>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="container">
            <section class="features-overview" id="features-section" >
              <div class="content-header">
                <h2>What is BLANK</h2>
                <h6 class="section-subtitle text-muted">BLANK is a way for students to get tutoring<br/> or tutor others</h6>
              </div>
            </section>     
            <section class="digital-marketing-service" id="digital-marketing-section"/>
              <div class="row align-items-center">
                <div class="col-12 col-lg-7 grid-margin grid-margin-lg-0" data-aos="fade-right">
                  <h3 class="m-0">For concerned students<br/>we can help you find a tutor!</h3>
                  <div class="col-lg-7 col-xl-6 p-0">
                    <p class="py-4 m-0 text-muted">Taking a hard class this semester? We can help find somone whos taken it at UMB.</p>
                    <p class="font-weight-medium text-muted">Someone at UMB whos taken that hard class might be on BLANK as a Tutor! </p>
                  </div>    
                </div>
                <div class="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0" data-aos="fade-left">
                  <img src="images/Group1.png" alt="" class="img-fluid"/>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-12 col-lg-7 text-center flex-item grid-margin" data-aos="fade-right">
                  <img src="images/Group2.png" alt="" class="img-fluid"/>
                </div>
                <div class="col-12 col-lg-5 flex-item grid-margin" data-aos="fade-left">
                  <h3 class="m-0">For confident students<br/>we can help get you people to tutor!</h3>
                  <div class="col-lg-9 col-xl-8 p-0">
                    <p class="py-4 m-0 text-muted">So youve taken some hard classes and think you can make some money? On BLANK we want to connect you to people looking for help</p>
                    <p class="pb-2 font-weight-medium text-muted">Make your profile on BLANK to get access to UMB students who want tutoring in the classes you've mastered!</p>
                  </div>
                </div>
              </div>
            <footer class="border-top">
              <p class="text-center text-muted pt-4">Copyright © ???? ~ Just a student who couldnt find physics 2 tutors who were good lol</p>
            </footer>
            
          </div> 
        </div>

      </body>
      </div>
    );
}

export default landingPage;