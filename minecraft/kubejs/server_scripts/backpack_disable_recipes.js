ServerEvents.recipes((event) => {
  //remove upograde bases
  event.remove({ output: "sophisticatedbackpacks:upgrade_base" });
  // remove backpack crafting recipes
  event.remove({ output: "sophisticatedbackpacks:copper_backpack" });
  event.remove({ output: "sophisticatedbackpacks:iron_backpack" });
  event.remove({ output: "sophisticatedbackpacks:gold_backpack" });
  event.remove({ output: "sophisticatedbackpacks:diamond_backpack" });
  event.remove({ output: "sophisticatedbackpacks:netherite_backpack" });
  // remove backpack stack upgrade
  event.remove({ output: "/sophisticatedbackpacks:.*stack_upgrade_tier*/" });
  event.remove({ output: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
  // disable backpack upgrades
  event.remove({ output: "/sophisticatedbackpacks:.*pump_upgrade/" });
  event.remove({ output: "sophisticatedbackpacks:everlasting_upgrade" });
  event.remove({ output: "sophisticatedbackpacks:inception_upgrade" });
  event.remove({ output: "/sophisticatedbackpacks:.*alchemy_upgrade/" });
  event.remove({ output: "/sophisticatedbackpacks:.*feeding_upgrade/" });
  event.remove({ output: "/sophisticatedbackpacks:.*void_upgrade/" });
  event.remove({ output: "/sophisticatedbackpacks:.*magnet_upgrade/" });
  event.remove({ output: "/sophisticatedbackpacks:.*deposit_upgrade/" });
  event.remove({ output: "/sophisticatedbackpacks:.*restock_upgrade/" });
  event.remove({ output: "sophisticatedbackpacks:anvil_upgrade" });
  event.remove({ output: "sophisticatedbackpacks:smithing_upgrade" });
  event.remove({ output: "sophisticatedbackpacks:stonecutter_upgrade" });
  // disable auto upgradse
  event.remove({ output: "/sophisticatedbackpacks:.*auto*/" });
});
