import "../styles/Highlights.css";
import MenuCard from "./MenuCard";

const highlights = [
    {
        ItemName:"Pasta",
        ItemPrice:"$8.99",
        ItemDescription:"Mmmm best pasta in town. Marinated with Anatolian wine.",
        ItemImage:"images/Pasta.jpg",
    },
    {
        ItemName:"Salad",
        ItemPrice:"$8.99",
        ItemDescription:"Ceaser's salad to the max. You will turn green once you have it.",
        ItemImage:"images/GreekSalad.jpg",
    },
    {
        ItemName:"Lemon Dessert",
        ItemPrice:"$8.99",
        ItemDescription:"A dinner without tomato in mediterranean is not acceptable! Eat this shit!",
        ItemImage:"images/LemonDessert.jpg",
    },
];

export default function Highlights() {
    return (
        <section role="highlights" className="highlights">
            <div id="highlightHeader">
                <h3>Specials</h3>
                <button>View the menu</button>
            </div>
            <div id="menuCards">
                {
                    highlights.map(
                        (item) =>
                        <MenuCard
                            key = {item.ItemName}
                            ItemName = {item.ItemName}
                            ItemPrice = {item.ItemPrice}
                            ItemDescription = {item.ItemDescription}
                            ItemImage = {item.ItemImage}
                        />
                    )
                }
            </div>
        </section>
    );
};