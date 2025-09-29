import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, model = 'gpt-4' } = body;
    const lastMessage = messages[messages.length - 1];

    // Simple fallback response when MSW isn't working
    const response = {
      message: {
        id: Date.now().toString(),
        content: `This is a fallback response from the Next.js API route. MSW might not be running. Your message was: "${lastMessage?.content}"`,
        role: 'assistant' as const,
        timestamp: new Date(),
        model: model,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}
