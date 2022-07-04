const CONTRACT_ADDRESS = '0x6A7bE7Dcf864B49289C93Fb812021942fc3c9776';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    //  mana: characterData.mana.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
