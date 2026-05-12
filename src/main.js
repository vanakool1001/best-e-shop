import { createCounter } from "./components/counter.js";
import { getRandomQuote } from "./api.js";
import { rollDiceAndSum } from "./utils/math.js";

const logElement = document.getElementById("log");

function log(message) {
  const time = new Date().toLocaleTimeString();
  const line = document.createElement("div");
  line.textContent = `[${time}] ${message}`;
  logElement.prepend(line);
}

// Setup counter
const counterRoot = document.getElementById("counter-root");
const counter = createCounter(counterRoot, {
  initial: 0,
  onChange(value) {
    log(`Counter changed to ${value}`);
  }
});

// “API” button
const apiButton = document.getElementById("api-button");
const quoteOutput = document.getElementById("quote-output");

apiButton.addEventListener("click", async () => {
  quoteOutput.textContent = "Loading...";
  log("Fetching random quote...");
  try {
    const quote = await getRandomQuote();
    quoteOutput.textContent = `"${quote.text}" — ${quote.author}`;
    log("Quote loaded successfully.");
  } catch (err) {
    console.error(err);
    quoteOutput.textContent = "Failed to load quote.";
    log("Error while loading quote.");
  }
});

// Math button
const mathButton = document.getElementById("math-button");
const mathOutput = document.getElementById("math-output");

mathButton.addEventListener("click", () => {
  const { rolls, sum } = rollDiceAndSum(3, 6);
  mathOutput.textContent = `Rolled: ${rolls.join(", ")} → Sum: ${sum}`;
  log(`Rolled dice: [${rolls.join(", ")}], sum = ${sum}`);
});

// Expose counter in console for fun
window._counter = counter;
log("App initialized. You can inspect window._counter in the console.");
