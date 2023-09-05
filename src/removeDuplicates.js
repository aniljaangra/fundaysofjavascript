"use strict";
const list = ["hello", "hi", "hola", "hello", "again"];
// Using Sets
console.log("Duplicates Removed using Set", [...new Set(list)]);
// Using Filter
console.log("Duplicates Removed using Filter", list.filter((item, i) => list.indexOf(item) === i));
// Using Map
console.log("Duplicates Removed using Map", [...list.reduce((map, current) => {
        map.set(current, true);
        return map;
    }, new Map()).keys()]);
