import badge1 from "assets/images/badges/1.png";
import badge2 from "assets/images/badges/2.png";
import badge3 from "assets/images/badges/3.png";
import badge4 from "assets/images/badges/4.png";
import badge5 from "assets/images/badges/5.png";
import badge6 from "assets/images/badges/6.png";

const initialState = {
  fetched: false,
  fetching: false,
  data: [
    {
      id: 0,
      name: "Osiągnięcie #1",
      img: badge1,
    },
    {
      id: 1,
      name: "Rozwiąż 5 zadań",
      img: badge1,
    },
    {
      id: 2,
      name: "Osiągnięcie #3",
      img: badge2,
    },
    {
      id: 3,
      name: "Osiągnięcie #4",
      img: badge3,
    },
    {
      id: 4,
      name: "Osiągnięcie #5",
      img: badge4,
    },
    {
      id: 5,
      name: "Osiągnięcie #6",
      img: badge5,
    },
    {
      id: 6,
      name: "Osiągnięcie #7",
      img: badge6,
    },
  ],
};

export default function reducer(state = initialState, action) {
  // const newState = Object.assign({}, state, {
  //   data: state.data.slice(),
  // });

  return state;
}
