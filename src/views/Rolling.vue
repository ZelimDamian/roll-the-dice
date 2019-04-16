<template>
  <v-container fill-height fluid style="flex-wrap: wrap;" >
    <v-flex lg12 >
        <material-card color="green">
          <div slot="header">
            <div class="title font-weight-light mb-2">Roll the dice...</div>
          </div>

          <v-layout align-center wrap >
            <rolling-dice-set></rolling-dice-set>
          </v-layout>
        </material-card>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data: () => ({ })
  }
</script>
