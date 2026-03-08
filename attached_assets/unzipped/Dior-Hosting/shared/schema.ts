import { z } from "zod";

// No database tables needed for a static landing page.
// We export a dummy schema to satisfy potential imports.
export const dummySchema = z.object({
  id: z.number(),
  name: z.string()
});
export type Dummy = z.infer<typeof dummySchema>;
