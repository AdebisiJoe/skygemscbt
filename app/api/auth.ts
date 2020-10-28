import client from "./client";

const login = (phone, password) => client.post("/login", { phone, password });

export default {
  login,
};
