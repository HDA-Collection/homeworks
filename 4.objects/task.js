function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student(`Владислав`, `Мужчина`, 22);

// Предмет
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

student1.setSubject(`Алгебра`);


// 1 оценка + по одной далее
Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];   // + 1 Оценка
  } else {
    this.marks.push(mark); // + Следущая оценка
  }
}

// Несколько оценок
Student.prototype.addMarks = function(...mark) {
  this.marks.push(...mark);
}

student1.addMark(1);
student1.addMark(2);
student1.addMarks(3, 4, 5);

  Student.prototype.getAverage = function() {
    // (П.2) Метод getAverage(), который при вызове будет возвращать среднее арифметическое оценок студента.
}

// console.log(student1.getAverage()); // Среднее арифметическое

// 3 (П.2)
  // Метод exclude(reason), который при вызове будет исключать студента и устанавливать причину исключения. Для этого надо: 
  // Удалить subject и marks  
  // Добавить свойство excluded: reason.
//