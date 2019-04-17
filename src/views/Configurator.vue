<template>
    <v-container>
        <v-container fill-height fluid>
            <v-layout>
                <v-flex></v-flex>
                <v-flex>
                    <rolling-health> </rolling-health>
                </v-flex>
                <v-flex></v-flex>
            </v-layout>
        </v-container>
        <v-container fill-height fluid>
            <v-flex>
                <material-card color="green" class="mb-12">
                    <div slot="header">
                        <div class="title font-weight-light mb-2">Configure your dice sets...</div>
                    </div>

                    <v-layout pa-2 wrap>
                        <v-flex v-for="set in sets" lg6 pa-1>
                            <rolling-dice-set @remove="removeSet(set)"></rolling-dice-set>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout>
                        <v-spacer></v-spacer>
                        <v-btn fab dark large color="green" class="round" @click="addSet">
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </v-layout>
                </material-card>
            </v-flex>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                sets: [{}]
            }
        },
        methods: {
            addSet() {
                this.sets.push({})
            }, removeSet(set) {
                this.sets = this.sets.filter(s => s !== set);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .round {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
</style>
