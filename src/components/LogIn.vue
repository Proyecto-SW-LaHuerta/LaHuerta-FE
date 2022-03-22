<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h1>Bienvenido</h1>
      <br />
      <form v-on:submit.prevent="processLogInUser">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Usuario</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Contraseña</label
          >
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <div class="alert alert-danger errorMessage" role="alert" v-if="error">
          Usuario o contraseña incorrecta
        </div>
        <button
          type="submit"
          class="btn btn-primary"
        >
          Iniciar Sesión
        </button>
        <button type="button" class="btn btn-primary" v-on:click="loadSignUp">
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      users: [],
      user: {
        username: "",
        password: "",
      },
      error: false,
      userStatus: false,
    };
  },
  methods: {
    processLogInUser: function () {
      let url = "https://la-huerta-be.herokuapp.com/login/";
      let body = this.user;
      let config = { headers: {} };
      axios
        .post(url, body, config)
        .then((res) => {
          this.error = false;
          var results = this.users.filter(function (usr) {
            return usr.username == body.username;
          });
          this.$emit("completedLogin", res, results);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.error = true;
          }
        });
    },
    listUsers: function () {
      let url = "https://la-huerta-be.herokuapp.com/users/";
      let config = { headers: {} };
      axios
        .get(url, config)
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
  },
  created: function () {
    this.listUsers();
  },
};
</script>

<style>
.logIn_user {
  margin: 0;
  padding-top: 170px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(/img/about_background.2b7c380a.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.logIn_user h1 {
  color: #ffffff;
}
.container_logIn_user {
  border: 1px solid #b2cb4c;
  background-color: rgba(19, 19, 19, 0.75);
  border-radius: 10px;
  width: 40%;
  height: max-content;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logIn_user form {
  width: 70%;
}
.form-label {
  color: #ffffff;
}
.logIn_user input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #b2cb4c;
}
.logIn_user button {
  width: 100%;
  color: #ffffff;
  background: #b2cb4c;
  border: 1px solid #b2cb4c;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
.logIn_user button:hover {
  color: #ffffff;
  background: #097d32;
  border: 1px solid #097d32;
}
.errorMessage {
  text-align: center;
}
</style>