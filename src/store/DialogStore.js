import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('Dialogs', ()=>{
	const displayModal1 = ref(false)
	const displayModal2 = ref(false)
	const displayModal3 = ref(false)
	
	function toggleModal1(){
		!displayModal1 ? displayModal1.value = true : displayModal1.value = false
	}
	
	// function closeModal1(){
	//	displayModal1.value = false
	// }
	function toggleModal2(){
		!displayModal2 ? displayModal2.value = true : displayModal2.value = false
	}
	
	// function closeModal2(){
	//	displayModal2.value = false
	// }

	function toggleModal3(){
		!displayModal3 ? displayModal3.value = true : displayModal3.value = false
	}
	
	// function closeModal3(){
	//	displayModal3.value = false
	//}



	return {displayModal1, displayModal2, displayModal3, toggleModal1, toggleModal2,toggleModal3, }	
})
