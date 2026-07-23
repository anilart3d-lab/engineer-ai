export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="flex min-h-screen flex-col md:flex-row">
        <aside className="border-b border-gray-700 bg-[#161b22] p-4 md:w-16 md:border-b-0 md:border-r">
          <div className="mb-4 text-center text-xl">🤖</div>
          <div className="hidden md:block space-y-4 text-center text-xs text-gray-400">
            <div>🏠</div>
            <div>📁</div>
            <div>💬</div>
            <div>⚙️</div>
          </div>
        </aside>

        <section className="border-b border-gray-700 bg-[#161b22] p-4 md:w-64 md:border-b-0 md:border-r">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Explorer
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="rounded bg-[#0f172a] px-3 py-2">src</div>
            <div className="rounded bg-[#0f172a] px-3 py-2">pages</div>
            <div className="rounded bg-[#0f172a] px-3 py-2">components</div>
            <div className="rounded bg-[#0f172a] px-3 py-2">layout</div>
          </div>
        </section>

        <main className="flex-1 p-4 md:p-6">
          <div className="rounded-2xl border border-gray-700 bg-[#111827] p-6 shadow-2xl">
            <h1 className="text-3xl font-bold md:text-5xl">
              Engineer AI 🚀
            </h1>
            <p className="mt-3 text-sm text-gray-400 md:text-base">
              Premium AI coding workspace
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-700 bg-[#0f172a] p-4">
                <div className="text-sm font-semibold text-gray-300">Chat</div>
                <div className="mt-2 text-sm text-gray-500">
                  Ask Engineer AI to build, fix, or explain code.
                </div>
              </div>

              <div className="rounded-xl border border-gray-700 bg-[#0f172a] p-4">
                <div className="text-sm font-semibold text-gray-300">Editor</div>
                <div className="mt-2 text-sm text-gray-500">
                  Live code editor will appear here next.
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside className="border-t border-gray-700 bg-[#161b22] p-4 md:w-80 md:border-t-0 md:border-l">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
            AI Chat
          </h2>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="rounded-xl bg-[#0f172a] p-3">
              Hello! I am Engineer AI.
            </div>
            <div className="rounded-xl bg-[#0f172a] p-3">
              I can help you build your app.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
