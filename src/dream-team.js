module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let names = [];
  for (let i = 0 ; i < members.length ; i++){
    if (typeof members[i] == 'string') {
      members[i] = members[i].split(' ').join('');
      names.push(members[i][0]);
    }
  } 
  for (let i = 0 ; i < names.length ; i++) {
    if (names.length === 0) {
      return false;
    }
      names[i] = names[i].toUpperCase();
  }
  return names.sort().join('');
   
  };

