class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
        return "Invalid vertex";
      }
  
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    depthFirstTraversal(startingVertex) {
      const visited = {};
      const result = [];
  
      const dfs = (vertex) => {
        if (!vertex) return;
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            dfs(neighbor);
          }
        });
      };
  
      dfs(startingVertex);
      return result;
    }
  
    breadthFirstTraversal(startingVertex) {
      const visited = {};
      const result = [];
      const queue = [startingVertex];
      visited[startingVertex] = true;
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  
  console.log(graph.depthFirstTraversal("A")); // Output: [ 'A', 'B', 'D', 'C', 'E' ]
  console.log(graph.breadthFirstTraversal("A")); // Output: [ 'A', 'B', 'C', 'D', 'E' ]
  