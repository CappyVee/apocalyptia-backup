// var currentDisplay = function() {
//   show
// }
//
//
//
// function Scene(description, explanation, img, container){  //
//   this.description;
//   this.explanation;
//   this.img;
//   this.container = []
// }
//
// function Player(name){
//   this.name;
//   this.inventory = [];
//
// }
//
// var itemArray = ["a","b","c"];
//
// function Item(name, description, itemImg){
//   this.name = name;
//   this.description = description;
//   this.itemImg = itemImg;
// }
//
// var getItem = function(itemInput) {
//   if (container.includes(itemInput))
//   inventory.push(itemInput);
//   alert(inventory);
// } else alert("no such item!");
//
// Player.prototype.examine = function(){
//
// }
//
// function Problem(keyItem){
//   if (inventory.includes(keyItem){
//     return success;
//   } else
//   return failure;
// }
//
//
// Player.prototype.use = function(item){
//   if Player.inventory.includes(item){
//     return success;
//   } else
//   return failure;
// }
//
//
// titleScreen = new Scene(
//   description = "Welcome to hell";
//   explanation = "You wake up in a tube, covered with blue slime. It tastes worse than it smells"
//   img = backgroundTitle.jpg
//   container = ["book", "thing"];
// )
//
//////OBJECTS??
var ObjExamine = {
  "items": ["CRYOTUBE", "FLOOR"],
  "description":["The cryotube looks as though it is filled with blue raspberry Jell-O.", "Believe it or not, it's a floor"]
};

//////LIST OF ARRAYS
var inventoryArray = [];
var useArray = ["DOOR", "BUTTON"];
var examineArray = ["CRYOTUBE", "FLOOR"];
var takeArray = ["SCREWDRIVER", "TAPE", "DOGFOOD"];

////LIST OF FUNCTIONS that empower USER ACTIONS
var useFeature = function(useInput) {
  for (i = 0; i < useArray.length; i++) {
    if (useArray[i] === useInput) {
      return "YOU USED SOMETHING";
    }
  }//end for loop
  return "you used nothing";
}//end examineFeature function

var examineFeature = function(examineInput) {
  for (i = 0; i < ObjExamine.items.length; i++) {
    if (ObjExamine.items[i] === examineInput) {
      return ObjExamine.description[i];
    }
    if (examineInput === "CRYOTUBE") {
      return "The cryotube looks as though it is filled with blue raspberry Jell-O."
    }
  }//end for loop
  return "you examined nothing";
}//end examineFeature function

var takeFeature = function(takeInput) {
  for (i = 0; i < takeArray.length; i++) {
    if ((takeArray[i] === takeInput) && !(inventoryArray.includes(takeArray[i]))) {
      inventoryArray.push(takeArray[i]);
      // var removeItem = takeInput;
      // takeArray.splice( $.inArray(removeItem,takeArray) ,1 );
      takeArray.splice(takeArray.indexOf(takeInput),1); //javascript remove from takeArray
      return "YOU TOOK SOMETHING";
    }
  }//end for loop
  return "you took nothing";
}//end examineFeature function



////FRONT END
$(document).ready(function(){
  $("#use").click(function(){
    // debugger
    // event.preventDefault();
    var useInput = $("#user-command").val().toUpperCase();
    var useResult = useFeature(useInput);
    alert(useResult);
  });//end use function
  $("#examine").click(function(){
    // event.preventDefault();
    var examineInput = $("#user-command").val().toUpperCase();
    var examineResult = examineFeature(examineInput);
    alert(examineResult);
  });//end examine function
  $("#take").click(function(){
    // event.preventDefault();
    var takeInput = $("#user-command").val().toUpperCase();
    var takeResult = takeFeature(takeInput);
    alert(takeResult);
    alert(inventoryArray);
    alert(takeArray);
  });//end take function
});//end doc ready function
