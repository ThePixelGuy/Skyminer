# Skyminer
_A simple game about mining up asteroids for precious metals._

Hello and welcome to Skyminer! In this game you must send missions to various asteroids in order to gather their resources. These robotic missions do not always end in success, however. Successful missions grant you experience points or XP, as well as some money. XP makes failure less common.

[Read the changelog for more information about the current version and how it works.]

### Changelog
---
**2017-02-15:** Skyminer 0.11 is out! I've added:
* **Copypasta-based saving** As promised in my last changelog entry, I have now added a different form of saving for all of you who want to destroy their browser data. Don't worry, I won't judge. ;) All you have to do is copy your game as text and paste it back into the game when you want.
* **Intro** Man, have I wanted to implement this. It mimics the terminal of an old computer, reading "Booting Door OS (current version)...", a reference to Windows. Then, a file called "space_agency_manager.exe" is opened. (Hint: That's Skyminer.)
* **Booster Downgrade** This shopping option is unlocked when you have 5XP. The initial cost of this downgrade is 1XP, but this increases by 1 with every purchase. It decreases launch costs (multiplying them by 0.9), but increases your chance of failure.

**2017-02-14:** Skyminer 0.10 is [live](https://thepixelguy.github.io/skyminer)! It includes:
* **Experience points** For every successful mission you send up, you gain 1 experience point (XP). The way failures are calculated is that JavaScript picks a decimal from 0 to 1, multiplies it by (XP+1), and if it is bigger than 0.5, the mission succeeds. These XP points will also be able to unlock new upgrades in future versions.
* **Shopping** Right now, I've only added one upgrade - Drill Upgrades. This will multiply the multiplier of the ore's value by 1.5, but also multiply drill costs and launch costs by 1.1. Tip: Eventually, the cost of the drills and launch costs will become overwhelming, so don't buy too much of these.
* **Saving and Loading** Saving and loading is simple - press the save and load buttons. There's also an extra button for resetting your save and starting over. **WARNING:** Erasing your browser data will destroy your save. The next version will have copypasta-based saving as an option. **WARNING:** Attempting to load a blank save (when the save indicator says "null") will break launching systems.
