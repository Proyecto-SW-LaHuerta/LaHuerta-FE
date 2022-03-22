<template>
  <div class="inventory">
    <h1>INVENTARIO</h1>
    <br />
    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" class="text-center">Nombre</th>
            <th scope="col" class="text-center">Precio (lb)</th>
            <th scope="col" class="text-center">Impuesto</th>
            <th scope="col" class="text-center">Stock</th>
          </tr>
        </thead>
        
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shooping",
  data: function () {
    return {
      categories: [],
      products: [],
      product: {
        name: "",
        tax: "",
        price: "",
        stock: "",
        categoryId: "",
        picture: "",
      },
      imagePreview: null,
    };
  },
  methods: {
  },
  created: function () {
  },
};
</script>

<style>
.inventory {
  color: white;
  margin: 0;
  padding: 130px 35px;
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
  position: fixed;
  display: block;
  background-image: url("../assets/inventory_background.jpg");
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  align-content: flex-start;
}
.inventory h1 {
  margin-top: 20px;
  text-align: center;
}
.container_inventory {
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
</style>