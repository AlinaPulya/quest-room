let quests = [];
let Quests = [ {
   thumbnail:  `img/thumbnails/h.jpg`,
   title: `Хогвартс`,
   description: `Сейчас не лучшие времена для Хогвартса. Министерство Магии
   сместило с должности директора школы профессора Альбуса
   Дамблдора, и теперь этот пост занимает Долорес Амбридж.
   Она наказывает всех по любому пустяку, кто не симпатизирует
   темным силам, а также садит в темницу школы всех несогласных
   с ней.`,
   link: `hogwarts_page.html`
},
{
  thumbnail:  `img/thumbnails/lord_of_the_rings.jpg`,
  title: `Властелин колец`,
  description: `Всё началось с отливки великих Колец. Три из них были отданы
  бессмертным эльфам, семь — пещерным гномам, а девять — королям
   людского рода.`,
   link: `lord_page.html`
},
{
  thumbnail:  `img/thumbnails/aliceinwonderland.jpg`,
  title: `Алиса в стране чудес`,
  description: `Ровно на один час вы превратитесь в Алису, которая провалилась
  в кроличью нору. Успеете выбраться? Гриб вам в помощь!
  Яркая, красочная, необычная, местами даже безумная комната
  по мотивам одноименной сказки Л. Кэрролла. Невероятная локация,
  которая понравится и детям, и взрослым.`,
  link: `alice_page.html`
},
{
  thumbnail:  `img/thumbnails/pirates.jpg`,
  title: `Пираты Карибского моря`,
  description: `С недавнего времени непобедимый корабль «Летучий Голландец» приобрел
 нового капитана. Молодой Уил Тернер проткнул кинжалом сердце Дейви
 Джонса и этим обрек себя на вечное плавание на борту корабля
 в качестве капитана!`,
  link: `pirates_page.html`
}
];

class Quest{
  constructor (thumbnail, title, description, link) {
    this.coverQuest = thumbnail || 'Content is unavailable';
    this.titleQuest = title || 'Content is unavailable';
    this.descriptionQuest = description || 'Content is unavailable';
    this.linkQuest = link || 'Content is unavailable';
  }
  getBlock(){
    return `<div class="thumbnail"><img class="img-rounded" src=${this.coverQuest} alt="${this.titleQuest}">` +
    `<div class="caption"><h3>${this.titleQuest}</h3>` +
    `<p>${this.descriptionQuest}</p>` +
    `<p><a href="${this.linkQuest}" class="btn btn-primary" role="button">Подробнее</a></p>
    </div></div>`;
  }
}

function createBook (elem) {
    const parentElem = document.getElementById('appearQuestCards');
    let elementBook = document.createElement('div');

    elementBook.className = 'col-md-4';
    elementBook.innerHTML = elem;
    parentElem.appendChild(elementBook);
}

function ready() {
    for(let quest of Array.from(Quests))
    {

      let questElement = new Quest(quest.thumbnail, quest.title, quest.description, quest.link);

      createBook(questElement.getBlock());
      quests.push(questElement);
    }
    for(let quest of Array.from(Quests))
    {

      let questElement = new Quest(quest.thumbnail, quest.title, quest.description);

      createBook(questElement.getBlock());
      quests.push(questElement);
    }
}

document.addEventListener('DOMContentLoaded', ready);
