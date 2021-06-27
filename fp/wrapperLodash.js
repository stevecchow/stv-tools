var convert = require('./convert'),
    func = convert('wrapperStvTools', require('../wrapperStvTools'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
