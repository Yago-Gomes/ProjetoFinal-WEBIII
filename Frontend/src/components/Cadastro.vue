<template>
  <div class="cadastro">
    <div class="rounded">
      <nav>
            <div class="nav-wrapper blue darken-1">
              <h1>Cadastro</h1>
            </div>
          </nav>


          <form @submit.prevent="saveAndUpdateClient">
            <div>
              <input id="testenome" type="text" v-model="client.name" placeholder="Digite o seu nome">
            </div>

            <div>
              <input type="password" v-model="client.senha" placeholder="Digite a sua senha">
            </div>

            <button id="testebutton" class="waves-effect waves-light btn-small">Salvar</button>
            <button id="testbutton2" v-show="client.id" @click="cancelUpdate" class="waves-effect waves-light btn-small">Cancelar</button>
          </form>

          <form @submit.prevent="findById">
            <br>
            <div>
              <input id="basic-url" type="text" v-model="client.id" placeholder="Digite o código para buscar">
            </div>
            <button id="testebutton" class="waves-effect waves-light btn-small">Procurar</button>
          </form>
          <br>
          <br>
          <div>
          <div v-show="findClient.id">
            <p id="titulonegao">Cliente encontrado</p>
            <p>
              Código: {{findClient.id}} <br>
              Username: {{findClient.name}} <br>
              Senha: {{findClient.senha}} <br>
            </p>
          </div>
        </div>


          <p>Quantidade de clientes: {{clients.length}}</p>
          <div id="bord">
          <table v-show="clients.length > 0">
            <thead>
              <tr>
                <th>Código</th>
                <th>Username</th>
                <th>Senha</th>
                <th>Excluir</th>
                <th>Alterar</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Código</th>
                <th>Username</th>
                <th>Senha</th>
                <th>Excluir</th>
                <th>Alterar</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="client in clients" :key="client.id">
                <td>{{client.id}}</td>
                <td>{{client.name}}</td>
                <td>{{client.senha}}</td>
                <td>
                  <button type="button" @click="deleteClient(client)" class="waves-effect waves-light btn-small">Excluir</button>
                </td>
                <td>
                  <button type="button" @click="updateClient(client)" class="waves-effect waves-light btn-small">Alterar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br><br>

        </div>
        </div>
  </div>
</template>

<script>
import ClientServices from './services/clientservices'

export default {
  data() {
    return {
      client : {
        id: '',
        name: '',
        income: ''
      },
      findClient : {
        id: '',
        name: '',
        income: ''
      },
      clients: []
    }
  },
  name: 'Cadastro',
  components: {
  },
  mounted() {
    this.listClients();
  },
  methods: {
    listClients() {
      ClientServices.findAll().then(response => {
        this.clients = response.data;
      });
    },
    saveAndUpdateClient() {
      if(!this.client.id) {
        //salvar
        ClientServices.save(this.client).then(response => {
          this.listClients();
          this.client = {};
          alert("Cliente adicionado com sucesso!");
          return response; //gambi by Thiago Cury
        });
      } else {
        //atualizar
        ClientServices.update(this.client).then(response => {
          this.listClients();
          this.client = {};
          alert("Cliente atualizado com sucesso!");
          return response; //gambi by Thiago Cury
        });
      }
    },
    deleteClient(client) {
      if(confirm("Deseja excluir o cliente?!")) {
        ClientServices.delete(client).then(response => {
          this.listClients();
          alert("Cliente excluido com sucesso!");
          return response; //gambi by Thiago Cury
        });
      }
    },
    findById() {
      // console.log(`id: ${this.client.id}`);
      ClientServices.findById(this.client).then(response => {
        this.findClient = response.data;
      });
    },
    updateClient(client) {
      this.client = client;
    },
    cancelUpdate() {
      this.client = {};
      alert("Alteração cancelada!");
    }
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
  margin-left: 20px;
  margin-right: 20px;
}

#bord {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  color: #000000;
  margin-left: 600px;
  margin-right: 20px;
  margin-top: -20px;
}

.rounded{
  margin-left: 200px;
  margin-right: 200px;
  background-color: #ececec;
}

#cadastro {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

#testenome {
  margin-bottom: 5px;
}

#testebutton {
  margin-top: 10px;
}

#testebutton {
  margin-right: 10px;
}

#titulonegao {
  text-align: center;
  -webkit-text-stroke: 1px black;
  font-family: 'Roboto' sans-serif;
}
</style>
