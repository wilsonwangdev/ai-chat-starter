import { NextResponse } from 'next/server';

export async function GET() {
  const providers = [
    {
      id: 'gpt-4',
      name: 'GPT-4',
      enabled: true,
      models: ['gpt-4'],
    },
    {
      id: 'gpt-3.5-turbo',
      name: 'GPT-3.5 Turbo',
      enabled: true,
      models: ['gpt-3.5-turbo'],
    },
    {
      id: 'claude-3',
      name: 'Claude 3',
      enabled: true,
      models: ['claude-3'],
    },
  ];

  return NextResponse.json({ providers });
}
