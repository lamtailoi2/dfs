function dfs(graph, startNode) {
    let visited = {};
    let stack = [startNode];
    while (stack.length > 0) {
        let currentNode = stack.pop();
        visited[currentNode] = true;
        for (let neighbor of graph[currentNode])
            if (!visited[neighbor])
                stack.push(neighbor);
    }
    return Object.keys(visited);
}

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: [],
  };
let vistedNodes = dfs(graph, 'A')
  console.log(vistedNodes);