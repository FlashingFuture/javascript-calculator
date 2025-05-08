import { tokenize } from "./tokenizer.js"
import { validateExpression } from "./validator.js"
import { evaluateTokens } from "./evaluator.js"

export function calculate(expression) {
  try {
    const validatedExpression = validateExpression(expression);
    const tokens = tokenize(validatedExpression);
    return evaluateTokens(tokens);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
