# READ ME


## [0-get_list_students.js](./0-get_list_students.js)
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

    Guillaume, id: 1, in San Francisco
    James, id: 2, in Columbia
    Serena, id: 5, in San Francisco
<pre><code>
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
</pre></code>
## [1-get_list_student_ids.js](./1-get_list_student_ids.js)
Create a function getListStudentIds that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the map function on the array.
<pre><code>
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[]
[ 1, 2, 5 ]
bob@dylan:~$
</pre></code>
## [2-get_students_by_loc.js](./2-get_students_by_loc.js)
Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

It should accept a list of students (from getListStudents) and a city (string) as parameters.

You must use the filter function on the array.
<pre><code>
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
</pre></code>
## [3-get_ids_sum.js](./3-get_ids_sum.js)
Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array.
<pre><code>
bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
8
bob@dylan:~$
</pre></code>


## [4-update_grade_by_city.js](./4-update_grade_by_city.js)
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:
<pre><code>
  {
    studentId: 31,
    grade: 78,
  }
</pre></code>
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.
<pre><code>
bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$
</pre></code>

## [5-typed_arrays.js](./5-typed_arrays.js)
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: length (Number), position (Number), and value (Number).

If adding the value is not possible the error Position outside range should be thrown.
<pre><code>
bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$ 
</pre></code>
## [100-weak.js](./100-weak.js)
Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI. It should accept an endpoint argument like so:
<pre><code>
  {
    protocol: 'http',
    name: 'getUsers',
  }
</pre></code>
Track within the weakMap the number of times queryAPI is called for each endpoint.

When the number of queries is >= 5 throw an error with the message Endpoint load is high.
<pre><code>
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$
</pre></code>