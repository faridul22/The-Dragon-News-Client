import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    console.log(categories)
    return (
        <div>
            <h5>All Category</h5>
            <div className='mt-5'>
                {
                    categories && categories.map(category => <p
                        key={category.id}
                        className='my-4'
                    >
                        <Link to={`/category/${category.id}`} className='ps-4 text-decoration-none text-secondary fw-medium fs-5' >{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;