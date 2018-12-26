export const state = () => ({
  username: null,
  characters: [],
  character: null
});

export const mutations = {
  setUsernameAndCharacters(state, { username, characters }) {
    state.username = username;
    state.characters = characters;
  },
  setCharacter(state, character) {
    state.character = character;
  }
};

const rbItems = require('../assets/rulebookItems');