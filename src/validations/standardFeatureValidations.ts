import { z } from "zod";

export const validateStandardFeaturesCreate = z.object({
  label: z
    .string({ required_error: "Label is required" })
    .trim()
    .min(3, { message: "Label should be at least 3 characters" })
    .transform((value) =>
      value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    ),
});

export type StandardFeatures = z.infer<typeof validateStandardFeaturesCreate>;