$(document).ready(function () {
  console.log("doc is ready");

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    
    let userName = $("#userName").val();
    console.log("user name = ", userName);

    console.log("name search f/n = ", nameLength(userName));

    console.log("you clicked the button");
     $("#coolNameFactsOutput").html(nameSearch(userName));

  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = nameS(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>";

  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {

  return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
  return "the first letter of your name is " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;

  return "the last letter of your name is " + name[lastIndex];
}

function reverseName(name) {

  let arrName = name.split();

  revName = arrName.reverse();
}

function getSpiritAnimal(x) {
  
  if (x.length == 3) {
    return "you are slug!";
  } else if (x.length > 10) {
    return "u spirit animal is iguana";
  } else {
    return "u are nothing.";
  }
}