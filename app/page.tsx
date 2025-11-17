export default function Home() {
  // Variables públicas (accesibles desde el cliente)
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const publicAppName = process.env.NEXT_PUBLIC_APP_NAME;
  const publicEnvironment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="w-full max-w-4xl p-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {publicAppName || 'Mi App Next.js'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Proyecto básico con variables de entorno
            </p>
          </div>

          <div className="space-y-6">
            {/* Variables Públicas */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Variables Públicas (Cliente)
              </h2>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-green-900 dark:text-green-200 min-w-[200px]">
                    NEXT_PUBLIC_API_URL:
                  </span>
                  <code className="bg-green-100 dark:bg-green-950 px-3 py-1 rounded text-green-800 dark:text-green-300 break-all">
                    {publicApiUrl || 'No definida'}
                  </code>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-green-900 dark:text-green-200 min-w-[200px]">
                    NEXT_PUBLIC_APP_NAME:
                  </span>
                  <code className="bg-green-100 dark:bg-green-950 px-3 py-1 rounded text-green-800 dark:text-green-300 break-all">
                    {publicAppName || 'No definida'}
                  </code>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-green-900 dark:text-green-200 min-w-[200px]">
                    NEXT_PUBLIC_ENVIRONMENT:
                  </span>
                  <code className="bg-green-100 dark:bg-green-950 px-3 py-1 rounded text-green-800 dark:text-green-300 break-all">
                    {publicEnvironment || 'No definida'}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Proyecto configurado para AWS Amplify 🚀
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
