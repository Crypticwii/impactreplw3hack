<script>

import { getStarted, signOut, user } from "$lib/flow/utils";
	import { sineIn } from "svelte/easing";
  import mainPic from './images/mainPic.svg';
  let isMenuActive = false;

function toggleMenu() {
  isMenuActive = !isMenuActive;

}
</script>

<!-- page.svelte -->


    <!-- Link to your style.css file -->
    <style>
 *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
}

.navbar{
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: whitesmoke;
}

.navbar__container{
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 0px;
}

#navbar__logo{
  background-color: black;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  margin-left: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.fa-gem{
  margin-right: 0.5rem;
}

.navbar__menu{
  display:flex;
  align-items: center;
  list-style: none;
  text-align: center;
}

.navbar__item{
  height: 80px;
}

.navbar__links{
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  width: 150px;
}

.navbar__btn{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

.button{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: blanchedalmond;
  color: black;
}

.button:hover{
  background: #ffb199;
  transition: all 0.3s ease;
}

.navbar__links:hover{
  color: aquamarine;
  transition: all 0.3s ease;
}

@media screen and (max-width: 960px){
  .navbar__container{
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    padding: 0;
  }

  .navbar__menu{
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    width: 100%;
    position: absolute;
    top: -1000px;
    opacity: 0;
    transition: all 0.5s ease;
    height: 50vh;
    z-index: -1;
    background: black;
  }

  .navbar__menu:active{
    background: #131313;
    top: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 99;
    height: 50vh;
    font-size: 1.6rem;
  }

  #navbar__logo{
    padding-left: 25px;
  }

  .navbar__toggle .bar{
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background: #e55d34;
  }

  .navbar__item{
    width: 100%;
  }

  .navbar__links{
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
  }

  #mobile-menu{
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }

  .navbar__btn{
    padding-bottom: 2rem;
  }

  .button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80px;
    margin: 0;
  }

  .navbar__toggle .bar{
    display: block;
    cursor: pointer;
  }

  #mobile-menu.is-active .bar:nth-child(2){
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1){
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3){
    transform: translateY(-8px) rotate(-45deg);
}}

/* new section */
.main__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
  height: 90vh;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
}

.main__content h1 {
  font: 4rem;
  font-size: 65px;
  background-color: black;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.main__content h2 {
  font: 4rem;
  font-size: 4rem;
  background-color: black;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.main__content p {
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: black;
}

.main__btn {
  font-size: 2rem;
  background-color: orange;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  color: black;
  margin-top: 2rem;
  cursor: pointer;
  position: relative;
  transition: all 0.02s;
  outline: none;
}

.main__btn2 {
  font-size: 1rem;
  background-color: orange;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  color: black;
  margin-top: 0.1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.35s;
  outline: none;
}

.main__btn a {
  position: relative;
  z-index: 2;
  color: black;
  text-decoration: none;
}

.main__btn:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #30f2a1;
  border-radius: 4px;
  border-radius: 12px;
}

.main__btn:hover:active {
  transition: all 0.02s;
  background-color: #30f2a1;
} 

.main__img--container {
  text-align: center;
}

#main__img {
  height: 100%;
  width: 100%;
  background-color: #30f2a1;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
  .main__container {
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-self: center;
  width: 100%;
  margin: 0 auto;
  height: 90vh;
  }

  .main__content {
    text-align: center;
    margin-bottom: 4rem;
  }

  .main__content h1 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  .main__content h2 {
    font-size: 3rem;
  }

  .main__content p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .main__content h1 {
    font-size: 2rem;
    margin-top: 3rem;
  }

  .main__content h2 {
    font-size: 2rem;
  }

  .main__content p {
    margin-top: 2rem;
    font-size: 1.5rem;
  } 

  .main__btn {
    padding: 12px 36px;
    margin: 2.5rem 0;
  }
}


    </style>

    <!-- Your page content goes here -->
    <nav class="navbar">
  <div class="navbar__container">
    <a href="/" id="navbar__logo">IMP<strong>REP</strong></a>
    <div class="navbar__toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="navbar__menu">
      <li class="navbar__item">
        <a href="/" class="navbar__links">
          Home
        </a>
      </li>
      <li class="navbar__item">
        <a href="/" class="navbar__links">
          Tasks
        </a>
      </li>
      <li class="navbar__item">
        <a href="http://127.0.0.1:5500/game.html" class="navbar__links">
          Games
        </a>
      </li>
      <li class="navbar__item">
        <a href="/" class="navbar__links">
          Market-place
        </a>
      </li>
      <li class="navbar__btn">
        <button on:click={signOut} class="main__btn2">Sign out</button>
      </li>
    </ul>
  </div>
</nav>

<!-- new section-->
<div class="main">
  <div class="main__container">
    <div class="main__content">
      <h1>Begin Your Epic Odyssey</h1>
      <h2>Elevate Your Influence</h2>
      <p>Unleash Impact with Web3 and grow your social reputation</p>
      <button class="main__btn" on:click={getStarted}>Get Started</button>
      <p>Powered by Flow Technology</p>
    </div>
    <div class="main__img--container">
      <img src= {mainPic} alt="pic" id="main__img">
    </div>
  </div>
</div>

{#if $user.loggedIn}
<p>welcome, {$user.addr}!</p>
{:else}
<p>Please log in!</p>
{/if}



