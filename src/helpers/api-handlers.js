import { fetchAPI } from './data';

async function fetchData(date, dispatch) {
  const timesJSON = await fetchAPI(new Date(date || new Date().toISOString().split('T')[0]));
  const times = JSON.parse(timesJSON);

  dispatch({ type: 'DATE_CHANGE', times: times.map(time => ({ value: time, label: time })) });
}


function initializeTimes(dispatch) {
  fetchData(null, dispatch);
}

export {
  fetchData,
  initializeTimes,
};
