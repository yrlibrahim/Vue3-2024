<template>
  <div class="my-4">
    <nav class="navbar border-body" data-bs-theme="dark">
      <div class="d-flex">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link active pointer user-select-none"
              >Anasayfa</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/movies" class="nav-link pointer user-select-none"
              >Favoriler</router-link
            >
          </li>
          <li class="nav-item ms-auto">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Ara"
                aria-label="Search"
              />
              <button class="btn btn-outline-info" type="submit">Ara</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <hr />
</template>
<script setup></script>
