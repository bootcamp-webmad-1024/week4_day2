import { useState } from 'react'
import { drinksData } from '../../data/fakeApi'

const DrinksList = () => {

    const [drinks, setDrinks] = useState(drinksData)

    return (
        <div className="DrinksList">
            <h2>Bebidas</h2>
            {
                drinks.map(eachDrink => {
                    return <p key={eachDrink}>{eachDrink}</p>
                })
            }
        </div>
    )
}

export default DrinksList