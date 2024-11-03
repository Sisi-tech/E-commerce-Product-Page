import MenuList from "./menu-list";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function TreeView({ menus = [] }) {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [expandedParent, setExpandedParent] = useState(null);

    const handleToggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
    };

    const handleToggle = (label) => {
        setExpandedParent((prev) => (prev === label ? null : label));
    };

    return (
        <div className="tree-view-container p-4">
            <button className="hamburger-button pb-2" onClick={handleToggleMenu}>
                <FontAwesomeIcon icon={faBars} className="lg:size-6 size-5"/>
            </button> 
            {
                isMenuVisible && (
                    <MenuList list={menus} expandedParent={expandedParent} onToggle={handleToggle} />
                )
            }
        </div>
    );
}
