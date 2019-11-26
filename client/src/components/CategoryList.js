import React, { useEffect } from 'react'

// Provider
import { useCategory } from "../context/CategoryProvider.js"

const CategoryList = props => {
    // const [templateData, setTemplateData] = useState('')
    const { _id, admin, className } = props
    const { category_id, setCategory_id, getCategory, getProducts } = useCategory()
    

    useEffect(() => {
        setCategory_id(admin ? _id : props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getCategory(() => {
            getProducts()
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_id])

    return(
        <div className={className}>
            Category
            <h1>title</h1>
            {admin ?
            <>
            create product
            </>
            :null}
            product list
        </div>  
    )
}

export default CategoryList;