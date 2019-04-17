<template>
    <v-card class="dice-set-card">
        <v-toolbar class="ma-0" card :color="color">
            <v-icon dark x-large>mdi-heart</v-icon>
            <span dark class="count-span display-2">{{health}}</span>
            <span dark class="count-span display-2">/</span>
            <span dark class="count-span display-2">{{maxHealth}}</span>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon @click="resetHealth">
                <v-icon dark large>mdi-reload</v-icon>
            </v-btn>
        </v-toolbar>

        <v-card-text>
            <v-flex>
                <v-slider
                        always-dirty
                        min="1" :max="maxHealth"
                        ticks="always"
                        :value="health"
                        :color="color"
                        :tick-labels="tickLabels"
                        @change="setHealth"
                >
                    <template v-slot:prepend>
                        <v-icon large :color="color" @click="decrementHealth"> mdi-minus</v-icon>
                    </template>
                    <template v-slot:append>
                        <v-icon large :color="color" @click="incrementHealth"> mdi-plus</v-icon>
                    </template>
                </v-slider>
            </v-flex>
        </v-card-text>

        <v-dialog v-model="showDialog" hide-overlay persistent width="300">
            <v-card color="blue" dark>
                <v-card-text>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        data: () => ({
            showDialog: false,
            color: 'red',
        }),

        computed: {
            ...mapState({
                maxHealth(state) {
                    return state.character.maxHealth;
                },
                health: state => state.character.health
            }),
            tickLabels() {
                return [...Array(this.maxHealth).keys()].map(i => i + 1).map(i => i % 2 ? '' : i)
            },
        },
        methods: mapMutations('character', ['incrementHealth', 'decrementHealth', 'resetHealth', 'setHealth'])
    }
</script>

<style lang="scss">
    .count-span {
        color: white;
    }

    .dice-set-card {
        min-width: 320px;

        .v-toolbar__content {
            margin-left: 0 !important;
        }
    }

    .transparent.border-none {
        border: none;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        box-shadow: none !important;
    }
</style>
