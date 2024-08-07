<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h1 class="text-center mb-5">İletişim</h1>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Ad</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Soyad</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Konu</label>
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <hr class="my-4" />
          <button class="btn btn-primary w-100 py-2" type="button">
            Gönder
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup></script>
