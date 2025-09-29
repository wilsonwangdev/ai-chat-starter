import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-8 text-4xl font-bold">AI Chat Starter</h1>
      <p className="mb-8 text-lg text-fd-muted-foreground">
        A modern AI chat application template built with Next.js, TypeScript, and comprehensive
        testing
      </p>

      <div className="flex gap-4 justify-center">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
        >
          View Documentation
        </Link>
        <Link
          href="https://github.com/your-username/ai-chat-starter"
          className="inline-flex items-center justify-center rounded-md border border-fd-border px-6 py-3 text-sm font-medium hover:bg-fd-accent transition-colors"
        >
          GitHub
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-6 rounded-lg border border-fd-border">
          <h3 className="font-semibold mb-2">Modern Stack</h3>
          <p className="text-sm text-fd-muted-foreground">
            Next.js 15, React 19, TypeScript with strict configuration
          </p>
        </div>
        <div className="p-6 rounded-lg border border-fd-border">
          <h3 className="font-semibold mb-2">AI Ready</h3>
          <p className="text-sm text-fd-muted-foreground">
            Built-in support for OpenAI, Anthropic, and other AI providers
          </p>
        </div>
        <div className="p-6 rounded-lg border border-fd-border">
          <h3 className="font-semibold mb-2">Developer Experience</h3>
          <p className="text-sm text-fd-muted-foreground">
            Monorepo, testing, linting, and formatting all configured
          </p>
        </div>
      </div>
    </main>
  );
}
