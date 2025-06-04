import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getMotivationalMessage(habit: string) {
  const prompt = `Give a 1-sentence motivational message for someone working on the habit: '${habit}'`;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 60,
  });
  return response.data.choices[0].text.trim();
}

export async function getWeeklyReview(habit: string) {
  const prompt = `Write a friendly review for someone who completed 7 days of the habit: '${habit}'. Mention their effort, suggest improvement, and encourage them.`;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
  });
  return response.data.choices[0].text.trim();
}