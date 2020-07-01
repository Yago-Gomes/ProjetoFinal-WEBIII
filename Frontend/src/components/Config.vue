<template>
  <div class="config">
    <div class="rounded">
      <br>
    <h1>LOJA</h1>
    <br>
    <br>
    <p>Pesquise um produto:</p>
    <div id="bar-do">
    <div class="input-group">
      <textarea class="form-control" aria-label="With textarea">
      </textarea>
    </div>
    </div>
    <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Config',
  props: {
  }
}
</script>

<style scoped>

p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-size: 20px;
  margin-left: -1180px;
  margin-right: 20px;
}

#bar-do{
  margin-left: 70px;
  margin-right: 400px;

}

.rounded{
  margin-left: 200px;
  margin-right: 200px;
  background-color: #ececec;
  margin-top: 50px;
  border: 2px;
  border-radius: 20px;
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
  color: #191919;
  text-decoration: none;
}

</style>
