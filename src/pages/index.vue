<script setup>
import AppHeader from '@/components/AppHeader.vue'
import MyCard from '@/components/MyCard.vue'
// const router = useRouter()
</script>
<template>
  <AppHeader>How well do you know me?</AppHeader>
  <div class="text-center">
    <MyCard
      title="First sentence"
      imgSrc="bo7owers-gh.jpeg"
      alt="Bo7owers Animoji"
      content="I like dessert pizza (with pineapple)"
      btnLabel="Check Answer"
    />
  </div>
</template>
