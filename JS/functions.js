function Person(first, last) {

  //Here first name, last name are public variables.
  this.firstName = first;
  this.lastName = last;

  // this is a private variable.
  var privateFullName;
  
  // this is a private function cant be called directly.
  var privateGetFullName = ()=>{
     privateFullName = this.firstName + " " + this.lastName;
    return privateFullName;
  }

  //this is a privilaged function.
  this.privilagedGetFullName = function () {
    // privateFullName = this.firstName + " " + this.lastName;
     return privateGetFullName();// should not be called with this.
  };

  // this is a public function.this synatax can be with in the functio or outside the function.
  Person.prototype.publicGetFullName = function(){
    //  privateFullName = this.firstName + " " + this.lastName;
      // return privateGetFullName(); valid
      return this.privilagedGetFullName();
  }
}

var myFather = new Person("Kanumuri", "Teja");

// privilaged and public functions can be accessable from outside,but where as private functions are not accessable.
console.log(myFather.privateFullName);// undefined
console.log(myFather.privateGetFullName);//undefined
console.log(myFather.privilagedGetFullName());//Kanumuri Teja
console.log(myFather.publicGetFullName());//Kanumuri Teja

myFather.nationality="India"; // this is specific to only myFather this is like a public member;
console.log(myFather.nationality);//India

// if we want to add to the constructor then we should add to the prototype.(public static fields)
Person.prototype.age = 10;
console.log(myFather.age);//10
Person.state='ap';//this is like static field
console.log(myFather.state);//undefined
console.log(Person.state);//ap. this is preferred for const never changing fields.

//adding to a prototype a function. this is a public method.passing the dynamic object.
Person.prototype.fullDetails = function(info){
  return  `my name is: ${info.publicGetFullName()} and my age is ${info.age} and belongs to ${info.nationality} ${Person.state}`;
}
console.log(myFather.fullDetails(myFather));


// Inheritance. here Employee inherits a person.
function Employee(){
  var _salary;
  
  Object.defineProperty(this,"salary",{
    get: function()
    { 
      console.log('GET'+_salary);    
      return  _salary
    },
    set: function(value)
    {
      if(value > 10)
      //   alert('this guys salary is more than 10')
      return;
      else
      _salary = value;
    }
  });
  
  this.GetSalary = ()=> 
  {
  //   console.log(this._salary);// undefined
    return _salary;
  };
}

var p  = new Person('K','S');
//  Employee.prototype = p;  // this is inheritance. Employee.prototype = Object.create(p);
var e = new Employee();
e.salary = 10;// set function is invoked here
console.log(e.salary);//10.  get func is invoked here
console.log(`${e.fullDetails(p)} and  my salary is ${e.GetSalary()}`);
//my name is: K S and my age is 10 and belongs to undefined ap and  my salary is 10
//(nationality is undefied as it is specific to myFather)


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Object.Create()  // extending base class to the subclass 
Object.assign()  // create a copy of the object. this is a shallow copy
JSon.parse(Json.stringify(objName))// thi is a deep copy
Object.defineProperty() // define properties get{} set{}