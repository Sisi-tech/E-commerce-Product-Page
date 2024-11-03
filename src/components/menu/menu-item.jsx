import MenuList from "./menu-list";

export default function MenuItem({ item, isExpanded, onToggle }) {
    const handleToggle = () => {
        onToggle(item.label);
    };

    return (
        <li>
            <div className="flex gap-4">
                <p onClick={handleToggle} className="cursor-pointer">{item.label}</p>
            </div>
            {isExpanded && item.children && item.children.length > 0 && (
                <MenuList list={item.children} expandedParent={item.label} onToggle={onToggle} />
            )}
        </li>
    );
}
