import { NextResponse } from 'next/server';

export async function GET() {
  const privateEnvVars = {
    DATABASE_URL: process.env.DATABASE_URL || 'No definida',
    API_SECRET_KEY: process.env.API_SECRET_KEY || 'No definida',
    JWT_SECRET: process.env.JWT_SECRET || 'No definida',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'No definida',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'No definida',
  };

  return NextResponse.json({
    message: 'Variables de entorno privadas (servidor)',
    environment: process.env.NODE_ENV,
    variables: privateEnvVars,
    timestamp: new Date().toISOString(),
  });
}
