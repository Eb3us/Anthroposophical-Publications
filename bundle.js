(function () {
  'use strict';

  const books = [
    {
      "id": "1",
      "title": "Toward a Threefold Society",
      "tsort": "Toward Threefold Society",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "176",
        "publication date": "December 10, 2019",
        "dimensions": "5.5 x 0.4 x 8.5 inches",
        "shipping weight": "11.6 ounces",
        "ISBN-10": "1-948302-16-6",
        "ISBN-13": "978-1-948302-16-6",
        "url": "https://amzn.to/2P4pMnx",
      },
      "hardcover": {
        "type": "Hardcover",
        "pages": "176",
        "publication date": "September 10, 2021",
        "dimensions": "5.5 x 0.4 x 8.5 inches",
        "shipping weight": "11.6 ounces",
        "ISBN-10": "1-948302-19-7",
        "ISBN-13": "978-1-948302-19-7",
        "url": "https://amzn.to/3kEOA52",
      },
      "kindle": {
        "type": "Kindle",
        "size": "999kb",
        "publication date": "December 11, 2019",
        "text-to-speech": "enabled",
        "x-ray": "not enabled",
        "word wise": "enabled",
        "lending": "enabled",
        "simultaneous device usage": "unlimited",
        "enhanced typesetting": "enabled",
        "ISBN-10": "1-948302-17-3",
        "ISBN-13": "978-1-948302-17-3",
        "url": "https://amzn.to/3ChR92P",
      },
      "categories": [
        "Social Science",
        "Spiritual Science",
        "Modern Translations",
      ],
      "img": "towthreesociety_covs.jpg",
      "online": "",
      "carousel": true,
    },
    {
      "id": "2",
      "title": "The Worldview of Herman Grimm",
      "tsort": "Grimm Herman",
      "sub-title": "in Relation to Spiritual Science",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Peter Stebbing",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "52",
        "publication date": "November 13, 2019",
        "dimensions": "5.5 x 0.13 x 8.5 inches",
        "ISBN-10": "1-948302-12-8",
        "ISBN-13": "978-1-948302-12-8",
        "url": "https://amzn.to/36rj94r",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "",
      },
      "img": "hermangrimm01_covs.jpg",
      "categories": ["Spiritual Science", "Modern Translations"],
      "online":
        "https://wn.rsarchive.org/Lectures/GA062/English/eLib2019b/GrimmH_index.html",
      "carousel": true,
    },
    {
      "id": "3",
      "title": "Anthroposophical Fantasies",
      "tsort": "Anthroposophical Fantasies",
      "global": {
        "Author": "Frank Thomas Smith",
        "Alter Ego": "Roberto Fox",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Ilustrator": "Celina MacKern",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "232",
        "Publication Date": "August 16, 2019",
        "Product Dimensions": "5.5 x 0.6 x 8.5 inches",
        "Shipping Weight": "12.8 ounces",
        "ISBN-10": "1948302101",
        "ISBN-13": "978-1948302104",
        "url": "https://amzn.to/2Qcs1ba",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "https://amzn.to/3HpHlHR",
      },
      "img": "AnthroFantasies_covs.jpg",
      "categories": ["Fantasy", "Fiction"],
      "online": "",
      "carousel": true,
    },
    {
      "id": "4",
      "title": "Fairy Tales",
      "tsort": "Fairy Tales",
      "sub-title":
        "in the Light of Spiritual Investigation and A Mongolian Legend:",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Peter Stebbing",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "42",
        "Publication Date": "August 21, 2019",
        "Product Dimensions": "5.5 x 0.1 x 8.5 inches",
        "ISBN-10": "1948302128",
        "ISBN-13": "978-1948302128",
        "url": "https://amzn.to/3kI6xQ3",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "https://amzn.to/3lHrKZ2",
      },
      "img": "FairyTales1_covs.jpg",
      "categories": ["Spiritual Science", "Modern Translations"],
      "online":
        "https://wn.rsarchive.org/Lectures/GA062/English/eLib2019a/FairTl_index.html",
      "carousel": true,
    },
    {
      "id": "5",
      "title": "Leonardo's Spiritual Stature",
      "tsort": "Leonardo's Spiritual Stature",
      "sub-title": "at the Turning Point of Modern Times",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Peter Stebbing",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Ilustrator": "Leonardo da Vinci",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "40",
        "Publication Date": "June 26, 2019",
        "Product Dimensions": "5.5 x 0.1 x 8.5 inches",
        "ISBN-10": "1948302098",
        "ISBN-13": "978-1948302098",
        "url": "https://amzn.to/2Odm4rV",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "https://amzn.to/2YQ5E05",
      },
      "img": "leonardostature_covs.jpg",
      "categories": ["Spiritual Science", "Modern Translations"],
      "online":
        "https://wn.rsarchive.org/Lectures/GA062/English/eLib2019/Leondo_index.html",
      "carousel": true,
    },
    {
      "id": "6",
      "title": "The Impulse of Renewal for Culture and Science",
      "tsort": "Impulse Renewal Culture Science",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Hanna von Maltitz",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "149",
        "Product Dimensions": "5.5 x 0.4 x 8.5 inches",
        "ISBN-10": "1948302047",
        "ISBN-13": "978-1948302043",
        "url": "https://amzn.to/2U5g30b",
      },
      "img": "impulse4renewal_covs.jpg",
      "categories": [
        "Social Science",
        "Spiritual Science",
        "Modern Translations",
      ],
      "online":
        "https://wn.rsachive.org/Lectures/GA081/English/eLib2018/ImpRen_index.html",
      "carousel": true,
    },
    {
      "id": "7",
      "title": "Raphael's Mission",
      "tsort": "Raphael's Mission",
      "sub-title": "in the Light of the Science of the Spirit",
      "global": {
        "Author": "Rudolf Steiner",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Translator": "Peter Stebbing",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "44",
        "Product Dimensions": "5.5 x 0.1 x 8.5 inches",
        "ISBN-10": "1948302020",
        "ISBN-13": "978-1948302029",
        "url": "https://amzn.to/2tAYXvO",
      },
      "img": "raphaelsmission_covs.jpg",
      "categories": ["Spiritual Science", "Modern Translations"],
      "online":
        "https://wn.rsarchive.org/Lectures/GA062/English/eLib2018/RapMis_index.html",
    },
    {
      "id": "8",
      "title": "The Social Question",
      "tsort": "Social Question",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Hanna von Maltitz",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Ilustrator": "Hanna von Maltitz",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "158",
        "Publication Date": "December 9, 2018",
        "Product Dimensions": "5.5 x 0.4 x 8.5 inches",
        "ISBN-10": "1791660533",
        "ISBN-13": "978-1791660536",
        "url": "https://amzn.to/2XkGvFp",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "https://amzn.to/326hcxC",
      },
      "img": "thesocialquestion2_covs.jpg",
      "categories": [
        "Social Science",
        "Spiritual Science",
        "Modern Translations",
      ],
      "online":
        "https://wn.rsarchive.org/Lectures/GA328/English/eLib2017/SoQues_index.html",
    },
    {
      "id": "9",
      "title": "Favela Children",
      "tsort": "Favela Children",
      "sub-title": "A Brazilian Diary",
      "global": {
        "Author": "Ute Creamer",
        "Translator": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "",
        "Publication Date": "",
        "Product Dimensions": "",
        "Shipping Weight": "",
        "ISBN-10": "",
        "ISBN-13": "",
        "url": "",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "",
      },
      "img": "favelachildren_covs.png",
      "categories": ["Social Science", "Coming Soon"],
      "online": "",
    },
    {
      "id": "10",
      "title": "The Magic Mound",
      "tsort": "Magic Mound",
      "global": {
        "Author": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Anthroposophical Publications",
      },
      "paperback": {
        "type": "Paperback",
        "Pages": "",
        "Publication Date": "",
        "Product Dimensions": "",
        "Shipping Weight": "",
        "ISBN-10": "",
        "ISBN-13": "",
        "url": "",
      },
      "kindle": {
        "type": "Kindle",
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
        "url": "",
      },
      "img": "magicmound_covs.png",
      "categories": ["Fiction", "Children's Books", "Coming Soon"],
      "online": "",
    },
    {
      "id": "11",
      "title": "The History and Actuality of Imperialism",
      "tsort": "History Actuality Imperialism",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "53",
        "publication date": "August 17, 2020",
        "dimensions": "5.5 x 0.2 x 8.5 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "1-948302-20-3",
        "ISBN-13": "978-1-948302-20-3",
        "url": "",
      },
      "kindle": {
        "type": "eBook",
        "size": "702kb",
        "publication date": "December 11, 2019",
        "text-to-speech": "enabled",
        "x-ray": "not enabled",
        "word wise": "enabled",
        "lending": "enabled",
        "simultaneous device usage": "unlimited",
        "enhanced typesetting": "enabled",
        "ISBN-10": "1-948302-20-0",
        "ISBN-13": "978-1-948302-20-0",
        "url": "https://amzn.to/3jPhtLQ",
      },
      "categories": [
        "Social Science",
        "Spiritual Science",
        "Modern Translations",
      ],
      "img": "the-history-and-actuality-of-imperialism.jpg",
      "online":
        "https://wn.rsarchive.org/Lectures/GA196/English/SCR2011/HisImp_index.html",
    },
    {
      "id": "12",
      "title":
        "Esoteric Lessons for the First Class of the Free School for Spiritual Science at the Goetheanum (Volume One)",
      "tsort":
        "Esoteric Lessons First Class Free School Spiritual Science Goetheanum Volume 1",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Anthroposophical Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "118",
        "publication date": "September 15, 2021",
        "dimensions": "6 x 0.5 x 9 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "1-948302-28-9",
        "ISBN-13": "978-1-948302-28-9",
        "url": "",
      },
      "hardcover": {
        "type": "Hardcover",
        "pages": "118",
        "publication date": "September 15, 2021",
        "dimensions": "6 x 0.5 x 9 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "1-948302-45-6",
        "ISBN-13": "978-1-948302-45-6",
        "url": "",
      },
      "kindle": {
        "type": "eBook",
        "size": "1971kb",
        "publication date": "September 15, 2021",
        "text-to-speech": "enabled",
        "x-ray": "not enabled",
        "word wise": "enabled",
        "lending": "enabled",
        "simultaneous device usage": "unlimited",
        "enhanced typesetting": "enabled",
        "ISBN-10": "1-948302-27-2",
        "ISBN-13": "978-1-948302-27-2",
        "url": "https://amzn.to/2WXah7R",
      },
      "categories": ["Philosophy", "Spiritual Science", "Modern Translations"],
      "img": "FirstClass09b_cov.jpg",
      "online":
        "https://wn.rsarchive.org/Lectures/GA270/English/eLib2018a/FstCs1_index.html",
    },
    {
      "id": "13",
      "title":
        "Esoteric Lessons for the First Class of the Free School for Spiritual Science at the Goetheanum (Volume Two)",
      "tsort":
        "Esoteric Lessons First Class Free School Spiritual Science Goetheanum Volume 2",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Anthroposophical Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "121",
        "publication date": "November 15, 2021",
        "dimensions": "6 x 0.5 x 9 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "1-948302-30-2",
        "ISBN-13": "978-1-948302-30-2",
        "url": "",
      },
      "hardcover": {
        "type": "Hardcover",
        "pages": "121",
        "publication date": "November 15, 2021",
        "dimensions": "6 x 0.5 x 9 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "1-948302-31-9",
        "ISBN-13": "978-1-948302-31-9",
        "url": "",
      },
      "kindle": {
        "type": "eBook",
        "size": "1971kb",
        "publication date": "November 15, 2021",
        "text-to-speech": "enabled",
        "x-ray": "not enabled",
        "word wise": "enabled",
        "lending": "enabled",
        "simultaneous device usage": "unlimited",
        "enhanced typesetting": "enabled",
        "ISBN-10": "1-948302-29-6",
        "ISBN-13": "978-1-948302-29-6",
        "url": "https://amzn.to/2WXah7R",
      },
      "categories": [
        "Philosophy",
        "Spiritual Science",
        "Modern Translations",
        "Coming Soon",
      ],
      "img": "FirstClassV2-01a_cov.jpg",
      "online":
        "https://wn.rsarchive.org/Lectures/GA270/English/eLib2018b/FstCs2_index.html",
    },
    {
      "id": "14",
      "title":
        "Esoteric Lessons for the First Class of the Free School for Spiritual Science at the Goetheanum (Volume Three)",
      "tsort":
        "Esoteric Lessons First Class Free School Spiritual Science Goetheanum Volume 3",
      "global": {
        "Author": "Rudolf Steiner",
        "Translator": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Anthroposophical Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "116",
        "publication date": "December 15, 2021",
        "dimensions": "6 x 0.5 x 9 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "n/a",
        "ISBN-13": "n/a",
        "url": "",
      },
      "hardcover": {
        "type": "Hardcover",
        "pages": "116",
        "publication date": "December 15, 2021",
        "dimensions": "6 x 0.5 x 9 inches",
        "shipping weight": "8.6 ounces",
        "ISBN-10": "n/a",
        "ISBN-13": "n/a",
        "url": "",
      },
      "kindle": {
        "type": "eBook",
        "size": "1971kb",
        "publication date": "December 15, 2021",
        "text-to-speech": "enabled",
        "x-ray": "not enabled",
        "word wise": "enabled",
        "lending": "enabled",
        "simultaneous device usage": "unlimited",
        "enhanced typesetting": "enabled",
        "ISBN-10": "n/a",
        "ISBN-13": "n/a",
        "url": "https://amzn.to/2WXah7R",
      },
      "categories": [
        "Philosophy",
        "Spiritual Science",
        "Modern Translations",
        "Coming Soon",
      ],
      "img": "FirstClassV3-01b_cov.jpg",
      "online":
        "https://wn.rsarchive.org/Lectures/GA270/English/eLib2018c/FstCs3_index.html",
    },
    {
      "id": "15",
      "title": "Artemis and the Artemision",
      "tsort": "Artemis Artemision",
      "sub-title": "the Mystery Centre at Ephesus",
      "global": {
        "Author": "Peter Stebbing",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Rudolf Steiner Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "28",
        "publication date": "November 10, 2021",
        "dimensions": "8.5 x 0.13 x 11.0 inches",
        "ISBN-10": "1-948302-18-0",
        "ISBN-13": "978-1-948302-18-0",
        "url": "",
      },
      "img": "ArtemisionCoverFront01.jpg",
      "categories": ["Social Science", "Coming Soon"],
      "online": "",
    },
    {
      "id": "16",
      "title": "Journey to the Stars",
      "tsort": "Journey Stars",
      "sub-title": "",
      "global": {
        "Author": "Frank Thomas Smith",
        "Editor": "James D. Stewart",
        "Language": "English",
        "Publisher": "Anthroposophical Publications",
      },
      "paperback": {
        "type": "Paperback",
        "pages": "122",
        "publication date": "December 15, 2021",
        "dimensions": "5.5 x 0.13 x 8.5 inches",
        "ISBN-10": "n/a",
        "ISBN-13": "n/a",
        "url": "",
      },
      "img": "journey-cov.jpg",
      "categories": ["Fiction", "Children's Books", "Coming Soon"],
      "online": "",
    },
  ];

  const descriptions = [
    {
      id: 1,
      "long":
        "A reinvigorated translation by Frank Thomas Smith of Steiner's “Basic Issues of the Social Question,” number 23 in the Bibliography of 1961. Available at Amazon.com: https://amzn.to/2P4pMnx<br><br>This work, written late in the life of Rudolf Steiner, makes use of a threefold analysis of the human individual and of human society. Man as an individual, or in a group, functions basically in three modes: thinking/perceiving, feeling/valuing, and willing/planning/acting. A unit of functioning, whether a part of an individual or part of a society has its proper role. Each role needs a certain respect from other areas if it is to function properly. Each role should be appropriately related to the other two roles or functions. In society, the three partitions are: the cultural-spiritual, the production-economic, and the “sphere of rights” including legal rights. As the analysis unfolds, it may be noticed that there is seldom a “pure case” but there are various mixes with one aspect often predominating. The manner in which the three aspects of society relate to the three aspects of the individual is a fascinating and intricate one, and one which has an important bearing on the future of human society.<br><br>This is not another “utopian” dialog, but a practical suggestion concerning details which may be incorporated into society one at a time ... from time to time. These suggestions are as relevant now as they were when Rudolf Steiner brought them forth over 100 years ago, just after the First World Was. At the end of the book, Steiner writes: “... either people will accommodate their thinking to the requirements of reality, or they will have learned nothing from the calamity and will cause innumerable new ones to occur in the future.” History has since proven these words to be prophetic.",
      "short":
        "This work, written late in the life of Rudolf Steiner, makes use of a threefold analysis of the human individual and of human society. Man as an individual, or in a group, functions basically in three modes: thinking/perceiving, feeling/valuing, and willing/planning/acting. A unit of functioning, whether a part of an individual or part of a society has its proper role. Each role needs a certain respect from other areas if it is to function properly ...",
    },
    {
      id: 2,
      "long":
        "In content, this translation into English of Rudolf Steiner's lecture on the art historian, author and researcher Herman Grimm, can be said to be a paean to Grimm's wholly original and unorthodox approach to art history. Herman Grimm's work differs substantially from standard, more intellectual approaches, as becomes evident from statements of Herman Grimm quoted here:<br><br>If, by some miracle, Michelangelo were called from the dead, to live among us again, and if I were to meet him, I would humbly stand aside to let him pass: if Raphael came by, I would follow him, to see whether or not I might have the opportunity of hearing a few words from his lips. With Leonardo and Michelangelo, one can confine oneself to reporting what they once were in their day; with Raphael, one has to start from what he is for us today. Concerning the two others, a slight veil has passed over them, but not over Raphael. He belongs among those whose growth is as yet far from being at an end. We may imagine that Raphael will present ever new riddles to future generations of humanity.<br><br>This is a lecture, given by Rudolf Steiner, entitled Die Weltanschauung eines Kulturforschers der Gegenwart, Herman Grimm, und die Geistesforschung and contained in the volume Ergebnisse der Geistesforschung (Results of Spiritual Research) GA 62. The series in which this lecture was given at the Architektenhaus in Berlin, may be said to underline its overall importance for Rudolf Steiner: Held January 16th 1913 subsequent to a lecture January 30th on Raphael. Also known as, Herman Grimm, Contemporary Culture and Spiritual Developments, and Anthroposophy.<br><br>This lecture is the fourth in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. You can research the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "In content, this translation into English of Rudolf Steiner's lecture on the art historian, author and researcher Herman Grimm, can be said to be a paean to Grimm's wholly original and unorthodox approach to art history. Herman Grimm's work differs substantially from standard, more intellectual approaches, as becomes evident from statements of Herman Grimm quoted here:",
    },
    {
      id: 3,
      "long":
        "Anthroposophy, also known as Spiritual Science, is not known for fantastic literature, or fiction at all. So how can stories with titles like “Life on Mars,” or “The Girl in the Floppy Hat,” or “To Hunt a Nazi” qualify as anthroposophical. They do not — until now. Therefore, this book is groundbreaking. You may smile at times, even laugh; other stories may cause a lump in your throat, perhaps even a tear or two. Oh, and by the way, fundamentalists are advised not to partake of this fantastical frosting on their anthroposophical cake.Here, then, are thirteen provocative, groundbreaking fictional tales for anthroposophists, and really anyone, to enjoy. By Roberto Fox, as told to Frank Thomas Smith.",
      "short":
        "Anthroposophy, also known as Spiritual Science, is not known for fantastic literature, or fiction at all. So how can stories with titles like “Life on Mars,” or “The Girl in the Floppy Hat,” or “To Hunt a Nazi” qualify as anthroposophical. They do not — until now. Therefore, this book is groundbreaking. You may smile at times, even laugh; other stories may cause a lump in your throat ...",
    },
    {
      id: 4,
      "long":
        "From the contents of this lecture: “Fairy tales and sagas are comparable to a good angel, granted human beings as a companion from birth on their life's wanderings, to be a trustworthy comrade throughout — offering comradeship, and making life inwardly into a truly ensouled fairy tale!<br><br> This is a lecture, given by Rudolf Steiner, entitled Märchendichtungen im Lichte der Geistesforschung, and contained in the volume Ergebnisse der Geistesforschung (Results of Spiritual Research) GA 62. The series in which this lecture was given at the Architektenhaus in Berlin, may be said to underline its overall importance for Rudolf Steiner: held February 6th 1913 subsequent to a lecture January 30th on Raphael, it was followed a week later, on February 13th, by a lecture on Leonardo da Vinci.<br><br>As a bonus, A Mongolian Legend is included. It is from a matinee lecture given by Rudolf Steiner: Mythen und Sagen. Okkulte Zeichen und Symbole (Myths and Legends. Occult Signs and Symbols). From GA 101. Lecture IV, 21st October 1907 in Berlin.<br><br>This lecture is the third in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. You can research the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "From the contents of this lecture: “Fairy tales and sagas are comparable to a good angel, granted human beings as a companion from birth on their life's wanderings, to be a trustworthy comrade throughout — offering comradeship, and making life inwardly into a truly ensouled fairy tale!”",
    },
    {
      id: 5,
      "long":
        "“The three great masters of the Renaissance [Leonardo, Michelangelo, Raphael] strove to work in the spirit of that age. And the one who already had a kind of seed, I would say, that grew into everything that has come and is still to come since that time was Leonardo.” - Rudolf Steiner, Dornach, November 1, 1916. A single lecture given by Rudolf Steiner at Berlin on February 13th 1913, translated by Peter Stebbing, and edited by James D. Stewart, the e.Librarian at the The e.Lib, Inc. It is the eleventh of fourteen lectures in the volume entitled, Results of Spiritual Investigation, published in German as, Ergebnisse der Geistesforschung.<br><br>This lecture is the second in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "“The three great masters of the Renaissance [Leonardo, Michelangelo, Raphael] strove to work in the spirit of that age. And the one who already had a kind of seed, I would say, that grew into everything that has come and is still to come since that time was Leonardo.” - Rudolf Steiner, Dornach, November 1, 1916.",
    },
    {
      id: 6,
      "long":
        "This is a First Edition English translation of a series of seven lectures, entitled The Impulse of Renewal for Culture and Science, and published in German as, Erneuerungs-Impuls fuer Kultur und Wissenschaft (Bn/GA/CW Number 81 in the Bibliographical Survey, 1961). This course was organized by the Federation of Anthroposophical University Work and the Berlin Branch of the Anthroposophical Society. It was the aim of the organizers, through lectures by various speakers, to “give an impression of what suggestions in various fields can be given by anthroposophy.” For each course day, Rudolf Steiner gave the introductory lecture. In these lectures, Steiner explains the relationships between Anthroposophy and the natural sciences, philosophy, pedagogy, theology, the social sciences, and linguistics. He also brings to light the biological differences between humans and animals from an anthroposophical perspective.<br><br> Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "This is a First Edition English translation of a series of seven lectures, entitled The Impulse of Renewal for Culture and Science, and published in German as, Erneuerungs-Impuls fuer Kultur und Wissenschaft (Bn/GA/CW Number 81 in the Bibliographical Survey, 1961). This course was organized by the Federation of Anthroposophical University Work and the Berlin Branch of the Anthroposophical Society.",
    },
    {
      id: 7,
      "long":
        "This lecture on Raphael points to an ever greater inwardness or “internalizing” of the human soul in the future development of humanity. Steiner's large-format watercolours can be said to be an unmistakable further expression of this. Though it might seem improbable at first to link Raphael's works so directly with the painting impulse of Rudolf Steiner, separated as they are by four hundred years. An underlying relation becomes apparent, nonetheless, despite the manifest contrast. The Madonnas of Raphael will self-evidently never be surpassed. Yet, the future development of art, always “a daughter of the divine,” implies, in Rudolf Steiner's sense, an ongoing spiritualization. We begin to recognize Raphael's relevance for today and for the future. A lecture given by Rudolf Steiner: from Ergebnisse der Geistesforschung. (Some Results of Spiritual Research). Bn/GA/CW 62. Lecture IX, 30th January 1913 in Berlin.<br><br>This unique English translation is the first in a series of four lectures from GA 62, that are newly translated by Peter Stebbing. Edited by James Stewart. Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "This lecture on Raphael points to an ever greater inwardness or “internalizing” of the human soul in the future development of humanity. Steiner's large-format watercolours can be said to be an unmistakable further expression of this. Though it might seem improbable at first to link Raphael's works so directly with the painting impulse of Rudolf Steiner, separated as they are by four hundred years ...",
    },
    {
      id: 8,
      "long":
        "This book is a First Edition, never before translated into English, series of six lectures. Rudolf Steiner gave these lectures early in the year of 1919 at Zurich, Switzerland. Here Steiner proffers ideas to solve the social problems and necessities required by life, by studying the life sciences and social life, and the living conditions of the present-day humans. He expresses how the social will should be the basis of a new scientific order, and what the role of the modern worker should be.These six lectures are a translation from the German edition 'Die soziale Frage,' (Bn/GA/CW Number 328 in the Bibliographical Survey, 1961), published by the Rudolf Steiner-Nachlassverwaltung, Dornach, Switzerland, 1977. They are published as transcripts unrevised by the lecturer. This First English edition was translated by Hanna von Maltitz, and was edited by James D. Stewart, e.Librarian at the 'The e.Lib, Inc.' Illustrations and artwork were created by Hanna von Maltitz. Thanks to the Basil Gibaud Memorial Trust, this translation has been made available for everyone. The text of both the printed and eBook editions has numerous links to on-line web content that will enhance the reader/researcher in their understanding of the text: search all lectures, read/research the original German texts, compare the English translation to the original German paragraph by paragraph, and explore other related material. You can research Rudolf Steiner's works on-line ... buy the book to read and study at home.<br><br>Visit the on-line version of this book by clicking here. Or, click on the cover image to buy this book at Amazon.com, to read or study at home.",
      "short":
        "This book is a First Edition, never before translated into English, series of six lectures. Rudolf Steiner gave these lectures early in the year of 1919 at Zurich, Switzerland. Here Steiner proffers ideas to solve the social problems and necessities required by life, by studying the life sciences and social life, and the living conditions of the present-day humans.",
    },
    {
      id: 9,
      "long":
        "Ute Craemer is an educator and social worker who has dedicated over fifty years of her life to teaching and nurturing the poor children of the favelas (slums) in Brazil. As an experienced Waldorf teacher, she has been able to understand the needs of the children and their families and provide them with the spiritual nourishment they cry out for. Favela Children is a moving and informative account of Ute's Craemer's social work in the favelas and of her personal development. It was originally published in German and went through several editions. It is published here for the first time in English.<br><br>Translated and with an introduction by Frank Thomas Smith.",
      "short":
        "Ute Craemer is an educator and social worker who has dedicated over fifty years of her life to teaching and nurturing the poor children of the favelas (slums) in Brazil. As an experienced Waldorf teacher, she has been able to understand the needs of the children and their families and provide them with the spiritual nourishment they cry out for. Favela Children is a moving and informative account of Ute's Craemer's social work in the favelas and of her personal development ...",
    },
    {
      id: 10,
      "long":
        "Sergio and his younger brother, Divino are poor children who live in a favela (slum) in Sao Paulo, Brazil. They go on vacation with their revered teacher, dona Ute (pronounced oo-teh), to the country house of one of Ute’s friends. Once there, they leave the house together to fetch kindling wood. They cross a stream and discover a strange round mound surrounded by white stones. Divino impetuously climbs the mound and convinces his brother to follow. Due to the mound’s magic forces, they fall asleep. They wake up in the land of Maxa. A girl, Mara, leads them through the jungle to her village where the meet the queen, Mamara. She tells them the history of the marvelous juice of immortality, vitaluz. They never grow old or die by drinking vitaluz, but never have children either. Queen Mamara and Princess Mara ask the boys to rescue Mireya, a young girl also from Brazil, who had been kidnapped by King Alaram. The boys agree to try, assisted by Platero, a white donkey as charming as he is stubborn, and a mysterious little man named Tamoshot. The search for Mireya is a dangerous adventure, but also the means of learning many important things about life.",
      "short":
        "Sergio and his younger brother, Divino are poor children who live in a favela (slum) in Sao Paulo, Brazil. They go on vacation with their revered teacher, dona Ute (pronounced oo-teh), to the country house of one of Ute’s friends. Once there, they leave the house together to fetch kindling wood. They cross a stream and discover a strange round mound surrounded by white stones ...",
    },
    {
      id: 11,
      "long":
        "In 1920 Rudolf Steiner had already foreseen that the future imperialism would be economic rather than military or nationalistic. In these three lectures he describes the history of imperialism from ancient times to the present and into the future. The anglo-american would play an increasingly important role in future developments, so the English visitors who attended must have been especially attentive.<br><br>These lectures are the 16th, 17th and 18th of 18 lectures in the lecture series entitled, <i>Spiritual and Social Transformations in Human Evolution</i>, published in German as, <i>Geistige und Soziale Wandlungen in der Menschheitsenticklungen</i>. They were given by Rudolf Steiner on February 20-22 1920, at Dornach, Switzerland. From Gasumptausgabe (collected works) #196.",
      "short":
        "In 1920 Rudolf Steiner had already foreseen that the future imperialism would be economic rather than military or nationalistic. In these three lectures he describes the history of imperialism from ancient times to the present and into the future. The anglo-american would play an increasingly important role in future developments, so the English visitors who attended must have been especially attentive.",
    },
    {
      id: 12,
      "long":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible.<br><br>However, the original school was only for a relatively few selected individuals, whereas the new school was incorporated into the Free School for Spiritual Science at the Goetheanum in Dornach, Switzerland.<br><br>Rudolf Steiner was only able to give nineteen lessons - plus seven 'recapitulation' lessons - for the First Class before his illness and death. His intention had been to develop three classes. The lessons were recorded by a stenographer, then typed in clear text without having been reviewed by Rudolf Steiner. They had not been publicly accessible until recently. This is Volume 1 of 3.",
      "short":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible. Volume 1 of 3.",
    },
    {
      id: 13,
      "long":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible.<br><br>However, the original school was only for a relatively few selected individuals, whereas the new school was incorporated into the Free School for Spiritual Science at the Goetheanum in Dornach, Switzerland.<br><br>Rudolf Steiner was only able to give nineteen lessons - plus seven 'recapitulation' lessons - for the First Class before his illness and death. His intention had been to develop three classes. The lessons were recorded by a stenographer, then typed in clear text without having been reviewed by Rudolf Steiner. They had not been publicly accessible until recently. This is Volume 2 of 3.",
      "short":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible. Volume 2 of 3.",
    },
    {
      id: 14,
      "long":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible.<br><br>However, the original school was only for a relatively few selected individuals, whereas the new school was incorporated into the Free School for Spiritual Science at the Goetheanum in Dornach, Switzerland.<br><br>Rudolf Steiner was only able to give nineteen lessons - plus seven 'recapitulation' lessons - for the First Class before his illness and death. His intention had been to develop three classes. The lessons were recorded by a stenographer, then typed in clear text without having been reviewed by Rudolf Steiner. They had not been publicly accessible until recently. This is Volume 3 of 3.",
      "short":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible. Volume 3 of 3.",
    },
    {
      id: 15,
      "long":
        "With the ruins of the Artemis temple almost non-existent today, it is perhaps not surprising that little interest is generally accorded this 6th Wonder of the World. Yet we can still gain an idea of it and of the legendary statue of Artemis, from reconstruction drawings and archaeological finds - supported by literary and historical sources. Study of this important Greek Mystery Center can shed light on the cultural impulses appropriate for our time.",
      "short":
        "During the re-founding of the Anthroposophical Society at Christmas 1923, Rudolf Steiner also reconstituted the 'Esoteric School' which had originally functioned in Germany from 1904 until 1914, when the outset of the First World War made it's continuance impossible. Volume 3 of 3.",
    },
    {
      id: 16,
      "long":
        "From a journey through the 12 constellations to a ride with a divine donkey, with surprising intermediate stations, the protagonists of these 12 stories are involved in fascinating adventures that will delight young readers and leave an indelible impression on their minds and on their hearts. For children from 9 years old on up. ",
      "short":
        "The protagonists of these 12 stories are involved in fascinating adventures, which will delight young readers and leave an indelible impression on their minds and hearts. For children from 9 years old on up. ",
    },
  ];

  const carouselFunction = () => {
    document.querySelector("#carousel-outer");
    const innerCarousel = document.querySelector("#carousel-inner");
    const bookTemplate = document.querySelector("[data-book-template]");
    const leftArrow = document.querySelector("#arrow-left");
    document.querySelector("#arrow-right");
    const dotsDiv = document.querySelector("#dots");

    innerCarousel.scrollLeft = 0;
    let carouselBooks = [];
    function createBookDivs() {
      books.forEach(book => {
        if (!book.carousel) return
        carouselBooks.push(book);
        const bookDiv = bookTemplate.content.cloneNode(true);
        const img = bookDiv.querySelector("[data-book-img]");
        const title = bookDiv.querySelector("[data-book-title]");
        const author = bookDiv.querySelector("[data-book-author]");
        const description = bookDiv.querySelector("[data-book-description]");
        bookDiv.querySelector(".book-rectangle").dataset.id = book.id;
        dotsDiv.innerHTML = dotsDiv.innerHTML + '<span class="dots">.</span>';
        img.src = `./img/${book.img}`;
        title.innerText = book.title;
        if (title.innerText.length > 30) {
          title.style.fontSize = "2em";
        }
        if (title.innerText.length > 50) {
          title.style.fontSize = "1.8em";
        }
        author.innerText = book.global.Author;
        innerCarousel.appendChild(bookDiv);
        if (descriptions[book.id - 1]) {
          description.innerHTML = descriptions[book.id - 1].short;
        }
      });
    }

    createBookDivs();
    innerCarousel.style.gridTemplate = `auto 30px / repeat(${carouselBooks.length}, 100%) 18px`;

    let intervalBooks = [];
    let isSet = false;
    let initialValue = 0;
    let visibleDiv = 0;
    const dots = Array.from(dotsDiv.children);

    dots[visibleDiv].classList.add("selected-dot");

    function scrollOneBook(direction) {
      if (direction === "right") {
        initialValue +=
          innerCarousel.querySelector("div:nth-child(1)").clientWidth;
        visibleDiv++;
      } else {
        initialValue -=
          innerCarousel.querySelector("div:nth-child(1)").clientWidth;
        visibleDiv--;
      }
      if (visibleDiv > carouselBooks.length - 1) {
        initialValue = 0;
        visibleDiv = 0;
      }
      if (visibleDiv < 0) {
        initialValue = innerCarousel.scrollWidth - 900;
        visibleDiv = carouselBooks.length - 1;
      }

      innerCarousel.scroll({
        left: initialValue,
        behavior: "smooth",
      });
      if (document.querySelector(".selected-dot")) {
        document.querySelector(".selected-dot").classList.remove("selected-dot");
      }
      dots[visibleDiv].classList.add("selected-dot");
    }

    const scrollBooks = direction => {
      isSet = true;
      intervalBooks = setInterval(scrollOneBook, 10000, direction);
      innerCarousel.dataset.interval = intervalBooks;
    };
    const stopScroll = () => {
      isSet = false;
      clearInterval(innerCarousel.dataset.interval);
    };

    scrollBooks("right");

    //arrows event-listener
    document.addEventListener("click", e => {
      if (!e.target.matches("[data-arrow]")) return
      if (isSet == true) {
        stopScroll();
      } else {
        clearTimeout(leftArrow.dataset.interval);
      }
      if (e.target.matches("#arrow-left")) {
        scrollOneBook("left");
      } else {
        scrollOneBook("right");
      }

      innerCarousel.scroll({
        left: initialValue,
        behavior: "smooth",
      });

      let timerArrows = setTimeout(
        scrollBooks,
        25000,
        innerCarousel.querySelector("div:nth-child(1)").clientWidth
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
      array.forEach(element => {
        const link = document.createElement("li");
        link.innerText = element;
        link.id = element;
        link.classList.add("highlight");
        link.classList.add(
          `${element
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/\s/g, "-")
          .toLowerCase()}-category`
        );
        if (array == authorsArray) {
          link.classList.add("authors-link");
          authorsDiv.appendChild(link);
        } else {
          link.classList.add("categories-link");
          categoriesDiv.appendChild(link);
        }
      });
    }
    addToDropdownMenu(authorsArray);
    addToDropdownMenu(categoriesArray);

    //event listeners
    document.addEventListener("click", e => {
      const btn = e.target;
      if (!btn.matches(".dropbtn")) return

      if (btn.classList.contains("submenu-active")) {
        btn.classList.remove("submenu-active");
      } else {
        if (document.querySelector(".submenu-active")) {
          document
            .querySelector(".submenu-active")
            .classList.remove("submenu-active");
        }
        btn.classList.add("submenu-active");
      }
    });
    document.addEventListener("click", e => {
      if (!e.target.matches(".authors-link")) return
      bookGrid.textContent = "";
      displayByAuthor(e.target.id, selectedPaterns.right);
      if (document.querySelector(".submenu-active")) {
        document
          .querySelector(".submenu-active")
          .classList.remove("submenu-active");
      }
    });
    document.addEventListener("click", e => {
      if (!e.target.matches(".categories-link")) return
      bookGrid.textContent = "";
      displayByCategories(e.target.id, selectedPaterns.right);
      if (document.querySelector(".submenu-active")) {
        document
          .querySelector(".submenu-active")
          .classList.remove("submenu-active");
      }
    });
    allBooksLink.addEventListener("click", () => {
      displayAllBooks(selectedPaterns.right);
      if (document.querySelector(".submenu-active")) {
        document
          .querySelector(".submenu-active")
          .classList.remove("submenu-active");
      }
    });

    //order alphabetically or inverse alphabetically
    const sortAZZA = (array, AZZA) => {
      const tempArray = [...array];
      tempArray.sort((a, b) => {
        if (a.tsort > b.tsort) {
          if (AZZA === "a-z") return 1
          if (AZZA === "z-a") return -1
        }
        if (a.tsort < b.tsort) {
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
      selectedPaterns.left = ["categories", id];
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
      bookImg.src = `./img/${element.img}`;
      bookImg.classList.add("book-img");
      bookImgDiv.appendChild(bookImg);
      bookImgDiv.dataset.id = element.id;
      bookImgDiv.dataset.bookLink = "";
      bookImgDiv.tabIndex = "0";
      const textDiv = document.createElement("div");
      textDiv.classList.add("grid-book-text");
      const title = document.createElement("h5");
      const author = document.createElement("p");
      const categoriesDiv = document.createElement("div");
      element["categories"].forEach(category => {
        const paragraph = document.createElement("p");
        paragraph.innerText = category;
        paragraph.classList.add("book-img-div-category");
        //in category name remove special characters, swap white spaces for dashes and convert to lower case
        const className = category
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/\s/g, "-")
          .toLowerCase();
        paragraph.classList.add(`${className}-category`);
        categoriesDiv.appendChild(paragraph);
      });
      title.innerText = element.title;
      if (title.innerText.length > 50) {
        title.style.fontSize = "0.7em";
      }
      author.innerText = element["global"]["Author"];
      title.classList.add("only-list");
      author.classList.add("only-list");
      textDiv.appendChild(title);
      textDiv.appendChild(author);
      textDiv.appendChild(categoriesDiv);
      bookImgDiv.appendChild(textDiv);
      bookGrid.appendChild(bookImgDiv);
    }

    displayAllBooks(selectedPaterns.right);
  }

  const openFullDescription = () => {
    const documentBody = document.querySelector("body");
    const modal = document.querySelector("#modal");
    const modalInner = document.querySelector("#modal-inner");
    const modalCloseBtn = document.querySelector("#close-modal-btn");
    const floatingArrow = document.querySelector("#floating-btn-top");
    const topButtonRow = document.querySelector("#top-button-row");

    document.addEventListener("click", e => {
      if (!e.target.closest("[data-book-link]")) return
      const parent = e.target.closest("[data-book-link]");
      const template = document.querySelector("[data-full-desc-template]");
      const newTemplate = template.content.cloneNode(true);
      modalInner.appendChild(newTemplate);
      fillModalTemplate(parent);
      floatingArrow.classList.add("hidden");
      floatingArrow.classList.remove("floating-btn-display-class");
      topButtonRow.style.display = "none";
    });

    function fillModalTemplate(eventTargetParent) {
      books.forEach(book => {
        if (eventTargetParent.dataset.id == book.id) {
          const img = modalInner.querySelector("[data-img]");
          img.src = `./img/${book.img}`;

          const title = modalInner.querySelector("[data-title]");
          title.innerText = book.title;

          if (book["sub-title"]) {
            const subTitle = modalInner.querySelector("[data-sub-title]");
            subTitle.innerText = book["sub-title"];
          }

          if (book.online.length > 0) {
            const onlineBtnDiv = modalInner.querySelector("#online-btn-div");
            const onlineButton = document.createElement("a");
            onlineButton.className = "online-button";
            onlineButton.href = book.online;
            onlineButton.target = "_blank";
            onlineButton.innerText = "Research On-line";
            onlineBtnDiv.appendChild(onlineButton);
          }

          const description = modalInner.querySelector("[data-description]");
          description.innerHTML = descriptions[book.id - 1].long;

          // const btn = modalInner.querySelector("[data-buy-btn]")
          // btn.href = book.url

          const globalDiv = document.querySelector("[data-global-specs]");

          let globalColOne;
          let globalColTwo;
          let globalColThree;
          let globalColFour;

          const paperbackColOne = modalInner.querySelector(
            "[data-paperback-specs] .col-1"
          );
          const paperbackColTwo = modalInner.querySelector(
            "[data-paperback-specs] .col-2"
          );
          const hardcoverColOne = modalInner.querySelector(
            "[data-hardcover-specs] .col-1"
          );
          const hardcoverColTwo = modalInner.querySelector(
            "[data-hardcover-specs] .col-2"
          );
          const kindleColOne = modalInner.querySelector(
            "[data-kindle-specs] .col-1"
          );
          const kindleColTwo = modalInner.querySelector(
            "[data-kindle-specs] .col-2"
          );
          let globalArr;
          let globalArr2 = 0;
          let paperbackArr;
          let hardcoverArr;
          let kindleArr;

          const asignArraysAndCreateColumns = () => {
            if (book.kindle) {
              const btnDiv = modalInner.querySelector("#kindle .specs-center-div");
              const buyBtn = document.createElement("a");
              buyBtn.className = "online-button";
              if (book.kindle.url.length > 0) {
                buyBtn.innerText = "Buy The Book!";
                buyBtn.target = "_blank";
                buyBtn.href = book.kindle.url;
              } else {
                buyBtn.innerText = "Coming Soon!";
                buyBtn.href = "javascript:void(0)";
              }
              btnDiv.appendChild(buyBtn);
              kindleArr = Object.keys(book.kindle);
              kindleColOne.style.gridTemplateRows = `repeat(${kindleArr.length}, 40px)`;
              kindleColTwo.style.gridTemplateRows = `repeat(${kindleArr.length}, 40px)`;
            }
            if (book.paperback) {
              const btnDiv = modalInner.querySelector(
                "#paperback .specs-center-div"
              );
              const buyBtn = document.createElement("a");
              buyBtn.className = "online-button";
              if (book.paperback.url.length > 0) {
                buyBtn.innerText = "Buy The Book!";
                buyBtn.target = "_blank";
                buyBtn.href = book.paperback.url;
              } else {
                buyBtn.innerText = "Coming Soon!";
                buyBtn.href = "javascript:void(0)";
              }
              btnDiv.appendChild(buyBtn);
              paperbackArr = Object.keys(book.paperback);
              paperbackColOne.style.gridTemplateRows = `repeat(${paperbackArr.length}, 40px)`;
              paperbackColTwo.style.gridTemplateRows = `repeat(${paperbackArr.length}, 40px)`;
            }
            if (book.hardcover) {
              const btnDiv = modalInner.querySelector(
                "#hardcover .specs-center-div"
              );
              const buyBtn = document.createElement("a");
              buyBtn.className = "online-button";
              if (book.hardcover.url.length > 0) {
                buyBtn.innerText = "Buy The Book!";
                buyBtn.target = "_blank";
                buyBtn.href = book.hardcover.url;
              } else {
                buyBtn.innerText = "Coming Soon!";
                buyBtn.href = "javascript:void(0)";
              }
              btnDiv.appendChild(buyBtn);
              hardcoverArr = Object.keys(book.hardcover);
              hardcoverColOne.style.gridTemplateRows = `repeat(${hardcoverArr.length}, 40px)`;
              hardcoverColTwo.style.gridTemplateRows = `repeat(${hardcoverArr.length}, 40px)`;
            }
            globalArr = Object.keys(book.global);
            if (globalArr.length > 4) {
              globalArr2 = globalArr.splice(3);
            }
            globalColOne = document.createElement("div");
            globalColOne.classList.add("col-1");
            globalColTwo = document.createElement("div");
            globalColTwo.classList.add("col-2");
            globalColOne.style.gridTemplateRows = `repeat(${globalArr.length}, 40px)`;
            globalColTwo.style.gridTemplateRows = `repeat(${globalArr.length}, 40px)`;
            globalDiv.appendChild(globalColOne);
            globalDiv.appendChild(globalColTwo);
            if (globalArr2.length > 0) {
              globalColThree = document.createElement("div");
              globalColThree.classList.add("col-3");
              globalColFour = document.createElement("div");
              globalColFour.classList.add("col-4");
              globalColThree.style.gridTemplateRows = `repeat(${globalArr2.length}, 40px)`;
              globalColFour.style.gridTemplateRows = `repeat(${globalArr2.length}, 40px)`;
              globalDiv.appendChild(globalColThree);
              globalDiv.appendChild(globalColFour);
              globalDiv.style.gridTemplate = "1fr / 1fr 1fr 1fr 1fr;";
            } else {
              globalDiv.style.gridTemplate = "1fr / 1fr 1fr;";
            }
          };
          asignArraysAndCreateColumns();

          addToColOne(globalArr, globalColOne);
          addToColOne(paperbackArr, paperbackColOne);
          addToColOne(kindleArr, kindleColOne);
          addToColOne(hardcoverArr, hardcoverColOne);
          addToColTwo(globalArr, globalColTwo, book.global);
          addToColTwo(paperbackArr, paperbackColTwo, book.paperback);
          addToColTwo(kindleArr, kindleColTwo, book.kindle);
          addToColTwo(hardcoverArr, hardcoverColTwo, book.hardcover);
          if (globalArr2.length > 0) {
            addToColOne(globalArr2, globalColThree);
            addToColTwo(globalArr2, globalColFour, book.global);
          }

          modal.classList.remove("hidden");
          documentBody.classList.add("no-overflow");
        }
      });
    }
    const closeModal = () => {
      modal.classList.add("hidden");
      topButtonRow.style.display = "flex";
      documentBody.classList.remove("no-overflow");
      modalInner.textContent = "";
    };
    modalCloseBtn.addEventListener("click", () => {
      closeModal();
    });

    document.body.addEventListener("keydown", e => {
      if (e.key != "Escape") return
      closeModal();
    });

    const addToColOne = (array, div) => {
      if (!array) return
      array.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.innerText = item + ":";
        paragraph.style.gridRow = "span 1";
        div.appendChild(paragraph);
      });
    };
    const addToColTwo = (array, div, object) => {
      if (!array) return
      array.forEach(item => {
        const paragraph = document.createElement("p");
        paragraph.innerText = object[item];
        paragraph.style.gridRow = "span 1";
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
      "url": "./img/header/maltitz-community-life.jpg",
      "rsarchive":
        "https://fineart.elib.com/fineart.php?showpic=1&prev=Collection%2FAnthroposophical&dir=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von&name=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von%2FCommunityLife960.jpg&srow=1",
      "tone": "dark",
    },
    {
      "id": "2",
      "title": "Trial By Fire",
      "artist": "Maltitz, Hanna von",
      "year": "2013",
      "material": "Oil on canvas",
      "dimensions": "50x70 cm",
      "url": "./img/header/maltitz-trial-by-fire.jpg",
      "rsarchive":
        "https://fineart.elib.com/fineart.php?showpic=1&prev=Collection%2FAnthroposophical&dir=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von&name=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von%2FTrialByFire960.jpg&srow=1",
      "tone": "light",
    },
    {
      "id": "3",
      "title": "Tree Song",
      "artist": "Maltitz, Hanna von",
      "year": "2013",
      "material": "Oil on canvasboard",
      "dimensions": "50x70 cm",
      "url": "./img/header/TreeSong960.jpg",
      "rsarchive":
        "https://fineart.elib.com/fineart.php?showpic=1&prev=Collection%2FAnthroposophical&dir=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von&name=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von%2FTreeSong960.jpg&srow=1",
      "tone": "dark",
    },
    {
      "id": "4",
      "title": "Heaven's Gate",
      "artist": "Maltitz, Hanna von",
      "year": "2013",
      "material": "Oil on canvasboard",
      "dimensions": "30x40 cm",
      "url": "./img/header/HeavensGate960.jpg",
      "rsarchive":
        "https://fineart.elib.com/fineart.php?showpic=1&prev=Collection%2FAnthroposophical&dir=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von&name=Site_index%2FAnthroposophical%2FMaltitz_Hanna_von%2FHeavensGate960.jpg&srow=1",
      "tone": "dark",
    },
    {
      "id": "5",
      "title": "Listening",
      "artist": "Sturmheit, Igor",
      "year": "2012",
      "url": "./img/header/sturmheit-listening.jpg",
      "rsarchive":
        "https://fineart.elib.com/fineart.php?showpic=1&prev=Collection%2FAnthroposophical&dir=Site_index%2FAnthroposophical%2FSturmheit_Igor&name=Site_index%2FAnthroposophical%2FSturmheit_Igor%2FIMG_0777s.jpg&srow=1",
      "tone": "dark",
    },
    {
      "id": "6",
      "title": "First Goetheanum",
      "artist": "Linde, Hermann",
      "material": "Watercolor",
      "url": "./img/header/linde-first-goetheanum.jpg",
      "rsarchive":
        "https://fineart.elib.com/fineart.php?showpic=1&prev=Collection%2FAnthroposophical&dir=Site_index%2FAnthroposophical%2FLinde_Hermann&name=Site_index%2FAnthroposophical%2FLinde_Hermann%2FGoetheanum-Aquarell_von_Hermann_Linde.jpg&srow=1",
      "tone": "light",
    },
  ];

  function rotateHeaderImages() {
    const randomPainting = Math.floor(Math.random() * paintings.length);
    const header = document.querySelector("#header");
    const headerTitle = header.querySelector("h1");
    const headerSubtitle = header.querySelector("h2");
    const footer = document.querySelector("#footer");
    const middle = document.querySelector("#background-div");
    const preview = document.querySelector("#painting-preview");
    const title = document.querySelector("#painting-title");
    const artist = document.querySelector("#painting-artist");

    const keys = Object.keys(paintings[randomPainting]);
    //filter keys not to print from paintings.js in footer
    const filteredKeys = keys.filter(
      string =>
        string !== "id" &&
        string !== "url" &&
        string !== "rsarchive" &&
        string !== "tone"
    );
    header.style.backgroundImage = `url(${paintings[randomPainting].url})`;
    footer.style.backgroundImage = `url(${paintings[randomPainting].url})`;
    middle.style.backgroundImage = `url(${paintings[randomPainting].url})`;
    preview.style.backgroundImage = `url(${paintings[randomPainting].url})`;
    preview.href = paintings[randomPainting].rsarchive;
    title.innerText = paintings[randomPainting].title;
    artist.innerText = `by ${paintings[randomPainting].artist}`;
    if (paintings[randomPainting].tone === "light") {
      headerTitle.classList.add("dark-header-text");
      headerSubtitle.classList.add("dark-header-text");
    }
    if (paintings[randomPainting].tone === "dark") {
      headerTitle.classList.add("light-header-text");
      headerSubtitle.classList.add("light-header-text");
    }

    filteredKeys.forEach(key => {
      if (!paintings[randomPainting][key]) return
      const keyParagraph = document.createElement("p");
      const valueParagraph = document.createElement("p");
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      keyParagraph.innerText = `${capitalizedKey}:`;
      valueParagraph.innerText = paintings[randomPainting][key];
      // footer.footer-painting-link = paintings[randomPainting][key]["rsarchive"]
    });
  }

  function scrollFunction() {
    const headerArrow = document.querySelector("#header-arrow");
    const midPageArrow = document.querySelector("#mid-page-arrow");
    headerArrow.offsetTop;
    const bookGridTop = document.querySelector("#books-grid-outer").offsetTop - 20;
    const pointOfInversionMidPageArrow =
      document.querySelector("#carousel-outer").offsetTop - 40;
    const floatingArrow = document.querySelector("#floating-btn-top");
    const main = document.querySelector("#main");
    const mainTop = main.offsetTop;
    const carouselTop = document.querySelector("#carousel-outer").offsetTop;
    const topButtonRow = document.querySelector("#top-button-row");
    const topButtonRowOffsetTop = topButtonRow.offsetTop;

    headerArrow.addEventListener("click", () => {
      if (screen.width > 860) {
        arrowScroll(headerArrow, carouselTop - 65);
      } else if (screen.width > 560 && screen.width < 800) {
        arrowScroll(headerArrow, mainTop - 15);
      } else {
        arrowScroll(headerArrow, bookGridTop);
      }
    });

    midPageArrow.addEventListener("click", () => {
      arrowScroll(midPageArrow, bookGridTop - 60);
    });

    floatingArrow.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY >= pointOfInversionMidPageArrow - 60) {
        floatingArrow.classList.remove("hidden");
        floatingArrow.classList.add("floating-btn-display-class");
      } else {
        floatingArrow.classList.add("hidden");
        floatingArrow.classList.remove("floating-btn-display-class");
      }
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY >= topButtonRowOffsetTop) {
        topButtonRow.classList.add("top-button-row-fixed");
      } else {
        topButtonRow.classList.remove("top-button-row-fixed");
      }
    });

    function arrowScroll(arrow, downPos) {
      window.scroll({
        top: downPos,
        behavior: "smooth",
      });
    }
  }

  function adaptToDevices() {
    function resetHeight() {
      const booksGridOuter = document.querySelector("#books-grid-outer");
      let isMobile = window.matchMedia("(max-width:650px)").matches;
      let isMobilePortrait = window.matchMedia(
        "(max-width:800px) and (orientation:landscape)"
      ).matches;
      let isTablet = window.matchMedia(
        "(min-width:850px) and (max-width:1023.9px)"
      ).matches;
      let isDesktop = window.matchMedia("(min-width:1024px)").matches;
      if (isMobile) {
        document.body.style.gridTemplateRows = `92vh auto auto`;
        booksGridOuter.className = "book-div-list-version";
      } else if (isMobilePortrait) {
        document.body.style.gridTemplateRows = `84vh auto auto`;
        booksGridOuter.className = "book-div-cover-version-mobile-landscape";
      } else if (isTablet) {
        document.body.style.gridTemplateRows = `100vh auto auto`;
        booksGridOuter.className = "book-div-cover-version-tablet";
      } else if (isDesktop) {
        document.body.style.gridTemplateRows = `100vh auto auto`;
        booksGridOuter.className = "book-div-cover-version-desktop";
      }
    }

    window.addEventListener("resize", () => {
      resetHeight();
      scrollFunction();
    });
    resetHeight();
  }

  carouselFunction();
  gridFunction();
  openFullDescription();
  rotateHeaderImages();
  adaptToDevices();
  scrollFunction();

}());
