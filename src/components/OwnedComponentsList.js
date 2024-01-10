//child of owneditemslist
import Item from "./Item";
function OwnedComponentsList({items}){
    const componentCombinations = {
        'Deathblade': ["BFSword", "BFSword"],
        'Bloodthirster': ["BFSword", "NegatronCloak"]
    }
    const ownedComponents = []

    items.forEach((item) => {
        if (item in componentCombinations){
            ownedComponents.push(...componentCombinations[item])
        }
        else {
            ownedComponents.push(item);
        }
        console.log(ownedComponents, 'sorting');
        ownedComponents.sort();
        console.log(ownedComponents)
    });
    
    console.log(ownedComponents)
    const ownedComponentsDisplay = ownedComponents.map((item) => {
        return (
        <div> 
            <Item name={item} onClick={()=>{}}></Item> {/* check if this is ok */}
        </div>
        );
    });

    return (
        <div> Your Components:{ownedComponentsDisplay}</div>
    );
}

export default OwnedComponentsList;