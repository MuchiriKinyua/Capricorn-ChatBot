const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");

let userMessage = null;
const API_KEY = "AIzaSyCxONAPr8ZhfZtJ95eSHJ0IOaJGPSx5mkw";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

const generativeAPIResponse = async (incomingMessageDiv) => {
    const textElement = incomingMessageDiv.querySelector(".text");
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: userMessage }]
                }]
            })
        });
        const data = await response.json();
        const apiResponse = data?.candidates[0].content.parts[0].text;
        textElement.innerText = apiResponse;
    } catch (error) {   
        console.log(error);
    } finally {
        incomingMessageDiv.classList.remove("loading");
    }
}

const showLoadingAnimation = () => {
    const html = `<div class="message-content">
                    <img src="capricorn.png" alt="Capricorn Image" class="avatar">
                    <p class="text"></p>
                    <div class="loading-indicator">
                        <div class="loading-bar"></div>
                        <div class="loading-bar"></div>
                        <div class="loading-bar"></div>
                    </div>
                </div>
                <span class="icon material-symbols-rounded">
                    content_copy
                </span>`;    

    const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
    chatList.appendChild(incomingMessageDiv);

    generativeAPIResponse(incomingMessageDiv);
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".typing-input").value.trim();
    if(!userMessage) return;

    const html = `<div class="message-content">
                    <img src="images.jpeg" alt="User Image" class="avatar">
                    <p class="text"></p>
                    </div>`;    
    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerHTML = userMessage;
    chatList.appendChild(outgoingMessageDiv);

    typingForm.reset();
    setTimeout(showLoadingAnimation, 500);
}

typingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleOutgoingChat();
});