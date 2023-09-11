const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "MEX"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Naive Approach
const routeMap = new Map();
for (const route of routes) {
  const [src, dest] = route;
  if (routeMap.has(src)) {
    routeMap.get(src).push(dest);
  } else {
    routeMap.set(src, [dest]);
  }
}

const visited = new Set();
console.log(routeMap);
const findRoutes = (dest, list, trail) => {
  for (const route of list) {
    if (!visited.has(route)) {
      visited.add(route);
      if (route === dest) {
        console.log("Found", [...trail, dest]);
        return;
      } else if (routeMap.get(route)?.length) {
        findRoutes(dest, routeMap.get(route), [...trail, route]);
      }
    }
  }
};
findRoutes("BKK", routesList, ["PHX"]);
