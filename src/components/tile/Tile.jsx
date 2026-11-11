import './Tile.css';

function Tile(props) {
    return (
        <section>
            {props.title ? <h2>{props.title}</h2> : null}
            {props.children}
        </section>
    );
}
export default Tile;