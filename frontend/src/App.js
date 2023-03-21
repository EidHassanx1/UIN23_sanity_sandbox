import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import ProductCard from './components/productCard';
import Frontpage from './components/pages/Frontpage';
import {Routes} from 'react-router-dom';

function App() {

  const [prods, setProds] = useState(null)

  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(prods)

  //console.log(fetchAllProducts())
  //FOR å skjekke om vi får tak i fetchAllProducts fra productServices....

  // let PROJECTID = 'h63aavy9'
  // let DATASET = 'production'
  // let QUERY = encodeURIComponent('*[_type == "products"]')
  // let URL = `https://${PROJECTID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

  // fetch(URL)
  // .then((results) => results.json())
  // .then(({result}) => {console.log(result)})

  return (
    <Routes>
    <Route index element={<Frontpage Products={prods} />} />
    </Routes>
  );
}

export default App;
