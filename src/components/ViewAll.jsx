import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "name": "Anjali", "admNo": 101, "rollNo": 1 },
            { "name": "Aswathy", "admNo": 102, "rollNo": 2 },
            { "name": "Athira", "admNo": 103, "rollNo": 3 },
            { "name": "Anjali", "admNo": 101, "rollNo": 1 },
            { "name": "Aswathy", "admNo": 102, "rollNo": 2 },
            { "name": "Athira", "admNo": 103, "rollNo": 3 },
             { "name": "Anjali", "admNo": 101, "rollNo": 1 },
            { "name": "Aswathy", "admNo": 102, "rollNo": 2 },
            { "name": "Athira", "admNo": 103, "rollNo": 3 },
        ]
    )

    return (
        <div>
            <NavBar />
            <h1><center>VIEWALL STUDENTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card">
                                                <img src="https://www.stewardtoday.com/wp-content/uploads/2017/07/Female-College-Student-FB-1024x683.jpg" className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.name}</h5>
                                                    <p className="card-text">Adm No:{value.admNo}</p>
                                                    <p className="card-text">Adm No:{value.rollNo}</p>
                                                    <a href="#" className="btn btn-primary">view details</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll