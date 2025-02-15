document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    
    const questions = [
        { 
            question: "Apa contoh zat pemanis?", 
            choices: ["A. Sakarin", "B. Fruktosa", "C. Kokain", "D. Morphin"], 
            answer: "A. Sakarin" 
        },
        { 
            question: "Berikut ini yang merupakan contoh minuman yang mengandung zat pemanis, kecuali", 
            choices: ["A. CocaCola", "B. Fruit Tea", "C. Teh Tawar", "D. Teh Botol"], 
            answer: "C. Teh Tawar" 
        },
        { 
            question: "Berikut ini jenis penyakit yang timbul akibat konsumsi zat pemanis yang berlebihan adalah...", 
            choices: ["A. DBD", "B. Diabetes", "C. AIDS"], 
            answer: "B. Diabetes" 
        },
        { 
            question: "Apa gejala obesitas?", 
            choices: ["A. Sakit kepala atau migrain", "B. Gula Darah Tinggi", "C. Kesulitan tidur"], 
            answer: "B. Gula Darah Tinggi" 
        },
        { 
            question: "Perhatikan gejala berikut ini!\n- Sakit kepala\n- Sering buang air kecil\n- Merasa sering haus dan mudah lelah\n- Sulit fokus atau penurunan kesadaran\n- Pandangan menjadi kabur\n- Berat badan menurun\nBerdasarkan gejala di atas, jenis penyakit yang diderita adalah...",
            choices: ["A. Diabetes", "B. Hipertensi", "C. Obesitas"], 
            answer: "A. Diabetes" 
        },
        { 
            question: "Apa yang harus dilakukan jika sudah kecanduan minuman manis?", 
            choices: ["A. Mengurangi konsumsi bertahap", "B. Beralih ke minuman sehat", "C. Berolahraga lebih banyak", "D. Semua benar"], 
            answer: "D. Semua benar" 
        }
    ];
    
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
        
        q.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.style.display = "block"; 
            button.style.margin = "5px 0"; 
            button.onclick = () => {
                if (choice === q.answer) {
                    alert("Jawaban Benar!");
                } else {
                    alert("Jawaban Salah!");
                }
            };
            questionElement.appendChild(button);
        });

        questionElement.appendChild(document.createElement("br"));
        quizContainer.appendChild(questionElement);
    });
}
