const vm = new Vue({
    el: '#appDetalles',
    data: {
      receta: []
    }, 
    mounted() {
        axios.get('../JS/Recipes.json')
            .then(data => {
                let uri = window.location.href.split('?');
                this.receta = data.data[uri[1]];
                console.log(this.receta)
            });
  }})