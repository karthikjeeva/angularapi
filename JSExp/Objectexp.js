const COURSES = {

    1: {
        id: 1,
        description: "Angular for Beginners",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'BEGINNER',
        lessonsCount: 10
    },
    2: {
        id: 2,
        description: 'Angular Security Course - Web Security Fundamentals',
        longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11
    },
    3: {
        id: 3,
        description: 'Angular PWA - Progressive Web Apps Course',
        longDescription: "<p class='course-description'>Learn Angular Progressive Web Applications, build the future of the Web Today.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
        category: 'ADVANCED',
        lessonsCount: 8
    },
    4: {
        id: 4,
        description: 'Angular NgRx Store Reactive Extensions Architecture Course',
        longDescription: "Learn how to the Angular NgRx Reactive Extensions and its Tooling to build a complete application.",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-small.png',
        category: 'ADVANCED'
    },
    5: {
        id: 5,
        description: 'Angular Advanced Library Laboratory: Build Your Own Library',
        longDescription: "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png',
        category: 'ADVANCED'
    },
    6: {
        id: 6,
        description: 'The Complete Typescript Course',
        longDescription: "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png',
        category: 'BEGINNER'
    },
    7: {
        id: 7,
        description: 'Rxjs and Reactive Patterns Angular Architecture Course',
        longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/course-logos/observables_rxjs.png',
        category: 'BEGINNER'
    },
    8: {
        id:8,
        description: "Angular Material Course",
        iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
        longDescription: "Build Applications with the official Angular Widget Library",
        category: 'ADVANCED'
    },
};


const LESSONS = {

    1: {
        id: 1,
        "description": "Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step",
        "duration": "4:17",
        "seqNo": 1,
        courseId: 1
    },
    2: {
        id: 2,
        "description": "Building Your First  Component - Component Composition",
        "duration": "2:07",
        "seqNo": 2,
        courseId: 1
    },
    3: {
        id: 3,
        "description": "Component @Input - How To Pass Input Data To an  Component",
        "duration": "2:33",
        "seqNo": 3,
        courseId: 1
    },
    4: {
        id: 4,
        "description": " Component Events - Using @Output to create custom events",
        "duration": "4:44",
        "seqNo": 4,
        courseId: 1
    },
    5: {
        id: 5,
        "description": " Component Templates - Inline Vs External",
        "duration": "2:55",
        "seqNo": 5,
        courseId: 1
    },
    6: {
        id: 6,
        "description": "Styling  Components - Learn About Component Style Isolation",
        "duration": "3:27",
        "seqNo": 6,
        courseId: 1
    },
    7: {
        id: 7,
        "description": " Component Interaction - Extended Components Example",
        "duration": "9:22",
        "seqNo": 7,
        courseId: 1
    },
    8: {
        id: 8,
        "description": " Components Tutorial For Beginners - Components Exercise !",
        "duration": "1:26",
        "seqNo": 8,
        courseId: 1
    },
    9: {
        id: 9,
        "description": " Components Tutorial For Beginners - Components Exercise Solution Inside",
        "duration": "2:08",
        "seqNo": 9,
        courseId: 1
    },
    10: {
        id: 10,
        "description": " Directives - Inputs, Output Event Emitters and How To Export Template References",
        "duration": "4:01",
        "seqNo": 10,
        courseId: 1
    },


    // Security Course
    11: {
        id: 11,
        "description": "Course Helicopter View",
        "duration": "08:19",
        "seqNo": 1,
        courseId: 2
    },

    12: {
        id: 12,
        "description": "Installing Git, Node, NPM and Choosing an IDE",
        "duration": "04:17",
        "seqNo": 2,
        courseId: 2
    },

    13: {
        id: 13,
        "description": "Installing The Lessons Code - Learn Why Its Essential To Use NPM 5",
        "duration": "06:05",
        "seqNo": 3,
        courseId: 2
    },

    14: {
        id: 14,
        "description": "How To Run Node In TypeScript With Hot Reloading",
        "duration": "03:57",
        "seqNo": 4,
        courseId: 2
    },

    15: {
        id: 15,
        "description": "Guided Tour Of The Sample Application",
        "duration": "06:00",
        "seqNo": 5,
        courseId: 2
    },
    16: {
        id: 16,
        "description": "Client Side Authentication Service - API Design",
        "duration": "04:53",
        "seqNo": 6,
        courseId: 2
    },
    17: {
        id: 17,
        "description": "Client Authentication Service - Design and Implementation",
        "duration": "09:14",
        "seqNo": 7,
        courseId: 2
    },
    18: {
        id: 18,
        "description": "The New Angular HTTP Client - Doing a POST Call To The Server",
        "duration": "06:08",
        "seqNo": 8,
        courseId: 2
    },
    19: {
        id: 19,
        "description": "User Sign Up Server-Side Implementation in Express",
        "duration": "08:50",
        "seqNo": 9,
        courseId: 2
    },
    20: {
        id: 20,
        "description": "Introduction To Cryptographic Hashes - A Running Demo",
        "duration": "05:46",
        "seqNo": 10,
        courseId: 2
    },
    21: {
        id: 21,
        "description": "Some Interesting Properties Of Hashing Functions - Validating Passwords",
        "duration": "06:31",
        "seqNo": 11,
        courseId: 2
    },


    // PWA course

    22: {
        id: 22,
        "description": "Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code",
        "duration": "07:19",
        "seqNo": 1,
        courseId: 3
    },
    23: {
        id: 23,
        "description": "Service Workers In a Nutshell - Service Worker Registration",
        "duration": "6:59",
        "seqNo": 2,
        courseId: 3
    },
    24: {
        id: 24,
        "description": "Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools",
        "duration": "7:28",
        "seqNo": 3,
        courseId: 3
    },
    25: {
        id: 25,
        "description": "Service Workers and Application Versioning - Install & Activate Lifecycle Phases",
        "duration": "10:17",
        "seqNo": 4,
        courseId: 3
    },

    26: {
        id: 26,
        "description": "Downloading The Offline Page - The Service Worker Installation Phase",
        "duration": "09:50",
        "seqNo": 5,
        courseId: 3
    },
    27: {
        id: 27,
        "description": "Introduction to the Cache Storage PWA API",
        "duration": "04:44",
        "seqNo": 6,
        courseId: 3
    },
    28: {
        id: 28,
        "description": "View Service Workers HTTP Interception Features In Action",
        "duration": "06:07",
        "seqNo": 7,
        courseId: 3
    },
    29: {
        id: 29,
        "description": "Service Workers Error Handling - Serving The Offline Page",
        "duration": "5:38",
        "seqNo": 8,
        courseId: 3
    }

};


