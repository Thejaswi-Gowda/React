import { useEffect, useState } from "react";

const useIsActive = () => {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        addEventListener("online", () => {
            setStatus(true);
        });
    
        addEventListener("offline", () => {
            setStatus(false);
        });
    }, []);

    return status;
}

export default useIsActive;