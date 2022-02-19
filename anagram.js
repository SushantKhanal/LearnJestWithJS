const isAnagram = (string1, string2) => {
  return formatString(string1) === formatString(string2);
};

//Helper function
const formatString = (string) =>
  string.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");

module.exports = {
  isAnagram,
};
