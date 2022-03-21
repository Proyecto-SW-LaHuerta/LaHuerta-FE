<template>
  <div class="products">
    <div class="products-container">
      <div class="row">
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
  name: "App",
  data: function () {
    return {
      is_auth: false,
      status: false,
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
  },
  created: function () {},
};
</script>

<style>
.products {
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
.products-container {
  margin-top: 96px;
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