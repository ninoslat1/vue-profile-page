<template>
  <div class="navbar bg-transparent font-qs">
  <div class="navbar-start">
    <details class="dropdown lg:hidden">
      <summary class="m-1 btn bg-transparent border-none text-[#42b983] hover:bg-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </summary>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-[#42b983] text-slate-900 rounded-box w-52 px-5 space-y-5">
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'object'}">Attractions</router-link>
      <router-link :to="{name: 'profile'}">Village Profile</router-link>
      <FormView/>
    </ul>
    </details>
    <div class="px-0 lg:px-10">
      <a href="#" class="flex items-center">
        <img src="../public/assets/download.png" class="h-8 w-6 lg:h-16 lg:w-14"/><p class="text-[#42b983] font-bold text-xs md:text-md lg:text-3xl"><span class="text-xs md:text-md lg:text-2xl px-2.5 text-white md:font-semibold">X</span>Tambaksari</p>
      </a>
    </div>
  </div>
  <div class="navbar-end hidden lg:flex">
    <nav class="items-center">
        <router-link to="/">Home</router-link>
        <router-link :to="{name: 'object'}">Attractions</router-link>
        <router-link :to="{name: 'profile'}">Village Profile</router-link>
        <FormView/>
    </nav>
  </div>
  </div>
  <router-view/>
</template>

<script>
import FormView from './components/FormView.vue';
export default {
    components: {
      FormView
    },
    setup(){
      window.addEventListener('click', function(e) {
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
          if (!dropdown.contains(e.target)) {
            dropdown.open = false;
          }
        });
      })
    }
  }
</script>


<style lang="postcss" scoped>
nav {
  @apply flex p-7 w-[75vw] justify-evenly;
}

nav a {
  @apply font-bold text-white
}

nav a.router-link-exact-active {
  @apply text-[#42b983]  border-b-[#42b983] border-b-4;
}

nav a:hover {
  @apply  border-b-[#42b983] border-b-4 duration-100;
}
</style>
