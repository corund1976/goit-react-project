export const fnForNumberDivide = (number) => {
  if (number === undefined) {
    return 0;
  } else {
    const res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return res;
  }
};

export const fnForNumberDivideReverse = (string) => {
  const res = string.replaceAll(" ", "");

  return Number(res);
};
