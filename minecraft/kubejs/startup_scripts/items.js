StartupEvents.registry('item', event => {
  event.create('incomplete_iron_backpack', 'create:sequenced_assembly').texture('kubejs:item/incomplete_upgrade_base')
  event.create('incomplete_upgrade_base', 'create:sequenced_assembly').texture('kubejs:item/incomplete_upgrade_base')
  event.create('incomplete_diamond_backpack', 'create:sequenced_assembly').texture('kubejs:item/incomplete_upgrade_base')
  event.create('haunted_backpack').texture('kubejs:item/incomplete_backpack')
  event.create('incomplete_stack_upgrade_starter_tier').texture('kubejs:item/incomplete_stack_upgrade')
  event.create('incomplete_stack_upgrade_tier_1').texture('kubejs:item/incomplete_stack_upgrade')
})
