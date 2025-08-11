(function () {
    // Floating button
    const toggleBtn = document.createElement("div");
    toggleBtn.id = "chatbot-toggle";
    toggleBtn.innerHTML = "💬";
    document.body.appendChild(toggleBtn);

    // Chatbot container
    const chatbot = document.createElement("div");
    chatbot.id = "chatbot";
    chatbot.innerHTML = `
        <div id="chatbot-header">
            Chatbot
            <span id="chatbot-close">✖</span>
        </div>
        <div id="chatbot-messages">Hello! How can I help you?</div>
        <input id="chatbot-input" type="text" placeholder="Type a message..." />
    `;
    document.body.appendChild(chatbot);

    const closeBtn = chatbot.querySelector("#chatbot-close");
    const input = chatbot.querySelector("#chatbot-input");
    const messages = chatbot.querySelector("#chatbot-messages");

    // Toggle function
    function toggleChatbot() {
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    }

    // Event listeners
    toggleBtn.addEventListener("click", toggleChatbot);
    closeBtn.addEventListener("click", () => chatbot.style.display = "none");

    // Auto open after 3s
    setTimeout(() => {
        chatbot.style.display = "flex";
    }, 3000);

    // Simple message sending
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && input.value.trim() !== "") {
            const msg = document.createElement("div");
            msg.textContent = "You: " + input.value;
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
            input.value = "";
        }
    });
})();
