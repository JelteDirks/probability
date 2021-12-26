import {
    orderStatistics,
    sampleMean,
    sampleMedian, samplePercentile,
    sampleRange,
    sampleStandardDeviation,
    sampleVariance
} from "./src/statistics";

const golfBalSet = [261.3, 258.1, 254.2, 257.7, 237.9, 255.8, 241.4, 256.8, 255.3, 255, 259.4, 270.5, 270.7, 272.6, 272.2, 251.1, 232.1, 273, 266.6, 273.2, 265.7, 264.5, 245.5, 280.3, 248.3, 267, 271.5, 240.8, 268.9, 263.5, 262.2, 244.8, 279.6, 272.7, 278.7, 255.8, 276.1, 274.2, 267.4, 244.5, 252, 264, 247.7, 273.6, 264.5, 285.3, 277.8, 261.4, 253.6, 278.5, 260, 271.2, 254.8, 256.1, 264.5, 255.4, 259.5, 274.9, 272.1, 273.3, 279.3, 279.8, 272.8, 268.5, 283.7, 263.2, 257.5, 233.7, 260.2, 263.7, 244.3, 241.2, 254.4, 274, 260.7, 260.6, 255.1, 233.7, 253.7, 250.2, 251.4, 270.6, 273.4, 242.9, 276.6, 237.8, 261, 236, 251.8, 280.3, 268.3, 266.8, 254.5, 234.3, 251.6, 226.8, 240.5, 252.1, 245.6, 270.5];
const pistonRingSet = [54.102, 54.103, 54.082, 54.095];

console.log(sampleMean(golfBalSet));
console.log(sampleVariance(golfBalSet));
console.log(sampleStandardDeviation(golfBalSet));

console.log(sampleMean(pistonRingSet));
console.log(sampleVariance(pistonRingSet));
console.log(sampleStandardDeviation(pistonRingSet));

console.log(sampleRange(golfBalSet));

golfBalSet[5] = 150;
console.log(sampleRange(golfBalSet));
console.log(sampleStandardDeviation(golfBalSet));

console.log(orderStatistics(golfBalSet));
console.log(sampleMedian(golfBalSet));
console.log(samplePercentile(golfBalSet, 0.25));




