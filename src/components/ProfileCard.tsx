import profilePicture from '../assets/profile.webp'
import { MapPin, FileText, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

interface Resume {
    resumeOpen: () => void
}

export const Profile = ({ resumeOpen }: Resume) => {
    return (
        <div className='shadow-lg rounded-2xl w-full max-w-3xl border border-gray-200 overflow-hidden animate-fadeIn'>


            <div className="w-full p-8 flex gap-6 flex-wrzap md:flex-nowrap">
                {/* Profile Image */}
                <div className="shrink-0 group">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-black transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                        <img
                            src={profilePicture}
                            alt="Profile Picture"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                {/* Profile Info */}
                <section className='flex flex-col gap-3 grow justify-center'>
                    <h1 className='text-4xl font-bold text-black animate-slideIn'>
                        Travis Abuton
                    </h1>
                    <h2 className='text-lg text-gray-600 ml-1 animate-slideIn' style={{ animationDelay: '0.1s' }}>
                        Full Stack Web Developer
                    </h2>
                    <p className='flex items-center gap-2 text-gray-600 text-sm ml-1 animate-slideIn' style={{ animationDelay: '0.2s' }}>
                        <MapPin className="w-4 h-4" />
                        Oroquieta City, Misamis Occidental
                    </p>

                    {/* Icons Section */}
                    <div onClick={resumeOpen} className='mt-4 flex items-center justify-between border-t border-gray-200 pt-4 animate-slideIn' style={{ animationDelay: '0.3s' }}>
                        {/* Resume Link */}
                        <a
                            href="#"
                            className="group/resume flex items-center gap-2 px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            aria-label="Download Resume"
                        >
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium">Resume</span>
                        </a>

                        {/* Social Links */}
                        <div className='flex gap-2'>
                            <a
                                href="https://www.facebook.com/"
                                className="w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-600 rounded-full hover:border-black hover:text-black hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-600 rounded-full hover:border-black hover:text-black hover:scale-110 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-600 rounded-full hover:border-black hover:text-black hover:scale-110 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-600 rounded-full hover:border-black hover:text-black hover:scale-110 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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
        </div>
    );
}