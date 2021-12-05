export const sortByDate = (arr) => {
  arr = [...arr].sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return arr;
};
