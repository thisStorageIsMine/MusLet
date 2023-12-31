const articles = [
  {
    title: "Как приготовить пасту",
    description: "Простой рецепт приготовления вкусной пасты.",
    likes: 120,
    views: 5000,
    imgId: "imgs/i.webp",
    content: `Прежде всего, следует нарезать бекон кубиками и обжарить на растопленном сливочном масле. При этом важно добавить 2 зубчика чеснока, раздавленные ножом. Готовьте в течение 10 минут, пока бекон не станет мягким и с него не вытопится жир. После удалите чеснок.
    Затем следует отварить спагетти по рецепту для пасты карбонара, добавив их в кипящую воду. Не забудьте ее посолить и влить оливковое масло. Готовим их до состояния аль денте.
    Тем временем отделяем 3 желтка от белков, добавляем к желткам еще 1 яйцо и взбиваем, используя венчик, всыпаем соль и перец.
    Согласно рецепту пасты с беконом, измельчаем на крупную терку сыр и перекладываем в яичную массу.
    Откинув готовые спагетти на дуршлаг, дождитесь, пока стечет лишняя жидкость. Однако нужно оставить 300 мл бульона, его будем использовать в дальнейшем.
    В сковороду с беконом пересыпаем спагетти, добавляем сливочное масло, взбитую яично-сырную массу, вливаем бульон. При этом важно не переставать помешивать блюдо, чтобы яйца не успели свернуться.
    Включите огонь, чтобы соус в пасте с беконом немного загустел. Все время следует перемешивать, в противном случае яйца сварятся, а этого допустить нельзя. Если соус получится густым, не отчаивайтесь, ведь достаточно добавить немного бульона.
    Далее выкладываем пасту карбонара с беконом на тарелку и посыпаем тертым сыром. Не забудьте поперчить.`
  },
  {
    title: "Лучшие книги 2023",
    description: "Список книг, которые стоит прочитать в текущем году.",
    likes: 350,
    imgId: "imgs/ii.webp",
    views: 7500,
    content: "Бестселлерами 2023 года стали такие произведения: Бретта Истона Эллиса «Осколки», Аллегры Гудман «Сэм», принца Гарри «Запасной», Элеоноры Кэттон «Бирнамский лес», Энн Наполитано «Hello, beautiful», Патриции Филд «Пэт в большом городе», Пола Мюррея «Пчелиный укус», Энджи Ким «Падение счастья», Уолтера Айзексона «Илон Маск», Келли Линк «Белый кот, черная собака». Бретт Истон Эллис «Осколки»."
  },
  {
    title: "Секреты здоровья",
    description: "Советы для поддержания здорового образа жизни.",
    likes: 200,
    imgId: "imgs/iii.webp",
    views: 6000,
    content: `Качество жизни в зрелом возрасте зависит от многих факторов, и не последнюю роль среди них играет наследственность. Однако последние исследования показывают, что гены лишь на треть ответственны за долголетие, оставшиеся 2/3 прожить долго и без болезней – в наших руках. 


    Старея, люди сходятся во мнении, что для счастливой жизни важным условием будет крепкое здоровье. Как его сохранить до преклонных лет? Доказано, что состояние здоровья зависит от того, какой образ жизни ведет человек.
    
    Существуют правила, выполнение которых поможет хорошо себя чувствовать и сохранять бодрость тела долгие годы. Ведь пожилой возраст не должен мешать людям быть счастливыми и радоваться жизни.
    
    1. Употребляйте больше калия.
    Калий сохраняет силу, так что ешьте богатые калием овощи (картофель, листовую зелень) и фрукты (бананы, папайю). В возрасте старше 65 лет его присутствие в рационе сохраняет на 3,6% больше мышечной массы, чем его отсутствие. Это очень важно, так как, начиная с этого возраста, человек теряет около 2 кг мышечной массы каждые 10 лет. Это приводит к слабости, падениям, что может вызвать дальнейшие осложнения. Ежедневно рекомендуется употреблять не менее 4,7 г калия, это соответствует 5-9 порциям фруктов и овощей. Чтобы добиться этого, следите, чтобы 1-2 порции были включены в каждый ваш прием пищи. Кроме того, внимательно следите за количеством соли в рационе. Она снижает уровень калия в организме.
    
    2. Радуйтесь жизни.
    Оптимистичный настрой увеличивает продолжительность жизни. Несколько десятков научных исследований подтвердили, что ощущение счастья – это профилактика болезней. Причем настолько эффективное, что его можно сравнить с отказом от курения. Другое научное исследование выяснило, что люди, обычно называющие себя счастливыми и довольные жизнью, являлись обладателями крепкого здоровья и крайне редко страдали серьезными заболеваниями. Конечно, можно твердить как попугай, что ты счастлив, но не ощущать этого на самом деле. И все же, оптимизму можно научиться, используя антистрессовые техники, медитацию и окружая себя жизнерадостными людьми.
    
    3. Надевайте кроссовки.
    Если ваша спортивная обувь пылится где-то на антресолях, срочно доставайте ее оттуда. Эксперты по спортивной медицине уверяют, что люди, находящиеся в хорошей физической форме, отодвигают биологическое старение лет минимум лет на 10 и дольше остаются независимыми и дееспособными. Научные исследования, проводившиеся в течение 7 лет с одними и теми же участниками, определили, что занятия спортом обратно пропорциональны дате смерти, то есть чем больше вы занимаетесь, тем дольше вы проживете. При этом заниматься лучше понемногу, но каждый день, чем до изнеможения раз в несколько дней.
    
    
    
    4. Обогащайтесь культурно.
    Пробиотики, которые являются дружественными человеку бактериями, помогают предотвратить ряд заболеваний. Их деятельность связывают с укреплением иммунной системы и снижением риска возникновения рака прямой кишки. По какому-то стечению обстоятельств, в тех местах, где проживает большое количество долгожителей, население употребляет в пищу большое количество ферментированных (т.е. сквашенных) продуктов питания, которые как раз и содержат пробиотики. Дополните свой рацион «живым» йогуртом, например, или корейским кимчи. Подумайте о дополнительном приеме добавок с пробиотиками, такими как Лактобактерии GG или Бациллус коагуланс 30. Проконсультируйтесь с врачом и внимательно прочитайте информацию о дозировке.
    
    5. Принимайте витамин В.
    Мозгу для здоровья требуется витамин В12, который содержится в морепродуктах и мясе птицы. У людей с низким содержанием в крови этого витамина процесс угасания мыслительных функций протекает гораздо быстрее. А те, кто, наоборот, употребляет его в достаточном количестве, в 6 раз реже сталкиваются с возрастной потерей объема головного мозга. Большинство людей может получать достаточное количество витамина B12 из ежедневного рациона. Вегетарианцам, избегающим животной пищи, требуется прием витаминных добавок. То же относится и к людям старше 65 лет, так как возрастное снижение кислотности желудка сокращает всасывание этого витамина из пищи. В этих случаях требуется принимать B12 дополнительно в комплексе с другими витаминами группы B или как отдельную добавку.
    
    6. Рыба должна стать привычным блюдом на вашем столе.
    Некоторые сорта жирной рыбы имеют высокое содержание омега-3 кислот – эйкозапентаеновой кислоты (ЭПК) и докозагексаеновой кислоты (ДГК) – жизненно необходимых для сохранения здоровья, особенно в пожилом возрасте. Многочисленные исследования подтвердили их способность снижать риск сердечно-сосудистых заболеваний и инфарктов. Употребление рыбы с высоким содержанием омега-3 кислот трижды в неделю на 26% снижает риск инсульта и заболеваний мозга, включая старческий маразм. Эти же кислоты благотворно влияют на зрение. Всего одна порция жирной рыбы в неделю способна наполовину снизить риск развития возрастной макулодистрофии (поражения центральной области сетчатки), ведущей к слепоте. Оптимально количество – две порции жирной рыбы в неделю, советуют эксперты. Налегайте на селедку, лосось, тунца и форель. Хороши также свежие сардины и другие виды некрупных рыб. В них практически не бывает ртути, к тому же они очень вкусны.
    
    5. Не забывайте друзей.
    Не откладывайте общение на «потом». Одиночество повышает кровяное давление, увеличивает риск депрессии, болезни Альцгеймера и существенно снижает иммунитет. Социальная активность же, наоборот, улучшает здоровье и увеличивает продолжительность жизни. А что делать тем, у кого друзья и родственники живут далеко? Общайтесь онлайн. Социальные сети и общение по интернету дает похожий эффект.
    
    
    
    6. Витамин D.
    Витамин D является одним из основных защитников организма от возрастных заболеваний. Люди с низким уровнем витамина D в крови быстрее умирают от различных болезней, это подтвердили многочисленные исследования. Витамин защищает от сердечно-сосудистых болезней, высокого давления, некоторых видов рака и аутоиммунных заболеваний. Содержится в рыбе, яйцах и обогащенном молоке. Наше тело вырабатывает витамин D под воздействием солнечных лучей. Проблема в том, что нам все равно его не хватает. Врачи рекомендуют дополнительно принимать D3 примерно 1000 м.е. ежедневно.
    
    7. Займитесь тайцзы.
    Эту древнюю гимнастику еще называют «медитацией в движении». Это комплекс упражнений, основанный на растяжках и балансировании, который помогает сохранять здоровье в течение долгих-долгих лет. Исследования подтвердили эффективность тайцзы в поддержании хорошей физической формы, в снижении высокого давления, в облегчении хронических болей, снижении беспокойства и замедлении потери костной массы после менопаузы. Гимнастика также решает проблему бессонницы, на которую часто жалуются пожилые люди. Это также было доказано исследованиями, проводившимися с людьми от 59 од 86 лет: те, кто занимался тайцзы, спали лучше и крепче тех, кто не занимался. Эта гимнастика совсем не сложна, главное, научиться ее выполнять. Так что поищите центры тайцзы в вашем городе или соответствующие занятия в спортивных клубах.
    
    8. Откажитесь от красного мяса.
    Позволяйте его себе крайне редко, не более 1 раза в неделю, советуют эксперты. Содержащиеся в нем насыщенные жиры закупоривают артерии и увеличивают риск сердечно-сосудистых заболеваний. И рака. Ученые оценили этот риск в 20-60% у тех, кто употребляет большое количество красного мяса (примерно 100 г в день). В красном мясе содержится слишком большое количество железа, избыток которого приводит к сердечно-сосудистым нарушениям, диабету и болезни Альцгеймера. Замените его на рыбу, птицу и цельные органические соевые продукты.`
  },
  {
    title: "Искусство фотографии",
    description: "Основы искусства фотографии для начинающих.",
    likes: 80,
    imgId: "imgs/clem-onojeghuo-XW-Z9L930CY-unsplash.jpg",
    views: 3000,
    content: `Фотография. Искусство, признанное обществом через 10 лет после его изобретения в 1830-х. Сегодня фотография - это крупнейшее в мире быстро растущее увлечение, причем только необходимое для него оборудование создает отрасль с оборотами в миллиарды долларов. Не все знают что такое камера обскура или выдержка, как и не все слышали об Анри Картье-Брессоне и даже об Энни Лейбовиц.

    Сегодня мы сделаем шаг назад и взглянем на то, как этот увлекательная техника была создана и разработана, потому что не зная прошлого, невозможно создать великое будущее.
    Еще до создания фотографии, люди уже знали принципы, согласно которым она должна работать. Они могли проецировать изображение на стену или на лист бумаги, однако в то время его невозможно было напечатать, так как задача сохранения света оказалась намного сложнее, чем его проецирование. Инструмент, который люди использовали для работы с изображениями, называется Камера обскура (с латинского языка это переводится "темная комната"), и им пользовались в течение несколько веков до изобретения фотографии.
    
    Считается, что Камера обскура была изобретена в 13-14 веках, однако есть рукопись арабского ученого Хасана ибн Хасана, датируемая 10-м веком и описывающая принципы, на которых Камера обскура работает и на которых сегодня основана аналоговая фотография.
    о сути камера обскура - это темное закрытое пространство в форме короба с отверстием на одной стороне. Чтобы камера обскура работать должным образом, отверстие должно быть достаточно маленьким по сравнению с коробом. Это работает согласно оптическим законам, когда свет, проходящий через небольшое отверстие, преобразуется и создает изображение на той поверхности, на которую он падает, то есть на стенке коробки. Изображение оказывалось зеркальным и перевернутым вверх ногами, но в основном то, что отличает сегодняшние аналоговые камеры от различных камер обскура - это зеркала и пленка, которая используется для фиксации и сохранения изображения, созданного светом.

Фотография по мере своего развития всегда считалась убийцей изобразительного искусства. Тем не менее считается, что принципы фотографии широко применялись такими художниками эпохи Возрождения, как Леонардо, Микеланджело и др. В середине 16-го века Джованни Баттиста делла Порта, итальянский ученый, написал эссе о том, как использование камеры обскура облегчает процесс рисования. Он проецировал изображение людей за пределами камеры обскуры на холст внутри нее (в данном случае камерой обскурой была довольно большая комната), а затем рисовал поверх изображения или пытался скопировать его.

Этот метод очень похож на ротоскопирование, которое широко использовалось в анимации в начале ХХ века. Процесс использования камеры обскуры выглядел очень странно и пугал людей в те времена, поэтому Джованни Баттисте пришлось отказаться от этой идеи после того, как он был арестован и осужден по обвинению в колдовстве.`
  },
  {
    title: "Путешествие в Париж",
    description: "Описание лучших мест и достопримечательностей Парижа.",
    likes: 420,
    views: 10000,
    imgId: "imgs/iiii.webp",
    content: `Эйфелева башня
    Эйфелева башня настолько часто упоминается в путеводителях и фигурирует в культуре, что в представлении попросту не нуждается, но мы всё же хотим поделиться несколькими малоизвестными фактами об этом символе Парижа и всей Франции. Её постройка была приурочена к Всемирной выставке 1889 года, а проект предоставило инженерное бюро Гюстава Эйфеля. Примечательно, что чертежи уже давно пылились в архивах и лишь ждали назначенного часа, дабы быть реализованными. Несмотря на огромную популярность у туристов, парижская интеллигенция была не в восторге от Эйфелевой башни, которая, как они считали, портила архитектурный облик города. Её называли «ненавистной колонной из железа и винтов» и неоднократно слали в муниципалитет прошения о скорейшем демонтаже. Снести Эйфелеву башню должны были через 20 лет с момента постройки, но в 1910 Гюстав Эйфель продлил аренду ещё на 70 лет, вызвав негодование у всех злопыхателей. Прошло уже больше века, а башня всё так же стоит в Париже и вряд ли когда-нибудь отсюда исчезнет, ведь представить без неё Францию просто невозможно.
    
    Экскурсия: Приключение на Эйфелевой башне. Город с высоты для детей и взрослых
    
    2. Площадь Трокадеро
    С французским писателем Ги де Мопассаном, бывшим одним из ненавистников Эйфелевой башни, связан интересный анекдот. Мопассан якобы любил ресторан на первом уровне башни лишь за то, что только отсюда «колонну из железа и винтов» не было видно. Мы же, напротив, рекомендуем вам посетить площадь Трокадеро, откуда открывается прекрасный вид на Эйфелеву башню. Известна площадь и дворцом Шайо: может показаться, что построен он несколько веков назад, но на деле зданию не исполнилось и ста лет. Его также возвели к проведению Всемирной выставки, но уже в 1937 году. Сегодня дворец не только памятник архитектуры, но и место, где работают интереснейшие парижские музеи. По бокам площадь окружена садами, а в центре установлен огромный фонтан, известный зрелищными водными шоу. Трокадеро — это одно из многих «сердец» Парижа, где определенно стоит побывать.
    
    Экскурсия: Понять Париж за два часа
    
    3. Марсово поле
    В 1751 году Людовик XV поручил открыть Военную школу для обучения юношей из небогатых сословий. Напротив здания была обширная пустующая территория, которую решили использовать в качестве плаца и нарекли в честь Марса — бога войны и покровителя армий. Впоследствии на площади проходили не только парады и смотры, но и важнейшие в французской истории события: принятие первой конституции, расстрел мирной демонстрации в 1791 году и первый полет на воздушном шаре, проведенный Жан-Пьером Франсуа Бланшаром. С XIX столетия здесь всё чаще стали проводится патриотические праздники, а в 1867 году Марсово поле впервые использовали как площадку для Всемирной выставки. За 270-летнюю историю облик Марсова поля изменился и сегодня представляет собой парк. Не будем разбрасываться лестными эпитетами, а лишь скажем, что вид на Эйфелеву башню с Марсова поля — один из самых красивых и узнаваемых открыточных видов Парижа.`
  },
  {
    title: "Управление временем",
    description: "Советы по планированию и управлению временем.",
    likes: 250,
    views: 8000,
    imgId: "imgs/tecnology-background.jpg",
    content: `Если постоянно заваливает работой и домашними делами, возможно, стоит пересмотреть подход к планированию. Управление временем — целая наука. Рассказываем, как работает тайм-менеджмент и как управлять своим временем
    Что такое тайм-менеджмент
    Экономист Питер Друкер писал, что менеджмент будет все больше выходить за рамки коммерческих предприятий, где появился в попытке организовать производство вещей.
    
    Тайм-менеджмент — это техники и методы для управления временем. Это самоорганизация и управление собой. Тайм-менеджмент помогает человеку или компании планировать время и экономить ресурсы.
    
    Например, если завалило работой, а вы не знаете, за что браться в первую очередь, следует расставить приоритеты. Матрица Эйзенхауэра помогает разобраться, какие задачи срочные и важные, а какие просто отвлекают. Не стоит забывать и про знаменитое «правило Парето», согласно которому всего 20% усилий приносят 80% результата и наоборот.
    
    Чем больше задуманного мы успеваем сделать, тем лучше качество нашей работы и жизни в целом. А в условиях цифровой трансформации и ускорения изменений, четкое распоряжение временем помогает сохранять фокус на целях, не отклоняться от курса и в конечном итоге не стать «сбитым летчиком» на рынке труда.
    
    Принципы тайм-менеджмента
    Практически все существующие методы управления временем состоят из трех компонентов: приоритизации, планирования и структурирования.
    
    Приоритизация. Чтобы выполнить задачу, нужно определить, насколько она срочная, сложная и важная, и только потом приступить к ее выполнению.
    Планирование. Чтобы выполнить задачу, нужно разобраться, когда ее следует сделать и сколько времени на это уйдет.
    Структурирование. Чтобы выполнить задачу, нужно понять, как отслеживать ее выполнение и результаты.
    Большая часть техник тайм-менеджмента опирается на структурирование и приоритизацию, и только малая часть — сложная комбинация всех трех принципов.`
  },
  {
    title: "Искусство живописи",
    description: "Основы искусства живописи для начинающих художников.",
    likes: 120,
    views: 4000,
    imgId: "imgs/iiiii.webp",
    content: `Во-первых давайте поговорим о том, что же такое композиция с точки зрения художника?

    Если в двух словах, то это законы и принципы размещения и взаимодействия любых предметов, людей, пятен, цвета, линий в видимом поле живописной работы, а также их компоновка относительно формата двумерного носителя или трёхмерного пространства (так как живописная работа может быть и трёхмерной).
    Можно дать и более упрощенное определение
    
    Композиция-это набор элементов картины, взаимодействующих между собой и имеющих центр
    Иными словами композиция-это гармония или соотношения всего, что может быть изображено художником с форматом носителя.
    
    Важно! Невозможно говорить о композиции не говоря об эмоциях, которые хочет передать художник в своей работе. Всегда законы и принципы композиции подчинены замыслу работы и тому эмоциональном посылку, который хочет передать художник. Любая красивая композиция и гармония-это не самоцель. Прежде всего это инструмент. Правильно созданная композиция усилит и подчеркнёт замысел, а не правильная его полностью смажет.
    
    Выбор формата работы очень сильно зависит от вашего замысла
    
    Очень важная вещь для понимания композиции-это формат. Формат нужно выбирать в соответствии с замыслом. Так как выбор формата напрямую влияет на эмоциональный посыл.`
  }
];



