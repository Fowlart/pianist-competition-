import {createStore} from 'redux'

const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація "Фортепіанний ансамбль"`;
const group3 = `Номінація "Концертмейстер"`;

const myCards = [{
    "id": {
        "$oid": "6097a02b6bcf772038b9b3a5"
    },
    "name": "Агратіна Станіслав, 9 років. ",
    "composition": "1) М.Глінка. Почуття, 2)Ю.Щуровський. Танок",
    "videoUrl": "https://drive.google.com/file/d/194yt_sKC5Et3r49zCERsdBZeDQgY-G_i/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3a6"
    },
    "name": "Валігура Варвара, 9 років. ",
    "composition": "М.Лемішко. Коломийка",
    "videoUrl": "https://drive.google.com/file/d/1c6hTIqDl-cAF3Br3l1c2uwqFZsLVSPTv/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3a7"
    },
    "name": "Валігура Варвара, 9 років. ",
    "composition": "Т.Максімов. ''Задзеркалля''",
    "videoUrl": "https://drive.google.com/file/d/15Yr6Qxm4rstDOMU2vGn5Jwq5VfUpN2SD/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3a8"
    },
    "name": "Василевська Христина,7 років.",
    "composition": "1)В.Гіллок.''Самотня бальна зала''. 2)Т.Ростимашенко.''Чаклун''",
    "videoUrl": "https://drive.google.com/file/d/1GtxUKuUkLKAnh5oCf9FluiUTQoJCTbMM/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3a9"
    },
    "name": "Волинець Олександр, 8 років. ",
    "composition": "1)Л.Колодуб. Аркан. 2)Ф.Рибіцький. ''Реготушка''",
    "videoUrl": "https://drive.google.com/file/d/1_COPePzwdgS7U_OjExOpv8noz1miTe8c/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3aa"
    },
    "name": "Галаган Катерина, 9 років. ",
    "composition": "1)Ю.Щуровський. Тема з варіаціями; 2)Г.Кушнаренко. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1oBlUfXWqlh5uDsDFCXbHgc7XGiAJGbLH/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ab"
    },
    "name": "Герасименко Олександра,9 років.",
    "composition": " 1)В.Рачковський. Токатина;2)В.Косенко. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1DGnsSQGlBu8X_oDPt3YKtKmiVzV-G3qJ/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ac"
    },
    "name": "Голодовська Софія,7 років.",
    "composition": "1)І.Ванхаль.Рондо;2)М.Дремлюга.''Весела гра''",
    "videoUrl": "https://drive.google.com/file/d/12Kutj-owpsr8helrm_kFZh1yQwMjEC7A/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ad"
    },
    "name": "Голуб Аліна, 9 років ",
    "composition": "1)М.Клементі. Сонатина до мажор, Іч., 2)Б.Дваріонас. Прелюдія",
    "videoUrl": "https://drive.google.com/file/d/1uwhKMKdJZIhRznM3VU5mTqEuKxxTesaO/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ae"
    },
    "name": "Григор'єва Катерина, 8 років.",
    "composition": "1)Ю.Щуровський. ''Ранок'';2)І.Королькова.''Горобчик''",
    "videoUrl": "https://drive.google.com/file/d/1aiMv5LwYV9m2wz-SJMGnxfUqIRT9M_Ew/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3af"
    },
    "name": "Данюк Єлизавета,7 років.",
    "composition": "1)М.Любарський.''Танцювальна''; 2) Д.Кабалевський.Вальс",
    "videoUrl": "https://drive.google.com/file/d/1vTk_mAB_ECh9VDwR6EMasY1y21KWrSYH/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b0"
    },
    "name": "Дроган  Мілана, 5 років.",
    "composition": "1)М.Майєр. ''Весела гра''; 2)Д.Баштейн. ''Вальс слоненят''",
    "videoUrl": "https://drive.google.com/file/d/1Xb0gIgFyCnLuCxjn5klaeQ0Ll9DskRPz/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b1"
    },
    "name": "Дроздова Єлизавета, 9 років. ",
    "composition": "1)Й.С.Бах.Менует. 2)Г.Классен. Полька",
    "videoUrl": "https://drive.google.com/file/d/1r5_18pR7BLxDSDEnMD7rHNGjR9ziEiGn/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b2"
    },
    "name": "Збір Марія,8 років.",
    "composition": "1)О.Гедіке. Сонатина до мажор, І ч.,2)Р.Шуман.''Перша втрата''",
    "videoUrl": "https://drive.google.com/file/d/1_7qn3fTutdKGcGdbgv13rKokJ8jxgk3a/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b3"
    },
    "name": "Іваньків Олександра. 9 років.",
    "composition": "1)А.Діабеллі. Скерцо; 2)О.Гедіке. Маленька п'єса",
    "videoUrl": "https://drive.google.com/file/d/1vYeVkRaV1mb33uJ1DGMr20qoikFCr9Ay/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b4"
    },
    "name": "Іванюк Маріам, 8 років. ",
    "composition": "С.Майкапар. ''Маленька прелюдія'' соль мінор",
    "videoUrl": "https://drive.google.com/file/d/1rRlLMJjoWwTVup7_vVMD4D3nl2Y-lspO/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b5"
    },
    "name": "Іванюк Маріам. 8 років.",
    "composition": " В.Кирейко. ''Стриб-скок''",
    "videoUrl": "https://drive.google.com/file/d/1ImpPq9ncbMh5T1ScAHfDmz57BDlLZCF2/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b6"
    },
    "name": "Ісупова Алісія, 8 років. ",
    "composition": "1)К.Рейнеке. Гавот,;2)Й.С.Бах. Маленька прелюдія до мінор",
    "videoUrl": "https://drive.google.com/file/d/10g9CCJoXRzeG8CiFhgnEBzTQBLIWDanA/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b7"
    },
    "name": "Коваленко Варвара,8 років.",
    "composition": "1)О.Геталова.''Ранок в лісі'';2)В.Подвала. ''Капризуля''",
    "videoUrl": "https://drive.google.com/file/d/1S38_oECOBo7KGDV1azJUx3zOYwgQEQIV/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b8"
    },
    "name": "Коренівська Дар'я, 9 років. ",
    "composition": "1)Р.Вандал.''Водограй'';2)П.Захаров.''Знайомий силует''",
    "videoUrl": "https://drive.google.com/file/d/19CAzPCaWrAN_SWzaJFdEpxPIOQw-rfLU/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3b9"
    },
    "name": "Костенко Ярослава, 7 років.",
    "composition": " В.Косенко. Мелодія",
    "videoUrl": "https://drive.google.com/file/d/1CddYcoygTctoabGQF7pT2poRvCupVG_c/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ba"
    },
    "name": "Костенко Ярослава. 7 років. ",
    "composition": "Й.Йєнсен.''Чарівний танок''",
    "videoUrl": "https://drive.google.com/file/d/1uB29bTPEiYdugJfLOZl4SQGrFY9nQpr-/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3bb"
    },
    "name": "Латковська Єлизавета,9 років. ",
    "composition": "1)В.Косенко. вальс; 2)О.Гречанінов.''Мій коник''",
    "videoUrl": "https://drive.google.com/file/d/16YAw-q7f8F9JBPmfn8tEkpJT81J7EahA/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3bc"
    },
    "name": "Лішман Дарина,9 років.",
    "composition": "1)В.Подвала.''Марш-гротеск''. 2)С.Майкапар.Колискова",
    "videoUrl": "https://drive.google.com/file/d/1NsWz3TR0SKiTtcNCAJe059bhhFomt_NE/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3bd"
    },
    "name": "Магола Софія, 8 років. ",
    "composition": "1)Я.Бобалік.''Святкова полька''; 2)І.Беркович. Сонатина соль мажор",
    "videoUrl": "https://drive.google.com/file/d/1guAxs5g_wbGv_twqiypo0e8FHOwum-Ih/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3be"
    },
    "name": "Мазуренко Майя, 8 років. ",
    "composition": "1)М. Бобер. ''Агент Х'', 2)І.Іордан. ''Полювання на метелика''",
    "videoUrl": "https://drive.google.com/file/d/1Ie1WCQpgPuLYdKNxVGuLkeIVnYJNZJ9T/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3bf"
    },
    "name": "Марченко Єлизавета, 9 років.",
    "composition": "1)Й.С.Бах.маленька прелюдія до мінор; 2)П.Чайковський.''Баба Яга''",
    "videoUrl": "https://drive.google.com/file/d/1ZJo4GULZ9sfcUuApF5jyoHIUV_IKAVrg/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c0"
    },
    "name": "Марчук Максим, 8 років.",
    "composition": " Ф. Шпіндлер. Сонатина, тв.157 №4",
    "videoUrl": "https://drive.google.com/file/d/1sC7MUjcknrnZZZ5hfMCXbSvs36KA3ppV/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c1"
    },
    "name": "Марчук Максим. ",
    "composition": "В. Гіллок. ''Капрічієтто''",
    "videoUrl": "https://drive.google.com/file/d/1YdAihvAQkCT8bbyW44pQi2iZhmX1c3Kz/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c2"
    },
    "name": "Мотузкина Лідія, 9 років. ",
    "composition": "О.Білаченко. Український танок",
    "videoUrl": "https://drive.google.com/file/d/1bpO9dHAcbP8KlaWT_1nXXQiZebuD8F0p/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c3"
    },
    "name": "Мотузкина Лідія,9 років.",
    "composition": " В.Моцарт.Менует",
    "videoUrl": "https://drive.google.com/file/d/1C_mxAU65VvvvfiPoRQscKR0oUDWpHDQt/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c4"
    },
    "name": "Новосільська Катерина, 7 років. ",
    "composition": "1)М.Клементі.Сонатина тв.36, І-ІІІч., 2)І.Беркович. Прелюдія",
    "videoUrl": "https://drive.google.com/file/d/1Y72CFLOMPibwTUPgWOmsQH3YJPviBjDa/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c5"
    },
    "name": "Ольховська Аніта, 9 років.",
    "composition": " І.Павлік. ''Сніжинки''",
    "videoUrl": "https://drive.google.com/file/d/1rs-VgFMnIYZVm9kOjNh6FTl_P0CADRB1/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c6"
    },
    "name": "Ольховська Аніта, 9 років. ",
    "composition": "Н. Карпенко. Етюд сі мінор",
    "videoUrl": "https://drive.google.com/file/d/1kS3BqQw4-msMoznO3Nz_iWc5ytlJOFTm/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c7"
    },
    "name": "Остапчук Каріна. 8 років.",
    "composition": "1)В.Гіллок ''Дзвіночки''; 2)І.Хуторянський.'''Вогнівочка-стрибунівочка''",
    "videoUrl": "https://drive.google.com/file/d/16RAcN2O6kunKZAFrbgBHsENiZg9iKs4G/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c8"
    },
    "name": "Охрін Ярема, 8 років. ",
    "composition": "1) Д.Кабалевський. Новела. 2)С.Майкапар.Токатина",
    "videoUrl": "https://drive.google.com/file/d/1zw1JK0J4d8Hk-znbv-5oDna-qL3cwREP/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3c9"
    },
    "name": "Павленко Стефанія, 7 років. ",
    "composition": "1)М.Любарський.Пісня; 2) Д.Кабалевський.''Клоуни''",
    "videoUrl": "https://drive.google.com/file/d/1ImnwJj2Deqz-TJfvXACCrZpiZNT3BnKH/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ca"
    },
    "name": "Панькова Анна, 8 років. ",
    "composition": "1)Й.С.Бах. Маленька прелюдія до мінор; 2)Л.Шукайло. Інтермецо",
    "videoUrl": "https://drive.google.com/file/d/1yrAHr6i17NShP5qaImPnWx-xJQjCMMy2/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3cb"
    },
    "name": "Парфьонов Дмитро, 9 років.",
    "composition": "1)Н.Владикіна-Бачинська.''Щось сумне''; 2)О.Гедіке.Танець",
    "videoUrl": "https://drive.google.com/file/d/1NDdw57RsrmLrE_yWSG0uFJXEjWcGqGmR/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3cc"
    },
    "name": "Погорєлов Артем, 9 років.",
    "composition": "1)Й.С.Бах. Менует; 2)Н.Нижанківський. Коломийка",
    "videoUrl": "https://drive.google.com/file/d/1ne86iM-NUs6NcioBsvUjfQa6Mn7cSAR7/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3cd"
    },
    "name": "Пузанова Марія,9 років.",
    "composition": "1)У. Гіллок. ''Королівський менует''; 2)І.Іордан. «Полювання на метелика»",
    "videoUrl": "https://drive.google.com/file/d/1OGS_fqzJvbB7aNPrexwqDK5x0ls-20CC/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3ce"
    },
    "name": "Резнік Тетяна, 9 років.",
    "composition": "1)Н.Торопова. Варіації ''Три порося'',2)Д.Кабалевський. ''Маленький жонглер''",
    "videoUrl": "https://drive.google.com/file/d/1xGxNTTtWrhdOu6Y7GueUAgGXvjoLlMBl/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3cf"
    },
    "name": "Рибак Анастасія,8 років.",
    "composition": "1).Мелартін.''Ранок'',2)М.Майєр.''Незвичайна пригода''",
    "videoUrl": "https://drive.google.com/file/d/1uzmVqFVnnQaIGX7o3H-7tNe0kp1ZiUvP/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d0"
    },
    "name": "Ріпний Богдан, 8 років.",
    "composition": " 1)І. Беркович. Варіації; 2)Д. Роулі.''В країні гномів''",
    "videoUrl": "https://drive.google.com/file/d/1Qlr1_-pFAlLIixKkhx2-ZxxEYZhAZ9Z7/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d1"
    },
    "name": "Романченко Елисей, 8 років.",
    "composition": " 1)Ш.Гуно.''Марш маріонеток'';2) О.Гречанінов.''Незвичайна пригода''",
    "videoUrl": "https://drive.google.com/file/d/1iI-zjq4QimDL9TLE5BRYurmuAL16fScU/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d2"
    },
    "name": "Сайчук Ярослава, 9 років. ",
    "composition": "Т. Максимов.''Баба Яга''",
    "videoUrl": "https://drive.google.com/file/d/1X5C7kfNd3QloZl0TAvN_AQh0-qXtpSSB/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d3"
    },
    "name": "Сайчук Ярослава,9 років.",
    "composition": " К.Роллін. '' Шоколадне печиво''",
    "videoUrl": "https://drive.google.com/file/d/16vYm_EdDx_-3BRHJMyD35k3oC4F2tV56/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d4"
    },
    "name": "Сітшаєва Зарема,9 років.",
    "composition": "1) Л.Бетховен. Сонатина до мажор; 2)К.Слонімський. ''Дюймовочка''",
    "videoUrl": "https://drive.google.com/file/d/1H6edQtsRp0_wcuOYRAEh1lffRz0TXtib/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d5"
    },
    "name": "Смірнова Євгенія, 9 років. ",
    "composition": "1)В.Квасневський.''Думка'', 2)Д.Александер. ''Зимова рапсодія''",
    "videoUrl": "https://drive.google.com/file/d/16LW9EesPPs1STi6kQpQxdEJzk3PgnHYj/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d6"
    },
    "name": "Стрийська Амелія, 8 років.",
    "composition": " 1)В.Косенко.''Дощик''; 2)О.Білаченко. Експромт",
    "videoUrl": "https://drive.google.com/file/d/10h9ONRG2T42vxAlWy4ASP0qga8IU02rv/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d7"
    },
    "name": "Студзинська Єлизавета,7 років.",
    "composition": "1) Л. Моцарт. Менует, 2)У. Гіллок.      ''Осінній ескіз''",
    "videoUrl": "https://drive.google.com/file/d/1VdsObub9Z0E7ZM1QYMsfqkaljnnLQ2je/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d8"
    },
    "name": "Сухан Діана, 8 років. ",
    "composition": "1)Л.Шукайло.Варіації на тему В.Шаїнського; 2)Р.Фучс.''Маленьке розбите серце''",
    "videoUrl": "https://drive.google.com/file/d/1Gu5ucoCGFhyEnMh3-IDUJ-uF0Tuj37UZ/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3d9"
    },
    "name": "Терп'як Аарон, 9 років.",
    "composition": "1) І.Беркович. Варіації на українську тему; 2)Т.Остен. ''Маленький ельф''",
    "videoUrl": "https://drive.google.com/file/d/1ZtQbNBBgGmOzMWnnHAF-7_CBsXk3Lw-2/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3da"
    },
    "name": "Тимченко Надія, 8 років, ",
    "composition": "1)А.Штогаренко. ''Метелик''; 2)В.Гіллок. ''Місячне сяйво''",
    "videoUrl": "https://drive.google.com/file/d/1PS9AGHyEDqstjqA1MiEbTkp5j1UuShrG/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3db"
    },
    "name": "Тіщенко Вероніка, 7 років.",
    "composition": "1)Й.С.Бах. Маленька прелюдія до мінор;. 2)Л. Шукайло. Варіації",
    "videoUrl": "https://drive.google.com/file/d/1Ftrj9k5jhDxVi5ufhXY3THkwOK8Y12Hm/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3dc"
    },
    "name": "Тодорова Даяна, 6 років. ",
    "composition": "1)В.Барвінський. ''Зайчик'', 2)М.Любарський. ''Плясова''",
    "videoUrl": "https://drive.google.com/file/d/1PAzIBtjG0NfqazUI25HsRrFVXjLyz2Bi/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3dd"
    },
    "name": "Тонієвич Ксенія, 9 років. ",
    "composition": "1)О.Спіліоті''Гуцулята'';2)В.Гіллок.''У старому Відні''",
    "videoUrl": "https://drive.google.com/file/d/119w3wnHMp6XNWSKKr9VJIoYjVIP9MlAO/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3de"
    },
    "name": "Тютько Володимир, 9 років. ",
    "composition": "1)Ф.Кулау.Сонатина, тв.55 №3; 2)Р.Лісова.''Веселий настрій''",
    "videoUrl": "https://drive.google.com/file/d/1bg-HK7Lp3UwjGk3MITTdD9eQ7rFdhx1H/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3df"
    },
    "name": "Фесенко Анна,8 років. ",
    "composition": "1)А.Гедіке.Сонатина до мажор, 2)В.Гаврилін. ''Капріччіо''",
    "videoUrl": "https://drive.google.com/file/d/1Ejrq8ZEXBJq_ANfAiY-5jKH7Rs58fLuC/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3e0"
    },
    "name": "Чорней Яна, 7 років. ",
    "composition": "1)М. Екштейн. ''Каприз гномів''; 2)С.Юферов. Ноктюрн",
    "videoUrl": "https://drive.google.com/file/d/1g6bB7aqWptw5lLnAiXklOFpQl4X0NLKj/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3e1"
    },
    "name": "Шкурко Тимофій, 9 років. ",
    "composition": "1)Ф.Шопен. Вальс ля мінор; 2)Л.Шукайло. ''Весела мозаїка''",
    "videoUrl": "https://drive.google.com/file/d/1eJJ44ZbgTrUTdH-tBPKGyc1K_0rryj4_/preview",

    "group": "Номінація \"Фортепіано соло\""
}, {
    "id": {
        "$oid": "6097a02b6bcf772038b9b3e2"
    },
    "name": "Юрчук Яна, 7 років.",
    "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.; 2)П.Чайковський.''Вранішня молитва''",
    "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",

    "group": "Номінація \"Фортепіано соло\""
}];

function filmReducer(state = {cardCount: myCards.length, cards: myCards, isDataInPlace: true, error: ""}, action) {
    switch (action.type) {
        case 'INFO_PAGE':
            return {
                cardCount: -1,
                cards: [],
                isDataInPlace: false,
                error: ""
            };
        case 'ALL':
            console.log("> Усі відео");
            return {
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length,
                error: ""
            };
        case 'group-1':
            let newCards = myCards.filter(card => card.group === group1).slice();
            return {
                cards: newCards,
                isDataInPlace: true,
                cardCount: newCards.length,
                error: ""
            }
        case 'group-2':
            let newCards1 = myCards.filter(card => card.group === group2).slice();
            return {
                cards: newCards1,
                isDataInPlace: true,
                cardCount: newCards1.length,
                error: ""
            }
        case 'group-3':
            let newCards2 = myCards.filter(card => card.group === group3).slice();
            return {
                cards: newCards2,
                isDataInPlace: true,
                cardCount: newCards2.length,
                error: "",
            }
        case 'SEARCH':
            let q = action.query.toLowerCase();
            console.log(`> Пошук: ${q}`);
            let newCards3 = myCards.filter(card => {
                let cardName = card.name.toLowerCase();
                let bool = (cardName.startsWith(q) || cardName.includes(q));
                console.log(`Testing ${cardName} on query ${q}, result is ${bool}`)
                return bool;
            });

            console.log(newCards3);

            return {
                ...state,
                cards: newCards3,
                isDataInPlace: true,
                cardCount: newCards3.length,
                error: ""
            }
        case
        'ERROR'
        :
            console.log(`> Помилка`);
            return {

                error: action.msg
            }
        default:
            return {
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length,
                error: ""
            }
    }
}

export const cardStore = createStore(filmReducer);

cardStore.subscribe(() =>
    console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount)
);





