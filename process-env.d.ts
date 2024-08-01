import { z } from "zod";
import { envSchema } from "./next.config.mjs";

interface EnvSchema extends z.infer<typeof envSchema> {}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema {}
  }
}
