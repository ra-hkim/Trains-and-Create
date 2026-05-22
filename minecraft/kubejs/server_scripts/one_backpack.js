const TARGET_ITEM = [
  "sophisticatedbackpacks:backpack",
  "sophisticatedbackpacks:copper_backpack",
  "sophisticatedbackpacks:iron_backpack",
  "sophisticatedbackpacks:gold_backpack",
  "sophisticatedbackpacks:diamond_backpack",
  "sophisticatedbackpacks:netherite_backpack"
  ]

ItemEvents.canPickUp(event => {
  const player = event.player
  const item = event.item

  if (!TARGET_ITEM.includes(item.id)) return
  let hasItem = false

  for (let stack of player.inventory.allItems) {
    if (stack.id === item.id && stack.count > 0) {
      hasItem = true
      break
    }
  }
  if (hasItem) {
    event.cancel()
    player.tell('You already have this item in your inventory.')
  }
})
