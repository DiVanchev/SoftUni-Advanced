function gcd(n, m) {
  let bNum = Math.min(n, m);
  let realGCD = 1;

  for (let i = 1; i <= bNum; i++) {
    if (n % i === 0 && m % i === 0) {
      realGCD = i;
    }
  }
  console.log(realGCD);
}
gcd(15, 5);
