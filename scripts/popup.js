const myForm = document.querySelector('#form');
const sendButton = document.querySelector('#sendButton');
const resetButton = document.querySelector('#resetButton');

const modal = $("#overlay__js");
const content = modal.find(".popup__text");


sendButton.addEventListener('click', function(event){
	event.preventDefault();


	console.log(myForm.elements);

  const errorFields = find(".input-error");
  if (errorFields.length == 0) {
    $ajax({
      URL: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),

      },

      success: data => {
        content.text(data.message)
        console.log(data);
        
      },
      error: () => {
        const message = "Ошибка сервера";
        content.text(message);

        document.getElementById("sendButton").addEventListener('click', function(){
          document.getElementById("overlay__js-error").classList.add("open")
        })
      
        document.getElementById("close").addEventListener('click', function(){
          document.getElementById("overlay__js-error").classList.remove("open")
        })
      
        document.querySelector("#overlay__js-error .popup__error").addEventListener('click', event => {
          event._isClickWithInModal = true;
        })
      
        document.querySelector("#overlay__js-error").addEventListener('click', event => {
          if (event._isClickWithInModal) return;
          event.currentTarget.classList.remove("open")
        })
    
        console.log(data);

      }
    });

    document.getElementById("sendButton").addEventListener('click', function(){
      document.getElementById("overlay__js").classList.add("open")
    })
  
    document.getElementById("close").addEventListener('click', function(){
      document.getElementById("overlay__js").classList.remove("open")
    })
  
    document.querySelector("#overlay__js .popup").addEventListener('click', event => {
      event._isClickWithInModal = true;
    })
  
    document.querySelector("#overlay__js").addEventListener('click', event => {
      if (event._isClickWithInModal) return;
      event.currentTarget.classList.remove("open")
    })

    console.log(data);
  }

  
})