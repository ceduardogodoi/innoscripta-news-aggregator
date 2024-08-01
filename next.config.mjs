import { z } from "zod";

export const envSchema = z.object({
  NEWS_API_KEY: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),
});

function validate() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error("❌ Invalid environment variables:");
    const fieldErrors = result.error.flatten().fieldErrors;
    console.error(JSON.stringify(fieldErrors, null, 2));

    process.exit(1);
  }
}

validate();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
