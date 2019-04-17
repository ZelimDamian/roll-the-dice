<template>
  <v-container fill-height fluid style="flex-wrap: wrap;" >
    <v-flex lg12 >
        <material-card color="green" class="mb-12">
          <div slot="header">
            <div class="title font-weight-light mb-2">Configure your dice sets...</div>
          </div>

            <v-layout pa-2 wrap>
                <v-flex v-for="set in sets" lg6 pa-1>
                    <rolling-dice-set></rolling-dice-set>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
          <v-layout >
            <v-spacer></v-spacer>
                <v-btn fab dark large color="green" class="round" @click="addSet">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
          </v-layout>
        </material-card>
    </v-flex>
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
