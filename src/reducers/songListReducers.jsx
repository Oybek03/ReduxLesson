const songListReducer = (history = [], song) => {
  return [
    {
      name: "Uzbek",
      time: "3:55",
      author: "uzim",
    },
    {
      name: "russian",
      time: "3:57",
      author: "boshqa",
    },
    {
      name: "kazak",
      time: "3:15",
      author: "babay",
    },
  ];
};

export default songListReducer;
