import Image1 from "../../../assets/images/person_1.jpg"
import Image2 from "../../../assets/images/person_2.jpg"
import Image3 from "../../../assets/images/person_3.jpg"

import "./HappyCustomers.css";


const customers = [
    {
        image: Image1,
        quote: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
        auther: "Clare Gupta"
    },
    {
        image: Image2,
        quote: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
        auther: "Rogie Slater"
    },
    {
        image: Image3,
        quote: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
        auther: "John Doe"
    }
]

export default function Customers(props) {
    return (
        <section className={`customers ${props.className}`}>
            <h2>Happy Customers</h2>
            <div className="customers--wraper">
                {
                    customers.map((customer, index) => (
                        <div className="customer" key={index}>
                            <img src={customer.image} alt={`customer-${customer.auther}`} />
                            <p>{customer.quote}</p>
                            <p className="customer--auther">{customer.auther}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}