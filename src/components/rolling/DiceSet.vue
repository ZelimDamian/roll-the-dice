<template>
    <v-card class="dice-set-card">
        <v-toolbar class="ma-0" card color="green">
            <span dark class="count-span display-2">{{count}}</span>
            <v-icon dark>mdi-close</v-icon>
            <v-icon v-if="dieType" dark x-large>mdi-{{dieType.icon}}</v-icon>
            <v-spacer></v-spacer>
            <v-divider vertical ></v-divider>
            <v-icon dark large>mdi-dice-multiple</v-icon>
        </v-toolbar>

        <v-card-text>
            <v-flex>
                <rolling-dice-type-picker @dieTypeChanged="dieTypeChanged"></rolling-dice-type-picker>
            </v-flex>
            <v-slider
                      v-model="count" 
                      always-dirty
                      min="1" max="10"
                      ticks="always"
                      :tick-labels="tickLabels">
                <template v-slot:prepend>
                    <v-icon large color="green"@click="decrement"> mdi-minus</v-icon>
                </template>
                <template v-slot:append>
                    <v-icon large color="green" @click="increment"> mdi-plus</v-icon>
                </template>
            </v-slider>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            count: 1,
            dieType: null,
            maxCount: 10
        }),

        computed: {
            tickLabels() {
              return [...Array(this.maxCount).keys()].map(i=>i+1)
            } 
        },

        methods: {
            decrement() {
                this.count--
            },
            increment() {
                this.count++
            },
            toggle() {
                
            },
            dieTypeChanged(dieType) {
                this.dieType = dieType;
            }
        }
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
</style>
