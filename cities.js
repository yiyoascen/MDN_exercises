let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
let list = [];
for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here
  let result = input.slice(0,1).toUpperCase() + input.slice(1, input.length).toLowerCase();
  
  list.push(result);
}

console.log(list);
