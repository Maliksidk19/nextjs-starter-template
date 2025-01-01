import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    BASE_URL: z.string().default("http://localhost:3000"),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().default("http://localhost:3000"),
  },
  runtimeEnv: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
