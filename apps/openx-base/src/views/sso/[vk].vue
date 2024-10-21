<template>
	<div class="flex h-full">
		<div  class="m-auto" >
			<a-result v-if="isError" status="error" title="验证失败">
				<template #subtitle>
					请重试或者联系管理员
				</template>
				<template #extra>
					<a-space>
						<a-button type='primary' @click="$router.replace('/login')">返回</a-button>
					</a-space>
				</template>
			</a-result>
		</div>
	</div>

</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../store'
definePage({
  meta: { 
    isWhite: true,
  },
})

const {  ssoLogin }=useUserStore()
const props = defineProps({
  vk: String,
})

const router = useRouter()
 
const isError = ref(false)
!(async () => {
  if(!props.vk) return router.replace('/login')
  try {
    isError.value = false
    await ssoLogin(props.vk)
  } catch {
    isError.value = true
  }
  // router.replace('/')
})()

</script>
<style scoped>
</style>