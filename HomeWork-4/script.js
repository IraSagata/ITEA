// console.clear();
// const academy = {
//   students: []
// };

// Object.defineProperty(academy, "addStudent", {
//   set: function(value) {
//     this.students.createDate = Date().toString();
//     [this.students.studentName, this.students.studentSurname] = value.split(
//       " "
//     );
//     return academy.students;
//   }
// });
// academy.addStudent = "Yriy Petrichenko";
// console.log(academy.students);

// VARTION 2
// console.clear();
// const academy = {
//   students: []
// };

// Object.defineProperty(academy, "addStudent", {
//   set: function(value) {
//     let arr = value.split(" ");
//     let student = {
//       studentName: arr.length > 0 ? arr[0] : "none",
//       studentSurname: arr.length > 1 ? arr[1] : "none",
//       createDate: Date()
//     };

//     this.students.push(student);
//   }
// });

// academy.addStudent = "Yriy Petrichenko";
// console.log(academy.students);

console.clear();
const academy = {
  students: []
};

Object.defineProperty(academy, "addStudent", {
  set: function(value) {
    let newStudent = value.split(" ");
    this.students.push({
      createDate: Date(),
      studentName: value[0],
      studentSurname: value[1]
    });
    return academy.students;
  }
});
academy.addStudent = "Yriy Petrichenko";
console.log(academy.students);
