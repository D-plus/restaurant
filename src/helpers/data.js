

const seededRandom = seed => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = s * a % m) / m;
};

const fetchAPI = date => {
  return new Promise((resolve, reject) => {
    let result = [];
    let random = seededRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ':00');
      if (random() >= 0.5) result.push(i + ':30');
    }
    resolve(JSON.stringify(result))
  })
};

const submitAPI = formData => {
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify(true))
  })
};

export { fetchAPI, submitAPI } ;
