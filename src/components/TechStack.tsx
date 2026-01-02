

const language: string[] = [
    "JavaScript",
    "Python",
    "PHP",
    "NodeJs"
];

const frameworks: string[] = [
    'ReactJs',
    "ExpressJs",
    ".NET"
];

const db: string[] = [
    "MongoDB",
    "Postgres",
    "SQL"
];

export const TechStack = () => {
    return (
        <section className="min-h-screen bg-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-3xl font-bold text-black mb-2">
                        Tech Stack
                    </h1>
                    <div className="h-px w-20 bg-black"></div>
                </div>

                <div className="space-y-12">
                    {/* Languages Section */}
                    <div className="group">
                        <h2 className="text-xl font-semibold text-black mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            Languages
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {language.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks Section */}
                    <div className="group">
                        <h2 className="text-xl font-semibold text-black mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            Frameworks
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {frameworks.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Database Section */}
                    <div className="group">
                        <h2 className="text-xl font-semibold text-black mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            Database
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {db.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}