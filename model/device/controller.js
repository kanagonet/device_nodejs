const Controller = require('../../lib/controller')
const deviceFacade = require('./facade')

class DeviceController extends Controller {}

module.exports = new DeviceController(deviceFacade)
