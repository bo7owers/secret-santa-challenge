<script setup>
const props = defineProps({
	imgSrc: {type: String, required: false},
	title: {type: String, required: true},
	subTitle: {type: String, required: false},
	content: {type: String, required: false},
	btnLabel: {type: String, required: false},
	alt: {type:String, required: false}
})
const imgURL = new URL(`../assets/imgs/${props.imgSrc}`, import.meta.url).href
const altText = !props.alt === undefined ? props.alt : ''
</script>
<template>
<Card class="w-64">
   <template #header>
       <img :src="imgURL" :alt="altText" style="height: 15rem; object-fit: cover;" class="rounded-md" />
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
		<Button :label="btnLabel" class="p-button-secondary pb-5x;" />
   </template>
</Card>
</template>
