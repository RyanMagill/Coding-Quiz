//From scratch, build a timer-based quiz application that stores high scores client-side.

//other javascript:
//<script type="text/javascript" src="Question.js"></script>

//Global Variables:
var time = 10;
var score = 0;
var currentQuestion = 0;
var answer = true;
var trueTime;

var main = document.querySelector("main");
//document.getElementById("score").innerHTML = score;

if(currentQuestion === questionsList.length)
{
            alert("Quiz is over! Check your score!");
            main.setAttribute("class", "hide");
            window.clearInterval(trueTime);
}


//listens for user click on li tags
main.addEventListener("click", function(event) {

    var targetedClick = event.target;
    
    // Only target li tags to proceed to next classroom
    if(targetedClick.matches("li")) {

        JSON.stringify(targetedClick.textContent);

        console.log(targetedClick.textContent);
        if(targetedClick.getAttribute("data-answer") == "true"){
            score = score+1;
            console.log(score);
            document.getElementById("score").innerHTML = score;
        }
        currentQuestion++;
        
        renderQuestion();

        
    }
});

//renders current question and choices
function renderQuestion(){
    main.innerHTML = "";
    
    questionsList.forEach(function(item, indexQuestion){

        var div = document.createElement("div");

        // If item isn't current question then hide it
        if(currentQuestion != indexQuestion) {
            div.setAttribute("class", "hide");
        }
        
        var hTitle = document.createElement("h1");
        hTitle.textContent = "Q: " + item.title;

        // Create ul
        var ul = document.createElement("ul");

        // Create li tags
        item.choices.forEach(function(cName) {
            var li = document.createElement("li");
            li.textContent = cName;

            if(cName === item.answer){
                li.setAttribute("data-answer", "true");
            }else
            {
                li.setAttribute("data-answer", "false");
            }

            // append li to ul tag
            ul.append(li);
        });

        div.append(hTitle);

        div.append(ul);

        main.append(div);
    });
}

//starts timer and runs the renderQuestion function
function startQuiz(){
    trueTime = window.setInterval(myTimer, 1000);
    
    renderQuestion();
    
}

//timer
function myTimer(){
    if(time>0){
    time--;
    console.log(time);
    document.getElementById("gameTime").innerHTML = time.toString();
    }else if(time==0){
        document.getElementById("gameTime").innerHTML = time.toString();
         alert("Times up!");
         main.setAttribute("class", "hide");
        window.clearInterval(trueTime);
    }
}