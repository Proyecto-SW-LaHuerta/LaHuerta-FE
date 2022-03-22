<template>
  <div class="products">
    <div class="products-container">
      <h1>¡¡ Bienvenid@ {{this.userName}} !!</h1>
      <hr />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <button type="button" class="btn btn-light">
            <div
              class="card text-center"
              style="width: 18rem"
              v-on:click="loadNational"
            >
              <img
                src="./media/nationalProd.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Frutas Nacionales</h5>
              </div>
            </div>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-light">
            <div
              class="card text-center"
              style="width: 18rem"
              v-on:click="loadImported"
            >
              <img
                src="./media/importedProd.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Frutas Importadas</h5>
              </div>
            </div>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-light">
            <div
              class="card text-center"
              style="width: 18rem"
              v-on:click="loadVegetable"
            >
              <img
                src="./media/vegetables.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Verduras - Hortalizas</h5>
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
  name: "Products",
  data: function () {
    return {
      is_auth: false,
      status: false,
      userName: "",
    };
  },
  methods: {
    loadNational: function () {
      this.$router.push({ name: "nationalProducts" });
    },
    loadImported: function () {
      this.$router.push({ name: "importedProducts" });
    },
    loadVegetable: function () {
      this.$router.push({ name: "vegetables" });
    },
    loadUserName: function () {
      this.userName = localStorage.getItem("user");
    },
  },
  created: function () {
    this.loadUserName();
  },
};
</script>

<style>
.products {
  margin: 0;
  padding: 110px 30px;
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
  overflow: auto;
  align-content: flex-start;
}
.products h1 {
  color: white;
  margin: 30px;
}
.products-container {
  height: max-content;
}
.products-container .btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  height: 242px;
}
.products-container .card-img-top {
  height: 161px;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
</style>