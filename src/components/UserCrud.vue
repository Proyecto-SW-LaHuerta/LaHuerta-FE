<template>
  <div class="userCrud">
    <h1>CRUD Usuarios</h1>
    <div class="container_crud_user">
      <form class="row g-3" v-on:submit.prevent="createUser">
        <div class="col-md-4">
          <label for="inputEmail4" class="form-label">Nombre</label>
          <input
            v-model="user.first_name"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputPassword4" class="form-label">Apellido</label>
          <input
            v-model="user.last_name"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputAddress" class="form-label">Telefono</label>
          <input
            v-model="user.phoneNumber"
            class="form-control"
            type="number"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputAddress2" class="form-label"
            >Fecha de Nacimiento</label
          >
          <input
            v-model="user.birthday"
            class="form-control"
            type="date"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Usuario</label>
          <input
            v-model="user.username"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Correo</label>
          <input
            v-model="user.email"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Contraseña</label>
          <input
            v-model="user.password1"
            class="form-control"
            type="password"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Confirmar contraseña</label>
          <input
            v-model="user.password2"
            class="form-control"
            type="password"
            required
          />
        </div>
        <div class="col-md-2"></div>
        <hr />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-success" type="submit">
            Agregar Nuevo Usuario
          </button>
        </div>
      </form>
    </div>

    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" class="text-center">Nombre</th>
            <th scope="col" class="text-center">Apellido</th>
            <th scope="col" class="text-center">Correo</th>
            <th scope="col" class="text-center">Telefono</th>
            <th scope="col" class="text-center">Fecha Nacimiento</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td class="text-center" v-if="!user.is_active">
              {{ user.first_name }}
            </td>
            <td class="text-center" v-if="!user.is_active">
              {{ user.last_name }}
            </td>
            <td class="text-center" v-if="!user.is_active">{{ user.email }}</td>
            <td class="text-center" v-if="!user.is_active">
              {{ user.phoneNumber }}
            </td>
            <td class="text-center" v-if="!user.is_active">
              {{ user.birthday }}
            </td>
            <td class="text-center" v-if="!user.is_active">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-warning">
                  <i class="bi bi-pencil-fill"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deleteUser(user.userId)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserCrud",
  data: function () {
    return {
      users: [],
      user: {
        birthday: new Date().toJSON().toString(),
        date_joined: new Date().toJSON().toString(),
        email: "",
        first_name: "",
        is_active: false,
        last_login: new Date().toJSON().toString(),
        last_name: "",
        password1: "",
        password2: "",
        phoneNumber: "",
        username: "",
      },
    };
  },
  methods: {
    listUsers: function () {
      let url = "http://localhost:8000/users/";
      let config = { headers: {} };
      axios
        .get(url, config)
        .then((res) => {
          this.users = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUser: async function (id) {
      try {
        let url = "http://localhost:8000/user/" + id + "/";
        let config = { headers: {} };
        await axios.delete(url, config);
        this.listUsers();
      } catch (err) {
        alert("Error, algo inespeado sucedio");
      }
    },
    createUser: async function () {
      try {
        let url = "http://127.0.0.1:8000/rest-auth/registration/";
        let body = this.user;
        let config = { headers: {} };
        let result = await axios.post(url, body, config);
        console.log(body);
        console.log(result);
        this.listUsers();
      } catch (err) {
        
        alert("Error, algo inespeado sucedio");
      }
    },
  },
  created: function () {
    this.listUsers();
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.userCrud {
  color: white;
  margin: 0;
  padding: 120px 35px;
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: block;
  justify-content: center;
  align-items: flex-start;
  background-image: url("../assets/products_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.container_crud_user {
  margin: 30px 0;
  padding: 40px;
  background-color: rgba(19, 19, 19, 0.75);
  border-radius: 10px;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signUp_user form {
  width: 80%;
}
.signUp_user input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #b2cb4c;
}
.signUp_user button {
  width: 100%;
  color: #ffffff;
  background: #b2cb4c;
  border: 1px solid #b2cb4c;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.signUp_user button:hover {
  color: #ffffff;
  background: #097d32;
  border: 1px solid #097d32;
}
.crud-container {
  height: max-content;
}
</style>