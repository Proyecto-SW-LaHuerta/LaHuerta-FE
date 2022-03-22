<template>
  <div class="signUp_user">
    <div class="container_signUp_user">
      <form class="row g-3" v-on:submit.prevent="processSignUpUser">
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            v-on:click.prevent="checkStatus(false)"
          >
            Cliente
          </button>
        </div>
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            v-on:click.prevent="checkStatus(true)"
          >
            Administrador
          </button>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="user.firstName"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Apellido</label>
          <input
            type="text"
            class="form-control"
            v-model="user.lastName"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">Telefono</label>
          <input
            type="number"
            class="form-control"
            v-model="user.phoneNumber"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputAddress2" class="form-label"
            >Fecha de Nacimiento</label
          >
          <input
            type="date"
            class="form-control"
            v-model="user.birthday"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Usuario</label>
          <input
            type="text"
            class="form-control"
            v-model="user.username"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Correo</label>
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="user.password"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Confirmar contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="password2"
            required
          />
        </div>
        <div class="alert alert-danger errorMessage" role="alert" v-if="error">
          Los datos ingresados no son correctos, intentelo nuevamente
        </div>
        <div class="alert alert-danger errorMessage" role="alert" v-if="passwordError">
          Las contraseñas no coinciden
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthday: new Date().toJSON().toString(),
        email: "",
        status: false,
      },
      error: false,
      password2: "",
      passwordError: false,
    };
  },
  methods: {
    processSignUpUser: function () {
      let url = "https://la-huerta-be.herokuapp.com/user/";
      let body = this.user;
      let config = { headers: {} };
      if (this.user.password === this.password2) {
        axios
          .post(url, body, config)
          .then((res) => {
            this.error = false;
            localStorage.setItem("status", this.user.status);
            this.$router.push({ name: "logIn" });
          })
          .catch((err) => {
            localStorage.setItem("status", this.user.status);
            this.$router.push({ name: "logIn" });
            if (err.response.status == 400) {
              this.error = true;
            }
          });
      } else {
        this.passwordError = true
      }
    },
    checkStatus: function (e) {
      if (e) {
        this.user.status = e;
        this.$emit("status", this.user.status);
      } else {
        this.user.status = e;
        this.$emit("status", this.user.status);
      }
    },
  },
};
</script>

<style>
.signUp_user {
  margin: 0;
  padding: 15px 0;
  padding-bottom: 70px;
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
.container_signUp_user {
  margin-top: 100px;
  border: 1px solid #b2cb4c;
  background-color: rgba(19, 19, 19, 0.75);
  border-radius: 10px;
  width: 50%;
  height: max-content;
  padding: 30px 0;
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
</style>