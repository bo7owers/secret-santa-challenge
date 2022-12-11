<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>
<template>
  <AppHeader>Welcome to your Secret Santa Clues!</AppHeader>
  <div class="text-center">
    <p>Index</p>
	 <RouterLink to="/clue-2">Clue 2</RouterLink>
    </div>
</template>
