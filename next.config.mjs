import { z } from "zod";

export const envSchema = z.object({
  BASE_URL: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),

  // News API variables
  NEWS_API_KEY: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),

  // The Guardian variables
  THE_GUARDIAN_API_KEY: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),

  // The New York Times variables
  NYT_API_KEY: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),
  NYT_API_SECRET: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),
  NYT_APP_ID: z
    .string({
      required_error: "Variable is required.",
    })
    .min(1, "Variable must not be empty."),
});

function validateEnv() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error("❌ Invalid environment variables:");
    const fieldErrors = result.error.flatten().fieldErrors;
    console.error(JSON.stringify(fieldErrors, null, 2));
    console.error("Ending process...");

    process.exit(1);
  }
}

validateEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
