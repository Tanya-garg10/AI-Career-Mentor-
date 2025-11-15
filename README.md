# AI Career Mentor — Working Prototype

This repository contains a fully functional working prototype of an AI Career Mentor platform built with **Next.js** and **Tailwind CSS**. The platform provides:

- Career quiz → Suggests personalized career paths (rule-based demo, extendable to ML/AI)
- AI Mentor chat → Real-time career guidance using OpenAI GPT-4 (or Google Gemini)
- Progress dashboard → Displays skill roadmap, milestones, and curated resources

## Features

1. **Career Matching Quiz**
   - Interactive quiz with multiple choice questions
   - Provides suggested career path based on user responses

2. **AI Mentor Chat**
   - Ask questions about careers, resume tips, interviews
   - Powered via serverless API using OpenAI or Google Gemini

3. **Progress Dashboard**
   - Skill roadmap and recommended courses
   - Quick access to curated learning resources

4. **Resource Recommender**
   - Shows free/low-cost online courses, bootcamps, and checklists

## Tech Stack

- **Frontend:** Next.js, React, Typescript, Tailwind CSS
- **Backend:** Node.js API routes (serverless), server-side AI integration
- **AI Integration:** OpenAI GPT-4 / Gemini via secure server endpoint
- **State Management:** React hooks

## Deployment (Vercel)

1. Push your repo to GitHub.
2. Import to Vercel and configure project.
3. In **Vercel Settings → Environment Variables**, add:
```
OPENAI_API_KEY=<your_api_key>
```
4. Deploy. The serverless API and frontend will run automatically.

## Demo Steps

1. Start the app locally or online.
2. Take the career quiz → see career suggestion.
3. Open AI Mentor chat → ask questions about your career, resume, or interview.
4. View dashboard → check skill roadmap and curated resources.

---
**Note:** This is a **prototype** for demonstration purposes. Real deployment should include secure authentication, persistent database storage, and proper error handling.
