import { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function FloatingButton() {
    const [nextSection, setNextSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        if (sections.length > 1) {
          setNextSection(sections[1]); // La siguiente sección
        }
    }, []);

    const handleScroll = () => {
    if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
    }
};
return (
    <button onClick={handleScroll} id="floating-button">
        <MdOutlineKeyboardArrowDown />
    </button>
)
}
