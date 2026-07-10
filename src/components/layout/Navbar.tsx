import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";


const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            {/* <Logo /> <span className="font-bold ml-2">Task</span>Master */}
            <Link to="/">Tasks</Link>
            <Link to="/">Users</Link>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;