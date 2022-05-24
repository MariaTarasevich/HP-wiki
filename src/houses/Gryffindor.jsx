import React from 'react'
import { HeaderNav } from './../headerNav/HeaderNav'
import gryf from './../img/gryf.png'

export const Gryffindor = () => {
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className='house__content'>
                <div className='house__desc'>
                    <h3 className='house__title'>Gryffindor</h3>
                    <p className='house__text'><span className='house__span-bold'>Gryffindor</span> was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, nerve and determination, to be sorted into his house.

                        The emblematic animal was a lion, and its colours were scarlet and gold. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the House ghost.

                        Gryffindor corresponded roughly to the element of fire, and it was for this reason that the colours scarlet and gold were chosen to represent the house. The colour of fire corresponded to that of a lion as well, with scarlet representing the mane and tail and gold representing the coat.</p>
                    <h3 className='house__sub-title'>Traits</h3>
                    <p className='house__text'>
                        The Gryffindor house emphasised the traits of courage as well as "daring, nerve, and chivalry", and thus its members were generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors had also been noted to be short-tempered.

                        Notably, Gryffindor house contributed many members to Dumbledore's Army and the Order of the Phoenix, although this may have been because the main members made it a point not to associate with other houses.

                        According to Phineas Nigellus Black, members of other houses, particularly Slytherin, sometimes felt that Gryffindors engaged in "pointless heroics". Another Slytherin, Severus Snape, considered many Gryffindors to be self-righteous and arrogant, with no regard for rules.
                    </p>
                    <h3 className='house__sub-title'>Reputation</h3>
                    <p className='house__text'>Gryffindors and Slytherins had shared a fierce house rivalry since their founders, Godric Gryffindor and Salazar Slytherin, respectively, had a severe falling out over Slytherin's emphasis on blood purity. There might also be an element of feeling wronged, as Harry and his fellow Gryffindors tended to win in a lot of circumstances which, when viewed from a neutral point of view, may be considered unfair.

                        Examples of this included the last-minute points awarded by Headmaster Dumbledore at the End-of-Term Feast, which conveniently put Gryffindor ten points ahead of Slytherin in the 1991–1992 school year. The fact that no points were deducted for the rule breaking that happened during that night. Harry Potter being permitted by Professor McGonagall to have his own broomstick for the Gryffindor Quidditch team, even though first-years were not normally permitted their own broomsticks because of danger. Members of other houses might have felt that Gryffindor received favouritism. Many saw Harry Potter being chosen as the fourth competitor in the Triwizard Tournament as an unfair stealing of Hufflepuff student Cedric Diggory's thunder.</p>
                </div>
                <div className='house__card'>
                    <img src={gryf} className='house__card-img' />
                    <h3 className='house__carf-title'>Gryffindor</h3>
                    <p className='house__card-info'>House information</p>
                    <ul className='house__card-list'>
                    <li className='house__card-item'><span className='house__card-span'>Founder</span>Godric Gryffindor</li>
                        <li className='house__card-item'><span className='house__card-span'>House colours</span>Scarlet and gold</li>
                        <li className='house__card-item'><span className='house__card-span'>Animal</span>Lion</li>
                        <li className='house__card-item'><span className='house__card-span'>Element</span>Fire</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}