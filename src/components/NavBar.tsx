import { NavLink } from "react-router-dom"

export const NavBar = () => {

    const navLink = ({ isActive }: { isActive: boolean }) => {
        return isActive ? `text-md text-black font-bold` : `text-md`
    }

    return (
        <nav className="p-4 flex justify-around items-center">
            <h1 className="text-xl font-bold">TA</h1>
            <div className="flex gap-5 justify-center items-center">
                <NavLink to='/' className={navLink}>Home</NavLink>
                <NavLink to='/contact' className={navLink}>Contact</NavLink>
                <NavLink to='/projects' className={navLink}>Projects</NavLink>
            </div>
        </nav>
    )
}