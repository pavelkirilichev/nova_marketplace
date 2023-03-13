const express = require("express");
const app = express();

app.get("/goods", (req, res) => {
  const goods = [
    {
      id: 1,
      title: "Discord account",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Discord account email + phone verified",
      price: 5,
      orders: 1,
      image_name: "discord_plus.svg",
    },
    {
      id: 2,
      title: "Discord account",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Discord account email verified",
      price: 2,
      orders: 2,
      image_name: "discord_good_big.svg",
    },
    {
      id: 3,
      title: "CLI Bot",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Bot for copping NFT without interface",
      price: 10,
      orders: 3,
      image_name: "cli_big.svg",
    },
    {
      id: 4,
      title: "GUI Bot",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Bot for copping NFT with interface",
      price: 15,
      orders: 1,
      image_name: "gui.svg",
    },
    {
      id: 5,
      title: "Token tracking bot",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Tracking bot for token",
      price: 2,
      orders: 1,
      image_name: "token_board.svg",
    },
    {
      id: 6,
      title: "Listing alerts",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Sales/Listing alerts",
      price: 2,
      orders: 1,
      image_name: "dollar_board.svg",
    },
    {
      id: 7,
      title: "Tracking bot",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "Collection tracking bot",
      price: 8,
      orders: 1,
      image_name: "board_big.svg",
    },

    {
      id: 8,
      title: "White list",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "White list from partner or stuff",
      price: 2,
      orders: 1,
      image_name: "white_list_big.svg",
    },
    {
      id: 9,
      title: "Art",
      description:
        "Many many text many many text many text many many text many text many many text",
      description_short: "CG or hand drw art",
      price: 2,
      orders: 1,
      image_name: "art_big.svg",
    },
  ];

  res.json(goods);
});

app.listen(3001, () => {
  console.log("server start on 3001");
});
