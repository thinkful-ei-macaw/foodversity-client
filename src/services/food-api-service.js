import TokenService from "../services/token-service";
import config from "../config";

const DaysApiService = {
  getDays() {
    return fetch(`${config.API_ENDPOINT}/days`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getDay(dayId) {
    return fetch(`${config.API_ENDPOINT}/days/${dayId}`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getDayFoods(dayId) {
    return fetch(`${config.API_ENDPOINT}/days/${dayId}/foods`, {
      headers: {
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postFood(dayId, text) {
    return fetch(`${config.API_ENDPOINT}/foods`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        day_id: dayId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default DaysApiService;
