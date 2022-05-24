import React from 'react'
import { HeaderNav } from './../headerNav/HeaderNav'
import slyth from './../img/slyth.png'

export const Slytherin = () => {
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className='house__content'>
                <div className='house__desc'>
                    <h3 className='house__title'>Slytherin</h3>
                    <p className='house__text'><span className='house__span-bold'>Slytherin</span>  was one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin.In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics included cunning, resourcefulness, leadership, and ambition.

                        Many Slytherin students tended to clique together (often acquiring leaders) which further exemplified Slytherin's ambitious qualities. Examples of these included Draco Malfoy's gang, Merula Snyde's gang, Pansy Parkinson's gang and the Death Eaters.

                        The founder highly valued and favoured pure-blood students and the Sorting Hat admitted that it could be a factor when being sorted. Students of any blood status could be placed in the house. However, a Muggle-born student from that house was considered to be quite rare.</p>
                    <h3 className='house__sub-title'>Traits</h3>
                    <p className='house__text'>
                        Slytherins tended to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also had highly developed senses of self-preservation. This means that Slytherins tended to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done.

                        According to Albus Dumbledore, the qualities which Salazar valued in the students he had chosen included cleverness, resourcefulness, determination, and "a certain disregard for the rules". Dumbledore noted that all of these were qualities possessed by Harry Potter, who was a Gryffindor but was almost placed in Slytherin.
                    </p>
                    <h3 className='house__sub-title'>Reputation</h3>
                    <p className='house__text'>Slytherin had a well-known reputation for creating Dark Witches and Wizards that many would even say that every Dark Witch or Wizard was actually in Slytherin (it also didn't help that Voldemort himself was in Slytherin too when he was a student at Hogwarts). While it was true that many were in the house, it was untrue to say every single one of them was, as Peter Pettigrew, betrayer of James and Lily, was in Gryffindor and Quirinus Quirrell was in Ravenclaw.

                        It appeared that reputation had led to an ironic prejudice against the entire house. It is unknown how many Dark Witches and Wizards were from this house before Tom Riddle began recruiting Death Eaters, but many of them came from a family that valued blood purity and would prefer, like Riddle, to be in the house and recruit from there.</p>
                </div>
                <div className='house__card'>
                    <img src={slyth} className='house__card-img' />
                    <h3 className='house__carf-title'>Slytherin</h3>
                    <p className='house__card-info'>House information</p>
                    <ul className='house__card-list'>
                        <li className='house__card-item'><span className='house__card-span'>Founder</span>Salazar Slytherin</li>
                        <li className='house__card-item'><span className='house__card-span'>House colours</span>Green and silver</li>
                        <li className='house__card-item'><span className='house__card-span'>Animal</span>Serpent</li>
                        <li className='house__card-item'><span className='house__card-span'>Element</span>
                            Water</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}