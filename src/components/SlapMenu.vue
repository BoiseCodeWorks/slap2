<template>
    <div>
        <!-- SLAP MENU
         A list of players
         select box for the active player
         form to add a new player
        -->
        <div>
           <form @submit.prevent="setActivePlayer">
                <select @change="setActivePlayer" v-model="selectedPlayer">
                    <option :value="player" v-for="player in players" :disabled="player.health <= 0" :class="{dead: player.health <= 0}">{{player.name}}</option>
                </select>
           </form>
        </div>
        <div>
            <form @submit.prevent="addNewPlayer">
                <input type="text" placeholder="Name" v-model="newPlayer.name">
                {{newPlayer.name}}
                <input type="number" placeholder="Starting Health" v-model="newPlayer.health">
                <input type="url" placeholder="Image Url" v-model="newPlayer.picture">
                <button type="submit">LETS GET EM</button>
            </form>
        </div>
        <div>
            TODOS HERE
            <ul>
                <li v-for="(todo, i) in todos">{{todo.todo}} <i class="glyphicon glyphicon-trash pull-right" @click="removeTodo(i)"></i></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                selectedPlayer: {},
                newPlayer: {}
            }
        },
        mounted(){
            this.$store.dispatch('getTodos')
        },
        methods:{
            setActivePlayer(){
                this.$store.dispatch('changeActivePlayer', this.selectedPlayer)
            },
            addNewPlayer(){
                this.$store.dispatch('addPlayer', this.newPlayer)
                this.newPlayer = {}
            },
            removeTodo(i){
                this.$store.dispatch('removeTodo', i)
            }
        },
        computed: {
            players(){
                return this.$store.state.players
            },
            todos(){
                return this.$store.state.todos
            }
        }
    }
</script>

<style>
    .dead{
        color: red
    }
</style>