import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    set;
  };

  return (

    
    <div>
      {/*This is Mobile*/}
      
      <div>
        <ul className="Dropdown">
          <li>
            <a>PhilosophyConnect</a>
          </li>

          <li>
            <a onClick={toggleMenu}>Menu</a>
          </li>
        </ul>
        {isOpen && (
          
          <div className="DropdownMenu">
                    <hr></hr>

            <a className="DropdownMenuOptions" href="#">
              Option 1
            </a>
            <a className="DropdownMenuOptions" href="#">
              Option 2
            </a>
            <a className="DropdownMenuOptions" href="#">
              Option 3
            </a>
          </div>
        )}
      </div>

      

          {/*This is Website and Tablet*/}
      <ul className="Navbar">
        <li className="MenuOptions">
          <a>PhilosophyConnect</a>
        </li>

        <li className="MenuOptions">
          <a>Explore Wisdom</a>
        </li>

        <li className="MenuOptions">
          <a>Discussion Board</a>
        </li>

        <li className="MenuOptions">
          <a>Enlightenment Path</a>
        </li>

        <li className="MenuOptions">
          <a>Login</a>
        </li>
      </ul>
      <hr></hr>


    {/*This is Website and Tablet*/}
    <section id="Section1">
      <div id="Textbox1Web">
        <h1>Philosophy Connect: Where Ideas Meet Minds </h1>
        <h4>Welcome to Philosophy Connect – Explore, Engage, Enlighten!</h4>
        <p>Delve into the depths of thought, connect with kindred spirits, and expand your understanding of the universe at Philosophy Connect. Whether you're a seasoned philosopher or just beginning to ponder life's mysteries, our platform is your gateway to a vibrant community of thinkers and seekers.</p>
        <button className="Button1"> How does it work? </button>
        <button className="Button1"> Get Started</button>
      </div>


      <img src="Philosopher1.jpg"></img>
    </section>


    <h1 id="randomtext">Why PhilosophyConnect?</h1>

    <section id="Section2">
    
      <div >
        <h4>Explore Philosophy Easily:</h4>
          <p>Embark on your philosophical journey with confidence through our curated selection of beginner-friendly resources. Dive into articles, videos, and podcasts designed to make complex concepts understandable and engaging.</p>
      </div>
      <div >
        <h4>Discover Diverse Philosophical Ideas:</h4>
        <p>Explore a diverse array of philosophical perspectives from ancient wisdom to modern theories. Dive into Stoicism, Utilitarianism, Absurdism, Machiavellianism, and more. Expand your philosophical horizons and find the ideas that resonate with you.</p>
      </div>
      <div >
        <h4>Connect and Debate:</h4>
        <p>Join our vibrant community of thinkers and engage in spirited discussions and debates. Share your insights, challenge perspectives, and explore diverse viewpoints in a welcoming and intellectually stimulating environment.</p>
      </div>


      
    </section>


     {/*This is Mobile*/}
     <section id="Section1Mobile">
      <div>
        <h1>Philosophy Connect: Where Ideas Meet Minds </h1>
        <h4>Welcome to Philosophy Connect – Explore, Engage, Enlighten!</h4>
        <p>Delve into the depths of thought, connect with kindred spirits, and expand your understanding of the universe at Philosophy Connect. Whether you're a seasoned philosopher or just beginning to ponder life's mysteries, our platform is your gateway to a vibrant community of thinkers and seekers.</p>
        <div id="MobileBox">
          <button className="Button1Mobile"> How does it work? </button>
          <button className="Button1Mobile"> Get Started</button>
        </div>
      </div>


      <img src="Philosopher1.jpg"></img>
    </section>


    <h1 id="randomtextMobile">Why PhilosophyConnect?</h1>

    <section id="Section2Mobile">
    
      <div >
        <h4>Explore Philosophy Easily:</h4>
          <p>Embark on your philosophical journey with confidence through our curated selection of beginner-friendly resources. Dive into articles, videos, and podcasts designed to make complex concepts understandable and engaging.</p>
      </div>
      <div >
        <h4>Discover Diverse Philosophical Ideas:</h4>
        <p>Explore a diverse array of philosophical perspectives from ancient wisdom to modern theories. Dive into Stoicism, Utilitarianism, Absurdism, Machiavellianism, and more. Expand your philosophical horizons and find the ideas that resonate with you.</p>
      </div>
      <div >
        <h4>Connect and Debate:</h4>
        <p>Join our vibrant community of thinkers and engage in spirited discussions and debates. Share your insights, challenge perspectives, and explore diverse viewpoints in a welcoming and intellectually stimulating environment.</p>
      </div>


      
    </section>


    </div>
  );
}

export default App;
