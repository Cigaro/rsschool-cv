const btn = document.querySelector(".menu-btn");
const content = document.querySelector(".hide");
const content1 = document.querySelector(".hide1");
const content2 = document.querySelector(".hide2");
const img = document.querySelector('.welcome-slider');
const small = document.querySelector('.welcome-small');

btn.addEventListener("click", btnClick);

      function btnClick() {
        console.log(content.classList);

        if (content.classList.contains("hidden")||content1.classList.contains("hidden")||content2.classList.contains("hidden")||img.classList.contains("hidden") ) {
          content.style.display = content1.style.display = content2.style.display = img.style.display ="";
        } else {
          content.style.display = content1.style.display = content2.style.display = img.style.display ="none"
        }

        content.classList.toggle("hidden");
        content1.classList.toggle("hidden");
        content2.classList.toggle("hidden");
        img.classList.toggle("hidden");
      }

      btn.addEventListener("click", showMenuDiv);

      function showMenuDiv(){
        console.log(small.classList);
        if (small.classList.contains("hidden")) {
          small.style.display= "none";
        } else {
          small.style.display ="block";
        }
        small.classList.toggle("hidden");
      }