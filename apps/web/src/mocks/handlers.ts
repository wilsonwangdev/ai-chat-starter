import { http, HttpResponse } from 'msw';

// Mock AI responses with different personalities
const mockResponses = {
  'gpt-4': [
    "That's a fascinating question that touches on several interconnected concepts. Let me break this down systematically: First, we should consider the foundational principles at play here...",

    "I appreciate the complexity of what you're asking. From an analytical perspective, there are multiple layers to examine. The primary factors include...",

    "This is an excellent opportunity to explore the nuances of this topic. Based on current understanding and research, I'd suggest we approach this from several angles...",

    'Your question highlights an important intersection between theory and practice. Let me provide a comprehensive analysis that considers both the immediate implications and broader context...',
  ],

  'gpt-3.5-turbo': [
    "Great question! Here's what I think: This is definitely something worth exploring, and there are a few key points to consider.",

    "I see what you're getting at. This is a common question, and the answer depends on several factors. Let me explain...",

    "That's interesting! From what I understand, this relates to some important concepts. Here's my take on it...",

    'Good point! This is something many people wonder about. The short answer is that it depends, but let me give you more details...',
  ],

  'claude-3': [
    'I find this question quite thought-provoking. It invites us to consider not just the immediate answer, but the underlying assumptions and broader implications...',

    "Thank you for bringing this up. It's the kind of question that benefits from careful consideration of multiple perspectives and potential nuances...",

    "This touches on something I find genuinely interesting. Rather than giving you a quick answer, I think it's worth exploring the different dimensions of this topic...",

    'I appreciate the thoughtfulness behind your question. It seems to me that this is an area where both practical considerations and deeper principles come into play...',
  ],
};

// Simulate different AI providers
const aiProviders = {
  'gpt-4': {
    name: 'GPT-4',
    responseTime: 1500,
    style: 'detailed and analytical',
  },
  'gpt-3.5-turbo': {
    name: 'GPT-3.5 Turbo',
    responseTime: 800,
    style: 'quick and concise',
  },
  'claude-3': {
    name: 'Claude 3',
    responseTime: 1200,
    style: 'thoughtful and nuanced',
  },
};

export const handlers = [
  // Chat API endpoint
  http.post('/api/chat', async ({ request }) => {
    const body = (await request.json()) as { messages: { content: string }[]; model?: string };
    const { messages, model = 'gpt-4' } = body;
    const lastMessage = messages[messages.length - 1];

    // Simulate network delay based on model
    const provider = aiProviders[model as keyof typeof aiProviders] || aiProviders['gpt-4'];
    await new Promise((resolve) => setTimeout(resolve, provider.responseTime));

    // Get a random response based on the model
    const modelResponses =
      mockResponses[model as keyof typeof mockResponses] || mockResponses['gpt-4'];
    const randomResponse = modelResponses[Math.floor(Math.random() * modelResponses.length)];

    // Customize response based on user input
    let response = randomResponse;
    if (lastMessage?.content.toLowerCase().includes('hello')) {
      response =
        "Hello! It's great to meet you. I'm here to help with any questions or topics you'd like to discuss. What's on your mind today?";
    } else if (lastMessage?.content.toLowerCase().includes('help')) {
      response =
        "I'd be happy to help! I can assist with a wide range of topics including answering questions, brainstorming ideas, explaining concepts, or just having a conversation. What would you like help with?";
    } else if (lastMessage?.content.toLowerCase().includes('code')) {
      response =
        "I love talking about code! Whether you need help with debugging, want to learn a new programming concept, or discuss best practices, I'm here for it. What programming topic interests you?";
    }

    const mockMessage = {
      id: Date.now().toString(),
      content: response,
      role: 'assistant' as const,
      timestamp: new Date(),
      model: provider.name,
    };

    return HttpResponse.json({ message: mockMessage });
  }),

  // AI providers endpoint
  http.get('/api/providers', () => {
    return HttpResponse.json({
      providers: Object.entries(aiProviders).map(([id, provider]) => ({
        id,
        name: provider.name,
        enabled: true,
        models: [id],
      })),
    });
  }),

  // Chat history endpoint (for future use)
  http.get('/api/chat/history', () => {
    return HttpResponse.json({
      sessions: [
        {
          id: '1',
          title: 'Getting Started with AI',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          messageCount: 5,
        },
        {
          id: '2',
          title: 'Code Review Discussion',
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          messageCount: 12,
        },
      ],
    });
  }),
];
