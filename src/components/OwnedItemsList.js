import Item from "./Item";

function OwnedItemsList({items, onDeleteClick}){

    const ownedItemsDisplay = items.map((item)=> {
        return (
            <div> 
                <Item name={item} onClick={onDeleteClick}></Item> 
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