/*

All questions and answers are in a an array of objects called questions

*/

let questions = [
  {question: `This famous portrait entitled Mona Lisa was created by which of the following artists?`,
    choice1: "Vincent Van Gogh",
    choice2: "Edgar Degas",
    choice3: "Leonardo da Vinci",
    choice4: "Claude Monet",
    isRight: function(answer){
        if(this.choice3 == answer){
          //totalRight++;
          return true;
        }
      else{
        return false;
      }
    },// get answer chosen and use if to determine if right. return result and increment counter....
    imgsrc: "https://imgur.com/QbtQFDM.jpg",
    imgalt: "Picture of Mona Lisa painting"
  }, 

  {question: `What are the three colors that make up the primary colors on the traditional color wheel?`,
    choice1: "Red, Green, and Blue",
    choice2:  "Green, Blue, and Orange",
    choice3:  "Red, Yellow, and Green",
    choice4:  "Blue, Yellow, and Red",
    isRight: function(answer){
        if(this.choice4 == answer){
          return true;
           //totalRight++;
          }
          else{
            return false;
          }
        //console.log(answer)
        },
  }, 

  {question: `In pottery, clay is inserted into a chamber where the high temperatures transforms the clay 
              material into a hardened substance. What is the name of this device?`,
    choice1: "Kiln",
    choice2:  "Kettle",
    choice3:  "Claybox",
    choice4:  "Easy-Bake",
    isRight: function(answer, totalRight){
        if(this.choice1 == answer){
           return true;
           //totalRight++;
          }
          else{
            return false;
          }
        //console.log(answer)
        },
    imgsrc: "https://i.imgur.com/PBZymxn.jpg",
    imgalt: "Picture of pottery tool"
  }, 

  {question: `A complex mixture that fuses to pottery when heated and creates an attractive glossy 
              surface is called _____.`,
    choice1: "Glue",
    choice2:  "Glaze",
    choice3:  "Oil Pastels",
    choice4:  "Watercolor",
    isRight: function(answer, totalRight){
        if(this.choice2 == answer){
            return true;
           //totalRight++;
          }
          else{
            return false;
          }
        //console.log(answer)
        },
  },
  
  {question: `This form of art entitled Cain and Abel by Lovis Corinth is an example of what type of medium?`,
    choice1: "Oil Pastels on Wood",
    choice2:  "Watercolor on Canvas",
    choice3:  "Acrylic on Canvas",
    choice4:  "Woodcut Relief Printing",
    isRight: function(answer, totalRight){
        if(this.choice4 == answer){
            return true;
           //totalRight++;
          }
          else{
            return false;
          }
        //console.log(answer)
        },
    imgsrc: "https://i.imgur.com/QAwHOSf.png",
    imgalt: "Pic of Cain and Abel"  
  }, ];

  let totalRight = 0;
  let index = 0;

function results(){
  $("header").text(`Results`);
  $(".results").show();
  $("#Question1").hide(); //hide all other elements but the "press to start button"
  $(".col-6").hide();
  $(".results").html(`<div class="startagain"><p>You got ${totalRight} out of ${questions.length} questions correct!</p>`);

  if(totalRight === 0){
    $(".startagain").append(`<img src="https://i.imgur.com/RsJWX5X.jpg" alt="baby with a paint brush in the mouth">
                            <p>You know nothing of the visual art world. 
                            Maybe take a stroll through your nearest art gallery soon.</p>`);
  }
  else if(totalRight <= 3){
    $(".startagain").append(`<img src="https://i.imgur.com/F9A4WBK.jpg" alt="toddler fingerpainting">
                             <p>You are but a novice in the art world. Maybe try some new art mediums 
                             to brush up on your skills</p>`);
  }
  else if(totalRight <= (questions.length-1)){
    $(".startagain").append(`<img src="https://i.imgur.com/ESjF1FE.jpg" alt="two girls staring at Mona Lisa painting">
                             <p>You are an up and coming artiste! Keep your paint brush handy and stay inspired young grasshopper.</p>`);
  }
  else if(totalRight === questions.length){
    $(".startagain").append(`<img src="https://i.imgur.com/77znb1z.jpg" alt="Bob Ross Smiling and painting">
                             <p>You're a Perfect Pacasso! You know the lingo and can navigate your way around the art galleries and studios!</p>`);
  }

  $(".startagain").append(`<button class="again">Try Again?</button></p></div>`);
  
    
  $(".results").on("click", ".again", function(event){
    $(".results").hide();
    totalRight = 0;
    index = 0;
   //console.log(`clicked ${totalRight}  ${index}`);
    $("header").html(`<h1>Do You Even Art?</h1>`);
    $(".beginButton").show();
    main();
  });//alert(`done   ${totalRight} `);
}

