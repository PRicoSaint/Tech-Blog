module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // TODO: THIS ISNT NEEDED DELETE EVENTUALLY
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  // TODO: THIS ISNT NEEDED DELETE EVENTUALLY

  get_emoji: () => {
    const randomNum = Math.random();
  // TODO: THIS ISNT NEEDED DELETE EVENTUALLY
    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};
