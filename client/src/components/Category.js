import React, { useEffect } from 'react'

// Provider
import { useCategory } from "../context/CategoryProvider.js"

const Category = props => {
    // const [templateData, setTemplateData] = useState('')

    const { category_id, setCategory_id, getCategory, getProducts } = useCategory()


    useEffect(() => {
        setCategory_id(props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        getCategory(() => {
            getProducts()
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_id])

    return(
        <div>
            Category
        </div>
    )
}

export default Category;