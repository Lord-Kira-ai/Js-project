
(function() {
    //Select the input element
    const form = document.querySelector('#message-form')
    //Set up Submit Button
    form.addEventListener('submit', function(e){
        // prevent the form's default submission action
        console.log(e);
        e.preventDefault()
        //Get user's input from from
        const message = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.message-content')
    
        if (message.value === ''){
            feedback.classList.add('show')
            console.log(feedback.classList);
            setTimeout(function(){
            feedback.classList.remove('show');
            // console.log(feedback.classList);
            }, 2000)
        } else {
            //Change message content and clear the message input
            messageContent.textContent = message.value
            message.value = ''
        }
    })
    })()
    