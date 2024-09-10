import OpenAI from 'openai'

export default class OpenAIService {
  private openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Masukkan API key langsung ke konstruktor
    })
  }

  public async generateText(prompt: string) {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o', // Sesuaikan dengan model yang ingin kamu pakai
      messages: [{ role: 'user', content: prompt }],
    })
    console.log(process.env.OPENAI_API_KEY)
    // return response.choices[0].message.content
    return response.choices[0].message.content
  }
}
