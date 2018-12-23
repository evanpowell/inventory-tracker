const traps = [
  {
    name: 'arrow',
    cost: 9,
    desc: 'four arrows attached to a release or tripwire',
    weightMin: 7,
    weightMax: 15,
    dmg: '4d8',
    affect: 'Bleed',
    required: { // all required materials
      'arrow': 4,
      'wood flexing': 1,
      'tense cording': 1,
      'bone switch': 1
    },
    recoverable: false, // can be true, false, or array of recoverable items
    type: 'trap',
    subtype: 'explosive',
    assembly: 1
  },
  {
    name: 'fire',
    cost: 12,
    desc: 'an accelerant erupts flames when triggered',
    weightMin: 3,
    weightMax: 5,
    dmg: 'd10',
    affect: 'Explosion, Burns',
    workings: {
      'flame accelerant': 1,
      'flint switch': 1,
      'dense coil': 1
    },
    recoverable: false,
    type: 'trap',
    subtype: 'explosive',
    assembly: 1
  },
  {
    name: 'poison',
    cost: 0,
    desc: 'a bladder of poison that sprays when triggered',
    weightMin: 2,
    weightMax: 4,
    dmg: null,
    affect: 'Poisoned',
    workings: {
      'poison': 1,
      'waterskin': 1,
      'tense cording': 1,
    },
    recoverable: false,
    type: 'trap',
    subtype: 'explosive',
    assembly: 2
  },
  {
    name: 'net',
    cost: 8,
    desc: 'woven canvas or chain hoisted by rope when triggered',
    weightMin: 2,
    weightMax: 7,
    dmg: null,
    affect: 'Immobilize',
    workings: {
      'woven net': 1,
      'tense cording': 1
    },
    recoverable: true,
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 1
  },
  {
    name: 'oil',
    cost: 8,
    desc: 'oil splashed or poured from above, either boiling or cool',
    weightMin: 7,
    weightMax: 9,
    dmg: 'd8',
    affect: 'Burns',
    workings: {
      'oil': 6,
      'bucket': 1
    },
    recoverable: ['bucket'],
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 2
  },
  {
    name: 'pit',
    cost: 4,
    desc: 'hollowed earth with a false top',
    weightMin: 8,
    weightMax: 9,
    dmg: null,
    affect: 'Immobilize',
    workings: {
      'gardening tools': 1,
      'repair netting': 1,
      'wooden spikes': 1
    },
    recoverable: ['gardening tools'],
    optional: ['wooden spikes'],
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 4
  },
  {
    name: 'smoke',
    cost: 10,
    desc: 'canvas, oiled sphere that burns black smoke',
    weightMin: 2,
    weightMax: 2,
    dmg: null,
    affect: 'Blinded, Obstruct',
    workings: {
      'smokewood chunk': 1,
      'oil': 1,
      'burlap': 1,
      'repair netting': 1
    },
    recoverable: false,
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 1
  },
  {
    name: 'snap',
    cost: 18,
    desc: 'weighted frame triggered to close rapidly',
    weightMin: 4,
    weightMax: 8,
    dmg: 'd12',
    affect: 'Bone Break',
    workings: {
      'metal frame': 2,
      'metal springs': 4,
      'dense coil': 1,
      'tense cording': 1,
      'metal switch': 1,
      'bone switch': 1 
    },
    recoverable: ['metal frame', 'metal springs', 'dense coil'],
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 2
  },
  {
    name: 'snare',
    cost: 3,
    desc: 'a simple hemp or leather cord cinch',
    weightMin: 0.5,
    weightMax: 1,
    dmg: 'd4',
    affect: 'Immobilize',
    workings: {
      'tense cording': 1,
      'wood switch': 1,
    },
    recoverable: false,
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 1
  },
  {
    name: 'spike',
    cost: 10,
    desc: 'a pad of sticking spikes concealed in the ground',
    weightMin: 4,
    weightMax: 6,
    dmg: '2d6',
    affect: 'Immobolize, Bleed',
    workings: {
      'repair netting': 1,
      'bag of splinters': 1,
      'tense cording': 1
    },
    recoverable: false,
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 1
  },
  {
    name: 'tripwire',
    cost: 7,
    desc: 'suspended wire meant to trip or alert',
    weightMin: 1,
    weightMax: 2,
    dmg: 'd4',
    affect: 'Alert, Knock Down',
    workings: {
      'tense cording': 1,
      'dense coil': 1
    },
    recoverable: false,
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 1
  },
  {
    name: 'tumble',
    cost: 6,
    desc: 'large boulders, logs, or debris released on target',
    weightMin: 5,
    weightMax: 8,
    dmg: 'd6',
    affect: 'Immobolize, Bone Break',
    workings: {
      'tense cording': 1,
      'wood switch': 2,
      'dense coil': 1,
      'large found debris': 1
    },
    recoverable: false,
    type: 'trap',
    subtype: 'immobilizing',
    assembly: 2
  }
];

module.exports = traps;