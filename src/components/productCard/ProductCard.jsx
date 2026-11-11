import './ProductCard.css';
import bag1 from "../../assets/bag_1.png";

function ProductCard({productLabel, productImage, productName, productPrice}) {
    return(
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={productName} />
            <p>{productName}</p>
            <h4>&#8364; {productPrice},-</h4>
        </article>
    );
}
export default ProductCard;