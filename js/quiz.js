const quizData = [
    {
        question: "1. What's your favourite time of the year?",
        options: [
            { text: "Spring, time to frolic and plot world domination yippieeee", type: "lazy" },
            { text: "Summer (you are going to hell for that opinion)", type: "nerdy" },
            { text: "Autumn, i like watching nature die", type: "goth" },
            { text: "Winter, i dont have sm funny to say for this one rip", type: "gamer" }
        ]
    },
    {
        question: "2. Do you prefer mornings or nights?",
        options: [
            { text: "Mornings", type: "sweet" },
            { text: "Nights", type: "lazy" },
            { text: "Twilight, the mysterious hour", type: "goth" },
            { text: "Time is a social construct dumbass", type: "edgy" },
            { text: "none.", type: "gamer" },
        ]
    },
    {
        question: "3. Do you even like carrots???",
        options: [
            { text: "ew,, vegetable", type: "gamer" },
            { text: "yeah", type: "sweet" },
            { text: "i only eat meat.", type: "goth" },
            { text: "i only eat human meat..", type: "edgy" },
            { text: "Ğ̴̥̘͉̫̻̲̀I̵̠̖̮̩̻̟͌V̷̭̫̤̫̦̟̓̔͒Ẻ̶̦͆̃̀̃ ̷̗̟̺̖͙́̓M̵̜̎È̶͉̹̦̓̈́̔̕ ̵̪̜̔̈́̍͜͝͠H̸̨̜̞̯̥̎́́͐͌͠Ű̷̧̡̨̗̖̳̍̕͠M̵̡̧̟͖̣̪͌̅̑͗̚͘Ä̴̜̜̖͑͛N̸͎̠̳̽͑̈̈́̈́͝ ̸͈̒̀̏M̷͓̖̯͕͋͂E̵̡̛̖̽͛͌͂͜Ḁ̶̡̭̈̀͊̈͜Ť̷̢͇͙͈̮͛", type: "edgy" }
        ]
    },
    {
        question: "4. What's your favourite type of weather?",
        options: [
            { text: "sunny", type: "sweet" },
            { text: "rainy", type: "goth" },
            { text: "snowy", type: "lazy" },
            { text: "foggy", type: "gamer" },
            { text: "no weather at all, just eternal darkness", type: "edgy" }
        ]
    },
    {
        question: "5. Are you more introverted or extroverted?",
        options: [
            { text: "Introverted, pls leave me alone", type: "lazy" },
            { text: "Extroverted.", type: "sweet" },
            { text: "Both", type: "sweet" },
            { text: "Social interaction? nah fam", type: "gamer" }
        ]
    },
    {
        question: "6. Sweet or savoury snacks?",
        options: [
            { text: "sweet", type: "sweet" },
            { text: "savoury", type: "gamer" },
            { text: "H̵̦̻͝U̴̧̪̺̲̇̌M̸̛̩̱̼̟̭͛͂̋̆̕A̶̠̯̿̕N̵̨̼̱̪̋̿̑̒͝ ̶̟̱͆̎̾̚͝M̸̫͈̹̓̂È̸̛̂̏͜A̴͕̺͈̔͘T̸͎̰͕͈̼͑", type: "edgy" },
            { text: "i like both :)))))))))))))))))))))))))))))))))))))))", type: "nerdy" }
        ]
    },
    {
        question: "7. Do you collect things?",
        options: [
            { text: "I collect souls… just kidding… maybe", type: "goth" },
            { text: "Yes, my collection of random trash is thriving", type: "nerdy" },
            { text: "No, I am lame", type: "lazy" },
            { text: "Every chest I see must be opened.", type: "nerdy" },
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
            { text: "Balck void liquid????", type: "edgy" }
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
           style="max-width:400px; margin-top:4px;">
    `;
    }
    if (highest === "goth") {
        resultText = `
      <p>You are an emo bunny!</p>
      <br>
      <img src="https://i.postimg.cc/yxY4S4cR/Emo-min.png"
           alt="goth bunny"
           style="max-width:400px; margin-top:4px;">
    `;
    }
    if (highest === "edgy") {
        resultText = `
      <p>You are an edgy bunny!<br> ok edgelord </p>
      <br>
      <img src="https://i.postimg.cc/RFTxFV69/Edgy-min.png"
           alt="edgy bunny"
           style="max-width:400px; margin-top:4px;">
    `;
    }
    if (highest === "lazy") {
        resultText = `
      <p>You are a lazy bunny!</p>
      <br>
      <img src="https://i.postimg.cc/SRT06Tfv/Lazy-min.png"
           alt="lazy bunny"
           style="max-width:400px; margin-top:4px;">
    `;
    }
    if (highest === "nerdy") {
        resultText = `
      <p>You are a nerdy bunny!</p>
      <br>
      <img src="https://i.postimg.cc/2j2fNyN7/Nerdy-min.png"
           alt="nerdy bunny"
           style="max-width:400px; margin-top:4px;">
    `;
    }
    if (highest === "gamer") {
        resultText = `
      <p>You are a gamer bunny!!</p>
      <br>
      <img src="https://i.postimg.cc/RqrjtMhg/Gamer.png"
           alt="gamer bunny"
           style="max-width:400px; margin-top:4px;">
    `;
    }
    resultDiv.innerHTML = resultText;
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