   var button = document.querySelector(".search-button");
   var popup = document.querySelector(".find-form");
   var time = popup.querySelector(".search-input");

   button.addEventListener("click", function (evt) {
       evt.preventDefault();
       popup.classList.toggle("form-show");
       time.focus();
   });
   window.addEventListener("keydown", function (evt) {
       if (evt.keyCode === 27) {
           if (popup.classList.contains("form-show")) {
               evt.preventDefault();
               popup.classList.remove("form-show");
           }
       }
   })
