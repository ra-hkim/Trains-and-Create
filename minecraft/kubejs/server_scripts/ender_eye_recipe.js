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
    D: 'minecraft:diamond',
    G: 'minecraft:gold_ingot',
    S: 'tfmg:steel_ingot',
    A: 'tfmg:aluminum_ingot',
    C: 'tfmg:cast_iron_ingot',
    B: 'create:brass_ingot',
    O: 'create:andesite_alloy',
    R: 'create:blaze_burner',
    L: 'quark:blaze_lantern'
    })

  event.remove({ output: 'quark:ender_watcher' })

  event.shaped(
    'quark:ender_watcher',
    [
      'OBO',
      'RPR',
      'OBO'
    ],
    {
      P: 'minecraft:ender_pearl',
      B: 'minecraft:blaze_powder',
      R: 'minecraft:redstone',
      O: 'minecraft:obsidian'
    }
  )
})
