import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changedata] = useState(
        [
            { "No": 1, "Model Name": "iphone", "Brand": "Apple", "Colour": "Black", "Price": 60000 },
            { "No": 1, "Model Name": "iphone", "Brand": "Apple", "Colour": "Black", "Price": 60000 },
            { "No": 1, "Model Name": "iphone", "Brand": "Apple", "Colour": "Black", "Price": 60000 },
        ]
    )


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">

                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Model Name</th>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Colour</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    {data.map(
                                        (value, index) => {
                                            return <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>iphone</td>
                                                    <td>Apple</td>
                                                    <td>Black</td>
                                                    <td>60000</td>
                                                </tr>


                                            </tbody>

                                        }
                                    )
                                    }
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll