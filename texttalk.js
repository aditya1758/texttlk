// Function to make the browser speak the given text
function speak (text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text= text;
  speech.pitch=1;
  speech.rate =0.9;
  
  
  window.speechSynthesis.speak(speech);
}


// Initial greeting on page load
window.onload = function() {
	speak("Hello, I am aditya . what should I speak for you? Is there anything I can help you with sir");
};


// Event listener for thespeak button 
document.getElementById('speak-btn').addEventListener('click', function() {
	const text = document.getElementById('text-input').value;
	if (text.trim() ==='') {
		alert(' Please enter some text');
		return;
	}
	 
speak(text};
});	 