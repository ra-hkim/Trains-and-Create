ServerEvents.tags('block', event => {
  event.add('create:non_movable', [
    'create:water_wheel',
    'create:large_water_wheel',
  ])
})
