<template>
    <div>
        <v-select
                :items="dice.types"
                label="Select die type..."
                item-value="dice.types"
                max-height="auto"
                @change="changedValue"
        >
            <template slot="selection" slot-scope="data">
                <span>
                    <v-icon slot="activator" size="35px">mdi-{{data.item.icon}}</v-icon>
                </span>
            </template>
            <template slot="item" slot-scope="data">
                <v-list-tile>
                    <v-tooltip top content-class="top">
                        <v-icon slot="activator" size="35px">mdi-{{data.item.icon}}</v-icon>
                        <span>{{ data.item.value }}</span>
                    </v-tooltip>
                </v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.value"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.icon"></v-list-tile-sub-title>
                </v-list-tile-content>
            </template>
        </v-select>
    </div>
</template>

<script>

    import dice from '@/data/dice'

    export default {
        data() {
            return {
                dice: dice
            }
        },
        methods: {
            changedValue(value) {
                this.$emit('dieTypeChanged', value)
            }
        }
    }
</script>

<style lang="scss">
    .v-avatar, .v-responsive {
        cursor: pointer;
    }
</style>
