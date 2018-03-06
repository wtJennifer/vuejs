fis.hook('commonjs')
fis.match('module/**.js', {
	packTo: 'pack/module.js',
	isMod: true
})
fis.match('lib/**.js', {
	packTo: 'pack/lib.js'
})
fis.match('**.css', {
	packTo: 'pack/module.css',
	optimizer: 'clean-css'
})
fis.match('**.js', {
	optimizer: 'uglify-js'
})
fis.match('**.{js,css}', {
	release: 'static/$0',
	useHash: true
})
fis.match('**.png', {
	optimizer: 'png-compressor'
})
fis.match('/app.js', {
	release: false
})
fis.match('::package', {
	postpackager: 'loader'
})

