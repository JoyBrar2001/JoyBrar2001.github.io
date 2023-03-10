//Old Method

// const typingText = document.getElementById("typing-text");

// const textLoad = () => {
//     setTimeout(()=>{
//         typingText.textContent = "Joy Brar";
//         typingText.style.setProperty('--Steps',typingText.textContent.length);
//     },0);
//     setTimeout(()=>{
//         typingText.textContent = "Editor";
//         typingText.style.setProperty('--Steps',typingText.textContent.length);
//     },4000);
//     setTimeout(()=>{
//         typingText.textContent = "Designer";
//         typingText.style.setProperty('--Steps',typingText.textContent.length);
//     },8000);
//     setTimeout(()=>{
//         typingText.textContent = "Freelancer";
//         typingText.style.setProperty('--Steps',typingText.textContent.length);
//     },12000);
// }

// textLoad();
// setInterval(textLoad,16000);


//New Method for typewriter effect

const typeWriterEffect = () => {
    const words = ["Joy Brar" , "Editor" , "Freelancer" , "Designer"];

    let wordCount = 0;
    let letterCount = 0;

    let currentText = "";
    let currentWord = "";

    let timeOut = 400;

    let isDeleting = false;

    const type = () => {
        if(wordCount == words.length){
            wordCount = 0;
        }
        
        currentWord = words[wordCount];

        if(isDeleting){
            currentText = currentWord.slice(0,--letterCount);
        }
        else{
            currentText = currentWord.slice(0,++letterCount);
        }

        document.getElementById('typing-text').textContent = currentText;

        timeOut = isDeleting ? 100 : 200;

        if(!isDeleting && currentText.length === currentWord.length){
            timeOut = 1000;
            isDeleting = true;
        }
        else if(isDeleting && currentText.length === 0){
            timeOut = 250;
            isDeleting = false;
            wordCount++;
        }

        setTimeout(type,timeOut);
    }

    type();
}

typeWriterEffect();


//Mouse Trailer Effect

const blob = document.getElementById("blob");

document.addEventListener('mousemove',(e)=>{
    blob.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    },{
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards"
    });
})