
function sendMessage() {
    const userInput = $('#user-input').val();
    
    // Add user message to the chat log
    appendMessage('User', userInput);

    // Call your server to fetch AI-generated message
    $.ajax({
        url: `https://openai-api-server-3r7r.onrender.com/Weather/${encodeURIComponent(userInput)}`, // Update with your actual server endpoint
        type: 'GET',
        success: function (response) {
            if (response.success) {
                // Add chatbot response to the chat log
                appendMessage('Chatbot', response.message.replace(/\n/g, '<br>'));
            } else {
                console.error('Error from server:', response.error);
            }
        },
        error: function (error) {
            console.error('Error sending message to server:', error);
        }
    });
    
    // Clear user input
    $('#user-input').val('');
}


function appendMessage(role, content) {

    const chatLog = $('#chat-log'); 
    const messageClass = role === 'User' ? 'from-me' : 'from-them';

    const message = `<p class="${messageClass}"><strong></strong> ${content}</p>`;
    
    chatLog.append(message);
    chatLog.scrollTop(chatLog[0].scrollHeight);
}
