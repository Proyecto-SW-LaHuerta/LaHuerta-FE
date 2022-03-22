<template>
  <div id="app" class="app bg-dark">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          <img
            src="./assets/logo.png"
            alt="Logo"
            class="d-inline-block align-text-top logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <div class="button-container">
            <span class="navbar-text text-light">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  class="btn btn-dark menu text-light"
                  v-if="userStatus === 'false'"
                  v-on:click="loadHome"
                >
                  <i class="bi bi-house-fill text-light"></i> Inicio
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="userStatus === 'false'"
                  v-on:click="loadAbout"
                >
                  <i class="bi bi-people-fill text-light"></i> Nosotros
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="is_auth && userStatus === 'false'"
                  v-on:click="loadProduct"
                >
                  <i class="bi bi-basket-fill"></i> Productos
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="is_auth && userStatus === 'false'"
                  v-on:click="loadShopping"
                >
                  <i class="bi bi-cart-fill text-light"></i> Carrito
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="is_auth && userStatus === 'true'"
                  v-on:click="loadInventory"
                >
                  <i class="bi bi-box2-fill"></i> Inventario
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="is_auth && userStatus === 'true'"
                  v-on:click="loadCrud"
                >
                  <i class="bi bi-clipboard2-plus-fill"></i> CRUD's
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="!is_auth"
                  v-on:click="loadLogIn"
                >
                  <i class="bi bi-person-fill text-light" /> LogIn
                </button>
                <button
                  class="btn btn-dark menu text-light"
                  v-if="is_auth"
                  v-on:click="logout"
                >
                  <i class="bi bi-x-octagon-fill"></i> LogOut
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </nav>

    <div class="main-component">
      <router-view v-on:completedLogin="completedLogin"> </router-view>
    </div>

    <footer
      class="
        d-flex
        flex-wrap
        justify-content-between
        align-items-center
        py-3
        bg-dark
        footer
      "
    >
      <div class="col-md-4 d-flex align-items-center">
        <span class="text-light">&copy; 2022 La Huerta Supermercado</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a
            class="text-light"
            href="https://www.youtube.com/channel/UC_Qwl0a9d3uOZypIhA3p37g/videos"
            target="_blank"
            ><i class="bi bi-youtube"></i
          ></a>
        </li>
        <li class="ms-3">
          <a
            class="text-light"
            href="https://www.instagram.com/fruverhuerta/?hl=es"
            target="_blank"
            ><i class="bi bi-instagram"></i
          ></a>
        </li>
        <li class="ms-3">
          <a
            class="text-light"
            href="https://www.facebook.com/lahuertaduitama/"
            target="_blank"
            ><i class="bi bi-facebook"></i
          ></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
      userStatus: "false",
      userResult: [],
      shoppingData: [],
    };
  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("is_auth");
      if (this.is_auth) {
        if (this.userStatus === "false") {
          this.loadProduct();
        } else {
          this.loadCrud();
        }
      } else {
        this.loadHome();
      }
    },
    logout: function () {
      this.is_auth = false;
      localStorage.clear();
      this.verifyAuth();
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadHome: function () {
      this.$router.push({ name: "home" });
    },
    loadAbout: function () {
      this.$router.push({ name: "aboutUs" });
    },
    loadInventory: function () {
      this.$router.push({ name: "inventory" });
    },
    loadProduct: function () {
      this.$router.push({ name: "products" });
    },
    loadShopping: function () {
      this.$router.push({ name: "shoopingCart" });
    },
    loadUsersCrud: function () {
      this.$router.push({ name: "providersCrud" });
    },
    loadCrud: function () {
      this.$router.push({ name: "cruds" });
    },
    completedLogin: function (res, results) {
      this.userResult = JSON.stringify(results[0].status);
      this.userStatus = this.userResult;
      this.is_auth = true;
      localStorage.setItem("user", results[0].firstName);
      localStorage.setItem("is_auth", true);
      localStorage.setItem("token", res.data.key);
      this.verifyAuth();
    },
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
body {
  margin: 0;
  overflow: auto;
}
nav {
  color: #ffffff;
  background-color: rgba(19, 19, 19, 0.8) !important;
  opacity: 0.95;
}
.navbar .logo {
  width: 110px;
  margin-left: 40px;
}
.navbar .menu {
  margin: 8px 20px;
}
.navbar .menu:hover {
  border: 1px solid #b2cb4c;
  background-color: #b2cb4c;
}
.button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.main-component {
  height: 100%;
}
.footer {
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  padding: 0 30px;
  margin-bottom: 0px;
}
</style>