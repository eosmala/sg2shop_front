import React from 'react'

export default function Koirat({category}) {
    const [products, setProducts] = useState([]);
    console.log("kategoria on " + category)
    useEffect(async() => {
        try {

            const response = await fetch('http://localhost/sg2shop_back/products/getproducts.php/' + category?.id);
            const json = await response.json();
            console.log("koirien useeffect");
            if (response.ok) {
                setProducts(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [category])

    return (
        <div>
            <p>Koiran ruoat ja tarvikkeet</p>
            <h3>Products for {category?.name}</h3>
                        {products.map(product => (
                            <div key={product.id}>
                                <p>{product.name}</p>
                            </div>
                        ))}
        </div>
    )
}
