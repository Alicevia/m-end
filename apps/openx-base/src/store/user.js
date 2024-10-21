import { createGlobalState, useStorage } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export const useUserStore = createGlobalState(() => {

  const isLogin = ref(false)
  const isLoading = ref(false)
  const refreshLoading=ref(false)
  const token = useStorage('openx-token')
  const setToken = v => {
    token.value = v
  }
  const login = async () => {
    isLoading.value = true
    try {
      await fetchToken()
    }catch(e){
      token.value = undefined
      return Promise.reject(e)
    } finally{
      isLoading.value = false
    }
  }
 
  const fetchToken =async () => {
    await new Promise(r => setTimeout(r, 1000))
    token.value = 'test-token'
  }
  const validateToken =async () => {
    refreshLoading.value = true
    tip.value = '正在初始化数据...'
    try {
      await getGlobalData()
      isLogin.value = true
    } catch (error) {
      token.value = undefined
      return Promise.reject(error)
    }finally{
      refreshLoading.value = false
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
  
  const tip =  ref('正在初始化数据...')
  const ssoLogin = async (vk) => {
    refreshLoading.value = true
    tip.value = '正在核验身份...'
    try {
      await new Promise(r => setTimeout(r, 2000))
      setToken('sso-token')
      router.replace('/')
    } finally{
      refreshLoading.value = false
    }
    
  }
  return {
    isLogin, 
    isLoading, 
    refreshLoading,
    tip, 
    token,
    setToken,
    login,
    ssoLogin,
    validateToken, 
    logout }
})