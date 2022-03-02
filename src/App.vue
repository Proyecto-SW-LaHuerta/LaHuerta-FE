<template>
  <div id="app" class="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
          <span class="navbar-text">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                class="btn btn-dark menu"
                v-if="!is_auth"
                v-on:click="loadLogIn"
              >
                LogIn
              </button>
              <button
                class="btn btn-dark menu"
                v-if="!is_auth"
                v-on:click="loadSignUp"
              >
                Register
              </button>
            </div>
          </span>
        </div>
      </div>
    </nav>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
      >
      </router-view>
    </div>

    <div class="footer bg-dark">
      <div class="container">
        <footer
          class="
            d-flex
            flex-wrap
            justify-content-between
            align-items-center
            py-3
            my-4
            border-top
          "
        >
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap" />
              </svg>
            </a>
            <span class="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter" /></svg
              ></a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram" /></svg
              ></a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook" /></svg
              ></a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
    };
  },
  components: {},
  methods: {
    verifyAuth: function () {
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {},
    completedSignUp: function (data) {},
  },
  created: function () {
    this.verifyAuth();
  },
};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
body {
  margin: 0 0 0 0;
  background-color: #f2f2f2;
}
nav {
  background-color: rgba(19, 19, 19, 0.8) !important;
}
.navbar .logo {
  width: 110px;
  margin-left: 20px;
}
.navbar .menu {
  margin: 8px 15px;
}
.navbar .menu:hover {
  border: 1px solid #b2cb4c;
  background-color: #b2cb4c;
}
.main-component {
  height: 90vh;
}
.footer {
  bottom: 0;
  width: 100%;
  height: fit-content;
  position: fixed;
  color: #e5e7e9;
  background-color: rgba(19, 19, 19, 0.8);
}
.footer h4 {
  margin-bottom: 15px;
  text-align: center;
}
</style>