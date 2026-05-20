PlayerEvents.inventoryChanged(event => {
  const player = event.player

  const chest = player.getArmorSlots()[2]

  if (chest.id == 'minecraft:elytra') {
    player.getArmorSlots()[2] = Item.of('minecraft:air')

    player.give('minecraft:elytra')

    player.tell('Elytras are disabled')
  }
})
