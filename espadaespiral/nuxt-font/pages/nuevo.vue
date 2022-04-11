<template>
    <div class="container">
        <h1>Agregar un Manga</h1>
        <form>
            <div class="form-item">
                <label for="nombremanga">Titulo</label>
                <input type="text" id="nombremanga" v-model="newManga.nombremanga">
                <label for="autormanga">Autor</label>
                <input type="text" id="autormanga" v-model="newManga.autormanga">
                <label for="categoriamanga">Categoria</label>
                <input type="text" id="categoriamanga" v-model="newManga.categoriamanga">
                <label for="editorialmanga">Editorial</label>
                <input type="text" id="editorialmanga" v-model="newManga.editorialmanga"> <!-- cambiar aqui por algun seleccionador multiple -->
                <label for="idiomamanga">Idioma</label>
                <input type="text" id="idiomamanga" v-model="newManga.idiomamanga">
                <label for="capitulomanga">Capitulo</label>
                <input type="text" id="capitulomanga" v-model="newManga.capitulomanga">
                <label for="numeropaginas">Hojas</label>
                <input type="text" id="numeropaginas" v-model="newManga.numeropaginas">
                <label for="preciomanga">Precio</label>
                <input type="text" id="preciomanga" v-model="newManga.preciomanga">
            </div>
            <div>
                <button type="button" @click="send" class="main">Imprimir</button>
            </div>
            <div class="info">
                <h2>Objeto</h2>
                <code>{{newManga}}</code>
                <p class="message">
                    {{message}}
                </p>
            </div>
        </form>

    </div>
</template>
<script>
function checkNulls(obj){
    console.log("b");
    console.log(obj);
    for (var c in obj){
        if (obj[c] != null && obj[c] != ""){
            return true;
        }
    }
    return false;
}
export default {
    data(){
        return{
            message:'',
            newManga:{}
        }
    },
    methods:{
        send:async function(){
            this.message = '';
            console.log("a");
            //validaciones de formulario
            //envío de datos del formulario
            console.log("a");
            try {
                var result = await this.$axios.post('http://localhost:8080/manga/create', this.newManga);
                let manga = result.data;
                //mensaje de exito 
                this.message = `Se creó un nuevo perro con id: ${manga.id}`;
                this.newManga = {};
            } catch (error) {
                //mensaje de error
                console.log('error', error)
                this.message = 'Ocurrió un error'
            }
        }
    }
}
</script>
<style>
code{
    padding: .5rem 1rem;
    color:white;
    background:#444;
    font-size: 1rem;
    width: 100%;
    display:inline-block;
}
p.message{
    border:solid 1px rgba(0,0,0,0.25);
    padding: .5rem 1rem;
    font-weight: bold;
}
</style>