# Capricorn ChatBot </br>

![Capricorn](https://github.com/user-attachments/assets/7d5d0d23-5643-4c09-b36c-87ff7dddb317) </br>

Capricorn ChatBot is an intelligent conversational agent designed to provide engaging and meaningful interactions using the latest Generative AI models. It offers a sleek interface with dark and light mode themes, suggestions, and supports features like saving chats locally and a typing animation effect. </br>
# Features </br>

    Generative AI Responses: Powered by Google's Generative Language API (gemini-1.5-flash), Capricorn ChatBot provides insightful and contextually relevant answers.
    Theme Toggle: Switch between light and dark mode to suit your preference.
    Chat Persistence: Chats are saved locally using localStorage for future reference. 
    Typing Animation: Realistic typing effect for a more interactive user experience. 
    Suggestions: Predefined suggestions for quick and easy interaction. 
    Message Copy: Easily copy messages to the clipboard for reuse.

# Setup Instructions </br>
## Prerequisites </br>

    A modern browser with JavaScript enabled. 
    Google API Key with access to Generative Language API.

## Installation </br>

    Clone the repository: 

git clone https://github.com/MuchiriKinyua/capricorn-chatbot.git 

## Navigate to the project directory: </br>

    cd capricorn-chatbot 

    Open the index.html file in your browser to launch the chatbot. 

## Configuration </br>

    API Key: Replace the placeholder API_KEY in the JavaScript file with your actual Google API key:

const API_KEY = "YOUR_GOOGLE_API_KEY";

Generative API URL: Ensure the API URL points to the appropriate endpoint:

    const API_URL = ``;

## Usage </br>

    Launch the index.html file in your browser.
    Interact with the chatbot by typing in the input field or selecting from the predefined suggestions.
    Toggle between light and dark mode using the theme button. 
    Delete all saved chats using the delete button.
 
# File Structure </br>

Capricorn ChatBot/ </br>
├── index.html         # Main HTML file </br>
├── style.css          # Stylesheet for the chatbot </br>
├── script.js          # Core JavaScript functionality </br>
├── images/            # Avatar and other images </br>
│   ├── images.jpeg    # User avatar </br>
│   ├── capricorn.png  # AI avatar </br>
├── README.md          # Project documentation  </br>

# Customization </br>

    Styling: Modify style.css to customize the chatbot's appearance. 
    Suggestions: Update the suggestion-list in the index.html file to add/remove suggestions. 

# Known Issues </br>

    Error Handling: If the API request fails, an error message is displayed in the chat. 

    Typing Effect Delay: The typing animation may cause delays in displaying long messages. 

# Future Enhancements </br>

    Add multilingual support.
    Integrate voice input/output functionality. 
    Improve error handling with detailed error codes.

