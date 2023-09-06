function findKthPositive(list, k) {
    let missed = 0;
    let current = 1;
    let idx = 0;

    while (missed < k) {
        if (idx < list.length && list[idx] === current) {
            idx++; // Move to the next element in the list
        } else {
            missed++;
        }
        current++; // Always increment current
    }

    return current - 1;
}


console.log(findKthPositive([1,2,3,4], 1))
