/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const queue = new MaxPriorityQueue();

    stones.forEach(item => {
        queue.enqueue(item);
    })

    while(queue.size() > 1) {
        const firstMax = queue.dequeue().element;
        const secondMax = queue.dequeue().element;
        queue.enqueue(firstMax - secondMax);
    }

    return (queue.size() === 1) ? queue.dequeue().element : 0
};