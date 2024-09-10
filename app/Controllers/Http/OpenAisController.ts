import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OpenAIService from 'App/Services/OpenAIService'

export default class OpenAIController {
  public async generate({ request, response }: HttpContextContract) {
    const prompt = request.input('prompt')

    const openAIService = new OpenAIService()
    const result = await openAIService.generateText(prompt)

    return response.json({ result })
  }
}
