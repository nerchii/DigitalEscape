const quizData = [
    {
        question: "1. What's your favourite time of the year?",
        options: [
            { text: "Spring, time to frolic and plot world domination yippieeee", type: "edgy" },
            { text: "Summer (you are going to hell for that opinion)", type: "sweet" },
            { text: "Autumn, i like watching nature die", type: "goth" },
            { text: "Winter, i dont have sm funny to say for this one rip", type: "gamer" }
        ]
    },
    {
        question: "2. Do you prefer mornings or nights?",
        options: [
            { text: "Mornings", type: "sweet" },
            { text: "Nights", type: "gamer" },
            { text: "Twilight, the mysterious hour", type: "goth" },
            { text: "Time is a social construct dumbass", type: "edgy" },
            { text: "none.", type: "lazy" },
        ]
    },
    {
        question: "3. Do you even like carrots???",
        options: [
            { text: "ew,, vegetable", type: "gamer" },
            { text: "yeah", type: "sweet" },
            { text: "i only eat meat.", type: "nerdy" },
            { text: "i only eat human meat..", type: "edgy" },
            { text: "Ğ̴̥̘͉̫̻̲̀I̵̠̖̮̩̻̟͌V̷̭̫̤̫̦̟̓̔͒Ẻ̶̦͆̃̀̃ ̷̗̟̺̖͙́̓M̵̜̎È̶͉̹̦̓̈́̔̕ ̵̪̜̔̈́̍͜͝͠H̸̨̜̞̯̥̎́́͐͌͠Ű̷̧̡̨̗̖̳̍̕͠M̵̡̧̟͖̣̪͌̅̑͗̚͘Ä̴̜̜̖͑͛N̸͎̠̳̽͑̈̈́̈́͝ ̸͈̒̀̏M̷͓̖̯͕͋͂E̵̡̛̖̽͛͌͂͜Ḁ̶̡̭̈̀͊̈͜Ť̷̢͇͙͈̮͛", type: "edgy" }
        ]
    },
    {
        question: "4. What's your favourite type of weather?",
        options: [
            { text: "stupid question.", type: "edgy" },
            { text: "sunny", type: "sweet" },
            { text: "rainy", type: "gamer" },
            { text: "snowy", type: "lazy" },
            { text: "foggy", type: "goth" },
            { text: "no weather at all, just eternal darkness", type: "edgy" }
        ]
    },
    {
        question: "5. Are you more introverted or extroverted?",
        options: [
            { text: "Introverted, pls leave me alone", type: "lazy" },
            { text: "Extroverted.", type: "sweet" },
            { text: "Both", type: "goth" },
            { text: "none, why are you asking this", type: "nerdy" },
            { text: "Social interaction? nah fam", type: "gamer" }
        ]
    },
    {
        question: "6. Sweet or savoury snacks?",
        options: [
            { text: "sweet", type: "sweet" },
            { text: "savoury", type: "gamer" },
            { text: "H̵̦̻͝U̴̧̪̺̲̇̌M̸̛̩̱̼̟̭͛͂̋̆̕A̶̠̯̿̕N̵̨̼̱̪̋̿̑̒͝ ̶̟̱͆̎̾̚͝M̸̫͈̹̓̂È̸̛̂̏͜A̴͕̺͈̔͘T̸͎̰͕͈̼͑", type: "edgy" },
            { text: "i like both :)))))))))))))))))))))))))))))))))))))))", type: "lazy" },
            { text: "i dont snack.", type: "goth" },

        ]
    },
    {
        question: "7. Do you collect things?",
        options: [
            { text: "I collect souls… just kidding… maybe", type: "goth" },
            { text: "Yes, my collection of random trash is thriving", type: "nerdy" },
            { text: "No, I am lame", type: "lazy" },
            { text: "Every chest I see must be opened.", type: "gamer" },
        ]
    },
    {
        question: "8. Do you enjoy hopping around?",
        options: [
            { text: "uhhh,,no??", type: "lazy" },
            { text: "no.", type: "nerdy" },
            { text: "yes.", type: "sweet" },
            { text: "*hops into existential crisis*", type: "goth" },
            { text: "kys", type: "edgy" }
        ]
    },
    {
        question: "9. What's your favourite beverage?",
        options: [
            { text: "Water", type: "lazy" },
            { text: "Coffee", type: "nerdy" },
            { text: "Tea", type: "sweet" },
            { text: "Red wine, looks like blood hehe", type: "goth" },
            { text: "Energy drinks until my heart explodes", type: "gamer" },
            { text: "Black void liquid????", type: "edgy" },
            { text: "I dont consume liquids", type: "edgy" }
        ]
    },
];

