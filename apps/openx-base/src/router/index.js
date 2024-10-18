import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useUserStore } from '../store'
 

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const { isLogin, token, validateToken }=userStore
  const { name, fullPath } = to 
  if(isLogin.value){
    if(name=='login') return next('/')
    return next()
  }
  if(token.value){
    try {
      await validateToken()
      return next(to.path)  
    } catch{
      console.error('token失效')
    }
  }
  if(name=='login')  return next()
  return next({ path: 'login', query: { redirect: fullPath } })
})
