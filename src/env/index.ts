import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
});

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    throw new Error(`Invalid env variables: ${_env.error.format}`);
}

export const env = _env.data;