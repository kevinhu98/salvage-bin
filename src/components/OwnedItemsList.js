function OwnedItemsList({items, onClick}){
    const handleClick = (item) => {
        onClick(item);
    }

    const ownedItemsDisplay = items.map((item)=> {
        return (
            <div onClick={handleClick}>
                <img src={`https://ap.tft.tools/img/items_s10/${item}.jpg?w=32`}></img>
            </div>
        );
    })
    
    return (
        <div>
            Your Items: {ownedItemsDisplay}
        </div>
    );
    
}

export default OwnedItemsList;