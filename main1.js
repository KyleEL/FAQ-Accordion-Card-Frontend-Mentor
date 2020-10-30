$(document).ready(function() {
    $(".question").click(function() {
        //Test 1 - Working
        /* alert("Almost There"); */
        //Test 2 - Working
        /* $(".icon").css("border","1px solid black"); */
        $(this).toggleClass("bold");
        $(this, "img").toggleClass("rotate"); //Working but not the intended way

    });

    $(".icon").click(function() {
        //Test 1 - Working
        /* alert("Almost"); */
        //Test 2 - Working
        /* $(".question").css("border","1px solid black"); */
        $(this).toggleClass("rotate"); //Working
    });
});

/* document.querySelectorAll("qContainer").addEventListener("click", function() {
    document
}); */


















/* const questions = document.querySelectorAll("qna");

questions.forEach((q) => {
    const icon = q.querySelector("icon");
    const title = q.querySelector("question");

    icon.classList.toggle("rotate");

    //Event Listener for the questions.
    title.addEventListener("click", () => {
        showAnswer(); 
        
        //For Trial Purposes - Even this won't work
        alert("hey");
    });

    //Event Listener for Buttons.
    icon.addEventListener("click", () => {
        showAnswer();
    });

    function showAnswer() {
        questions.forEach((item) => {
            if (item != q) {
                item.classList.remove("visible");
            }
        });
        quest.classList.toggle("visible");
    }

}); */