import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        return () => {
            console.log("Even Mount");
        };
    }, []);

    return <div>짝수</div>

}

export default Even;