function pictureInput (){//toggles formatting from one column to 2 and pulls correct image info
  if('imgsrc' in questions[index])//if there's an image involved in the quiz question..
  {
    $(".col-6").show();//show picture div
    $(".picref").attr('src', questions[index].imgsrc).attr('alt', questions[index].imgalt);//input correct picture
    $(".js-question .col-12").removeClass("col-12").addClass("col-6"); //format two side by side columns
    $(".nextQuestion").removeClass("nextQuestion").addClass("nextQuestion2"); //formatting of next button needs to be change
    return true;
  }
  else if($(".js-question .col-6").show())
  {
    $(".js-question .col-6").removeClass("col-6").addClass("col-12");//reformat question div
    $(".js-pic .col-6").hide();//hide picture div
    $(".nextQuestion2").removeClass("nextQuestion2").addClass("nextQuestion");
    return false;
  }
}

function feedback(value) {
  if(questions[index].isRight(value)){
    totalRight++;
    alert("That's correct!");
  }
  else{
    alert(`${value}? No.. That's not right.`);
  }
  
  if(index === questions.length -2){
    index++;
    DisplayQuestion();
  }
  else if(index === questions.length -1)
  {
    results();//Complete! see results. Submit and go to results function page 
  }
  else{
    index++;
    DisplayQuestion();
  }
}

 //this function will trade out the questions upon a click on the submit or next question button
  
  //clear field before going to next question

function DisplayQuestion(){
  $("header").text(`Question ${index + 1} out of ${questions.length}`); // display question number at the top
  pic = pictureInput();///call picture input function which toggles formatting from one column to 2

  $(".quizTime").html(`<form id="Question1">
                      <div class ="question">${questions[index].question}</div>
                      
                      <div class="Choice1">
                      <input type="radio" name="Choices" id="Choice1" value =${questions[index].choice1} required>
                      <label for="Choice1">${questions[index].choice1}</label>
                      </div>
                      
                      <div class="Choice2">
                      <input type="radio" name="Choices" id="Choice2" value ="${questions[index].choice2}" required>
                      <label for="Choice2">${questions[index].choice2}</label>
                      </div>
                      
                      <div class="Choice3">
                      <input type="radio" name="Choices" id="Choice3" value ="${questions[index].choice3}" required>
                      <label for="Choice3">${questions[index].choice3}</label>
                      </div>
                      
                      <div class="Choice4">
                      <input type="radio" name="Choices" id="Choice4" value ="${questions[index].choice4}" required>
                      <label for="Choice4">${questions[index].choice4}</label>
                      </div>
                      
                      </form>`);

  if(index === questions.length -1) {//if its the last question..
    $("#Question1").append(`<button type="submit" class="nextQuestion2">See results</button>`);
  }
  else{
    $("#Question1").append(`<button type="submit" class="nextQuestion2">Continue</button>`);
  }
                           
 $("#Question1").submit(function(event){
        event.preventDefault();
        let value = $('input[name=Choices]:checked').val();
        feedback(value);
  });  // need to define answer and click button to submit...  //go to submit function
}


function begin(){
  $("#Question1").hide(); //hide all other elements but the "press to start button"
  $(".col-6").hide();
  $(".startup").show(); //show start up page text

  $("main").on("click", ".beginButton", function(event){
    $(".startup").hide(); // hide startup text
    $(".beginButton").hide();//hide startup button
    DisplayQuestion();
  });
}

function main()
{
  begin();
}

$(main);