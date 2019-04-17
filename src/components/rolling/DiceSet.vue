<template>
    <v-card class="dice-set-card">
        <v-toolbar class="ma-0" card color="green">
            <span dark class="count-span display-2">{{count}}</span>
            <v-icon dark>mdi-close</v-icon>
            <v-icon v-if="dieType" dark x-large>mdi-{{dieType.icon}}</v-icon>
            <v-icon v-if="!dieType" dark x-large>mdi-dice-multiple</v-icon>
            <v-icon v-if="mod" dark>mdi-{{mod > 0 ? 'plus' : "minus"}}</v-icon>
            <span v-if="mod" dark class="count-span display-2">{{Math.abs(mod)}}</span>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon @click="roll" :disabled="!canRoll">
                <v-icon dark large>mdi-dice-multiple</v-icon>
            </v-btn>
        </v-toolbar>

        <v-card-text>
                <v-flex>
                    <rolling-dice-type-picker @dieTypeChanged="dieTypeChanged"></rolling-dice-type-picker>
                </v-flex>
                <v-flex>
                    <v-slider
                            v-model="count"
                            always-dirty
                            min="1" max="10"
                            ticks="always"
                            :tick-labels="tickLabels">
                        <template v-slot:prepend>
                            <v-icon large color="green" @click="decrement"> mdi-minus</v-icon>
                        </template>
                        <template v-slot:append>
                            <v-icon large color="green" @click="increment"> mdi-plus</v-icon>
                        </template>
                    </v-slider>
                </v-flex>
            <v-slider
                    v-model="mod"
                    always-dirty
                    min="-10" max="10"
                    ticks="always"
                    :tick-labels="modTickLabels">
                <template v-slot:prepend>
                    <v-icon large color="green" @click="decrementMod"> mdi-minus</v-icon>
                </template>
                <template v-slot:append>
                    <v-icon large color="green" @click="incrementMod"> mdi-plus</v-icon>
                </template>
            </v-slider>
        </v-card-text>

        <v-dialog
                v-model="showDialog"
                hide-overlay
                persistent
                width="300"
        >
            <v-card
                    color="blue"
                    dark
            >
                <v-card-text>
                    You rolled <span class="display-2">{{rolled}}</span>
                    <v-icon></v-icon>
                </v-card-text>
            </v-card>
        </v-dialog>

    </v-card>
</template>

<script>
    export default {
        data: () => ({
            count: 1,
            mod: 0,
            dieType: null,
            maxCount: 10,
            showDialog: false,
            rolled: 0
        }),

        computed: {
            tickLabels() {
                return [...Array(this.maxCount).keys()].map(i => i + 1)
            },
            modTickLabels() {
                return [...Array(this.maxCount * 2 + 1).keys()].map(i => i - this.maxCount)
            },
            canRoll() {
                return !!this.dieType;
            }
        },

        methods: {
            decrement() {
                this.count--
            },
            increment() {
                this.count++
            },
            decrementMod() {
                this.mod--
            },
            incrementMod() {
                this.mod++
            },
            roll() {
                if (!this.canRoll) return;
                if (this.showDialog) return;
                const max = this.dieType.value;
                this.rolled = this.count * Math.floor(Math.random() * (max)) + 1 + this.mod;
                this.toggleDialog();
                setTimeout(this.toggleDialog, 3000)
            },
            toggleDialog() {
                this.showDialog = !this.showDialog;
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
