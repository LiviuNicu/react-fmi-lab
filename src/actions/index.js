export const registerUser = obj => {
  debugger;
  return {
    type: "REGISTER",
    name: obj.name,
    email: obj.email,
    password: obj.password,
    id: new Date().getTime()
  };
};

export const login = () => {
  return {
    type: "LOGIN"
  };
};
