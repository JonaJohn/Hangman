var BunchOfWords = [
    "Hitler",
    "Feuerwehr",
    "Döner",
    "Soya",
    "Haram",
    "Essen",
    "Salz",
    "Hunger",
    "Schule"
]
var ABC = "abcdefghijklmnopqrstuvwxyzäöüß".split('')
//RepositoryVersuche

console.log(BunchOfWords)//asdasd
let answer = '';
let WordStatus = null;
let guessedLetter = null;
let mistakes = 0;

myInput = document.getElementById("Input")

myInput.addEventListener("keyup", function (event){//Wird nur beim Input durchgeführt
if (event.keyCode === 13){//Wenn Enter gedrückt
document.getElementById("SelectBtn").click();//Führt das gleiche aus wie wenn man mit Maus klickt 
}
})


function RandomArrayItem(){
    answer = BunchOfWords[Math.floor(Math.random()*BunchOfWords.length)];//Random ein Wort rausholen
    console.log(answer)
}

function GuessingWord(){// soll das Wort verdecken und die einzelnen underlines für Buchstaben zeigen
    console.log(answer.length)
    WordStatus = answer.split('').map(underline).join('');
    document.getElementById("guessingWord").innerHTML = WordStatus;
}
function underline(a){
    return a = (" _ ");
}

var Versuch = 6;
let BuchstabeGefunden = false;
function VergleichenErsetzen(a){
    for(i = 0; i < answer.length; i++ )
    {
        if (a == answer[i])
        {
            KommaWordStatus[i] = a;
            BuchstabeGefunden = true;
            console.log(KommaWordStatus[i])
            document.getElementById("guessingWord").innerHTML = KommaWordStatus.join('');
        }
    }
    if (BuchstabeGefunden == false){
        Versuch--;
        mistakes++;
        var Variable = document.getElementById("text") 
        Variable.innerHTML = ("Sie haben noch "+Versuch+" von 6 Versuche");
        UpdateHangmanPicture();
    }
     
}

function UpdateHangmanPicture(){
    let ImagePath = "images\\" + mistakes + ".jpg";
    console.log(ImagePath);
    document.getElementById("HangmanPicture").src = ImagePath;
}

function Select()//Passier onclick // soll Buchstaben aufdecken falls richtig
{
    var guessedLetter = document.getElementById("Input").value;// Der Eingegebene Buchstabe
    console.log(guessedLetter);
    let Stelle = answer.split('').indexOf(guessedLetter);//Schlechte Abfrage, ob Buchstabe im Wort ist oder nicht
    console.log("An welcher Stelle der eingegebene Buchstabe ist")
    console.log(Stelle);
    VergleichenErsetzen(guessedLetter);
    GameWonAbfrage();
    GameLostAbfrage();

    document.getElementById("Input").value=("");
    BuchstabeGefunden = false;
}

//Kleine Funktionen 
function GameWonAbfrage(){
    if (answer.split('').join('') == KommaWordStatus.join('') && Versuch >= 0){
        document.getElementById("GameStatus").innerHTML = "Sie Haben GEWONNEN !!!";
        document.getElementById("Input").disabled = true;
    document.getElementById("SelectBtn").disabled = true;
    }
    

}

function GameLostAbfrage(){
    console.log(mistakes);
    if (mistakes == 6)
    {
        document.getElementById("GameStatus").innerHTML = "Sie Haben leider VERLOREN !!! "; 
        console.log("Wir sind in der If-Abfrage");
        mistakes = 5;
        document.getElementById("Input").disabled = true;
        document.getElementById("SelectBtn").disabled = true;
    }
}

RandomArrayItem();
GuessingWord();
let KommaWordStatus = answer.split('').map(underline);
