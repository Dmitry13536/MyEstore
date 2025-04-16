import { useEffect, useState } from "react";

function useIsLargeScreen() {
    const [isLarge, setIsLarge] = useState(window.innerWidth > 1000);

    useEffect(()=>{
        const handleResize = () =>{
            setIsLarge(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    return isLarge;
}

export default useIsLargeScreen;