import { Outlet } from "react-router"
import { NavBar } from "../components/NavBar"
import { Profile } from "../components/ProfileCard"
import { useState } from "react"
import { ResumeModal } from "../components/ResumeModal"

export const Mapper = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div className="w-full min-h-screen p-2 sm:p-4 lg:p-6">
            <NavBar />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {/* Profile Section */}
                <div className="w-full">
                    <Profile resumeOpen={handleOpen} />
                    <div className="w-full">
                        <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
                    </div>
                </div>
                {/* Outlet Section */}
                <div className="w-full min-h-100 lg:min-h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}