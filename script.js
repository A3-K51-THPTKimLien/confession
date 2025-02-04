// Lấy các tin nhắn từ localStorage khi trang được tải
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
  
    messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
  
      // Tạo phần nội dung tin nhắn
      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.textContent = message.text;
      
      // Tạo phần hiển thị ngày gửi
      const dateElement = document.createElement('div');
      dateElement.classList.add('date');
      dateElement.textContent = message.date;
  
      messageElement.appendChild(contentElement);
      messageElement.appendChild(dateElement);
  
      messagesContainer.appendChild(messageElement);
    });
  }
  
  // Gửi tin nhắn và lưu vào localStorage
  function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
  
    if (message) {
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      
      // Lấy ngày giờ hiện tại
      const now = new Date();
      const date = now.toLocaleString(); // Định dạng ngày giờ
      
      // Thêm tin nhắn mới vào danh sách
      messages.push({ text: message, date: date });
      
      localStorage.setItem('messages', JSON.stringify(messages));
      messageInput.value = '';  // Xóa ô nhập sau khi gửi tin nhắn
      loadMessages();  // Tải lại các tin nhắn
    }
  }
  
  // Tải các tin nhắn khi trang được tải
  window.onload = loadMessages;
  