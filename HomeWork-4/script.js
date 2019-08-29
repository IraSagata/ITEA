console.clear();
const academy = {
  students: []
};

Object.defineProperty(academy, "addStudent", {
  set: function(value) {
    this.students.createDate = Date().toString();
    [this.students.studentName, this.students.studentSurname] = value.split(
      " "
    );
    return academy.students;
  }
});
academy.addStudent = "Yriy Petrichenko";
console.log(academy.students);
