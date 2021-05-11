const getRandomInt = (min = 0, max = 50) => {
  const start = Math.ceil(min);
  const end = Math.floor(max);
  return Math.floor(Math.random() * (end - start)) + start;
};

export default getRandomInt;
