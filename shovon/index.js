const _ = require('lodash');
const tycoons = require('./tycoons');

console.log(
    `\n Most aggresive business tycoon is: ${_.first(
        tycoons.name
    )}\n Most giant ecommerce site is: ${_.last(
        tycoons.business
    )}\n Main thread is present: ${tycoons.workers()}`
);
