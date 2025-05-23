import { useEffect, useState } from "react";
import resMenu from "../utils/restroMenuMockData";

const useRestrauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = resMenu;
        setResInfo(data);
    }
    return resInfo;
}

export default useRestrauntMenu;