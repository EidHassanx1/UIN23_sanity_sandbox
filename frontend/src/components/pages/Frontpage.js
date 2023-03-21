import ProductCard from "../productCard"

export default function Frontpage({Products}) {
    return (
        <>
          <h1>Innhold fra Sanity</h1>
          {Products?.map((p, i) => <ProductCard key={i} Productinfo={p} />)}
        </>
      )
}