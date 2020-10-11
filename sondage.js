var user = prompt("Entrez votre pseudo", "");

var name_balise = $("#name");
name_balise.hide();

if (user != null) {
    name_balise.show();
    document.getElementById("name").innerHTML =
        "Bonjour " + user + " !";
}

Sondage = {
    title : "Pistons vs Wizard",
    questions : [

        {questionTitle : "Vainqueur du match ?",
        answers : [

            {choice : "Detroit Pistons", img : "", isRight : true},
            {choice : "Washington Wizards", img : "", isRight : false}
        ]},

        {questionTitle : "Effectif Pistons:",
            answers : [

                {choice : "Reggie Jackson", img : "", isRight : false},
                {choice : "Tony Snell", img : "", isRight : false},
                {choice : "Blake Griffin", img : "", isRight : false},
                {choice : "Bruce Brown", img : "", isRight : false},
                {choice : "Andre Drummond", img : "", isRight : true},
        ]},

        {questionTitle : "Effectif Wizards:",
            answers : [

                {choice : "Ish Smith", img : "", isRight : false},
                {choice : "Rui Hachimura", img : "", isRight : false},
                {choice : "Dāvis Bertāns", img : "", isRight : false},
                {choice : "Bradley Beal", img : "", isRight : false},
                {choice : "Thomas Bryant", img : "", isRight : true}
            ]},
]};

var nb_questions = Sondage.questions.length;
var good_responses = 0;

generateQuestion();

function generateQuestion() {
    Sondage.questions.forEach(function (question, index_question){
        document.getElementById('question_' + index_question).innerHTML = question.questionTitle;
        question.answers.forEach(function (answer, index_answer){
            document.getElementById('response_' + index_question + '_' + index_answer).innerHTML = answer.choice;
        })
    })
}

$(".valide").click(function () {

    let error = false;

    Sondage.questions.forEach(function (question, index_question){
        document.getElementById('question_' + index_question).innerHTML = question.questionTitle;
        let checked = 0;
        let exist_checked = false;
        question.answers.forEach(function (answer, index_answer){
            let check = document.getElementById('checkbox_' + index_question + '_' + index_answer);
            if(check.checked) {
                checked++;
                exist_checked = true;
                if(answer.isRight) good_responses++;
            }
        })

        if(checked > 1 || exist_checked === false) error = true;
    })

    if(error) return alert("Vous devez cocher 1 case par question!");

    let result = ((good_responses/nb_questions)*100).toFixed(2);
    alert('votre score: ' + result + "/100");

    good_responses = 0;

    var result_div = $("#resultat");
    result_div.hide();

    if (result != null){
        result_div.show();
        document.getElementById("resultat").innerText = "Vous avez eu " + result + " points sur 100";
    }



})



