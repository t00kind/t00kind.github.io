new Vue({
  el: "#vue",
  data: {
    name: "Ильшат",
    show: true,
    real: false
  },
  methods: {
    re: function() {
          this.show = false;
          this.real = true;
    }
})
