let initialState = {
  contacts: [
    {
      name: "Coker",
      email: "goocng@gmail.com",
      gen: "22",
    },
    {
      name: "kelvin",
      email: "kelng@gmail.com",
      gen: "23",
    },
    {
      name: "Ben",
      email: "bencng@gmail.com",
      gen: "24",
    },
  ],
};
let contactReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
export default contactReducer;
