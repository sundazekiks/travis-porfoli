import React from 'react';
import { Mail, Phone, MapPin, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
    name?: string;
    phone?: string;
    location?: string;
    email?: string;
    avatarUrl?: string;
}

const ContactCard: React.FC<ContactProps> = ({
    name = "Travis Abuton",
    phone = "09511648445",
    location = "Oroquieta City, Misamis Occidental",
    email = "travis@readywork.com",
    avatarUrl = "https://via.placeholder.com/150",
}) => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            className="max-w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
        >
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                    <motion.img
                        src={avatarUrl}
                        alt={name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 12 }}
                        className="h-16 w-16 rounded-full object-cover border-2 border-black"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                        <p className="text-sm text-gray-500 font-medium">
                            Professional Contact
                        </p>
                    </div>
                </div>

                {/* Details */}
                <div className="mt-6 space-y-4">
                    {/* Phone */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between group"
                    >
                        <div className="flex items-center space-x-3 text-gray-700">
                            <Phone size={18} className="text-black" />
                            <span className="text-sm">{phone}</span>
                        </div>
                        <button
                            onClick={() => copyToClipboard(phone)}
                            className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-gray-100 transition"
                        >
                            <Copy size={14} className="text-gray-400" />
                        </button>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between group"
                    >
                        <div className="flex items-center space-x-3 text-gray-700">
                            <Mail size={18} className="text-black" />
                            <span className="text-sm">{email}</span>
                        </div>
                        <button
                            onClick={() => copyToClipboard(email)}
                            className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-gray-100 transition"
                        >
                            <Copy size={14} className="text-gray-400" />
                        </button>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center space-x-3 text-gray-700"
                    >
                        <MapPin size={18} className="text-black" />
                        <span className="text-sm">{location}</span>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-6 w-full bg-black text-white py-2 rounded-lg font-semibold transition"
                >
                    Send Message
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ContactCard;
