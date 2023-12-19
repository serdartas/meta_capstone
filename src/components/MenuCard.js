import "../styles/MenuCard.css";

function MenuCard(props){
    return(
        <article className="menuCard">
            <img src={props.ItemImage} alt={props.ItemName} />
            <div id="content">
                <div id="cardTitle">
                    <h4>{props.ItemName}</h4>
                    <p>{props.ItemPrice}</p>
                </div>
                <div id="cardBody">
                <p>{props.ItemDescription}</p>
                </div>
                <div id="cardFooter">
                    <h5>Available for delivery &nbsp;&nbsp;&nbsp; <i className="fa fa-truck-fast"></i></h5>
                </div>
            </div>
        </article>
    )
}

export default MenuCard;