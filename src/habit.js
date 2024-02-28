class Habit {
  //   Commenting out as variables are not required to be declared initially in this case.
  //   name = "";
  //   description = "";
  //   metric = null;
  //   frequency = null;
  //   data = [];

  constructor(name, description, metric, frequency) {
    this._name = name;
    this._description = description;
    this._metric = metric;
    this._frequency = frequency;
    this.valueData = new Map();
    this.descriptionData = new Map();

    /*

    //valueData and descriptionData:

    valueData will take a date as the key, and a value pertaining to how much said habit was performed that date

    {
        date: metric
    }

    descriptionData also takes a date as a key, and a value pertaining to extra details regarding the habit that day

    {
        date: description
    }

    */
  }

  //Getters and setters:

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get metric() {
    return this._metric;
  }

  get frequency() {
    return this._frequency;
  }

  get valueData() {
    return this._valueData;
  }

  get descriptionData() {
    return this._descriptionData;
  }

  set name(name) {
    this._name = name;
  }

  set description(description) {
    this._description = description;
  }

  set metric(metric) {
    this._metric = metric;
  }

  set frequency(frequency) {
    this._frequency = frequency;
  }

  set valueData(data) {
    this._valueData = data;
  }

  set descriptionData(data) {
    this._descriptionData = data;
  }

  //Methods to create, remove, edit habit tracking data. (As well as other methods to manipulat said data):

  // Alternative idea, bundle value and description into a single object...?
  // addEntry(date, value, description) {
  //   //.toLocaleDateString() is used to remove the time from the date
  //   date = date.toLocaleDateString();
  //   this._valueData[date] = {value, description};
  // }

  addEntry(date, value, description) {
    //.toLocaleDateString() is used to remove the time from the date
    date = date.toLocaleDateString();
    this._valueData[date] = value;
    this._descriptionData[date] = description;
  }

  removeEntry(date) {
    date = date.toLocaleDateString();
    delete this._valueData[date];
    delete this._descriptionData[date];
    console.log("here");
  }

  editEntry(date, value, description) {
    //.toLocaleDateString() is used to remove the time from the date
    //As of the time of me writing this, this functions even though it's a literal clone of addEntry...?
    date = date.toLocaleDateString();
    this._valueData[date] = value;
    this._descriptionData[date] = description;
  }

  getEntry(date) {
    date = date.toLocaleDateString();
    return [date, this._valueData[date], this._descriptionData[date]];
    //Returns array containing data, useful when looking to display data later on...
  }

  // CURRENTLY NOT FUNCTIONAL:
  // CURRENTLY NOT FUNCTIONAL:
  // CURRENTLY NOT FUNCTIONAL:
  // CURRENTLY NOT FUNCTIONAL:
  // CURRENTLY NOT FUNCTIONAL:
  checkEntry(date) {
    date = date.toLocaleDateString();
    if (this._valueData.has(date) && this._descriptionData.has(date)) {
      return true;
    } else {
      return false;
    }
  }
}

//Testing

let habitTest = new Habit("name", "description", 5, "once a day");
let test = new Date();
let test2 = new Date(2022, 11, 31, 12, 30, 45, 123);
habitTest.addEntry(test, "5", "Description lol");
habitTest.addEntry(test2, "7", "Description lol");
console.log(habitTest.descriptionData);

// habitTest.removeEntry(test);
