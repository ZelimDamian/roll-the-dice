<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex md12 sm12 lg4 >
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">Average rolls</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon color="green" small > mdi-arrow-up </v-icon>
            <span class="green--text">55%</span>&nbsp; increase
          </p>

          <template slot="actions">
            <v-icon class="mr-2" small > mdi-clock-outline </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex md12 sm12 lg4 >
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">Natural 1's</h4>
          <p class="category d-inline-flex font-weight-light">Last Campaign Performance</p>

          <template slot="actions">
            <v-icon class="mr-2" small > mdi-clock-outline </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex md12 sm12 lg4 >
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="green"
          type="Line"
        >
          <h3 class="title font-weight-light">Natural 20's</h3>
          <p class="category d-inline-flex font-weight-light">Last Campaign Performance</p>

          <template slot="actions">
            <v-icon class="mr-2" small > mdi-clock-outline </v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 >
        <material-stats-card
          color="green"
          icon="mdi-coins"
          title="Gold"
          value="123,000"
          small-value="$"
          sub-icon="mdi-calendar"
          sub-text="Last 24 sessions"></material-stats-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 >
        <material-stats-card
          color="orange"
          icon="mdi-content-copy"
          title="Spell slots"
          value="6/12"
          sub-text="Used spell slots...">
        </material-stats-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 >
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Favourite weapon"
          value="Long-sword"
          sub-icon="mdi-sword"
          sub-text="823 damage dealt to 123 enemies"></material-stats-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 >
        <material-stats-card
          color="info"
          icon="mdi-axe"
          title="Battles won"
          value="23 / 35"
          sub-icon="mdi-update"
          sub-text="12 Battles lost"></material-stats-card>
      </v-flex>
      <v-flex md12 lg6 >
        <material-card
          color="orange"
          title="Characters"
          text="Player characters of current user"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"></span>
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.class }}</td>
              <td class="text-xs-right">{{ item.level }}</td>
              <td class="text-xs-right">{{ item.race }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <material-card
          class="card-tabs"
          color="green">
          <v-flex
            slot="header"
          >
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >Arenas:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-sword</v-icon>
                PvP
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-axe</v-icon>
                PvE
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-crown</v-icon>
                Royal
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item v-for="n in 3" :key="n" >
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-icon color="primary">mdi-sword</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Some Battle royal thing
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-sword-cross</v-icon>
                      </v-btn>
                      <span>Fight!</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Forfeit</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-icon color="primary">mdi-sword</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Some other campaign
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-sword-cross</v-icon>
                      </v-btn>
                      <span>Fight!</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Forfeit</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-icon color="primary">mdi-sword</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Some awesome battle arena with lots of spiders
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-sword-cross</v-icon>
                      </v-btn>
                      <span>Fight!</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Forfeit</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 12, 18, 8]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 22, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [30, 50, 50, 0, 80, 40, 0, 90]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [42, 43, 20, 70, 53, 53, 26, 34, 68, 10, 56, 5]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 100,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Class',
          value: 'class',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Level',
          value: 'level',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Race',
          value: 'race',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Damn Sun',
          class: 'Paladin',
          level: '2',
          race: 'Half-Orc'
        },
        {
          name: 'Thorgrim Ironbend',
          class: 'Warrior',
          level: '2',
          race: 'Mountain Dwarf'
        }, {
          name: 'Torg',
          class: 'Barbarian',
          level: '1',
          race: 'Goliath'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
