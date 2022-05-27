import React from 'react'
import { HeaderNav } from './../headerNav/HeaderNav'
import rav from './../img/rav.png'

export const Ravenclaw = () => {
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className='house__content'>
                <div className='house__desc'>
                    <h3 className='house__title'>Ravenclaw</h3>
                    <p className='house__text'><span className='house__span-bold'>Ravenclaw</span> was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours. The Head of Ravenclaw was Filius Flitwick, and the House ghost was the Grey Lady, real name Helena Ravenclaw, daughter of Rowena.

                        Ravenclaw corresponded roughly to the element of air, and it was for that reason that the House colours were chosen; blue and bronze represented the sky and eagle feathers respectively, both having much to do with air. The Ravenclaw points hourglass contained blue sapphires.</p>
                    <h3 className='house__sub-title'>Traits</h3>
                    <p className='house__text'>
                        Ravenclaw House prized learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tended to be academically motivated and talented students. They also prided themselves on being original in their ideas, and methods. It was not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun. Hermione Granger, an extremely intelligent witch and the top student in her year, was sorted into Gryffindor, though she admitted that the Sorting Hat had seriously considered placing her in Ravenclaw.

                        Often hard-working and diligent, as often was the case with intellectuals with a predisposition for academics, some of the pupils sorted under the blue-bronzed eagle were known to be inclined to dismiss certain social expectations for the sake of satisfying their own intellectual curiosity. 
                    </p>
                    <h3 className='house__sub-title'>Reputation</h3>
                    <p className='house__text'>According to Slytherin prefect Gemma Farley, Ravenclaws were so competitive when it came to academic success that they were known to backstab each other, and likely other students, in order to get top marks. While Hufflepuff prefect Gabriel Truman noted that they were so proud of the success of famous members, such as Laverne de Montmorency, that they claimed any intelligent wizard as a member of Ravenclaw House, such as Bridget Wenlock, who was, in fact, a Hufflepuff. Some Ravenclaws, such as Uric the Oddball, Xenophilius Lovegood, and his daughter Luna Lovegood were also noted to have a propensity towards eccentricity.

                        Ravenclaw House appeared to have little rivalry with the other houses, except in Quidditch. Harry Potter believed that they tended to side with Gryffindor in its rivalry with Slytherin, as did Hufflepuff house. However, during the 1994 Triwizard Tournament, most Ravenclaws supported Hufflepuff champion Cedric Diggory over Harry. They believed that Harry had, in fact, cheated his way into being a champion and that the true Hogwarts champion was Cedric. Many Ravenclaws (such as Cho Chang) joined Dumbledore's Army and fought in the Battle of Hogwarts along with Gryffindors and Hufflepuffs.</p>
                </div>
                <div className='house__card'>
                    <img src={rav} className='house__card-img' />
                    <h3 className='house__carf-title'>Ravenclaw</h3>
                    <p className='house__card-info'>House information</p>
                    <ul className='house__card-list'>
                        <li className='house__card-item'><span className='house__card-span'>Founder</span>Rowena Ravenclaw</li>
                        <li className='house__card-item'><span className='house__card-span'>House colours</span>Blue and bronze</li>
                        <li className='house__card-item'><span className='house__card-span'>Animal</span>Eagle</li>
                        <li className='house__card-item'><span className='house__card-span'>Element</span>Air</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}