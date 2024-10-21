<template>
	<div class="flex h-full">
		<div class="m-auto">
			<h1 class="text-center">openx-front-dev</h1>
			<a-form :disabled="isLoading" @submit-success="handleSubmit" :label-col-props="{span:0}"
				:model="form"
				style="width: 400px;"
				auto-label-width>
				<a-form-item field="name">
					<a-input v-model="form.name" placeholder="please enter your username..." ></a-input>
				</a-form-item>
				<a-form-item field="post">
					<a-input v-model="form.post" placeholder="please enter your post..." ></a-input>
				</a-form-item>
				<a-form-item>
					<a-button :loading="isLoading" html-type="submit" class=" w-full">Submit</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>

</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store'

const { isLoading, login } = useUserStore()
const formRef  = ref()
const form = reactive({
  name: '',
  post: '',
  isRead: false,
})
const router = useRouter()
const handleSubmit = async (data) => {
  await login()
  router.replace('/')
}
</script>
<style scoped>
</style>