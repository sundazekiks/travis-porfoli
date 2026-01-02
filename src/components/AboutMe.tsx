
import { Code2, Palette, Database, Globe } from 'lucide-react';

export default function AboutMeCard() {
    const skills = [
        { icon: <Code2 className="w-5 h-5" />, label: 'Frontend', color: 'bg-blue-500' },
        { icon: <Palette className="w-5 h-5" />, label: 'UI/UX', color: 'bg-purple-500' },
        { icon: <Database className="w-5 h-5" />, label: 'Backend', color: 'bg-green-500' },
        { icon: <Globe className="w-5 h-5" />, label: 'Web Apps', color: 'bg-orange-500' }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
                {/* Header Section */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 h-32"></div>

                {/* Profile Section */}
                <div className="relative px-6 pb-6">
                    <div className="flex flex-col items-center -mt-16">
                        <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                            <Code2 className="w-16 h-16 text-white" />
                        </div>

                        <h2 className="mt-4 text-2xl font-bold text-white">Your Name</h2>
                        <p className="text-blue-400 font-medium">Full Stack Web Developer</p>

                        {/* Bio */}
                        <p className="mt-4 text-slate-300 text-center text-sm leading-relaxed">
                            Passionate about crafting beautiful and functional web experiences.
                            I build end-to-end solutions that bring ideas to life.
                        </p>

                        {/* Skills Grid */}
                        <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-colors"
                                >
                                    <div className={`${skill.color} p-2 rounded-lg text-white`}>
                                        {skill.icon}
                                    </div>
                                    <span className="text-slate-200 font-medium text-sm">{skill.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="mt-6 w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}