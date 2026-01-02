export const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <section className="bg-white text-black py-20 px-6 print:py-0 print:px-0">
            <div className="max-w-4xl mx-auto print:max-w-none">
                {/* Actions */}
                <div className="flex justify-end mb-6 print:hidden">
                    <button
                        onClick={handlePrint}
                        className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition"
                    >
                        Download PDF
                    </button>
                </div>

                {/* Resume Content */}
                <div className="border border-black p-8 print:border-none print:p-0">
                    {/* Header */}
                    <header className="mb-10 border-b border-black pb-4">
                        <h1 className="text-4xl font-bold tracking-tight">
                            Travis Abuton
                        </h1>
                        <p className="mt-1 text-lg">
                            Full Stack Web Developer
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                            React • Node.js • Express • PostgreSQL • MongoDB
                        </p>
                    </header>

                    {/* Summary */}
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2 uppercase">
                            Summary
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-800">
                            Full stack web developer experienced in building modern,
                            scalable web applications using React and Node.js.
                            Skilled in developing RESTful APIs, implementing authentication,
                            and designing efficient database schemas with a strong focus
                            on clean architecture and maintainable code.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-3 uppercase">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <ul className="space-y-1">
                                <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS</li>
                                <li><strong>Backend:</strong> Node.js, Express</li>
                                <li><strong>Databases:</strong> PostgreSQL, MongoDB</li>
                            </ul>
                            <ul className="space-y-1">
                                <li><strong>APIs:</strong> RESTful Services</li>
                                <li><strong>Auth:</strong> JWT, Cookies, Protected Routes</li>
                                <li><strong>Tools:</strong> Git, GitHub, Docker (basic)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-3 uppercase">
                            Projects
                        </h2>

                        <div className="space-y-5">
                            <div>
                                <h3 className="font-semibold">
                                    CRM Web Application
                                </h3>
                                <p className="text-sm text-gray-800">
                                    Designed and built a full stack CRM with authentication,
                                    protected routes, lead tracking, and RESTful APIs.
                                </p>
                                <p className="text-xs text-gray-600">
                                    React • Node.js • Express • PostgreSQL
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Developer Portfolio
                                </h3>
                                <p className="text-sm text-gray-800">
                                    Personal portfolio website featuring projects, resume,
                                    and modern black & white branding.
                                </p>
                                <p className="text-xs text-gray-600">
                                    React • Tailwind CSS
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-lg font-semibold mb-3 uppercase">
                            Experience
                        </h2>
                        <p className="text-sm font-medium">
                            Freelance / Personal Projects
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-800 mt-2 space-y-1">
                            <li>Built and deployed full stack applications independently</li>
                            <li>Integrated frontend UIs with backend APIs and databases</li>
                            <li>Implemented secure authentication and authorization flows</li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};
