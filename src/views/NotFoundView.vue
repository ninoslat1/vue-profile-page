<template>
  <div>
      <ImageView/>
      <div class="text-center w-full py-[25vh] lg:py-[37.5vh] text-white font-qs px-5">
          <h1 class="text-6xl text-[#42b983] font-extrabold">404 Page Not Found</h1>
          <h3 class="text-4xl text-[#42b983]">Sorry, the page doesn't exist</h3>
          <br/>
          <button @click="redirect">Home</button>
          <button @click="back">Back</button>
      </div>
  </div>
</template>

<script>
import ImageView from '@/components/ImageView.vue'
export default {
    components: {
        ImageView
    },
    methods: {
        redirect() {
            this.$router.push({name: 'home'})
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="postcss" scoped>
button {
    @apply m-2.5 bg-lime-600 text-sm text-[white] p-2.5 rounded-md border-0 text-center
}
</style>