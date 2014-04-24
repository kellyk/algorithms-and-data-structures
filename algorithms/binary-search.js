var binarySearch = function(list, searchElement) {
    'use strict';

    var minIndex = 0;
    var maxIndex = list.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = list[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

  return -1;
};

console.log('-------------------- Binary Search --------------------');

var numbers = [0,1,2,3,4,5,6,7,8,25];
console.log("binarySearch(3): ", binarySearch(numbers, 3));
console.log("binarySearch(0): ", binarySearch(numbers, 0));
console.log("binarySearch(6): ", binarySearch(numbers, 6));
console.log("binarySearch(25): ", binarySearch(numbers, 25));