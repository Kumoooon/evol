let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "Learn to JavaScript",
    "Learn to React",
    "Learn to Postgresql",
  ];

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let selectString = stringArr[rand(0, stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

const blink = () => {
  target.classList.toggle("active");
};
setInterval(blink, 500);
setInterval(dynamic(randomString()), 3000);
