/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    return formula(n)
};

const formula = (n) => {
    // (1 + i) * i / 2 < n
    // i + i^2 < 2n
    const doubleN = n * 2
    let i = 0
    while (true) {
        const sum = i + i * i
        if (sum < doubleN) {
            i++
        } else if (sum > doubleN) {
            return i - 1
        } else {
            return i
        }
    }
}

const addAndCompare = (n) => {
    let sum = 0
    let i = 0
    while (sum < n) {
        i++
        sum += i
    }
    if (sum > n) {
        i--
    }
    return i
}