import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title kamida 3 ta belgidan iborat bo'lishi kerak")
    .max(50, "Title ko'pi bilan 50 ta belgidan iborat bo'lishi kerak"),
  description: z
    .string()
    .min(5, "Desc kamida 5 ta belgidan iborat bo'lishi kerak")
    .max(200, "Description ko'pi bilan 200 ta belgidan iborat bo'lishi kerak"),
});
