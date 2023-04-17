const tournaments = [
  {
    "number": "#13",
    "title": " Благотворительный онлайн-турнир №2",
    "image": "img/tournament-13.jpg",
    "date": "11 декабря 2022",
    "address": "Online",
    "links": {
      "youtubeIframe": "https://www.youtube.com/embed/9r_uauOORA8",
      "table": " https://challonge.com/ru/fwvr19w9 ",
      "teams": " https://vk.com/firehorn?w=wall-186885826_1367",
    }
  },
  {
    "number": "#12",
    "title": " Благотворительный онлайн-турнир №1",
    "image": "img/tournament-12.jpg",
    "date": "27 августа 2022",
    "address": "Online",
    "links": {
      "youtubeIframe": "https://www.youtube.com/embed/wN8gsn5TbLU",
      "table": " https://challonge.com/ru/uod1gjgo ",
      "teams": " https://vk.com/firehorn?w=wall-186885826_1348 ",
    }
  },
  {
    "number": "#11",
    "title": " Турнир Double Elimination",
    "image": "img/tournament-11.jpg",
    "date": "10 апреля 2021",
    "address": "Кибер Арена VERSUS, г. Таганрог, Гоголевский 2-1",
    "links": {
      "youtubeIframe": "https://www.youtube.com/embed/6f__wvoPTxU",
      "teams": "https://vk.com/firehorn?w=wall-186885826_1284",
      "photo": "https://vk.com/album-186885826_280488151"
    }
  },
  {
    "number": "#10",
    "title": "Random Team Cup",
    "image": "img/tournament-10.jpg",
    "date": "13 декабря 2020",
    "address": "Cyber Arena, Ростов-на-Дону, ул. Жданова 2/7, ТЦ \"Левенцовский\"",
    "links": {
      "table": "https://docs.google.com/spreadsheets/d/162KLZZYS-rXmkzHKCWIPajDDPaTrmg3pEH3BwYLxXAM/edit?usp=sharing",
      "teams": "https://vk.com/firehorn?w=wall-186885826_1164",
      "photo": "https://vk.com/album-186885826_277924269"
    }
  },
  {
    "number": "#9",
    "title": "Командный лан-турнир",
    "image": "img/tournament-9.jpg",
    "date": "20 сентября",
    "address": "Legion CyberArena, г. Таганрог, Чехова ул. 322/2",
    "links": {
      "teams": "https://vk.com/firehorn?w=wall-186885826_943",
      "photo": "https://vk.com/album-186885826_277626335"
    }
  },
  {
    "number": "#8",
    "title": " РТК 5х5 ",
    "image": "img/tournament-8.jpg",
    "date": "25 июля 2020",
    "address": "Online",
    "links": {
      "teams": " https://vk.com/firehorn?w=wall-186885826_885 ",
    }
  },
  {
    "number": "#7",
    "title": " Онлайн турнир 1 x 1",
    "image": "img/tournament-7.jpg",
    "date": "4 июля 2020",
    "address": "Online",
    "links": {
      "table": "https://fire-horn.ru/online/3/",
      "teams": "https://vk.com/firehorn?w=wall-186885826_867",
    }
  },
  {
    "number": "#6",
    "title": "Онлайн турнир 1 x 1",
    "image": "img/tournament-6.jpg",
    "date": "26 апреля 2020",
    "address": "Online",
    "links": {
      "table": " https://fire-horn.ru/online/2/index.php ",
    }
  },
  {
      "number": "#5",
      "title": "Oнлайн турнир",
      "image": "img/tournament-5.jpg",
      "date": "1 марта 2020",
      "address": "Online",
      "links": {
          "video": "https://vk.com/firehorn?z=video-186885826_456239046%2Fb247c1fb4662de5729%2Fpl_wall_-186885826",
          "teams": "https://vk.com/firehorn?w=wall-186885826_325",                    
      }
  },
  {
      "number": "#4",
      "title": "Микс турнир",
      "image": "img/tournament-4.jpg",
      "date": "26 января 2020",
      "address": "Кибер-Арена, г. Ростов-на-Дону, Оренбургский пер., 2Б",
      "links": {
          "youtubeIframe": "https://www.youtube.com/embed/agXoBOBYsIk",
          "youtubeIframe2": "https://www.youtube.com/embed/izmZb0AKYHM",
          "teams": "https://vk.com/firehorn?w=wall-186885826_249",            
          "photo": " https://vk.com/album-186885826_271637331"           
      }
  },
  {
      "number": "#3",
      "title": "Рандомный турнир с личным зачетом",
      "image": "img/tournament-3.jpg",
      "date": "11 января 2020",
      "address": "Аудитория Inostudio ИКТИБ ЮФУ, г. Таганрог, Некрасовский пер., 42",
      "links": {
          "teams": "https://vk.com/firehorn?w=wall-186885826_96",
          "photo": "https://vk.com/album-186885826_271302925"
      }
  },
  {
    "number": "#2",
    "title": "Lan турнир Мармелад",
    "image": "img/tournament-2.png",
    "date": "30 октября 2019",
    "address": "Cyber Сlub, г. Таганрог, Петровская 29/2",
    "links": {
      "youtubeIframe": "https://www.youtube.com/embed/1EfGagfDBRQ",
      "table": "https://challonge.com/ru/rjvj5bhv",
      "teams": "https://vk.com/firehorn?w=wall-186885826_96",
      "photo": "https://vk.com/firehorn?z=album-186885826_270659157"
    }
  },
  {
    "number": "#1",
    "title": "Lan турнир Cyber Club",
    "image": "img/tournament-1.jpg",
    "date": "5 октября 2019",
    "address": "Cyber Сlub, г. Таганрог, Петровская 29/2",
    "links": {
      "youtubeIframe": "https://www.youtube.com/embed/hgYET0rbMxo",
      "table": "https://challonge.com/ru/1wuf76fr",
      "teams": "https://vk.com/lol_tgn?w=wall-186904708_17%2Fall",
      "photo": "https://vk.com/album-186885826_268453002"
    }
  }
];