
function Item({name, onClick}) {
    const handleClick = () => {
        console.log('handling click for ', name);
        onClick(name);
    };

    return(
        <div onClick={handleClick}>
            <img src={`https://ap.tft.tools/img/items_s10/${name}.jpg?w=32`}></img>
        </div>
    );
};

export default Item;