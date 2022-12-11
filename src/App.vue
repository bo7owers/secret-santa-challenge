<script setup></script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div class="shadow-md flex flex-col w-3/5 bg-white p-5 rounded-lg border-gray-100 border-[1px]">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
p a {
  text-decoration: underline !important;
  @apply text-primary;
}
</style>
