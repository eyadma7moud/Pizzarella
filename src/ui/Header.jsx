import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header className="flex items-center justify-between border-b border-beige bg-crust/90 px-4 py-4 backdrop-blur sm:px-8">
            <Link to='/' className="font-heading text-2xl font-extrabold tracking-tight text-marinara sm:text-3xl">
                Fast <span className="text-tomato">Pizza</span> 🍕
            </Link>
            <SearchOrder/>
            <p className="rounded-full bg-cheese/20 px-3 py-1 font-heading text-sm font-bold text-marinara sm:text-base">EYAD</p>
        </header>
    )
}

export default Header