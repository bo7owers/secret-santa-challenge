<script setup></script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
      <RouterView></RouterView>

		<p>Test</p>


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
