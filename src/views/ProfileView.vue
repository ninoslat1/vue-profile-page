<template>
    <div id="jumbotron">
        <ImageView/>
        <div ref="profile" class="font-inter">
            <h1>Welcome to <span>Tambaksari Village</span></h1>
            <h3>Rowosari Subdistrict, Kendal Regency</h3>
            <p>
                In this section, you can see the village profile which consists of the vision and mission of the village and the potential of Tambaksari Village.
            </p>
            <div class="block lg:flex">
                <p class="grow">
                    The vision of Tambaksari Village is to become an advanced, prosperous, and environmentally sound village. The village aims to create a society that lives in a state of prosperity, has fair access to resources and development opportunities, and preserves the environment as a valuable legacy for future generations.
                </p>
                <p class="grow-0">
                    The mission of Tambaksari Village includes several important aspects. First, the village is committed to developing the livestock sector by improving the quality and productivity of livestock. Second, Tambaksari Village also focuses on developing the fisheries sector. With its coastal location, the village has access to abundant marine resources. Third, Tambaksari Village has great potential in the marine tourism sector. With beautiful beaches, clear sea water, and amazing underwater biodiversity, the village offers attractive tourism potential. Lastly, Tambaksari Village also pays attention to the agricultural sector as one of its important potentials. The village has fertile agricultural land that can be utilized to grow various types of food and horticultural crops.
                </p>
            </div>
            
        </div>
    </div>
    <div class="pt-[30vh] lg:pt-[45vh] container mx-auto px-4 py-8" ref="detail">
        <p class="text-center text-4xl font-bold py-5 font-qs">Village Profile</p>
        <p class="text-center text-2xl font-bold py-5 font-qs">Village Vision and Mission</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center text-center">
            <div class="mx-auto py-2">
                <div class="collapse collapse-arrow">
                    <input type="checkbox"/> 
                    <div class="collapse-title text-xl font-medium">
                        <div class="text-[#42b983] py-2 border-b-[#42b983] border-b-4 w-full sm:w-[25vw] md:w-[50vw] lg:w-[10vw] mx-auto font-qs">Village Vision</div>
                    </div>
                    <div class="collapse-content font-inter"> 
                        <p>
                            The vision of Tambaksari Village is <b>Realization of Professional, Responsive and Accountable Public Services in Tirtajaya District, Karawang Regency.</b> The village aims to create a community that lives in a state of prosperity, has fair access to resources and development opportunities, and preserves the environment as a valuable legacy for future generations.
                        </p>
                    </div>
                </div>
            </div> 
            <div class="mx-auto py-2">
                <div class="collapse collapse-arrow">
                    <input type="checkbox"/> 
                    <div class="collapse-title text-xl font-medium">
                        <div class="text-[#42b983] py-2 border-b-[#42b983] border-b-4 w-full sm:w-[25vw] md:w-[50vw] lg:w-[10vw] mx-auto font-qs">Village Mission</div>
                    </div>
                    <div class="collapse-content font-inter"> 
                        <ul class="list-disc text-sm text-left">
                            <li class="py-2 lg:py-1">
                                First, the village is committed to developing the livestock sector by improving the quality and productivity of livestock. Tambaksari Village has extensive and fertile land that can be used to raise cattle, goats, and chickens. By paying attention to good management, livestock health, and the use of appropriate technology, the village seeks to increase farmers' income and fulfill the animal protein needs of the community.
                            </li>
                            <li class="py-2 lg:py-1">
                                Second, Tambaksari Village also focuses on developing the fisheries sector. With its coastal location, the village has access to abundant marine resources. The village encourages local fishermen to use modern technology to catch fish, maintain the sustainability of marine resources, and increase the added value of fishery products. Through sustainable management, Tambaksari Village hopes to increase fishermen's income and develop local and regional markets for fishery products.
                            </li>
                            <li class="py-2 lg:py-1">
                                Third, Tambaksari Village has great potential in the marine tourism sector. With beautiful beaches, clear seawater and amazing underwater biodiversity, the village offers attractive tourism potential. The village is working to develop environmentally friendly tourism facilities such as inns, restaurants and recreational activities at sea. By doing so, Tambaksari Village hopes to attract local and foreign tourists, as well as increase the income of the local community.
                            </li>
                            <li class="py-2 lg:py-1">
                                Finally, Tambaksari Village also pays attention to the agricultural sector as one of the important potentials. The village has fertile agricultural land that can be utilized to grow various types of food and horticultural crops. The village strives to increase agricultural productivity through the use of modern farming techniques, proper fertilization, and crop diversification. In this way, Tambaksari Village hopes to meet local food needs, increase farmers' income, and promote organic and sustainable agriculture.
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        <p class="text-center text-2xl font-bold py-5 font-qs">Village Potential</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-center">
            <div class="mx-auto py-2">
                <div class="collapse collapse-arrow">
                    <input type="checkbox"/> 
                    <div class="collapse-title text-xl font-medium">
                        <div class="text-[#42b983] py-2 border-b-[#42b983] border-b-4 w-full sm:w-[25vw] md:w-[50vw] lg:w-[10vw] mx-auto font-qs">Livestock Sector</div>
                    </div>
                    <div class="collapse-content font-inter"> 
                        <img src="../../public/01e4d352-90b1-4e5a-9e74-c73963997a62_169.jpeg"/>
                        <br>
                        <p>
                            Animal husbandry is one of the potentials that can be developed in Tambaksari Village, because many residents of Tambaksari Village keep livestock that they use for trading, including native chickens, ducks, goats, sheep. Animal husbandry in Tambaksari Village can develop because it is supported by sources of animal feed that come from the harvest of rice fields and residents also plant grass for their livestock week.
                        </p>
                    </div>
                </div>
            </div> 
            <div class="mx-auto py-2">
                <div class="collapse collapse-arrow">
                    <input type="checkbox"/> 
                    <div class="collapse-title text-xl font-medium">
                        <div class="text-[#42b983] py-2 border-b-[#42b983] border-b-4 w-full sm:w-[25vw] md:w-[50vw] lg:w-[10vw] mx-auto">Marine Sector</div>
                    </div>
                    <div class="collapse-content"> 
                        <img src="../../public/assets/Pantai-Sarakan.jpg.png"/>
                        <br>
                        <p>
                            Tambaksari Village has a coastal area that has developed with processed fish obtained from fish catches, especially milkfish. These preparations include milkfish presto, milkfish nuggets, milkfish ambon, milkfish presto, milkfish meatballs, milkfish brain-brain, milkfish dragon feet, milkfish sabei gepuk. The processed potential of milkfish has been very developed until it is imported abroad, especially Japan and Korea so that the potential of marine and fisheries is very well utilized.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mx-auto py-2">
                <div class="collapse collapse-arrow">
                    <input type="checkbox"/> 
                    <div class="collapse-title text-xl font-medium">
                        <div class="text-[#42b983] py-2 border-b-[#42b983] border-b-4 w-full sm:w-[25vw] md:w-[50vw] lg:w-[10vw] mx-auto">Agriculture Sector</div>
                    </div>
                    <div class="collapse-content"> 
                        <img src="../../public/rohman cs.jpg"/>
                        <br>
                        <p>
                            Most of the Tambaksari people work as farmers. There are 4,200 hectares of ponds owned by two villages, Tambaksari Village and Tambaksumur Village. Tirtajaya Sub-district has a beach (sea), a small part of the community who are fishermen, who depend on their lives through catching fish at sea. In addition to the above potential, Tirtajaya sub-district also has petroleum resources with several oil wells, both those that are already producing and oil sources that will be explored.
                        </p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    <FooterView/>
</template>

<script>
import {gsap} from 'gsap'
import ImageView from '@/components/ImageView.vue';
import FooterView from '@/components/FooterView.vue';
export default {
    components: {
        ImageView,
        FooterView
    },
    mounted() {
        const {profile,detail} = this.$refs
        const timeline = gsap.timeline()
        timeline.from(profile, {duration: 1, y:-25, opacity: 0.5 })
        timeline.from(detail, {duration: 1, y:-25, opacity: 0.5}).to(detail, {duration: 0.5, y:0, opacity: 1})
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
    @apply text-white py-2 md:py-5 px-5 lg:px-10 text-[10px] md:text-sm lg:text-lg font-semibold
  }

img {
    @apply w-[500px] h-[250px]
}
</style>