

export default function ProductCard ({Productinfo}) {
    return (
        <article>
            <h2>{Productinfo.product_title}</h2>
            <p>Pris: {Productinfo.price}</p>
            <Link to={Productinfo?.slug?.current}>Les Mer</Link>
        </article>
    )
}