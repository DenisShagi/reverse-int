module.exports = function reverse(n) {
  const str = String(Math.abs(n));
  const reversed = str.split('').reverse().join('');
  const num = Number(reversed);

  return num;
};
