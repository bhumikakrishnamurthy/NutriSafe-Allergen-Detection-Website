import { GoogleGenerativeAI } from "@google/generative-ai";

document.querySelector("#file-upload").onchange = function(){
  document.querySelector("#file-name").textContent = this.files[0].name;
}

const submitButton = document.getElementById("submit");

console.log("loading1...");
// Access your API key (see "Set up your API key" above)
const API_KEY = "AIzaSyAR1LlrC0a_vui72x5rbkhQiv7mR2LI9Lk";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// Converts a File object to a GoogleGenerativeAI.Part object.
async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

async function run() {
  console.log("Loading...")
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let prompt = "List all the ingredients in this label, with each ingredient in a new line. No other text apart from the ingredients.";

  const fileInputEl = document.querySelector("input[type=file]");
  const imageParts = await Promise.all(
    [...fileInputEl.files].map(fileToGenerativePart)
  );

  let result = await model.generateContent([prompt, ...imageParts]);
  let response = await result.response;
  let text = response.text();
  console.log(text);
  let formattedText = text.replace(/\n/g,"<br>")
  document.getElementById("response1").innerHTML=formattedText;
  console.log("Complete");

  prompt = "List of things I do not eat - gluten. If it is safe to eat, just say yes. If it is not, say no and state the reason why in 2 sentences."
  result = await model.generateContent([prompt, ...imageParts]);
  response = await result.response;
  text = response.text();
  document.getElementById("response2").innerHTML=text;
  console.log("Complete");

  prompt = "Identify the food item or type of food item that the list of ingredients is for. Classify it as highly processed food, natural/not processed food and slightly processed food. Based on the food item, suggest 3 other healthy recipes similar to the food item. Reply in plain text"
  result = await model.generateContent([prompt, ...imageParts]);
  response = await result.response;
  text = response.text();
  formattedText = text.replace(/\n/g,"<br>")
  document.getElementById("response3").innerHTML=formattedText;
  console.log("Complete");
}

submitButton.addEventListener("click",run);


