const initialState = {
  challenges: [
    { name: 'Vezdecode', role: 'full-stack, designer', place: '99', link: "https://vk.com/press/vezdekod" },
    { name: 'MORE>TECH', role: 'front-end helper', place: '2', link: "https://changellenge.com/event/moretech-vtb/" },
    { name: 'Цифровой Прорыв semi-final', role: 'capitan', place: '4', link: "https://leadersofdigital.ru/" },
    { name: 'Цифровой Прорыв final', role: 'front-man', place: '11', link: "https://leadersofdigital.ru/" },
  ]
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}