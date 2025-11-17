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

            {/* Variables Privadas */}
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Variables Privadas (Servidor)
              </h2>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-red-700 dark:text-red-300 italic">
                  Las variables privadas (sin prefijo NEXT_PUBLIC_) solo están disponibles en el servidor.
                  No se exponen al cliente por seguridad.
                </p>
                <div className="bg-red-100 dark:bg-red-950 p-4 rounded-lg">
                  <p className="font-semibold text-red-900 dark:text-red-200 mb-2">
                    Ejemplos en .env.local:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-red-800 dark:text-red-300">
                    <li>DATABASE_URL</li>
                    <li>API_SECRET_KEY</li>
                    <li>JWT_SECRET</li>
                    <li>STRIPE_SECRET_KEY</li>
                    <li>AWS_ACCESS_KEY_ID</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">ℹ️</span>
                Información
              </h2>
              <ul className="space-y-2 text-blue-800 dark:text-blue-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Las variables con <code className="bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">NEXT_PUBLIC_</code> son accesibles en el navegador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Las variables sin ese prefijo solo están disponibles en el servidor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>El archivo <code className="bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">.env.local</code> está en .gitignore (no se sube a GitHub)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Usa <code className="bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">.env.example</code> como plantilla para documentar las variables necesarias</span>
                </li>
              </ul>
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
