const ai_api = String(localStorage.getItem("ai_api"));

function sendMessage() {
    const userInput = $('#user-input').val();
    
    // Add user message to the chat log
    appendMessage('User', userInput);

    // Send user message to your OpenAI chatbot API
    // Replace 'YOUR_OPENAI_API_KEY' and 'YOUR_MODEL_ID' with your actual API key and model ID
    const apiKey = ai_api;
    console.log("Fetching API from server: ", apiKey);
    const modelId = 'gpt-3.5-turbo';
    const apiUrl = `https://api.openai.com/v1/chat/completions`;

    $.ajax({
        url: apiUrl,
        type: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        data: JSON.stringify({
            model: modelId,
            messages: [{ role: 'system', content: 'You are CareerCrafter, a career counselor chatbot. Only answer questions based on career advice, subjects. if asked anything else reply i dont know' }, { role: 'user', content: userInput }]
        }),
        success: function (response) {
            // Add chatbot response to the chat log
            response.choices[0].message.content.replace(/\\n/g, '<br>');
            const chatbotResponse = response.choices[0].message.content;
            appendMessage('Chatbot', chatbotResponse.replace(/\n/g, '<br>'));
            console.log(chatbotResponse.replace(/\n/g, '<br>'));
        },
        error: function (error) {
            console.error('Error sending message to OpenAI:', error);
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
