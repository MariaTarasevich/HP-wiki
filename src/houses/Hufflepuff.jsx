import React from 'react'
import { HeaderNav } from './../headerNav/HeaderNav'
import huff from './../img/huff.png'

export const Hufflepuff = () => {
    return (
        <div className='char__wrap'>
            <HeaderNav />
            <div className='house__content'>
                <div className='house__desc'>
                    <h3 className='house__title'>Hufflepuff</h3>
                    <p className='house__text'><span className='house__span-bold'>Hufflepuff</span> was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members.

                        The emblematic animal was a badger, and yellow and black were its house colours. The Head of Hufflepuff was Pomona Sprout, and the Fat Friar was the House's patron ghost.

                        Hufflepuff corresponded roughly to the element of earth, and it was for that reason that the House colours were chosen: yellow represented wheat, while black was emblematic of soil. The Hufflepuff point hourglass contained yellow diamonds. Students sorted into Hufflepuff often demonstrated exceptional abilities in Herbology, owing to their correspondence to earth.</p>
                    <h3 className='house__sub-title'>Traits</h3>
                    <p className='house__text'>
                        Students belonging to this house were known to be hard-working, friendly, loyal, honest and rather impartial. It might be that due to their values, Hufflepuffs were not as competitive as the other houses, and were more modest about their accomplishments. Hufflepuff was the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students.

                        Hufflepuffs were known to have a strong moral code, and a sense of right and wrong. Hufflepuffs were usually accepting of everyone. Students in Hufflepuff were known to value everyone and treat them as equal.
                    </p>
                        <h3 className='house__sub-title'>Reputation</h3>
                        <p className='house__text'>According to Minerva McGonagall, all four of the houses produced exceptional witches and wizards in their time, but due to Helga Hufflepuff's policy of accepting any student Hufflepuff is often thought to be the house of less talented wizards and witches. However, this was merely a misunderstanding of the Sorting Hat's poem.

                            The Hufflepuff house had produced a great number of wizards and witches who would go on to be extremely successful and have great influence upon the history and course of the wizarding world, examples of such individuals including the famous Magizoologist Newton Scamander (a pioneer in the field of Magizoology), Arithmancer Bridget Wenlock (who discovered the magical properties of the number seven), Hengist of Woodcroft (founder of the all-wizard village of Hogsmeade) and former Minister for Magic Artemisia Lufkin (who was the first woman to hold the office and established the Department of International Magical Co-operation).</p>
                </div>
                <div className='house__card'>
                    <img src={huff} className='house__card-img' />
                    <h3 className='house__carf-title'>Hufflepuff</h3>
                    <p className='house__card-info'>House information</p>
                    <ul className='house__card-list'>
                        <li className='house__card-item'><span className='house__card-span'>Founder</span>Helga Hufflepuff</li>
                        <li className='house__card-item'><span className='house__card-span'>House colours</span>Yellow and black</li>
                        <li className='house__card-item'><span className='house__card-span'>Animal</span>Badger</li>
                        <li className='house__card-item'><span className='house__card-span'>Element</span>Earth</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}