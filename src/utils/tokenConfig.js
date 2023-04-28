const userToken = localStorage.token ? localStorage.token : "";

export const tokenConfig = {
  headers: {
    Authorization: `Bearer ${userToken}`,
    Accept: "application/json",
  },
};
