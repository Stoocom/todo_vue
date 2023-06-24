<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Lazy Todo List"/>
      <nav>
        <RouterLink to="/">Stay here</RouterLink>
        <RouterLink to="/todo">Do not enter</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  .wrapper {
    max-width: 1024px;
    min-width: 700px;
  }

  nav {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  input {
    height: 42px;
    border-radius: 3px;
    border: 1px solid #c5e3d1;
    padding: 0 10px;
  }
  .text {
    font-size: 18px;
    color: #058c38;
    font-weight: 500;
  }


  .btn {
    display: inline-block;	
    box-sizing: border-box;
    padding: 0 24px;
    margin: 5px 15px 15px 5px;
    outline: none;
    border: none;    
    border-radius: 3px;
    height: 35px;
    line-height: 37px;
    font-weight: 600;
    font-size: 14px; 
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background-color: #05cd51;
    cursor: pointer;
    user-select: none;
    appearance: none;
    touch-action: manipulation;
    transition: box-shadow .18s ease-out,background .18s ease-out,color .18s ease-out;
  }
  .btn:focus-visible {
    box-shadow: 0 0 0 3px lightskyblue;
  }
  .btn:hover {
    box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
  }
  .btn:active {
    background-color: #058c38 !important;
  }
  .btn:disabled {
    background-color: #aed2bc;
    color: #444;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1.3rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  } 
</style>
