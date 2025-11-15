import { generateText } from 'ai'

export async function POST(req: Request) {
  try {
    const { careerPath, skills, level } = await req.json()

    const { text } = await generateText({
      model: 'openai/gpt-4-mini',
      prompt: `Based on the following profile, recommend 5-7 specific resources (courses, books, platforms) for career development:
        
        Career Path: ${careerPath}
        Current Skills: ${skills.join(', ')}
        Learning Level: ${level}
        
        Format as JSON array with objects containing: { title, type, description, url, difficulty }`,
    })

    return Response.json({ resources: JSON.parse(text) })
  } catch (error) {
    console.error('Resources API error:', error)
    return Response.json({ error: 'Failed to get recommendations' }, { status: 500 })
  }
}
