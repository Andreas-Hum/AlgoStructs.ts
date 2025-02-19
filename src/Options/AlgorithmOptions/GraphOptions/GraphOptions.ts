/**
 * Options for graph algorithms function.
 */
export interface GraphOptions<T> {
    /**
     * The function to get the neighbors of a node.
     * @param node - The node whose neighbors are to be retrieved.
     * @returns An array of neighboring nodes.
     */
    getNeighbors: (node: T) => T[];

    /**
     * The starting node for the DFS traversal.
     */
    startNode: T;

    /**
     * A callback function to process each visited node.
     * @param node - The node that has been visited.
     */
    visit?: (node: T) => void;

    /**
     * The target node for the DFS traversal.
     */
    targetNode?: T;
}

export interface WeightedGraphOptions<T> extends GraphOptions<T> {
    getWeight: (node: T, neighbor: T) => number;
    heuristic?: (node: T, target: T) => number; // Heuristic function for A*
}


export interface TopologicalSortOptions<T> {
    getNeighbors: (node: T) => T[];
    nodes: T[];
}
