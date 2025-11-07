export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center space-y-6 px-4">
        <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
          <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-gray-900">ClientDock</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto text-balance">
          Professional client portal platform for freelancers
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="/login"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
