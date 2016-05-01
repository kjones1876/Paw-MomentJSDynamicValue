var WebpackOnBuildPlugin = require('on-build-webpack');
var fs = require('fs-extra');

var pawExtSrc = '/Users/kieran/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions/';
var projectId = 'io.kjones.PawExtensions.MomentJSDynamicValue';

// webpack.config.js
module.exports = {
	entry: './src/index.js',
	output: {
		filename: `bin/${projectId}/MomentJSDynamicValue.js`
	},
	plugins: [
		new WebpackOnBuildPlugin(function(stats) {

			fs.copySync('./README.md', `bin/${projectId}/README.md`);

			try {
				fs.copySync(`./bin/${projectId}`, pawExtSrc + projectId);
			} catch(e) {
				console.error('Failed to copy build into Paw extensions directory');
				console.error(e);
			}
		}),
	]
};