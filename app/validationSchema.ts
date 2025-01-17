import { z } from "zod";

const issueSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1, "description is required").max(65535),
});

const patchIssueSchema = z.object({
  title: z.string().min(1, "title is required").max(255).optional(),
  description: z
    .string()
    .min(1, "description is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});

export { issueSchema, patchIssueSchema };
