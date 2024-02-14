import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantsMenu = (resId) => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API
            + resId +
            "&catalog_qa=undefined&submitAction=ENTER"    
        );
        const json = await data.json();
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };

    return menu;
}

export default useRestaurantsMenu;