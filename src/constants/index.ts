import {MovieType} from "@/types";

export const PATH_ROUTE = {
  HOME: "/",
  LISTS_CATEGORIES: "/lists/categories/movies/:categoryIndex/",
  LISTS_MOVIES: "/lists/movies/:listSlug?/",
  MOVIE: "/film/:filmSlug/",
  SEARCH: "/s/",
}


export const PATH_LINK = {
  HOME: "/",
  LISTS_CATEGORIES_MOVIES: "/lists/categories/movies/1/",
  LISTS_CATEGORIES_ONLINE_CINEMA: "/lists/categories/movies/2/",
  LISTS_CATEGORIES_SERIALS: "/lists/categories/movies/3/",
  LISTS_CATEGORIES_FEES: "/lists/categories/movies/4/",
  LISTS_CATEGORIES_AWARDS: "/lists/categories/movies/5/",
  LISTS_MOVIES: (listSlug: string | number = "") => `/lists/movies/${listSlug}`,
  MOVIE: (filmSlug: string | number) => `/film/${filmSlug}/`,
  SEARCH: "/s/",
}


export const movieItem: MovieType = {
  "id": 535341,
  "externalId": {
    "kpHD": "4127663ed234fa8584aeb969ceb02cd8"
  },
  "name": "1+1",
  "alternativeName": "Intouchables",
  "enName": null,
  "names": [
    {
      "name": "1+1",
      "language": "RU",
      "type": "Russian title on kinopoisk"
    },
    {
      "name": "Intouchables",
      "language": null,
      "type": "Original title on kinopoisk"
    }
  ],
  "type": "movie",
  "typeNumber": 1,
  "year": 2011,
  "description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
  "shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
  "slogan": "Sometimes you have to reach into someone else's world to find out what's missing in your own.",
  "status": null,
  "rating": {
    "kp": 8.83,
    "imdb": 8.5,
    "filmCritics": 6.8,
    "russianFilmCritics": 100,
    "await": null
  },
  "votes": {
    "kp": 2175172,
    "imdb": 936534,
    "filmCritics": 129,
    "russianFilmCritics": 12,
    "await": 0
  },
  "movieLength": 112,
  "totalSeriesLength": null,
  "seriesLength": null,
  "ratingMpaa": "r",
  "ageRating": 18,
  "poster": {
    "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig",
    "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
  },
  "backdrop": {
    "url": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001607394c5d88c8722dd5ea6728fa4/orig",
    "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001607394c5d88c8722dd5ea6728fa4/x1000"
  },
  "genres": [
    {
      "name": "драма"
    },
    {
      "name": "комедия"
    }
  ],
  "countries": [
    {
      "name": "Франция"
    }
  ],
  "persons": [
    {
      "id": 71427,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_71427.jpg",
      "name": "Франсуа Клюзе",
      "enName": "François Cluzet",
      "description": "Philippe",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 41644,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41644.jpg",
      "name": "Омар Си",
      "enName": "Omar Sy",
      "description": "Driss",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 57174,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_57174.jpg",
      "name": "Анн Ле Ни",
      "enName": "Anne Le Ny",
      "description": "Yvonne",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 868557,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_868557.jpg",
      "name": "Одри Флёро",
      "enName": "Audrey Fleurot",
      "description": "Magalie",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 541041,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_541041.jpg",
      "name": "Жозефин де Мо",
      "enName": "Joséphine de Meaux",
      "description": "La DRH société de courses",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 445,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_445.jpg",
      "name": "Клотильд Молле",
      "enName": "Clotilde Mollet",
      "description": "Marcelle",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 964574,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_964574.jpg",
      "name": "Альба Гайя Крагеде Беллуджи",
      "enName": "Alba Gaïa Bellugi",
      "description": "Elisa",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2237576,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2237576.jpg",
      "name": "Сирил Менди",
      "enName": "Cyril Mendy",
      "description": "Adama",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3084679,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3084679.jpg",
      "name": "Салимата Камате",
      "enName": "Salimata Kamate",
      "description": "Fatou",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3084680,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3084680.jpg",
      "name": "Абса Дьяту Тур",
      "enName": "Absa Diatou Toure",
      "description": "Mina",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 590648,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_590648.jpg",
      "name": "Людовико Эйнауди",
      "enName": "Ludovico Einaudi",
      "description": null,
      "profession": "композиторы",
      "enProfession": "composer"
    },
    {
      "id": 634036,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_634036.jpg",
      "name": "Матьё Вадпьед",
      "enName": "Mathieu Vadepied",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 1998619,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1998619.jpg",
      "name": "Изабель Паннетье",
      "enName": "Isabelle Pannetier",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 2004628,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2004628.jpg",
      "name": "Оливия Блох-Лене",
      "enName": "Olivia Bloch-Lainé",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 382906,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_382906.jpg",
      "name": "Оливье Накаш",
      "enName": "Olivier Nakache",
      "description": null,
      "profession": "режиссеры",
      "enProfession": "director"
    },
    {
      "id": 426346,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_426346.jpg",
      "name": "Эрик Толедано",
      "enName": "Éric Toledano",
      "description": null,
      "profession": "режиссеры",
      "enProfession": "director"
    },
    {
      "id": 1987674,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987674.jpg",
      "name": "Дориан Ригаль-Ансу",
      "enName": "Dorian Rigal-Ansous",
      "description": null,
      "profession": "монтажеры",
      "enProfession": "editor"
    },
    {
      "id": 634036,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_634036.jpg",
      "name": "Матьё Вадпьед",
      "enName": "Mathieu Vadepied",
      "description": null,
      "profession": "операторы",
      "enProfession": "operator"
    },
    {
      "id": 2402288,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2402288.jpg",
      "name": "Арно Бертран",
      "enName": "Arnaud Bertrand",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 884847,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_884847.jpg",
      "name": "Доминик Бутонна",
      "enName": "Dominique Boutonnat",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 2659794,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2659794.jpg",
      "name": "Юбер Кайлар",
      "enName": "Hubert Caillard",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 676553,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_676553.jpg",
      "name": "Николя Дюваль-Адассовски",
      "enName": "Nicolas Duval Adassovsky",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 256836,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_256836.jpg",
      "name": "Владимир Зайцев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1179681,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1179681.jpg",
      "name": "Илья Исаев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1654400,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1654400.jpg",
      "name": "Елена Соловьева",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1624192,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1624192.jpg",
      "name": "Рамиля Искандер",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1643982,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1643982.jpg",
      "name": "Лина Иванова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 382906,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_382906.jpg",
      "name": "Оливье Накаш",
      "enName": "Olivier Nakache",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 426346,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_426346.jpg",
      "name": "Эрик Толедано",
      "enName": "Éric Toledano",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 3152842,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3152842.jpg",
      "name": "Филипп Поццо ди Борго",
      "enName": "Philippe Pozzo di Borgo",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 83742,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_83742.jpg",
      "name": "Грегуар Эстерманн",
      "enName": "Grégoire Oestermann",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 233518,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_233518.jpg",
      "name": "Доминик Дагье",
      "enName": "Dominique Daguier",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 25264,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_25264.jpg",
      "name": "Франсуа Карон",
      "enName": "François Caron",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 5570,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5570.jpg",
      "name": "Кристиан Амери",
      "enName": "Christian Ameri",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2497518,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2497518.jpg",
      "name": "Тома Соливерес",
      "enName": "Thomas Solivérès",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 240040,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_240040.jpg",
      "name": "Дороти Бриер",
      "enName": "Dorothée Brière",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1960244,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1960244.jpg",
      "name": "Мари-Лор Дикуру",
      "enName": "Marie-Laure Descoureaux",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1283646,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1283646.jpg",
      "name": "Эмили Кан",
      "enName": "Émilie Caen",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2216393,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2216393.jpg",
      "name": "Сильвен Лазард",
      "enName": "Sylvain Lazard",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2687585,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2687585.jpg",
      "name": "Жан Франсуа Кэйри",
      "enName": "Jean-François Cayrey",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2228474,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2228474.jpg",
      "name": "Йен Фенелон",
      "enName": "Ian Fenelon",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2200014,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2200014.jpg",
      "name": "Рено Барсе",
      "enName": "Renaud Barse",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1617276,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1617276.jpg",
      "name": "Франсуа Бюрелу",
      "enName": "François Bureloup",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 58912,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_58912.jpg",
      "name": "Никки Марбо",
      "enName": "Nicky Marbot",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1277398,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1277398.jpg",
      "name": "Бенжамин Барош",
      "enName": "Benjamin Baroche",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1171108,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1171108.jpg",
      "name": "Жером Повель",
      "enName": "Jérôme Pauwels",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 551535,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_551535.jpg",
      "name": "Антуан Лоран",
      "enName": "Antoine Laurent",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2224913,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2224913.jpg",
      "name": "Фабрис Мантенья",
      "enName": "Fabrice Mantegna",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2687586,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2687586.jpg",
      "name": "Хеди Бушенафа",
      "enName": "Hedi Bouchenafa",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 792895,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_792895.jpg",
      "name": "Каролин Бург",
      "enName": "Caroline Bourg",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 99326,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_99326.jpg",
      "name": "Мишель Виноградов",
      "enName": "Michel Winogradoff",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2687587,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2687587.jpg",
      "name": "Кевин Вамо",
      "enName": "Kévin Wamo",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2687588,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2687588.jpg",
      "name": "Эллиот Латиль",
      "enName": "Elliot Latil",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2687589,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2687589.jpg",
      "name": "Ален Антони",
      "enName": "Alain Anthony",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2687590,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2687590.jpg",
      "name": "Доминик Анри",
      "enName": "Dominique Henry",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3084681,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3084681.jpg",
      "name": "Ле Капариксьо Франсе",
      "enName": "Le Capriccio Français",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3084682,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3084682.jpg",
      "name": "Филипп Ле Февр",
      "enName": "Philippe Le Fevre",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2269034,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2269034.jpg",
      "name": "Пьер-Лоран Барнерон",
      "enName": "Pierre-Laurent Barneron",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4559766,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4559766.jpg",
      "name": "Хэ Юньпин",
      "enName": "He Yunping",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2789409,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2789409.jpg",
      "name": "Абдель Селлу",
      "enName": "Abdel Sellou",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2006850,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2006850.jpg",
      "name": "Франсуа Эммануэлли",
      "enName": "François Emmanuelli",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 277027,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_277027.jpg",
      "name": "Андрей Градов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1653657,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1653657.jpg",
      "name": "Прохор Чеховской",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 464040,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_464040.jpg",
      "name": "Антон Колесников",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 594457,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_594457.jpg",
      "name": "Юрий Меншагин",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1649885,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1649885.jpg",
      "name": "Лариса Некипелова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1653673,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1653673.jpg",
      "name": "Марина Бакина",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1758684,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1758684.jpg",
      "name": "Наталья Терешкова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1921569,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1921569.jpg",
      "name": "Иван Жарков",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1963412,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1963412.jpg",
      "name": "Данил Щебланов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    }
  ],
  "budget": {
    "currency": "€",
    "value": 9500000
  },
  "premiere": {
    "country": null,
    "digital": null,
    "cinema": null,
    "bluray": "2012-06-25T00:00:00.000Z",
    "dvd": "2012-05-28T00:00:00.000Z",
    "russia": "2012-04-26T00:00:00.000Z",
    "world": "2011-09-23T00:00:00.000Z"
  },
  "watchability": {
    "items": [
      {
        "name": "Okko",
        "logo": {
          "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
        },
        "url": "https://okko.tv/movie/intouchables?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
      },
      {
        "name": "Иви",
        "logo": {
          "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
        },
        "url": "https://www.ivi.ru/watch/109726?utm_source=yandex&utm_medium=wizard"
      },
      {
        "name": "START",
        "logo": {
          "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
        },
        "url": "https://start.ru/watch/1-1?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=1-1"
      }
    ]
  },
  "top10": null,
  "top250": 1,
  "isSeries": false,
  "audience": [
    {
      "count": 19440920,
      "country": "Франция"
    },
    {
      "count": 9108101,
      "country": "Германия"
    },
    {
      "count": 2582237,
      "country": "Испания"
    }
  ],
  "ticketsOnSale": false,
  "lists": [
    "top250",
    "top500",
    "popular-films",
    "100_greatest_movies_XXI",
    "hearing_impairment",
    "hd-revise",
    "box-world-not-usa",
    "box-total",
    "hd"
  ],
  "networks": null,
  "createdAt": "2024-04-13T01:32:40.737Z",
  "updatedAt": "2024-08-22T01:00:10.583Z",
  "fees": {
    "russia": {
      "value": 1725813,
      "currency": "$"
    },
    "usa": {
      "value": 10198820,
      "currency": "$"
    },
    "world": {
      "value": 426588510,
      "currency": "$"
    }
  }
}





export const movieItem2: MovieType = {
  "id": 4664634,
  "alternativeName": "Oppenheimer",
  // "collections": [],
  "countries": [
    {
      "name": "США"
    },
    {
      "name": "Великобритания"
    }
  ],
  "createdAt": "2022-01-26T13:22:51.993Z",
  "description": "История жизни американского физика-теоретика Роберта Оппенгеймера, который во времена Второй мировой войны руководил Манхэттенским проектом — секретными разработками ядерного оружия.",
  "enName": null,
  "externalId": {
    "imdb": "tt15398776",
    "tmdb": 872585,
    "kpHD": null
  },
  "facts": [
    {
      "value": "Для съёмок впервые в плёночных кинокамерах IMAX была использована чёрно-белая плёнка.",
      "type": "FACT",
      "spoiler": false
    },
    {
      "value": "По словам <a href=\"/name/41477/\" class=\"all\">Кристофера Нолана</a>, мысль снять в главной роли <a href=\"/name/5005/\" class=\"all\">Киллиана Мерфи</a> пришла ему в голову, когда он рассматривал фотографию Оппенгеймера на обложке книги <a href=\"/name/5220147/\" class=\"all\">Кая Бёрда</a> и <a href=\"/name/6579708/\" class=\"all\">Мартина Шервина</a> &#171;Оппенгеймер: триумф и трагедия Американского Прометея&#187; (2005) , которая легла в основу сценария. Стараясь добиться большего сходства с прототипом, Мерфи сбросил вес и во время съёмок придерживался строгой диеты.",
      "type": "FACT",
      "spoiler": false
    },
    {
      "value": "<a href=\"/name/6458/\" class=\"all\">Мэтт Дэймон</a> сделал перерыв в актёрской карьере ради жены, правда с условием, что перерыв закончится, если вдруг с предложением у себя сняться ему позвонит <a href=\"/name/41477/\" class=\"all\">Кристофер Нолан</a>. Нолан позвонил и предложил актёру роль <a href=\"/name/376559/\" class=\"all\">Лесли Гровса</a>.",
      "type": "FACT",
      "spoiler": false
    },
    {
      "value": "Продюсер <a href=\"/name/21110/\" class=\"all\">Чарльз Ровен</a> предложил <a href=\"/name/41477/\" class=\"all\">Кристоферу Нолану</a> и продюсеру <a href=\"/name/41489/\" class=\"all\">Эмме Томас</a> идею фильма, рассказав о книге <a href=\"/name/5220147/\" class=\"all\">Бёрда</a> и <a href=\"/name/6579708/\" class=\"all\">Шервина</a> &#171;Оппенгеймер: триумф и трагедия Американского Прометея&#187;. Нолана это заинтересовало, и он попросил дать ему книгу почитать. Решиться же ему помог подарок актёра <a href=\"/name/544406/\" class=\"all\">Роберта Паттинсона</a> на вечеринке по случаю окончания работы над боевиком &#171;<a href=\"/film/1236063/\" class=\"all\">Довод</a>&#187;. Тогда Паттинсон подарил ему сборник речей Оппенгеймера.",
      "type": "FACT",
      "spoiler": false
    },
    {
      "value": "<a href=\"/name/6458/\" class=\"all\">Мэтт Дэймон</a> получил сценарий, который был напечатан на красной бумаге и был написан от первого лица.",
      "type": "FACT",
      "spoiler": false
    },
    {
      "value": "В кадрах испытания ядерной бомбы использовано сочетание реальных взрывов и компьютерных технологий. В реальных взрывах применяли смесь бензина, пропана, алюминия и магния &#8211; и макеты. Снимали на большой скорости с разных ракурсов, а затем изображения накладывали друг на друга, чтобы получить гриб ядерного взрыва.",
      "type": "FACT",
      "spoiler": false
    }
  ],
  "genres": [
    {
      "name": "биография"
    },
    {
      "name": "драма"
    },
    {
      "name": "история"
    }
  ],
  "movieLength": 180,
  "name": "Оппенгеймер",
  "names": [
    {
      "name": "Оппенгеймер"
    },
    {
      "name": "Oppenheimer"
    },
    {
      "name": "Trinity",
      "language": "US",
      "type": "Rumored title"
    },
    {
      "name": "ออพเพนไฮเมอร์",
      "language": "TH",
      "type": null
    },
    {
      "name": "Օպենհայմեր",
      "language": "AM",
      "type": null
    },
    {
      "name": "Gadget",
      "language": "US",
      "type": "working title"
    },
    {
      "name": "オッペンハイマー",
      "language": "JP",
      "type": null
    },
    {
      "name": "اوپنهایمر",
      "language": "IR",
      "type": null
    },
    {
      "name": "ΟΠΕΝΧΑΪΜΕΡ",
      "language": "GR",
      "type": null
    },
    {
      "name": "Openheimers",
      "language": "LV",
      "type": null
    },
    {
      "name": "奥本海默",
      "language": "CN",
      "type": null
    },
    {
      "name": "Openhaymer",
      "language": "AZ",
      "type": null
    },
    {
      "name": "Опенхаймер",
      "language": "BG",
      "type": null
    },
    {
      "name": "Οπενχάιμερ",
      "language": "GR",
      "type": null
    },
    {
      "name": "ओप्पेन्हेइमेर",
      "language": "IN",
      "type": "Hindi"
    },
    {
      "name": "Openheimeris",
      "language": "LT",
      "type": null
    },
    {
      "name": "Опенхајмер",
      "language": "RS",
      "type": null
    },
    {
      "name": "奧本海默",
      "language": "TW",
      "type": null
    },
    {
      "name": "Oppengeymer",
      "language": "UZ",
      "type": null
    },
    {
      "name": "오펜하이머",
      "language": "KR",
      "type": null
    }
  ],
  "persons": [
    {
      "id": 5005,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5005.jpg",
      "name": "Киллиан Мерфи",
      "enName": "Cillian Murphy",
      "description": "J. Robert Oppenheimer",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 227068,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_227068.jpg",
      "name": "Эмили Блант",
      "enName": "Emily Blunt",
      "description": "Kitty Oppenheimer",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6458,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6458.jpg",
      "name": "Мэтт Дэймон",
      "enName": "Matt Damon",
      "description": "Leslie Groves",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10096,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10096.jpg",
      "name": "Роберт Дауни мл.",
      "enName": "Robert Downey Jr.",
      "description": "Lewis Strauss",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3435612,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3435612.jpg",
      "name": "Флоренс Пью",
      "enName": "Florence Pugh",
      "description": "Jean Tatlock",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 206,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_206.jpg",
      "name": "Джош Хартнетт",
      "enName": "Josh Hartnett",
      "description": "Ernest Lawrence",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 8890,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_8890.jpg",
      "name": "Дэвид Крамхолц",
      "enName": "David Krumholtz",
      "description": "Isidor Rabi",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 702326,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_702326.jpg",
      "name": "Бенни Сэфди",
      "enName": "Benny Safdie",
      "description": "Edward Teller",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1217737,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1217737.jpg",
      "name": "Олден Эренрайк",
      "enName": "Alden Ehrenreich",
      "description": "Senate Aide",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 8886,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_8886.jpg",
      "name": "Кеннет Брана",
      "enName": "Kenneth Branagh",
      "description": "Niels Bohr",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1795101,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1795101.jpg",
      "name": "Людвиг Горанссон",
      "enName": "Ludwig Göransson",
      "description": null,
      "profession": "композиторы",
      "enProfession": "composer"
    },
    {
      "id": 2002125,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2002125.jpg",
      "name": "Рут Де Йонг",
      "enName": "Ruth De Jong",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 10131597,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10131597.jpg",
      "name": "Джейк Кавалло",
      "enName": "Jake Cavallo",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 4277712,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4277712.jpg",
      "name": "Саманта Инглендер",
      "enName": "Samantha Englender",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 2003395,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2003395.jpg",
      "name": "Энтони Д. Парилло",
      "enName": "Anthony D. Parrillo",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 157166,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_157166.jpg",
      "name": "Эллен Мирожник",
      "enName": "Ellen Mirojnick",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 1987873,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987873.jpg",
      "name": "Клер Кауфман",
      "enName": "Claire Kaufman",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 2017722,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2017722.jpg",
      "name": "Адам Уиллис",
      "enName": "Adam Willis",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 41477,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg",
      "name": "Кристофер Нолан",
      "enName": "Christopher Nolan",
      "description": null,
      "profession": "режиссеры",
      "enProfession": "director"
    },
    {
      "id": 2449829,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2449829.jpg",
      "name": "Дженнифер Лэйм",
      "enName": "Jennifer Lame",
      "description": null,
      "profession": "монтажеры",
      "enProfession": "editor"
    },
    {
      "id": 758887,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_758887.jpg",
      "name": "Хойте Ван Хойтема",
      "enName": "Hoyte Van Hoytema",
      "description": null,
      "profession": "операторы",
      "enProfession": "operator"
    },
    {
      "id": 51141,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_51141.jpg",
      "name": "Томас Хэйслип",
      "enName": "Thomas Hayslip",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 3671064,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3671064.jpg",
      "name": "Хелен Медрано",
      "enName": "Helen Medrano",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 41477,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg",
      "name": "Кристофер Нолан",
      "enName": "Christopher Nolan",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 21110,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_21110.jpg",
      "name": "Чарльз Ровен",
      "enName": "Charles Roven",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 6039981,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6039981.jpg",
      "name": "Станислав Шапкин",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6326775,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6326775.jpg",
      "name": "Катя Хейфец",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867588,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867588.jpg",
      "name": "Григорий Лайков",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867596,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867596.jpg",
      "name": "Георгий Вардиашвили",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867726,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867726.jpg",
      "name": "София Габелия",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 41477,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg",
      "name": "Кристофер Нолан",
      "enName": "Christopher Nolan",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 5220147,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5220147.jpg",
      "name": "Кай Бёрд",
      "enName": "Kai Bird",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 6579708,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6579708.jpg",
      "name": "Мартин Шервин",
      "enName": "Martin Sherwin",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 1538746,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1538746.jpg",
      "name": "Дэйн ДеХаан",
      "enName": "Dane DeHaan",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 12928,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_12928.jpg",
      "name": "Джейсон Кларк",
      "enName": "Jason Clarke",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3905,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3905.jpg",
      "name": "Тони Голдуин",
      "enName": "Tony Goldwyn",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 969004,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_969004.jpg",
      "name": "Мэйкон Блэр",
      "enName": "Macon Blair",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1534520,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1534520.jpg",
      "name": "Давид Дастмалчян",
      "enName": "David Dastmalchian",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4.jpg",
      "name": "Кейси Аффлек",
      "enName": "Casey Affleck",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1084238,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1084238.jpg",
      "name": "Джефферсон Холл",
      "enName": "Jefferson Hall",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2256640,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2256640.jpg",
      "name": "Дилан Арнольд",
      "enName": "Dylan Arnold",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1455344,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1455344.jpg",
      "name": "Эмма Дюмон",
      "enName": "Emma Dumont",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6650,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6650.jpg",
      "name": "Гари Олдман",
      "enName": "Gary Oldman",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 510294,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_510294.jpg",
      "name": "Мате Хауман",
      "enName": "Máté Haumann",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1089891,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1089891.jpg",
      "name": "Рами Малек",
      "enName": "Rami Malek",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1347,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1347.jpg",
      "name": "Маттиас Швайгхёфер",
      "enName": "Matthias Schweighöfer",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 53295,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_53295.jpg",
      "name": "Джеймс Д’Арси",
      "enName": "James D'Arcy",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3127870,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3127870.jpg",
      "name": "Том Дженкинс",
      "enName": "Tom Jenkins",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 11066,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_11066.jpg",
      "name": "Мэттью Модайн",
      "enName": "Matthew Modine",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 45018,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_45018.jpg",
      "name": "Луиза Ломбард",
      "enName": "Louise Lombard",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4975,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4975.jpg",
      "name": "Том Конти",
      "enName": "Tom Conti",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 58720,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_58720.jpg",
      "name": "Скотт Граймз",
      "enName": "Scott Grimes",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 271392,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_271392.jpg",
      "name": "Густаф Скарсгард",
      "enName": "Gustaf Skarsgård",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 7231,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7231.jpg",
      "name": "Майкл Ангарано",
      "enName": "Michael Angarano",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2427716,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2427716.jpg",
      "name": "Джек Куэйд",
      "enName": "Jack Quaid",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 15869,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_15869.jpg",
      "name": "Джош Пек",
      "enName": "Josh Peck",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 732186,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_732186.jpg",
      "name": "Оливия Тирлби",
      "enName": "Olivia Thirlby",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 84386,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_84386.jpg",
      "name": "Курт Кохлер",
      "enName": "Kurt Koehler",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 172465,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_172465.jpg",
      "name": "Джон Гоуэнс",
      "enName": "John Gowans",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 37699,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37699.jpg",
      "name": "Гарри Гронер",
      "enName": "Harry Groener",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 21497,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_21497.jpg",
      "name": "Грегори Джбара",
      "enName": "Gregory Jbara",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 37772,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37772.jpg",
      "name": "Тед Кинг",
      "enName": "Ted King",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 14970,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14970.jpg",
      "name": "Тим ДиКей",
      "enName": "Tim DeKay",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 111432,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_111432.jpg",
      "name": "Стивен Гоуска",
      "enName": "Steven Houska",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3781096,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3781096.jpg",
      "name": null,
      "enName": "Petrie Willink",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 726205,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_726205.jpg",
      "name": "Алекс Вулф",
      "enName": "Alex Wolff",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 38287,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_38287.jpg",
      "name": "Джош Цуккерман",
      "enName": "Josh Zuckerman",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4115737,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4115737.jpg",
      "name": "Рори Кин",
      "enName": "Rory Keane",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 14268,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14268.jpg",
      "name": "Сэди Стрэттон",
      "enName": "Sadie Stratton",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3400440,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3400440.jpg",
      "name": "Брит Кайл",
      "enName": "Britt Kyle",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1076128,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1076128.jpg",
      "name": "Гай Бернет",
      "enName": "Guy Burnet",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3776842,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3776842.jpg",
      "name": "Майкл Эндрю Бэйкер",
      "enName": "Michael Andrew Baker",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 40459,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_40459.jpg",
      "name": "Джефф Хефнер",
      "enName": "Jeff Hephner",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1627453,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1627453.jpg",
      "name": "Дмитрий Тихонов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7145257,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7145257.jpg",
      "name": "Игорь Попов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5628417,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5628417.jpg",
      "name": "Владимир Новосардов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6313119,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6313119.jpg",
      "name": "Антон Кобылко",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6903927,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6903927.jpg",
      "name": "Никита Веремеев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7027545,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7027545.jpg",
      "name": "Никита Дворянченко",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 3054219,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3054219.jpg",
      "name": "Андрей Бибиков",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1599046,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1599046.jpg",
      "name": "Владимир Малюгин",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7145245,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7145245.jpg",
      "name": "Дэниел Брэндон",
      "enName": "Daniel Brandon",
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7174023,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174023.jpg",
      "name": "Даниил Постников",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6563466,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6563466.jpg",
      "name": "Максим Некрасов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7174032,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174032.jpg",
      "name": "Владимир Кузнецов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7174015,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174015.jpg",
      "name": "Дмитрий Нацвлишвили",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867591,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867591.jpg",
      "name": "Изабелла Богданова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 700367,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_700367.jpg",
      "name": "Александр Жданович",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867595,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867595.jpg",
      "name": "Бека Медзмариашвили",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7174016,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174016.jpg",
      "name": "Арчил Бараташвили",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867736,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867736.jpg",
      "name": "Александра Филатова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867601,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867601.jpg",
      "name": "Олег Мчедлишвили",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5444514,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5444514.jpg",
      "name": "Михаил Гавашели",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5739790,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5739790.jpg",
      "name": "Алексей Ефремов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6496097,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6496097.jpg",
      "name": "Настя Федько",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867590,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867590.jpg",
      "name": "Леван Гочелашвили",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1169906,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1169906.jpg",
      "name": "Сергей Шведков",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5000407,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5000407.jpg",
      "name": "Артур Шувалов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7145246,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7145246.jpg",
      "name": "Михаил Селищев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6960546,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6960546.jpg",
      "name": "Давид Котов-Оганесян",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867731,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867731.jpg",
      "name": "Дмитрий Спорышев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 4729376,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4729376.jpg",
      "name": "Илья Коваленко",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7116733,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7116733.jpg",
      "name": "Егор Богданов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7174033,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174033.jpg",
      "name": "Роман Исаков",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6867589,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867589.jpg",
      "name": "Савва Самодуров",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5628426,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5628426.jpg",
      "name": "Серго Кения",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 317891,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_317891.jpg",
      "name": "Валерий Харютченко",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    }
  ],
  "poster": {
    "url": "https://image.openmoviedb.com/kinopoisk-images/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/orig",
    "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/x1000"
  },
  // "productionCompanies": [],
  "rating": {
    "kp": 8.145,
    "imdb": 8.3,
    "filmCritics": 8.6,
    "russianFilmCritics": 42.8571,
    "await": null
  },
  "ratingMpaa": "r",
  "seasonsInfo": [],
  "sequelsAndPrequels": [],
  "shortDescription": null,
  "similarMovies": [
    {
      "id": 635772,
      "name": "Игра в имитацию",
      "alternativeName": "The Imitation Game",
      "enName": null,
      "type": "movie",
      "poster": {
        "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/49359d7b-8aa8-408f-bf07-407d49f439a0/orig",
        "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/49359d7b-8aa8-408f-bf07-407d49f439a0/x1000"
      },
      "rating": {
        "kp": 7.632,
        "imdb": 8,
        "filmCritics": 7.7,
        "russianFilmCritics": 60,
        "await": null
      },
      "year": 2014
    },
    {
      "id": 530,
      "name": "Игры разума",
      "alternativeName": "A Beautiful Mind",
      "enName": null,
      "type": "movie",
      "poster": {
        "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/80f21137-eebb-4cdc-8124-96c68c07c2a8/orig",
        "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/80f21137-eebb-4cdc-8124-96c68c07c2a8/x1000"
      },
      "rating": {
        "kp": 8.544,
        "imdb": 8.2,
        "filmCritics": 7.2,
        "russianFilmCritics": 80,
        "await": null
      },
      "year": 2001
    },
    {
      "id": 334,
      "name": "Доктор Стрейнджлав, или Как я научился не волноваться и полюбил атомную бомбу",
      "alternativeName": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      "enName": null,
      "type": "movie",
      "poster": {
        "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/500c65bf-b631-44c5-b218-40d6ce5240be/orig",
        "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/500c65bf-b631-44c5-b218-40d6ce5240be/x1000"
      },
      "rating": {
        "kp": 8.024,
        "imdb": 8.4,
        "filmCritics": 9.1,
        "russianFilmCritics": 0,
        "await": null
      },
      "year": 1963
    },
    {
      "id": 45961,
      "name": "Выбор цели",
      "alternativeName": null,
      "enName": null,
      "type": "movie",
      "poster": {
        "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1edd016b-a16d-4f8d-ad75-f4c82edb1efd/orig",
        "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1edd016b-a16d-4f8d-ad75-f4c82edb1efd/x1000"
      },
      "rating": {
        "kp": 6.422,
        "imdb": 6.6,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": null
      },
      "year": 1975
    },
    {
      "id": 478052,
      "name": "Барби",
      "alternativeName": "Barbie",
      "enName": null,
      "type": "movie",
      "poster": {
        "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f0ae94af-050a-433b-a2a9-d6c96d644fd8/orig",
        "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f0ae94af-050a-433b-a2a9-d6c96d644fd8/x1000"
      },
      "rating": {
        "kp": 6.596,
        "imdb": 6.9,
        "filmCritics": 8,
        "russianFilmCritics": 83.3333,
        "await": null
      },
      "year": 2023
    },
    {
      "id": 9428,
      "name": "Создатели тени",
      "alternativeName": "Fat Man and Little Boy",
      "enName": null,
      "type": "movie",
      "poster": {
        "url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/666181e2-7fae-414c-bfd4-30a2148b3468/orig",
        "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/666181e2-7fae-414c-bfd4-30a2148b3468/x1000"
      },
      "rating": {
        "kp": 6.474,
        "imdb": 6.5,
        "filmCritics": 5,
        "russianFilmCritics": 0,
        "await": null
      },
      "year": 1989
    }
  ],
  "slogan": null,
  // "spokenLanguages": [],
  "status": null,
  // "technology": {
  //   "hasImax": false,
  //   "has3D": false
  // },
  "ticketsOnSale": false,
  "type": "movie",
  "typeNumber": 1,
  "updatedAt": "2024-08-04T00:01:59.507Z",
  "votes": {
    "kp": 240626,
    "imdb": 764509,
    "filmCritics": 508,
    "russianFilmCritics": 7,
    "await": 0
  },
  "year": 2023,
  "premiere": {
    "world": "2023-07-19T00:00:00.000Z",
    "bluray": null,
    "cinema": null,
    "digital": null,
    "dvd": null,
    "russia": null
  },
  "imagesInfo": {
    "framesCount": 0
  },
  "budget": {
    "value": 100000000,
    "currency": "$"
  },
  "fees": {
    "world": {
      "value": 975134850,
      "currency": "$"
    },
    "usa": {
      "value": 329862540,
      "currency": "$"
    }
  },
  "ageRating": null,
  "backdrop": {
    "url": null,
    "previewUrl": null
  },
  "logo": {
    "url": "https://imagetmdb.com/t/p/original/b07VisHvZb0WzUpA8VB77wfMXwg.png"
  },
  "watchability": {
    "items": []
  },
  "top10": null,
  "top250": 87,
  "isSeries": false,
  "seriesLength": null,
  "totalSeriesLength": null,
  // "deletedAt": null,
  "lists": [
    "top250",
    "top500",
    "popular-films",
    "box-usa-all-time",
    "box-world-not-usa",
    "box-total",
    "oscar-best-film",
    "oscar-best-film-nominees",
    "oscar-directing",
    "oscar-cinematography",
    "oscar-music-original-score",
    "golden-globe-best-motion-picture-drama",
    "bafta-best-film"
  ],
  "networks": null,
  "videos": {
    "trailers": [
      {
        "url": "https://www.youtube.com/embed/mDu95JPujwU",
        "name": "трейлер",
        "site": "youtube",
        "type": "TRAILER"
      },
      {
        "url": "https://www.youtube.com/embed/mDu95JPujwU",
        "name": "трейлер",
        "site": "youtube",
        "type": "TRAILER"
      },
      {
        "url": "https://www.youtube.com/embed/uYPbbksJxIg",
        "name": "New Trailer",
        "site": "youtube",
        "type": "TRAILER"
      },
      {
        "url": "https://www.youtube.com/embed/bK6ldnjE3Y0",
        "name": "Official Trailer",
        "site": "youtube",
        "type": "TRAILER"
      }
    ]
  }
}

export const movieItem3 = {
  "id": 5452393,
  "externalId": {
    "kpHD": null
  },
  "name": "Граф Монте-Кристо",
  "alternativeName": "Le comte de Monte-Cristo",
  "enName": null,
  "names": [
    {
      "name": "Le Comte de Monte-Cristo",
      "language": null,
      "type": "Original title on kinopoisk"
    },
    {
      "name": "Граф Монте-Кристо",
      "$set": {
        "language": "RU",
        "type": "Russian title on kinopoisk"
      }
    }
  ],
  "type": "movie",
  "typeNumber": 1,
  "year": 2024,
  "description": "Став жертвой коварного заговора, молодой Эдмон Дантес был арестован в день своей свадьбы за преступление, которого не совершал. После 14 лет в тюрьме замка Иф ему наконец-то удается бежать. На таинственном острове, о котором ему поведал в заключении его друг аббат Фариа, Эдмон находит легендарное сокровище и становится графом Монте- Кристо. Теперь его единственная цель — месть.",
  "shortDescription": null,
  "slogan": null,
  "status": null,
  "rating": {
    "kp": 8.13,
    "imdb": 8,
    "filmCritics": 7.6,
    "russianFilmCritics": 0,
    "await": null
  },
  "votes": {
    "kp": 9261,
    "imdb": 6824,
    "filmCritics": 24,
    "russianFilmCritics": 0,
    "await": 0
  },
  "movieLength": 178,
  "totalSeriesLength": null,
  "seriesLength": null,
  "ratingMpaa": null,
  "ageRating": 12,
  "poster": {
    "url": "https://image.openmoviedb.com/kinopoisk-images/10671298/f705ab5a-8687-4404-bb1c-13ac696ab2e3/orig",
    "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10671298/f705ab5a-8687-4404-bb1c-13ac696ab2e3/x1000"
  },
  "backdrop": {
    "url": null,
    "previewUrl": null
  },
  "genres": [
    {
      "name": "боевик"
    },
    {
      "name": "триллер"
    },
    {
      "name": "драма"
    },
    {
      "name": "мелодрама"
    },
    {
      "name": "приключения"
    },
    {
      "name": "история"
    }
  ],
  "countries": [
    {
      "name": "Франция"
    },
    {
      "name": "Бельгия"
    }
  ],
  "premiere": {
    "world": "2024-05-22T00:00:00.000Z",
    "bluray": null,
    "cinema": null,
    "digital": null,
    "dvd": null,
    "russia": "2024-09-19T00:00:00.000Z"
  },
  "sequelsAndPrequels": [],
  "watchability": {
    "items": []
  },
  "top10": null,
  "top250": null,
  "isSeries": false,
  "audience": [
    {
      "count": 114573,
      "country": "Россия"
    }
  ],
  "ticketsOnSale": true,
  "lists": [
    "popular-films"
  ],
  "networks": null,
  "createdAt": "2024-02-13T21:03:29.451Z",
  "updatedAt": "2024-09-27T20:14:17.351Z",
  "persons": [
    {
      "id": 1631339,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1631339.jpg",
      "name": "Пьер Нинэ",
      "enName": "Pierre Niney",
      "description": "Edmond Dantès",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 29413,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_29413.jpg",
      "name": "Пьерфранческо Фавино",
      "enName": "Pierfrancesco Favino",
      "description": "Abbé Faria",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4446948,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4446948.jpg",
      "name": "Оскар Лесаж",
      "enName": "Oscar Lesage",
      "description": "Le témoin du duel",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 464857,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_464857.jpg",
      "name": "Анаис Демустье",
      "enName": "Anaïs Demoustier",
      "description": "Mercédès Herrera",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 11514,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_11514.jpg",
      "name": "Лоран Лафитт",
      "enName": "Laurent Lafitte",
      "description": "Gérard de Villefort (в титрах: Laurent Lafitte de la Comédie Française)",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1802625,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1802625.jpg",
      "name": "Бастьен Буйон",
      "enName": "Bastien Bouillon",
      "description": "Fernand de Morcef",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2433906,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2433906.jpg",
      "name": "Анамария Вартоломеи",
      "enName": "Anamaria Vartolomei",
      "description": "Haydée",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 274273,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_274273.jpg",
      "name": "Патрик Милле",
      "enName": "Patrick Mille",
      "description": "Danglars",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2276589,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2276589.jpg",
      "name": "Вассили Шнайдер",
      "enName": "Vassili Schneider",
      "description": "Albert",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6367004,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6367004.jpg",
      "name": "Жюльен Де Сен Жан",
      "enName": "Julien De Saint Jean",
      "description": "Andréa",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 982380,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_982380.jpg",
      "name": "Жюли Де Бона",
      "enName": "Julie De Bona",
      "description": "Victoria",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4575195,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4575195.jpg",
      "name": "Адель Симфаль",
      "enName": "Adèle Simphal",
      "description": "Angèle",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1351850,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1351850.jpg",
      "name": "Стефан Варюпен",
      "enName": "Stéphane Varupenne",
      "description": "Caderousse (в титрах: Stéphane Varupenne de la Comédie Française)",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 5080175,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5080175.jpg",
      "name": "Мари Нарбонн",
      "enName": "Marie Narbonne",
      "description": "Eugénie Danglars",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 46765,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_46765.jpg",
      "name": "Бруно Раффаэлли",
      "enName": "Bruno Raffaelli",
      "description": "Morrel",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4774101,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4774101.jpg",
      "name": null,
      "enName": "Abde Maziane",
      "description": "Jacopo (в титрах: Abdé Maziane)",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 228985,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_228985.jpg",
      "name": "Бернар Бланкан",
      "enName": "Bernard Blancan",
      "description": "Le père Dantès",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10212043,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10212043.jpg",
      "name": null,
      "enName": "Joachim Simon",
      "description": "Maximilien Morrel",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2333251,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2333251.jpg",
      "name": "Лили Дюпон",
      "enName": "Lily Dupont",
      "description": "Suzanne",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 292987,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_292987.jpg",
      "name": "Жереми Ковийо",
      "enName": "Jérémie Covillault",
      "description": "Antoine",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 128892,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_128892.jpg",
      "name": "Флоранс Мюллер",
      "enName": "Florence Muller",
      "description": "Mme Herrera",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 88583,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_88583.jpg",
      "name": "Франсуаза Газио",
      "enName": "Françoise Gazio",
      "description": "Yvonne",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 30635,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_30635.jpg",
      "name": "Грациелла Делерм",
      "enName": "Graziella Delerm",
      "description": "Mme de Morcerf",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 39857,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_39857.jpg",
      "name": "Ксавьер Де Гийбон",
      "enName": "Xavier de Guillebon",
      "description": "M. De Morcerf",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 375343,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_375343.jpg",
      "name": "Клементин Баэр",
      "enName": "Clémentine Baert",
      "description": "Mme de Villefort",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 4424415,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4424415.jpg",
      "name": "Оливье Ле Монтанье",
      "enName": "Olivier Le Montagner",
      "description": "Le gardien d'If",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1687206,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1687206.jpg",
      "name": "Серж Багдассарян",
      "enName": "Serge Bagdassarian",
      "description": "Le juge",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1118558,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1118558.jpg",
      "name": "Антуан Оппенхайм",
      "enName": "Antoine Oppenheim",
      "description": "Le commissaire",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 249207,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_249207.jpg",
      "name": "Жан-Луи Трибе",
      "enName": "Jean-Louis Tribes",
      "description": "Le juge",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6461885,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6461885.jpg",
      "name": null,
      "enName": "Léa Hengl",
      "description": "Une lingère",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 5799127,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5799127.jpg",
      "name": null,
      "enName": "Swan Starosta",
      "description": "La pianiste chanteuse",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 3153359,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3153359.jpg",
      "name": "Робин Уэлш",
      "enName": "Robin Welch",
      "description": "Le tavrenier",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10212044,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10212044.jpg",
      "name": null,
      "enName": "Amaya Ducellier",
      "description": "Haydée (10 ans)",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10212045,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10212045.jpg",
      "name": null,
      "enName": "Ruben Seguinot",
      "description": "Le gamin misérable",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10212046,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10212046.jpg",
      "name": null,
      "enName": "Sacha Imparato",
      "description": "Le crieur de rue",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10212047,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10212047.jpg",
      "name": null,
      "enName": "Lubin Noiron",
      "description": "Enfant de choeur",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10212048,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10212048.jpg",
      "name": null,
      "enName": "Paul Semont",
      "description": "Enfant de choeur",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 5409425,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5409425.jpg",
      "name": "Лоран Дассо",
      "enName": "Laurent Dassault",
      "description": "Convive Morcerf",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 1575750,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1575750.jpg",
      "name": "Кристиан Валсамидис",
      "enName": "Christian Valsamidis",
      "description": "Convive Morcerf",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6984174,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6984174.jpg",
      "name": null,
      "enName": "Pauline Sagetat",
      "description": "Danseuse Valse (Bal d'Eugénie)",
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 5108801,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5108801.jpg",
      "name": "Аксель Бай",
      "enName": "Axel Baille",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10155120,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10155120.jpg",
      "name": null,
      "enName": "Jonathan Balzan",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6260812,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6260812.jpg",
      "name": null,
      "enName": "Delphine Broussous",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10155121,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10155121.jpg",
      "name": null,
      "enName": "Mark Cassar",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10155122,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10155122.jpg",
      "name": null,
      "enName": "Marcelo Castelo",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6974077,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6974077.jpg",
      "name": null,
      "enName": "Joseph Debono",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 6537769,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6537769.jpg",
      "name": "Максим Дюран",
      "enName": "Maxime Durand",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10155123,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10155123.jpg",
      "name": null,
      "enName": "Emilia Figiel",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 10154713,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10154713.jpg",
      "name": null,
      "enName": "Kurt Laferla",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 2220965,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2220965.jpg",
      "name": "Антуан Менар",
      "enName": "Antoine Menard",
      "description": null,
      "profession": "актеры",
      "enProfession": "actor"
    },
    {
      "id": 644620,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_644620.jpg",
      "name": "Жером Реботье",
      "enName": "Jérôme Rebotier",
      "description": null,
      "profession": "композиторы",
      "enProfession": "composer"
    },
    {
      "id": 1500604,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1500604.jpg",
      "name": "Стефан Тайлассон",
      "enName": "Stéphane Taillasson",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 3246166,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3246166.jpg",
      "name": "Ческо Бонелло",
      "enName": "Cesco Bonello",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 5196485,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5196485.jpg",
      "name": "Свен Бонничи",
      "enName": "Sven Bonnici",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 1987675,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987675.jpg",
      "name": "Патрик Шмитт",
      "enName": "Patrick Schmitt",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 2007639,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2007639.jpg",
      "name": "Тьерри Делетр",
      "enName": "Thierry Delettre",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 10214903,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10214903.jpg",
      "name": null,
      "enName": "Raphaël de Chauveron",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 2045141,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2045141.jpg",
      "name": "Эмили Ферренк",
      "enName": "Emilie Ferrenq",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 2092157,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2092157.jpg",
      "name": "Джесси Купперман",
      "enName": "Jessy Kupperman",
      "description": null,
      "profession": "художники",
      "enProfession": "designer"
    },
    {
      "id": 578002,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_578002.jpg",
      "name": "Александр де Ла Пательер",
      "enName": "Alexandre de La Patellière",
      "description": null,
      "profession": "режиссеры",
      "enProfession": "director"
    },
    {
      "id": 578003,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_578003.jpg",
      "name": "Матьё Делапорт",
      "enName": "Mathieu Delaporte",
      "description": null,
      "profession": "режиссеры",
      "enProfession": "director"
    },
    {
      "id": 2001097,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2001097.jpg",
      "name": "Селия Лафитедюпон",
      "enName": "Célia Lafitedupont",
      "description": null,
      "profession": "монтажеры",
      "enProfession": "editor"
    },
    {
      "id": 3436482,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3436482.jpg",
      "name": "Сара Терна",
      "enName": "Sarah Ternat",
      "description": null,
      "profession": "монтажеры",
      "enProfession": "editor"
    },
    {
      "id": 640580,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_640580.jpg",
      "name": "Николя Больдюк",
      "enName": "Nicolas Bolduc",
      "description": null,
      "profession": "операторы",
      "enProfession": "operator"
    },
    {
      "id": 1199454,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1199454.jpg",
      "name": "Дмитрий Рассам",
      "enName": "Dimitri Rassam",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 7088436,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7088436.jpg",
      "name": "Нора Шабер",
      "enName": "Nora Chabert",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 4750160,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4750160.jpg",
      "name": "Седрик Иланд",
      "enName": "Cédric Iland",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 1284814,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1284814.jpg",
      "name": null,
      "enName": "Guinal Riou",
      "description": null,
      "profession": "продюсеры",
      "enProfession": "producer"
    },
    {
      "id": 578003,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_578003.jpg",
      "name": "Матьё Делапорт",
      "enName": "Mathieu Delaporte",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 40422,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_40422.jpg",
      "name": "Александр Дюма отец",
      "enName": "Alexandre Dumas",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 578002,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_578002.jpg",
      "name": "Александр де Ла Пательер",
      "enName": "Alexandre de La Patellière",
      "description": null,
      "profession": "сценаристы",
      "enProfession": "writer"
    },
    {
      "id": 4077749,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4077749.jpg",
      "name": "Евгений Хазов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1560260,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1560260.jpg",
      "name": "Павел Конышев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1893992,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1893992.jpg",
      "name": "Варвара Чабан",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 4275999,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4275999.jpg",
      "name": "Владимир Паляница",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 4498160,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4498160.jpg",
      "name": "Глеб Петров",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 3373972,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3373972.jpg",
      "name": "Евгения Ваган",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 2964454,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2964454.jpg",
      "name": "Александр Хорлин",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 2460909,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2460909.jpg",
      "name": "Влад Токарев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 3397562,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3397562.jpg",
      "name": "Иван Мишин",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1929007,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1929007.jpg",
      "name": "Ирина Киреева",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 4453937,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4453937.jpg",
      "name": "Юлия Горохова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1656504,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1656504.jpg",
      "name": "Александр Коврижных",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6172623,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6172623.jpg",
      "name": "Елена Маркелова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 1036893,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1036893.jpg",
      "name": "Геннадий Новиков",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5844752,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5844752.jpg",
      "name": "Виктория Дуженкова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6627448,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6627448.jpg",
      "name": "Юлия Иванова",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 4191107,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4191107.jpg",
      "name": "Глеб Орлов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5341439,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5341439.jpg",
      "name": "Анатолий Нокс",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 5818723,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5818723.jpg",
      "name": "Артем Затиев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 6439219,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6439219.jpg",
      "name": "Алексей Терехов",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 7150636,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7150636.jpg",
      "name": "Алина Гольденберг",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    },
    {
      "id": 10169799,
      "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10169799.jpg",
      "name": "Александр Лаврентьев",
      "enName": null,
      "description": null,
      "profession": "актеры дубляжа",
      "enProfession": "voice_actor"
    }
  ],
  "fees": {
    "world": {
      "value": 68028000,
      "currency": "$"
    }
  }
}


export const movieTickets = {
  "docs": [
    {
      "id": 5504255,
      "name": "Гранд-тур",
      "alternativeName": "Grand Tour",
      "enName": null,
      "names": [
        {
          "name": "Большое путешествие",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        },
        {
          "name": "Grand Tour",
          "language": null,
          "type": "Original title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "1917 год, Рангун. Госслужащий Британской империи в день приезда своей невесты сбегает от неё.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 6.4,
        "filmCritics": 7.6,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 3,
        "imdb": 341,
        "filmCritics": 22,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 128,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": null,
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "история"
        }
      ],
      "countries": [
        {
          "name": "Португалия"
        },
        {
          "name": "Италия"
        },
        {
          "name": "Франция"
        },
        {
          "name": "Германия"
        },
        {
          "name": "Япония"
        },
        {
          "name": "Китай"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true,
      "poster": {
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10703859/469045ad-27fa-4048-b0e9-9c6e47b242df/x1000",
        "url": "https://image.openmoviedb.com/kinopoisk-images/10703859/469045ad-27fa-4048-b0e9-9c6e47b242df/orig"
      }
    },
    {
      "id": 5295906,
      "name": "Время жить",
      "alternativeName": "We Live in Time",
      "enName": null,
      "names": [
        {
          "name": "We Live in Time",
          "language": null,
          "type": "Original title on kinopoisk"
        },
        {
          "name": "Время жить",
          "$set": {
            "language": "RU",
            "type": "Russian title on kinopoisk"
          }
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Целеустремлённая Альмут всю жизнь мечтала быть шеф-поваром, а романтичный Тобиас всё не оправится от недавнего развода. Случайное столкновение изменило их жизни навсегда — и вот у них уже очаровательная дочь, уютный домик и процветающие карьеры. Идиллию нарушает роковая новость: Альмут предстоит борьба с серьезной болезнью. Не теряя надежды, пара осознаёт ценность каждого отведённого момента и решает жить так, чтобы ни одна минута не пропала зря.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 9220
      },
      "movieLength": 107,
      "ratingMpaa": "r",
      "ageRating": 16,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/ecf5b1e6-bf29-4e70-b777-e2252e906c49/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/ecf5b1e6-bf29-4e70-b777-e2252e906c49/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "мелодрама"
        }
      ],
      "countries": [
        {
          "name": "Великобритания"
        },
        {
          "name": "Франция"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "releaseYears": [],
      "isSeries": false,
      "seriesLength": null,
      "totalSeriesLength": null
    },
    {
      "id": 5497855,
      "rating": {
        "kp": 7.13,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 100,
        "await": null
      },
      "votes": {
        "kp": 552,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 5,
        "await": 0
      },
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "фантастика"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "ageRating": null,
      "alternativeName": null,
      "description": "В небольшой уральской деревне живут самые обычные люди. Не считая местного слабослышащего «дурачка» Лёши. Он живёт в самодельном доме из мусора, еженедельно рисует странные круги на полях и сутками пытается поймать радиоволны в надежде на то, что ему удастся связаться с представители внеземных цивилизаций. Жители деревни смеются над Лёшей и его странными увлечениями, но всё меняется, когда к нему наконец приходит тот, кого он так долго звал.",
      "enName": null,
      "isSeries": false,
      "movieLength": 78,
      "name": "Пришелец",
      "poster": {
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10592371/224eca92-6276-46f2-894f-3b5e1d8465e0/x1000",
        "url": "https://image.openmoviedb.com/kinopoisk-images/10592371/224eca92-6276-46f2-894f-3b5e1d8465e0/orig"
      },
      "ratingMpaa": null,
      "seriesLength": null,
      "shortDescription": null,
      "status": null,
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "totalSeriesLength": null,
      "type": "movie",
      "typeNumber": 1,
      "year": 2024
    },
    {
      "id": 6289346,
      "name": "TheatreHD: Брегенцский фестиваль: Вольный стрелок",
      "alternativeName": "Der Freischütz - Von den Bregenzer Festspielen",
      "enName": null,
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Леденящая душу мрачная фантастическая история с оттенком сказок братьев Гримм на масштабной сцене Боденского озера в декорациях Филиппа Штёльцля.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 128,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 12,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/4486362/69c4ef71-675c-4e80-9836-c48420bd7e20/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4486362/69c4ef71-675c-4e80-9836-c48420bd7e20/x1000"
      },
      "genres": [
        {
          "name": "музыка"
        }
      ],
      "countries": [
        {
          "name": "Германия"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 5451308,
      "name": "Чёрный чай",
      "alternativeName": "Black Tea",
      "enName": null,
      "names": [
        {
          "name": "Чёрный чай",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        },
        {
          "name": "Black Tea",
          "language": null,
          "type": "Original title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Девушка сбегает из-под венца в день свадьбы и уезжает в Азию, где знакомится с владельцем чайного магазина, настоящим знатоком искусства китайской чайной церемонии. В неспешности наслаждения оттенками и вкусами, между ними вспыхивает страсть.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 5.2,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 119,
        "imdb": 336,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 110,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 16,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10900341/d7d538ff-e15d-41d2-8c66-1b9c2620dfe5/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10900341/d7d538ff-e15d-41d2-8c66-1b9c2620dfe5/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "мелодрама"
        }
      ],
      "countries": [
        {
          "name": "Франция"
        },
        {
          "name": "Тайвань"
        },
        {
          "name": "Люксембург"
        },
        {
          "name": "Мавритания"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 6293649,
      "name": "Ноймайер: Стеклянный зверинец",
      "alternativeName": "John Neumeier: Die Glasmenagerie",
      "enName": null,
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Мать тоскует о молодости, когда была окружена поклонниками и комфортом, вспоминает бросившего её мужа и срывается на детях. Сын мечтает о творчестве, а вынужден кормить семью, работая на фабрике. Дочь, ставшая инвалидом из-за пережитой в детстве болезни, замкнута, застенчива и неуклюжа и может лишь мечтать о возможности танцевать и любить. Тоску замученной бытом и неустроенностью семьи разрушает визит молодого человека — школьного приятеля сына.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 130,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 18,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10812607/b182970c-9bfb-4fb7-b647-fce6c319d10c/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10812607/b182970c-9bfb-4fb7-b647-fce6c319d10c/x1000"
      },
      "genres": [
        {
          "name": "драма"
        }
      ],
      "countries": [
        {
          "name": "Германия"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 6303475,
      "name": "TheatreHD: Леопольдштадт",
      "alternativeName": null,
      "enName": null,
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Спектакль о неумолимости времени и истории, о людской силе и слабости, о тщетности попыток что-либо предугадать и голосе крови, который делает человека человеком.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 156,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 16,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/a71e95b6-a8b0-4e49-a273-0fbc79fa00ad/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/a71e95b6-a8b0-4e49-a273-0fbc79fa00ad/x1000"
      },
      "genres": [
        {
          "name": "драма"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 5377804,
      "name": "Руки Вверх!",
      "alternativeName": null,
      "enName": null,
      "names": [
        {
          "name": "Руки вверх",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Из провинциального мальчишки, мечтающего впечатлить девушку робкими песнями о любви, Сергей Жуков становится одним из самых востребованных артистов страны и голосом целого поколения.",
      "shortDescription": "Провинциальный музыкант-самоучка становится кумиром поколения. Билеты — на Кинопоиске!                              ",
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 50408
      },
      "movieLength": null,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 12,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/4486454/c3f05f2e-e850-4ebf-ad5f-74594813e16d/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4486454/c3f05f2e-e850-4ebf-ad5f-74594813e16d/x1000"
      },
      "backdrop": {
        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000191ef28797dbb94ab1e38bae2ceb6/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000191ef28797dbb94ab1e38bae2ceb6/x1000"
      },
      "genres": [
        {
          "name": "музыка"
        },
        {
          "name": "биография"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "isSeries": false,
      "releaseYears": []
    },
    {
      "id": 5368758,
      "name": "Сидони в Японии",
      "alternativeName": "Sidonie au Japon",
      "enName": null,
      "names": [],
      "type": "movie",
      "typeNumber": 1,
      "year": 2023,
      "description": "Сидони Персеваль — известная французская писательница, недавно потерявшая мужа. Она отправляется в книжный тур в Японию, где встречается со своим загадочным издателем. Во время путешествия по Японии Сидони постепенно открывается ему, но призрак мужа продолжает ее преследовать. Ей придется отпустить прошлое, чтобы снова полюбить.",
      "shortDescription": "Писательница должна отпустить прошлое, чтобы вновь полюбить. Нежная драма с Изабель Юппер и Аугустом Дилем",
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 5.9,
        "filmCritics": 4.8,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 129,
        "imdb": 503,
        "filmCritics": 8,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 95,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 16,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10953618/e1fe7ef8-a5b7-4070-8ad1-a1f4c8656b25/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10953618/e1fe7ef8-a5b7-4070-8ad1-a1f4c8656b25/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "мелодрама"
        }
      ],
      "countries": [
        {
          "name": "Франция"
        },
        {
          "name": "Германия"
        },
        {
          "name": "Швейцария"
        },
        {
          "name": "Япония"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "isSeries": false,
      "releaseYears": [],
      "logo": {
        "url": null,
        "previewUrl": null
      }
    },
    {
      "id": 5330756,
      "name": "Малышарики. День рождения",
      "alternativeName": null,
      "enName": null,
      "names": [
        {
          "name": "Малышарики. День рождения",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Мама и Папа только что переехали в новый дом и готовятся к первому дню рождения их дочери Малышки. Балансируя между работой и семьёй, Папа покупает в необычном магазине подарок, даже не заглядывая в коробку. А там оказываются маленькие ожившие игрушки — Малышарики. Пока родители готовятся к празднику Малышарики выбираются из коробки и отправляются на поиски собственного домика.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 52,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 0,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10893610/fc405993-c584-41e9-bdc3-0e1dc1295350/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/fc405993-c584-41e9-bdc3-0e1dc1295350/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "детский"
        },
        {
          "name": "семейный"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "isSeries": false,
      "releaseYears": []
    },
    {
      "id": 6328019,
      "name": "Мульт в кино. Выпуск №174. Добрые дела!",
      "alternativeName": null,
      "enName": null,
      "type": "cartoon",
      "typeNumber": 3,
      "year": 2024,
      "description": "Кеша узнает, что такое эхо, кошечки и собачки поиграют в суперавтомобиль, Тима и Тома будут искать Лунный цветок, Чирикины отправятся к дедушке на праздник, а Сказочный патруль захотят сделать доброе дело, но случайно помогут украсть телепорт.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 45,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 0,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10900341/27f5ea6c-7940-42fa-a236-1dd0d7199271/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10900341/27f5ea6c-7940-42fa-a236-1dd0d7199271/x1000"
      },
      "genres": [
        {
          "name": "мультфильм"
        },
        {
          "name": "детский"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 5506436,
      "name": "Кот-призрак Андзу",
      "alternativeName": "Bakeneko Anzu-chan",
      "enName": null,
      "names": [
        {
          "name": "Ghost Cat Anzu",
          "language": null,
          "type": "Original title on kinopoisk"
        }
      ],
      "type": "anime",
      "typeNumber": 4,
      "year": 2024,
      "description": "История дружбы между девочкой Карин, которую отправили жить к дедушке-монаху в деревню, и Андзу — непредсказуемым призрачным котом, который становится её опекуном.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 6.5,
        "filmCritics": 8,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 93,
        "imdb": 125,
        "filmCritics": 5,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 90,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 12,
      "genres": [
        {
          "name": "мультфильм"
        },
        {
          "name": "фэнтези"
        },
        {
          "name": "драма"
        },
        {
          "name": "семейный"
        },
        {
          "name": "аниме"
        }
      ],
      "countries": [
        {
          "name": "Япония"
        },
        {
          "name": "Франция"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true,
      "poster": {
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10812607/7cc099ce-9796-4fd8-b5c3-e249506d6424/x1000",
        "url": "https://image.openmoviedb.com/kinopoisk-images/10812607/7cc099ce-9796-4fd8-b5c3-e249506d6424/orig"
      }
    },
    {
      "id": 5454464,
      "name": "Жизнь",
      "alternativeName": "Sterben",
      "enName": null,
      "names": [
        {
          "name": "Смерть",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        },
        {
          "name": "Sterben",
          "language": null,
          "type": "Original title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Каждый из членов немецкой семьи Лунис несчастен по-своему. Дирижер Том без остатка отдается работе над новой композицией, его вечно пьяная сестра крутит интрижку с женатым боссом, а мать радуется тому, что отца помещают в дом престарелых. Встретившись снова, смогут они простить друг друга или возненавидят еще больше?",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 7.6,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 180,
        "imdb": 791,
        "filmCritics": 0,
        "russianFilmCritics": 1,
        "await": 0
      },
      "movieLength": 180,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 18,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/846e2c81-a02e-4a06-81b4-c01da4007277/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/846e2c81-a02e-4a06-81b4-c01da4007277/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "драма"
        }
      ],
      "countries": [
        {
          "name": "Германия"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 5424446,
      "name": "Агент на уикенд",
      "alternativeName": "Weekend in Taipei",
      "enName": null,
      "names": [],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Он — спецагент, для которого не бывает невыполнимых миссий. Она — лучший перевозчик на службе преступного синдиката. Судьба сталкивает бывших любовников во время очередного задания, где им предстоит обнаружить, что сложнее, чем выжить, только одно — не влюбиться друг в друга снова.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 5.9,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 134,
        "imdb": 231,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "movieLength": 100,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 18,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10812607/cc6934b7-4ce2-42ac-af01-ee78ee2e2f69/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10812607/cc6934b7-4ce2-42ac-af01-ee78ee2e2f69/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "боевик"
        },
        {
          "name": "триллер"
        }
      ],
      "countries": [
        {
          "name": "Франция"
        },
        {
          "name": "США"
        }
      ],
      "top10": null,
      "top250": null,
      "isSeries": false,
      "ticketsOnSale": true
    },
    {
      "id": 5379349,
      "name": "Говорит Земля!",
      "alternativeName": null,
      "enName": null,
      "names": [
        {
          "name": "Говорит Земля!",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "У Земли крайняя стадия аллергии на жизнедеятельность человека. Она очень долго себя сдерживала, но теперь осталось совсем мало времени до того момента, как она «чихнёт» и человечество постигнет участь динозавров. Единственный, кто может предупредить людей об опасности и что-то исправить — это Стас. Простой шахтёр, мечтающий переехать на море. Он никогда не парился на тему экологии, но именно он начинает слышать голос Земли. \nЭто произошло, когда дерзкая эко-активистка Лена решила самостоятельно изучить заброшенную часть шахты. Из-за чего произошел обвал, который засыпал Стаса, после этого у него и установился контакт с Землей. Теперь Стасу надо убедить сначала Лену, а вместе с ней и весь мир, что «а» — он не сумасшедший и, правда, слышит Землю и «б» — Земля предупреждает, что человечеству осталось совсем мало времени, чтобы спасти ее и вместе с ней себя.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 2152
      },
      "movieLength": 114,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 12,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10671298/66c91723-725d-476d-a2ca-98c5529150af/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10671298/66c91723-725d-476d-a2ca-98c5529150af/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "комедия"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "isSeries": false,
      "releaseYears": []
    },
    {
      "id": 5361988,
      "name": "Особенности национальной больницы",
      "alternativeName": null,
      "enName": null,
      "names": [
        {
          "name": "Волонтёр",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        },
        {
          "name": "Особенности национальной больницы",
          "$set": {
            "language": "RU",
            "type": "Russian title on kinopoisk"
          }
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "Молодой немец Вернер Мюллер оказывается волонтером в неврологическом отделении обычной петербургской больницы. Иностранца, рвущегося помогать всем больным и нуждающимся, ждет долгий и насыщенный день. То и дело попадая в комические ситуации и пробираясь через недоразумения, волонтер открывает для себя русский характер.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 1207
      },
      "movieLength": 78,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 18,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/de98ddb8-a4ab-41b1-b78e-f576a3ecb4f2/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/de98ddb8-a4ab-41b1-b78e-f576a3ecb4f2/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "комедия"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "isSeries": false,
      "releaseYears": []
    },
    {
      "id": 4903016,
      "name": "Королевство",
      "alternativeName": null,
      "enName": null,
      "names": [
        {
          "name": "Королевство",
          "language": "RU",
          "type": "Russian title on kinopoisk"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2023,
      "description": "Подростки отмечают выпуск из детского дома, спуская за два дня все деньги. Арендуют роскошный коттедж и устраивают настоящий праздник. Эти два дня — время, когда сбываются мечты. Аренда дома заканчивается, но праздник заканчиваться не должен: дом превращается в крепость. И даже когда начинается штурм дома, ребята ждут, что все это скоро закончится и наступит рассвет.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 100,
        "await": 0
      },
      "votes": {
        "kp": 104,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 4,
        "await": 0
      },
      "movieLength": 85,
      "totalSeriesLength": null,
      "seriesLength": null,
      "ratingMpaa": null,
      "ageRating": 16,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10592371/d68351d9-3e9b-4674-9027-cad0f18da16f/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10592371/d68351d9-3e9b-4674-9027-cad0f18da16f/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "драма"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "ticketsOnSale": true,
      "top10": null,
      "top250": null,
      "isSeries": false,
      "releaseYears": []
    },
    {
      "id": 5255368,
      "name": "Тихое место: Азраэль",
      "alternativeName": "Azrael",
      "enName": null,
      "names": [
        {
          "name": "Azrael"
        }
      ],
      "type": "movie",
      "typeNumber": 1,
      "year": 2024,
      "description": "В мире, где царит гробовое молчание, община язычников преследует и похищает молодую женщину, чтобы принести ее в жертву древнему злу. Чудом освободившись, Азраэль клянётся отомстить и положить конец культу, для которого нет ничего святого.",
      "shortDescription": null,
      "status": null,
      "rating": {
        "kp": 0,
        "imdb": 6,
        "filmCritics": 6.4,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 195,
        "imdb": 467,
        "filmCritics": 48,
        "russianFilmCritics": 0,
        "await": 0
      },
      "ratingMpaa": "r",
      "ageRating": 18,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10953618/cb2baf56-c7da-4c69-a64b-91958ac12ee2/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10953618/cb2baf56-c7da-4c69-a64b-91958ac12ee2/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "ужасы"
        },
        {
          "name": "боевик"
        }
      ],
      "countries": [
        {
          "name": "Эстония"
        },
        {
          "name": "США"
        }
      ],
      "top10": null,
      "top250": null,
      "releaseYears": [],
      "ticketsOnSale": true,
      "movieLength": 85,
      "isSeries": false,
      "seriesLength": null,
      "totalSeriesLength": null
    },
    {
      "id": 5203750,
      "name": "Формула воды",
      "alternativeName": null,
      "enName": null,
      "names": [
        {
          "name": "Формула воды"
        }
      ],
      "type": "cartoon",
      "typeNumber": 3,
      "description": "Девочка-подросток Дана живёт на одном из островов планеты-океана среди мутантов. Она становится целью пиратов-головорезов, которые считают ее ключом к легендарному сокровищу — источнику питьевой воды. Спасаясь от пиратов, Дана знакомится с труппой бродячих артистов. Вместе им предстоит пережить яркие и опасные приключения, стать настоящими друзьями и разгадать тайну сокровища.",
      "shortDescription": null,
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "ratingMpaa": null,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/4716873/be138ec8-b4e3-413d-b404-dd98cabd9066/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4716873/be138ec8-b4e3-413d-b404-dd98cabd9066/x1000"
      },
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "genres": [
        {
          "name": "мультфильм"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "top10": null,
      "top250": null,
      "releaseYears": [],
      "ageRating": 6,
      "year": 2024,
      "status": null,
      "ticketsOnSale": true,
      "isSeries": false,
      "movieLength": null,
      "seriesLength": null,
      "totalSeriesLength": null
    },
    {
      "id": 5119649,
      "names": [
        {
          "name": "Василиса и королева лайков"
        }
      ],
      "genres": [
        {
          "name": "фэнтези"
        },
        {
          "name": "приключения"
        },
        {
          "name": "комедия"
        },
        {
          "name": "семейный"
        }
      ],
      "countries": [
        {
          "name": "Россия"
        }
      ],
      "releaseYears": [],
      "alternativeName": null,
      "backdrop": {
        "url": null,
        "previewUrl": null
      },
      "description": "За некие провинности Хранители времени из дальней вселенной отправляют на Землю Волшебника. Там он обретает внучку Василису, тоже наделенную чудодейственными силами. Вместе они знакомятся со звездой интернета Дашей, которая живёт вниманием и любовью своих поклонников в социальных сетях: чем больше их армия, чем больше их лайков, тем моложе и красивее она становится. Задача коварной Даши — завладеть волшебной силой Василисы и с ее помощью обрести вечную молодость.",
      "enName": null,
      "name": "Василиса и хранители времени",
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/10768063/9dbe99f1-e0ab-4e74-8ac0-d89cbdedb7ad/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10768063/9dbe99f1-e0ab-4e74-8ac0-d89cbdedb7ad/x1000"
      },
      "rating": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 0
      },
      "ratingMpaa": null,
      "shortDescription": null,
      "top10": null,
      "top250": null,
      "type": "movie",
      "typeNumber": 1,
      "votes": {
        "kp": 0,
        "imdb": 0,
        "filmCritics": 0,
        "russianFilmCritics": 0,
        "await": 2072
      },
      "year": 2024,
      "ageRating": 6,
      "status": null,
      "ticketsOnSale": true,
      "movieLength": null,
      "isSeries": false,
      "seriesLength": null,
      "totalSeriesLength": null
    }
  ],
  "total": 107,
  "limit": 20,
  "page": 1,
  "pages": 6
}