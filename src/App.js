import { useState } from "react";
import ItemDisplay from './components/ItemDisplay';
import OwnedItemsList from "./components/OwnedItemsList";
import OwnedComponentsList from "./components/OwnedComponentsList";

function App() {
    const componentCombinations = {
        'Deathblade': ["BFSword", "BFSword"],
        'Bloodthirster': ["BF Sword", "NegatronCloak"]
        
    }
    
    //todo: loop
    const itemImages = {
        'Deathblade': 'https://ap.tft.tools/img/items_s10/Deathblade.jpg?w=32',
        'BFSword': 'https://ap.tft.tools/img/items_s10/BFSword.jpg?w=32',
        'NegatronCloak': 'https://ap.tft.tools/img/items_s10/NegatronCloak.jpg?w=32',
        'Bloodthirster': 'https://ap.tft.tools/img/items_s10/Bloodthirster.jpg?w=32'
    }

    const itemList = Object.keys(itemImages);
    
    const [ownedComponents, setOwnedComponents] = useState([]);
    const [ownedItems, setOwnedItems] = useState([]);

    const renderedItemTable = () => {

    };

    // when clicking from table, should add item to inventory
    const handleAddItemClick = (item) => {
        console.log('adding item to inv', item);
        setOwnedItems([...ownedItems, item].sort());
    };


    // when clicking from inventory, should remove item from inventory
    const handleInventoryClick = (item) => {
        console.log('handling inventory click for', item);
        const indexToRemove = ownedItems.findIndex((elem) => elem === item);
        console.log(indexToRemove);
        const updatedOwnedItems = [...ownedItems];
        if (indexToRemove !== -1) {
            updatedOwnedItems.splice(indexToRemove, 1);
            console.log('update', updatedOwnedItems)
            setOwnedItems(updatedOwnedItems)
        };
    };
    /*
    const renderedItems = itemList.map((item) => {
        return <ItemDisplay onClick={handleAddItemClick} items={items}/>
    });
    */
    
    return (
        <div> 
            <ItemDisplay items={itemList} onClick={handleAddItemClick}></ItemDisplay>
            <div> 
                <OwnedItemsList items={ownedItems} onClick={handleInventoryClick}></OwnedItemsList>
            </div>
            <div>
                <OwnedComponentsList items={ownedItems}></OwnedComponentsList>
            </div>
        </div>
    );
}

export default App;