<template>
  <div class="providerCrud">
    <h1>CRUD Proveedores</h1>
    <div class="container_crud_provider">
      <form class="row g-2" v-on:submit.prevent="createProvider">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nombre</label>
          <input
            v-model="provider.name"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Telefono</label>
          <input
            v-model="provider.phoneNumber"
            class="form-control"
            type="number"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">Oferta</label>
          <input
            v-model="provider.offer"
            class="form-control"
            type="number"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputAddress2" class="form-label">Direccion</label>
          <input
            v-model="provider.address"
            class="form-control"
            type="text"
            required
          />
        </div>
        <div class="col-md-2"></div>
        <hr />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-success" type="submit">
            Agregar Nuevo Proveedor
          </button>
        </div>
      </form>
    </div>

    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" class="text-center">Nombre</th>
            <th scope="col" class="text-center">Telefono</th>
            <th scope="col" class="text-center">Direccion</th>
            <th scope="col" class="text-center">Oferta</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="prov.providerId" v-for="prov in providers">
            <td class="text-center">
              {{ prov.name }}
            </td>
            <td class="text-center">
              {{ prov.phoneNumber }}
            </td>
            <td class="text-center">
              {{ prov.address }}
            </td>
            <td class="text-center">
              {{ prov.offer }}
            </td>
            <td class="text-center">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="deleteProvider(prov.providerId)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="!error"
    >
      El <strong>proveedor</strong> se agrego correctamente
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="!errorDelete"
    >
      El <strong>proveedor</strong> se elimino correctamente
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-if="error"
    >
      El <strong>proveedor</strong> no se pudo agregar
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-if="errorDelete"
    >
      El <strong>proveedor</strong> no se pudo eliminar
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProvidersCrud",
  data: function () {
    return {
      errorDelete: false,
      error: false,
      providers: [],
      provider: {
        name: "",
        phoneNumber: "",
        offer: "",
        address: "",
      },
    };
  },
  methods: {
    listProviders: function () {
      let url = "https://la-huerta-be.herokuapp.com/providers/";
      let config = { headers: {} };
      axios
        .get(url, config)
        .then((res) => {
          this.providers = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteProvider: async function (id) {
      try {
        let url = "https://la-huerta-be.herokuapp.com/provider/" + id + "/";
        let config = { headers: {} };
        await axios.delete(url, config);
        this.listProviders();
        this.errorDelete = false;
      } catch (err) {
        this.errorDelete = true;
      }
    },
    createProvider: async function () {
      try {
        let url = "https://la-huerta-be.herokuapp.com/providers/";
        let body = this.provider;
        let config = { headers: {} };
        let result = await axios.post(url, body, config);
        this.listProviders();
        this.error = false;
      } catch (err) {
        this.error = true;
      }
    },
  },
  created: function () {
    this.listProviders();
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.providerCrud {
  color: white;
  margin: 0;
  padding: 120px 35px;
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: block;
  background-image: url("./media/providers_background.jpg");
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.container_crud_provider {
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
.crud-container {
  height: max-content;
}
.alert.alert-secondary {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 0rem;
}
.alert.alert-success.alert-dismissible.fade.show {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 200px;
}
.alert.alert-danger.alert-dismissible.fade.show {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 200px;
}
</style>