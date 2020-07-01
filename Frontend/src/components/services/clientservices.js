import { http } from './api'

export default {

  findAll: () => {
    return http.get('clients');
  },

  findById: (client) => {
    return http.get(`clients/${client.id}`, { data: client });
  },

  save: (client) => { //vai vir o objeto client sem ID
    return http.post('clients', client);
  },

  delete: (client) => {
    return http.delete(`clients/${client.id}`, { data: client });
  },

  update: (client) => { //vai vir o objeto client com ID
    return http.put(`clients`, client);
  }

}
