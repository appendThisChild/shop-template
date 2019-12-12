import React from 'react'
import { Link } from "react-router-dom"

const DashboardNav = () => {
    return(
        <nav className="dashboardNav">
            <Link to="/dashboard/general">Shop Details</Link>
            <Link to="/dashboard/shop">Categories</Link>
            {/* add more as time comes */}

        </nav>
    )
}

export default DashboardNav;