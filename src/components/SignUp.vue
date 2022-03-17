<template>
  <div class="signUp_user">
    <div class="container_signUp_user">
      <form class="row g-3" v-on:submit.prevent="processSignUpUser">
        <div class="col-md-6">
          <button type="submit" class="btn btn-primary">Cliente</button>
        </div>
        <div class="col-md-6">
          <button type="submit" class="btn btn-primary">Administrador</button>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nombre</label>
          <input type="text" class="form-control" v-model="user.first_name" required />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Apellido</label>
          <input type="text" class="form-control" v-model="user.last_name" required />
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
          <label for="inputAddress2" class="form-label">Fecha de Nacimiento</label>
          <input
            type="date"
            class="form-control"
            v-model="user.birthday"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Usuario</label>
          <input type="text" class="form-control" v-model="user.username" required />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Correo</label>
          <input type="text" class="form-control" v-model="user.email" required />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Contraseña</label>
          <input type="password" class="form-control" v-model="user.password1" required />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" v-model="user.password2" required />
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
        birthday: new Date().toJSON().toString(),
        date_joined: new Date().toJSON().toString(),
        email: "",
        first_name: "",
        is_active: true,
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
    processSignUpUser: function () {
      console.log(this.user);
      let url = "http://127.0.0.1:8000/rest-auth/registration/";
      let body = this.user;
      let config = { headers: {} };
      axios
        .post(url, body, config)
        .then((res) => {
          this.error = false;
          console.log(res);
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
  margin-top: 110px;
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