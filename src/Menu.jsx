const Menu = () => {



    return (
        <div className="Menu">
          <ul className="nav">
            <li className="nav-item">
                <a classname="nav-link" href="#">Item do Menu</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Home">Home</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="/PokeFlex">PokeFlex</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="/PokeGrid">PokeGrid</a>
            </li>
          </ul>
        </div>
    )
}

export default Menu