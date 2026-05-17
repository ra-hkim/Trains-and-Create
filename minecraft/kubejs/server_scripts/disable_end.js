// server_scripts/end_block.js
BlockEvents.rightClicked(event => {
  if (event.item.id === 'minecraft:ender_eye') {
    if (event.block.id === 'minecraft:end_portal_frame') {
      event.cancel()
    }
  }
})

ItemEvents.rightClicked(event => {
  if (event.item.id === 'minecraft:ender_eye') {
    event.cancel()
  }
})

EntityEvents.spawned(event => {
  if (event.entity.type === 'minecraft:eye_of_ender') {
    event.entity.kill()
  }
})
