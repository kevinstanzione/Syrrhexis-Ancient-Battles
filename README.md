# NHB List Builder

Army list builder for **Neo Historical Battles**. Pick an army and game size, add units, and get a printable list with armor, health breaks, Unit Strength and Army Morale.

It is a static website: plain HTML, CSS and JavaScript, with no server, database or build step.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page |
| `css/style.css` | Styles, including the print layout |
| `data/armies.js` | All army profiles, points, options and characters. **This is the file you edit when points change.** |
| `js/rules.js` | Rules text shown on the list sheet (special rules, character abilities, unit types) |
| `js/calc.js` | Calculations: points, armor, health breaks, Unit Strength, Army Morale |
| `js/app.js` | The interface |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Try it locally

Double-click `index.html`. It works straight from your computer, no install needed.

## Publish on GitHub Pages (free)

1. Create a free account at github.com.
2. Click **New repository**, name it (for example `nhb-list-builder`), set it to **Public**, and create it.
3. On the new repository page, click **uploading an existing file**. Drag in everything inside this folder (not the folder itself), including `.nojekyll`, then click **Commit changes**.
   - Your computer may hide `.nojekyll` because its name starts with a dot. The site still works without it.
4. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, and click **Save**.
5. After a minute or two the page shows your site address, usually `https://YOUR-USERNAME.github.io/nhb-list-builder/`.

### Your own domain (optional)

Buy a domain from any registrar, then in **Settings → Pages → Custom domain** enter it (for example `builder.neohistoricalbattles.com`) and follow GitHub's DNS instructions.

## Updating points or units

1. Open `data/armies.js` in any text editor (on GitHub you can click the file, then the pencil icon).
2. Change the values. Each unit looks like this:

```js
{
  "id": "hattian-infantry",          // unique, no spaces
  "name": "Hattian Infantry",
  "type": "Warrior",                 // Warrior, Light Warrior, Skirmishing Warrior, Cavalry, Light Cavalry,
                                     // Skirmishing Cavalry, Chariot, Elephant, Light Warmachine
  "move": 6, "training": 5,
  "points": 12,                      // per model; null shows the unit as TBD
  "comps": [[4,4],[3,4]],            // Closed Order: [ranks, files] choices
  // "range": [8,12],                // Open Order: min and max models instead of comps
  "equip": ["ŠUKUR"], "gear": ["GÍR"],
  "body": null, "shield": null,      // armor names, e.g. "Light Armor", "Shield"
  "opts": [ ... ],                   // weapon swaps ("swap"), unit-wide upgrades ("add"),
                                     // per-model options for Mixed Units ("count")
  "chars": [ {"one": [["Lead Captain", 3], ["Standard Bearer", 8]]} ],
                                     // add "req": true for "must take"
  "rules": [],                       // special rule names from the rulebook
  "weapons": { "ŠUKUR": ["9","5","6","Reach (1)"] }   // Length/Range, Accuracy, Strength, Ability
}
```

3. Save (or **Commit changes** on GitHub). The live site updates within a minute or two.

Keep the first line of `data/armies.js` (`window.NHB_DATA = `) and the final `;` as they are. If the page goes blank after an edit, a comma or bracket is usually missing.

## Notes

- Saved lists are stored in each player's own browser. They are not shared between people or devices.
- Rules text in `js/rules.js` is condensed from the Neo Historical Battles rulebook. Update it when the rulebook changes.
