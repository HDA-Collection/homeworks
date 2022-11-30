class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state += 1.5;              // тут скорее всего зависит от state типа от 50% начинает прибавлять по 1.5 ?
    }

    set state(value) {                         // если это скрыть, то работает > создание печатного издания, что-то тут не так ?
        if (value < 0) {
            this.state = 0;
        } else if (value > 100) {
            this.state = 100;
        } else {
            return value;
        }
    }

    get state() {
        return this.value;
    }
}

class Magazine extends PrintEditionItem {      // срабатывает 1 вариант наследования
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = `magazine`;
    }
}


class Book extends PrintEditionItem {          // далее не работает
    constructor () {
        super();
        this.type = `book`;
        this.author = `author`;
    }
}

class NovelBook extends Book {
    constructor () {
        super();
        this.type = `novel`;
    }
}

class FantasticBook extends Book {
    constructor () {
        super();
        this.type = `fantastic`;
    }
}

class DetectiveBook extends Book {
    constructor () {
        super();
        this.type = `detective`;
    }
}