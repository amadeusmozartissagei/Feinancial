import { GoogleGenerativeAI } from "@google/generative-ai";

// Inisialisasi Google AI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: Rp ${totalBudget}
      - Expenses: Rp ${totalSpend}
      - Incomes: Rp ${totalIncome}
      Provide remaining balance amount and detailed financial advice in 2 sentence to help the user manage their finances more effectively.
      gunakan bahasa indonesia.
    `;

    // Kirim prompt ke Gemini API
    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const advice = response.text();

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