const communities = [
  {
    title: "Поварёшки",
    description: "Разбираем лучшие рецепты",
    img: "imgs/c1.png",
    members: 1000
  },
  {
    title: "Музыкальная империя",
    description: "Лучшие треки",
    img: "imgs/clem-onojeghuo-XW-Z9L930CY-unsplash.jpg",
    members: 1500
  },
  {
    title: "Астрономия",
    description: "Изучи вселенную",
    img: "imgs/c2.png",
    members: 800
  },
  {
    title: "Искусство фотографии",
    description: "Сохрани прекрасное",
    img: "imgs/c3.png",
    members: 2000
  },
  {
    title: "Альпинизм",
    description: "Лучшие туры в Москве",
    img: "imgs/c4.png",
    members: 1200
  },
  {
    title: "Туры по водолазанию",
    description: "Пока никто не жаловался",
    img: "imgs/c5.png",
    members: 700
  }
];

const books = [
  {
    img: "imgs/book-education-study-svgrepo-com.svg",
    autorName: "Джеймс",
    autorSurname: "Оруэлл",
    title: 'Джеймся Оруэлл - 1984',
    pdf: 'pdf/1984_1948.pdf'
  },
  {
    img: "imgs/book-education-study-svgrepo-com.svg",
    autorName: "Роберт",
    autorSurname: "Кийосаки",
    title: 'Богатый папа, Бедный папа',
    pdf: 'pdf/papa.pdf'
  },
  
  {
    img: "imgs/book-education-study-svgrepo-com.svg",
    autorName: "Николай",
    autorSurname: "Короновский",
    title: 'Геология для чайников',
    pdf: 'pdf/Geologiya.pdf'
  },
  {
    img: "imgs/book-education-study-svgrepo-com.svg",
    autorName: "Дэвид",
    autorSurname: "Флэнаган",
    title: 'Учебник по JavaScript',
    pdf: 'pdf/JavaScript.pdf'
  }
];
const books1 = [
  {

    pdf: 'books/pdf/1984_1948.pdf'
  },
  {

    pdf: 'books/pdf/papa.pdf'
  },

  {

    pdf: 'books/pdf/Geologiya.pdf'
  },
  {

    pdf: 'books/pdf/JavaScript.pdf'
  }
];
