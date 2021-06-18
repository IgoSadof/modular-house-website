import main1 from "../assets/images/houses/1/main-img.png";
import main2 from "../assets/images/houses/2/main-img.png";
import main3 from "../assets/images/houses/3/main-img.png";
import list1 from "../assets/images/houses/1/list-img.png";
import list2 from "../assets/images/houses/2/list-img.png";
import list3 from "../assets/images/houses/3/list-img.png";
import desc1 from "../assets/images/houses/1/desc-img.png";
import desc2 from "../assets/images/houses/2/desc-img.png";
import desc3 from "../assets/images/houses/3/desc-img.png";
import plan1 from "../assets/images/houses/1/plan-img.png";
import plan2 from "../assets/images/houses/2/plan-img.png";
import plan3 from "../assets/images/houses/3/plan-img.png";
import kitchen from "../assets/images/houses/1/rooms/kitchen.png";
import toilet from "../assets/images/houses/1/rooms/toilet.png";
import outside from "../assets/images/houses/1/rooms/outside.png";

import fasad from "../assets/images/fasad.png";
import all from "../assets/images/w-we-do-img1.png";

const lang = "RU";
export const houses = [
  {
    id: 1,
    name: "SQUARE HOUSE",
    desc:
      "Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 115 764`,
    totalArea: "170 M2",
    effectiveArea: "170 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    img: {
      main: main1,
      list: list1,
      desc: desc1,
      plan: plan1,
      fotosCategory: {
        все: [fasad, fasad],
        фасад: [all, all],
        кухня: [fasad, all, fasad, all],
        туалет: [fasad, all, fasad, all],
      },
    },
    options: [
      {
        name: "фундамент",
        variants: [
          { name: "ленточный", price: "4000" },
          { name: "свайный", price: "5100" },
        ],
      },
      {
        name: "стены",
        variants: [
          { name: "газоселикат", price: "4000" },
          { name: "кирпич", price: "4000" },
        ],
      },
      {
        name: "кровля",
        variants: [
          { name: "двускатная", price: "4000" },
          { name: "четырехскатная", price: "4000" },
        ],
      },
      {
        name: "внутренняя отделка",
        variants: [
          { name: "чистовая", price: "4000" },
          { name: "черновая", price: "4000" },
        ],
      },
    ],
    rooms: [
      {
        title: `ГОСТИННАЯ`,
        subtitle: `Стоимость дома «под ключ», с панорамным остеклением, отделкой лиственницей, 
        фальцевой кровлей и разводкой коммуникаций внутри дома составляет 660$ за метр. В полной 
        конфигурации, дом площадью 50 м. кв. обходится в 33 к$. Домокомплект привозится на участок
         и собирается на специально подготовленном фундаменте в течении двух недель. Отсутствие 
         затяжного строительства существенно экономит деньги заказчика.`,
         img:kitchen,
      },
      {
        title: `КУХНЯ`,
        subtitle: `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. 
        Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, 
        а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации 
        "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."`,
        img:outside,
      },
      {
        title: `САНУЗЕЛ`,
        subtitle: `Стоимость дома «под ключ», с панорамным остеклением, отделкой лиственницей, 
        фальцевой кровлей и разводкой коммуникаций внутри дома составляет 660$ за метр. В полной. `,
        img:toilet,

      },
      {
        title: `КЛАДОВКА`,
        subtitle: `Стоимость дома «под ключ», с панорамным остеклением, отделкой лиственницей, 
        фальцевой кровлей и разводкой коммуникаций внутри дома составляет 660$ за метр. В полной 
        конфигурации, дом площадью 50 м. кв. обходится в 33 к$. Домокомплект привозится на участок.`,
        img:kitchen,
      },
      {
        title: `ФАСАД`,
        subtitle: `Стоимость дома «под ключ», с панорамным остеклением, отделкой лиственницей, 
        фальцевой кровлей и разводкой коммуникаций внутри дома составляет 660$ за метр. В полной 
        конфигурации, дом площадью 50 м. кв. обходится в 33 к$. Домокомплект привозится на участок.`,
        img:outside,
      },
    ],
  },
  {
    id: 2,
    img: { main: main2, list: list2, desc: desc2, plan: plan2 },
    name: "ROUND HOUSE",
    desc:
      "Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 124 800`,
    totalArea: "200 M2",
    effectiveArea: "140 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    options: [
      {
        name: "фундамент",
        variants: [
          { name: "ленточный", price: "4000" },
          { name: "свайный", price: "5100" },
        ],
      },
      {
        name: "стены",
        variants: [
          { name: "газоселикат", price: "10000" },
          { name: "кирпич", price: "12000" },
        ],
      },
      {
        name: "кровля",
        variants: [
          { name: "двускатная", price: "3000" },
          { name: "четырехскатная", price: "4500" },
        ],
      },
      {
        name: "внутренняя отделка",
        variants: [
          { name: "чистовая", price: "9000" },
          { name: "черновая", price: "7000" },
        ],
      },
    ],
  },
  {
    id: 3,
    img: { main: main3, list: list3, desc: desc3, plan: plan3 },
    name: "MODERN HOUSE",
    desc:
      "Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 164 000`,
    totalArea: "80 M2",
    effectiveArea: "70 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    options: [
      {
        name: "фундамент",
        variants: [
          { name: "ленточный", price: "4000" },
          { name: "свайный", price: "5100" },
        ],
      },
      {
        name: "стены",
        variants: [
          { name: "газоселикат", price: "4000" },
          { name: "кирпич", price: "4000" },
        ],
      },
      {
        name: "кровля",
        variants: [
          { name: "двускатная", price: "4000" },
          { name: "четырехскатная", price: "4000" },
        ],
      },
      {
        name: "внутренняя отделка",
        variants: [
          { name: "чистовая", price: "4000" },
          { name: "черновая", price: "4000" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "SQUARE HOUSE",
    desc:
      "Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 115 764`,
    totalArea: "170 M2",
    effectiveArea: "170 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    img: { main: main1, list: list1, desc: desc1, plan: plan1 },
    options: [
      {
        name: "фундамент",
        variants: [
          { name: "ленточный", price: "4000" },
          { name: "свайный", price: "5100" },
        ],
      },
      {
        name: "стены",
        variants: [
          { name: "газоселикат", price: "4000" },
          { name: "кирпич", price: "4000" },
        ],
      },
      {
        name: "кровля",
        variants: [
          { name: "двускатная", price: "4000" },
          { name: "четырехскатная", price: "4000" },
        ],
      },
      {
        name: "внутренняя отделка",
        variants: [
          { name: "чистовая", price: "4000" },
          { name: "черновая", price: "4000" },
        ],
      },
    ],
  },
  {
    id: 5,
    img: { main: main2, list: list2, desc: desc2, plan: plan2 },
    name: "ROUND HOUSE",
    desc:
      "Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 124 800`,
    totalArea: "200 M2",
    effectiveArea: "140 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    options: [
      {
        name: "фундамент",
        variants: [
          { name: "ленточный", price: "4000" },
          { name: "свайный", price: "5100" },
        ],
      },
      {
        name: "стены",
        variants: [
          { name: "газоселикат", price: "4000" },
          { name: "кирпич", price: "4000" },
        ],
      },
      {
        name: "кровля",
        variants: [
          { name: "двускатная", price: "4000" },
          { name: "четырехскатная", price: "4000" },
        ],
      },
      {
        name: "внутренняя отделка",
        variants: [
          { name: "чистовая", price: "4000" },
          { name: "черновая", price: "4000" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "SQUARE HOUSE",
    desc:
      "Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 115 764`,
    totalArea: "170 M2",
    effectiveArea: "170 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    img: { main: main1, list: list1, desc: desc1, plan: plan1 },
    options: [
      {
        name: "фундамент",
        variants: [
          { name: "ленточный", price: "4000" },
          { name: "свайный", price: "5100" },
        ],
      },
      {
        name: "стены",
        variants: [
          { name: "газоселикат", price: "4000" },
          { name: "кирпич", price: "4000" },
        ],
      },
      {
        name: "кровля",
        variants: [
          { name: "двускатная", price: "4000" },
          { name: "четырехскатная", price: "4000" },
        ],
      },
      {
        name: "внутренняя отделка",
        variants: [
          { name: "чистовая", price: "4000" },
          { name: "черновая", price: "4000" },
        ],
      },
    ],
  },
];
