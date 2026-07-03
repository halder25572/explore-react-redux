import Logo from "@/assets/Logo";


const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <Logo /> <span className="font-bold ml-2">Task</span>Master
        </div>
    );
};

export default Navbar;