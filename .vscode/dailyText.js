document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Who believes in Allah and the Last Day let him not harm his neighbour; and he who believes in Allah and the Last Day let him show hospitality to his guest; and he who believes in Allah and the Last Day let him speak good or remain silent.",
        "Messenger of Allah said: 'Have taqwa (fear) of Allah wherever you may be, and follow up a bad deed with a good deed which will wipe it out, and behave well towards the people.'",
        "Who does not thank people does not thank God.",
        "Be mindful of Allah and He will protect you. Be mindful of Allah and you shall find Him with you. When you ask (for anything), ask it from Allah, and if you seek help, seek help from Allah.",
        "Fear Allah wherever you are, do good deeds after doing bad ones, the former will wipe out the latter, and behave decently towards people.",
        "Who amongst you is capable of employing it as a means to do good should do that.",
        "All the sons of Adam are sinners, but the best of sinners are those who are given to repentance."
    ];

    // Get the current date
    const today = new Date();
    // Calculate the day of the month (1-31), normalize to 0-6 to index texts array
    const dayOfMonth = today.getDate();
    const index = (dayOfMonth - 1) % texts.length;

    // Get the element where the text will be displayed
    const textElement = document.getElementById("daily-text");

    // Set the text based on the day of the month
    textElement.textContent = texts[index];
});
