export function sampleMean(a: number[]): number {
    return (a.reduce((prev: number, cur: number) => {
        return prev + cur;
    })) / a.length;
}

export function sampleVariance(a: number[]): number {
    let x = sampleMean(a);
    let n = a.length;
    let y = 0;

    for (let i = 0; i < n; i++) {
        y += Math.pow(a[i] - x, 2);
    }

    return 1 / (n - 1) * y;
}

export function sampleStandardDeviation(a: number[]): number {
    return Math.sqrt(sampleVariance(a));
}

export function sampleRange(a: number[]): number {
    let max = -Infinity;
    let min = +Infinity;

    a.forEach(e => {
        max = Math.max(e, max);
        min = Math.min(e, min);
    });

    return max - min;
}

export function orderStatistics(a: number[]): number[] {
    return a.sort();
}

export function sampleMedian(a: number[]): number {
    let n = a.length;
    let even = (n % 2) === 0;

    return even ? (a[n / 2] + a[1 + (n / 2)]) / 2 : a[(n + 1) / 2];
}

export function samplePercentile(a: number[], p: number): number {

    if (p < 0 || p > 1) throw "p should be 0 < p < 1, p: " + p;

    a = a.sort();
    let n = a.length;
    let x = Math.round(n * p / 100);
    return a[x];
}

