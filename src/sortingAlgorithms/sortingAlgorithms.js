export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array. Dont swap
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array. swap
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array.slice(), 0, array.length-1, animations);
    return animations;
  }
  
  function quickSortHelper(
    mainArray,
    left,
    right,
    animations
  ) {
    console.log(mainArray);
    var index;
    if (mainArray.length > 1) {
        index = partition(mainArray, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortHelper(mainArray, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortHelper(mainArray, index, right, animations);
        }
    }
    console.log(mainArray);
    //return items;
  }

  function partition(mainArray, left, right, animations) {
    var pivot   = mainArray[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (mainArray[i] < pivot) {
            i++;
        }
        while (mainArray[j] > pivot) {
            j--;
        }

        animations.push([i, j]);
        animations.push([i, j]);

        if (i <= j) {
          let temp = mainArray[i];
          animations.push([i, mainArray[j]]);
          animations.push([i, j]);
          animations.push([i, j]);
          mainArray[i] = mainArray[j];
          animations.push([j, temp]);
          mainArray[j] = temp; //swpping two elements
            i++;
            j--;
        }

        else {

          animations.push([i, mainArray[i]]);
          animations.push([i, j]);
          animations.push([i, j]);
          animations.push([j, mainArray[j]]);

        }
    }
    return i;
  }

export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array.slice(), animations);
    return animations;
  }

  function heapSort(mainArray, animations)
    {
        var n = mainArray.length;
 
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(mainArray, n, i, animations);
 
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = mainArray[0];
            mainArray[0] = mainArray[i];
            mainArray[i] = temp;

            animations.push([i, n-1]);
            animations.push([i, n-1]);
            animations.push([i, temp]);
            animations.push([i, n-1]);
            animations.push([i, n-1]);
            animations.push([0, mainArray[i]]);
 
            // call max heapify on the reduced heap
            heapify(mainArray, i, 0, animations);
        }
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in mainArray[]. n is size of heap
    function heapify(mainArray, n, i, animations)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && mainArray[l] > mainArray[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && mainArray[r] > mainArray[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            var temp = mainArray[i];
            mainArray[i] = mainArray[largest];
            mainArray[largest] = temp;

            animations.push([largest, i]);
            animations.push([largest, i]);
            animations.push([largest, temp]);
            animations.push([largest, i]);
            animations.push([largest, i]);
            animations.push([i, mainArray[i]]);
 
            // Recursively heapify the affected sub-tree
            heapify(mainArray, n, largest, animations);
        }
    }

export function getBubbleSortAnimations(array) {

  const animations = [];
  if (array.length <= 1) return array;
  doBubble(array, animations);
  return animations;

}
  function doBubble(mainArray, animations)
  {

    //console.log("Before Sorting");
    //console.log(auxiliaryArray);

    for (let i = 0; i < mainArray.length; i++) {
      for (let j = 1; j < mainArray.length-i; j++) {
        let k = i;
        // These are the values that we're comparing; we push them once
        // to change their color. These work
        animations.push([j-1, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color. These work
        animations.push([j-1, j]);
        
        if (mainArray[j - 1] > mainArray[j]) {
          //console.log(mainArray[j-1] + "is bigger than" + mainArray[j]);
          let temp = mainArray[j-1];

          animations.push([j, temp]);
          animations.push([j-1, j]);
          animations.push([j-1, j]);
          animations.push([j-1, mainArray[j]]);

          mainArray[j-1] = mainArray[j];
          mainArray[j] = temp;

          
          
        }

        else {
          //console.log(mainArray[j-1] + "is smaller than" + mainArray[j]);
          animations.push([j-1, mainArray[j-1]]);
          animations.push([j-1, j]);
          animations.push([j-1, j]);
          animations.push([j, mainArray[j]]);
          //mainArray[j-1] = auxiliaryArray[j];

        }
      }
    }

    //console.log("After Sorting");
    //console.log(mainArray);

  }
