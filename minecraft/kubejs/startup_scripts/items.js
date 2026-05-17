StartupEvents.registry('item', event => {
  event.create('incomplete_iron_backpack', 'create:sequenced_assembly')
  event.create('incomplete_upgrade_base', 'create:sequenced_assembly').texture('kubejs:item/incomplete_upgrade_base')
  event.create('incomplete_diamond_backpack', 'create:sequenced_assembly')
  event.create('haunted_backpack')
})
