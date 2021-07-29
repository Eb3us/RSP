(function () {
  'use strict';

  const books = [
    {
      "id": "1",
      "title": "Toward a Threefold Society",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Frank Thomas Smith",
        "publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "pages": "176",
        "publication date": "december 10, 2019",
        "dimensions": "5.5 x 0.4 x 8.5 inches",
        "shipping weight": "11.6 ounces",
        "ISBN-10": "1-948302-16-6",
        "ISBN-13": "978-1-948302-16-6",
      },
      "kindle": {
        "size": "999kb",
        "publication date": "december 11, 2019",
        "text-to-speech": "enabled",
        "x-ray": "not enabled",
        "word wise": "enabled",
        "lending": "enabled",
        "simultaneous device usage": "unlimited",
        "enhanced typesetting": "enabled",
        "ISBN-10": "1-948302-17-3",
        "ISBN-13": "978-1-948302-17-3",
      },
      "categories": ["Social Science", "Modern Translations"],
      "url": "https://amzn.to/2P4pMnx",
      "online-url": "",
      "img": "towthreesociety_covs.jpg",
    },
    {
      "id": "2",
      "title": "The Worldview of Herman Grimm, in Relation to Spiritual Science",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Peter Stebbing",
        "publisher": "Rudolf Steiner Publications",
      },
      "url": "https://amzn.to/36rj94r",
      "img": "hermangrimm01_covs.jpg",
      "categories": ["Modern Translations"],
      "paperback": {
        "pages": "52",
        "publication date": "November 13, 2019",
        "dimensions": "5.5 x 0.13 x 8.5 inches",
        "ISBN-10": "1-948302-12-8",
        "ISBN-13": "978-1-948302-12-8",
      },
      "kindle": {
        "Size": "810kb",
        "Publication Date": "December 11, 2019",
        "Text-to-Speech": "enabled",
        "X-Ray": "enabled",
        "Word Wise": "enabled",
        "Lending": "enabled",
        "Simultaneous Device Usage": "Unlimited",
        "Enhanced Typesetting": "Not Enabled",
        "ISBN-10": "1-948302-13-6",
        "ISBN-13": "978-1-948302-13-5",
      },
    },
    {
      "id": "3",
      "title": "Anthroposophical Fantasies",
      "global": {
        "Author": "Frank Thomas Smith",
        "Alter Ego": "Roberto Fox",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Peter Stebbing",
        "Ilustrator": "Celina MacKern",
      },
      "paperback": {
        "Pages": "232",
        "Publication Date": "August 16, 2019",
        "Product Dimensions": "5.5 x 0.6 x 8.5 inches",
        "Shipping Weight": "12.8 ounces",
        "ISBN-10": "1948302101",
        "ISBN-13": "978-1948302104",
      },
      "kindle": {
        "Size": "999kb",
        "Publication Date": "August 15, 2019",
        "Text-to-Speech": "enabled",
        "X-Ray": "not enabled",
        "Word Wise": "enabled",
        "Lending": "enabled",
        "Simoultaneous Device Usage": "unlimited",
        "Enhanced Typesetting": "enabled",
        "ISBN-10": "1948302111",
        "ISBN-13": "978-194830211X",
      },
      "url": "https://amzn.to/2Qcs1ba",
      "img": "AnthroFantasies_covs.jpg",
      "categories": ["Fiction"],
    },
    {
      "id": "4",
      "title":
        "Fairy Tales in the Light of Spiritual Investigation and A Mongolian Legend:",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Peter Stebbing",
      },
      "paperback": {
        "Pages": "42",
        "Publication Date": "August 21, 2019",
        "Product Dimensions": "5.5 x 0.1 x 8.5 inches",
        "ISBN-10": "1948302128",
        "ISBN-13": "978-1948302128",
      },
      "kindle": {
        "Size": "218 KB",
        "Publication Date": "August 22, 2019",
        "Text-to-Speech": "Enabled",
        "X-Ray": "Not Enabled",
        "Word Wise": "Enabled",
        "Lending": "Enabled",
        "Simoultaneous Device Usage": "Unlimited",
        "Enhanced Typesetting": "Enabled",
        "ISBN-10": "1948302128",
        "ISBN-13": "978-1948302128",
      },
      "url": "https://amzn.to/3lHrKZ2",
      "img": "FairyTales1_covs.jpg",
      "categories": ["Modern Translations"],
    },
    {
      "id": "5",
      "title":
        "Leonardo's Spiritual Stature: at the Turning Point of Modern Times",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Peter Stebbing",
        "Ilustrator": "Leonardo da Vinci",
      },
      "paperback": {
        "Pages": "40",
        "Publication Date": "June 26, 2019",
        "Product Dimensions": "5.5 x 0.1 x 8.5 inches",
        "ISBN-10": "1948302098",
        "ISBN-13": "978-1948302098",
      },
      "kindle": {
        "Size": "1006 KB",
        "Publication Date": "August 19, 2019",
        "Text-to-Speech": "Enabled ",
        "X-Ray": "Not Enabled",
        "Word Wise": "Enabled",
        "Lending": "Enabled",
        "Simoultaneous Device Usage": "Unlimited",
        "Enhanced Typesetting": "Not Enabled ",
        "ISBN-10": "1948302098",
        "ISBN-13": "978-1948302098",
      },
      "url": "https://amzn.to/2Odm4rV",
      "img": "leonardostature_covs.jpg",
      "categories": ["Modern Translations"],
    },
    {
      "id": "6",
      "title": "The Impulse of Renewal for Culture and Science",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Hanna von Maltitz",
      },
      "paperback": {
        "Pages": "149",
        "Product Dimensions": "5.5 x 0.4 x 8.5 inches",
        "ISBN-10": "1948302047",
        "ISBN-13": "978-1948302043",
      },
      "url": "https://amzn.to/2U5g30b",
      "img": "impulse4renewal_covs.jpg",
      "categories": ["Social Science", "Modern Translations"],
    },
    {
      "id": "7",
      "title": "Raphael's Mission in the Light of the Science of the Spirit",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Peter Stebbing",
      },
      "paperback": {
        "Pages": "44",
        "Product Dimensions": "5.5 x 0.1 x 8.5 inches",
        "ISBN-10": "1948302020",
        "ISBN-13": "978-1948302029",
      },
      "url": "https://amzn.to/2tAYXvO",
      "img": "raphaelsmission_covs.jpg",
      "categories": ["Modern Translations"],
    },
    {
      "id": "8",
      "title": "The Social Question",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Hanna von Maltitz",
        "Ilustrator": "Hanna von Maltitz",
      },
      "paperback": {
        "Pages": "158",
        "Publication Date": "December 9, 2018",
        "Product Dimensions": "5.5 x 0.4 x 8.5 inches",
        "ISBN-10": "1791660533",
        "ISBN-13": "978-1791660536",
      },
      "kindle": {
        "Size": "810 KB",
        "Publication Date": "December 9, 2018",
        "Text-to-Speech": "Enabled",
        "X-Ray": "Enabled",
        "Word Wise": "Enabled",
        "Lending": "Enabled",
        "Simoultaneous Device Usage": "Unlimited",
        "Enhanced Typesetting": "Not Enabled",
        "ISBN-10": "1948302012",
        "ISBN-13": "978-1948302012",
      },
      "url": "https://amzn.to/2XkGvFp",
      "img": "thesocialquestion2_covs.jpg",
      "categories": ["Social Science", "Modern Translations"],
    },
    {
      "id": "9",
      "title": "Favela Children",
      "sub-title": "A Brazilian Diary",
      "global": {
        "Author": "Ute Creamer",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Frank Thomas Smith",
      },
      "paperback": {
        "Pages": "",
        "Publication Date": "",
        "Product Dimensions": "",
        "Shipping Weight": "",
        "ISBN-10": "",
        "ISBN-13": "",
      },
      "kindle": {
        "Size": "",
        "Publication Date": "",
        "Text-to-Speech": "",
        "X-Ray": "",
        "Word Wise": "",
        "Lending": "",
        "Simoultaneous Device Usage": "",
        "Enhanced Typesetting": "",
        "ISBN-10": "",
        "ISBN-13": "",
      },
      "url": "",
      "img": "favelachildren_covs.png",
      "categories": ["Social Science"],
    },
    {
      "id": "10",
      "title": "The Magic Mound",
      "global": {
        "Author": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
      },
      "paperback": {
        "Pages": "",
        "Publication Date": "",
        "Product Dimensions": "",
        "Shipping Weight": "",
        "ISBN-10": "",
        "ISBN-13": "",
      },
      "kindle": {
        "Size": "",
        "Publication Date": "",
        "Text-to-Speech": "",
        "X-Ray": "",
        "Word Wise": "",
        "Lending": "",
        "Simoultaneous Device Usage": "",
        "Enhanced Typesetting": "",
        "ISBN-10": "",
        "ISBN-13": "",
      },
      "url": "",
      "img": "magicmound_covs.png",
      "categories": ["Fiction", "Children's Books"],
    },
  ];

  const descriptions = [
    {
      id: 1,
      "long":
        "A reinvigorated translation by Frank Thomas Smith of Steiner's “Basic Issues of the Social Question,” number 23 in the Bibliography of 1961. Available at Amazon.com: https://amzn.to/2P4pMnx<br><br>This work, written late in the life of Rudolf Steiner, makes use of a threefold analysis of the human individual and of human society. Man as an individual, or in a group, functions basically in three modes: thinking/perceiving, feeling/valuing, and willing/planning/acting. A unit of functioning, whether a part of an individual or part of a society has its proper role. Each role needs a certain respect from other areas if it is to function properly. Each role should be appropriately related to the other two roles or functions. In society, the three partitions are: the cultural-spiritual, the production-economic, and the “sphere of rights” including legal rights. As the analysis unfolds, it may be noticed that there is seldom a “pure case” but there are various mixes with one aspect often predominating. The manner in which the three aspects of society relate to the three aspects of the individual is a fascinating and intricate one, and one which has an important bearing on the future of human society.<br><br>This is not another “utopian” dialog, but a practical suggestion concerning details which may be incorporated into society one at a time ... from time to time. These suggestions are as relevant now as they were when Rudolf Steiner brought them forth over 100 years ago, just after the First World Was. At the end of the book, Steiner writes: “... either people will accommodate their thinking to the requirements of reality, or they will have learned nothing from the calamity and will cause innumerable new ones to occur in the future.” History has since proven these words to be prophetic.",
      "short":
        "This work, written late in the life of Rudolf Steiner, makes use of a threefold analysis of the human individual and of human society. Man as an individual, or in a group, functions basically in three modes: thinking/perceiving, feeling/valuing, and willing/planning/acting. A unit of functioning, whether a part of an individual or part of a society has its proper role. Each role needs a certain respect from other areas if it is to function properly...",
    },
    {
      id: 2,
      "long":
        "In content, this translation into English of Rudolf Steiner's lecture on the art historian, author and researcher Herman Grimm, can be said to be a paean to Grimm's wholly original and unorthodox approach to art history. Herman Grimm's work differs substantially from standard, more intellectual approaches, as becomes evident from statements of Herman Grimm quoted here:<br><br>If, by some miracle, Michelangelo were called from the dead, to live among us again, and if I were to meet him, I would humbly stand aside to let him pass: if Raphael came by, I would follow him, to see whether or not I might have the opportunity of hearing a few words from his lips. With Leonardo and Michelangelo, one can confine oneself to reporting what they once were in their day; with Raphael, one has to start from what he is for us today. Concerning the two others, a slight veil has passed over them, but not over Raphael. He belongs among those whose growth is as yet far from being at an end. We may imagine that Raphael will present ever new riddles to future generations of humanity.<br><br>This is a lecture, given by Rudolf Steiner, entitled Die Weltanschauung eines Kulturforschers der Gegenwart, Herman Grimm, und die Geistesforschung and contained in the volume Ergebnisse der Geistesforschung (Results of Spiritual Research) GA 62. The series in which this lecture was given at the Architektenhaus in Berlin, may be said to underline its overall importance for Rudolf Steiner: Held January 16th 1913 subsequent to a lecture January 30th on Raphael. Also known as, Herman Grimm, Contemporary Culture and Spiritual Developments, and Anthroposophy.<br><br>This lecture is the fourth in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. You can research the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home. ",
      "short":
        "In content, this translation into English of Rudolf Steiner's lecture on the art historian, author and researcher Herman Grimm, can be said to be a paean to Grimm's wholly original and unorthodox approach to art history. Herman Grimm's work differs substantially from standard, more intellectual approaches, as becomes evident from statements of Herman Grimm quoted here:",
    },
    {
      id: 3,
      "long":
        "Anthroposophy, also known as Spiritual Science, is not known for fantastic literature, or fiction at all. So how can stories with titles like “Life on Mars,” or “The Girl in the Floppy Hat,” or “To Hunt a Nazi” qualify as anthroposophical. They do not — until now. Therefore, this book is groundbreaking. You may smile at times, even laugh; other stories may cause a lump in your throat, perhaps even a tear or two. Oh, and by the way, fundamentalists are advised not to partake of this fantastical frosting on their anthroposophical cake.Here, then, are thirteen provocative, groundbreaking fictional tales for anthroposophists, and really anyone, to enjoy. By Roberto Fox, as told to Frank Thomas Smith. ",
      "short":
        "Anthroposophy, also known as Spiritual Science, is not known for fantastic literature, or fiction at all. So how can stories with titles like “Life on Mars,” or “The Girl in the Floppy Hat,” or “To Hunt a Nazi” qualify as anthroposophical. They do not — until now. Therefore, this book is groundbreaking. You may smile at times, even laugh; other stories may cause a lump in your throat...",
    },
    {
      id: 4,
      "long":
        "From the contents of this lecture: “Fairy tales and sagas are comparable to a good angel, granted human beings as a companion from birth on their life's wanderings, to be a trustworthy comrade throughout — offering comradeship, and making life inwardly into a truly ensouled fairy tale!<br><br> This is a lecture, given by Rudolf Steiner, entitled Märchendichtungen im Lichte der Geistesforschung, and contained in the volume Ergebnisse der Geistesforschung (Results of Spiritual Research) GA 62. The series in which this lecture was given at the Architektenhaus in Berlin, may be said to underline its overall importance for Rudolf Steiner: held February 6th 1913 subsequent to a lecture January 30th on Raphael, it was followed a week later, on February 13th, by a lecture on Leonardo da Vinci.<br><br>As a bonus, A Mongolian Legend is included. It is from a matinee lecture given by Rudolf Steiner: Mythen und Sagen. Okkulte Zeichen und Symbole (Myths and Legends. Occult Signs and Symbols). From GA 101. Lecture IV, 21st October 1907 in Berlin.<br><br>This lecture is the third in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. You can research the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "From the contents of this lecture: “Fairy tales and sagas are comparable to a good angel, granted human beings as a companion from birth on their life's wanderings, to be a trustworthy comrade throughout — offering comradeship, and making life inwardly into a truly ensouled fairy tale!” ",
    },
    {
      id: 5,
      "long":
        "“The three great masters of the Renaissance [Leonardo, Michelangelo, Raphael] strove to work in the spirit of that age. And the one who already had a kind of seed, I would say, that grew into everything that has come and is still to come since that time was Leonardo.” - Rudolf Steiner, Dornach, November 1, 1916. A single lecture given by Rudolf Steiner at Berlin on February 13th 1913, translated by Peter Stebbing, and edited by James D. Stewart, the e.Librarian at the Rudolf Steiner Archive & e.Lib. It is the eleventh of fourteen lectures in the volume entitled, Results of Spiritual Investigation, published in German as, Ergebnisse der Geistesforschung.<br><br>This lecture is the second in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home. ",
      "short":
        "“The three great masters of the Renaissance [Leonardo, Michelangelo, Raphael] strove to work in the spirit of that age. And the one who already had a kind of seed, I would say, that grew into everything that has come and is still to come since that time was Leonardo.” - Rudolf Steiner, Dornach, November 1, 1916.",
    },
    {
      id: 6,
      "long":
        "This is a First Edition English translation of a series of seven lectures, entitled The Impulse of Renewal for Culture and Science, and published in German as, Erneuerungs-Impuls fuer Kultur und Wissenschaft (Bn/GA/CW Number 81 in the Bibliographical Survey, 1961). This course was organized by the Federation of Anthroposophical University Work and the Berlin Branch of the Anthroposophical Society. It was the aim of the organizers, through lectures by various speakers, to “give an impression of what suggestions in various fields can be given by anthroposophy.” For each course day, Rudolf Steiner gave the introductory lecture. In these lectures, Steiner explains the relationships between Anthroposophy and the natural sciences, philosophy, pedagogy, theology, the social sciences, and linguistics. He also brings to light the biological differences between humans and animals from an anthroposophical perspective.<br><br> Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home. ",
      "short":
        "This is a First Edition English translation of a series of seven lectures, entitled The Impulse of Renewal for Culture and Science, and published in German as, Erneuerungs-Impuls fuer Kultur und Wissenschaft (Bn/GA/CW Number 81 in the Bibliographical Survey, 1961). This course was organized by the Federation of Anthroposophical University Work and the Berlin Branch of the Anthroposophical Society.",
    },
    {
      id: 7,
      "long":
        "This lecture on Raphael points to an ever greater inwardness or “internalizing” of the human soul in the future development of humanity. Steiner's large-format watercolours can be said to be an unmistakable further expression of this. Though it might seem improbable at first to link Raphael's works so directly with the painting impulse of Rudolf Steiner, separated as they are by four hundred years. An underlying relation becomes apparent, nonetheless, despite the manifest contrast. The Madonnas of Raphael will self-evidently never be surpassed. Yet, the future development of art, always “a daughter of the divine,” implies, in Rudolf Steiner's sense, an ongoing spiritualization. We begin to recognize Raphael's relevance for today and for the future. A lecture given by Rudolf Steiner: from Ergebnisse der Geistesforschung. (Some Results of Spiritual Research). Bn/GA/CW 62. Lecture IX, 30th January 1913 in Berlin.<br><br>This unique English translation is the first in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home. ",
      "short":
        "This lecture on Raphael points to an ever greater inwardness or “internalizing” of the human soul in the future development of humanity. Steiner's large-format watercolours can be said to be an unmistakable further expression of this. Though it might seem improbable at first to link Raphael's works so directly with the painting impulse of Rudolf Steiner, separated as they are by four hundred years...",
    },
    {
      id: 8,
      "long":
        "This book is a First Edition, never before translated into English, series of six lectures. Rudolf Steiner gave these lectures early in the year of 1919 at Zurich, Switzerland. Here Steiner proffers ideas to solve the social problems and necessities required by life, by studying the life sciences and social life, and the living conditions of the present-day humans. He expresses how the social will should be the basis of a new scientific order, and what the role of the modern worker should be.These six lectures are a translation from the German edition 'Die soziale Frage,' (Bn/GA/CW Number 328 in the Bibliographical Survey, 1961), published by the Rudolf Steiner-Nachlassverwaltung, Dornach, Switzerland, 1977. They are published as transcripts unrevised by the lecturer. This First English edition was translated by Hanna von Maltitz, and was edited by James D. Stewart, e.Librarian at the 'Rudolf Steiner Archive & e.Lib.' Illustrations and artwork were created by Hanna von Maltitz. Thanks to the Basil Gibaud Memorial Trust, this translation has been made available for everyone. The text of both the printed and eBook editions has numerous links to on-line web content that will enhance the reader/researcher in their understanding of the text: search all lectures, read/research the original German texts, compare the English translation to the original German paragraph by paragraph, and explore other related material. You can research Rudolf Steiner's works on-line ... buy the book to read and study at home.<br><br>Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home. ",
      "short":
        "This book is a First Edition, never before translated into English, series of six lectures. Rudolf Steiner gave these lectures early in the year of 1919 at Zurich, Switzerland. Here Steiner proffers ideas to solve the social problems and necessities required by life, by studying the life sciences and social life, and the living conditions of the present-day humans.",
    },
    {
      id: 9,
      "long":
        "Ute Craemer is an educator and social worker who has dedicated over fifty years of her life to teaching and nurturing the poor children of the favelas (slums) in Brazil. As an experienced Waldorf teacher, she has been able to understand the needs of the children and their families and provide them with the spiritual nourishment they cry out for. Favela Children is a moving and informative account of Ute's Craemer's social work in the favelas and of her personal development. It was originally published in German and went through several editions. It is published here for the first time in English.<br><br>Translated and with an introduction by Frank Thomas Smith. ",
      "short":
        "Ute Craemer is an educator and social worker who has dedicated over fifty years of her life to teaching and nurturing the poor children of the favelas (slums) in Brazil. As an experienced Waldorf teacher, she has been able to understand the needs of the children and their families and provide them with the spiritual nourishment they cry out for. Favela Children is a moving and informative account of Ute's Craemer's social work in the favelas and of her personal development...",
    },
    { id: 10, "long": "", "short": "" },
  ];

  const carouselFunction = () => {
    document.querySelector("#carousel-outer");
    const innerCarousel = document.querySelector("#carousel-inner");
    const bookTemplate = document.querySelector("[data-book-template]");
    const leftArrow = document.querySelector("#arrow-left");
    document.querySelector("#arrow-right");
    const dotsDiv = document.querySelector("#dots");

    innerCarousel.scrollLeft = 0;

    function createBookDivs() {
      innerCarousel.style.gridTemplate = `auto 30px / repeat(${books.length}, 100%) 18px`;
      books.forEach(book => {
        const bookDiv = bookTemplate.content.cloneNode(true);
        const img = bookDiv.querySelector("[data-book-img]");
        const title = bookDiv.querySelector("[data-book-title]");
        const author = bookDiv.querySelector("[data-book-author]");
        const description = bookDiv.querySelector("[data-book-description]");
        bookDiv.querySelector(".book-rectangle").dataset.id = book.id;
        dotsDiv.innerHTML = dotsDiv.innerHTML + '<span class="dots">.</span>';
        img.src = `/img/${book.img}`;
        title.innerText = book.title;
        author.innerText = book.global.Author;
        innerCarousel.appendChild(bookDiv);
        if (descriptions[book.id - 1]) {
          description.innerHTML = descriptions[book.id - 1].short;
        }
      });
    }

    let intervalBooks = [];
    let isSet = false;
    let initialValue = 0;

    function scrollOneBook(pixels) {
      const selectedDot = document.querySelector(".selected-dot");
      initialValue += pixels;
      if (initialValue >= innerCarousel.scrollWidth) {
        selectedDot.classList.remove("selected-dot");
        dotsDiv.querySelector("span:nth-child(1)").classList.add("selected-dot");
        innerCarousel.scroll({
          left: 0,
          behavior: "smooth",
        });
        initialValue = 0;
      }

      innerCarousel.scroll({
        left: initialValue,
        behavior: "smooth",
      });

      selectedDot.classList.remove("selected-dot");
      if (selectedDot.nextSibling) {
        selectedDot.nextSibling.classList.add("selected-dot");
      }
    }

    const scrollBooks = pixels => {
      isSet = true;
      intervalBooks = setInterval(scrollOneBook, 10000, pixels);
      innerCarousel.dataset.interval = intervalBooks;
    };
    const stopScroll = () => {
      isSet = false;
      clearInterval(innerCarousel.dataset.interval);
    };

    createBookDivs();

    document.querySelectorAll(".dots");
    dotsDiv.querySelector("span:nth-child(1)").classList.add("selected-dot");

    scrollBooks(innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10);
    //arrows event-listener

    document.addEventListener("click", e => {
      const selectedDot = document.querySelector(".selected-dot");
      if (!e.target.matches("[data-arrow]")) return
      if (isSet == true) {
        stopScroll();
      } else {
        clearTimeout(leftArrow.dataset.interval);
      }
      if (e.target.matches("#arrow-left")) {
        if (selectedDot.previousSibling) {
          selectedDot.classList.remove("selected-dot");
          selectedDot.previousSibling.classList.add("selected-dot");
        }
        if (initialValue > 0) {
          initialValue -=
            innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10;
        }
      } else {
        if (selectedDot.nextSibling) {
          selectedDot.classList.remove("selected-dot");
          selectedDot.nextSibling.classList.add("selected-dot");
        }
        if (
          initialValue <
          innerCarousel.scrollWidth -
            innerCarousel.querySelector("div:nth-child(1)").offsetWidth
        ) {
          initialValue +=
            innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10;
        }
      }

      innerCarousel.scroll({
        left: initialValue,
        behavior: "smooth",
      });

      let timerArrows = setTimeout(
        scrollBooks,
        25000,
        innerCarousel.querySelector("div:nth-child(1)").offsetWidth + 10
      );
      leftArrow.dataset.interval = timerArrows;
    });
  };

  function gridFunction() {
    const bookGrid = document.querySelector("#books-grid-inner");
    const allBooksLink = document.querySelector("#all-books");
    //generate authors/categories links
    const authorsDiv = document.querySelector("#authors-div");
    const categoriesDiv = document.querySelector("#categories-div");
    let authorsArray = [];
    let categoriesArray = [];
    const addAuthorToArray = () => {
      books.forEach(book => {
        if (authorsArray.indexOf(book.global.Author) >= 0) return
        authorsArray.push(book.global.Author);
      });
    };
    function addCategoryToArray() {
      books.forEach(book => {
        book.categories.forEach(category => {
          if (categoriesArray.indexOf(category) >= 0) return
          categoriesArray.push(category);
        });
      });
    }
    addCategoryToArray();
    addAuthorToArray();

    function addToDropdownMenu(array) {
      let tabIndexIteratorAuthor = 5;
      let tabIndexIteratorCategory = 7;
      array.forEach(element => {
        const link = document.createElement("div");
        link.innerText = element;
        link.id = element;
        link.classList.add("highlight");
        if (array == authorsArray) {
          link.tabIndex = tabIndexIteratorAuthor;
          tabIndexIteratorAuthor++;
          link.classList.add("authors-link");
          authorsDiv.appendChild(link);
        } else {
          link.tabIndex = tabIndexIteratorCategory;
          tabIndexIteratorCategory++;
          link.classList.add("categories-link");
          categoriesDiv.appendChild(link);
        }
      });
    }
    addToDropdownMenu(authorsArray);
    addToDropdownMenu(categoriesArray);

    //event listeners
    document.addEventListener("click", e => {
      if (!e.target.matches(".authors-link")) return
      bookGrid.textContent = "";
      displayByAuthor(e.target.id, selectedPaterns.right);
    });
    document.addEventListener("click", e => {
      if (!e.target.matches(".categories-link")) return
      bookGrid.textContent = "";
      displayByCategories(e.target.id, selectedPaterns.right);
    });
    allBooksLink.addEventListener("click", () => {
      displayAllBooks(selectedPaterns.right);
    });

    //order alphabetically or inverse alphabetically
    const sortAZZA = (array, AZZA) => {
      const tempArray = [...array];
      tempArray.sort((a, b) => {
        if (a.title > b.title) {
          if (AZZA === "a-z") return 1
          if (AZZA === "z-a") return -1
        }
        if (a.title < b.title) {
          if (AZZA === "a-z") return -1
          if (AZZA === "z-a") return 1
        }
        return 0
      });
      return tempArray
    };

    const selectedPaterns = {
      left: ["all"],
      right: "a-z",
    };
    //az-za buttons listener
    document.addEventListener("click", e => {
      if (!e.target.matches(".azzaBtn")) return
      selectedPaterns.right = e.target.id;
      if (selectedPaterns.left.length < 2) {
        displayAllBooks(selectedPaterns.right);
      } else if (selectedPaterns.left[0] === "author") {
        displayByAuthor(selectedPaterns.left[1], selectedPaterns.right);
      } else if (selectedPaterns.left[0] === "categories") {
        displayByCategories(selectedPaterns.left[1], selectedPaterns.right);
      }
    });

    //render books function

    function displayAllBooks(sortUpOrDown) {
      if (bookGrid.hasChildNodes) {
        bookGrid.textContent = "";
      }
      randomFeaturedBook(sortAZZA(books, sortUpOrDown)).forEach(book => {
        displayBy(book);
      });
      selectedPaterns.left = ["all"];
    }

    function displayByAuthor(id, sortUpOrDown) {
      if (bookGrid.hasChildNodes) {
        bookGrid.textContent = "";
      }
      const thisCategoryArray = [];
      sortAZZA(books, sortUpOrDown).forEach(book => {
        if (id == book.global.Author) {
          thisCategoryArray.push(book);
        }
      });
      randomFeaturedBook(thisCategoryArray).forEach(book => {
        if (id == book.global.Author) {
          displayBy(book);
        }
      });
      selectedPaterns.left = ["author", id];
    }

    function displayByCategories(id, sortUpOrDown) {
      if (bookGrid.hasChildNodes) {
        bookGrid.textContent = "";
      }
      const thisCategoryArray = [];
      sortAZZA(books, sortUpOrDown).forEach(book => {
        book.categories.forEach(category => {
          if (id == category) {
            thisCategoryArray.push(book);
          }
        });
      });
      randomFeaturedBook(thisCategoryArray).forEach(book => {
        book.categories.forEach(category => {
          if (id == category) {
            displayBy(book);
          }
        });
      });
    }

    function randomFeaturedBook(array) {
      if (array.length <= 5) return array
      const arrayTemp = [...array];
      const randomBook = arrayTemp.splice(
        Math.floor(Math.random() * arrayTemp.length),
        1
      );
      arrayTemp.splice(4, 0, randomBook[0]);
      return arrayTemp
    }

    function displayBy(element) {
      const bookImgDiv = document.createElement("div");
      bookImgDiv.classList.add("book-img-div");
      const bookImg = document.createElement("img");
      bookImg.src = `/img/${element.img}`;
      bookImg.classList.add("book-img");
      bookImgDiv.appendChild(bookImg);
      bookImgDiv.dataset.id = element.id;
      bookImgDiv.dataset.bookLink = "";
      bookImgDiv.tabIndex = "0";
      bookGrid.appendChild(bookImgDiv);
    }

    displayAllBooks(selectedPaterns.right);
  }

  const openFullDescription = () => {
    const documentBody = document.querySelector("body");
    const modal = document.querySelector("#modal");
    const modalInner = document.querySelector("#modal-inner");
    const modalCloseBtn = document.querySelector("#close-modal-btn");

    document.addEventListener("click", e => {
      if (!e.target.closest("[data-book-link]")) return
      const parent = e.target.closest("[data-book-link]");
      const template = document.querySelector("[data-full-desc-template]");
      const newTemplate = template.content.cloneNode(true);
      modalInner.appendChild(newTemplate);
      books.forEach(book => {
        if (parent.dataset.id == book.id) {
          const img = modalInner.querySelector("[data-img]");
          img.src = `/img/${book.img}`;
          const title = modalInner.querySelector("[data-title]");
          title.innerText = book.title;
          const description = modalInner.querySelector("[data-description]");
          description.innerHTML = descriptions[book.id - 1].long;
          const btn = modalInner.querySelector("[data-buy-btn]");
          btn.href = book.url;
          const globalColOne = modalInner.querySelector(
            "[data-global-specs] .col-1"
          );
          const globalColTwo = modalInner.querySelector(
            "[data-global-specs] .col-2"
          );
          const paperbackColOne = modalInner.querySelector(
            "[data-paperback-specs] .col-1"
          );
          const paperbackColTwo = modalInner.querySelector(
            "[data-paperback-specs] .col-2"
          );
          const kindleColOne = modalInner.querySelector(
            "[data-kindle-specs] .col-1"
          );
          const kindleColTwo = modalInner.querySelector(
            "[data-kindle-specs] .col-2"
          );
          let globalArr;
          let paperbackArr;
          let kindleArr;
          const asignArrays = () => {
            if (book.kindle) kindleArr = Object.keys(book.kindle);
            if (book.paperback) paperbackArr = Object.keys(book.paperback);
            globalArr = Object.keys(book.global);
          };
          asignArrays();

          addToColOne(globalArr, globalColOne);
          addToColOne(paperbackArr, paperbackColOne);
          addToColOne(kindleArr, kindleColOne);
          addToColTwo(globalArr, globalColTwo, book.global);
          addToColTwo(paperbackArr, paperbackColTwo, book.paperback);
          addToColTwo(kindleArr, kindleColTwo, book.kindle);

          modal.classList.remove("hidden");
          documentBody.classList.add("no-overflow");
        }
      });
    });

    modalCloseBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      documentBody.classList.remove("no-overflow");
      modalInner.textContent = "";
    });

    document.body.addEventListener("keydown", e => {
      if (e.key != "Escape") return
      modal.classList.add("hidden");
      documentBody.classList.remove("no-overflow");
      modalInner.textContent = "";
    });

    const addToColOne = (array, div) => {
      if (!array) return
      array.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.innerText = item + ":";
        div.appendChild(paragraph);
      });
    };
    const addToColTwo = (array, div, object) => {
      if (!array) return
      array.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.innerText = object[item];
        div.appendChild(paragraph);
      });
    };
  };

  const paintings = [
    {
      "id": "1",
      "title": "Community Life",
      "artist": "Maltitz, Hanna von",
      "year": "2011",
      "material": "Oil on canvasboard",
      "dimensions": "50x70 cm",
      "url": "/img/header/maltitz-community-life.jpg",
    },
    {
      "id": "2",
      "title": "Trial By Fire",
      "artist": "Maltitz, Hanna von",
      "year": "2013",
      "material": "Oil on canvas",
      "dimensions": "50x70 cm",
      "url": "/img/header/maltitz-trial-by-fire.jpg",
    },
    {
      "id": "3",
      "title": "Fairy Tale",
      "artist": "Gold, Monica",
      "url": "/img/header/gold-fairy-tale.jpg",
    },
    {
      "id": "4",
      "title": "Ephesus II",
      "artist": "Gold, Monica",
      "material": "Watercolor",
      "url": "/img/header/gold-ephesus-ii.jpg",
    },
    {
      "id": "5",
      "title": "Listening",
      "artist": "Sturmheit, Igor",
      "year": "2012",
      "url": "/img/header/sturmheit-listening.jpg",
    },
    {
      "id": "6",
      "title": "First Goetheanum",
      "artist": "Linde, Hermann",
      "material": "Watercolor",
      "url": "/img/header/linde-first-goetheanum.jpg",
    },
  ];

  function rotateHeaderImages() {
    const randomPainting = Math.floor(Math.random() * paintings.length);
    const header = document.querySelector("#header");
    const footer = document.querySelector("#footer");
    const middle = document.querySelector("#background-div");
    header.style.backgroundImage = `url(${paintings[randomPainting].url})`;
    footer.style.backgroundImage = `url(${paintings[randomPainting].url})`;
    middle.style.backgroundImage = `url(${paintings[randomPainting].url})`;
  }

  carouselFunction();
  gridFunction();
  openFullDescription();
  rotateHeaderImages();

}());