class Graph{
    constructor(){
        this.adjacencylist={}
    }

    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=[]
        }
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacencylist[vertex1] || !this.adjacencylist[vertex2]){
            return "invalid vertex"
        }

        this.adjacencylist[vertex1].push(vertex2)
        this.adjacencylist[vertex2].push(vertex1)
    }
     
    bfs(startingVertex){
        const visited ={}
        const result =[]
        const queue = [startingVertex]
        visited[startingVertex]

        while(queue.length >0){
            const currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencylist[currentVertex].forEach(element => {
                  if(!visited[element]){
                      visited[element] = true
                      queue.push(element)
                  }
            });
        }
        return result
    }
}


const graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log(graph.bfs("B"))