let myPra = document.getElementById("para");
let myInp = document.getElementById("texta");
let myBtn = document.getElementById("countbtn");
let setWords = ["My Name is Abdul Moiz","I am a Front End Developer"];
let startTime,endTime;
let play = () => {
    let myRand = Math.floor(Math.random()*setWords.length);
    myPra.innerText = setWords[myRand];
    let myDate = new Date();
    startTime = myDate.getTime();
    myBtn.innerText = "Done";
};
let end = () => {
    let myDate = new Date();
    endTime = myDate.getTime();
    let totalTime = ((endTime-startTime)/1000);
    // console.log(totalTime);
    let totalWords = myInp.value;
    let wordCount = wordCounter(totalWords);
    let mySpeed = Math.round((wordCount/totalTime)*60);
    let myResult = `You Typed Total  at ${mySpeed} Words Per Minutes`;
    myResult += compareWords(myPra.innerText,totalWords);
    myPra.innerText = myResult;
};
let compareWords = (wordStr1,wordStr2) =>{
    let myWordOne = wordStr1.split(" ");
    let myWordTwo = wordStr2.split(" ");
    let myCount = 0;
    myWordOne.forEach((value,index) => {
        if(value == myWordTwo[index]){
            myCount++;
        }
    });
    let wordsError = myWordOne.length-myCount;
    return(` ${myCount} Correct Out of ${myWordOne.length} Words and the Total Number of Error are ${wordsError} .`);
};
let wordCounter = (str) => {
    let myResponse = str.split(" ").length;
    return myResponse;
};
myBtn.addEventListener("click", () => {
    if(myBtn.innerText == "Start"){
        myInp.disabled = false;
        play();
    }else if(myBtn.innerText == "Done"){
        myInp.disabled = true;
        myBtn.innerText = "Start";
        end();


    }
});