class Graph{
    constructor(){
        this.adjecencylist =[]
    }
    addVertex(vertex){
        if(!this.adjecencylist[vertex]){
            this.adjecencylist[vertex] = []
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencylist[vertex1] || !this.adjecencylist[vertex2]){
            console.log("Invalid vertex")
        }else{
            this.adjecencylist[vertex1].push(vertex2)
            this.adjecencylist[vertex2].push(vertex1)
        }
    }

    bfs(startingVertex){
        console.log("adlist : ",this.adjecencylist)
        const visited = {}
        const result =[]
        const queue = [startingVertex]
        visited[startingVertex] = true
        console.log(visited)

        while(queue.length > 0){
            const currentVertex = queue.shift()
            console.log("cuurent",currentVertex)
            result.push(currentVertex)

            this.adjecencylist[currentVertex].forEach(element => {
                if(!visited[element]){
                    visited[element] = true
                    queue.push(element)
                }
            });
        }
        return result
    }

   dfs_search(startingVertex){
      const visited={}
      const result=[]

       const dfs=(vertex)=>{
           if(vertex)return
           visited[vertex] = true
           result.push(vertex)

           this.adjecencylist[vertex].forEach(element=>{
                if(!visited[element]){
                    dfs(element)
                }
           })
       }
       dfs(startingVertex)
       return result
   }
}


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

  console.log(graph.bfs("A"))
  console.log(graph.dfs_search("A"))