const permutations = (str) => {
  let results = [];
  //   if (str.length == 0) return [""];
  if (str.length == 1) return [str];
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const restString = str.slice(0, i) + str.slice(i + 1);
    // console.log(letter, restString);
    const combinations = permutations(restString);
    // console.log(combinations);
    combinations.forEach((comb) => {
      results.push(`${letter}${comb}`);
    });
  }
  return results;
};

console.log(permutations("abc"));
