<template>
    <div class="container">
        <h1>Eliminar un Manga</h1>
        <form>
            <div class="form-item">
                <label for="nombreManga">Nombre Manga</label>
                <input type="text" id="nombreManga" v-model="mangaDeleted.nombreManga">
            </div>
            <div>
                <button type="button" @click="send" class="main">Eliminar</button>
            </div>
            <div class="info">
                <h2>Objeto</h2>
                <code>{{mangaDeleted}}</code>
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
            mangaDeleted:{}
        }
    },
    methods:{
        send:async function(){
            this.message = '';
            //validaciones de formulario
            //envío de datos del formulario
            try {
                var result = await this.$axios.post('/manga/deleteByName',this.mangaDeleted.nombreManga);
                console.log(this.mangaDeleted.nombreManga);
                //mensaje de exito
                this.message = `Se elimino el Manga de nombre: ${this.mangaDeleted.nombreManga}`;
                this.mangaDeleted = {};
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