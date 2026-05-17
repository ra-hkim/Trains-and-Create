ServerEvents.recipes(event => {
  event.remove({
    mod: 'createfood',
    type: 'minecraft:crafting_shaped'
  })
  event.remove({
    mod: 'createfood',
    type: 'minecraft:crafting_shapeless'
  })
})
