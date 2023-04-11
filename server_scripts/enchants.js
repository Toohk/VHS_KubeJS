LootJS.modifiers((event) => {
	event
        	.addLootTypeModifier(LootType.FISHING)
        	.removeLoot("minecraft:enchanted_book")
});

MoreJSEvents.enchantmentTableChanged((event) => {

	let firstSlot = event.get(0);
	let secondSlot = event.get(1);
	let thirdSlot = event.get(2);

    	firstSlot.removeEnchantments((enchantment, level) => {
	    	return enchantment.id == 'minecraft:fortune'
    	});
	secondSlot.removeEnchantments((enchantment, level) => {
	    	return enchantment.id == 'minecraft:fortune'
    	});
	thirdSlot.removeEnchantments((enchantment, level) => {
		return enchantment.id == 'minecraft:fortune'
    	});

    	firstSlot.updateClue();
	secondSlot.updateClue();
	thirdSlot.updateClue();
});
