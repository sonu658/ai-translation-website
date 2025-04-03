async function translateText() {
    let text = document.getElementById("input-text").value;
    let lang = document.getElementById("lang-select").value;

    if (text.trim() === "") {
        alert("⚠️ Please enter some text.");
        return;
    }

    // Placeholder API (Replace with real AI backend later)
    let googleTranslation = `Translated: ${text} (in English)`;
    let refinedGrammar = `Refined: ${text.replace("bad grammer", "correct grammar")}`;
    let accuracyScore = "BERTScore: 92.5%";

    document.getElementById("translation-result").innerText = googleTranslation;
    document.getElementById("grammar-result").innerText = refinedGrammar;
    document.getElementById("accuracy-score").innerText = accuracyScore;
}
