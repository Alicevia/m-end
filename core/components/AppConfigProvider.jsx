import { defineComponent } from 'vue'

export default defineComponent((props, { slots, attrs }) => {
  return () => <a-config-provider size='small' global {...props} {...attrs}>
    { Object.values(slots).map(item => item()) } 
  </a-config-provider>
})
/* <template v-for="(_, slotName) in $slots" v-slot:[slotName]>
  <slot :name="slotName"></slot>
  </template> */ 