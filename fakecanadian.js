function fakecanadian(string) {
  return _.map(data, function(str){return `${str} eh.`;});
}

console.log(fakecanadian(['Would you like to eat?', 'No thank you.']));