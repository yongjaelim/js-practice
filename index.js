// ES6+

class Student {
  

  constructor (name, enrolled = false) {

    this.name = name;
    this.enrolled = enrolled;

  }

  get status() {

    return this.name + " is enrolled:"  + this.enrolled;
  }

  
  isEnrolledSlow (delay, callback) {

    setTimeout( () => {
      if (this.enrolled)
        callback("Already enrolled", null)
      else
        callback(null, this); 
    } , delay );
  }  
}

const students = Array();

let f = new Student("NameF");

students.push(f, new Student("NameA"), new Student("NameB"), new Student("NameC"), new Student("NameD"));

function foo(err, result) {

  if (err)
    console.log("Error!" + err);
    else 
    console.log(result);
}

f.isEnrolledSlow(3000, (err, result)=>{
  if (err)
    console.log("Error!" + err);
    else 
    console.log(result);
});

class Course {
  constructor(name = 'CS0000', enrolled = 0, capacity=25, seats, instructor) {
    this.name = name;
    this.enrolled = enrolled;
    this.capacity = capacity;
    this.seats = seats;
    this.instructor = instructor;
  }

  toString() {
    return this.name + " Enrolled: " + this.enrolled + " Capacity: " + this.capacity+ " Seats: " + this.seats + " Instructor: " + this.instructor;
  }

  checkSpaceSlow(delay, callback) {
    setTimeout (() => {
      if (this.capacity > this.enrolled)
        callback(null, this);
      else
        callback('Class is full', null);

    } , delay);
  }
}

const course1 = new Course('CS2114', 100, 105, 'Esakia', students);

console.log(course1.toString());


obj = {
  username : "yongjae",
  password : "123"
}

console.log(obj.password);

const course2 = {

  name:'CS2104',
  enrolled: 51,
  capacity: 52,
  seats:55,
  instructor:'Esakia',
  toString: function() {
    return this.name + " Enrolled: " + this.enrolled + " Capacity: " + this.capacity+ " Seats: " + this.seats + " Instructor: " + this.instructor;
  },
  checkSpaceSlow: function(delay, callback) {
    setTimeout (() => {
      if (this.capacity > this.enrolled)
        callback(null, this);
      else
        callback('Class is full', null);

    } , delay);
  }
 
}

const course3 = Object.assign( Object.create(Course.prototype), {
  name:'CS2304',
  enrolled: 49,
  capacity: 57,
  seats:60,
  instructor:'Esakia',
  toString: function() {
    return this.name + " Enrolled: " + this.enrolled + " Capacity: " + this.capacity+ " Seats: " + this.seats + " Instructor: " + this.instructor;
  },
  checkSpaceSlow: function(delay, callback) {
    setTimeout (() => {
      if (this.capacity > this.enrolled)
        callback(null, this);
      else
        callback('Class is full', null);

    } , delay);}
  });

  let courses = new Array();

  function addToCourseArray(courses, course) {
    if(course instanceof Course) {
      courses.push(course);
      console.log("Course was added!");
    }
    else {
      console.log("wrong type!");
    }
  }

  addToCourseArray(courses, course1);
  addToCourseArray(courses, course2);
  addToCourseArray(courses, course3);