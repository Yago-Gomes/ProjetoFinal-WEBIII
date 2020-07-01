<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a id="eae" class="navbar-brand" href="/home">JohnGaming</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a id="eae" class="nav-link" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a id="eae" class="nav-link" href="/about">Sobre</a>
          </li>
          <li class="nav-item">
            <a id="loja" class="nav-link" href="/config">Loja</a>
          </li>
          <li class="nav-item">
            <a id="eae" class="nav-link" href="/suporte">Suporte</a>
          </li>
          <li class="nav-item">
            <a id="eae" class="nav-link" href="/cadastro">Cadastre-se</a>
          </li>
        </ul>
      </div>
    </nav>

<div id="logodiv">
    <img id="logo" img draggable="false" alt="Vue logo" src="./assets/logo.png">
</div>
      <router-view></router-view>
  </div>
</template>

<script>
/* import Menu from './components/Menu.vue' */


  export default {
    name: 'App'
    /* components: {
      Menu
    } */
  }


</script>




<style >
.navbar-toggler{
  margin-right: 10px;
}



a {
  margin-top: 10px;
  font-weight: bold;
  margin: 10px;
  color: #ffffff;
  text-decoration: none;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ececec;
  margin-top: -10px;
}

#logo {
-khtml-user-select: none;
-o-user-select: none;
-moz-user-select: none;
-webkit-user-select: none;
user-select: none;
margin: 30px;
}

body{
  background: url('./assets/wallpaper.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
/*overflow-y: hidden;  Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

</style>
