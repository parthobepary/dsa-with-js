/*
* Linear Search Algorithm
* - Linear search is the simplest search algorithm with a run-time complexity of O(n).
* - This search algorithm works by comparing each element of the data collection to the search item.
* - It is not necessary for the data collection to be sorted.
* - Linear search is rarely used practically because other search algorithms such as the
*  binary search algorithm and hash tables allow significantly faster searching of data.
* */

// Linear Search function

const data = [3, 12, 22, 2, 0, 34, 47, 33, 12, 55, 1, 67, 82, 98, 103, 201, 222, 103, 345, 65, 500, 400];

const search_item = 3;
let position = -1;

function linearSearch(data, search_item) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === search_item) {
            position = i;
        }
    }
    return position;
}

console.log(linearSearch(data, search_item));