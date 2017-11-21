import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
var url = '//inspire-server.herokuapp.com/api/todos/brandongulley'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        // THIS IS THE LOCAL COPY OF ALL DATA FOR THE APPLICATION
        activePlayer: {},
        players: [
            {
                picture: '//placehold.it/100x100',
                health: 100,
                name: 'Mark',
                attacks: {
                    slap: 1,
                    kick: 5
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                name: 'D$',
                attacks: {
                    punch: -5,
                    haduken: -1000
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 100,
                name: 'Jakob',
                attacks: {
                    tickle: -100
                }
            },
            {
                picture: '//placehold.it/100x100',
                health: 10,
                name: 'J-Dawg',
                attacks: {
                    flu: 10000
                }
            }
        ],
        todos: []
    },
    mutations: {
        // FUNCTIONS THAT CAN CHANGE THE STATE
        slap(state, attack) {
            // DATA MUTATION
            state.activePlayer.health -= state.activePlayer.attacks[attack]
        },
        setActivePlayer(state, player) {
            state.activePlayer = player
        },
        addPlayer(state, player) {
            state.players.push(player)
        },
        addTodos(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        // FUNCTIONS THAT REQUESTS TO CHANGE DATA
        slap({ commit, dispatch }, attack) {
            commit('slap', attack)
        },
        changeActivePlayer({ commit, dispatch }, player) {
            if (player.health > 0) {
                commit('setActivePlayer', player)
            }
        },
        addPlayer({ commit, dispatch }, newPlayer) {
            if (newPlayer.health > 0) {
                newPlayer.attacks = {
                    slap: 5
                }
                commit('addPlayer', newPlayer)
            }
        },
        getTodos({ commit, dispatch }, personName) {
            $.get(url).then(todos => {
                commit('addTodos', todos)
            })
        },
        removeTodo({ commit, dispatch }, i) {
            $.ajax({
                method: 'DELETE',
                url: url + '/' + i
            }).then(res => dispatch('getTodos'))
        }
    }

})