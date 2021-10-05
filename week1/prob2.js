function fibo(n) {
  //base case
  if (n === 0) return 0;
  else if (n === 1) return 1;
  //inductive step
  else return fibo(n - 1) +  fibo(n - 2);
}
