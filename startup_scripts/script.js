// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {

	//event.create('test_item').texture('kubejs:item/lava')
	event.create('vhs', "music_disc").texture('vhs:item/vhs').displayName('VHS')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})