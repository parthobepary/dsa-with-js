/*
* Binary Search Algorithm
*  - Binary search is a fast search algorithm with run-time complexity of O(log n).
* - This search algorithm works on the principle of divide and conquer.
*  - For this algorithm to work properly, the data collection should be in the sorted form.
* - Binary search looks for a particular item by comparing the middle most item of the collection.
* - If a match occurs, then the index of item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item.
* Otherwise, the item is searched for in the sub-array to the right of the middle item.
* This process continues on the sub-array as well until the size of the subarray reduces to zero.
* */

// Binary Search function
const data = [12, 22, 34, 47, 55, 67, 82, 98, 103, 201, 222, 345, 400];

const search_item = 4000;
const start = 0;
const end = data.length - 1;

function binarySearch(data, search_item, start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (data[mid] === search_item) {
        return mid;
    } else if (data[mid] > search_item) {
        return binarySearch(data, search_item, start, mid - 1);
    } else {
        return binarySearch(data, search_item, mid + 1, end);
    }
}

console.log(binarySearch(data, search_item, start, end));