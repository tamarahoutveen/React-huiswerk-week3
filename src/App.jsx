import './App.css'
import PrimaryButton from './components/primaryButton/PrimaryButton.jsx';
import ProductCard from './components/productCard/ProductCard.jsx';
import Tile from './components/tile/Tile.jsx';
import productImage1 from './assets/bag_1.png';
import productImage2 from './assets/bag_2.png';
import productImage3 from './assets/bag_3.png';
import productImage4 from './assets/bag_4.png';
import brandImage from './assets/brand.png';
import storyImage from './assets/our_story.png';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <PrimaryButton
                    label="to the collection"
                    onClickAction="#"
                />
                <PrimaryButton
                    label="shop all bags"
                    onClickAction="#"
                />
                <PrimaryButton
                    label="pre-orders"
                    onClickAction="#"
                    isDisabled={true}
                />
            </nav>
            <main>
                <ProductCard
                    productLabel="Best seller"
                    productImage={productImage1}
                    productName="The handy bag"
                    productPrice={400}
                />
                <ProductCard
                    productLabel="Best seller"
                    productImage={productImage2}
                    productName="The stylish bag"
                    productPrice={250}
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={productImage3}
                    productName="The simple bag"
                    productPrice={300}
                />
                <ProductCard
                    productLabel="New collection"
                    productImage={productImage4}
                    productName="The trendy bag"
                    productPrice={150}
                />
            </main>
            <footer>
                <Tile title="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut blanditiis consectetur
                        consequatur corporis cum dolor, ea eius illo inventore itaque iusto laboriosam modi odit quam
                        repellat, sunt vero voluptatum!</p>
                </Tile>
                <Tile>
                    <img src={brandImage} alt="The Brand" />
                </Tile>
                <Tile>
                    <img src={storyImage} alt="Our Story" />
                </Tile>
                <Tile title="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut autem, blanditiis esse facere iste, iure labore laborum libero minima molestiae, nesciunt nisi optio perferendis porro quisquam ratione voluptatibus voluptatum</p>
                </Tile>
            </footer>
        </>
    );
}

export default App
