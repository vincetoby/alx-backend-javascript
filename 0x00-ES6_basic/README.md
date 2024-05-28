# READ ME

## [0-constants.js](./0-constants.js)
Modify

    function taskFirst to instantiate variables using const
    function taskNext to instantiate variables using let
test this with 0-main.js by running <pre><code>npm run dev 0-main.js</pre></code>

## [1-block-scoped.js](./1-block-scoped.js)
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}

test the code by running this code <pre><code>npm run dev 1-main.js</pre></code>

## [2-arrow.js](./2-arrow.js)
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

to test it, run 2-main.js by using this code <pre><code>npm run dev 2-main.js</pre></code>
nb: the code *function add(newNeighborhood)* is replaced by *(newNeighborhood) =>*


## [3-default-parameter.js](./3-default-parameter.js)
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.
<pre><code>
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
</pre></code>
**Execution:**
<pre><code>
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
142
56
41
</pre></code>
## [4-rest-parameter.js](./4-rest-parameter.js)
Modify the following function to return the number of arguments passed to it using the rest parameter syntax
<pre><code>
export default function returnHowManyArguments() {

}

Example:

> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
1
4
bob@dylan:~$
</pre></code>
## [5-spread-operator.js](./5-spread-operator.js)
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
<pre><code>
export default function concatArrays(array1, array2, string) {
}
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
</pre></code>
## [6-string-interpolation.js](./6-string-interpolation.js)
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
<pre><code>
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
</pre></code>
## [7-getBudgetObject.js](./7-getBudgetObject.js)
Modify the following function’s budget object to simply use the keyname instead.
<pre><code>
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
</pre></code>

## [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object
<pre><code>
function get CurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
</pre></code>
## [9-getFullBudget.js](./9-getFullBudget.js)
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
<pre><code>
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
</pre></code>

Execution:
<pre><code>
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
$20
20 euros
bob@dylan:~$
</pre></code>

## [10-loops.js](./10-loops.js)
Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.
<pre><code>
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
</pre></code>

## [11-createEmployeesObject.js](./11-createEmployeesObject.js)
Write a function named createEmployeesObject that will receive two arguments:

    departmentName (String)
    employees (Array of Strings)
<pre><code>
export default function createEmployeesObject(departmentName, employees) {

}
</pre></code>

The function should return an object with the following format:
<pre><code>
{
     $departmentName: [
          $employees,
     ],
}
</pre></code>

Execution:
<pre><code>
bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
</pre></code>

## [12-createReportObject.js](./12-createReportObject.js)
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.
<pre><code>
export default function createReportObject(employeesList) {

}
</pre></code>

createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.
<pre><code>

{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
</pre></code>

Execution:
<pre><code>
bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
</pre></code>

## [100-createIteratorObject.js](./100-createIteratorObject.js)
 Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.

This function will return an iterator to go through every employee in every department.
<pre><code>
export default function createIteratorObject(report) {

}
</pre></code>

Execution:
<pre><code>
bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$
</pre></code>

## [101-iterateThroughObject.js](./101-iterateThroughObject.js)
Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
<pre><code>
 export default function iterateThroughObject(reportWithIterator) {

 }
</pre></code>
It should return every employee name in a string, separated by |
<pre><code>
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
</pre></code>
Should return John Doe | Guillaume Salva

Reminder - the functions will be imported by the test suite.

Full example:
<pre><code>
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
>
</pre></code>
Execution:
<pre><code>
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js
Bob | Jane | Sylvie
bob@dylan:~$
</pre></code>
