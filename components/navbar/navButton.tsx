import Image from "next/image";

interface NavButtonProps {
  buttonText: string;
  style?: string;
  iconUrl?: string;
  iconAlt?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ buttonText, style, iconUrl="", iconAlt = "" }) => {
  return (
    <button className={`rounded-full font-semibold text-sm w-40 h-10 flex items-center px-3 ${style === "light" ? "bg-white text-black" : "bg-black text-white border border-[#646464] w-32"}`}>
      {iconUrl && <Image src={iconUrl} alt={iconAlt} width={23} height={23} className="flex-shrink-0" />}
      <div className="flex-grow flex items-center">
        <span className="mx-auto">{buttonText}</span>
      </div>
    </button>
  );
};

export default NavButton;
