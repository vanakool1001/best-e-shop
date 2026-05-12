const QUOTES = [
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },
  {
    text: "Programs must be written for people to read.",
    author: "Harold Abelson"
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    text: "Code never lies, comments sometimes do.",
    author: "Ron Jeffries"
  }
];

/**
 * Get a random quote, pretending to be an async API call.
 * Returns a Promise that resolves after a short delay.
 */
export function getRandomQuote() {
  return new Promise((resolve, reject) => {
    const delay = 400 + Math.random() * 800; // 0.4–1.2s

    setTimeout(() => {
      // Tiny chance to simulate an error
      if (Math.random() < 0.1) {
        reject(new Error("Random network error"));
        return;
      }

      const index = Math.floor(Math.random() * QUOTES.length);
      resolve(QUOTES[index]);
    }, delay);
  });
}
