import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full bg-white rounded-xl border border-gray-100 shadow-md p-6 space-y-5"
        >
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Contact Me
                </h2>
                <p className="text-sm text-gray-500">
                    Feel free to reach out anytime
                </p>
            </div>

            {/* Name */}
            <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-3.5 text-gray-400" size={16} />
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:border-black focus:ring-0 outline-none transition"
                        placeholder="Your name"
                    />
                </div>
            </motion.div>

            {/* Email */}
            <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gray-400" size={16} />
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:border-black focus:ring-0 outline-none transition"
                        placeholder="you@email.com"
                    />
                </div>
            </motion.div>

            {/* Message */}
            <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <div className="relative">
                    <MessageSquare
                        className="absolute left-3 top-3 text-gray-400"
                        size={16}
                    />
                    <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:border-black focus:ring-0 outline-none transition resize-none"
                        placeholder="Write your message..."
                    />
                </div>
            </motion.div>

            {/* Submit */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full bg-black text-white py-2 rounded-lg font-semibold transition"
            >
                Send Message
            </motion.button>
        </motion.form>
    );
};
