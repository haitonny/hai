<template>
  <div class="Welcome">
    <div class="grid grid-cols-1 py-4 mx-40">
      <div class="flex items-center">
        <img class="h-8" src="../../assets/images/logo.png" alt="" />
        <ul class="inline-flex ml-10">
          <li class="ml-8"><a href="">Catalog</a></li>
          <li class="ml-8"><a href="">My Store</a></li>
          <li class="ml-8"><a href="">Orders</a></li>
          <li class="ml-8"><a href="">Printify premium</a></li>
          <li class="ml-8"><a href="">Help Center</a></li>
        </ul>
        <a href="" class="grid grid-cols-4 ml-48 hover:bg-neutral-200">
          <img
            class="col-span-1"
            src="../../../public/img/default.svg"
            alt=""
          />
          <div class="col-span-2 truncate">
            My new store
          </div>
          <img
            class="h-2"
            src="../../../public/img/drop-down-arrow.svg"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="bg-neutral-200">
      <h2 class="py-10 font-bold">Welcome on board</h2>
      <div class="grid grid-cols-2 gap-32 px-40">
        <div class="">
          <p class="text-left mb-6 font-bold text-xl">Store setup checklist</p>
          <div class="container bg-neutral-000 text-left border-solid rounded">
            <div class="steps py-6 text-sm text-neutral-500">
              1 / 5 steps are completed
            </div>
            <ul>
              <li class="border-b border-solid border-neutral-300 mb-4">
                <a>
                  <input class="mb-6 mr-4" type="radio" />Create a Printify
                  account</a
                >
              </li>
              <li class="border-b border-solid border-neutral-300 mb-4">
                <a href=""
                  ><input class="mb-6 mr-4" type="radio" /> Design your first
                  product</a
                >
              </li>
              <li class="border-b border-solid border-neutral-300 mb-4">
                <a href=""
                  ><input class="mb-6 mr-4" type="radio" /> Add a store name</a
                >
              </li>
              <li class="border-b border-solid border-neutral-300 mb-4">
                <a href=""
                  ><input class="mb-6 mr-4" type="radio" /> Add your personal
                  details</a
                >
              </li>
              <li class="pb-8">
                <a href=""
                  ><input class="mb-4 mr-4" type="radio" /> Connect your store
                  and start selling</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <p class="text-left pb-6 font-bold text-xl">Next step</p>
          <div class="container bg-neutral-000 border-solid rounded leading-6">
            <img
              class="pt-16 ml-32"
              src="../../../public/img/design_product.svg"
              alt=""
            />
            <h3 class="mt-8 font-bold">Design your first product</h3>
            <p class="text-xs text-neutral-500 mb-10">
              Add your artwork or text to a product
            </p>
            <v-button class="" tone="success" priority="high"
              >Design product</v-button
            >
          </div>
        </div>
      </div>
      <div class="card">
        <p class="text-left font-bold mt-20 text-lg">Tips from Printify</p>
        <div class="grid grid-cols-3 gap-8 mx-40">
          <div class="">
            <img src="../../../public/img/icons/Print.png" alt="" />
          </div>
          <div class="">
            <img src="../../../public/img/icons/How-to.jpg" alt="" />
          </div>
          <div class="">
            <img src="../../../public/img/icons/Must_red.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VButton from "@/components/VButton";
export default {
  name: "Welcompage",
  components: {
    VButton,
  },
};
</script>

<style scoped></style>
