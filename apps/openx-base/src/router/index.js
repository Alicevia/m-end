import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useUserStore } from '../store'
function enableRouteProps (routes ) {
  for (const route of routes) {
    route.props = true
    if (route.children)
      enableRouteProps(route.children)
  }
}
enableRouteProps(routes)

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const { isLogin, token, validateToken }=userStore
  const { name, fullPath, meta } = to 
 
  if(meta.isWhite) return next()
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
