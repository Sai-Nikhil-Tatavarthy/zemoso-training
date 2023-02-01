''' Problem:Bus Traveling System: Nina wants to travel the city, but is unaware about the bus routes and the cost. The goal is to solve this problem by creating a bus traveling system to find the shortest path and least traveling distance to reach from source to destination.'''




'''Solution : The bus traveling system can be built using graph theory and Dijkstra's algorithm.
The city can be represented as a graph with nodes representing the bus stops and edges representing the bus routes between stops.
The cost of the edge can be represented as the distance or time required to travel from one stop to another.

Dijkstra's algorithm can be used to find the shortest path from the source to the destination by considering the costs associated with each edge and updating the minimum cost path from the source to all other nodes.

Once the algorithm has computed the shortest path, it can be used to find the least traveling distance between the source and destination, along with the intermediate stops in the shortest path.

Additionally, the system can be made more user-friendly by providing visual representation of the bus routes and stops, along with information on arrival and departure times and the cost of travel.'''
import heapq

def dijkstra(graph, start, end):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    while heap:
        dist, current_node = heapq.heappop(heap)
        if current_node == end:
            break
        for neighbor, weight in graph[current_node].items():
            new_distance = dist + weight
            if new_distance < distances[neighbor]:
                distances[neighbor] = new_distance
                heapq.heappush(heap, (new_distance, neighbor))        
    return distances[end]

if __name__ == '__main__':
    graph = {
        'A': {'B': 2, 'C': 4},
        'B': {'C': 1, 'D': 5},
        'C': {'D': 1},
        'D': {}
    }
    start = 'A'
    end = 'D'
    distance = dijkstra(graph, start, end)
    print(f"Shortest distance from {start} to {end}: {distance}")

 '''Output:Shortest distance from A to D: 4'''
 
 
'''In this example, the dijkstra function implements the Dijkstra's algorithm and returns the shortest distance between the start and end nodes in the graph. 
The graph is represented as a dictionary where each key is a node and its value is a dictionary of its neighbors and the weights of the edges connecting to them. 
The heap data structure is used to efficiently keep track of the nodes with the smallest distances from the source.'''
