# READ ME

## [0-classroom.js](./0-classroom.js)
Implement a class named ClassRoom:

    Prototype: export default class ClassRoom
    It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize
<pre><code>
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
10
bob@dylan:~$
</pre></code>

## [1-make_classrooms.js](./1-make_classrooms.js)
Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).
<pre><code>
bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$

</pre></code>

## [2-hbtn_course.js](./2-hbtn_course.js)
Implement a class named HolbertonCourse:

    Constructor attributes:
        name (String)
        length (Number)
        students (array of Strings)
    Make sure to verify the type of attributes during object creation
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
<pre><code>
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
}
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$

</pre></code>

## [3-currency.js](./3-currency.js)
Implement a class named Currency:

    - Constructor attributes:
        code (String)
        name (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
<pre><code>
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
Dollars ($)
bob@dylan:~$
</pre></code>

## [4-pricing.js](./4-pricing.js)
Import the class Currency from 3-currency.js

Implement a class named Pricing:

    Constructor attributes:
        amount (Number)
        currency (Currency)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
    Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
<pre><code>
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$

</pre></code>

## [5-building.js](./5-building.js)
Implement a class named Building:

    Constructor attributes:
        sqft (Number)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter for each attribute.
    Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
        If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage
<pre><code>
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$

</pre></code>

## [
## [100-evcar.js](./100-evcar.js)
Import Car from 10-car.js.

Implement a class named EVCar that extends the Car class:

    Constructor attributes:
        brand (String)
        motor (String)
        color (String)
        range (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.
<pre><code>
bob@dylan:~$ cat 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$

</pre></code>
