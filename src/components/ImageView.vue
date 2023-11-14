<template>
    <div class="bg-green-300 w-full h-full"></div> 
    <img class="my-component" 
         src= 
         "../../public/assets/image.png"/>    
</template>
  
  <style lang="postcss" scoped>
  div {
    @apply bg-green-300 w-full h-full
  }
  .my-component {
    @apply w-full absolute top-0 -z-50 h-[100vh] object-fill bg-no-repeat
  }
</style>