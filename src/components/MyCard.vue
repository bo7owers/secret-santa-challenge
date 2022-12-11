<script setup>
import { useDialogStore } from '@/store/DialogStore.js'
import { storeToRefs } from 'pinia'
const props = defineProps({
  imgSrc: { type: String, required: false },
  title: { type: String, required: true },
  subTitle: { type: String, required: false },
  content: { type: String, required: false },
  btnLabel: { type: String, required: false },
  alt: { type: String, required: false },
  modalNumber: { type: String, required: true },
})
const imgURL = new URL(`../assets/imgs/${props.imgSrc}`, import.meta.url).href
const altText = !props.alt === undefined ? props.alt : ''

// state management

const store = useDialogStore()

const { displayModal1, displayModal2, displayModal3 } = storeToRefs(store)

const { toggleModal1, toggleModal2, toggleModal3 } = store

const toggle = () => {
  displayModal1.value = true
}
</script>
<template>
  <Card class="w-64">
    <template #header>
      <img :src="imgURL" :alt="altText" style="height: 15rem; object-fit: cover" class="rounded-md" />
    </template>
    <template #title>
      {{ title }}
    </template>
    <template #subtitle v-if="subTitle">
      {{ subTitle }}
    </template>
    <template #content>
      <p>{{ content }}</p>
    </template>
    <template #footer v-if="btnLabel">
      <Button
        @click="toggle"
        :label="btnLabel"
        class="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded w-1/3 my-class"
      />
    </template>
  </Card>
</template>
<style scoped>
.my-class {
  background-color: rgb(3 105 161) !important;
  color: #fff !important;
  font-weight: bold !important;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 12px;
  width: 100%;
  border: none;
}
.my-class:hover {
  background-color: rgb(12 74 110) !important;
}
.my-class:focus {
  /* outline-color: rgb(3 105 161) !important;*/
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgb(3 105 161), 0 1px 2px 0 black !important;
}
</style>
