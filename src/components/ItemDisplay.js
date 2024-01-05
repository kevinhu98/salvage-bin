
// fix on click to img not div

function ItemDisplay({item, onClick}) {
    const handleClick = () => {
        onClick(item);
    }
    return (
        <div onClick={handleClick}> 
            <img src={`https://ap.tft.tools/img/items_s10/${item}.jpg?w=32`}></img>
        </div>
    )
};

export default ItemDisplay;