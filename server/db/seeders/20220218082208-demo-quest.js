module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('quests', [{
      text: 'Птица, способная летать как головой, так и хвостом вперёд',
      themeId: 1,
      price: 200,
      answer: 'колибри',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Единица наследственного материала, ответственная за формирование какого-либо наследственного признака',
      themeId: 1,
      price: 400,
      answer: 'ген',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Спектакль, сбор от которого идёт в пользу одного актера.',
      themeId: 1,
      price: 600,
      answer: 'бенефис',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Древний римский Бог, имевший два лица',
      themeId: 1,
      price: 800,
      answer: 'Янус',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Если соединить медь и олово, получится…',
      themeId: 1,
      price: 1000,
      answer: 'бронза',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Эта планета – самая маленькая в Солнечной системе',
      themeId: 2,
      price: 200,
      answer: 'Плутон',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Именно эта планета пела песню, провожая своих питомцев',
      themeId: 2,
      price: 400,
      answer: 'Земля',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Так называется альфа и бета созвездия Близнецов',
      themeId: 2,
      price: 600,
      answer: 'Кастор и Поллукс',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Его родиной является планета Мельмак ',
      themeId: 2,
      price: 800,
      answer: 'Альф',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Этот спутник Юпитера был назван так по имени аргосского царя',
      themeId: 2,
      price: 1000,
      answer: 'Ио',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Именем этого героя иногда называют современное средство коммуникации',
      themeId: 3,
      price: 200,
      answer: 'Емеля',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'По сути он просто обнаглевшее хлебобулочное изделие',
      themeId: 3,
      price: 400,
      answer: 'Колобок',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Согласно сказке Андерсена, они в отличие от людей не имеют души и после смерти превращаются в пену',
      themeId: 3,
      price: 600,
      answer: 'русалки',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Сюжет этой сказки Пушкина подсказан «Легендой об арабском звездочете',
      themeId: 3,
      price: 800,
      answer: 'Сказка о золотом петушке',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Автор этих сказок – И. Штраус',
      themeId: 3,
      price: 1000,
      answer: 'Сказки венского леса',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Он начал сочинять музыку в 3 года',
      themeId: 4,
      price: 200,
      answer: 'Моцарт',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Более 100 его потомков были органистами',
      themeId: 4,
      price: 400,
      answer: 'Бах',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'На момент написания своей знаменитой 9 симфонии он был абсолютно глух',
      themeId: 4,
      price: 600,
      answer: 'Бетховен',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Этот композитор и участник «Могучей кучки» был профессором химии',
      themeId: 4,
      price: 800,
      answer: 'Бородин',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Ференц Лист был тестем именно этого немецкого композитора',
      themeId: 4,
      price: 1000,
      answer: 'Рихарда Вагнера',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Именно он возглавлял экспедицию, совершившую первое плавание вокруг света.',
      themeId: 5,
      price: 200,
      answer: 'Магеллан',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Этот герой Ж. Верна заключил пари, что сможет совершить путешествие вокруг света за 80 дней',
      themeId: 5,
      price: 400,
      answer: 'Фог',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Этот человек впервые совершил путешествие вокруг света за 1 час 48 минут.',
      themeId: 5,
      price: 600,
      answer: 'Гагарин',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Этот английский ученый совершил кругосветное путешествие на корабле «Бигл»',
      themeId: 5,
      price: 800,
      answer: 'Дарвин',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Он был вторым, совершившим кругосветное путешествие в истории человечества.',
      themeId: 5,
      price: 1000,
      answer: 'Дрейк',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Президентом этой страны предлагали стать А.Энштейну.',
      themeId: 6,
      price: 200,
      answer: 'Израиль',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'В 861 г. викинг Наддод назвал ее «Снежной страной»',
      themeId: 6,
      price: 400,
      answer: 'Исландия',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Эта страна занимает первое место в мире по поголовью крупного рогатого скота',
      themeId: 6,
      price: 600,
      answer: 'Индия',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'В ее состав входят Балеарские острова',
      themeId: 6,
      price: 800,
      answer: 'Испания',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Это королевство – единственная монархия в Океании',
      themeId: 6,
      price: 1000,
      answer: 'Тонга',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('quest', null, {});
     */
    await queryInterface.bulkDelete('quests', null, {});
  }
};
