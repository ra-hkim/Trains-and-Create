ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:ender_eye' })

  event.recipes.create.mechanical_crafting(
    'minecraft:ender_eye',
    [
    ' LLL ',
    'LSACL',
    'LGPDL',
    'LBROL',
    ' LLL '
    ],
    {
    P: 'minecraft:ender_pearl',
    D: 'minecraft:diamond_block',
    G: 'minecraft:gold_block',
    S: 'tfmg:steel_block',
    A: 'tfmg:aluminum_block',
    C: 'tfmg:cast_iron_block',
    B: 'create:brass_block',
    O: 'create:andesite_alloy_block',
    R: 'create:blaze_burner',
    L: 'quark:blaze_lantern'
    })

  event.remove({ output: 'quark:ender_watcher' })

  event.shaped(
    'quark:ender_watcher',
    [
      'OBO',
      'BPB',
      'OBO'
    ],
    {
      P: 'minecraft:ender_pearl',
      B: 'minecraft:blaze_powder',
      O: 'minecraft:obsidian'
    }
  )
})
