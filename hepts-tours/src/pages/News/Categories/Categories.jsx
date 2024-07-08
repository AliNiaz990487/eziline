

import "./Categories.css";

const categories = [
    { name: "Events", amount: 12 },
    { name: "Resto bar", amount: 4 },
    { name: "Calibration", amount: 23 },
    { name: "Promos", amount: 8 },
]

export default function Categories(props) {
    return (
        <div className="categories">
            <h2>Category</h2>
            {
                categories.map( (cat, index) => {
                    return <a href="" className="category" key={index}>
                                <span>{cat.name}</span>
                                <span>{`(${cat.amount})`}</span>
                            </a>
                })
            }
        </div>
    )
}