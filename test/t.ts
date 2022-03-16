type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type UnionToIntersection2<U> = (
  U extends any ? () => (p: U) => void : never
) extends () => (p: infer I) => void
  ? I
  : never;

declare function f<A, B, U = A & B>(n: U): A;

type a = { a: number };
type b = { b: number };
type c = a | b;
type d = UnionToIntersection<a | b>;
type e = UnionToIntersection2<a & b>;

declare const n: a & b;
const x = f(n);
