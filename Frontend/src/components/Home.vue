<template>
  <div class="home">
    <h1>Olá, seja bem-vindo</h1>
    <p id="sample-text">A loja mais braba de canoas</p>
    <a class="btn btn-light" id="eae" href="/config" role="button">
      Ver Estoque
    </a>

    <img id="animationmaria" img draggable="false" alt="Grande maria" src="./mariapage.png">

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<style>
#logodiv {
  margin-left: -750px;
  margin-top: 90px;
}
</style>

<style scoped>

.home {
  margin-top: -10px;
  margin-right: 730px;
}

h1 {
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-top: 10px;
  font-weight: bold;
  margin: 10px;
  color: #ffffff;
  text-decoration: none;
}

#eae {
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  font-weight: bold;
  margin-top: 20px;
  color: #000000;
  text-decoration: none;
  font-size: 20px;
  background-color: #FFFFFF;
}

#sample-text{
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin-top: 10px;
  font-weight: bold;
  margin: 10px;
  color: #ffffff;
  text-decoration: none;
}

#animationmaria {
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 800px;
  margin-top: -470px;
  margin-left: 2680px;
  animation: 4s ease-in 1 reverse both running slideInFromRight;
  position: relative;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(1);
  }
}





</style>
