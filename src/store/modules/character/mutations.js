import {set} from '@/utils/vuex'

export default {
  incrementHealth: state => state.health++,
  decrementHealth: state => state.health--,
  resetHealth: state => state.health = state.maxHealth,
  setHealth: set('health')
}
