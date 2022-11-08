// Questions will be asked

const Questions = [
  {
    id: 0,

    q: "0. Whats the capital of India ?",
    a: [
      { text: "Mumbai", isCorrect: false },
      { text: "Pune", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "Nagpur", isCorrect: false }
    ]
  },
  {
    id: 1,

    q: "1. What is the capital of Germany ?",
    a: [
      { text: "Munich", isCorrect: false, isSelected: false },
      { text: "Berlin ", isCorrect: true },
      { text: "Frankfurt", isCorrect: false },
      { text: "Stuttgart", isCorrect: false }
    ]
  },
  {
    id: 2,
    q: "2. What is the capital of Thailand ?",
    a: [
      { text: "Pattaya", isCorrect: false },
      { text: "Phuket", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
      { text: "Chaing Mai", isCorrect: false }
    ]
  },

  {
    id: 3,
    q: "3. What is the capital of France ?  ",
    a: [
      { text: "Lille", isCorrect: false },
      { text: "Lyon", isCorrect: false },
      { text: "Marseille", isCorrect: false },
      { text: "Paris", isCorrect: true }
    ]
  },

  {
    id: 4,
    q: "4. What is the capital of Brazil ?",
    a: [
      { text: "Rio de Janerio", isCorrect: false },
      { text: "Brasilia", isCorrect: true },
      { text: "Sau Paulo", isCorrect: false },
      { text: "Sao Paulo", isCorrect: false }
    ]
  },

  {
    id: 5,
    q: "5. What is the capital of Italy ?",
    a: [
      { text: "Rome", isCorrect: true },
      { text: "Venice", isCorrect: false },
      { text: "Milan", isCorrect: false },
      { text: "Naples", isCorrect: false }
    ]
  },
  {
    id: 6,
    q: "6. What is the capital of Spain?",
    a: [
      { text: "Barcelona", isCorrect: false },
      { text: "Madrid", isCorrect: true },
      { text: "Mallorca", isCorrect: false },
      { text: "Ibiza", isCorrect: false }
    ]
  },

  {
    id: 7,
    q: "7. What is the capital of New Zealand?",
    a: [
      { text: "Auckland", isCorrect: false },
      { text: "Hamilton", isCorrect: false },
      { text: "Wellington", isCorrect: true },
      { text: "Queenstown", isCorrect: false }
    ]
  },

  {
    id: 8,
    q: "8. What is the capital Russia ?",
    a: [
      { text: "Moscow", isCorrect: true },
      { text: "St. Petersburg", isCorrect: false },
      { text: "Kazan", isCorrect: false },
      { text: "Samara", isCorrect: false }
    ]
  },

  {
    id: 9,
    q: "9. What is the capital of Portugal",
    a: [
      { text: "Porto", isCorrect: false },
      { text: "Braga", isCorrect: false },
      { text: "Lagos", isCorrect: false },
      { text: "Lisbon", isCorrect: true }
    ]
  },

  {
    id: 10,

    q: "10.What is the capital of Australia ?",
    a: [
      { text: "Sydney", isCorrect: false },
      { text: "Canberra", isCorrect: true },
      { text: "Melbourne", isCorrect: false },
      { text: "Brisbane", isCorrect: false }
    ]
  },

  {
    id: 11,
    q: "THANK YOU FOR TAKING THE QUIZ :) , Refresh to start again!",
    a: [
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false }
    ]
  }
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "white";
    op2.style.backgroundColor = "blue";
    op3.style.backgroundColor = "blue";
    op4.style.backgroundColor = "blue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "blue";
    op2.style.backgroundColor = "white";
    op3.style.backgroundColor = "blue";
    op4.style.backgroundColor = "blue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "blue";
    op2.style.backgroundColor = "blue";
    op3.style.backgroundColor = "white";
    op4.style.backgroundColor = "blue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "blue";
    op2.style.backgroundColor = "blue";
    op3.style.backgroundColor = "blue";
    op4.style.backgroundColor = "white";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
      b;
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next btn and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 12) {
    id++;
    iterate(id);
    console.log(id);
  }
});

//flag background changing (next)
next.addEventListener("click", () => {
  start = true;
  if (id == 1) {
    document.body.style.backgroundImage = "url('img/1.jpg')";
  } else if (id == 2) {
    document.body.style.backgroundImage = "url('img/2.jpg')";
  } else if (id == 3) {
    document.body.style.backgroundImage = "url('img/3.jpg')";
  } else if (id == 4) {
    document.body.style.backgroundImage = "url('img/4.jpg')";
  } else if (id == 5) {
    document.body.style.backgroundImage = "url('img/5.jpg')";
  } else if (id == 6) {
    document.body.style.backgroundImage = "url('img/6.jpg')";
  } else if (id == 7) {
    document.body.style.backgroundImage = "url('img/7.jpg')";
  } else if (id == 8) {
    document.body.style.backgroundImage = "url('img/8.jpg')";
  } else if (id == 9) {
    document.body.style.backgroundImage = "url('img/9.jpg')";
  } else if (id == 10) {
    document.body.style.backgroundImage = "url('img/10.jpg')";
  } else if (id == 11) {
    document.body.style.backgroundImage = "url('img/11.jpg')";
  }
});

//back btn and method
const back = document.getElementsByClassName("back")[0];
var id = 0;

back.addEventListener("click", () => {
  start = false;
  if (id != 0 && id < 11) {
    id--;
    iterate(id);
    console.log(id);
  }
});
//flag background changing (back)
back.addEventListener("click", () => {
  start = true;

  if (id == 0) {
    document.body.style.backgroundImage = "url('img/0.jpg')";
  } else if (id == 1) {
    document.body.style.backgroundImage = "url('img/1.jpg')";
  } else if (id == 2) {
    document.body.style.backgroundImage = "url('img/2.jpg')";
  } else if (id == 3) {
    document.body.style.backgroundImage = "url('img/3.jpg')";
  } else if (id == 4) {
    document.body.style.backgroundImage = "url('img/4.jpg')";
  } else if (id == 5) {
    document.body.style.backgroundImage = "url('img/5.jpg')";
  } else if (id == 6) {
    document.body.style.backgroundImage = "url('img/6.jpg')";
  } else if (id == 7) {
    document.body.style.backgroundImage = "url('img/7.jpg')";
  } else if (id == 8) {
    document.body.style.backgroundImage = "url('img/8.jpg')";
  } else if (id == 9) {
    document.body.style.backgroundImage = "url('img/9.jpg')";
  } else if (id == 10) {
    document.body.style.backgroundImage = "url('img/10.jpg')";
  } else if (id == 11) {
    document.body.style.backgroundImage = "url('img/11.jpg')";
  }
});
