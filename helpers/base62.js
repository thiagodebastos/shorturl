function base62(integer) {
  const charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  function encode() {
    if (integer === 0) {
      return 0;
    }
    let s = [];
    while (integer > 0) {
      s = [base62.charset[integer % 62], ...s];
      integer = Math.floor(integer / 62);
    }
    return s.join("");
  }
  function decode(chars) {
    return chars
      .split("")
      .reverse()
      .reduce(
        (prev, curr, i) => prev + base62.charset.indexOf(curr) * 62 ** i,
        0
      );
  }
  return {
    encode,
    decode
  };
}
