const careerGuidance = {
  'software engineering': {
    skills: ['Python', 'JavaScript', 'System Design', 'Data Structures'],
    path: 'Learn fundamentals → Build projects → Contribute to open source → Apply for internships/jobs',
    resources: ['LeetCode', 'GitHub', 'freeCodeCamp', 'GeeksforGeeks']
  },
  'data science': {
    skills: ['Python', 'Statistics', 'Machine Learning', 'SQL'],
    path: 'Learn Python basics → Study statistics → Learn ML algorithms → Build projects → Kaggle competitions',
    resources: ['Coursera', 'DataCamp', 'Kaggle', 'Andrew Ng courses']
  },
  'product management': {
    skills: ['Analytics', 'User Research', 'Communication', 'Technical knowledge'],
    path: 'Understand product thinking → Learn analytics → Do user research → Build portfolio → Network in PM community',
    resources: ['Reforge', 'Lenny Rachitsky', 'Svpply', 'ProductHunt']
  },
  'digital marketing': {
    skills: ['SEO', 'Content Marketing', 'Analytics', 'Social Media'],
    path: 'Learn marketing fundamentals → Specialize in a channel → Build portfolio projects → Get certified',
    resources: ['Google Analytics Academy', 'HubSpot', 'Neil Patel', 'Udemy']
  },
  'ux design': {
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    path: 'Learn design fundamentals → Build portfolio → Do user research → Practice with real projects',
    resources: ['Interaction Design Foundation', 'Figma Learn', 'AdobeXD tutorials', 'Dribbble']
  },
  'default': {
    skills: ['Communication', 'Problem-solving', 'Continuous learning'],
    path: 'Identify your interests → Learn relevant skills → Build projects → Network → Apply',
    resources: ['LinkedIn Learning', 'Udemy', 'Coursera', 'YouTube']
  }
}

function generateMentorResponse(message: string, userProfile: any): string {
  const msg = message.toLowerCase()
  
  // Career path inquiry
  if (msg.includes('career') || msg.includes('path') || msg.includes('which field')) {
    return `I see you're interested in exploring career options! In India's job market, there are several thriving fields:

• Software Engineering & Development - High demand, great salaries, abundant opportunities
• Data Science & Analytics - Growing rapidly with excellent career prospects
• Product Management - Increasingly popular at tech companies across India
• Digital Marketing - Essential for every company, creative and analytical mix
• Design (UX/UI) - In high demand as companies focus on user experience
• Cloud & DevOps - Emerging field with strong growth

What specific field interests you most? I can provide a detailed roadmap for any of these!`
  }

  // Skills inquiry
  if (msg.includes('skill') || msg.includes('learn') || msg.includes('what should')) {
    return `Great question about skills! The skills you should learn depend on your target career. However, here are universally valuable skills:

1. Problem-solving & Critical thinking
2. Communication skills (both written and verbal)
3. Adaptability and continuous learning mindset
4. Technical literacy (varies by field)
5. Collaboration and teamwork

For Indian job market specifically, I'd recommend:
• English fluency and technical communication
• Data literacy (basic Excel, analytics)
• One technical skill relevant to your field
• Soft skills (public speaking, leadership)

Which field are you leaning towards? I can give specific skill recommendations!`
  }

  // Opportunities inquiry
  if (msg.includes('opportunity') || msg.includes('job') || msg.includes('internship')) {
    return `Excellent! Here are the best opportunities for students in India right now:

🎯 Internship Paths:
• Top companies (Google, Microsoft, Amazon, Flipkart) - Competitive, high-quality learning
• Tier-1 startups - Fast-paced, diverse responsibilities
• Government organizations - Stability and unique experience
• NGOs - Social impact and specialized skills

📚 Educational Opportunities:
• Certifications (Google, AWS, Azure) - Industry-recognized, affordable
• Bootcamps - Intensive, practical skills training
• Online courses while in college - Parallel skill building
• Competitions and hackathons - Portfolio building

🚀 My Recommendation:
Start with 1-2 internships during college, build a portfolio of 3-4 projects, get 1 relevant certification, and apply to full-time roles in your final year.

What's your current year/stage?`
  }

  // Default encouraging response
  return `That's a great question for your career journey! Here's my advice:

Every successful professional in India started exactly where you are - with questions and curiosity. The key is to:

1. Take action (start learning, build projects, do internships)
2. Learn continuously (the market evolves rapidly)
3. Network with professionals in your field
4. Build a portfolio of real work
5. Stay adaptable to market changes

The path to a successful career isn't just about academics anymore - it's about skills, projects, and practical experience.

Can you tell me more specifically about:
- Your interests and strengths?
- Where you are in your education?
- What kind of work excites you?

This will help me give you a personalized roadmap!`
}

export async function POST(req: Request) {
  try {
    const { message, userProfile } = await req.json()

    const response = generateMentorResponse(message, userProfile)

    return Response.json({ response })
  } catch (error) {
    console.error('[v0] Mentor API error:', error)
    return Response.json(
      { error: 'Failed to get mentor response', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
