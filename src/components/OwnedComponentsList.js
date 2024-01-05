//child of owneditemslist
function OwnedComponentsList({items}){
    const componentCombinations = {
        'Deathblade': ["BFSword", "BFSword"],
        'Bloodthirster': ["BF Sword", "NegatronCloak"]
    }

    const ownedComponentsDisplay = items.map((item) => {
        return <div> { item in componentCombinations ? [...componentCombinations[item]] : item} </div>
    });

    return (
        <div> Your Components:{ownedComponentsDisplay}</div>
    );
}

export default OwnedComponentsList;