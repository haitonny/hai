<template>
  <div class="hello">
    <div class="grid grid-cols-2 h-screen">
      <div class="self-center w-1/2 mx-auto mt-24">
        <img class="h-10 inline" src="../../assets/images/logo.png" alt="" />
        <h6 class="my-6 font-semibold text-base">Welcome back</h6>
        <a class="inline-flex w-full border border-neutral-400 cursor-pointer my-6 items-center py-2">
          <img class="h-4 inline ml-4" src="../../assets/images/G__Logo.svg.png" alt="" />
          <p class="font-medium ml-10 text-base">Continue With Google</p>
        </a>
        <p class="mb-6">or</p>
        <input class="form-input mb-6 w-full" type="text" placeholder="Email" /><br />
        <input class="form-input w-full mb-20" type="text" placeholder="Password" />
        <div class="">
          <v-button class="mr-2 w-full" tone="success" priority="high">Sign In</v-button>
          <p class="text-success-500 text-left">Forgot password?</p>
        </div>
        <div class="mt-16 inline-flex">
          <p>New to Printify?</p>
          <a class="text-success-500 cursor-pointer"> Sign Up</a>
        </div>
      </div>
      <div class="bg-fixed tracking-tight bg-scroll bg-center" style="background-image: url('img/order_routing.png');">
        <div class="lg:max-w-1/4 mt-32">
          <div class="bg-neutral-000 py-2 rounded-r">
            <h5 class="text-success-500 font-bold bg-neutral-000 border-l-4 rounded-l-sm ml-2 py-1">{{ New }}</h5>
          </div>
          <div class="text-left pt-8 ml-6">
            <p class="font-bold my-8 leading-none text-5xl">{{ Order }}</p>
            <h6 class="mb-8 font-semibold leading-none">{{ Printify }}</h6>
            <p class="mb-20 text-xs">{{ If }}</p>
            <p class="font-semibold text-xs">{{ Enable }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VButton from "@/components/VButton";
  export default {
    name: "LoginPage",
    components: { VButton },
    data() {
      return {
        New: "NEW FEATURE",
        Order: "Order Routing ",
        Printify: "Printify is the safest Print provider network. ",
        If: "If you don't plan to use the background attachment utilities in your project, you can disable them entirely by setting ",
        Enable: "Enable in your store settings. More info in our help center",
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss"></style>
