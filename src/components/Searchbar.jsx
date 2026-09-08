import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

const Searchbar = () => {

    const [search, setSearch, showSearch, setShowSearch] = useContext(ShopContext)


  return (
    <div>Searchbar</div>
  )
}

export default Searchbar