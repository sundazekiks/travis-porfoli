import { Resume } from "./Resume";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/70"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl">
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-black flex items-center justify-between px-6 py-4 z-10">
                        <h2 className="text-lg font-semibold">Resume</h2>

                        <button
                            onClick={onClose}
                            className="border border-black px-3 py-1 text-sm hover:bg-black hover:text-white transition"
                        >
                            Close
                        </button>
                    </div>

                    {/* Content */}
                    <Resume />
                </div>
            </div>
        </>
    );
};
