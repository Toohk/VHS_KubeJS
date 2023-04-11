ServerEvents.recipes(event => { //listen for the "recipes" server event.

event.remove({ output: 'fwaystones:abyss_watcher' })
event.remove({ output: 'minecraft:beacon' })
event.remove({ output: 'fwaystones:pocket_wormhole' })

event.shaped(
Item.of('minecraft:enchanted_golden_apple', 1), // arg 1: output
  [ 
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    A: 'minecraft:apple', 
    B: 'minecraft:gold_block'  //arg 3: the mapping object   
  }
)
event.shaped(
Item.of('minecraft:cobweb', 1), // arg 1: output
  [ 
    'BBB', 
    'BBB', // arg 2: the shape (array of strings)
    'BBB'  
  ],
  {
    B: 'minecraft:string'  //arg 3: the mapping object   
  }
)



event.shaped(
Item.of('fwaystones:abyss_watcher', 1), // arg 1: output
  [ 
    'CBC', 
    'BAB', // arg 2: the shape (array of strings)
    'CBC'  
  ],
  {
    A: 'minecraft:ender_eye', 
    B: 'minecraft:chorus_fruit',
    C: 'betterend:chorus_mushroom_raw'//arg 3: the mapping object   
  }
)


})
