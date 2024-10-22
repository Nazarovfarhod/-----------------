import { DataKey, MockDataInit } from './DataTypes';

export const MockData: MockDataInit[] = [
  {
    title: DataKey.Culture,
    years: {
      start: 1981,
      end: 2019,
    },
    events: [
      {
        year: 1981,
        fact: 'Выход первого альбома Майкла Джексона "Thriller", который стал самым продаваемым альбомом всех времен.',
      },
      {
        year: 1994,
        fact: 'Премьера фильма "Криминальное чтиво" от Квентина Тарантино, оказавшего значительное влияние на киноиндустрию.',
      },
      {
        year: 2001,
        fact: 'Запуск первой версии платформы для потокового видео Netflix, начавшей революцию в потреблении медиа-контента.',
      },
      {
        year: 2005,
        fact: 'Выход популярного альбома "X&Y" группы Coldplay, ставшего мировым хитом.',
      },
      {
        year: 2010,
        fact: 'Премьера фильма "Начало" от Кристофера Нолана, оказавшего влияние на жанр научной фантастики.',
      },
      {
        year: 2015,
        fact: 'Выход альбома "25" Адель, который стал одним из самых продаваемых альбомов десятилетия.',
      },
      {
        year: 2018,
        fact: 'Выход фильма "Черная Пантера" от Marvel, ставшего культурным феноменом в мире кино.',
      },
      {
        year: 2019,
        fact: 'Выход финального сезона сериала "Игра престолов", завершившего культовую серию.',
      },
    ],
  },
  {
    title: DataKey.Economy,
    years: {
      start: 1990,
      end: 2021,
    },
    events: [
      {
        year: 1990,
        fact: 'Переход стран Восточной Европы к рыночной экономике после падения коммунистических режимов.',
      },
      {
        year: 2000,
        fact: 'Появление доткомовского пузыря и его последующий крах на рынке технологий.',
      },
      {
        year: 2008,
        fact: 'Мировой финансовый кризис, вызванный падением рынка недвижимости и банковским кризисом.',
      },
      {
        year: 2015,
        fact: 'Развитие экономики совместного потребления и начало массового роста платформ для аренды и такси.',
      },
      {
        year: 2019,
        fact: 'Рост глобальных экономических неравенств и начало торговых войн между крупными экономиками.',
      },
      {
        year: 2020,
        fact: 'Пандемия COVID-19 приводит к глобальному экономическому кризису и снижению экономической активности.',
      },
      {
        year: 2021,
        fact: 'Восстановление экономики после пандемии и рост интереса к цифровым валютам и новым инвестиционным инструментам.',
      },
    ],
  },
  {
    title: DataKey.Ecology,
    years: {
      start: 2006,
      end: 2024,
    },
    events: [
      {
        year: 2006,
        fact: 'Выход фильма "Неудобная правда", который привлек внимание к проблемам глобального потепления.',
      },
      {
        year: 2010,
        fact: 'Запуск международной программы по охране океанов и борьбе с загрязнением пластиковыми отходами.',
      },
      {
        year: 2015,
        fact: 'Подписание Парижского соглашения по климату, направленного на снижение выбросов парниковых газов.',
      },
      {
        year: 2019,
        fact: 'Глобальные климатические протесты, организованные движением Fridays for Future.',
      },
      {
        year: 2021,
        fact: 'Мировые экологические конференции сосредоточились на проблемах потепления климата и сохранения биоразнообразия.',
      },
      {
        year: 2022,
        fact: 'Разработка новых технологий для очистки океанов от микропластика и исследований его воздействия на экосистемы.',
      },
      {
        year: 2023,
        fact: 'В 2023 году в мире было зарегистрировано резкое увеличение числа экологических катастроф, включая лесные пожары и наводнения, что стало результатом изменения климата и глобального потепления.',
      },
      {
        year: 2024,
        fact: ' В 2024 году ожидается, что страны мира примут новые обязательства по сокращению выбросов углекислого газа в рамках международных соглашений, направленных на борьбу с климатическими изменениями и защиту окружающей среды.',
      },
    ],
  },
];