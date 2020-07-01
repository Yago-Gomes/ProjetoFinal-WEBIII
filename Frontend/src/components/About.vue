<template>
  <div class="about">
    <div class="rounded">
      <h1>SOBRE</h1>
      <p> Fundada no ano de 2007, a John Gaming é uma empresa que trabalha com os mais variados produtos, atuando principalmente no setor de informática e equipamentos eletrônicos em geral, área bastante competitiva e em constante crescimento, onde qualidade, variedade, garantia e eficiência são critérios importantíssimos para total satisfação, confiança e preferência de nossos consumidores.</p>
      <p>Além do nosso e-commerce possuímos uma loja física situada em Canoas/RS, onde temos a variedade de nosso site ao gosto dos mais exigentes clientes. Oferecemos não apenas a comodidade da compra online, mas também o tratamento olho no olho que muitos preferem e sempre confiam.</p>
      <br>
      <p id="titulonegao">Horários de atendimento:<br> </p>
<p id="nocanto"> Segunda a Sexta 8h ás 12h e das 13h ás 18h<br>

  Email: suporte@johngaming.com.br<br>
  Telefone:  (51) 3428-2713 </p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
