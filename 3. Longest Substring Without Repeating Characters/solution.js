/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    return slidingWindow(s)
};

/* 128 ms */
const slidingWindow = (s) => {
    let lenS = s.length
    let start = 0
    let end = 0
    let maxLen = 0
    const included = {}
    while (end < lenS) {
        const ch = s[end]
        if (included[ch]) {
            while (s[start] !== ch) {
                included[s[start]] = false
                start++
            }
            start++
        } else {
            included[ch] = true
            maxLen = Math.max(maxLen, end - start + 1)
        }
        end++
    }

    return maxLen
}

/* 216 ms */
const latestAppearIdx = (s) => {
    let latestAppearIdx = {}
    let maxLen = []
    for (idx in s) {
        const ch = s[idx]
        if (latestAppearIdx[ch] === undefined) {
            if (idx > 0) {
                maxLen.push(maxLen[idx - 1] + 1)
            } else {
                maxLen.push(1)
            }
            latestAppearIdx[ch] = idx
        } else {
            maxLen.push(Math.min(idx - latestAppearIdx[ch], maxLen[idx - 1] + 1))
            latestAppearIdx[ch] = idx
        }
    }
    return maxLen.length > 0 ? Math.max(...maxLen) : 0
}