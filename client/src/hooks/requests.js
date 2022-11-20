const API_URI = 'http://localhost:8000';

async function httpGetPlanets() {
  const response = await fetch(`${API_URI}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URI}/launches`);
  const fetchLaunches = await response.json();
  return fetchLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URI}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  } catch (error) {
    return {
      ok: false,
    }
  }

}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URI}/launches/${id}`, {
      method: 'delete',
    });
  } catch (error) {
    return {
      ok: 'false'
    }
  }

}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};