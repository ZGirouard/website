import './GroceryStore.css';
import React from 'react';
import Navbar from './Navbar';
import GroceryStoreLogo from "./GroceryLogo.png"
import Account from "./Grocery-Account.png"
import Cart from "./Grocery-Cart.png"
import LogIn from "./Grocery-Log-In.png"
import Main from "./Grocery-Main.png"
import Register from "./Grocery-Register.png"
import Shipping from "./Grocery-Shipping.png"


function GroceryStore() {
  return (
<div>
  <Navbar />
  <div className='content1'>
    <div class="card card1">
        <img src={GroceryStoreLogo}></img>
        <div class="textWrap">
        <h1><b>Grocery Store App</b></h1>
        <h3><b>A Case Study</b></h3>
        </div>
    </div>
  </div>
  <div className='textInfo'>
    <h1>Overview</h1>
    <p>My team and I created an online grocery store app. This application allowed users to create an account, add products to their cart, change their account details, and submit an order. The product features both a frontend, built using React JavaScript, a middleware developed in C#, and a backend created using Microsoft SQL. The backend validates user login, and updates the frontend as needed. </p>
    <br></br>
    <h1>Problem Statement</h1>
    <p>The online grocery store app was created as part of my capstone project for CSCS 361 - Software Engineer course. Some of the main deliverables for the final app include:</p>
    <ul>
        <li>The user should be able to login to the website and be able to add products to their cart</li>
        <li>The back-end must provide product information to the front-end and handle business logic</li>
        <li>The information and logic must be handled correctly and securely</li>
        <li>The website must be able to provide this information about a product: name, product images,  manufacturer information, description,dimensions and weight, a product rating, and a SKU</li>
    </ul>
    <p>The desired goal of this project was to not only fulfill the project requirement in order to receive a good grade, but also to create an app we could be proud of.</p>
    <br></br>
    <h1>Users & Audience</h1>
    <p>Although the primary user of our application would be our professor, early on, we emphasized that
    we wanted to create an app anybody could use. Our primary user would be someone looking for
    a quick and easy way to order groceries online from a hypothetical grocery store. As such, we wanted
    the process to be as straightforward as possible for the user, giving them a pleasant experience with
    the application. 
    </p>
    <br></br>
    <h1>Roles & Responsibilities</h1>
    <p>Our team consisted of 6 members, including myself, who were all students enrolled in the course. We
    were randomly placed in a group together, and this project was our first time meeting each other. Our
    team varied as far as skill level and background are concerned. We had individuals who were more
    experienced in certain languages than others, and some of us had prior internships where others had not.</p>
    <p>My role in the team was primarily frontend development and user experience design. I chose this role since I had previous experience with Reach JavaScript and UX Design. For the project, I created wireframe sketches, drew the logo by hand, and handled most of the frontend functionality by writing
    React JavaScript code. During the end of the project, I also helped other members of the team write
    middleware in C# so we could meet deadlines.</p>
    <br></br>
    <h1>Scope & Constraints</h1>
    <p>We were given four weeks to complete this project, separated into two two-week sprints. There was no
    budget for the project, and the scope of the project was well-defined at the beginning, so there was no
    scope creep. We met three times a week during the course of the project, and discussed how much progress we made individually, as well as where we needed help. In addition to these meetings, we met with our professor three times over the course of the project so she could evaluate whether or not we were on schedule.
    </p>
    <br></br>
    <h1>Process & What I Did</h1>
    <p>One of my teammates and I were placed in charge of the frontend of the project. We began by discussing which part of the frontend each of us wanted to work on and delegated tasks. I started by drawing wireframes for the website and creating a logo. From there we each began by developing the login and register pages, and creating some general styling in CSS. Then, I worked primarily on the products and individual product pages, while they worked on the ancillary pages such as the checkout and profile pages. 
    </p>
    <p>After creating rough drafts of each page, we began implementing functionality for the frontend. I implemented the search feature, filter feature, and shopping cart features. Once the functionality was complete, and we connected the frontend to the backend, I helped write some of the accessors and unit tests for the middleware. Finally, I worked on the styling for the website so the overall design was cohesive between my pages and my team member’s.
    </p>
    <p>
    During the course of the project, we used GitHub for version control, I developed the frontend using a Visual Studio IDE, and I drew the wireframes and logo using a sketching app on an IPad.
    </p>
    <br></br>
    <h1>Outcomes & Results</h1>
    <p> In the end, I would say we did a pretty good job of achieving our goals. Once our project was completed, we gave a presentation to our class and a demonstration of our app. During the demonstration, all of our functionality worked perfectly, and I believe we did a good job of explaining our architecture. In addition, I received a perfect grade on the project, which includes my presentation, our application functionality, and my contribution to the team.
    </p>
    <p> Looking back, there were a few things I think we could’ve done better during the project. First, as a team, we had trouble connecting our frontend and backend elements until the very end of the project. We should’ve made this a priority earlier on so we could’ve done more testing with them connected. Individually, I wish I could’ve spent more time designing the application logo, and I would’ve rather used some software such as Adobe Photoshop to design it. Additionally, I think it would’ve been beneficial to transfer my wireframe drawings into Figma before translating them into React Javascript. Unfortunately, due to the limited time constraints, and the fact that I was also a frontend developer for this project, I didn’t have to do this. Now that I’ve gained much more experience in Figma and Adobe Photoshop since this project, I think I could’ve created a much higher fidelity prototype for this project. Lastly, I believe it would’ve been beneficial to use JavaScript Bootstrap for our frontend to make it easier to develop the frontend, and give us more customization. Overall, I’m proud of the work we did given the limited timeline and scope of the project. I learned a lot about working in a team to develop an application, and I’d love to apply what I’ve learned on another project.
    </p>
    <div className='DemoImages'>
      <div>
        <h1>Register</h1>
        <img src={Register} alt="Register"></img>
      </div>
      <div>
        <h1>Log In</h1>
        <img src={LogIn} alt="Log In"></img>
      </div>
      <div>
        <h1>Main</h1>
        <img src={Main} alt="Main"></img>
      </div>
      <div>
        <h1>Shopping Cart</h1>
        <img src={Cart} alt="Shopping Cart"></img>
      </div>
      <div>
        <h1>Account</h1>
        <img src={Account} alt="Account"></img>
      </div>
      <div>
        <h1>Shipping</h1>
        <img src={Shipping} alt="Shipping"></img>
      </div>
    </div>
    </div>
</div>
);
}

export default GroceryStore;
