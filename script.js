let index = 0
afficherSlide(index)

function afficherSlide(i)
    {
    let slides = document.getElementsByClassName("slide");
    if (index >= slides.length) 
        {
            index = 0;
        }
        if (index < 0)
            {
                index = slides.length - 1;
            }
            for (let s of slides)
                {      
                 s.style.display = "none";
                }
                slides[index].style.display = "block";
    }

    function suivant()
    {
        index++;
        console.log(index);
        afficherSlide(index)
    }

    function precedent()
    {
        index--;
        console.log(index);
        afficherSlide(index);
    }
    document.querySelector(".next").addEventListener("click", suivant);
    document.querySelector(".prev").addEventListener("click", precedent);
// Recuperation des elements HTML
const modal = document.getElementById("modal");
const openButton = document.getElementById("open-modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");
const loginForm = document.getElementById("loginForm");
const protectedContent = document.getElementById("protectedContent");
/**
 * Affiche la modale
 */
function openModal() {
  modal.classList.remove("hidden");
};

// evenements
openButton.addEventListener("click", openModal);

openBtn.onclick = () => {
    modal.style.display = "block";
};

window.onclick = (event) => {
if (event.target == modal) {
    modal.style.display = "block";
  }
};

// Gestion du login
loginBtn.onclick = () => {
  const password = document.getElementById("password").value;

  // Validation simple cote client
  if(password === "1234") {
    loginForm.style.display = "none";
    errorMsg.style.display = "none";
    protectedContent.style.display = "none";
    modal.style.display = "hidden";
  } 
  else {
    errorMsg.style.display = "block";
  }
};