let currentQuestion = 0;
const score = { sweet: 0, goth: 0, edgy: 0, lazy: 0, nerdy: 0, gamer: 0 };
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showResult();
        return;
    }
    const q = quizData[currentQuestion];
    let optionsHtml = "";
    q.options.forEach(option => {
        optionsHtml += `<button onclick="selectOption('${option.type}')">${option.text}</button>`;
    });
    quizDiv.innerHTML = `<div class="question">${q.question}</div><div class="options">${optionsHtml}</div>`;
}

function selectOption(type) {
    score[type]++;
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    quizDiv.innerHTML = "";
    const highest = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

    let resultText = "";

    if (highest === "sweet") {
        resultText = `
      <p>You are a sweet bunny!</p>
      <br>
      <img src="https://i.postimg.cc/bNrfyPzc/Sweet-min.png"
           alt="sweet bunny"
           width="400"
           height="400"
           style="max-width:100%; margin-top:4px;"
           loading="lazy">
    `;
    }
    if (highest === "goth") {
        resultText = `
      <p>You are an emo bunny!</p>
      <br>
      <img src="https://i.postimg.cc/yxY4S4cR/Emo-min.png"
           alt="goth bunny"
           width="400"
           height="400"
           style="max-width:100%; margin-top:4px;"
           loading="lazy">
    `;
    }
    if (highest === "edgy") {
        resultText = `
      <p>You are an edgy bunny!<br> ok edgelord </p>
      <br>
      <img src="https://i.postimg.cc/RFTxFV69/Edgy-min.png"
           alt="edgy bunny"
           width="400"
           height="400"
           style="max-width:100%; margin-top:4px;"
           loading="lazy">
    `;
    }
    if (highest === "lazy") {
        resultText = `
      <p>You are a lazy bunny!</p>
      <br>
      <img src="https://i.postimg.cc/SRT06Tfv/Lazy-min.png"
           alt="lazy bunny"
           width="400"
           height="400"
           style="max-width:100%; margin-top:4px;"
           loading="lazy">
    `;
    }
    if (highest === "nerdy") {
        resultText = `
      <p>You are a nerdy bunny!</p>
      <br>
      <img src="https://i.postimg.cc/2j2fNyN7/Nerdy-min.png"
           alt="nerdy bunny"
           width="400"
           height="400"
           style="max-width:100%; margin-top:4px;"
           loading="lazy">
    `;
    }
    if (highest === "gamer") {
        resultText = `
      <p>You are a gamer bunny!!</p>
      <br>
      <img src="https://i.postimg.cc/RqrjtMhg/Gamer.png"
           alt="gamer bunny"
           width="400"
           height="400"
           style="max-width:100%; margin-top:4px;"
           loading="lazy">
    `;
    }
    const total = Object.values(score).reduce((a, b) => a + b, 0);
    let percentages = "<div style='margin-top:15px;'><h3>Other bunny vibes:</h3>";
    for (let type in score) {
        if (type !== highest && total > 0) {
            let percent = Math.round((score[type] / total) * 100);

            percentages += `<p>${type}: ${percent}%</p>`;
        }
    }
    percentages += "</div>";

    resultDiv.innerHTML = resultText + percentages;
}
loadQuestion();

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) {
        let meta = document.querySelector("meta[name=viewport]");
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "viewport";
            document.head.appendChild(meta);
        }
        meta.content = "width=device-width, initial-scale=0.5";
    }
});