function assignObject () {
    let newObject = {};
    Object.assign(newObject, COURSES);
    return newObject;
} 

//console.log(JSON.stringify(assignObject()));

function createnewObject() {
    const person = {
        isHuman: false,
        printIntroduction: function() {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };
      
    const me = Object.create(person);
      
    me.name = 'Matthew';
    me.isHuman = true; 
    
    me.printIntroduction();
}

//console.log(createnewObject());

function addProperty() {
    let obj2 = {};
    Object.defineProperty(obj2, 'name' , { value: 'kar', writable: true } );

    Object.defineProperties(obj2, {'class': { value: 3, writable: true}, 'age': { value: 5, writable: true}})
    return obj2;
}

/* console.log(addProperty().name);
console.log(addProperty().class);
console.log(addProperty().age);
 */

//convert object to key-value pairs
function objtokeyvalue() {
    let obj = {
        name : 'kar',
        age: 23,
        place: 'paris',
        country: ['France', 'India'],
        address: [ {'street': 5 }, {'street': 6}]
    }

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
    for (const [key, value] of Object.entries(obj.address)) {
        console.log(`${key}: ${value.street}`);
    }
}

//console.log(objtokeyvalue());


//convert key-value pair to object
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries);
  
  //console.log("returned object " + obj);


o = { bar: 42, foo: 22 };
d = Object.getOwnPropertyDescriptor(o, 'bar');
d1 = Object.getOwnPropertyDescriptors(o, 'bar', 'foo');
//console.log("property descriptor " + d);
//console.log("property descriptors " + d1.foo.value);


let obj13 = { 0: 'a', 3: 'c',  2: 'b' };
//console.log(Object.getOwnPropertyNames(obj13).sort()); 

Object.getOwnPropertyNames(obj13).forEach(
  function (val, idx, array) {
    //console.log(val + ' -> ' + obj13[val]);
  }
);

// non-enumerable property
let my_obj = Object.create({}, {
    getFoo: {
      value: function() { return this.foo; },
      enumerable: false
    }
  });
  my_obj.foo = 1;
  
  //console.log(Object.getOwnPropertyNames(my_obj).sort());

  Object.getOwnPropertyNames(my_obj).forEach(
    function (val, idx, array) {
      //console.log(val + ' -> ' + my_obj[val]);
    }
  );


  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

  let p = new Person('kar', 'jev', 23, 'red');
  let p1 = new Person('kar', 'jev', 23, 'red');
  let p2 = p;
  //console.log(p);
  //console.log(p.nationality);
  //console.log(Object.getPrototypeOf(p));

  //check if 2 objects are equal 
  //console.log(Object.is(p, p1));
  //console.log(Object.is(p, p2));

  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  //console.log(Object.values(object1));

  const object2 = {
    a: 20,
    b: 42,
    c: 18,
    d: 5,
    e: 10
  };
  
 /*  console.log(Object.values(object2).filter((val) => {
    return val >= 18;
  })); */

//enumerable
  function addnewProperty1() {
    let obj2 = {};
    Object.defineProperties(obj2, {'national': { value: 'ind', enumerable: false},'name': { value: 'kar', enumerable: true}, 'class': { value: 3, enumerable: false}, 'age': { value: 5, enumerable: true}})
    for (prop in obj2) {
        console.log(prop);
    }
    console.log(Object.keys(obj2));
 }

 //console.log(addnewProperty1());
 