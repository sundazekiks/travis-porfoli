

export const About = () => {
    return (
        <section className="p-5 sm:p-8">
            <div className="max-w-3xl">
                {/* Header */}
                <div className="mb-6 animate-fadeIn">
                    <h1 className="text-4xl sm:text-4xl font-bold text-black mb-2">About Me</h1>
                    <div className="h-px w-16 bg-black"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 animate-slideIn" style={{ animationDelay: '0.2s' }}>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                        I'm a <span className="font-semibold text-black">Full Stack Web Developer</span> with hands-on experience in building dynamic and scalable web applications.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                        I specialize in <span className="font-semibold text-black">React.js</span> for modern, responsive front-end experiences and <span className="font-semibold text-black">Node.js with Express</span> for robust back-end APIs.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                        I'm proficient in working with both <span className="font-semibold text-black">PostgreSQL</span> and <span className="font-semibold text-black">MongoDB</span>, enabling me to design efficient databases and deliver full-featured applications from concept to deployment.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                        I enjoy solving complex problems, writing clean code, and continuously learning the latest technologies to create seamless user experiences.
                    </p>
                </div>

                {/* Decorative Element */}
                <div className="mt-8 flex gap-2 animate-slideIn" style={{ animationDelay: '0.4s' }}>
                    <div className="h-1 w-8 bg-black rounded-full"></div>
                    <div className="h-1 w-4 bg-gray-400 rounded-full"></div>
                    <div className="h-1 w-2 bg-gray-300 rounded-full"></div>
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
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                
                .animate-slideIn {
                    animation: slideIn 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
}