var cats = ['kitty','casper','bony'];
cats.forEach(
  function(item){
    console.log("Meow By : "+item);
  }
);
console.log(cats);

var dogs = {
  count : 1,
  dogName : '',
  bark : function(){
    return 'guk';
  },
  dogCount : function(){
    return this.count;
  },
  setName : function(name){
    this.dogName = name;
  },
  getName : function(){
    return this.dogName;
  }
};

dogs.setName('Doggy');
console.log(dogs.bark());
console.log(dogs.dogCount());
console.log(dogs.getName());
