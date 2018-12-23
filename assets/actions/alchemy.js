const { ingredients } = require('../constants');

const actions = [
  // COMPOUNDS
  {
    name: 'Awaken',
    effect: 'Jolted awake; remain awake and jittery, 2 cycles',
    required: [
      ingredients.birthwort,
      ingredients.liverwort,
      ingredients.skunkweed,
      ingredients.reagent
    ],
    createsItem: true,
    proficiency: 'compounds'
  },
  {
    name: 'Compelling Sleep',
    effect: 'Target falls fast asleep, 2 turns / 4 levels',
    required: [
      ingredients.goldenrod,
      ingredients.votallaPlant,
      ingredients.agate,
      ingredients.reagent
    ],
    createsItem: true,
    proficiency: 'compounds'
  },
  {
    name: 'Feign Death',
    effect: 'Appearanc of death, 4 turns / 4 levels',
    required: [
      ingredients.skunkweed,
      ingredients.jozaRoot,
      ingredients.purslane,
      ingredients.reagent
    ],
    createsItem: true, 
    proficiency: 'compounds'
  },
  {
    name: 'Hallucinate',
    effect: 'Hallucinations, 2 turns / 3 levels',
    required: [
      ingredients.ashroot,
      ingredients.goldenrod,
      ingredients.pearl,
      ingredients.reagent
    ],
    createsItem: true,
    proficiency: 'compounds'
  },
  {
    name: 'Pacify',
    effect: 'Suggestable, 2 turns / 3 levels',
    required: [
      ingredients.ashroot,
      ingredients.jozaRoot,
      ingredients.birthwort,
      ingredients.reagent
    ],
    createsItem: true,
    proficiency: 'compounds'
  },
  {
    name: 'Suppress Craving',
    effect: 'Craving stalled; negated after 4 doses, 2 cycles',
    required: [
      ingredients.ashroot,
      ingredients.cyclamen,
      ingredients.lemonstem,
      ingredients.reagent
    ],
    createsItem: true,
    proficiency: 'compounds'
  },
  // ELIXIRS
  {
    name: 'The Ashen Reaper',
    effect: 'Black vomit, paralysis, death in 12 rounds',
    required: [
      ingredients.belladonna,
      ingredients.hemlock,
      ingredients.votallaPlant,
      ingredients.liverwort
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'The Creeping Embers',
    effect: 'Flesh creeps and erupts, 10 turns until death',
    required: [
      ingredients.briony,
      ingredients.witchsWebbing,
      ingredients.votallaPlant,
      ingredients.coltsfoot
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Godsmilk',
    effect: 'Fever, increased pulse, 10 turns until death',
    required: [
      ingredients.belladonna,
      ingredients.rotoka,
      ingredients.votallaPlant,
      ingredients.cyclamen
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'The Putrid Weeper',
    effect: 'Bleed to death, 1 injury per round until death / aid',
    required: [
      ingredients.skunkweed,
      ingredients.hemlock,
      ingredients.votallaPlant,
      ingredients.daffodil
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: `Vallicast's Lullaby`,
    effect: 'Blindness in 2 turns, death by 4 turns',
    required: [
      ingredients.jozaRoot,
      ingredients.planeswort,
      ingredients.votallaPlant,
      ingredients.windFern
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: `Votalla's Dance`,
    effect: '3 turns each twitching, seizures, paralysis, then death',
    required: [
      ingredients.bindweed,
      ingredients.purslane,
      ingredients.liverwort,
      ingredients.briony
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Wrathwine',
    effect: '1 turn hallucinations; 5 turns of violence',
    required: [ingredients.ashroot,
      ingredients.pearl,
      ingredients.hemlock,
      ingredients.votallaPlant
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Delay Toxin',
    effect: 'Brief immunity to toxin, 1 turn per level',
    required: [
      ingredients.belladonna,
      ingredients.jozaRoot,
      ingredients.sage,
      ingredients.skunkweed
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Elixir of Healing',
    effect: 'Healing rate -3 injury per turn for 2 turns per level',
    required: [
      ingredients.velfrey, 
      ingredients.witchsWebbing,
      ingredients.myrtle,
      ingredients.lilac
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Paralysis',
    effect: 'Rigid paralysis, 1 turn per level',
    required: [
      ingredients.bindweed,
      ingredients.purslane,
      ingredients.liverwort,
      ingredients.briony
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Purge Toxin',
    effect: 'Reverses toxin effect, 2 turns until full effectiveness',
    required: [
      ingredients.belladonna,
      ingredients.lilac,
      ingredients.myrtle,
      ingredients.ribbedMelilotus
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  {
    name: 'Elixir of Truth',
    effect: 'Must share information, 1 turn per level',
    required: [
      ingredients.daffodil,
      ingredients.myrtle,
      ingredients.nettleMilk,
      ingredients.windFern
    ],
    createsItem: true,
    proficiency: 'elixirs'
  },
  // HERBALISM
  {
    name: 'Discover Ingredients',
    effect: 'Learn all ingredients, 2 turns',
    required: [
      ingredients.clearWater,
      ingredients.myrtle,
      ingredients.witchsWebbing
    ],
    createsItem: false,
    proficiency: 'herbalism'
  },
  {
    name: 'Experimentation',
    effect: `Learn potion's function, 1 turn`,
    required: [
      ingredients.clearWater,
      ingredients.lemonstem,
      ingredients.purslane
    ],
    createsItem: false,
    proficiency: 'herbalism'
  },
  {
    name: 'Make Extract',
    effect: 'Double original bundled uses, 4 turns; lasts 2 years',
    required: [
      ingredients.clearWater,
      ingredients.nettleMilk,
      ingredients.liverwort,
      ingredients.reagent
    ],
    createsItem: true,
    proficiency: 'herbalism'
  },
  {
    name: 'Make Poultice',
    effect: 'Negate infection; x2 healing rate, 1 turn',
    required: [
      ingredients.ashroot,
      ingredients.daffodil,
      ingredients.myrtle,
      ingredients.rotoka
    ],
    createsItem: true,
    proficiency: 'herbalism'
  },
  // SALVES
  {
    name: 'Burns',
    effect: 'Salve to treat burns, 4 turns; good for 1 year',
    required: [
      ingredients.briony,
      ingredients.cyclamen,
      ingredients.turmeric,
      ingredients.neutralOils
    ],
    createsItem: true,
    proficiency: 'salves'
  },
  {
    name: 'Frostbite',
    effect: 'Salve to treat frostbite, 6 turns; good for 1 year',
    required: [
      ingredients.agate,
      ingredients.pearl,
      ingredients.rotoka,
      ingredients.neutralOils
    ],
    createsItem: true,
    proficiency: 'salves'
  },
  {
    name: 'Hex Exposure',
    effect: 'Negate Latent Hex, 6 turns; good for 1 year',
    required: [
      ingredients.ashroot,
      ingredients.liverwort,
      ingredients.skunkweed,
      ingredients.neutralOils
    ],
    createsItem: true,
    proficiency: 'salves'
  },
  {
    name: 'Irritants',
    effect: 'Salve to treat irritants, 2 turns; good for 1 year',
    required: [
      ingredients.coltsfoot,
      ingredients.daffodil,
      ingredients.garlicScape,
      ingredients.neutralOils
    ],
    createsItem: true,
    proficiency: 'salves'
  },
  {
    name: 'Lacerations',
    effect: 'Salve to treat lacerations, 3 turns; good for one year',
    required: [
      ingredients.goldenrod,
      ingredients.lemonstem,
      ingredients.windFern,
      ingredients.neutralOils
    ],
    createsItem: true,
    proficiency: 'salves'
  },
];

module.exports = actions;
