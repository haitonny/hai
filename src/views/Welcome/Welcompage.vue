<template>
  <div class="Welcome ">
    <div class="grid grid-cols-1 py-4 mx-40 ">
      <div class="flex items-center">
        <img class="h-8" src="../../assets/images/logo.png" alt="" />
        <ul class="inline-flex ml-10">
          <li class="ml-8">
            <div class="catalog transition ease-in duration-700" @mouseover="hover = true" @mouseleave="hover = false" >
               <a href="" class="flex hover:text-success-500"> Catalog
                <img class="h-2 transform hover:rotate-180 duration-200 mt-2 ml-2" src="../../../public/img/drop-down-arrow.svg" alt=""/>
              </a>
             </div>
            <div class="grid grid-cols-6 mega absolute w-full right-0 mt-6 bg-neutral-000 shadow-2xl border-t border-neutral-200" v-if="hover">
              <div class="font-bold my-6">
                <a class="" href="">Bestsellers</a>
                <a class="block my-2" href="">AOP Clothing</a>
                <a class="block my-2" href="">Eco-friendly</a>
                <a class="block my-2" href="">Fall Bestsellers</a>
                <a class="block my-2" href="">New Arrivals</a>
                <a class="block my-2" href="">Print Providers</a>
                <a class="block my-2" href="">Brands</a>
              </div>
              <div class="my-6">
              <a class="font-bold" href="">Men's Clothing</a>
                <a class="block my-2 text-sm" href="">T-shirts</a>
                <a class="block my-2 text-sm" href="">Hoodies</a>
                <a class="block my-2 text-sm" href="">Long Sleeves</a>
                <a class="block my-2 text-sm" href="">Shoes</a>
                <a class="block my-2 text-sm" href="">Sportswear</a>
                <a class="block text-sm" href="">Sweatshirts</a>
              </div>
              <div class="my-6">
              <a class="font-bold" href="">Women's Clothing</a>
                <a href="" class="block my-2 text-sm">T-shirts</a>
                <a href="" class="block my-2 text-sm">Hoodies</a>
                <a href="" class="block my-2 text-sm">Long Sleeves</a>
                <a href="" class="block my-2 text-sm">Pants</a>
                <a href="" class="block my-2 text-sm">Shoes</a>
                <a href="" class="block my-2 text-sm">Skirts & Dresses</a>
              </div>
              <div class="my-6">
              <a class="font-bold" href="">Accessories</a>
                <a class="block my-2 text-sm" href="">Bags</a>
                <a class="block my-2 text-sm" href="">Phone Cases</a>
                <a class="block my-2 text-sm" href="">Socks</a>
                <a class="block my-2 text-sm" href="">Underwear</a>
                <a class="block my-2 text-sm" href="">Other</a>
                <a class="block text-sm" href="">Hats</a>
              </div>
              <div class="my-6">
              <a class="font-bold" href="">Home & Living</a>
                <a class="block my-2 text-sm" href="">Art & Wall Decor</a>
                <a class="block my-2 text-sm" href="">Bathroom</a>
                <a class="block my-2 text-sm" href="">Blankets</a>
                <a class="block my-2 text-sm" href="">Mugs</a>
                <a class="block my-2 text-sm" href="">Pillows & Covers</a>
                <a class="block text-sm" href="">Stationery</a>
              </div>
                <div class="my-6">
              <a class="font-bold" href="">Kids' Clothing</a>
                  <a class="block my-2 text-sm" href="">T-shirts</a>
                  <a class="block my-2 text-sm" href="">Sweatshirts</a>
                  <a class="block my-2 text-sm" href="">Long Sleeves</a>
                  <a class="block my-2 text-sm" href="">Bodysuits</a>
                  <a class="block text-sm" href="">Bibs</a>
                </div>
            </div>
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
        <div class="relative inline-block ">
        <div href="" class="grid grid-cols-3 ml-48 hover:bg-neutral-200 cursor-pointer z-10 relative" @click="isOpen =!isOpen">
          <div class="col-span-2 flex py-2">
            <img
              class="rounded-full bg-neutral-200 mr-2 "
              src="../../../public/img/default.svg"
              alt=""
            />
            <p class="truncate">My new store</p>
          </div>
          <div class="col-span-1 py-2 mt-2 ml-4">
            <img  class="h-2"
              src="../../../public/img/drop-down-arrow.svg"
              alt=""/>
          </div>
        </div>
          <button class="fixed inset-0 h-full w-full bg-neutral-500 opacity-0 cursor-default" v-if="isOpen" @click="isOpen = false"></button>
          <div class="absolute bg-white z-10 py-2 mt-2 right-0 shadow-md rounded-md w-64" v-if="isOpen">
            <div class="w-full cursor-pointer inline-flex bg-neutral-200 hover:text-white hover:bg-success-500 ">
              <div class=""><img class="rounded-full bg-white mr-4 ml-3 my-3" src="../../../public/img/default.svg" alt=""/></div>
              <div class="text-left leading-5 my-3"><p class="font-semibold">My new store</p><p class="text-xs text-neutral-500">Not connected</p></div>
            </div>
            <div class="cursor-pointer text-sm border-t-2 border-neutral-300 pt-2 hover:text-success-500 ">
              <div class="inline-flex w-full ml-4"><img class="mr-4 h-4 mt-1" src="../../../public/img/gear.svg" alt=""/><p>Manage My Stores</p></div>
            </div>
          </div>
         </div>
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
              class="pt-16 inline"
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
          <div class="bg-neutral-000 rounded-sm sm:w-full xl:w-full shadow-2xl ">
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
          <div class="bg-neutral-000 rounded-sm shadow-2xl">
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
          <div class="bg-neutral-000 rounded-sm shadow-2xl">
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
  data (){
    return{
      isOpen: false,
      hover: false
    }
  },
};
</script>

<style scoped></style>
