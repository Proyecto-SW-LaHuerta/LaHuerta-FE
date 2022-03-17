<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h1>Bienvenido</h1>
      <br />
      <form v-on:submit.prevent="processLogInUser">
        <div class="row">
          <div class="col-6">
            <button type="button" class="btn btn-primary">Cliente</button>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary">Admin</button>
          </div>
        </div>
        <br />
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
          v-on:click="processLogInUser"
        >
          Iniciar Sesión
        </button>
        <button type="submit" class="btn btn-primary" v-on:click="loadSignUp">
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
      user: {
        username: "",
        password: "",
      },
      error: false,
    };
  },
  methods: {
    processLogInUser: function () {
      let url = "http://127.0.0.1:8000/rest-auth/login/";
      let body = this.user;
      let config = { headers: {} };
      axios
        .post(url, body, config)
        .then((res) => {
          this.error = false;
          this.$emit("completedLogin", res);
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.error = true;
          } else {
            alert("Error inesperado, intentelo mas tarde");
          }
        });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
  },
};
</script>

<style>
.logIn_user {
  margin: 0;
  padding-top: 150px;
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