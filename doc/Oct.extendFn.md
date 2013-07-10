## Oct.extendFn( )

### Description

Extend construct function. It should write inside the son class.

### Syntax
	Oct.extendFn(super_class, this, arg1[, arg2 ...])  => none

- super_class: <String>. Father class name.

- this: Just use "this".

- arg: The arguments should inherit from father. Make sure the order is the same as its father.

### Demo

1.Class Student inherit from Person.

	function Person(name, sex) {
	  this.name = name;
	  this.sex = sex;
	  this.type = "animal";
	  this.say = function() {
	    console.log("sex=" + sex);
	  }
	}

	Person.prototype.sing = function() {
	  console.log("sing");
	}

	Oct.extendPro(Person, Student);

	function Student(name, sex, id) {
		Oct.extendFn(Person, this, name ,sex);
		this.id = id;
	}

	var m = new Student("mike", "man", 1010);
	m.say();
	m.sing();
	console.log(m.sex);