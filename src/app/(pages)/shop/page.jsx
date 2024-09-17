'use client'
import ItemCard from '@/components/ItemCard'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relevant')


    const handleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const handleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }


    const applyFilter = () => {
        let productsCopy = [...products];
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }
        setFilteredProducts(productsCopy);
    }



    const sortProducts = () => {
        let fpCopy = [...filteredProducts]
        switch (sortType){
            case 'highToLow':
                setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price))
                break;
            case 'lowToHigh':
                setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price))
                break;
            default:
                applyFilter()
                break;
        }
    }

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then((data) => {setProducts(data.books); 
            setFilteredProducts(data.books)})
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        applyFilter();
    }, [category, subCategory]);

    useEffect(() => {
        sortProducts()
    }, [sortType])

    return (
        <main className='w-full'>
            <div className='w-full'>
                <h1 className="text-4xl font-bold my-6 text-center">Shop</h1>
                <div className='w-full flex flex-col items-end gap-5 px-5'>
                    <select name="" id="" onChange={e => setSortType(e.target.value)} className='border-2 border-black outline-none'>
                        <option value="relevant">Sort by: relevant</option>
                        <option value="highToLow">Sort by: High to Low</option>
                        <option value="lowToHigh">Sort by: Low to High</option>
                    </select>
                    <section className='w-full flex gap-5'>
                        <aside className='w-1/5 px-6 flex flex-col gap-2'>
                            <h2>Filter</h2>
                            <div className='border p-2'>
                                <p>Category</p>
                                <input type="checkbox" onChange={handleCategory} name="Psychology" id="Psychology" value="Psychology" />
                                <label htmlFor="Psychology">Psychology</label><br />
                                <input type="checkbox" onChange={handleCategory} name="Science" id="Science" value="Science Fiction" />
                                <label htmlFor="Science Fiction">Science Fiction</label><br />
                                <input type="checkbox" onChange={handleCategory} name="Fiction" id="Fiction" value="Fiction" />
                                <label htmlFor="Fiction">Fiction</label><br />
                            </div>
                            <div className='border p-2'>
                                <p>Sub Category</p>
                                <input type="checkbox" onChange={handleSubCategory} name="Self-Help" id="Self-Help" value="Self-Help" />
                                <label htmlFor="Self-Help">Self-Help</label><br />
                                <input type="checkbox" onChange={handleSubCategory} name="Mindfulness" id="Mindfulness" value="Mindfulness" />
                                <label htmlFor="Mindfulness">Mindfulness</label><br />
                                <input type="checkbox" onChange={handleSubCategory} name="Classic" id="Classic" value="Classic" />
                                <label htmlFor="Classic">Classic</label><br />
                                <input type="checkbox" onChange={handleSubCategory} name="Historical" id="Historical" value="Historical" />
                                <label htmlFor="Historical">Historical</label><br />
                                <input type="checkbox" onChange={handleSubCategory} name="Dystopian" id="Dystopian" value="Dystopian" />
                                <label htmlFor="Dystopian">Dystopian</label><br />
                                <input type="checkbox" onChange={handleSubCategory} name="Entrepreneurship" id="Entrepreneurship" value="Entrepreneurship" />
                                <label htmlFor="Entrepreneurship">Entrepreneurship</label><br />
                                <input type="checkbox" onChange={handleSubCategory} name="Philosophy" id="Philosophy" value="Philosophy" />
                                <label htmlFor="Philosophy">Philosophy</label><br />
                            </div>

                        </aside>
                        <div className='w-4/5 flex-wrap flex border-l px-8'>
                            {filteredProducts.map(product => <ItemCard key={product.id} product={product} />)}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Page