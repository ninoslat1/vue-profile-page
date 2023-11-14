<template>
  <footer>
  <nav>
    <div class="px-0 lg:px-10">
      <div href="#" class="flex items-center">
        <a href="#"><img src="../../public/assets/download.png" class="h-8 w-6 lg:h-16 lg:w-14"/></a>
        <b class="px-2.5 lg:px-10">Copyright © 2023 - All right reserved by Desa Tambaksari</b>
      </div>
    </div>
  </nav> 
</footer>
</template>

<style lang="postcss" scoped>
footer {
    @apply footer footer-center text-xs md:text-base bg-transparent rounded relative bottom-0 left-0 text-green-900 py-5 bg-green-500
}
nav {
    @apply grid grid-flow-col gap-4
}
router-link {
    @apply link link-hover
}
</style>