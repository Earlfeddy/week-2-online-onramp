function withdraw(amount) {
  const noOf100s = Math.floor(amount / 100);
  amount = amount - noOf100s * 100;

  const noOf50s = Math.floor(amount / 50);
  amount = amount - noOf50s * 50;

  const noOf20s = Math.floor(amount / 20);
  amount = amount - noOf20s * 20;

  return [noOf100s, noOf50s, noOf20s];
}

module.exports = withdraw;
