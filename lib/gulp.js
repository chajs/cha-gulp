var adapter = require('gulp-adapter');

module.exports = function (plugin) {
    return adapter(require(plugin))
};
