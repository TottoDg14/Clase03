import { useEffect, useState } from "react";

// /api es un proxy configurado en vite.config.js
const API = "/api/api/v1/models/SM_Categoria_Producto_Marca?$select=IsActive,M_Product_Category_ID&$filter=SM_Marca_ID eq 1000000";

const CategoryList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer eyJraWQiOiJpZGVtcGllcmUiLCJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJETUFSUVVFWiIsIkFEX0NsaWVudF9JRCI6MTAwMDAwMCwiQURfVXNlcl9JRCI6MTAwMDAxNSwiQURfUm9sZV9JRCI6MTAwMDAwMCwiQURfT3JnX0lEIjowLCJBRF9MYW5ndWFnZSI6ImVzX0NPIiwiQURfU2Vzc2lvbl9JRCI6MTExMTQ4MSwiaXNzIjoiaWRlbXBpZXJlLm9yZyJ9.pn2E40xqX7dHQfHHfd_d33r9CNP7phQhWX1kftjesmiv1xPoZM4V4LnH6m2GaF0Fx7lKho4olxOrFT8wuBKrEg"
                },
                redirect: "follow"
            };
            const response = await fetch(API, requestOptions);
            if (!response.ok)
                throw new Error("HTTP Error: " + response.status);

            const data = await response.json();
            setCategories(data.records);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    if (loading) {
        return (
            <p>Cargando...</p>
        );
    }

    if (error) {
        return (
            <p>Oops! {error}</p>
        );
    }

    return (
        <div className="product-categories mb-4">
            <h4>Products Categories</h4>
            <ul className="list-unstyled">
                {categories.map((category, index) => (
                <li key={index}>
                    <div className="categories-item">
                        <a href="#" className="text-dark text-capitalize">
                            <i className="fas fa-apple-alt text-secondary me-2" />
                            {category.M_Product_Category_ID.identifier.toLowerCase()}
                        </a>
                        <span>(3)</span>
                    </div>
                </li>
                ))}
            </ul>
        </div>

    )
}

export default CategoryList