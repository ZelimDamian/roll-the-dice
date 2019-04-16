<template>
    <v-card class="">
        <v-toolbar card dense>
            <v-toolbar-title>
                <span class="subheading">Dice set</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-dice-multiple</v-icon>
            </v-btn>
        </v-toolbar>

        <v-card-text>
            <v-layout justify-space-between mb-3>
                <v-flex text-xs-left fill-height >
                    <span class="display-3 font-weight-light" v-text="count"></span>
                    <v-icon>mdi-close</v-icon>
                    <span v-if="dieType" @click="toggle">
                        <v-icon x-large> mdi-{{ dieType.icon }} </v-icon>
                    </span>
                </v-flex>
                <v-flex v-if="!dieType">
                    <rolling-dice-type-picker @dieTypeChanged="dieTypeChanged"></rolling-dice-type-picker>
                </v-flex>
            </v-layout>
            <v-slider
                      v-model="count" 
                      always-dirty
                      min="1" max="10"
                      ticks="always"
                      :tick-labels="tickLabels">
                <template v-slot:prepend>
                    <v-icon @click="decrement"> mdi-minus</v-icon>
                </template>
                <template v-slot:append>
                    <v-icon @click="increment"> mdi-plus</v-icon>
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

<style lang="scss"></style>
