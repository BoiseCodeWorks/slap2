<template>
  <div class="SlapGame">

    <div class="player" :class="getHealthStatus(player)" v-if="player.name">
      <img :src="player.picture" alt="">
      <h1>Player: {{player.name}}</h1>
      <h4 v-if="player.health >= 1">Health: {{player.health}}</h4>
      <h4 v-else>DEAD</h4>
      <button v-for="(val, attack) in player.attacks" :disabled="player.health <= 1" @click="slap(attack)">{{attack}}</button>
    </div>
    <div v-else>
      Please Select a player from the menu to your left
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'SlapGame',
    data() {
      return {

      }
    },
    methods: {
      slap(attack) {
        this.$store.dispatch('slap', attack)
      },
      getHealthStatus(player) {
        return {
          healthy: player.health > 75,
          dying: player.health <= 75 && player.health > 0,
          dead: player.health <= 0
        }
      }
    },
    computed: {
      player() {
        return this.$store.state.activePlayer
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .healthy {
    color: green
  }

  .dying {
    color: orange
  }

  .dead {
    color: red
  }

  h1 {
    color: blue
  }
</style>