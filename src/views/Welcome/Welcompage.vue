<template>
  <div class="Welcome">
    <div class="grid grid-cols-1 py-4 mx-40">
      <div class="flex items-center">
        <img class="h-8" src="../../assets/images/logo.png" alt="" />
        <ul class="inline-flex ml-10">
          <li class="ml-8 hover:text-success-500">
            <a href="" class="flex"
              >Catalog<img
                class="h-2 transform hover:rotate-180 duration-200 mt-2 ml-2"
                src="../../../public/img/drop-down-arrow.svg"
                alt=""
              />
            </a>
          </li>
          <li class="ml-8 hover:text-success-500"><a href="">My Store</a></li>
          <li class="ml-8 hover:text-success-500"><a href="">Orders</a></li>
          <li class="ml-8 hover:text-success-500">
            <a href="">Printify premium</a>
          </li>
          <li class="ml-8 hover:text-success-500">
            <a href="">Help Center</a>
          </li>
        </ul>
        <a href="" class="grid grid-cols-3 ml-48 hover:bg-neutral-200">
          <div class="col-span-2 flex py-2">
            <img
              class="rounded-full bg-neutral-200 mr-2"
              src="../../../public/img/default.svg"
              alt=""
            />
            <p class="truncate">My new store</p>
          </div>
          <div class="col-span-1 py-2 mt-2 ml-4">
            <img
              class="h-2"
              src="../../../public/img/drop-down-arrow.svg"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
    <div class="bg-neutral-200">
      <h2 class="py-10 font-bold">Welcome on board</h2>
      <div
        class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-32 px-40"
      >
        <div class="">
          <p class="text-left mb-6 font-bold text-xl">Store setup checklist</p>
          <div class="container bg-neutral-000 text-left border-solid rounded">
            <div class="steps py-6 text-sm text-neutral-500">
              1 / 5 steps are completed
            </div>
            <ul>
              <li class="border-b border-solid border-neutral-300 mb-4">
                <a href="">
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
      <div class="card pb-32">
        <div class="grid grid-cols-1 text-left mx-40 mb-6">
          <p class="font-bold mt-20 text-lg">Tips from Printify</p>
        </div>
        <div class="grid gap-8 mx-40 xl:grid-cols-3">
          <div class="bg-neutral-000 rounded-sm sm:w-full xl:w-full">
            <img
              class="w-full h-32 object-cover border-2 rounded-t-sm border-neutral-000"
              src="../../../public/img/icons/Print.png"
              alt=""
            />
            <h6 class="my-4 text-left mx-6 font-bold leading-tight">
              Print on Demand products under $20 to sell online
            </h6>
            <a href=""
              ><p
                class="text-success-500 mx-6 mt-10 text-left hover:text-success-600"
              >
                Read more
              </p></a
            >
          </div>
          <div class="bg-neutral-000 rounded-sm">
            <img
              class="w-full h-32 object-cover border-2 rounded-t-sm border-neutral-000"
              src="../../../public/img/icons/How-to.jpg"
              alt=""
            />
            <h6 class="my-4 text-left mx-6 font-bold leading-tight">
              How to find and hire the best print designer
            </h6>
            <a href=""
              ><p
                class="text-success-500 mx-6 mt-10 mb-4 text-left hover:text-success-600"
              >
                Read more
              </p></a
            >
          </div>
          <div class="bg-neutral-000 rounded-sm">
            <img
              class="w-full h-32 object-cover border-2 rounded-t-sm border-neutral-000"
              src="../../../public/img/icons/Must_red.png"
              alt=""
            />
            <h6 class="my-4 text-left mx-6 font-bold">
              Must-Read Design Guide
            </h6>
            <a href=""
              ><p
                class="text-success-500 mx-6 mt-12 mb-2 text-left hover:text-success-600"
              >
                Read more
              </p></a
            >
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
