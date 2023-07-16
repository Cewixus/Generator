const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const passLengthInput = document.getElementById("pass-length")
const passGen = document.getElementById("pass-gen")
const checks = document.querySelectorAll(".checks")
const passwordOne = document.getElementById("first-password")
const passwordTwo = document.getElementById("second-password")

initiation()
  
function initiation(){
    passLengthInput.value = 15
    passGen.addEventListener("click", generatePassword)
    passGen.addEventListener("mousedown", function(){
        passGen.style.border = "3px solid #1F2937"
    })
        passGen.addEventListener("mouseleave", function(){
        passGen.style.border = "3px solid #10B981"
    })
        passGen.addEventListener("mouseup", function(){
        passGen.style.border = "3px solid #10B981"
    })
    for(i=0; i < checks.length; i++){
    checks[i].checked = true
    passLengthInput.addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < 8) this.value = 8;
    if (v > 20) this.value = 20;
    });
    }
    passwordOne.addEventListener("click", copyToClipboard)
    passwordTwo.addEventListener("click", copyToClipboard)
}

function generatePassword(){
     passwordOne.textContent = ""
     passwordTwo.textContent = ""
     let passLength = passLengthInput.value
     let useSymbols = checks[0].checked
     let useNumbers = checks[1].checked
     let useLetters = checks[2].checked
     let characterPool = []
     
     if(!useSymbols && !useLetters && !useNumbers)
     {
        passwordOne.textContent = "Pierdol się"
        return
     }
     
     if(useSymbols){
         characterPool.push(...symbols)
     }
     if(useLetters){
         characterPool.push(...letters)
     }
     if(useNumbers){
         characterPool.push(...numbers)
     }
     for (let i=0; i < passLength; i++){
        let rndChr = Math.floor(Math.random() * characterPool.length)
        passwordOne.textContent += characterPool[rndChr]
      }
     for (let i=0; i < passLength; i++){
        let rndChr = Math.floor(Math.random() * characterPool.length)
         passwordTwo.textContent += characterPool[rndChr]
     }
}

function copyToClipboard(clicked){
   navigator.clipboard.writeText(clicked.target.innerHTML);
}
