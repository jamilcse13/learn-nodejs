const worker = require('node:worker_threads');

const name = ['Elon Musk', 'Mark Zuckerbarg', 'Jeff Bezos'];
const business = ['Tesla', 'Meta', 'Amazon'];
function workers() {
    return worker.isMainThread;
}
module.exports = {
    name,
    business,
    workers,
};
