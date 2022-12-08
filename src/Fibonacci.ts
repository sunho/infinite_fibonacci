const cache: bigint[][] = [];

function setCache(key: bigint, value: bigint) {
  cache.push([key, value]);
}

function findCache(key: bigint) {
  const res = cache.find((x) => { return x[0] === key; });
  if (res != null)
    return res[1];
  return undefined;
}

function ilog2(value: bigint) {
  let result = 0n, i, v;
  for (i = 1n; value >> (1n << i); i <<= 1n);
  while (value > 1n) {
    v = 1n << --i;
    if (value >> v) {
      result += v;
      value >>= v;
    }
  }
  return result;
}

function matMul(A: bigint[][], B: bigint[][]) {
  let out = [[0n,0n],[0n,0n]];
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
      for (let t = 0; t < 2; t++) {
        out[i][j] += A[i][t] * B[t][j];
      }
    }
  }
  return out;
}

function matDot(A: bigint[][], x: bigint[]) {
  return [A[0][0]*x[0]+A[0][1]*x[1], A[1][0]*x[0]+A[1][1]*x[1]];
}

function powerMat(A: bigint[][], n: bigint) {
  if (n <= 0n)
    return [[1n,0n],[0n,1n]];
  const res: bigint[][] = powerMat(A, n / 2n);
  if (n % 2n === 1n)
    return matMul(matMul(res,res), A);
  else 
    return matMul(res,res);
}

export function getIthFibonacci(i: bigint): bigint {
  const res = findCache(i);
  if (res != null)
    return res;
  const T = [[1n,1n],[1n,0n]];
  const newRes = matDot(powerMat(T, i), [1n,0n])[0]
  setCache(i, newRes);
  return newRes;
}

export function getLBIndexOfFibonacci(n: bigint): bigint {
  let ok = -1n, ng = 1n + (ilog2(n) << 1n) + 1n;
  while (ng-ok > 1n) {
    let mid = (ok+ng) >> 1n;
    let cur = getIthFibonacci(mid);
    if (cur <= n) 
      ok = mid;
    else
      ng = mid;
  }
  return ok;
}

export function getIndexOfFibonacci(n: bigint): bigint | undefined {
  if (n < 0) return undefined;
  const res = getLBIndexOfFibonacci(n);
  if (getIthFibonacci(res) === n) 
    return res;
  else 
    return undefined;
}

export function encodeFibonacci(n: bigint): bigint[] {
  if (n < 0n)
    return [];
  const out = [];
  while (n !== 0n) {
    const i = getLBIndexOfFibonacci(n);
    const dd = getIthFibonacci(i);
    out.push(dd);
    n -= dd;
  }
  return out;
}