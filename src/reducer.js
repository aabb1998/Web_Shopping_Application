export const initialState = {
  basket: [
    {
      id: "1234324234",
      title: "Test Bro",
      price: 488.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_SX679_.jpg",
    },
    {
      id: "1234324234",
      title: "Test Bro",
      price: 488.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_SX679_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      return { state };
      break;
    default:
      return state;
  }
};

export default reducer;
