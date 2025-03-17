import { type Contact, type InsertContact, type Project } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private projects: Map<number, Project>;
  private currentContactId: number;
  private currentProjectId: number;

  constructor() {
    this.contacts = new Map();
    this.projects = new Map();
    this.currentContactId = 1;
    this.currentProjectId = 1;

    // Initialize with sample projects
    const sampleProjects: Project[] = [
      {
        id: this.currentProjectId++,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management",
        image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
        link: "https://github.com",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        id: this.currentProjectId++,
        title: "Analytics Dashboard",
        description: "Interactive analytics dashboard with real-time data visualization",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        link: "https://github.com",
        tags: ["Vue.js", "D3.js", "Express"],
      },
      {
        id: this.currentProjectId++,
        title: "Social Media App",
        description: "Mobile-first social media application with real-time messaging",
        image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
        link: "https://github.com",
        tags: ["React Native", "Firebase", "WebSocket"],
      },
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
