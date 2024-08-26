<template>
  <div class="container">
    <header class="flex justify-between items-center my-4">
      <!-- Burger Menüsü -->
      <div class="sm:hidden burger-menu">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Menü Öğeleri (Büyük Ekranlar İçin) -->
      <nav class="hidden sm:flex gap-4">
        <router-link to="/" class="nav-link text-white">
          <span>Anasayfa</span>
        </router-link>
        <router-link to="/favories" class="nav-link text-white">
          Favoriler
        </router-link>
      </nav>
      <!-- Arama Çubuğu -->
      <div>
        <div class="search-bar flex gap-2">
          <img src="../../assets/images/Search....png" class="rounded" />
          <input
            @input="handleSearch"
            type="search"
            placeholder="Ara.."
            class="ms-2"
          />
        </div>
      </div>
      <!-- Dropdown Menü (Küçük Ekranlar İçin) -->
      <div
        v-if="isMenuOpen"
        class="sm:hidden absolute top-20 left-0 w-full bg-gray-800 z-50"
      >
        <router-link
          to="/"
          class="block py-2 px-4 text-white border-b border-gray-600 hover:bg-teal-500"
          @click="toggleMenu"
        >
          Anasayfa
        </router-link>
        <router-link
          to="/favories"
          class="block py-2 px-4 text-white hover:bg-teal-500"
          @click="toggleMenu"
        >
          Favoriler
        </router-link>
      </div>
    </header>
  </div>

  <hr style="border: 1px solid grey; margin-bottom: 20px" />
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);

const searchQuery = ref("");
const isMenuOpen = ref(false);

const handleSearch = (event) => {
  searchQuery.value = event.target.value;
  emit("search", searchQuery.value);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
header {
  padding: 20px;
}
.nav-link {
  font-size: 20px;
  color: white;
  text-decoration: none;
}

.nav-link.router-link-active {
  color: #00b9ae;
  border-bottom: 4px solid #00b9ae;
}
.search-bar {
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #21242d;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.search-bar img {
  margin-right: 8px;
}

.search-bar input {
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
}
@media (max-width: 640px) {
  .burger-menu {
    width: 45px;
    height: 45px;
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .burger-menu:hover {
    background-color: #00b9ae;
    transition: all ease-in 0.3s;
  }
  .burger-menu:hover svg {
    background-color: #00b9ae;
    transition: all ease-in 0.3s;
  }
}
</style>
