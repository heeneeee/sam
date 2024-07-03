export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (e) {
    console.error("Error fetching data:", e);
    throw e;
  }
};

export const fetchPin = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    // console.log("res", res);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.error("Error fetching data:", e);
  }
};

export const fetchPost = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.error("Error fetching data:", e);
  }
};
export const fetchPostPin = async (url: string, payload: any) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    // console.log("Postres", res);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.text();
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};

export const fetchGetChartData = async (url: string, payload: object) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};
