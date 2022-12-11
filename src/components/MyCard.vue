<script setup>
const props = defineProps({
	imgSrc: {type: String, required: false},
	title: {type: String, required: true},
	subTitle: {type: String, required: false},
	content: {type: String, required: false},
	btnLabel: {type: String, required: false}
})
</script>
<template>
<Card style="width: 25em">
   <template #header>
       <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
   </template>
   <template #title>
       Advanced Card
   </template>
   <template #subtitle>
       Card subtitle
   </template>
   <template #content>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
      quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
   </template>
	<template #footer v-if="btnLabel">
		<Button icon="pi pi-check" label="Save" />
   	<Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
   </template>
</Card>
</template>
