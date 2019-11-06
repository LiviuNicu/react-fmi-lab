const users = (state = [], action) => {
  switch (action.type) {
    case "REGISTER":
      console.log(state, action);
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          email: action.email,
          password: action.password
        }
      ];
    default:
      return state;
  }
};

export default users;
