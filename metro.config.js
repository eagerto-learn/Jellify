// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@react-native/metro-config')

const config = getDefaultConfig(__dirname, {
	// [Web-only]: Enables CSS support in Metro.
	isCSSEnabled: true,
})

// Expo 49 issue: default metro config needs to include "mjs"
// https://github.com/expo/expo/issues/23180
config.resolver.sourceExts.push('mjs')

config.watchFolders = ['components', 'api', 'player']

module.exports = config
