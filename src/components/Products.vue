<template>
  <div class="products">
    <div class="products-container">
      <div class="row">
        <div class="col">
          <div class="card text-center" style="width: 18rem">
            <img
              src="../assets/nationalProd.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Frutas Nacionales</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center" style="width: 18rem">
            <img
              src="../assets/importedProd.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Frutas Importadas</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center" style="width: 18rem">
            <img
              src="../assets/vegetables.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Verduras - Hortalizas</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  background-image: url("../assets/products_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.products-container {
  margin-top: 96px;
  height: max-content;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
</style>