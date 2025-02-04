
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
  
    messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
  

      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.textContent = message.text;
      

      const dateElement = document.createElement('div');
      dateElement.classList.add('date');
      dateElement.textContent = message.date;
  
      messageElement.appendChild(contentElement);
      messageElement.appendChild(dateElement);
  
      messagesContainer.appendChild(messageElement);
    });
  }
  

  function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
  
    if (message) {
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      
      const now = new Date();
      const date = now.toLocaleString();
      
      messages.push({ text: message, date: date });
      
      localStorage.setItem('messages', JSON.stringify(messages));
      messageInput.value = '';
      loadMessages();
    }
  }
  

  window.onload = loadMessages;
  
