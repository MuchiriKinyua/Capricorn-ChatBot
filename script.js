const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
const toggleThemeButton = document.querySelector("#toggle-theme-button");
const deleteChatButton = document.querySelector("#delete-chat-button");

let userMessage = null;
const API_KEY = "AIzaSyCxONAPr8ZhfZtJ95eSHJ0IOaJGPSx5mkw";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const loadLocalstorageData = () => {
    const savedChats = localStorage.getItem("savedChats");
    const isLightMode = (localStorage.getItem("themeColor") === "light_mode");
    document.body.classList.toggle("light_mode", isLightMode);
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";

    chatList.innerHTML = savedChats || "";
    chatList.scrollTo(0, chatList.scrollHeight);
}

loadLocalstorageData();

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
        const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
        showTypingEffect(apiResponse, textElement, incomingMessageDiv);
    } catch (error) {   
        console.log(error);
    } finally {
        incomingMessageDiv.classList.remove("loading");
    }
}

const copyMessage = (copyIcon) => {
    const messageText = copyIcon.parentElement.querySelector(".text").innerText;
    navigator.clipboard.writeText(messageText);
    copyIcon.innerText = "done";
    setTimeout(() => copyIcon.innerText = "content_copy", 1000);
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".typing-input").value.trim();
    if (!userMessage) return;

    const html = `<div class="message-content">
                    <img src="images.jpeg" alt="User Image" class="avatar">
                    <p class="text"></p>
                    </div>`;
    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerHTML = userMessage;
    chatList.appendChild(outgoingMessageDiv);

    typingForm.reset();
    setTimeout(() => {
        chatList.scrollTo({
            top: chatList.scrollHeight,
            behavior: "smooth"
        });
        showLoadingAnimation();
    }, 100);
};

const showTypingEffect = (text, textElement, incomingMessageDiv) => {
    const words = text.split(" ");
    let currentWordIndex = 0;

    const typingInterval = setInterval(() => {
        textElement.innerText += (currentWordIndex === 0 ? "" : " ") + words[currentWordIndex++];
        incomingMessageDiv.querySelector(".icon").classList.add("hide");

        // Autoscroll during typing effect
        chatList.scrollTo({
            top: chatList.scrollHeight,
            behavior: "smooth"
        });

        if (currentWordIndex === words.length) {
            clearInterval(typingInterval);
            incomingMessageDiv.querySelector(".icon").classList.remove("hide");
            localStorage.setItem("savedChats", chatList.innerHTML);
        }
    }, 75);
};

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
                <span onclick="copyMessage(this)" class="icon material-symbols-rounded">
                    content_copy
                </span>`;

    const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
    chatList.appendChild(incomingMessageDiv);

    // Ensure autoscroll when the loading animation is added
    chatList.scrollTo({
        top: chatList.scrollHeight,
        behavior: "smooth"
    });

    generativeAPIResponse(incomingMessageDiv);
};

toggleThemeButton.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light_mode");
    localStorage.setItem("themeColor", isLightMode ? "light_mode" : "dark_mode");
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
});

deleteChatButton.addEventListener("click", () => {
    if(confirm("Are you sure you want to delete all the messages?")){
        localStorage.removeItem("savedChats");
        loadLocalstorageData();
    }
});

typingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleOutgoingChat();
});

