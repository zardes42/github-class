const mutualDiff = (a, b, c, d) => {
  let diffA = a.filter(
    (item) =>
      b.includes(item) === false &&
      c.includes(item) === false &&
      d.includes(item) === false
  );
  //  console.log(diffA);
  let diffB = b.filter(
    (item) =>
      a.includes(item) === false &&
      c.includes(item) === false &&
      d.includes(item) === false
  );
  //  console.log(diffB);
  let diffC = c.filter(
    (item) =>
      a.includes(item) === false &&
      b.includes(item) === false &&
      d.includes(item) === false
  );
  //  console.log(diffC);
  let diffD = d.filter(
    (item) =>
      a.includes(item) === false &&
      b.includes(item) === false &&
      c.includes(item) === false
  );
  //  console.log(diffD);

  let res = diffA.concat(diffB).concat(diffC).concat(diffD);
  console.log(res);
  return res;
};

mutualDiff([2, 3, 4, 5, 1, 9], [6, 7, 3], [7, 0, 8, 9], [2, 5, 10, 11, 6]);
