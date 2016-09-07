var person = {
  name: 'lala',
  email: 'laskdfj',
  location: 'place',
  describe: function(){
    console.log(`${this.name} hahaha ${this.email} hahaha ${this.location}` );
  }
}

person.describe()