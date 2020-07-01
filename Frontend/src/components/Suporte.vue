<template>
  <div class="suporte">
    <div class="rounded">
      <h1>SUPORTE</h1>
      <p id="nocanto">Algum problema com nosso sistema? Entre em contato conosco e envie um ticket.</p> <br>
      <p id="titulonegao">Contato: </p>
<p id="nocanto">
Email: suporte@johngaming.com.br<br>
Telefone:  (51) 3428-2713 </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suporte',
  props: {
  }
}
</script>

<style scoped>

h1{
  color: #000000;
  font-family: 'Roboto', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-left: 20px;
  margin-right: 20px;
}

.rounded{
  margin-left: 200px;
  margin-right: 200px;
  background-color: #ececec;
}

#nocanto {
  text-align: left;
}

#titulonegao {
  text-align: left;
  -webkit-text-stroke: 1px black;
  font-family: 'Roboto' sans-serif;
}


</style>
