const Facade = require('../../lib/facade')
const deviceSchema = require('./schema')

class DeviceFacade extends Facade {}

module.exports = new DeviceFacade('Device', deviceSchema)
