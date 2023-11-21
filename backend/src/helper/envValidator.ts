import { Env } from '../interfaces/env'

export const envValidator = async (env: NodeJS.ProcessEnv) => {
  const { PORT, CORS_ORIGIN } = env
  if (!PORT) throw new Error('Env PORT is not defined')
  if (!CORS_ORIGIN) throw new Error('Env CORS_ORIGIN is not defined')
}
