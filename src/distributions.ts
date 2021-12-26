/**
 * @return {number}
 */
export function Bernoulli(p: number) {
    return rand() < p ? 1 : 0;
}

/**
 * @return {number}
 */
export function Binomial(n: number, p: number) {
    let x = 0;

    for (let i = 0; i < n; i++) {
        x += Bernoulli(p);
    }

    return x;
}

/**
 * @return {number}
 */
export function Geometric(p: number) {
    let x = 0;

    while (Bernoulli(p) === 0) {
        x++;
    }

    return x;
}

/**
 * @return {number}
 */
export function NegBinomial(r: number, p: number) {
    let x = 0;

    for (let i = 0; i < r; i++) {
        x += Geometric(p);
    }

    return x;
}

/**
 * @return {number}
 */
export function Poisson(lambda: number) {
    let u = rand();
    let cp = Math.exp((0 - lambda));
    let k = 0;
    let factK = 1;

    while (cp < u) {
        k++;

        factK = factK * k;

        cp = cp + (Math.exp((0 - lambda)) * Math.pow(lambda, k)) / factK;
    }

    return k;
}

/**
 * @return {number}
 */
export function Exponential(lambda: number) {
    return (-1 / lambda) * Math.log(rand());
}

/**
 *
 * @return {number}
 */
export function rand() {
    return Math.random();
}
