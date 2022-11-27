import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.role === 'buyer'){
                        setIsBuyer(true);
                    }
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;
