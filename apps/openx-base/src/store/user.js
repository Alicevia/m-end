import { createGlobalState, useStorage } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export const useUserStore = createGlobalState(() => {

  const isLogin = ref(false)
  const isLoading = ref(false)
  const token = useStorage('openx-token')

  const login = async () => {
    isLoading.value = true
    try {
      await getToken()
      await getGlobalData()
      isLogin.value = true
    }catch(e){
      token.value = undefined
      return Promise.reject(e)
    } finally{
      isLoading.value = false
    }
  }
 
  const getToken =async () => {
    await new Promise(r => setTimeout(r, 1000))
    token.value = 'test-token'
  }
  const validateToken =async () => {
    isLoading.value = true
    try {
      await getGlobalData()
      isLogin.value = true
    } catch (error) {
      token.value = undefined
      return Promise.reject(error)
    }finally{
      isLoading.value = false
    }
  }
  const getGlobalData = async () => {
    await new Promise(r => setTimeout(r, 1200))
  }
  const router = useRouter()
  const logout = () => {
    token.value = undefined
    isLogin.value = false
    router.replace('/login')
  }
  
  return { isLogin, isLoading, token, login, validateToken, logout }
})