$(document).ready(function () {
  console.log("it's ready");
  
  let revName;
  
  $("#btnGetFacts").click(function(){
    let userName = $("#userName").val();
    let resultOutput = getOutput (userName);
    console.log ('You clicked the button');
    
    $("#result").html(resultOutput);
  });
});

function getOutput(userName){
  let resultOutput =' ';
  resultOutput ="<br>" + greeting(userName);
  resultOutput = "<br>" + nameLength(userName);
  resultOutput += "<br>" + nameStart(userName);
  resultOutput += "<br>" + nameEnd(userName);
  resultOutput += "<br>" + reverseName(userName);
  resultOutput += "<h3>" + getSpiritAnimal(userName);
  resultOutput += "<br>" + asking(userName);
  
  console.log ("coolFacts and spiritAnimal: " + resultOutput);
  return resultOutput;
}

function greeting(name){
  return "Welcome "+ name + "Here are your cool facts and spirit animal!";
}

function asking(name){
  return "Did you like this result "+name+"?";
}
function nameLength(name){
  return "Your name is "+ name.length+ " letters long!";
}

function nameStart(name){
  return "Your name is starting with "+ name[0]
}

function nameEnd(name){
  let lastIndex = name.length-1
  return "The last letter of your name is " + name[lastIndex]
}

function reverseName(name){
  return "Reversed your name is " + name.split("").reverse().join("");
}

function getSpiritAnimal(userName){
  if (userName.length == 3){
    return "Your Spirit Animal is CAT! 🐱" 
  }
  else if (userName.length >= 5 & userName.length <= 7){
    return "Your Spirit Animal is DOG! 🐶"
  }
  else if (userName.length >= 9 & userName.length <= 11){
    return "Your Spirit Animal is HEDGEHOG! 🦔"
  }
  else{
    return "Your Spirit Animal is PIG! 🐷"
  }
}