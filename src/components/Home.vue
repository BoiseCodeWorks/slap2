<template>
    <div>
        <h1>This is the home vue</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <slap-menu></slap-menu>
                </div>
                <div class="col-sm-6">
                    <slap-game></slap-game>
                </div>
            </div>
        </div>
        <div>
        </div>

    </div>
</template>

<script>
    import SlapGame from './SlapGame'
    import SlapMenu from './SlapMenu'

    export default {
        components: {
            SlapGame,
            SlapMenu
        }
    }
</script>