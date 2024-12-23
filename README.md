# Capricorn ChatBot </br>

![Capricorn](https://github.com/user-attachments/assets/7d5d0d23-5643-4c09-b36c-87ff7dddb317) </br>

Capricorn ChatBot is an intelligent conversational agent designed to provide engaging and meaningful interactions using the latest Generative AI models. It offers a sleek interface with dark and light mode themes, suggestions, and supports features like saving chats locally and a typing animation effect. </br>
# Features </br>

    Generative AI Responses: Powered by Google's Generative Language API (gemini-1.5-flash), Capricorn ChatBot provides insightful and contextually relevant answers. </br>
    Theme Toggle: Switch between light and dark mode to suit your preference. </br>
    Chat Persistence: Chats are saved locally using localStorage for future reference. </br>
    Typing Animation: Realistic typing effect for a more interactive user experience. </br>
    Suggestions: Predefined suggestions for quick and easy interaction. </br>
    Message Copy: Easily copy messages to the clipboard for reuse. </br>

# Setup Instructions </br>
# Prerequisites </br>

    A modern browser with JavaScript enabled. </br>
    Google API Key with access to Generative Language API. </br>

# Installation </br>

    Clone the repository: </br>

git clone https://github.com/MuchiriKinyua/capricorn-chatbot.git </br>

# Navigate to the project directory: </br>

    cd capricorn-chatbot </br>

    Open the index.html file in your browser to launch the chatbot. </br>

# Configuration </br>

    API Key: Replace the placeholder API_KEY in the JavaScript file with your actual Google API key: </br>

const API_KEY = "YOUR_GOOGLE_API_KEY"; </br>

Generative API URL: Ensure the API URL points to the appropriate endpoint: </br>

    const API_URL = ``; </br>

# Usage </br>

    Launch the index.html file in your browser. </br>
    Interact with the chatbot by typing in the input field or selecting from the predefined suggestions. </br>
    Toggle between light and dark mode using the theme button. </br>
    Delete all saved chats using the delete button. </br>
 
# File Structure </br>

Capricorn ChatBot/ </br>
├── index.html         # Main HTML file </br>
├── style.css          # Stylesheet for the chatbot </br>
├── script.js          # Core JavaScript functionality </br>
├── images/            # Avatar and other images </br>
│   ├── images.jpeg    # User avatar </br>
│   ├── capricorn.png  # AI avatar </br>
├── README.md          # Project documentation </br>

# Customization </br>

    Styling: Modify style.css to customize the chatbot's appearance. </br>
    Suggestions: Update the suggestion-list in the index.html file to add/remove suggestions. </br>

# Known Issues </br>

    Error Handling: If the API request fails, an error message is displayed in the chat. </br>

    Typing Effect Delay: The typing animation may cause delays in displaying long messages. </br>

# Future Enhancements </br>

    Add multilingual support. </br>
    Integrate voice input/output functionality. </br>
    Improve error handling with detailed error codes.

