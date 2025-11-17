# Proyecto Next.js con Variables de Entorno

Este es un proyecto básico de Next.js configurado con variables de entorno públicas y privadas, listo para desplegar en AWS Amplify.

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores reales:

```bash
# Variables Públicas (accesibles desde el navegador)
NEXT_PUBLIC_API_URL=https://tu-api.com
NEXT_PUBLIC_APP_NAME=Mi Aplicación
NEXT_PUBLIC_ENVIRONMENT=production

# Variables Privadas (solo servidor)
DATABASE_URL=postgresql://usuario:password@host:5432/db
API_SECRET_KEY=tu_clave_secreta
JWT_SECRET=tu_jwt_secret
STRIPE_SECRET_KEY=sk_live_tu_clave
AWS_ACCESS_KEY_ID=tu_access_key
AWS_SECRET_ACCESS_KEY=tu_secret_key
```

### 3. Ejecutar el proyecto

```bash
# Modo desarrollo
npm run dev

# Modo producción
npm run build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📋 Variables de Entorno

### Variables Públicas (Cliente)

Las variables que comienzan con `NEXT_PUBLIC_` son accesibles en el navegador:

- `NEXT_PUBLIC_API_URL`: URL de tu API
- `NEXT_PUBLIC_APP_NAME`: Nombre de la aplicación
- `NEXT_PUBLIC_ENVIRONMENT`: Entorno (development, staging, production)

### Variables Privadas (Servidor)

Las variables SIN el prefijo `NEXT_PUBLIC_` solo están disponibles en el servidor:

- `DATABASE_URL`: Conexión a base de datos
- `API_SECRET_KEY`: Clave secreta de API
- `JWT_SECRET`: Secreto para tokens JWT
- `STRIPE_SECRET_KEY`: Clave secreta de Stripe
- `AWS_ACCESS_KEY_ID`: ID de acceso AWS
- `AWS_SECRET_ACCESS_KEY`: Clave secreta AWS

## 🔒 Seguridad

- ⚠️ **NUNCA** subas el archivo `.env.local` a GitHub
- ✅ El archivo `.env.local` está en `.gitignore`
- ✅ Usa `.env.example` como plantilla (este SÍ se sube a GitHub)
- ⚠️ Las variables privadas NUNCA deben tener el prefijo `NEXT_PUBLIC_`

## ☁️ Desplegar en AWS Amplify

### Opción 1: Desde la Consola de Amplify

1. Ve a [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Haz clic en "New app" → "Host web app"
3. Conecta tu repositorio de GitHub
4. Selecciona la rama `main` o `claude/nextjs-env-setup-01MmtsDhaaRS87Baidd8mqwZ`
5. Amplify detectará automáticamente que es un proyecto Next.js
6. **Configurar variables de entorno:**
   - En "Environment variables", añade las variables públicas y privadas
   - Las variables `NEXT_PUBLIC_*` estarán disponibles en el cliente
   - Las variables privadas solo estarán en el servidor
7. Haz clic en "Save and deploy"

### Opción 2: Usando Amplify CLI

```bash
# Instalar Amplify CLI
npm install -g @aws-amplify/cli

# Configurar Amplify
amplify configure

# Inicializar proyecto
amplify init

# Añadir hosting
amplify add hosting

# Publicar
amplify publish
```

### Configurar Variables en Amplify

Desde la consola de Amplify:

1. Ve a tu aplicación
2. En el menú lateral, selecciona "Environment variables"
3. Añade cada variable con su valor
4. Guarda los cambios
5. Redeploya la aplicación

**Ejemplo de variables en Amplify:**

```
NEXT_PUBLIC_API_URL = https://api.produccion.com
NEXT_PUBLIC_APP_NAME = Mi App Producción
NEXT_PUBLIC_ENVIRONMENT = production
DATABASE_URL = postgresql://...
API_SECRET_KEY = clave_secreta_real
JWT_SECRET = jwt_token_real
```

## 📁 Estructura del Proyecto

```
.
├── app/
│   ├── page.tsx          # Página principal con ejemplos
│   └── ...
├── .env.local            # Variables de entorno (NO se sube a GitHub)
├── .env.example          # Plantilla de variables (SÍ se sube a GitHub)
├── .gitignore            # Configurado para ignorar .env.local
├── package.json
└── README.md
```

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start

# Linter
npm run lint
```

## 📖 Documentación

- [Next.js](https://nextjs.org/docs)
- [Variables de Entorno en Next.js](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [AWS Amplify](https://docs.amplify.aws/)
- [Amplify Hosting](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)

## ⚡ Notas Importantes

1. **Variables Públicas vs Privadas:**
   - Público: Se incluyen en el bundle del cliente (pueden verse en el navegador)
   - Privado: Solo en el servidor (nunca se exponen al cliente)

2. **Rebuild después de cambiar variables:**
   - Debes hacer rebuild después de cambiar variables de entorno
   - `npm run build` en desarrollo
   - Redeploy en Amplify

3. **Variables en diferentes entornos:**
   - `.env.local`: Para desarrollo local
   - Amplify Console: Para producción/staging
   - Puedes tener diferentes valores por rama en Amplify

## 📞 Soporte

Si tienes problemas, revisa:
- La [documentación de Next.js](https://nextjs.org/docs)
- La [documentación de Amplify](https://docs.amplify.aws/)
- Los logs en la consola de Amplify
