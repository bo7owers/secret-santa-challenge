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
<Card style="width: 25em">
   <template #header>
       <img :src="imgURL" :alt="altText" style="height: 15rem; object-fit: cover;" />
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
		<Button :label="btnLabel" class="p-button-secondary" style="padding-bottom: 5px;" />
   </template>
</Card>
</template>
