/*const vm = new Vue({
    el: '#app',
    data: {
      recetas: [],
    }, 
    mounted() {
        axios.get('./db-recipes.json')
            .then(data => {
              this.recetas = data.data;
            });
}})*/


const vm = new Vue({
  el: '#app',
  data: {
    recetas: [],
    recetaEspecífica: []
  }, 
  mounted() {
      axios.get('https://my-json-server.typicode.com/Kirissuno/recetasJSONAPI/recetas')
          .then(data => {
            console.log(data)
            this.recetas = data.data;
          });
}})


