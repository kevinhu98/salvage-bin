
import Item from "./Item";

function ItemDisplay({items, onClick}) {
    const handleClick = (item) => {
        onClick(item);
    }

    const renderedItems = items.map((item) => {
        return <Item name={item} onClick={handleClick} />
    });

    return (
        <div > 
            {renderedItems}
        </div>
    )
};

export default ItemDisplay;