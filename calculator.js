const { tokenize } = require("./tokenizer");
const { validateExpression } = require("./validator");
const { evaluateTokens } = require("./evaluator");

function calculate(expression) {
  try {
    const validatedExpression = validateExpression(expression);
    const tokens = tokenize(validatedExpression);
    return evaluateTokens(tokens);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

module.exports = { calculate };
