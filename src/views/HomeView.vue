<template>
  <div>
    <ImageView/>
    <div ref="home" class="font-inter">
      <h1>Welcome to <span>Tambaksari Village</span></h1>
      <h3>Rowosari Subdistrict, Kendal Regency</h3>
      <div class="block lg:flex">
        <p>
          In ancient times, namely before 1981, Tambaksari Village, had not yet become a Village Government and was still integrated with Tambaksumur Village which was under the sub-district of Batujaya, and was headed by a Village Head because the area was very wide, so in 1981 Tambaksumur Village was divided or divided into two villages, namely Tambaksumur Village and Tambaksari Village for Tambaksari Village led by Village Head H.M. SUHERI, from 1981 to 2001, while from 2001 to the present led by Village Head M. Arum. The fundamental reason why Tambaksari Village was divided into two villages was to equalize each region and to maximize services to the community. The expansion of Tambaksari Village occurred in 1981.
        </p>
        <p>
          The geographical location of Tambaksari Village in Tirtajaya Sub-district is at a distance of 8 kilometers from the North Coast of Java Island with an altitude of 3 meters above sea level. The average air temperature is 30ºC with annual rainfall ranging from 1-100-3,200 mm/year. The area of Tirtajaya sub-district is approximately 3,276.84 ha, covering land, rice fields and pond areas with a total population of 8,194 men and women. The distance of Tambaksari Village from the sub-district capital is approximately 5.5 km, while the distance to the regency capital is approximately 47 kilometers if traveled by motorized vehicle, the distance to the sub-district city takes 11 minutes and 1 hour 13 minutes if to the regency capital.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from 'gsap'
import ImageView from '../components/ImageView'

export default {

  name: 'HomeView',
  components: {
    ImageView
  },
  mounted() {  
    const {home} = this.$refs
    const timeline = gsap.timeline()
    timeline.from(home, {duration: 1, y:-25, opacity: 0.5 })
  },
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
p {
    @apply text-white py-2 md:py-5 px-5 lg:px-10 text-[10px] md:text-sm lg:text-lg font-semibold
  }
.overlay {
    @apply absolute w-36 h-32 lg:w-72 lg:h-64 opacity-0 transition-opacity duration-[0.3s] bg-[rgba(0,0,0,0.5)] left-0 top-0 hover:opacity-100;
  }
.overlay-content {
    @apply absolute -translate-x-2/4 -translate-y-2/4 text-center left-2/4 top-2/4;
  }

</style>
