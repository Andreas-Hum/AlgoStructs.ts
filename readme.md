# AlgoStructs.ts: Data Structures and Algorithms

This repository contains implementations of various data structures and algorithms in TypeScript. It is intended to be used as a library for beginners to see how data structures and common algorithms are implemented. The project is organized into different categories for ease of navigation.

## Table of Contents

- [Data Structures](#data-structures)
  - [Binary Trees](#binary-trees)    
    - BinaryTree
    - BinarySearchTree
  - [Graphs](#graphs)
    <!-- - [Adjacency List](#adjacency-list)
    - [Adjacency Matrix](#adjacency-matrix) -->
    - Vertex Graph
  - [Lists](#lists)
    - Doubly Linked Lists
    - Singly Linked Lists
  - [Queues](#queues)
    - Queue
  - [Stacks](#stacks)
    - Stack
  - [Tables](#tables)
    - Hash Tables
- [Algorithms](#algorithms)
  - [Divisor](#divisor)
    - Greatest Common Divisor
    - Least Common Multiple
  - [Fibonacci](#fibonacci)
    - FastFibonacci
    - Fibonacci
  - [Primes](#primes)
    - Miller-Rabin Primality Test
    - Sieve of Atkin
    - Sieve of Eratosthene
  - [Search](#search)
    - Binary Search
    - Exponential Search
    - Interpolation Search
    - Jump Search
    - Linear Search
    - Meta Binary Search
    - Ternary Search
  - [Graph Algorithms](#graph-algorithms)
    - Breadth-First Search
    - Depth-First Search
    - Dijkstra's Algorithm
    - A* Search
    - Topological Sort
  - [Sorting Algorithms](#sorting-algorithms)
    - [O(n^2) Algorithms](#on2-algorithms)
        - Selection Sort
        - Bubble Sort
        - Insertion Sort
        - Exchange Sort
        - Comb Sort
        - Shell Sort
        - Gnome Sort
    - [O(n log n) Algorithms](#on-log-n-algorithms)
        - Merge Sort
        - Quick Sort
        - Heap Sort
        - Block Sort
        - Smooth Sort
    - [O(n + k) Algorithms](#on--k-algorithms)
        - Counting Sort
        - Radix Sort
        - Bucket Sort
- [Getting Started](#getting-started)
- [Contact](#contact)
- [License](#license)

## Data Structures

### [Binary Trees](https://en.wikipedia.org/wiki/Binary_search_tree)

- **[BinaryTree](src/DataStructures/BinaryTrees/BinaryTree.ts)**: A binary tree implementation. Binary trees are hierarchical data structures in which each node has at most two children, referred to as the left child and the right child.
- **[BinarySearchTree](src/DataStructures/BinaryTrees/BinarySearchTree.ts)**: A binary search tree implementation. Binary search trees are used to maintain a sorted order of elements, allowing for efficient insertion, deletion, and lookup operations.

### [Graphs](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))

<!-- - [**Adjacency List**](https://en.wikipedia.org/wiki/Adjacency_list)
  - **[UnweightedGraph](src/DataStructures/Graphs/AdjacencyListGraph/UnweightedGraph.ts)**: A graph data structure with support for unweighted edges. Uses an adjacency list to represent the graph.
  - **[WeightedGraph](src/DataStructures/Graphs/AdjacencyListGraph/WeightedGraph.ts)**: A graph data structure with support for weighted edges. Uses an adjacency list to represent the graph.

- [**Adjacency Matrix**](https://en.wikipedia.org/wiki/Adjacency_matrix)
  - **[UnweightedGraph](src/DataStructures/Graphs/AdjacencyMatrixGraph/UnweightedGraph.ts)**: A graph data structure with support for unweighted edges. Uses an adjacency matrix to represent the graph.
  - **[WeightedGraph](src/DataStructures/Graphs/AdjacencyMatrixGraph/WeightedGraph.ts)**: A graph data structure with support for weighted edges. Uses an adjacency matrix to represent the graph. -->

- [**Vertex Graph**](https://en.wikipedia.org/wiki/Vertex_(graph_theory))
  - **[UnweightedGraph](src/DataStructures/Graphs/VertexClassGraph/UnweightedGraph.ts)**: A graph data structure with support for unweighted edges. Uses a vertex class to represent the graph.
  - **[WeightedGraph](src/DataStructures/Graphs/VertexClassGraph/WeightedGraph.ts)**: A graph data structure with support for weighted edges. Uses a vertex class to represent the graph.

### [Lists](https://en.wikipedia.org/wiki/List_(abstract_data_type))

- #### [Doubly Linked Lists](https://en.wikipedia.org/wiki/Doubly_linked_list)
  - **[DoublyLinkedList](src/DataStructures/Lists/DoublyLinkedList.ts)**: A doubly linked list implementation. Doubly linked lists are used to store a collection of elements where each element points to both its previous and next element, allowing for efficient bidirectional traversal.
- #### [Singly Linked Lists](https://en.wikipedia.org/wiki/Linked_list)
  - **[SinglyLinkedList](src/DataStructures/Lists/SinglyLinkedList.ts)**: A singly linked list implementation. Singly linked lists are used to store a collection of elements where each element points to the next element, allowing for efficient unidirectional traversal.

### [Queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

- **[Queue](src/DataStructures/Queues/Queue.ts)**: A generic queue class implemented using an array. Queues follow the First-In-First-Out (FIFO) principle, where elements are added to the back and removed from the front.

### [Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

- **[Stack](src/DataStructures/Stacks/Stack.ts)**: A generic stack class implemented using an array. Stacks follow the Last-In-First-Out (LIFO) principle, where elements are added and removed from the top.

### [Tables](https://en.wikipedia.org/wiki/Table_(information))

- #### [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)
  - **[HashTable](src/DataStructures/Table/HashTable/HashTable.ts)**: A generic hash table implementation. Hash tables are used to store key-value pairs and provide efficient data retrieval. This implementation uses open addressing and linked lists to handle collisions.

## Algorithms

### [Divisor](https://en.wikipedia.org/wiki/Divisor)

- [Greatest Common Divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)
  - **[GreatestCommonDivisor](src/Algorithms/Divisor/GreatestCommonDivisor.ts)**: Implementation of the greatest common divisor algorithm. This algorithm finds the largest positive integer that divides two numbers without leaving a remainder.

- [Least Common Multiple](https://en.wikipedia.org/wiki/Least_common_multiple)
  - **[LeastCommonDivisor](src/Algorithms/Divisor/LeastCommonDivisor.ts)**: Implementation of the least common divisor algorithm. This algorithm finds the smallest positive integer that is a multiple of two numbers.

### [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)

- **[FastFibonacci](src/Algorithms/Fibonacci/FastFibonacci.ts)**: An optimized implementation of the Fibonacci sequence. This implementation uses memoization to improve performance.
- **[Fibonacci](src/Algorithms/Fibonacci/Fibonacci.ts)**: A basic implementation of the Fibonacci sequence. This implementation uses a simple recursive approach.

### [Primes](https://en.wikipedia.org/wiki/Prime_number)

- [Miller-Rabin Primality Test](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test)
  - **[MillerRabin](src/Algorithms/Primes/MillerRabin.ts)**: Implementation of the Miller-Rabin primality test. This algorithm is used to determine if a number is a probable prime.
- [Sieve of Atkin](https://en.wikipedia.org/wiki/Sieve_of_Atkin)
  - **[SieveOfAtkin](src/Algorithms/Primes/SieveOfAtkin.ts)**: Implementation of the Sieve of Atkin algorithm. This algorithm is used to find all prime numbers up to a specified integer.
- [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
  - **[SieveOfEratosthenes](src/Algorithms/Primes/SieveOfEratosthenes.ts)**: Implementation of the Sieve of Eratosthenes algorithm. This algorithm is used to find all prime numbers up to a specified integer.

### [Search Algorithms](https://en.wikipedia.org/wiki/Search_algorithm)

- [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
  - **[BinarySearch](src/Algorithms/Search/BinarySearch.ts)**: Implementation of the binary search algorithm. This algorithm finds the position of a target value within a sorted array.
- [Exponential Search](https://en.wikipedia.org/wiki/Exponential_search)
  - **[ExponentialSearch](src/Algorithms/Search/ExponentialSearch.ts)**: Implementation of the exponential search algorithm. This algorithm finds the range where the target value may exist and then performs a binary search within that range.
- [Interpolation Search](https://en.wikipedia.org/wiki/Interpolation_search)
  - **[InterpolationSearch](src/Algorithms/Search/InterpolationSearch.ts)**: Implementation of the interpolation search algorithm. This algorithm is an improved variant of binary search for uniformly distributed data.
- [Jump Search](https://en.wikipedia.org/wiki/Jump_search)
  - **[JumpSearch](src/Algorithms/Search/JumpSearch.ts)**: Implementation of the jump search algorithm. This algorithm divides the array into blocks and performs a linear search within the block where the target value may exist.
- [Linear Search](https://en.wikipedia.org/wiki/Linear_search)
  - **[LinearSearch](src/Algorithms/Search/LinearSearch.ts)**: Implementation of the linear search algorithm. This algorithm sequentially checks each element of the array until the target value is found.
- [Meta Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm#Meta_binary_search)
  - **[MetaBinarySearch](src/Algorithms/Search/MetaBinarySearch.ts)**: Implementation of the meta binary search algorithm. This algorithm is a variant of binary search that uses a different approach to divide the search space.
- [Ternary Search](https://en.wikipedia.org/wiki/Ternary_search)
  - **[TernarySearch](src/Algorithms/Search/TernarySearch.ts)**: Implementation of the ternary search algorithm. This algorithm divides the array into three parts and recursively searches in the relevant part.

### [Graph Algorithms](https://en.wikipedia.org/wiki/Graph_theory)

- [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
  - **[BreadthFirstSearch](src/Algorithms/Graph/BreadthFirstSearch.ts)**: Implementation of the breadth-first search algorithm. This algorithm explores all the vertices of a graph in breadthward motion.
- [Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search)
  - **[DepthFirstSearch](src/Algorithms/Graph/DepthFirstSearch.ts)**: Implementation of the depth-first search algorithm. This algorithm explores all the vertices of a graph in depthward motion.
- [Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
  - **[Dijkstra](src/Algorithms/Graph/Dijkstra.ts)**: Implementation of Dijkstra's shortest path algorithm. This algorithm finds the shortest path between nodes in a graph.
- [A* Search](https://en.wikipedia.org/wiki/A*_search_algorithm)
  - **[AStar](src/Algorithms/Graph/AStar.ts)**: Implementation of the A* search algorithm. This algorithm is used for finding the shortest path from a start node to a goal node in a graph.
- [Topological Sort](https://en.wikipedia.org/wiki/Topological_sorting)
  - **[TopologicalSort](src/Algorithms/Graph/TopologicalSort.ts)**: Implementation of the topological sort algorithm. This algorithm orders the nodes in a directed acyclic graph (DAG) in a linear order.

### [Sorting Algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm)

#### O(n^2) Algorithms

- [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)
  - **[SelectionSort](src/Algorithms/Sorting/SelectionSort.ts)**: Implementation of the selection sort algorithm. This algorithm divides the array into a sorted and an unsorted region and repeatedly selects the smallest element from the unsorted region to move to the sorted region.
- [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
  - **[BubbleSort](src/Algorithms/Sorting/BubbleSort.ts)**: Implementation of the bubble sort algorithm. This algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
- [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
  - **[InsertionSort](src/Algorithms/Sorting/InsertionSort.ts)**: Implementation of the insertion sort algorithm. This algorithm builds the final sorted array one item at a time, with the assumption that the first item is already sorted.
- [Exchange Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Exchange_sort)
  - **[ExchangeSort](src/Algorithms/Sorting/ExchangeSort.ts)**: Implementation of the exchange sort algorithm. This algorithm compares each pair of elements and swaps them if they are in the wrong order.
- [Comb Sort](https://en.wikipedia.org/wiki/Comb_sort)
  - **[CombSort](src/Algorithms/Sorting/CombSort.ts)**: Implementation of the comb sort algorithm. This algorithm improves on bubble sort by using a gap sequence to compare elements that are farther apart, reducing the gap in each iteration until it becomes 1.
- [Shell Sort](https://en.wikipedia.org/wiki/Shellsort)
  - **[ShellSort](src/Algorithms/Sorting/ShellSort.ts)**: Implementation of the shell sort algorithm. This algorithm uses a gap sequence to compare and sort elements that are far apart, reducing the gap in each iteration until it becomes 1. With the best gap sequence, the worst-case time complexity is O(n log^2 n).
- [Cocktail Sort](https://en.wikipedia.org/wiki/Cocktail_shaker_sort)
  - **[CocktailSort](src/Algorithms/Sorting/CocktailSort.ts)**: Implementation of the cocktail sort algorithm. This algorithm is a variation of bubble sort that sorts in both directions on each pass through the list, improving the efficiency by allowing the array to be sorted from both ends.
- [Gnome Sort](https://en.wikipedia.org/wiki/Gnome_sort)
  - **[GnomeSort](src/Algorithms/Sorting/GnomeSort.ts)**: Implementation of the gnome sort algorithm. This algorithm is similar to insertion sort but moves elements to their correct position by a series of swaps, similar to the way a gnome sorts a line of flower pots.

#### O(n log n) Algorithms

- [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)
  - **[MergeSort](src/Algorithms/Sorting/MergeSort.ts)**: Implementation of the merge sort algorithm. This algorithm divides the array into two halves, recursively sorts them, and then merges the sorted halves.
- [Quick Sort](https://en.wikipedia.org/wiki/Quicksort)
  - **[QuickSort](src/Algorithms/Sorting/QuickSort.ts)**: Implementation of the quick sort algorithm. This algorithm picks an element as a pivot, partitions the array around the pivot, and recursively sorts the partitions.
- [Heap Sort](https://en.wikipedia.org/wiki/Heapsort)
  - **[HeapSort](src/Algorithms/Sorting/HeapSort.ts)**: Implementation of the heap sort algorithm. This algorithm builds a max heap from the input data, then repeatedly extracts the maximum element from the heap and rebuilds the heap.
- [Block Sort](https://en.wikipedia.org/wiki/Block_sort)
  - **[BlockSort](src/Algorithms/Sorting/BlockSort.ts)**: Implementation of the block sort algorithm. This algorithm uses quicksort as the default sorting method and divides the array into blocks, sorting each block individually and then merging them.
- [Smooth Sort](https://en.wikipedia.org/wiki/Smoothsort)
  - **[SmoothSort](src/Algorithms/Sorting/SmoothSort.ts)**: Implementation of the smooth sort algorithm. This algorithm is a variation of heapsort that sorts an array in O(n log n) time in the worst case and O(n) time in the best case.


#### O(n + k) Algorithms

- [Counting Sort](https://en.wikipedia.org/wiki/Counting_sort)
  - **[CountingSort](src/Algorithms/Sorting/CountingSort.ts)**: Implementation of the counting sort algorithm. This algorithm counts the number of occurrences of each unique element in the input array and uses this count to determine the position of each element in the sorted array.
- [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort)
  - **[RadixSort](src/Algorithms/Sorting/RadixSort.ts)**: Implementation of the radix sort algorithm. This algorithm processes each digit of the numbers starting from the least significant digit to the most significant digit, using counting sort as a subroutine to sort the digits.
- [Bucket Sort](https://en.wikipedia.org/wiki/Bucket_sort)
  - **[BucketSort](src/Algorithms/Sorting/BucketSort.ts)**: Implementation of the bucket sort algorithm. This algorithm distributes the elements of the array into a number of buckets, sorts each bucket individually, and then concatenates the sorted buckets.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```sh
git clone https://github.com/Andreas-Hum/AlgoStructs.ts
cd datastructures
npm install
```

## Contact

I am a computer science student from Aalborg University. You can contact me at [Andreas@hummelmose.dk](mailto:Andreas@hummelmose.dk).

## Feel Free to Contribute

If you have any suggestions, ideas, or improvements, please feel free to reach out or submit a pull request.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software.