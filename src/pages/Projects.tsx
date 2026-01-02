type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "CRM Dashboard",
        description:
            "A full-stack CRM application with authentication, protected routes, and real-time updates.",
        tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description:
            "Scalable e-commerce app with product management, cart, and secure checkout.",
        tech: ["React", "Express", "MongoDB"],
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "Personal portfolio showcasing projects, skills, and contact information.",
        tech: ["React", "Tailwind"],
        liveUrl: "#",
    },
];

export const Projects = () => {
    return (
        <section className="bg-white text-black py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        A selection of projects that highlight my experience in building
                        modern, scalable web applications.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border border-black p-6 rounded-2xl hover:bg-black hover:text-white transition-colors duration-300 group"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-sm mb-4 text-gray-700 group-hover:text-gray-300">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-3 py-1 border border-black rounded-full group-hover:border-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 text-sm">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        className="underline underline-offset-4 hover:opacity-70"
                                    >
                                        Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        className="underline underline-offset-4 hover:opacity-70"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
