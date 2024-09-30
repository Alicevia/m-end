export  function AppContainer (props, { slots, attrs }){
  return <AConfigProvider  global {...props} {...attrs} >
    { Object.values(slots).map(item => item()) } 
  </AConfigProvider>
}

{/* <template v-for="(_, slotName) in $slots" v-slot:[slotName]>
<slot :name="slotName"></slot>
</template> */}
