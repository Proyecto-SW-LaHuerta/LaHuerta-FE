<template>
  <div class="crud">
    <div class="crud-container">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-light">
            <div
              class="card text-center"
              style="width: 18rem"
              v-on:click="loadProductsCrud"
            >
              <img
                src="./media/products.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">CRUD Productos</h5>
              </div>
            </div>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-light">
            <div
              class="card text-center"
              style="width: 18rem"
              v-on:click="loadProvidersCrud"
            >
              <img
                src="./media/providers.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">CRUD Proveedores</h5>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Crud",
  data: function () {
    return {
      is_auth: false,
      status: false,
    };
  },
  methods: {
    loadProductsCrud: function () {
      this.$router.push({ name: "productsCrud" });
    },
    loadProvidersCrud: function () {
      this.$router.push({ name: "providersCrud" });
    },
  },
  created: function () {},
};
</script>

<style>
.crud {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./media/products_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.crud-container {
  margin-top: 96px;
  height: max-content;
}
.crud-container .btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  height: 242px;
}
.crud-container .card-img-top {
  height: 161px;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
</style>