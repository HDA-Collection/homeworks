"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

// + Предмет
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// + Первая оценка + По одной далее
Student.prototype.addMark = function(mark) {
  (this.marks === undefined) ? this.marks = [mark] : this.marks.push(mark);
}

// + Несколько оценок + Если нет оценок ->> В разработке
Student.prototype.addMarks = function(...mark) {
  (this.marks === undefined) ? this.marks.push(...mark) : this.marks = `Оценок нет`;
}

// Вычисление среднего арифметического
Student.prototype.getAverage = function() {  
  return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

// Отчислить
Student.prototype.exclude = function(reason) {  
  delete this.subject
  delete this.marks
  this.excluded = reason;
}