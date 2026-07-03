import logoImg from "@/assets/logo.png"

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="h-8 w-8" />
        </div>
    );
};

export default Logo;