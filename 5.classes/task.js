"use strict"

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;

        if (value < 0) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        } else {
            value;
        }
    }
}

// Наследники:

class Magazine extends PrintEditionItem {      /*Наследник 1*/
    constructor (...args) {
        super(...args);
        this.type = `magazine`;
    }
}

class Book extends PrintEditionItem {          /*Наследник 2*/ // + this.type = `book`;   + this.author = `author`;
    constructor (author, ...args) {
        super(...args);
        this.author = author;
        this.type = `book`;
    }
}

class NovelBook extends Book {                 /*Наследник 3*/ // + this.type = `novel`;
    constructor (...args) {
        super(...args);
        this.type = `novel`;
    }
}

class FantasticBook extends Book {             /*Наследник 4*/ // + this.type = `fantastic`;
    constructor (...args) {
        super(...args);
        this.type = `fantastic`
    }
}

class DetectiveBook extends Book {             /*Наследник 5*/ // + this.type = `detective`;
    constructor (...args) {
        super(...args);
        this.type = `detective`;
    }
}

/* Задача №2. Библиотека */

// 1 Добавление книги

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }


    // 1 Добавить книгу.
    // Добавляет книгу, если state > 30
    addBook(book) {
        this.books.push(book);
    }


    // 2 Поиск книги.
    // который в качестве аргумента будет принимать ключ, по которому идёт поиск (тип, автор, название, год выпуска и пр.) и искомое значение. 
    // Метод должен возвращать книгу в случае успеха и null, если книга не найдена.
    findBookBy(type, value) {

    }


    // 3 Выдача книги.
    // Который будет в качестве аргумента принимать название книги. Если запрошенная книга найдена, 
    // Метод должен удалять книгу из хранилища books и возвращать её. Если книга не была найдена, метод должен возвращать null.
    giveBookByName(bookName) {

    }
}