import { Core } from 'webtalekit-alpha/src/core/'
import engineConfig from '../engineConfig.json'

const game = new Core()
game.setConfig(engineConfig)
window.api = game.getAPIForScript()
game.start('title')
