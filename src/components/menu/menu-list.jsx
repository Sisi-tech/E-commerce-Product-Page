import MenuItem from "./menu-item";

export default function MenuList({ list = [], expandedParent, onToggle }) {
    return (
        <ul className="menu-list-container lg:text-xl text-sm flex flex-col gap-2">
            {list.map((item, index) => (
                <MenuItem 
                    key={item.label || index}
                    item={item}
                    isExpanded={expandedParent === item.label}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}
