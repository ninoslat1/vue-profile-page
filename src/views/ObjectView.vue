<template>
  <div id="jumbotron">
    <ImageView/>
    <div ref="object" class="font-inter">
      <h1>Welcome to <span>Tambaksari Village</span></h1>
      <h3>Rowosari Subdistrict, Kendal Regency</h3>
      <p>
        In this section, you can see a list of local attractions that you can visit for a vacation with your family.
      </p>
      <div class="block lg:flex">
        <p>
          One of the main attractions in this village is its stunning natural beauty. Surrounded by green rice fields and stunning hills, the village offers a soothing view. You can enjoy the fresh country air while strolling among the vast rice fields. The sound of flowing river water adds to the tranquil atmosphere.
        </p>
        <p>
          Traveling in cold and cool areas such as peaks and waterfalls can provide an interesting and refreshing experience, such as feeling the cool breeze hitting your face and breathing in clean and fresh air. In addition, you will be treated to stunning scenery, such as lush green forests, beautiful hillsides, and charming waterfalls. In addition to enjoying the natural beauty, the peak and waterfall areas also offer a variety of interesting tourist activities. You can do trekking or hiking around the mountains, explore the hiking trails, or even swim in the natural pools near the waterfall.
        </p>
      </div>
    </div>
  </div>
  <div class="pt-[30vh] lg:pt-[45vh] container mx-auto px-4 py-8 font-qs">
    <p class="text-center text-2xl font-bold py-5">List of Attractions</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center" ref="picture">
      <div v-for="(image, index) in imageList" :key="index" class="max-w-lg w-full mx-auto">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img class="w-full h-56 object-cover object-center" :src="image.src" :alt="image.description"/>
          <div class="p-4">
            <h2 class="text-gray-800 font-bold text-xl mb-2">{{ image.description }}</h2>
            <p class="text-gray-600 text-sm line-clamp-1">Address: {{ image.address }}</p>
            <small v-if="image.price !== 0">Ticket Price: $ {{ image.price }}</small>
            <small v-else>Ticket Price: FREE</small>
            <div class="block text-center">
              <button class="btn btn-sm btn-success my-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              <a :href="image.links" target="_blank" class="font-inter">View GMaps</a></button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
  <FooterView/>
</template>

<script>
import {gsap} from 'gsap'
import ImageView from '../components/ImageView'
import imagesData from '../data/data.json'
import FooterView from '@/components/FooterView.vue'

export default {
  name: "ObjectView",
  components: {
    ImageView,
    FooterView
  },
  data() {
    return {
      imageList: []
    }
  },
  mounted() {
    const {object,picture} = this.$refs
    const timeline = gsap.timeline()
    timeline.from(object, {duration: 1, y:-25, opacity: 0.5 })
    timeline.from(picture, {duration: 1, y:-25, opacity: 0.5}).to(picture, {duration: 0.5, y:0, opacity: 1})
    this.imageList = imagesData.images
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-white text-xl md:text-3xl lg:text-7xl py-5 px-5 lg:px-10 font-bold
} 

h3 {
  @apply text-white text-lg md:text-2xl lg:text-5xl py-5 px-5 lg:px-10 font-normal
}
span {
    @apply text-[#42b983]
  }
  #jumbotron p {
    @apply text-white py-2 md:py-5 px-5 lg:px-10 text-xs md:text-xl font-semibold
  }
.container p {
  @apply text-black
}
</style>
