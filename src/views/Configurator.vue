<template>
  <v-container fill-height fluid style="flex-wrap: wrap;" >
    <v-flex lg12 >
        <material-card color="green" class="mb-12">
          <div slot="header">
            <div class="title font-weight-light mb-2">Configure dice set...</div>
          </div>

          <v-layout align-center justify-center wrap >
            <rolling-dice-set></rolling-dice-set>
          </v-layout>
        </material-card>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>
