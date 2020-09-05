<template>
  <div class="Welcome">
    <div class="grid grid-cols-1 py-4">
      <div class="flex items-center mx-40">
        <img class="h-8" src="../../assets/images/logo.png" alt="" />
        <ul class="inline-flex ml-10">
          <li class="ml-8">Catalog</li>
          <li class="ml-8">My Store</li>
          <li class="ml-8">Orders</li>
          <li class="ml-8">Printify premium</li>
          <li class="ml-8">Help Center</li>
        </ul>
        <div class="dropdown ml-48">
          <div class="dropbtn">
            My new store
          </div>
        </div>
      </div>
    </div>
    <div class="bg-neutral-300">
      <h2 class="py-10">Welcome on board</h2>
      <div class="grid grid-cols-2 gap-32">
        <div class="">
          <p>Store setup checklist</p>
          <div class="container bg-neutral-000">
            <div class="steps">
              1 / 5 steps are completed
            </div>
            <ul>
              <li>
                <a href=""><input type="radio" /> Create a Printify account</a>
              </li>
              <li>
                <a href=""><input type="radio" /> Design your first product</a>
              </li>
              <li>
                <a href=""><input type="radio" /> Add a store name</a>
              </li>
              <li>
                <a href=""><input type="radio" /> Add your personal details</a>
              </li>
              <li>
                <a href=""
                  ><input type="radio" /> Connect your store and start
                  selling</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <p>Next step</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Welcompage",
};
</script>

<style scoped></style>
