import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://car-bazar-server.vercel.app/user?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data.role === 'seller'){
                        setIsSeller(true);
                    }
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;
