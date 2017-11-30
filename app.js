const vm = new Vue({
  el: '#app',
  data: {
    deliveryOrders: 'hello world'
  },
  methods: {
    getData () {
      this.$http.get('http://localhost:5000').then(response => {
        // let deliveryOrderId = []
        // response.body.orders.map((deliveryOrder) => {
        //   return deliveryOrderId.push(deliveryOrder.order_id)
        // })
        this.deliveryOrders = response.body.orders
      },
      response => {
        console.log('error')
      })
    },
    feedbackForm () {
    }
  }
})

vm.getData()
