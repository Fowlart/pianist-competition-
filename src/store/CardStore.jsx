import {createStore} from 'redux'

const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація "Фортепіанний ансамбль"`;
const group3 = `Номінація "Концертмейстер"`;

let myCards = [{
    "id": {
        "$oid": "609853dc683dda47f8b61307"
    },
    "name": "Агратіна Станіслав, 9 років ",
    "composition": "1)М.Глінка. ''Почуття'',      2)Ю.Щуровський. ''Танок''",
    "videoUrl": "https://drive.google.com/file/d/194yt_sKC5Et3r49zCERsdBZeDQgY-G_i/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61308"
    },
    "name": "Валігура Варвара, 9 років ",
    "composition": "М.Лемішко. ''Коломийка''",
    "videoUrl": "https://drive.google.com/file/d/1c6hTIqDl-cAF3Br3l1c2uwqFZsLVSPTv/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61309"
    },
    "name": "Валігура Варвара, 9 років ",
    "composition": "Т.Максімов. ''Задзеркалля''",
    "videoUrl": "https://drive.google.com/file/d/15Yr6Qxm4rstDOMU2vGn5Jwq5VfUpN2SD/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6130a"
    },
    "name": "Василевська Христина,7 років",
    "composition": "1)В.Гіллок.''Самотня бальна зала'',   2)Т.Ростимашенко.''Чаклун''",
    "videoUrl": "https://drive.google.com/file/d/1GtxUKuUkLKAnh5oCf9FluiUTQoJCTbMM/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6130b"
    },
    "name": "Волинець Олександр, 8 років",
    "composition": "1)Л.Колодуб. ''Аркан'',2)Ф.Рибіцький. ''Реготушка''",
    "videoUrl": "https://drive.google.com/file/d/1_COPePzwdgS7U_OjExOpv8noz1miTe8c/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6130c"
    },
    "name": "Галаган Катерина, 9 років ",
    "composition": "1)Ю.Щуровський. Тема з варіаціями, 2)Г.Кушнаренко. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1oBlUfXWqlh5uDsDFCXbHgc7XGiAJGbLH/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6130d"
    },
    "name": "Герасименко Олександра, 9 років",
    "composition": " 1)В.Рачковський. Токатина. 2)В.Косенко. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1DGnsSQGlBu8X_oDPt3YKtKmiVzV-G3qJ/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6130e"
    },
    "name": "Голодовська Софія, 7 років",
    "composition": "1)І.Ванхаль.Рондо, 2)М.Дремлюга.''Весела гра''",
    "videoUrl": "https://drive.google.com/file/d/12Kutj-owpsr8helrm_kFZh1yQwMjEC7A/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6130f"
    },
    "name": "Голуб Аліна, 9 років ",
    "composition": "1)М.Клементі. Сонатина до мажор, Іч., 2)Б.Дваріонас. Прелюдія",
    "videoUrl": "https://drive.google.com/file/d/1uwhKMKdJZIhRznM3VU5mTqEuKxxTesaO/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61310"
    },
    "name": "Григор'єва Катерина, 8 років",
    "composition": "1)Ю.Щуровський. ''Ранок'',   2)І.Королькова.''Горобчик''",
    "videoUrl": "https://drive.google.com/file/d/1aiMv5LwYV9m2wz-SJMGnxfUqIRT9M_Ew/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61311"
    },
    "name": "Данюк Єлизавета, 7 років",
    "composition": "1)М.Любарський.''Танцювальна'', 2) Д.Кабалевський. Вальс",
    "videoUrl": "https://drive.google.com/file/d/1vTk_mAB_ECh9VDwR6EMasY1y21KWrSYH/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61312"
    },
    "name": "Дроган  Мілана, 5 років",
    "composition": "1)М.Майєр. ''Весела гра'', 2)Д.Баштейн. ''Вальс слоненят''",
    "videoUrl": "https://drive.google.com/file/d/1Xb0gIgFyCnLuCxjn5klaeQ0Ll9DskRPz/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61313"
    },
    "name": "Дроздова Єлизавета, 9 років ",
    "composition": "1)Й.С.Бах.Менует. 2)Г.Классен. Полька",
    "videoUrl": "https://drive.google.com/file/d/1r5_18pR7BLxDSDEnMD7rHNGjR9ziEiGn/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61314"
    },
    "name": "Збір Марія, 8 років",
    "composition": "1)О.Гедіке. Сонатина до мажор,    І ч., 2)Р.Шуман.''Перша втрата''",
    "videoUrl": "https://drive.google.com/file/d/1_7qn3fTutdKGcGdbgv13rKokJ8jxgk3a/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61315"
    },
    "name": "Іваньків Олександра, 9 років",
    "composition": "1)А.Діабеллі. Скерцо,  2)О.Гедіке. ''Маленька п'єса''",
    "videoUrl": "https://drive.google.com/file/d/1vYeVkRaV1mb33uJ1DGMr20qoikFCr9Ay/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61316"
    },
    "name": "Іванюк Маріам, 8 років",
    "composition": "С.Майкапар. ''Маленька прелюдія'' соль мінор",
    "videoUrl": "https://drive.google.com/file/d/1rRlLMJjoWwTVup7_vVMD4D3nl2Y-lspO/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61317"
    },
    "name": "Іванюк Маріам, 8 років",
    "composition": " В.Кирейко. ''Стриб-скок''",
    "videoUrl": "https://drive.google.com/file/d/1ImpPq9ncbMh5T1ScAHfDmz57BDlLZCF2/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61318"
    },
    "name": "Ісупова Алісія, 8 років ",
    "composition": "1)К.Рейнеке. ''Гавот'', 2)Й.С.Бах. ''Маленька прелюдія'' до мінор",
    "videoUrl": "https://drive.google.com/file/d/10g9CCJoXRzeG8CiFhgnEBzTQBLIWDanA/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61319"
    },
    "name": "Коваленко Варвара, 8 років",
    "composition": "1)О.Геталова.''Ранок в лісі'',  2)В.Подвала. ''Капризуля''",
    "videoUrl": "https://drive.google.com/file/d/1S38_oECOBo7KGDV1azJUx3zOYwgQEQIV/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6131a"
    },
    "name": "Коренівська Дар'я, 9 років ",
    "composition": "1)Р.Вандал.''Водограй'',         2)П.Захаров.''Знайомий силует''",
    "videoUrl": "https://drive.google.com/file/d/19CAzPCaWrAN_SWzaJFdEpxPIOQw-rfLU/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6131b"
    },
    "name": "Костенко Ярослава, 7 років",
    "composition": " В.Косенко. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1CddYcoygTctoabGQF7pT2poRvCupVG_c/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6131c"
    },
    "name": "Костенко Ярослава, 7 років ",
    "composition": "Й.Йєнсен.''Чарівний танок''",
    "videoUrl": "https://drive.google.com/file/d/1uB29bTPEiYdugJfLOZl4SQGrFY9nQpr-/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6131d"
    },
    "name": "Латковська Єлизавета, 9 років",
    "composition": "1)В.Косенко. Вальс,    2)О.Гречанінов.''Мій коник''",
    "videoUrl": "https://drive.google.com/file/d/16YAw-q7f8F9JBPmfn8tEkpJT81J7EahA/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6131e"
    },
    "name": "Лішман Дарина, 9 років",
    "composition": "1)В.Подвала.''Марш-гротеск'',          2)С.Майкапар. ''Колискова''",
    "videoUrl": "https://drive.google.com/file/d/1NsWz3TR0SKiTtcNCAJe059bhhFomt_NE/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6131f"
    },
    "name": "Магола Софія, 8 років ",
    "composition": "1)Я.Бобалік.''Святкова полька''; 2)І.Беркович. Сонатина соль мажор",
    "videoUrl": "https://drive.google.com/file/d/1guAxs5g_wbGv_twqiypo0e8FHOwum-Ih/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61320"
    },
    "name": "Мазуренко Майя, 8 років",
    "composition": "1)М. Бобер. ''Агент Х'',          2)І.Іордан. ''Полювання на метелика''",
    "videoUrl": "https://drive.google.com/file/d/1Ie1WCQpgPuLYdKNxVGuLkeIVnYJNZJ9T/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61321"
    },
    "name": "Марченко Єлизавета, 9 років",
    "composition": "1)Й.С.Бах.''Маленька прелюдія'' до мінор, 2)П.Чайковський.''Баба Яга''",
    "videoUrl": "https://drive.google.com/file/d/1ZJo4GULZ9sfcUuApF5jyoHIUV_IKAVrg/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61322"
    },
    "name": "Марчук Максим, 8 років",
    "composition": " Ф. Шпіндлер. Сонатина, тв.157 №4",
    "videoUrl": "https://drive.google.com/file/d/1sC7MUjcknrnZZZ5hfMCXbSvs36KA3ppV/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61323"
    },
    "name": "Марчук Максим, 8 років ",
    "composition": "В. Гіллок. ''Капрічієтто''",
    "videoUrl": "https://drive.google.com/file/d/1YdAihvAQkCT8bbyW44pQi2iZhmX1c3Kz/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61324"
    },
    "name": "Мотузкина Лідія, 9 років ",
    "composition": "О.Білаченко. ''Український танок''",
    "videoUrl": "https://drive.google.com/file/d/1bpO9dHAcbP8KlaWT_1nXXQiZebuD8F0p/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61325"
    },
    "name": "Мотузкина Лідія, 9 років",
    "composition": " В.Моцарт. ''Менует''",
    "videoUrl": "https://drive.google.com/file/d/1C_mxAU65VvvvfiPoRQscKR0oUDWpHDQt/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61326"
    },
    "name": "Новосільська Катерина, 7 років ",
    "composition": "1)М.Клементі. Сонатина тв.36, І-ІІІч., 2)І.Беркович. Прелюдія",
    "videoUrl": "https://drive.google.com/file/d/1Y72CFLOMPibwTUPgWOmsQH3YJPviBjDa/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61327"
    },
    "name": "Ольховська Аніта, 9 років",
    "composition": " І.Павлік. ''Сніжинки''",
    "videoUrl": "https://drive.google.com/file/d/1rs-VgFMnIYZVm9kOjNh6FTl_P0CADRB1/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61328"
    },
    "name": "Ольховська Аніта, 9 років ",
    "composition": "Н. Карпенко. Етюд сі мінор",
    "videoUrl": "https://drive.google.com/file/d/1kS3BqQw4-msMoznO3Nz_iWc5ytlJOFTm/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61329"
    },
    "name": "Остапчук Каріна. 8 років",
    "composition": "1)В.Гіллок ''Дзвіночки'', 2)І.Хуторянський. ''Вогнівочка-стрибунівочка''",
    "videoUrl": "https://drive.google.com/file/d/16RAcN2O6kunKZAFrbgBHsENiZg9iKs4G/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6132a"
    },
    "name": "Охрін Ярема, 8 років",
    "composition": "1) Д.Кабалевський. ''Новела'',      2)С.Майкапар.''Токатина''",
    "videoUrl": "https://drive.google.com/file/d/1zw1JK0J4d8Hk-znbv-5oDna-qL3cwREP/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6132b"
    },
    "name": "Павленко Стефанія, 7 років ",
    "composition": "1)М.Любарський. ''Пісня'',2) Д.Кабалевський.''Клоуни''",
    "videoUrl": "https://drive.google.com/file/d/1ImnwJj2Deqz-TJfvXACCrZpiZNT3BnKH/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6132c"
    },
    "name": "Панькова Анна, 8 років ",
    "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор,        2)Л.Шукайло. ''Інтермецо''",
    "videoUrl": "https://drive.google.com/file/d/1yrAHr6i17NShP5qaImPnWx-xJQjCMMy2/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6132d"
    },
    "name": "Парфьонов Дмитро, 9 років",
    "composition": "1)Н.Владикіна-Бачинська.''Щось сумне'', 2)О.Гедіке. ''Танець''",
    "videoUrl": "https://drive.google.com/file/d/1NDdw57RsrmLrE_yWSG0uFJXEjWcGqGmR/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6132e"
    },
    "name": "Погорєлов Артем, 9 років",
    "composition": "1)Й.С.Бах. ''Менует'', 2)Н.Нижанківський. ''Коломийка''",
    "videoUrl": "https://drive.google.com/file/d/1ne86iM-NUs6NcioBsvUjfQa6Mn7cSAR7/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6132f"
    },
    "name": "Пузанова Марія, 9 років",
    "composition": "1)У. Гіллок. ''Королівський менует'', 2)І.Іордан. «Полювання на метелика»",
    "videoUrl": "https://drive.google.com/file/d/1OGS_fqzJvbB7aNPrexwqDK5x0ls-20CC/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61330"
    },
    "name": "Резнік Тетяна, 9 років",
    "composition": "1)Н.Торопова. Варіації,     2)Д.Кабалевський. ''Маленький жонглер''",
    "videoUrl": "https://drive.google.com/file/d/1xGxNTTtWrhdOu6Y7GueUAgGXvjoLlMBl/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61331"
    },
    "name": "Рибак Анастасія, 8 років",
    "composition": "1).Мелартін.''Ранок'', 2)М.Майєр.''Незвичайна пригода''",
    "videoUrl": "https://drive.google.com/file/d/1uzmVqFVnnQaIGX7o3H-7tNe0kp1ZiUvP/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61332"
    },
    "name": "Ріпний Богдан, 8 років",
    "composition": " 1)І. Беркович. Варіації,     2)Д. Роулі.''В країні гномів''",
    "videoUrl": "https://drive.google.com/file/d/1Qlr1_-pFAlLIixKkhx2-ZxxEYZhAZ9Z7/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61333"
    },
    "name": "Романченко Елисей, 8 років",
    "composition": " 1)Ш.Гуно.''Марш маріонеток'',   2) О.Гречанінов.''Незвичайна пригода''",
    "videoUrl": "https://drive.google.com/file/d/1iI-zjq4QimDL9TLE5BRYurmuAL16fScU/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61334"
    },
    "name": "Сайчук Ярослава, 9 років ",
    "composition": "Т. Максимов.''Баба Яга''",
    "videoUrl": "https://drive.google.com/file/d/1X5C7kfNd3QloZl0TAvN_AQh0-qXtpSSB/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61335"
    },
    "name": "Сайчук Ярослава, 9 років",
    "composition": " К.Роллін. '' Шоколадне печиво''",
    "videoUrl": "https://drive.google.com/file/d/16vYm_EdDx_-3BRHJMyD35k3oC4F2tV56/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61336"
    },
    "name": "Сітшаєва Зарема, 9 років",
    "composition": "1) Л.Бетховен. Сонатина до мажор; 2)К.Слонімський. ''Дюймовочка''",
    "videoUrl": "https://drive.google.com/file/d/1H6edQtsRp0_wcuOYRAEh1lffRz0TXtib/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61337"
    },
    "name": "Смірнова Євгенія, 9 років",
    "composition": "1)В.Квасневський.''Думка'', 2)Д.Александер. ''Зимова рапсодія''",
    "videoUrl": "https://drive.google.com/file/d/16LW9EesPPs1STi6kQpQxdEJzk3PgnHYj/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61338"
    },
    "name": "Стрийська Амелія, 8 років",
    "composition": " 1)В.Косенко.''Дощик'';      2)О.Білаченко. ''Експромт''",
    "videoUrl": "https://drive.google.com/file/d/10h9ONRG2T42vxAlWy4ASP0qga8IU02rv/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61339"
    },
    "name": "Студзинська Єлизавета, 7 років",
    "composition": "1) Л. Моцарт. ''Менует'',    2)У. Гіллок. ''Осінній ескіз''",
    "videoUrl": "https://drive.google.com/file/d/1VdsObub9Z0E7ZM1QYMsfqkaljnnLQ2je/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6133a"
    },
    "name": "Сухан Діана, 8 років ",
    "composition": "1)Л.Шукайло.Варіації на тему В.Шаїнського; 2)Р.Фучс.''Маленьке розбите серце''",
    "videoUrl": "https://drive.google.com/file/d/1Gu5ucoCGFhyEnMh3-IDUJ-uF0Tuj37UZ/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6133b"
    },
    "name": "Терп'як Аарон, 9 років",
    "composition": "1) І.Беркович. Варіації на українську тему; 2)Т.Остен. ''Маленький ельф''",
    "videoUrl": "https://drive.google.com/file/d/1ZtQbNBBgGmOzMWnnHAF-7_CBsXk3Lw-2/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6133c"
    },
    "name": "Тимченко Надія, 8 років ",
    "composition": "1)А.Штогаренко. ''Метелик'', 2)В.Гіллок. ''Місячне сяйво''",
    "videoUrl": "https://drive.google.com/file/d/1PS9AGHyEDqstjqA1MiEbTkp5j1UuShrG/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6133d"
    },
    "name": "Тіщенко Вероніка, 7 років",
    "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор, 2)Л. Шукайло. Варіації",
    "videoUrl": "https://drive.google.com/file/d/1Ftrj9k5jhDxVi5ufhXY3THkwOK8Y12Hm/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6133e"
    },
    "name": "Тодорова Даяна, 6 років",
    "composition": "1)В.Барвінський. ''Зайчик'',          2)М.Любарський. ''Плясова''",
    "videoUrl": "https://drive.google.com/file/d/1PAzIBtjG0NfqazUI25HsRrFVXjLyz2Bi/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b6133f"
    },
    "name": "Тонієвич Ксенія, 9 років",
    "composition": "1)О.Спіліоті.''Гуцулята'',   2)В.Гіллок.''У старому Відні''",
    "videoUrl": "https://drive.google.com/file/d/119w3wnHMp6XNWSKKr9VJIoYjVIP9MlAO/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61340"
    },
    "name": "Тютько Володимир, 9 років",
    "composition": "1)Ф.Кулау.Сонатина, тв.55 №3, 2)Р.Лісова.''Веселий настрій''",
    "videoUrl": "https://drive.google.com/file/d/1bg-HK7Lp3UwjGk3MITTdD9eQ7rFdhx1H/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61341"
    },
    "name": "Фесенко Анна, 8 років ",
    "composition": "1)А.Гедіке.Сонатина до мажор,  2)В.Гаврилін. ''Капріччіо''",
    "videoUrl": "https://drive.google.com/file/d/1Ejrq8ZEXBJq_ANfAiY-5jKH7Rs58fLuC/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61342"
    },
    "name": "Чорней Яна, 7 років ",
    "composition": "1)М. Екштейн. ''Каприз гномів'';  2)С.Юферов. ''Ноктюрн''",
    "videoUrl": "https://drive.google.com/file/d/1g6bB7aqWptw5lLnAiXklOFpQl4X0NLKj/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61343"
    },
    "name": "Шкурко Тимофій, 9 років ",
    "composition": "1)Ф.Шопен. ''Вальс'' ля мінор,     2)Л.Шукайло. ''Весела мозаїка''",
    "videoUrl": "https://drive.google.com/file/d/1eJJ44ZbgTrUTdH-tBPKGyc1K_0rryj4_/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "609853dc683dda47f8b61344"
    },
    "name": "Юрчук Яна, 7 років",
    "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.,2)П.Чайковський. ''Вранішня молитва''",
    "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61345"
    },
    "name": "Аміхалакіоає Ємельян, 10 років",
    "composition": "1)О.Білаченко.''Осінній ескіз'', 2)М.Кармінський. ''Гумореска''",
    "videoUrl": " https://drive.google.com/file/d/1zfqkyG6BpZ3_1XXdf_FVYOWFmpakjWWP/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61346"
    },
    "name": "Антонюк Варвара, 12 років ",
    "composition": "І.Плейєль. Сонатина ре мажор",
    "videoUrl": " https://drive.google.com/file/d/1DJeHf3fAuZ55Pf65mMAtw2Pct96dfa-t/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61347"
    },
    "name": "Антонюк Варвара, 12 років ",
    "composition": "С.Майкапар.''В ковальні''",
    "videoUrl": " https://drive.google.com/file/d/1lXyKuwM_JgxYZl6eWkAseU6vNaWz7pYz/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61348"
    },
    "name": "Бабчанік Андрій, 10 років ",
    "composition": "1)Д.Чимароза. Сонатина соль мажор. 2)Ю.Білковський. ''Роздуми''",
    "videoUrl": " https://drive.google.com/file/d/1UHAsNKjcJiBgxAdILOsjDERJKQMzeq7A/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61349"
    },
    "name": "Балута Аліна, 10 років",
    "composition": " 1) Е.Гріг. ''Танець з Йольстера'', 2)Л.Забара.''Ніч яка місячна''",
    "videoUrl": " https://drive.google.com/file/d/1oXGF3m41K-QN8Y1-W_j85DrTjkk88sQX/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6134a"
    },
    "name": "Басиста Олександра, 12 років",
    "composition": " 1)Ф.Шопен. Вальс, тв.64 №1, 2)С.Борткевич. Прелюдія, тв.6 №1",
    "videoUrl": " https://drive.google.com/file/d/1sPWZSPn4UMJVdfz73graDwdwIxyXgjBY/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6134b"
    },
    "name": "Білінкевич Наталія, 12 років",
    "composition": "1) М.Лисенко. Елегія,2)К.Черні. Етюд №1 тв.740",
    "videoUrl": " https://drive.google.com/file/d/1AR_WW0CFSSCXzVAfrHXuwBAD-_QC8j6W/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6134c"
    },
    "name": "Бульковська Марина, 10 років",
    "composition": " Д.Чімароза. Соната соль мажор",
    "videoUrl": " https://drive.google.com/file/d/1boxdtgAdhBIJdtcxdznZHP-q5faqa5QK/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6134d"
    },
    "name": "Бульковська Марина, 10 років",
    "composition": "К.Габел. ''Дерево життя''",
    "videoUrl": " https://drive.google.com/file/d/1fXZ6NdsN6u78tI6erKEjX2ofesHB2ebh/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6134e"
    },
    "name": "Вакуленко Аріна, 10 років ",
    "composition": "І.Беркович. Варіації на тему грузинської народної пісні ''Світлячок''",
    "videoUrl": " https://drive.google.com/file/d/1CdtXoVzjEl1YqVCdByxKsZdqEjft1hs6/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6134f"
    },
    "name": "Вакуленко Аріна, 10 років ",
    "composition": "С.Джоплін.''Артист естради''",
    "videoUrl": " https://drive.google.com/file/d/1GntiYvLzHrUXIsWDfdHp40-tt5yYuigq/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61350"
    },
    "name": "Васильєва Вероніка, 12 років",
    "composition": "1)Р.Глієр. Прелюдія до мінор;2)С.Джербашян. ''Швидкий рух''",
    "videoUrl": " https://drive.google.com/file/d/1QBgtdhw2IQeTH6QEYnKLGBalX0K2upN4/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61351"
    },
    "name": "Войтенко Лілія, 10 років",
    "composition": "1) Л. Шукайло.''Поні'', 2)О.Рибалова. ''Непосида''",
    "videoUrl": " https://drive.google.com/file/d/1-L_kJHu1PpkPGRCJ_EfxFLBbmc8fOOwq/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61352"
    },
    "name": "Войченко Владислав, 11 років",
    "composition": " 1) Й.С.Бах.Двоголосна інвенція фа мажор; 2)Ф.Шопен. Ноктюрн до дієз мінор",
    "videoUrl": " https://drive.google.com/file/d/1wu5klXGG7Bh2fPlR3YbeMlSKZBT8PRnN/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61353"
    },
    "name": "Вощинський Ілля, 12 років",
    "composition": "1)Е.Гріг. Ноктюрн, 2)М.Римський-Корсаков. ''Політ джмеля''",
    "videoUrl": " https://drive.google.com/file/d/17lbS0L956aNZ9D0GTI-p-k39z4lpehC7/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61354"
    },
    "name": "Галечев Іван, 11 років",
    "composition": " 1)Обр. Г.Без'язичного. ''Ніч яка місячна'', 2)П.Чайковський. ''Неаполітанська пісенька''",
    "videoUrl": " https://drive.google.com/file/d/14-Z82vYkVF1x2NpnqK1_xhAf2bWuaPQV/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61355"
    },
    "name": "Гамзалієва Зейнаб, 12 років",
    "composition": "Білорус. нар.пісня ''Бульба'', обр.Д.Льва-Компанійця",
    "videoUrl": " https://drive.google.com/file/d/1dQqGFphOGo0VpGoUd4z4U3en9LTc19pk/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61356"
    },
    "name": "Гамзалієва Зейнаб, 12 років ",
    "composition": "Й.Гайдн. Менует",
    "videoUrl": " https://drive.google.com/file/d/1Ww_800JPvH69YtjONECJH8VtZ_eZkkyk/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61357"
    },
    "name": "Гіліна Олександра, 11 років",
    "composition": "1)В.МоцартАрія; 2)Д.Градескі.''Морозиво. Регтайм''",
    "videoUrl": " https://drive.google.com/file/d/1f3K50GVcw8ksdYgRMxV61adRAFH5PKMw/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61358"
    },
    "name": "Горай Ярослав,12 років",
    "composition": "1)М.Скорик ''Мелодія'',         2) П.Базала. ''Потік''",
    "videoUrl": " https://drive.google.com/file/d/1UCbn7xPvEbrHCpMThnCIj5Qtgn6rVS_f/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61359"
    },
    "name": "Гоцуленко Вікторія, 12 років",
    "composition": "1)Й.Бах. Двоголосна інвенція ля мінор, 2) Ф.Шопен. Ноктюрн №21",
    "videoUrl": " https://drive.google.com/file/d/171ICM_7Ghrao1RN6ug0XLoRNJKobaRGQ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6135a"
    },
    "name": "Гукасян Ліана, 10 років",
    "composition": "А.Хачатурян. \"Андантіно\"",
    "videoUrl": " https://drive.google.com/file/d/12IdAfSi_waU6lrNfUvP2H0x0WO78aMGa/preview ",
    "group": "Номінація \"Фортепіано соло\""
},
    {
        "id": {
            "$oid": "60985400683dda47f8b6135aa"
        },
        "name": "Гукасян Ліана, 10 років",
        "composition": "Л.Хеллер. Сонатина",
        "videoUrl": " https://drive.google.com/file/d/1ktOVC3TR_AE4uRbG62OxNKVjoNJqiuPm/preview ",
        "group": "Номінація \"Фортепіано соло\""
    },{
    "id": {
        "$oid": "60985400683dda47f8b6135b"
    },
    "name": "Гуляєва Єва, 11років",
    "composition": "1)П. Захаров.''Елегія'', 2) Г.Валленгаупт. ''Скерцино''",
    "videoUrl": " https://drive.google.com/file/d/1rbcm7F_BfAeqMEzfQhZ6fF3Y21a7rYsw/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6135c"
    },
    "name": "Гутник  Кірена, 10 років ",
    "composition": "Л.Шітте.''Танець  гномів''",
    "videoUrl": " https://drive.google.com/file/d/1niDqNiCJu3CLS3EG5BWHuB_Aq7v45Rs3/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6135d"
    },
    "name": "Гутник Кірена, 10 років",
    "composition": " О.Соловяненко.''Поні біля цирку''",
    "videoUrl": " https://drive.google.com/file/d/1h7q0YaYiy6A6s6Bpw_TxtzrwwS_Az9Lx/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6135e"
    },
    "name": "Дорошенко Юлія, 10 років",
    "composition": "1) М. Клементі. Сонатина, тв.36 №6, І ч; 2) І.Беркович. Прелюдія, тв.46 №15",
    "videoUrl": " https://drive.google.com/file/d/1GlFCLC3x_1tZCOfmNhN0m4T0POJYBTjN/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6135f"
    },
    "name": "Дудін Дмитро, 11 років ",
    "composition": "1)Л.Бетховен. Сонатина соль мажор,І-ІІ ч.; 2)С.Прокоф'єв. ''Казочка''",
    "videoUrl": " https://drive.google.com/file/d/1xbm4x-VfzHzuzB4jThbsPh8IaCa94ttB/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61360"
    },
    "name": "Єрмоленко Дарина, 12 років ",
    "composition": "Й.С. Бах. Арія ре мажор",
    "videoUrl": " https://drive.google.com/file/d/1u7M6CXiysUfJuu6M-AvB774Wen0AnuZN/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61361"
    },
    "name": "Єрмоленко Дарина, 12 років",
    "composition": "О. Білаш. ''Баркарола''",
    "videoUrl": " https://drive.google.com/file/d/1hORf4uVvoW54pTCxgK2zImgxYxH47Yoo/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61362"
    },
    "name": "Загаєвська Софія, 12 років ",
    "composition": "1)А.Классен ''Музичний ескіз''№1, 2)О.Кимлик.''Леонтовіана''",
    "videoUrl": " https://drive.google.com/file/d/1w1TPh9JXsAje_KpE9QPp5Iv0EujmvjG-/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61363"
    },
    "name": "Іваннікова Марія, 11 років",
    "composition": "1)В.Моцарт. Соната №16, І частина,  2)О.Грибоєдов. Вальс",
    "videoUrl": " https://drive.google.com/file/d/1X1vhsTIPkI5zis22JHOXxQUDdOBe9A9G/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61364"
    },
    "name": "Іванюк Вірсавія,10 років",
    "composition": "1)О.Ходош.''Червона шапочка'', 2)І.Щербаков.''Елегія київських пагорбів''",
    "videoUrl": " https://drive.google.com/file/d/1M7I1QJbFkWBQHwK1lHKoyoE30l-Wc12m/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61365"
    },
    "name": "Ївженко Ада, 12 років",
    "composition": "1)М.Клементі.Сонатина соль мажор, 2)М.Скорик. ''Народний танець''",
    "videoUrl": " https://drive.google.com/file/d/1kpm6k0MCtujg7sPH9dcodY0kz1BrGEX9/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61366"
    },
    "name": "Каманчи Єлизавета, 12 років",
    "composition": "1)В.Калістратов.''Коник Горбоконик'', 2)Ю.Весняк. ''Ніжність''",
    "videoUrl": " https://drive.google.com/file/d/1mlWaLYsD8fkBQHgdrX-RfNCkd6wRrPkO/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61367"
    },
    "name": "Карашкевич Христина, 11 років ",
    "composition": "1)Й.С.Бах. Триголосна інвенція ре мінор, 2)М.Дремлюга. ''Скерцо''",
    "videoUrl": " https://drive.google.com/file/d/1EBGhNIptJSei0GZLKpsfyaIhi3Uae0cH/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61368"
    },
    "name": "Кіцера Аліна, 11 років",
    "composition": "1)К.Дебюссі ''Романтичний вальс'', 2)Б.Фільц. ''Скерцо''",
    "videoUrl": " https://drive.google.com/file/d/1Novsog_w52pzGkfJ2hZxihv33C2cSf0J/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61369"
    },
    "name": "Король Єлізавета, 10 років ",
    "composition": "1) П.Чайковський.''Пісня жайворонка''; 2)Л.Шукайло. Прелюдія",
    "videoUrl": " https://drive.google.com/file/d/1kbrGl8_IhfqnjkvTvoWh79mgm9pQ5kTJ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6136a"
    },
    "name": "Котляревська Юлія, 11 років",
    "composition": " Й. Гайдн. Соната соль мажор, Іч.",
    "videoUrl": " https://drive.google.com/file/d/1FAWHHKQ5ox0ETJLvurrRgZ2dOm1vtFke/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6136b"
    },
    "name": "Котляревська Юлія, 11 років ",
    "composition": "'Гандзя'', обр.Є Веврика",
    "videoUrl": " https://drive.google.com/file/d/1kIvdsvIrxeo816d-_MV5nbbcr-aOZhEp/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6136c"
    },
    "name": "Котова Марія, 10 років ",
    "composition": "1)О.Ключарьов.''Шуралє'', 2)Ф.Мендельсон.''Пісня без слів'', тв.19 №2",
    "videoUrl": " https://drive.google.com/file/d/1Y1cW_2ZiwBEN0Yc1KrWWncX376zgaD5B/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6136d"
    },
    "name": "Кривобабко Ксенія, 10 років",
    "composition": " Л.Шукайло. ''Весняні  краплинки''",
    "videoUrl": " https://drive.google.com/file/d/1dIJgkLIO2e7lcNpuARjxmudw03xjnc32/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6136e"
    },
    "name": "Кривобабко Ксенія, 10 років ",
    "composition": "Н.Карпенко. Етюд  ре мінор",
    "videoUrl": " https://drive.google.com/file/d/1B4-EbRYO-bcCjfuppeHXShv5DQzui9hA/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6136f"
    },
    "name": "Кутковська Лариса, 12 років",
    "composition": " 1)Е.Гріг. ''Ноктюрн'', тв.54 №4, 2)Т.Кулієв. ''Лезгінка''",
    "videoUrl": " https://drive.google.com/file/d/11cmQBdsm2epwZS_mUJx3gp1W582ZyWd7/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61370"
    },
    "name": "Лiзогуб Арсен, 10 років",
    "composition": "1)Г.Сасько.''Регтайм'', 2)П.Захаров.''Старовинна балада''",
    "videoUrl": " https://drive.google.com/file/d/11SFkWFvWn_UGNJK7c7Z1LlJ2NasM9Ksg/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61371"
    },
    "name": "Ланський Євген, 10 років ",
    "composition": "1)П.Чайковський.''Ранкова молитва'', тв.39, 2)І.Беркович. Токата ля мінор",
    "videoUrl": " https://drive.google.com/file/d/1VnPFLs5xHCt0TL2sd1E9WWyhTB8kGTuh/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61372"
    },
    "name": "Левандівська Марта, 10 років ",
    "composition": "В.Барвінський. ''Український танець''",
    "videoUrl": " https://drive.google.com/file/d/1FVjxAeB3dOzJpATDXyI-1ABtRizjzjod/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61373"
    },
    "name": "Левандівська Марта, 10 років",
    "composition": " Я. Сібеліус. Етюд тв. 76 №2",
    "videoUrl": " https://drive.google.com/file/d/18K7rgRzjCqZ-_5EWr0EoE5JlnTyhgZS4/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61374"
    },
    "name": "Леза Анна, 11 років ",
    "composition": "1) Ф.Шопен. Ноктюрн №20, 2)П.Захаров. ''Рондо-галоп''",
    "videoUrl": " https://drive.google.com/file/d/1Twf2sJ3_9Ar3oOTmZWKv6q8SMa9fGa-p/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61375"
    },
    "name": "Ликова Варвара, 11 років",
    "composition": "1) В.Гіллок.''Bill bailey'', 2)Ю.Щуровський. ''Шарманка''",
    "videoUrl": " https://drive.google.com/file/d/1dE5LcfV-T8QhLXiAfn8sxLEMecvgS-hO/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61376"
    },
    "name": "Лілік Марія-Магдалина, 11 років ",
    "composition": "1)Ф.Шопен. ''Аркуш з альбома'' мі бемоль мажор, 2)М.Колесса. ''Скерцино''",
    "videoUrl": " https://drive.google.com/file/d/1qticduAQQm72Ncy8e-st6nkjqwBrFSTe/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61377"
    },
    "name": "Макаревич Андрій-Олександр, 11 років ",
    "composition": "1)Й.С.Бах. Триголосна інвенція ре мажор, 2)К.Черні. Етюд №5, тв.299",
    "videoUrl": " https://drive.google.com/file/d/1iVuBPfw4HncPJkJn2yNZZw8UXlUXJHVc/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61378"
    },
    "name": "Маціборська Анна, 10 років",
    "composition": "1) Й. Бах. Двоголосна інвенція сі бемоль мажор,    2) Ф. Якименко. ''Елегія''",
    "videoUrl": " https://drive.google.com/file/d/1SrYttJFdizsuBe0yNsKrNDgJUP_AihaN/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61379"
    },
    "name": "Мельник Михайло, 10 років",
    "composition": "1)М.Клементі. сонатина до мажор, 2)В.Косенко. ''Дощик''",
    "videoUrl": " https://drive.google.com/file/d/1c0pWjGogDaEYCRCskzcq9VdUlHy-hshG/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6137a"
    },
    "name": "Меркулова Марія, 10 років ",
    "composition": "1) Д.Чімароза.Соната соль мажор; 2) М. Жербін. Вальс",
    "videoUrl": " https://drive.google.com/file/d/1j5pED7wQ3AHP0pNx9VO4Pp8dril9aMzf/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6137b"
    },
    "name": "Мигалюк Ріанна, 11 років",
    "composition": "1)Н.Нижанківський. ''Коломийка'',   2)В.Гіллок.''Карнавал в Ріо''",
    "videoUrl": " https://drive.google.com/file/d/1p5SMOeBaUz0jzX8A0l6X4N9yvtwG0w8m/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6137c"
    },
    "name": "Миргород Всеволод,12 років",
    "composition": "1)Ф.Кулау. Сонатина фа мажор,І ч.; 2)М.Лисенко. ''Елегія''",
    "videoUrl": " https://drive.google.com/file/d/1kpxsuRJnl3t64lbO8viVgfGsw_aMkRSm/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6137d"
    },
    "name": "Морозова Тетяна, 11 років ",
    "composition": "Й.Бенда.Сонатина",
    "videoUrl": " https://drive.google.com/file/d/15u4oK4uIv923BbhwHuQxc2kb2zW4DImG/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
        "id": {
            "$oid": "60985400683dda47f8b6137dd"
        },
        "name": "Морозова Тетяна, 11 років ",
        "composition": "С.Шевченко \"Вечір\"",
        "videoUrl": " https://drive.google.com/file/d/1Fy-L04EAfcq7I1bRpx5pE8lydIByT3SF/preview ",
        "group": "Номінація \"Фортепіано соло\""
    },{
    "id": {
        "$oid": "60985400683dda47f8b6137e"
    },
    "name": "Мунтян Наталія, 10 років ",
    "composition": "1)Ю.Щуровський. Тема з варіаціями,       2)Л.Шитте.''Іскри''",
    "videoUrl": " https://drive.google.com/file/d/1VjNHcWWgtmbakUXmpc3h7fhoN5gps9RV/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6137f"
    },
    "name": "Оборкіна Олександра, 11 років",
    "composition": "1)Е.Гріг.''Мелодія'',    2)Л.Шукайло. ''Багатель'' №5",
    "videoUrl": " https://drive.google.com/file/d/1ch2wvzxtR7ER2-6iDLUgvCAquUiv8dVf/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61380"
    },
    "name": "Пендюр Софія, 11 років",
    "composition": "1) О.Даргомижський.''Вальс'', 2)М.Скорик.''Народний танець''",
    "videoUrl": " https://drive.google.com/file/d/1sDG6wngpKHcMSOaOi_YlUGkucadBApBJ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61381"
    },
    "name": "Перетятько Анастасія, 10 років ",
    "composition": "Е.Гріг. ''Танець із Йольстера''",
    "videoUrl": " https://drive.google.com/file/d/10_Lgv-fLOd3yPAmNmWCd8YN3lSwXHLKG/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61382"
    },
    "name": "Перетятько Анастасія, 10 років",
    "composition": "М.Клементі. Сонатина №4, тв.36",
    "videoUrl": " https://drive.google.com/file/d/13wsI-ssTPx9ea0qZHFYsvsP2nuPbSDJ7/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61383"
    },
    "name": "Позняк Веніамін, 10 років",
    "composition": "1) Д.Пуленк. Стаккато. 2) Л.Бетховен. Весела-сумна",
    "videoUrl": " https://drive.google.com/file/d/1vsbc2GvHYArggP57-Z5wFlGwchMpNp3E/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61384"
    },
    "name": "Прокопюк Марина, 10 років",
    "composition": " 1)І.Білаченко. Експромт. 2)Ю.Щуровський. Танець",
    "videoUrl": " https://drive.google.com/file/d/1Qn9DQL2NHJeOfGHDHYwauZ62vinrflAy/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61385"
    },
    "name": "Решетнікова Людмила, 11 років",
    "composition": " 1)О.Білаченко.''Осінній ескіз'', 2)О.Польовий.''Полька-бабка''",
    "videoUrl": " https://drive.google.com/file/d/1_XfCK8FK1FLmxbkEB8VTdfa990qJ7xRA/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61386"
    },
    "name": "Ротар Каріна, 10 років ",
    "composition": "1) Ю.Щуровський. ''Баркарола'', 2) Д.Пешетті. ''Престо''",
    "videoUrl": " https://drive.google.com/file/d/17MF-0z6uAkmKWlpYySWGH8sbOiZ--n9J/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61387"
    },
    "name": "Савченко Матвій, 11років ",
    "composition": "1)Л.Бетховен. Соната мі бемоль мажор, І ч., 2)І.Щербаков. '' Елегія київських пагорбів''",
    "videoUrl": " https://drive.google.com/file/d/1J_HQk6IS2PZPZUP9uYOP6wkQtR3opo6B/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61388"
    },
    "name": "Саква Валерія, 11 років ",
    "composition": "1)М.Лансевич.''Прелюдія'', 2)М.Дворжак. ''Джазовий етюд'' ля мажор",
    "videoUrl": " https://drive.google.com/file/d/11tsdLvk25bD8FSDYTXXnypR29gkPtxXs/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61389"
    },
    "name": "Сартанія Давид, 10 років",
    "composition": " 1)Е.Вагнер.Сонатина до мажор,   2) Р.Вандалл.''Водоспад''",
    "videoUrl": " https://drive.google.com/file/d/1mrESYZIiP1iWenGiZDUIOb0usCJK0dT8/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6138a"
    },
    "name": "Скороходько Євгенія, 10 років ",
    "composition": "1)Н.Нижанківський. ''Івась грає на чельо'', 2)Ю.Щуровський. ''Токата'' сі мінор",
    "videoUrl": " https://drive.google.com/file/d/1Eif0Z_MiAQVpzbczVSjjbvh1gUxe_E3X/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6138b"
    },
    "name": "Солоненко Анна, 10 років ",
    "composition": "В.Косенко. ''Петрушка''",
    "videoUrl": " https://drive.google.com/file/d/1tCxp4UbZFZeFMrw6DYNi9VYHYSvYwNQI/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6138c"
    },
    "name": "Солоненко Анна, 10 років",
    "composition": " Ф. Бургмюллер. ''Балада''",
    "videoUrl": " https://drive.google.com/file/d/1EOH6zhwow4aQZfJes28LxiIBsh5HbfGu/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6138d"
    },
    "name": "Сорока Марія, 13 років",
    "composition": "1)Д.Циполі. Прелюдія та фуга ре мінор, 2)К.Гурліт. ''Шторм''",
    "videoUrl": " https://drive.google.com/file/d/1tfp_gBRZ1flj-LGqde6EdxQmKTlep0jP/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6138e"
    },
    "name": "Стецюк Олександра, 12 років ",
    "composition": "1)К.Дебюссі. ''Doctor Gradus ad Parnasum'', 2)Ф.Шопен. ''Вальс'' №9",
    "videoUrl": " https://drive.google.com/file/d/1zxJWyCms7kZhspNBAlzacUnALW8EJAM7/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6138f"
    },
    "name": "Сторожук Станіслав, 12 років",
    "composition": "1)Е.Гріг. ''Поетична картинка'' №1, 2)А.Кос-Анатольський. ''Полонина''",
    "videoUrl": " https://drive.google.com/file/d/1rtK0vUrAoIlGbUJ5HaUGbQPl1zVmTKKJ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61390"
    },
    "name": "Ткаченко Майя, 12 років",
    "composition": "1)В. А. Моцарт. Соната 16 К 545,Іч.; 2)І.Шамо.'' Веснянка''",
    "videoUrl": " https://drive.google.com/file/d/1m6ZsVarNPrcfymO3BkumdKxLJyBTxx5-/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61391"
    },
    "name": "Унгурян Олександра, 12 років ",
    "composition": "1) О.Грибоєдов. Вальс,          2)М.Сільванський. ''Стрімкий потік''",
    "videoUrl": " https://drive.google.com/file/d/1v2LRVDhFJ2zXN_5wVxAch7X8l0WQ8rOg/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61392"
    },
    "name": "Федорченко Євгенія, 10 років",
    "composition": " Л.Бетховен. ''Багатель'', тв.119",
    "videoUrl": " https://drive.google.com/file/d/1ZPHGQDAyftoAW0aKOT2snfa8MjgalcZQ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61393"
    },
    "name": "Федорченко Євгенія, 10 років",
    "composition": "О.Білаш.''Скерцо''",
    "videoUrl": " https://drive.google.com/file/d/1h1isGwveW1uiW3U2xeO2WWuFxvSSvQ-L/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61394"
    },
    "name": "Федотова Катерина, 12 років",
    "composition": " 1) С. Борткевич.''Етюд'' фа дієз мінор, 2) Ф.Шопен. ''Ноктюрн''до дієз мінор",
    "videoUrl": " https://drive.google.com/file/d/1eQBXy6khLci4fJNG8BaCM1ZFLkKj0NRw/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61395"
    },
    "name": "Федчук Аліна, 11 років",
    "composition": "1)А. Діабеллі. Сонатина №1, ІІІ.ч; 2)Дж. Ласт.'' Самотній пастух''",
    "videoUrl": " https://drive.google.com/file/d/1jrFbvdgG2NlU-b416-uR0birDrW-PnIH/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61396"
    },
    "name": "Федюк Володимир, 12 років",
    "composition": "1) К.М.Вебер.Сонатина до мажор; 2)О.Гончарук. ''Зелений'' із збірки ''Веселка''",
    "videoUrl": " https://drive.google.com/file/d/1H_Iw89xjf1o27PtP_neQI78ByP65yEvY/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61397"
    },
    "name": "Хоу Жуй, 12 років",
    "composition": "1)П.І.Чайковський. ''Жовтень'', 2)Е.Веврик. ''Гандзя''",
    "videoUrl": " https://drive.google.com/file/d/1XZwWXt6hQASuYftSNr5sTPErstFUV58R/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61398"
    },
    "name": "Чиж Ніна, 10 років ",
    "composition": "1)Й.Гайдн Соната №4, Іч; 2)Л.Дьяконенко. ''Пробачення у мами''",
    "videoUrl": " https://drive.google.com/file/d/1aIUr0h-N5290B6KaImXkJHmSDik_Uawe/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b61399"
    },
    "name": "Чідера Самуель Умех, 10 років",
    "composition": "1)  П.Чайковський. ''Старовинна французька пісенька''. 2) Д.Кабалевський.''Клоуни''",
    "videoUrl": " https://drive.google.com/file/d/1pLYAmRBXwzIn1x3XHhvLre_ANZJT2p8w/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6139a"
    },
    "name": "Шаталова Ілона, 10 років",
    "composition": "1)Ф. Гіллер. ''Маленьке рондо''; 2)В. Косенко. ''Вальс'' сі мінор",
    "videoUrl": " https://drive.google.com/file/d/1Ug56cbY1CUBhO1-tZfucRAuAHbIFKz9c/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6139b"
    },
    "name": "Шевченко Маргарита, 10 років ",
    "composition": "1)С.Баландін. Варіації,          2)Т.Браун. ''Танець вітру''",
    "videoUrl": " https://drive.google.com/file/d/1pkBBqfS-pmFxb5nNdAch9WXUpGqsUxa8/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6139c"
    },
    "name": "Шепетько Олександр, 11 років ",
    "composition": "1) Ф.Шопен. Мазурка,тв.67 № 4, 2)Е.Гріг. ''Танець із Йольстера''",
    "videoUrl": " https://drive.google.com/file/d/1VbhVjWrUitTo--83I5FWNydQrPC3YGyR/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985400683dda47f8b6139d"
    },
    "name": "Шумська Надія, 12 років",
    "composition": "1)С.Борткевич.''Темна кімната'', 2)В.Неугасімов.Скерцо",
    "videoUrl": " https://drive.google.com/file/d/1k66-Wry63S8x7t48GWUjY0e6O1xqeUot/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b6139e"
    },
    "name": "Арутюнян Ліда, 14 років",
    "composition": " 1)Й.Гайдн. Соната №20, Іч.; 2)Л.Шукайло.''Ємеля''",
    "videoUrl": " https://drive.google.com/file/d/1Bj568cnRdDZMKrMYfLT8kCbHm4yfXb2k/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b6139f"
    },
    "name": "Базилюк Наталія, 16 років",
    "composition": " 1)Я.Сібеліус. Прелюдія ля мінор,2)І.Беркович. Прелюдія фа дієз мінор",
    "videoUrl": " https://drive.google.com/file/d/1GaWeZbKc6SiIudiYQVBgFxaiOO9SEskA/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a0"
    },
    "name": "Білогуб Антон, 13 років ",
    "composition": "Л.Бетховен. Легка соната фа мінор, І ч.",
    "videoUrl": " https://drive.google.com/file/d/1fHUmtMWOjGN9p5xaSrcIOvQEu-koTGaT/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a1"
    },
    "name": "Білогуб Антон, 13 років",
    "composition": " О.Строк. ''Місячна рапсодія''",
    "videoUrl": " https://drive.google.com/file/d/1fqnNOFvNnVUcI1LUZ-TqgFzCl5XFE_si/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a2"
    },
    "name": "Бірук Таміла, 14 років",
    "composition": "1)М.Клементі.Сонатина, тв.26№3, 2)Я.Сібеліус. ''Ялина''",
    "videoUrl": " https://drive.google.com/file/d/14_B26LPyzQjk_aBZxGFWIq8Rz6KRCBnX/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a3"
    },
    "name": "Боровікова Єлизавета, 15 років",
    "composition": " 1)М.Бобер. ''Діамантова рапсодія'', 2)Ф.Сай. ''Чорна земля''",
    "videoUrl": " https://drive.google.com/file/d/1pO1FGqB-K6tth8pPRMBCal_rsceSMx20/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a4"
    },
    "name": "Бурухіна Катерина, 13 років",
    "composition": "1) Й.Гайдн. Соната мі мінор, Іч., 2) С.Нікітін.''Наспів''",
    "videoUrl": " https://drive.google.com/file/d/1rpLH63SzNTHeMyXHk7rCheswScKu9_cH/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a5"
    },
    "name": "Вашуріна В., 13 років ",
    "composition": "1) В.Косенко. ''Поема-Легенда'', 2) О.Саратський.''Коломийка''",
    "videoUrl": " https://drive.google.com/file/d/1y9kusgtqXgIgfFc16l_5qvgF_Jy62vX7/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a6"
    },
    "name": "Вишневська Анна, 13 років ",
    "composition": "Ж. Бізе.''Дзига''",
    "videoUrl": " https://drive.google.com/file/d/1YN-2yp1ocRVE1RdXq2L7sj9q_A8yv5PO/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a7"
    },
    "name": "Вишневська Анна, 13 років",
    "composition": "К. Лавалле. ''Метелик''",
    "videoUrl": " https://drive.google.com/file/d/161tFqTFJoja2OVDvHKTtIWPjNQ-2Lfx1/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a8"
    },
    "name": "Герасимчук Мілєна, 15 років ",
    "composition": "М.Таравердієв. ''Спогад''",
    "videoUrl": " https://drive.google.com/file/d/1Ao0wOx50UcKLaX8gpE3W9t65DC6KphrM/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613a9"
    },
    "name": "Герасимчук Мілєна, 15 років",
    "composition": " О.Білаш.''Танець ляльок''",
    "videoUrl": " https://drive.google.com/file/d/1xnbfjBmzclN4-tl6t9EGDm3yjLGjwpR5/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613aa"
    },
    "name": "Гордієнко Єлизавета, 19 років",
    "composition": "1)Й.С.Бах.Прелюдія і фуга ре мінор, ДТК-І, 2)С.Борткевич. Прелюдія до дієз мінор",
    "videoUrl": " https://drive.google.com/file/d/1oxBe6N3altFp3UktF5FdGYFrdXyHDHWf/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ab"
    },
    "name": "Грещак Марія, 14 років",
    "composition": "1)К.Черні. Етюд ля мажор; 2)Ю.Щуровський.''Елегічний прелюд''",
    "videoUrl": " https://drive.google.com/file/d/1IwuLrdPakxH1f6ZPfmw7d7vGchKjoU6m/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ac"
    },
    "name": "Дейнега Каріна, 14 років",
    "composition": "1) Л.Бетховен. Соната №14, І ч.; 2) С.Жданов. ''Прелюд''",
    "videoUrl": " https://drive.google.com/file/d/1c5iWC9b5J3Tw3OWTDKSwM95CFTFBly4t/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ad"
    },
    "name": "Дячук Зоряна, 13 років ",
    "composition": "1)Ю.Щуровський. ''Ранок'', 2)Н.Нижанківський. ''Коломийка''",
    "videoUrl": " https://drive.google.com/file/d/1SsVrIFRfitLvzM37-UWnfGNcsj07Ou_2/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ae"
    },
    "name": "Іщук Катерина, 15 років",
    "composition": " К.Черні. Етюд №1,тв.740",
    "videoUrl": " https://drive.google.com/file/d/1nscqS5e1pUwtdIOSOIeXAVHRGjFu_3Mn/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613af"
    },
    "name": "Іщук Катерина, 15 років",
    "composition": "Ф.Шопен.''Ларго''",
    "videoUrl": " https://drive.google.com/file/d/1EoKeSr7BIeLw0KsjCtp1DEDJ_8Xggxnq/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b0"
    },
    "name": "Іваночко Антоніна, 13 років.",
    "composition": " 1)Й.С.Бах. Прелюдія і фуга до дієз мінор ДТК-І, 2) К.Черні. Етюд №6 тв.740",
    "videoUrl": " https://drive.google.com/file/d/1uTqORJIxI65uKq4-2RqOXnVuXjoQPKkS/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b1"
    },
    "name": "Кареліна Крістіна, 13 років",
    "composition": "Й.С. Бах.Прелюдія і фуга ре мінор, ДТК-ІІ",
    "videoUrl": " https://drive.google.com/file/d/1FmhW2Ol9tl-fV7ROatz3mEnb1C0VwAbx/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b2"
    },
    "name": "Кареліна Крістіна, 13 років",
    "composition": " В.А. Моцарт. Соната №8, Іч.",
    "videoUrl": " https://drive.google.com/file/d/1jFt0zknGa8vvXxDRKQo5x1Ydzcr-IxHR/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b3"
    },
    "name": "Каськів Андрій, 14 років ",
    "composition": "А.Лешгорн. Етюд фа дієз мінор",
    "videoUrl": " https://drive.google.com/file/d/14uKZUG7l1REwDkXkvR6fYBjQiTPZC3ko/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b4"
    },
    "name": "Каськів Андрій, 14 років",
    "composition": " К.Дебюссі. ''Місячне сяйво''",
    "videoUrl": " https://drive.google.com/file/d/1SPNLI8VvFhKzpRwN9-iBRuTddPfJuUe-/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b5"
    },
    "name": "Кирилова Олександра, 13 років ",
    "composition": "1) Т.Браун. ''Шторм, що наближається'', 2) П.Захаров. ''Рондо-галоп''",
    "videoUrl": " https://drive.google.com/file/d/1WHj--haYnE7pWtfHBoypXnhm7i0insvG/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b6"
    },
    "name": "Кондратюк Аліна, 14 років",
    "composition": "1) О.Дюбюк. Варіації, 2) О.Білаш.''Роздум''",
    "videoUrl": " https://drive.google.com/file/d/1RwfSQtTfwWpLDzYyGfmFyOKdy_SrK7SZ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b7"
    },
    "name": "Косенко Аліса, 13 років",
    "composition": "1) А.Караманов. ''Зруйнований храм'', 2)С.Рахманінов. Прелюдія №7, тв.23",
    "videoUrl": " https://drive.google.com/file/d/1-6kYrtQuHZNk5ChAaWLv7IRZzk22Wddh/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b8"
    },
    "name": "Кочубей Ярослав, 14 років",
    "composition": "Обр. Є.Веврика.''Молдавські наспіви''",
    "videoUrl": " https://drive.google.com/file/d/19KjKHfI-uij6j3mNCYZ26LLZMoBbYk9r/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613b9"
    },
    "name": "Кочубей Ярослав, 14 років ",
    "composition": "Ф.Кулау. Сонатина №55",
    "videoUrl": " https://drive.google.com/file/d/1R7HwXpLbO1tiz3KzMg35t4N3Bmx7ABOL/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ba"
    },
    "name": "Куліковська Катерина, 14 років",
    "composition": "1) Й.С.Бах. Прелюдія і фуга фа дієз мажор, ДТК-І, 2) С.Борткевич. Етюд №9, тв.15",
    "videoUrl": " https://drive.google.com/file/d/1zQjsqGpWqWYkejPYN_TG-E0mMA8cSj-r/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613bb"
    },
    "name": "Макаревич Наталія, 15 років ",
    "composition": "1)Й.С.Бах. Прелюдія і фуга ре мінор, ДТК-І, 2)О.Бордюгова. ''Український романс''",
    "videoUrl": " https://drive.google.com/file/d/1irVBVS0WDufWZC2YEB57uUMLWbw8BLnR/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613bc"
    },
    "name": "Малярчук Єлізавета, 13 років ",
    "composition": "1)С.Борткевич. Етюд №9, тв.15, 2)Ф.Шопен.''Гулянка''",
    "videoUrl": " https://drive.google.com/file/d/1om0hfVgra-VSx6YXhJbpZwLRbe0a8BE-/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613bd"
    },
    "name": "Опанасюк Тарас, 13 років",
    "composition": "1) П.Захаров. ''Токата-прелюдія'', 2) Е.Гріг. ''Ноктюрн''",
    "videoUrl": " https://drive.google.com/file/d/1gghwyH2Ax-AeVuelbSWsS0oIoAxS_uJD/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613be"
    },
    "name": "Ослам  Єлизавета, 14 років",
    "composition": "1) П.Чайковський.''Лютий'' із циклу''Пори року'',     2) Н.Лагодюг. ''Танго мрій''",
    "videoUrl": " https://drive.google.com/file/d/1mq4-ZBYZmlnGPzJY1jR_QVr0Gz75aMlX/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613bf"
    },
    "name": "Панімаш Ірина, 15 років",
    "composition": "1) Й.Гайдн.Соната до мажор (№50), І ч.; 2) С.Рахманінов.''Музичний момент'', тв.16 №4",
    "videoUrl": " https://drive.google.com/file/d/1h_KQ_WpvmjZFsXE4XT_Mdf23sk4K9GTs/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c0"
    },
    "name": "Петрусь Наталія, 13 років",
    "composition": "1)Ф.Ліст.''Романс'',     2)Е.Гіллок.''Вальс-етюд''",
    "videoUrl": " https://drive.google.com/file/d/1O15_CujwttaF1BxXgW844w6ABUQkujfb/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c1"
    },
    "name": "Прищепа Анна, 14 років",
    "composition": "1) М.Шмітц. Джазова інвенція №13,  2) О.Девіс.''Щасливий день''",
    "videoUrl": " https://drive.google.com/file/d/1JKMIlun3RehERqKaSHpl6SJ6eyuuq3aW/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c2"
    },
    "name": "Прокопчук Олександра, 17 років",
    "composition": " В.Верменич. ''Чорнобривці''",
    "videoUrl": " https://drive.google.com/file/d/1FNL7e6qh8SOKlUxMoRtA7rSY8NhanlX-/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c3"
    },
    "name": "Прокопчук Олександра, 17 років",
    "composition": " Ф.Шпиндлер. Сонатина,ІІІ ч.",
    "videoUrl": " https://drive.google.com/file/d/1KGMCcN6_BWPdiwzrRIuA3NdxUeJbwI1j/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c4"
    },
    "name": "Пучко Софія, 13років ",
    "composition": "1)М. Дворжак. Етюд 2 (2-й зошит), 2)В. Верменич. ''Чорнобривці''",
    "videoUrl": " https://drive.google.com/file/d/14WfsFv4An2FbV_uFjhqREI87-IfzQUb8/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c5"
    },
    "name": "Радковська Аліна, 13 років ",
    "composition": "Е. Гріг. Етюд пам'яті Ф.Шопена",
    "videoUrl": " https://drive.google.com/file/d/1_aBN8JgrmFmVfuVYW4s0leNNYxfP59So/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c6"
    },
    "name": "Радковська Аліна, 13 років",
    "composition": " Ф.Ліст. ''Сумний степ''",
    "videoUrl": " https://drive.google.com/file/d/1n2mSaPNwrVjlcPAohViYro24WziktB0j/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c7"
    },
    "name": "Рибкіна Олександра, 15 років",
    "composition": "1) М. Терещук. ''Фуга Lockdown''; 2)М.Бобер.''Опівнічна рапсодія''",
    "videoUrl": " https://drive.google.com/file/d/1sPVEB2VIt_oDZM0pmBUQ5jUoUBNivTwe/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c8"
    },
    "name": "Руссу Ганна, 14 років",
    "composition": "1)Г.Волленгаупт. ''Характерна п'єса у формі етюда'', 2)Ю.Щуровський. ''Елегія''",
    "videoUrl": " https://drive.google.com/file/d/1aEeFiUX_AvRcRMG-4hBA3i8c45EsZH9m/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613c9"
    },
    "name": "Рущинська Ксенія, 14 років",
    "composition": "Е.Гріг. ''Мелодія''",
    "videoUrl": " https://drive.google.com/file/d/1072JNwvEm6CduA_GePsABu5_Yk6M02zH/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ca"
    },
    "name": "Рущинська Ксенія, 14 років ",
    "composition": "Й.С. Бах.''Маленька прелюдія'' до мінор",
    "videoUrl": " https://drive.google.com/file/d/1NDk_jKO5SHbnsaXATA1-YwgKe4bAmIdn/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613cb"
    },
    "name": "Свинцицька Емілія, 14 років",
    "composition": "1)В.Квасневський.''Думка''; 2)Д.Крамер. ''Танцюючий скрипаль''",
    "videoUrl": " https://drive.google.com/file/d/1algz_oukRxT2kPAFyXoX-QjIA34pICcm/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613cc"
    },
    "name": "Свиридюк Денис, 16 років",
    "composition": "1)Й.С.Бах. Триголосна інвенція №12, 2)Г.Галинін. ''Арія''",
    "videoUrl": " https://drive.google.com/file/d/146GFgHaXL3xHVFZw-hrHrxk4977lrNgh/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613cd"
    },
    "name": "Селіванова Анна, 14 років",
    "composition": "1)Ю.Щуровський. ''Елегічний прелюд'' сі мінор, 2)М.Дворжак.''Джазовий етюд'' №6 (2 зошит)",
    "videoUrl": " https://drive.google.com/file/d/1JucNtO1D93kqL8woJbk_BJiDjdgGxsQ6/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613ce"
    },
    "name": "Семенов Іван, 15 років ",
    "composition": "Е.Дога. ''Сонет''",
    "videoUrl": " https://drive.google.com/file/d/1L0U_HouKRP4y3gPZbVLkzumyYD2ezE2D/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613cf"
    },
    "name": "Семенов Іван, 15 років ",
    "composition": "І.Мошeлeс. Eтюд №8,тв.70",
    "videoUrl": " https://drive.google.com/file/d/1_fwY3rkpcIlWjc1Ry_Ytihu-owWp2mgk/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d0"
    },
    "name": "Симоненко Таміла, 13 років ",
    "composition": "1) Л.Бетховен. Соната №19 тв.49, І частина, 2)П.Чайковський .''Підсніжник'' з циклу ''Пори року''",
    "videoUrl": " https://drive.google.com/file/d/1PmEjgOV2YYZiRIUBpTDIHjur-lzR_flv/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d1"
    },
    "name": "Снігур Анна, 13 років",
    "composition": "1)БХаваші. ''Шторм'', 2)Ф.Сай. Варіації",
    "videoUrl": " https://drive.google.com/file/d/1hm_xDHOZTzUCS4UZIso7MHZ3ibkvAIbb/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d2"
    },
    "name": "Тернова Ксенія, 14 років ",
    "composition": "1) І.Беркович. Прелюдія №10, 2)Е.Гріг. ''Похід гномів''",
    "videoUrl": " https://drive.google.com/file/d/1jJoY8kdzeUKl5zU5gLe5du8lhGalBIYB/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d3"
    },
    "name": "Ткачук Вікторія,  14 років",
    "composition": "1) Ф. Мендельсон.  ''Пісня без слів'', 2) В. Гіллок  ''Вальс-етюд''",
    "videoUrl": " https://drive.google.com/file/d/1Ki5C-tanjxy2My7kZ6kWgYEWMAOEYFc9/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d4"
    },
    "name": "Трачук Олександр, 13 років",
    "composition": "П. Захаров.  ''Рондо-галоп''",
    "videoUrl": " https://drive.google.com/file/d/18DlN1b4K1sXrdvvb3A8pHmJFvXwbzYrd/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d5"
    },
    "name": "Трачук Олександр, 13 років",
    "composition": " Д.Фільд. ''Ноктюрн'' №5",
    "videoUrl": " https://drive.google.com/file/d/1L3JxoWPr6jxM5Q3pxO0BBX2U4UiFnE_H/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d6"
    },
    "name": "Федонюк Олександр, 13 років",
    "composition": "1)Й.Гайдн. Соната №23, фа мажор, Іч.; 2)Й.С.Бах. Прелюдія і фуга №23, ДТК-І",
    "videoUrl": " https://drive.google.com/file/d/1i2fuOPVMqQfINCT2ZJbTJXccz5Afb_h5/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d7"
    },
    "name": "Хвостова Олександра, 13 років",
    "composition": "1)Ф.Ліст.Юнацький етюд №2, 2)О.Козаренко-А.Кос-Анатольський. ''Ой ти, дівчино, з горіха зерня''",
    "videoUrl": " https://drive.google.com/file/d/1GnsAZsugdqBLL6hKCGlleA8ZK_qT18Fj/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d8"
    },
    "name": "Храменкова Анастасія, 13 років ",
    "composition": "1)В.Коровіцин.''Русалонька'', 2)М.Скорик.''Жартівлива п'єса''",
    "videoUrl": " https://drive.google.com/file/d/1C0uSpeSybfdaIXYlmYwMrZ5JUsdb7Rb9/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613d9"
    },
    "name": "Хелман Віолета, 13 років",
    "composition": "1)УГіллок.''Пурхаючи в хмарках'', 2)В.Ходош.''Червона шапочка''",
    "videoUrl": " https://drive.google.com/file/d/1zuyEGt3cvZ3sVjKnA3CJTZVL2vEVgXWy/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613da"
    },
    "name": "Шибанова Варвара, 13 років ",
    "composition": "Ф.Шопен. Ноктюрн №2, тв.9",
    "videoUrl": " https://drive.google.com/file/d/1r1jURFKC555wKMR7ClSymtTG_DWwvgvZ/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985428683dda47f8b613db"
    },
    "name": "Шибанова Варвара, 13 років",
    "composition": " С.Борткевич.Етюд №7, тв.29",
    "videoUrl": " https://drive.google.com/file/d/1KTUYP3gWn4PTTGG1Y__FKrI1s5GkXBoO/preview ",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613dc"
    },
    "name": "Антонюк Марія, 21 рік",
    "composition": "1) М.Метнер. ''Дві казки'', 2)І.Шамо. ''Токата''",
    "videoUrl": "https://drive.google.com/file/d/1AFVEG3M3gU1yIaIc5YncRhUIAlwf8AVj/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613dd"
    },
    "name": "Бобрішова Інеса, 16 років",
    "composition": " 1) Й.Гайдн. Соната ре мажор, І ч.;   2) С.Прокоф'єв. ''Сарказм'',тв.17 №1",
    "videoUrl": "https://drive.google.com/file/d/19JHuESQVHM6bpupPsvdUn4elQRbgO23e/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613de"
    },
    "name": "Бянова Дарина, 16 років",
    "composition": "1)Ф.Шопен. Ноктюрн, тв.27№2,      2)Д.Задор. Етюд до мінор",
    "videoUrl": "https://drive.google.com/file/d/1-CBceHEbKge32X6ND1F_zFVQ-2Rb44Yw/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613df"
    },
    "name": "Вознюк Ангеліна, 17 років",
    "composition": "1)Я.Степовий. Прелюдія,       2)Я.Сібеліус. Етюд",
    "videoUrl": "https://drive.google.com/file/d/1y7QHtGukJoocS0B_diwzJu-VQY8WB9op/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e0"
    },
    "name": "Гук Софія, 16 років",
    "composition": " С.Рахманінов. ''Гумореска''",
    "videoUrl": "https://drive.google.com/file/d/1kPQT_uTxaIlalqx_aapSpid2SZgP7jq6/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e1"
    },
    "name": "Гук Софія, 16 років",
    "composition": " М. Лисенко. ''Журба''",
    "videoUrl": "https://drive.google.com/file/d/1NuhdlOqXePr8exdMp0gXTAl6FfkgkDuN/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e2"
    },
    "name": "Гулова Ангеліна, 18 років ",
    "composition": "1)Ф. Шопен. Ноктюрн тв.48 №1,     2)П. Санкан. Токата",
    "videoUrl": "https://drive.google.com/file/d/1znh9RU-pCp3rHxqyVuP44D4CkYm59GjN/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e3"
    },
    "name": "Дановська Ольга, 17 років ",
    "composition": " В.Барвінський Прелюдія №4 ''Хорал''",
    "videoUrl": "https://drive.google.com/file/d/1YLd2FP5IxDneIcOMWgWTgCfubBOYJQPr/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e4"
    },
    "name": "Дановська Ольга, 17 років",
    "composition": "К.Лядов Прелюдія, тв.39 №4",
    "videoUrl": "https://drive.google.com/file/d/1wogVZv8WVyQtLFsopwaRBx1RQOxlzCFI/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e5"
    },
    "name": "Дудник Дар'я, 17 років",
    "composition": " В.Барвінський.''Листок з альбома''",
    "videoUrl": "https://drive.google.com/file/d/1l_HE3r0O5usjOHcNuMpNDYg_g6d2S35t/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e6"
    },
    "name": "Дудник Дар'я, 17 років ",
    "composition": "К.Дебюссі. '' Романтичний вальс''",
    "videoUrl": "https://drive.google.com/file/d/1qLgq9AfD6YXCyPQyFejlyZ8BONuSoN_4/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e7"
    },
    "name": "Крюкова Марія, 15 років ",
    "composition": "1)С.Борткевич. ''Примхи моря'', 2)Ф.Шопен.Етюд тв.10 №4",
    "videoUrl": "https://drive.google.com/file/d/1-cbo3BZ1EPNYm6NS1eCMm_2HTzHJ7Bek/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e8"
    },
    "name": "Куліш Поліна, 15 років ",
    "composition": "1)Е.Гріг.''Колискова'', 2)І.Падеревський. ''Скерцино''",
    "videoUrl": "https://drive.google.com/file/d/1NamVVFfAdRfaFuA1uKjlt9QIWgMiSBy6/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613e9"
    },
    "name": "Музиченко Марія, 19 років ",
    "composition": "1)Й.Гайдн. Соната №31, 1ч.; 2)Ф.Шопен.Етюд,тв.10 №5",
    "videoUrl": "https://drive.google.com/file/d/1O-ahfYJNbFf5fSOwSSpffIWWpniBubK8/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613ea"
    },
    "name": "Олійник Олександр, 18 років",
    "composition": "1)Ж.Бізе-В.Горовіц. Варіації на тему з опери ''Кармен'', 2)Л.Ревуцький. Прелюдія фа дієз мінор",
    "videoUrl": "https://drive.google.com/file/d/13JylPdDWgVz6QSHRGVJt7FhdaRelCHSD/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613eb"
    },
    "name": "Смик Анна, 17 років ",
    "composition": "С.Рахманінов. Етюд-картина тв.33 №5, соль мінор",
    "videoUrl": "https://drive.google.com/file/d/1k7okBuyMsFaRt4GwwXUSgYCh5DdY6MN9/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613ec"
    },
    "name": "Смик Анна, 17 років ",
    "composition": "С.Рахманінов. Прелюдія, тв. 32 №12, соль дієз мінор",
    "videoUrl": "https://drive.google.com/file/d/1LYHHVKuUIisadE2fmzwYzmwsS-UwVxVR/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613ed"
    },
    "name": "Тіхонок Єгор, 17 років",
    "composition": "1)С.Борткевич.''Скелі ущелини Уч-Кош'' з сюїти ''Кримські нариси''.тв.8, 2)Ф.Ліст.Трансцендентний етюд №10, фа мінор",
    "videoUrl": "https://drive.google.com/file/d/1xn3TfNH6GFBBQo1vZZNnRRVqbtjGGug2/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613ee"
    },
    "name": "Фащевський Тарас",
    "composition": "С.Рахманінов. ''Етюд-картина'', тв.33 (5)",
    "videoUrl": "https://drive.google.com/file/d/1eqTPXl_RhZQOdVr-lhUQmlOM8coC6FoK/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613ef"
    },
    "name": "Фащевський Тарас",
    "composition": "Л.Ревуцький. Прелюдія, тв.4 (2)",
    "videoUrl": "https://drive.google.com/file/d/1-_boMnoYnk74xDzQy6QlCqVxIP3j4sHx/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f0"
    },
    "name": "Фесик Назарій, 16 років",
    "composition": "1)С.Борткевич.''Lyrica Nova'',тв.59 №3,4; 2)Ф.Ліст.Трансцендентний етюд №8 ''Дике полювання''",
    "videoUrl": "https://drive.google.com/file/d/1c0sj4AMuDxHApmGT9WShmjJHbEHRzJdC/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f1"
    },
    "name": "Юзлова Любов, 17 років",
    "composition": " 1) К.Дебюссі. ''Арабеска''№1, 2) Й.Брамс.''Інтермеццо'', тв.117 №2",
    "videoUrl": "https://drive.google.com/file/d/1LADInWpm-jhc1FbRudgqwCMGtzXQDBMS/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f2"
    },
    "name": "Заєць Марина",
    "composition": "М. Скорик.''Вальс'' з Партити №5",
    "videoUrl": "https://drive.google.com/file/d/11mlZznZboxhzxEBTJ4gUmEtE0JYgQgdh/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f3"
    },
    "name": "Заєць Марина",
    "composition": "П.Чайковський. ''Думка'', тв.59",
    "videoUrl": "https://drive.google.com/file/d/1PaUp-aqQdCqBt35662yNwJkhaNOAXN_h/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f4"
    },
    "name": "Логвиновський Євгеній",
    "composition": "Д.Притскер. ''Блюз Пікассо''",
    "videoUrl": "https://drive.google.com/file/d/1e2_4isQzlucLR7kBZX-CHxgqYrBxJRZw/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f5"
    },
    "name": "Логвиновський Євгеній",
    "composition": "С.Прокоф'єв. Соната №3, тв.28",
    "videoUrl": "https://drive.google.com/file/d/1DLhT9YwR5I9cZxzdNoe22FwS8jpI4YVs/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f6"
    },
    "name": "Микитюк Анастасія",
    "composition": "М.Раков. ''Концертний етюд''",
    "videoUrl": "https://drive.google.com/file/d/1C8a6TPRM2caQfTOA6zGHvuIjGSoL7C1b/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f7"
    },
    "name": "Микитюк Анастасія",
    "composition": " Й.С.Бах. Прелюдія і фуга до мінор, ДТК -ІІ",
    "videoUrl": "https://drive.google.com/file/d/1wrqdb_ke2Kch_CfBcmNRH2M580PtZQA1/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f8"
    },
    "name": "Назаренко Ксенія",
    "composition": "І.Волкова. ''Настрої''",
    "videoUrl": "https://drive.google.com/file/d/1OA8rvN6wwdpOVy1DVDt1zq-4pkeiSr3x/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613f9"
    },
    "name": "Назаренко Ксенія",
    "composition": "Й.Бах. Алеманда",
    "videoUrl": "https://drive.google.com/file/d/10qtURWd3aascq2gwNHxM-FETyQHLB8tD/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613fa"
    },
    "name": "Серов Владислав",
    "composition": "1)Й.С. Бах. Прелюдія і фуга до мінор, ДТК-ІІ, 2)Ф.Шопен. Балада №1, тв.23",
    "videoUrl": "https://drive.google.com/file/d/1atn5yiEcXgjVnFKfM4QWAUS4z_UVTJ_q/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613fb"
    },
    "name": "Тарасов Владислав",
    "composition": "1)С.Рахманінов. ''Етюд-картина'', тв.39 №9, 2)Ф.Шопен. ''Балада'', тв.23 №1",
    "videoUrl": "https://drive.google.com/file/d/19NZ_tEy0O2nRXjCltd_vdWL3SMuBNaCM/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613fc"
    },
    "name": "Гребенюк Г.О.",
    "composition": "1)С.Прокофьев. Соната №2,І ч.;2)   Ф.Ліст.''Етюд за каприсами Паганіні''",
    "videoUrl": "https://drive.google.com/file/d/1ShUYIYP9ngoQZehmCbzP5F3bJAKFh3sN/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613fd"
    },
    "name": "Кондратюк М.О. ",
    "composition": "1)Р.Шуман. ''Романс'', тв.28, 2)В.Косенко. ''Куранта''",
    "videoUrl": "https://drive.google.com/file/d/1FOb41PsmqWO4nyODkOdoMT4SsPp4HX9x/preview",
    "group": "Номінація \"Фортепіано соло\""
},{
    "id": {
        "$oid": "60985441683dda47f8b613fe"
    },
    "name": "Опанасенко А.О. ",
    "composition": "1)С.Рахманінов. Прелюдія соль дієз мінор, 2)В.Філіпенко. Токата",
    "videoUrl": "https://drive.google.com/file/d/1VLXELuZcI6Qi2grlwaU-uEwlLv1eSEkX/preview",
    "group": "Номінація \"Фортепіано соло\""
}];

let concertmasters = [{
    "id": {
        "$oid": "6098c8f6683dda47f8b613ffaasd"
    },
    "name": "Шевельова Єлізавета, 20 років.",
    "composition": "1) П.Чайковський. Арія Ленського, 2) Г.Хазанова. \" Уздовж вулиці ходу я\"",
    "videoUrl": "https://www.youtube.com/embed/CWX0eRPTCYY",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b613ffaas"
    },
    "name": "Закалюжна О.Б",
    "composition": "Г.Венявський. Концертний полонез ре мажор",
    "videoUrl": "https://www.youtube.com/embed/s3clXLT34hY",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b613ffaas1"
    },
    "name": "Закалюжна О.Б",
    "composition": "Ж.Масне.\"Роздум\"",
    "videoUrl": "https://www.youtube.com/embed/gDyUCbaneBk",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b613ff"
    },
    "name": "Кобзар Ніколь, 14 років",
    "composition": "Ф.Крейслер.''Маленький Віденський марш''",
    "videoUrl": "https://drive.google.com/file/d/1kuSR0VmOMiqIj9YR0u3lvOzq4JG5aLY8/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61400"
    },
    "name": "Кобзар Ніколь, 14 років",
    "composition": "Е.Ельгар.''Салют кохання''",
    "videoUrl": "https://drive.google.com/file/d/11gI7Xlj_SLQql2Pi6ETAhSAZTKLMjkBn/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61401"
    },
    "name": "Сабо Нестор, 10 років ",
    "composition": "1)В.Кролл. ''Полька віслючка'', 2)В.Цибін(перекл.А.Царенко). ''Листок з альбома''",
    "videoUrl": "https://drive.google.com/file/d/14PR5evrUIRaS1VFUvu0s69HMH7xS3WiI/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61402"
    },
    "name": "Смірнова Євгенія, 9 років ",
    "composition": "Л.Бетховен. ''Бабак'',обр. А. Шувалова",
    "videoUrl": "https://drive.google.com/file/d/1ir2aRKco82NwzR2FQH6ApZVHQZYr0L7y/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61403"
    },
    "name": "Смірнова Євгенія, 9 років ",
    "composition": "О.Бец. ''Подільські викрутаси''",
    "videoUrl": "https://drive.google.com/file/d/1qJQ9AIWj48pJTMBWfo3h7z6JlKJH980n/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61404"
    },
    "name": "Старцев Бенжамін, 11 років ",
    "composition": "1) Ж.Массне. ''Роздум''; 2)Е.Рибкін. ''Формула 1''",
    "videoUrl": "https://drive.google.com/file/d/1L6bxDysN0y2GDSNnRXqGEFbHR7eS-ixs/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61405"
    },
    "name": "Власюк Назар, 18 років ",
    "composition": "1)С.Доноті. Арія''O del mio amato ben'',2)Е.Гріг,Г.Х. Андерсен ''Jeg elsker dig''",
    "videoUrl": "https://drive.google.com/file/d/12_MFPU39btJQKvSt2RYzjiU0HaYsa4Og/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61406"
    },
    "name": "Дячек Іоанна, 17років ",
    "composition": "1)В.А.Моцарт.Арія''Ridente la calma'', 2)Ф.Надененко, І.Франко.Романс ''Чого являєшся мені у сні''",
    "videoUrl": "https://drive.google.com/file/d/1EQbQKbWivCb-gOQkccICL5APQjgWle9w/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61407"
    },
    "name": "Кваша Яна, 16 років",
    "composition": "1)Й.Кванц. Соната ре мажор, І-ІІ ч.; 2)В.Попп. ''Русский вечер''",
    "videoUrl": "https://drive.google.com/file/d/1opL41mLH10Bnr1eMyzOExswFJoTZ_8cS/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61408"
    },
    "name": "Колодій Антон, 18 років",
    "composition": "1) П.Чайковський. Романс''Горними тихо летела душа небесами'', 2)С.Рахманінов. ''Елегія'',тв.3№1, обробка для віолончелі та ф-но",
    "videoUrl": "https://drive.google.com/file/d/1lQIzDOiZp-EdXly10SVm4diOj5WCSk3Z/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61409"
    },
    "name": "Конюшек Софія, 21 рік",
    "composition": "О.Тактакішвілі. Соната для флейти і фортепіано.",
    "videoUrl": "https://drive.google.com/file/d/1HXE-WblU0-HywgVzCunQniQUCUNXGlNN/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6140a"
    },
    "name": "Конюшек Софія, 21 рік ",
    "composition": "Ф.Комлев. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/14q78XKpdFg66VSWkAZq0VeRuKaTcJUpu/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6140b"
    },
    "name": "Пчелінцева Адріана, 15 років",
    "composition": "1)В.Моцарт. Арія Блондхен з опери''Викрадення із Сераля'', 2)Р.Глієр.''В порыве нежности сердечной''",
    "videoUrl": "https://drive.google.com/file/d/17mRVxV06v5Mv6_P3C183oMgON-R_u-qO/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6140c"
    },
    "name": "Фесик Назарій, 16 років ",
    "composition": "1)Дж.Пуччіні. Арія Тоски; 2)М.де Фалья.''Хота''",
    "videoUrl": "https://drive.google.com/file/d/1BJNsTp4WDxZbAdAnjMLP3hbD63T2eIwY/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6140d"
    },
    "name": "Ярошенко Валерія, 19 років",
    "composition": "1)К.Стеценко. ''Сотояла я і слухала весну''; 2)В.Власов. Скерцо для домри та фор",
    "videoUrl": "https://drive.google.com/file/d/1OuDlacDb3i94xNxkowk-jsNktxuQK71L/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6140e"
    },
    "name": "Козак Ірина",
    "composition": "Є.Бозза.''Дитячі мрії''",
    "videoUrl": "https://drive.google.com/file/d/1PsoyOIr17OCyN_GhRU_q7IpS4HWwHWUB/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6140f"
    },
    "name": "Козак Ірина",
    "composition": "'Ніч яка місячна'', обр. Ю.Островського ",
    "videoUrl": "https://drive.google.com/file/d/1TJKQFEm3a3wziYvI3QfihGxzV2U5QH2n/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61410"
    },
    "name": "Микитюк Анастасія ",
    "composition": "1)Н.Бакланов. ''Концертіно'',      2)З.Багіров. ''Романс''",
    "videoUrl": "https://drive.google.com/file/d/1j8_mvZEGTgYI0LFGWFoLbQAgCHpI5C0Z/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61411"
    },
    "name": "Сав'юк Власта",
    "composition": "1)В.А. Моцарт. Концерт для фагота з оркестром сі бемоль мажор, Іч.; 2)А.Тансман.Сонатина для фагота і фортепіано,ІІІч.",
    "videoUrl": "https://drive.google.com/file/d/130aZO1nxV4E8HX7hxWaNvVT4bfgkhx4M/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61412"
    },
    "name": "Сасюк Юлія",
    "composition": "1)Г.Форе. ''Пробудження'', 2) Б.Барток. ''Шість румунських танців''",
    "videoUrl": "https://drive.google.com/file/d/1ods3tvUDXZdo1yedIVXYcc9Mn77bjh25/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61413"
    },
    "name": "Іванова Т.В.",
    "composition": "Е.Северн. ''Польський танець''",
    "videoUrl": "https://drive.google.com/file/d/1xXtvOSAunv56RfAxgV1q7m4iKa09sWH1/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61414"
    },
    "name": "Іванова Т.В.",
    "composition": "І.Тамарин ''Старовинний гобелен''",
    "videoUrl": "https://drive.google.com/file/d/149vlM07Gd8S9Cz4tDZ2KyKkguJzyB1uB/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61415"
    },
    "name": "Гачик О.А.",
    "composition": "1)Р.Глієр.''Романс'', 2)О.Циганков.''Інтродукція та Чардаш''",
    "videoUrl": "https://drive.google.com/file/d/1Ngs85qpEODEv67a8-daJxZoH6Ko7SUWk/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61416"
    },
    "name": "Гриців О.М.",
    "composition": "1)Ф. Крейслер.''Маленький віденський марш'', 2)Л. Ревуцький. ''Інтермецо''",
    "videoUrl": "https://drive.google.com/file/d/1nXkybPZHPOWWUzBED_KKeGF3kO2Ecabj/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61417"
    },
    "name": "Кірчанова І.В. ",
    "composition": "1)М.Відмонте.''Par zilo un raibo pasaku'', 2)Губаренко В. Концерт для флейти з камерним оркестром,тв.10",
    "videoUrl": "https://drive.google.com/file/d/1zpMjCauUpbJdufWXfb5Ofm7P9sAYj-iP/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61418"
    },
    "name": "Кекух О.В.",
    "composition": "1)І.Вимер. ''Гуцульська рапсодія'', 2)Укр.нар. танець в обр.В.Солонського ''Вечорниці''",
    "videoUrl": "https://drive.google.com/file/d/1dfPx15WQKHfPVtMPWWAAw9sy9UYw5S1e/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61419"
    },
    "name": "Лобода Л. М., ",
    "composition": "1)Л.Бетховен, Т.Шевченко. ''Зоре моя вечірняя'', 2)Лемківська народна пісня ''В темну нічку убочи''",
    "videoUrl": "https://drive.google.com/file/d/10gZo53X6EhHwEMpXKwpB2tW2_irVo290/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6141a"
    },
    "name": "Любченко М.С. ",
    "composition": "Й.С.Бах. Концерт для скрипки з оркестром ля мінор",
    "videoUrl": "https://drive.google.com/file/d/1wfhuitXL2MwtYdrUHIkVdMxQZpht6jNl/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6141b"
    },
    "name": "Любченко М.С.",
    "composition": "Н.Стецюн.    ''Болеро''",
    "videoUrl": "https://drive.google.com/file/d/1bHWUriqKvSTnVnIm47mmLedSi0Nh-XQs/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6141c"
    },
    "name": "Михайлова М.В. ",
    "composition": "1)Й.Тамарин.''Старовинний гобелен'', 2)А.Солтан. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1EoES2mTrWCy9CQcqd9qu366Z1tz6IpRQ/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6141d"
    },
    "name": "Мялькіна Н.О.",
    "composition": "Дж.Вільямс. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1iM_EF0Vx9-w4DS6HR_ZHRJ-mqJwA-FGp/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6141e"
    },
    "name": "Мялькіна Н.О.",
    "composition": "С.Цинцадзе. ''Сачідао''",
    "videoUrl": "https://drive.google.com/file/d/159djSrzI1AvL5pkCl0vnYDsHQLTnd5lo/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6141f"
    },
    "name": "Нікітіна І.Р.",
    "composition": "Б.Лятошинський. ''Мелодія''",
    "videoUrl": "https://drive.google.com/file/d/1yQyO0Q65WvHnvY28xBl3shW-Htdu4239/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61420"
    },
    "name": "Нікітіна І.Р.",
    "composition": "Сл. А.М'ястківського, муз.В.Верменича ''Підкручу я чорнії вуса''",
    "videoUrl": "https://drive.google.com/file/d/1u_7UQDuOCDqJJj1q5lhEFPEoxd_PU3jY/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61421"
    },
    "name": "Саєнко Т.Ю. ",
    "composition": "Ж.Массне. ''Роздум''",
    "videoUrl": "https://drive.google.com/file/d/1JlAoY-AAJEyI-rIRDCu7UnywxvrWEBBw/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61422"
    },
    "name": "Саєнко Т.Ю., ",
    "composition": "Т.Чупак. ''Весняний рок-н-ролл''",
    "videoUrl": "https://drive.google.com/file/d/1T5-IUNUuQmUvFVWYlY6SAVej-TIqmbrq/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61423"
    },
    "name": "Савчук Т.І.  ",
    "composition": "1)Дж.Вільямс, аранж.А.Теплицької.''Колискова для ангела'', 2)В.Козлов,перекл. для домри Є.Жукова. ''П'єса у стилі фламенко''",
    "videoUrl": "https://drive.google.com/file/d/17Tgiuogivsh3xwjFXi5a1oRU-okkP960/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61424"
    },
    "name": "Смірнова І.Ю.",
    "composition": "А. Шумакова. ''Танго Евіти''",
    "videoUrl": "https://drive.google.com/file/d/11CkziRvYJvniW7cia7y9EkI85snLJw7x/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61425"
    },
    "name": "Смірнова І.Ю.",
    "composition": "В.Гомоляка. ''Іспанський танець''",
    "videoUrl": "https://drive.google.com/file/d/1iOUJN21BvDdzsL0oP0atvsEmoqgUdpYC/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61426"
    },
    "name": "Смолянінова С.М. ",
    "composition": "1)А.Дворжак. Концерт для скрипки ля мінор, І ч.; 2)М.Скорик. ''Карпатська рапсодія''",
    "videoUrl": "https://drive.google.com/file/d/1tlsrMkQp0UVq0ywtJ01LpHKPsmFOpHnO/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61427"
    },
    "name": "Старинська М.А. ",
    "composition": "1)Ю.Шинкаренко.Варіації; 2)Е.Боцца.''Арія''",
    "videoUrl": "https://drive.google.com/file/d/1LsWzV_Lt1z0gGXULSegouckY9RZroG7h/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61428"
    },
    "name": "Трепак М.І.",
    "composition": "1)Ж.Демерссман. Фантазія, 2)П.Ітурральде. ''Маленький чардаш''",
    "videoUrl": "https://drive.google.com/file/d/1TMSKHpEcmM3K7hiZzyY3g4K_8MtHbH9L/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b61429"
    },
    "name": "Єрьоміна О.Г. ",
    "composition": "1) М.Дремлюга. Поема-рапсодія, 2) С.Орфеєв.''Веснянка''",
    "videoUrl": "https://drive.google.com/file/d/1Y6OKUOoJb1ju3VzS4FCtO4guBLHD910P/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6142a"
    },
    "name": "Кадук Т.Ю.",
    "composition": " 1)К.М.Вебер.Концерт для кларнета №1,І ч.; 2) Я.Мединьш. Романс",
    "videoUrl": "https://drive.google.com/file/d/1kWBHYUYRmXpm5BCGW9bnt8y9rixgPQZ4/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6142b"
    },
    "name": "Новікова М.М.",
    "composition": "Обр. Д.Задора. ''Серед села дичка''",
    "videoUrl": "https://drive.google.com/file/d/10aWVlOe3F-ssQhTVqkFng8GJKGJEwU80/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6142c"
    },
    "name": "Новікова М.М. ",
    "composition": "П.І.Чайковський.''Забыть так скоро''",
    "videoUrl": "https://drive.google.com/file/d/1tw5MNU-5fuXQoSOHpWtaGvGjZxcfMAfm/preview",
    "group": "Номінація \"Концертмейстер\""
},{
    "id": {
        "$oid": "6098c8f6683dda47f8b6142d"
    },
    "name": "Сирота О.М.",
    "composition": "1)К.Кудрявцев. ''Один день з життя дятла'', 2)О.Бец.''Українське інтермецо''",
    "videoUrl": "https://drive.google.com/file/d/1SejB1id_PU7Xg-w5fzKUvJ0EoOnFsDMC/preview",
    "group": "Номінація \"Концертмейстер\""
}];

myCards = myCards.concat(concertmasters);

let ensemble = [{
    "id": {
        "$oid": "6098d647683dda47f8b61437"
    },
    "name": "Ф-ний дует (Журавель С., Артеменко С.)",
    "composition": "1)Ю.Щуровський. ''Іспанський танець'', 2)Обр.М.Попова. ''Єврейські мотиви''",
    "videoUrl": "https://drive.google.com/file/d/1KvcEE7qPS0raOCqd8saMEHo-y0UDIpCh/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61438"
    },
    "name": "Ф-ний дует  (Пилипчук Н., Кавун Є.)",
    "composition": "1) В.Алексеєв.'' На прогулянці'', 2)О.Петрова. ''Цирк''",
    "videoUrl": "https://drive.google.com/file/d/1nELotwqAz9C7d09G4NVBVvbRyKL958rs/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61439"
    },
    "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
    "composition": "А.Шнітке. ''Шинель''",
    "videoUrl": "https://drive.google.com/file/d/1M4pazNI_Tyv2sDMW9oB9Qem36I5DRZuR/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6143a"
    },
    "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
    "composition": "О. Науменко.''Час великих очікувань''",
    "videoUrl": "https://drive.google.com/file/d/1LBOe_wFlC_yzt_FfkRbC8-90cVu3stVO/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6143b"
    },
    "name": "Ф-ний дует  (Сікора Р. Черепущак М.). ",
    "composition": "1)О.Науменко. ''Коломийка'', 2)Е.Гріг-Г.Фіртич.''Танець Анітри''",
    "videoUrl": "https://drive.google.com/file/d/1ORTzw-plehQvAAOinOrdqnHtnU_oCZj5/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6143c"
    },
    "name": "Ф-ний дует ''Mycraft'' (Єрмоленко Д., Шибанова В.) ",
    "composition": "1)М.Скорик. ''Мелодія'',         2)О.Хромушин. ''Друкарська машинка''",
    "videoUrl": "https://drive.google.com/file/d/1Auvo44aBYTG3vKxsT2hQD0hmkg1Edla7/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6143d"
    },
    "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
    "composition": "О.Секрет.''Прогулянка Добермана''",
    "videoUrl": "https://drive.google.com/file/d/11QSAdkwn3iu54kR3hxnh3Hg0C_zpP-ZU/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6143e"
    },
    "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
    "composition": "П.Чайковський.'' Італійська пісенька''",
    "videoUrl": "https://drive.google.com/file/d/1ZT-3uCrzbGJtMc0oLwtgJqTorz9jDYes/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6143f"
    },
    "name": "Ф-ний дует (Вашуріна В., Єжонков А.).",
    "composition": "1) Г.Бєлов.''Урасіма і Чарівна Черепаха'', 2)О. Польовий. ''Подорож в Альпи''",
    "videoUrl": "https://drive.google.com/file/d/1jChvMBrDwyxKk3AJEECSBE7Y_kCLRh8s/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61440"
    },
    "name": "Ф-ний дует (Гембицька О., Кузло К.).",
    "composition": "1)К.Ховард. ''Чарльстон'', 2)Дж. Шірінг. ''Колискова''",
    "videoUrl": "https://drive.google.com/file/d/1tLNVlhurZUdHx44MchS4qm251eS39roQ/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61441"
    },
    "name": "Ф-ний дует (Дерябіна С. та Васильєва В.).",
    "composition": "1)А.Діабеллі. Соната ре мажор, 2)Л.Шукайло. ''Гумореска''",
    "videoUrl": "https://drive.google.com/file/d/1yJQBfg7c_BoQqXMmAYqNYQCnYtawZ9To/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61442"
    },
    "name": "Ф-ний дует (Кришталович М., Кришталович І.) ",
    "composition": "Дж.Гершвін. ''Clap you hand''",
    "videoUrl": "https://drive.google.com/file/d/1MAJeBVnftEdhcio47nDnUgcjGGTwK8Cj/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61443"
    },
    "name": "Ф-ний дует (Кришталович М., Кришталович І.)",
    "composition": "'Колядка'', обр. О.Закалюжної",
    "videoUrl": "https://drive.google.com/file/d/1pqxYZTvFyrrj6dTpT58UUPSOPHM-hZte/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61444"
    },
    "name": "Ф-ний дует (Ланський Є., Ланська О.)",
    "composition": "1)Е.Гріг. Арія із сюїти ''З часів Хольберга'', 2)В.Птушкін. ''Бренфордська відьма''",
    "videoUrl": "https://drive.google.com/file/d/18OUsCGQBs3IhlX6it-s3Txuo07M3Ns0H/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61445"
    },
    "name": "Ф-ний дует (Симоненко Т., Федина А.)",
    "composition": "1) Дж.Гершвін.''Коханий мій''; 2) П.Моріа. ''Манует''",
    "videoUrl": "https://drive.google.com/file/d/1hVekh8_5MOUJDgJtXI8i4GBdRQwCAekt/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61446"
    },
    "name": "Ф-ний дует (Скопець А., Мурзак Ю.). ",
    "composition": "Т.Остен.''Танець ляльок''",
    "videoUrl": "https://drive.google.com/file/d/1EFzyijuwAFNj8v-TlraiI_PkuHGqX94E/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61447"
    },
    "name": "Ф-ний дует (Скопець А. Мурзак Ю.) ",
    "composition": "Л. Жульєва.''Прогулянка з татом''",
    "videoUrl": "https://drive.google.com/file/d/1VZr2V-Hv8MIF8KWgZGfJAyuEE7maqWop/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61448"
    },
    "name": "Ф-ний дует (Троценко А., Якуніна О.В.)",
    "composition": "1)К.М.Вебер. Соната до мажор, І ч.; 2)А.Комлікова. ''Спогад''",
    "videoUrl": "https://drive.google.com/file/d/1aYNB8jH0Jy4SP3ufAceQ-mJ29lPr_rTw/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61449"
    },
    "name": "Ф-ний дует (Філіпов І., Марченко Л.)",
    "composition": "1)Й.С.Бах.''Жарт'' 2)М.Леонтович.''Щедрик''",
    "videoUrl": "https://drive.google.com/file/d/1phWTyIJb7FzqNQFeUqE5x1lYFZ59Wugz/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6144a"
    },
    "name": "Ф-ний дует (Хелман В., Хелман В.)",
    "composition": "1)У.Гіллок.''На паризькому бульварі'', 2)Н.Смірнова.''Бразильський карнавал''",
    "videoUrl": "https://drive.google.com/file/d/17c32CI0m_kNJXZkrHkXQe52TdfHWPl6O/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6144b"
    },
    "name": "Ф-ний квартет ''Sforzando''.",
    "composition": " О.Циганков. ''Тустеп''",
    "videoUrl": "https://drive.google.com/file/d/1UQkZ11UGVlqhR3sradpboQpK9EEyaiqo/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6144c"
    },
    "name": "Ф-ний квартет ''Sforzando''.",
    "composition": "Е. Гріг.''В печері гірського короля''",
    "videoUrl": "https://drive.google.com/file/d/1STLnt8IU5nlY-G1dqfbKuRa1B_Z8TSkY/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6144d"
    },
    "name": "Ф-ний дует (Вихрист М., Фєдосєєв Н.)",
    "composition": "1)С.Прокоф'єв. Марш, 2)В.Лютославський. Варіації на тему Паганіні",
    "videoUrl": "https://drive.google.com/file/d/1nzRHXJKtAbdx7PwbB5d4XFGxBNctpNEk/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6144e"
    },
    "name": "Ф-ний дует (Вітюк В, Березовська Є.)",
    "composition": "1)Й.Бах (Вівальді). Концерт для органа ля мінор, 2)А.П'яцолла. ''Лібертанго''",
    "videoUrl": "https://drive.google.com/file/d/1nf01Ef6OVOyLAJUUjBYyIKNs3MZe_PFv/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6144f"
    },
    "name": "Ф-ний дует (Боровець О., ілюстратор)",
    "composition": "Й.С.Бах.''Арія'' (''Страсті за Матвієм'')",
    "videoUrl": "https://drive.google.com/file/d/1H1akQUdR7QKRO4P3hDY6_tZtmdSrk0J1/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61450"
    },
    "name": "Ф-ний дует (Боровець О.,ілюстратор). ",
    "composition": "К.Орф.''О,Фортуно'' (''Карміна Бурана'')",
    "videoUrl": "https://drive.google.com/file/d/19kOIBTdIKKQZ6nXVgPiZH3Y8mycWpwBy/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61451"
    },
    "name": "Ф-ний дует (Клименко М., Діордієва М.)",
    "composition": "1) С.Рахманінов. ''Вокаліз'', 2)Д.Мійо.''Бразильєра''",
    "videoUrl": "https://drive.google.com/file/d/1u81dAAtlDofq4pnyDtYg-SxGB4jGB3sE/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61452"
    },
    "name": "Ф-ний дует (Козак І., Таєр-Ульянова К.). ",
    "composition": "A.  П'яццола. ''Лібертанго''",
    "videoUrl": "https://drive.google.com/file/d/1y6YqFtBPGMlXzEQL8uu3BL4UkrMze4jb/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61453"
    },
    "name": "Ф-ний дует (Козак І. та Таєр-Ульянова К.). ",
    "composition": "Е. Гріг. ''Норвежський танець''",
    "videoUrl": "https://drive.google.com/file/d/1Ttfi4m7P1ouNJEHDXiJna7X3beQPzrfu/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61454"
    },
    "name": "Ф-ний дует (Костечко А., Кондратюк М. ).",
    "composition": "М. К.Дебюссі. ''У човні''",
    "videoUrl": "https://drive.google.com/file/d/1hRWzCLXIUU6XpDWZ3EisI7Q5NZHzDdio/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61455"
    },
    "name": "Ф-ний дует (Костечко А., Кондратюк М.).",
    "composition": "Ю.Весняк. ''Карлсон''",
    "videoUrl": "https://drive.google.com/file/d/1A31VrR5d5dXT8kQWtNyGkxfy7bKI5MDU/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61456"
    },
    "name": "Ф-ний дует (Мацієвсьа М., Папієва К.). ",
    "composition": "1)М.Метнер.''Російський хоровод'', 2)А.П'яццола.''Велике танго''",
    "videoUrl": "https://drive.google.com/file/d/16AngsasGuAshoDZyg9idljB8xoMDv4vC/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61457"
    },
    "name": "Ф-ний дует  (Касяненко О.В., Гордієнко І.О.) ",
    "composition": "1) А.Бабаджанян. ''Ноктюрн'', 2)Ю. Щуровський. ''Гумористичний танець''",
    "videoUrl": "https://drive.google.com/file/d/1_SXAFQDw_Bm4YK-qcy6Xs4kFoW4H3DaI/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61458"
    },
    "name": "Ф-ний дует ''Елегія''",
    "composition": " 1)М.Скорик. ''Мелодія'', 2)Л.Карпенко.''Віночок улюблених мелодій''",
    "videoUrl": "https://drive.google.com/file/d/1ckZw0HssiyEdbSSHBqOyawqSftAk1wUj/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61459"
    },
    "name": "Ф-ний дует (Григор'єва Г.А. , Якуніна О.В.)",
    "composition": "1)Ф.Шуберт.''Військовий марш'' 2)А.Комлікова. ''На маскараді''",
    "videoUrl": "https://drive.google.com/file/d/1UCaJ_qYUapyM-HBhruWb-h7IFySqk_sU/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6145a"
    },
    "name": "Ф-ний дует (Косенко О.В., Касумова О.Д.).",
    "composition": "1)А. Цфасман. ''Ліричний вальс'', 2)М.Мінков. ''Старий рояль''",
    "videoUrl": "https://drive.google.com/file/d/1zGOKunxIoHd3Uj5FHvdWyN-rvWF7n6V-/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6145b"
    },
    "name": "Ф-ний квартет  (Васенко С., Васенко М., Хавалко Т.,Бичков'як К.). ",
    "composition": "1)А.Вівальді.''Зима''; 2)Ф.Мерк'юра.''Богемна рапсодія''",
    "videoUrl": "https://drive.google.com/file/d/1B96nEC3vKYRd8OgTXgPiVVX8VB-MSSdY/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6145c"
    },
    "name": "Ф-ний квартет ''ALLA BREVE''.",
    "composition": "І.Стравінський.Фрагмент із балету ''Петрушка''",
    "videoUrl": "https://drive.google.com/file/d/1bifW8OBv1E61qd184EaJjsvOtrXrRrkV/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6145d"
    },
    "name": "Ф-ний квартет ''ALLA BREVE''.",
    "composition": "К.Гурлітт.''Віденський вальс''",
    "videoUrl": "https://drive.google.com/file/d/1QjBrKWTkCbiS9Ej5k4pHbHRDsN2D1caM/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6145e"
    },
    "name": "Фортепіанний ансамбль ''ЕКСПРЕСІЯ''.",
    "composition": "О.Науменко. 1)''Часи великих сподівань'', 2)А.П'яццола. ''Лібертанго''",
    "videoUrl": "https://drive.google.com/file/d/1iUlYKrIKsJ1inuCqAOS0MY4LqGrmcp_k/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b6145f"
    },
    "name": "Фортепіанний квартет (Щукіна О.,Сердюк Г., Шаповал О., Максименко В.)",
    "composition": "1) Л.Лавіньяк.''Галоп-марш''; 2)Г.Гурліт. Ноктюрн",
    "videoUrl": "https://drive.google.com/file/d/1IYbNIC2Ex6NxxM8ymbCtL2muPAQ4RhMg/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61460"
    },
    "name": "Ф-ний ансамбль ( Смик Л.Ю.,Шекель О.О.). ",
    "composition": "К. Гуаставіно. ''Романс''",
    "videoUrl": "https://drive.google.com/file/d/1dHBznDmpE-0vWyryMf86XCkFb8sP_HY_/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
},{
    "id": {
        "$oid": "6098d647683dda47f8b61461"
    },
    "name": "Ф-ний ансамбль (Смик Л.Ю., Шекель О.О.). ",
    "composition": "О.Цфасман.''Сніжинки''",
    "videoUrl": "https://drive.google.com/file/d/19PTe-J_cS6DTSO6iZFixgb5g4ZxpazRT/preview",
    "group": "Номінація \"Фортепіанний ансамбль\""
}];

myCards = myCards.concat(ensemble);

/** CODE **/
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
            return {
                ...state,
                cards: newCards3,
                isDataInPlace: true,
                cardCount: newCards3.length,
                error: ""
            }
        case 'ERROR':
            console.log(`> Помилка`);
            return {
                error: action.msg,
                cardCount: 1,
                cards: [],
                isDataInPlace: true,
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





