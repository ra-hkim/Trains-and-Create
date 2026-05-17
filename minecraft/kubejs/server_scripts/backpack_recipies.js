// upgrade base recipe

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('sophisticatedbackpacks:upgrade_base', 1.0),
      CreateItem.of('create:andesite_alloy', 0.08),
      CreateItem.of('minecraft:iron_ingot', 0.05)
    ],
    'create:brass_sheet',
    [
      event.recipes.create.deploying(
        'kubejs:incomplete_upgrade_base',
        ['kubejs:incomplete_upgrade_base', 'minecraft:leather']
      ),
      event.recipes.create.deploying(
        'kubejs:incomplete_upgrade_base',
        ['kubejs:incomplete_upgrade_base', 'minecraft:iron_ingot']
      ),
      event.recipes.create.pressing(
        'kubejs:incomplete_upgrade_base',
        'kubejs:incomplete_upgrade_base'
      )
    ]
  ).transitionalItem('kubejs:incomplete_upgrade_base').loops(3)

})

// copper backpack recipe

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:copper_backpack',
    [
      "C C",
      "UBU",
      "CDC",
      "C C"
    ],
    {
      C: 'minecraft:copper_ingot',
      D: 'minecraft:copper_block',
      U: 'sophisticatedbackpacks:upgrade_base',
      B: 'sophisticatedbackpacks:backpack'
    }
  )
})

// iron backpack recipe

ServerEvents.recipes(event => {

  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('sophisticatedbackpacks:iron_backpack', 1.0),
      CreateItem.of('minecraft:iron_ingot', 0.1)
    ],
    'sophisticatedbackpacks:copper_backpack',
    [
      event.recipes.create.deploying(
        'kubejs:incomplete_iron_backpack',
        ['kubejs:incomplete_iron_backpack', 'minecraft:iron_ingot']
      ),
      event.recipes.create.deploying(
        'kubejs:incomplete_iron_backpack',
        ['kubejs:incomplete_iron_backpack', 'create:metal_girder']
      ),
      event.recipes.create.pressing(
        'kubejs:incomplete_iron_backpack',
        'kubejs:incomplete_iron_backpack'
      )
    ]
  ).transitionalItem('kubejs:incomplete_iron_backpack').loops(4)

})

// gold backpack recipe

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:gold_backpack',
    [
      " C C ",
      " UBU ",
      "CDDDC",
      " C C "
    ],
    {
      C: 'minecraft:gold_ingot',
      D: 'minecraft:gold_block',
      U: 'sophisticatedbackpacks:upgrade_base',
      B: 'sophisticatedbackpacks:iron_backpack'
    }
  )
})

// haunted backpack recipe

ServerEvents.recipes(event => {
  event.recipes.create.haunting('kubejs:haunted_backpack','sophisticatedbackpacks:backpack')
})

// diamond backpack recipe

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of('sophisticatedbackpacks:diamond_backpack', 1.0),
      CreateItem.of('minecraft:diamond_block', 0.1)
    ],
    'sophisticatedbackpacks:gold_backpack',
    [
      event.recipes.create.deploying(
        'kubejs:incomplete_diamond_backpack',
        ['kubejs:incomplete_diamond_backpack', 'minecraft:diamond_block']
      ),
      event.recipes.create.deploying(
        'kubejs:incomplete_diamond_backpack',
        ['kubejs:incomplete_diamond_backpack', 'kubejs:haunted_backpack']
      ),
      event.recipes.create.pressing(
        'kubejs:incomplete_diamond_backpack',
        'kubejs:incomplete_diamond_backpack'
      ),
      event.recipes.create.deploying(
        'kubejs:incomplete_diamond_backpack',
        ['kubejs:incomplete_diamond_backpack', 'sophisticatedbackpacks:upgrade_base']
      )
    ]
  )
  .transitionalItem('kubejs:incomplete_diamond_backpack')
  .loops(3)
})

// netherite backpack recipe

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:netherite_backpack',
    [
      "SSS",
      "GTG",
      "NBN",
      "GTG",
      "SSS"
    ],
    {
      S: 'minecraft:netherite_scrap',
      N: 'minecraft:netherite_ingot',
      T: 'minecraft:netherite_upgrade_smithing_template',
      G: 'minecraft:gold_ingot',
      B: 'sophisticatedbackpacks:diamond_backpack'
    }
  )
})
