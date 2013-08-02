## Oct.inhePro()

### Description

Inherit prototype. It should write before the son class.

### Syntax
	Oct.inhePro(super_class, sub_class)  => none

- super_class: <String>. Father class name.

- sub_class: <String>. Son class name.


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

	Oct.inhePro(Person, Student);

	function Student(name, sex, id) {
		Oct.inheFn(Person, this, name ,sex);
		this.id = id;
	}

	var m = new Student("mike", "man", 1010);
	m.say();
	m.sing();
	console.log(m.sex);