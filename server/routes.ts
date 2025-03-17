import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post("/api/contact", async (req, res) => {
    const result = insertContactSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ message: "Invalid contact form data" });
    }

    const contact = await storage.createContact(result.data);
    res.json(contact);
  });

  return createServer(app);
}
