import { useState, useEffect } from "react";
import "./style.css";

export default function LoadImg() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProduct() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [count]);
    useEffect(() => {
        if (products && products.length >= 100) setDisableButton(true);
    }, [products]);
    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }
    return (
        <div className="container flex flex-col gap-4 w-full items-center">
            <div className="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
                {
                    products && products.length 
                    ? products.map((item, index) => (
                        <div key={index} className="product p-6 border-solid flex flex-col items-center gap-4">
                            <img src={item.thumbnail} alt={item.title} className="w-[200px] h-[200px]" />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null 
                }
            </div>
            <div className="button-container flex flex-col gap-8 mt-8 text-center">
                <button disabled={disableButton} onClick={() => setCount(count + 1)} className="bg-[#333] text-[#f1f1f1] p-2 pl-4 pr-4 border-none cursor-pointer border-r-8 rounded-full ">
                    Load more Products
                </button>
                {disableButton ? <p>You have reached to 100 products</p> : null}
            </div>
        </div>
    );
};