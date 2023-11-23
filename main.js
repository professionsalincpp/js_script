test = {
  question_1: {
    title: "title",
    radio: {
      1: "1",
      2: "2",
      3: "3",
    },
    right: "2",
  },
};
const toTestId = (test_object) => {
  let id = "";
  question_number = 0;
  for (let key in test_object) {
    id += "#";
    id += question_number;
    id += "$t~" + test_object[key].title + "~";
    id += "$r";
    for (let radio_key in test_object[key].radio) {
      id += "/" + radio_key;
      id += "~" + test_object[key].radio[radio_key] + "~";
    }
    id += "&" + test_object[key].right;
  }
  return id;
};
const dict_f = (dict) => {
  return JSON.parse(JSON.stringify(dict));
};
const print_dict = (dict) => {
  for (let key in dict) {
    console.log("    " + key + ": " + dict[key] + ",");
  }
};

console.log(toTestId(test));

// #0$t~title~$r1~1~2~3~&2

const fromIdToTest = (id) => {
  let test = {};
  questions = id.split("#");
  console.log(questions);
  q_count = 0;
  for (let question in questions) {
    if (questions[question] == "") {
      console.log("break");
      continue;
    }
    console.log("question_" + q_count);
    test["question_" + q_count] = {};
    const question_dict = test["question_" + q_count];
    for (let num in questions) {
      let char = questions[question][num];
      if (char == "$") {
        console.log("yes");
        if (questions[question][num + 1] == "t") {
          let text = "";
          var count = 1;
          while (questions[question][num + 1 + count] != "~") {
            text += questions[question][num + 1 + count];
            count++;
          }
          test["question_" + q_count].title = text;
          console.log("title: " + test["question_" + q_count].title);
        } else if (questions[question][num + 1] == "r") {
          let radio_dict = {};
          var count = 1;
          count = 0;
          let radio_key = 1;
          while (questions[question][num + 1 + count] != "&") {
            let radio_value = "";
            while (questions[question][num + 1 + count] != "~") {
              radio_value += questions[question][num + 1 + count];
              count++;
            }
            test["question_" + q_count].radio[radio_key] = questions[question][
              num + 1
            ][radio_key] = radio_value;
            radio_key += 1;
          }
          radio_dict[radio_key] = radio_value;
        }
      }
      if (char == "&") {
        test["question_" + q_count]["right"] = questions[question][num + 1];
      }
    }
    q_count += 1;
  }
  return test;
};

console.log(parsed.question_0.title);
for (let key in parsed) {
  console.log(key + " :  {");
  console.log(`  title : ${key.title},`);
  console.log(`  radio : {\n${print_dict(key.radio)}  \n},`);
  console.log("}");
}
let page;
test = {
  question_1: {
    title: "title",
    radio: {
      1: "1",
      2: "2",
      3: "3",
    },
    right: "2",
  },
};
