// 46-5 Create child component and pass data via props
//react-countries-rest2 te shob thik thak moto countres dekhano hoise


//

{
    countries.map(country => <Country
        country={country}
    //ek ek kore pathanor cheye shob ek bare pathae dilam. console e dekha jabe arr er modhe full countries tao ache 
    // region={country.region}
    //eta old method
    ></Country>)
}
//ei old method tao folow korbo
//pore region ta r thakbe na eke country'r madhome vitore call kora jabe 