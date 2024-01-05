function OwnedItemsList({items}){
    const ownedItemsDisplay = items.map((item)=> {
        return <div>{item}</div>;
    })
    return (
        <div>
            Your Items: {ownedItemsDisplay}
        </div>
    );
    
}

export default OwnedItemsList;