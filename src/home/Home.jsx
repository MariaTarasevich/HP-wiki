import React from "react"
import { NavLink } from 'react-router-dom'
import welcomePromo from './../img/welcomePromo.webp'
import fakultet from './../img/fakultet.jpg'
import characters from './../img/characters.jpg'
import hat from './../img/hat.jpg'
import { Collapse } from 'antd';
import 'antd/dist/antd.css';


import { HeaderNav } from './../headerNav/HeaderNav'
import { Footer } from './../footer/Footer'

export const Home = () => {
    const { Panel } = Collapse;

    return (
        <div className='container'>
            <section className="home__promo">
                <HeaderNav />
                <div className="home__promo-content">
                    <div className="home__promo-wrap">
                        <img className="home__promo-pic" src={welcomePromo} />
                        <h2 className="home__promo-subtitle">Find any character from the Harry Potter universe</h2>
                    </div>
                </div>
            </section>
            <section className="info__wrap">
                <h3 className="info__title"><span className="info__what">What</span> you can do on our website</h3>
                <p className="info__subtitle">Feel free to explore</p>
                <div className="info__items">
                    <NavLink to='/' className="info__item">
                        <img className="info__item-img" src={fakultet} alt='houses' />
                        <div className="info__item-content">
                            <p className="info__item-number">01</p>
                            <p className="info__item-title">Get acquainted with the Houses</p>
                            <p className="info__item-desc">Get to know everything about the Houses of Hogwarts, uncover all the mysteries of old school of witchcraft and wizardy.</p>
                        </div>
                    </NavLink>
                    <NavLink to='/' className="info__item">
                        <img className="info__item-img" src={characters} alt='characters' />
                        <div className="info__item-content">
                            <p className="info__item-number">02</p>
                            <p className="info__item-title">Discover any character from the HP universe</p>
                            <p className="info__item-desc">We provide full library with all needed info about all characters from books and films.</p>
                        </div>
                    </NavLink>
                    <NavLink to='/' className="info__item">
                        <img className="info__item-img" src={hat} alt='sorting hat' />
                        <div className="info__item-content">
                            <p className="info__item-number">03</p>
                            <p className="info__item-title">Find out your House in  Hogwarts</p>
                            <p className="info__item-desc">Ask Sorting Hat which House would fit you most of all.</p>
                        </div>
                    </NavLink>
                </div>
            </section>
            <section className="accordion__wrap">
                <div className="accordion__content">
                    <h3 className="accordion__title">About the universe</h3>
                    <Collapse accordion>
                        <Panel header="Brief info">
                            <p>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                        </Panel>
                        <Panel header="Plot">
                            <p>The series follows the life of a boy named Harry Potter. In the first book, Harry Potter and the Philosopher's Stone, Harry lives in a cupboard under the stairs in the house of the Dursleys, his aunt, uncle and cousin. The Dursleys consider themselves perfectly normal, but at the age of eleven, Harry discovers that he is a wizard. He meets a half-giant named Hagrid who invites him to attend the Hogwarts School of Witchcraft and Wizardry. Harry learns that as a baby, his parents were murdered by the dark wizard Lord Voldemort. When Voldemort attempted to kill Harry, his curse rebounded and Harry survived with a lightning-shaped scar on his forehead.

                                <br />Harry becomes a student at Hogwarts and is sorted into Gryffindor House. He gains the friendship of Ron Weasley, a member of a large but poor wizarding family, and Hermione Granger, a witch of non-magical, or Muggle, parentage. Harry encounters the school's potions master, Severus Snape, who displays a dislike for him; the rich pure-blood Draco Malfoy whom he develops an enmity with; and the Defence Against the Dark Arts teacher, Quirinus Quirrell, who turns out to be allied with Lord Voldemort. The first book concludes with Harry's confrontation with Voldemort, who, in his quest to regain a body, yearns to gain the power of the Philosopher's Stone, a substance that bestows everlasting life.

                                <br />Harry Potter and the Chamber of Secrets describes Harry's second year at Hogwarts. Students are attacked and petrified by an unknown creature; wizards of Muggle parentage are the primary targets. The attacks appear related to the Chamber of Secrets, a fifty-year-old mystery at the school. Harry discovers an ability to speak the snake language Parseltongue, which he learns is rare and associated with the Dark Arts. When Hermione is attacked, Harry and Ron uncover the chamber's secrets and enter it. Harry discovers that the chamber was opened by Ron's younger sister, Ginny Weasley, who was possessed by an old diary in her belongings. The memory of Tom Marvolo Riddle, Voldemort's younger self, resided inside the diary and unleashed the basilisk, an ancient monster that kills those who make direct eye contact. Harry draws the Sword of Gryffindor from the Sorting Hat, slays the basilisk and destroys the diary.

                                <br />In the third novel, Harry Potter and the Prisoner of Azkaban, Harry learns that he is targeted by Sirius Black, an escaped convict who allegedly assisted in his parents' murder. As Harry struggles with his reaction to the dementors – creatures guarding the school that feed on despair – he reaches out to Remus Lupin, a new professor who teaches him the Patronus charm. On a windy night, Ron is dragged by a black dog into the Shrieking Shack; Harry and Hermione follow. The dog is revealed to be Sirius Black. Lupin enters the shack and explains that Black was James Potter's best friend; he was framed by Peter Pettigrew, who hides as Ron's pet rat, Scabbers. As the full moon rises, Lupin transforms into a werewolf and bounds away; the group chase after him but are surrounded by dementors. They are saved by a mysterious figure who casts a stag Patronus. This is later revealed to be a future version of Harry, who traveled back in time with Hermione using the Time Turner. The duo help Sirius escape on a Hippogriff.</p>
                        </Panel>
                        <Panel header="Genre and style">
                            <p>The novels fall into the genre of fantasy literature, and qualify as a type of fantasy called "urban fantasy", "contemporary fantasy", or "low fantasy". They are mainly dramas, and maintain a fairly serious and dark tone throughout, though they do contain some notable instances of tragicomedy and black humour. In many respects, they are also examples of the bildungsroman, or coming of age novel, and contain elements of mystery, adventure, horror, thriller, and romance. The books are also, in the words of Stephen King, "shrewd mystery tales", and each book is constructed in the manner of a Sherlock Holmes-style mystery adventure. The stories are told from a third person limited point of view with very few exceptions (such as the opening chapters of Philosopher's Stone, Goblet of Fire and Deathly Hallows and the first two chapters of Half-Blood Prince).

                                <br />The series can be considered part of the British children's boarding school genre, which includes Rudyard Kipling's Stalky & Co., Enid Blyton's Malory Towers, St. Clare's and the Naughtiest Girl series, and Frank Richards's Billy Bunter novels: the Harry Potter books are predominantly set in Hogwarts, a fictional British boarding school for wizards, where the curriculum includes the use of magic. In this sense they are "in a direct line of descent from Thomas Hughes's Tom Brown's School Days and other Victorian and Edwardian novels of British public school life", though they are, as many note, more contemporary, grittier, darker, and more mature than the typical boarding school novel, addressing serious themes of death, love, loss, prejudice, coming-of-age, and the loss of innocence in a 1990s British setting.</p>
                        </Panel>
                        <Panel header="Themes">
                            <p>Harry Potter's overarching theme is death. In the first book, when Harry looks into the Mirror of Erised, he feels both joy and "a terrible sadness" at seeing his desire: his parents, alive and with him. Confronting their loss is central to Harry's character arc and manifests in different ways through the series, such as in his struggles with Dementors. Other characters in Harry's life die; he even faces his own death in Harry Potter and the Deathly Hallows. The series has an existential perspective – Harry must grow mature enough to accept death. In Harry's world, death is not binary but mutable, a state that exists in degrees. Unlike Voldemort, who evades death by separating and hiding his soul in seven parts, Harry's soul is whole, nourished by friendship and love.</p>
                        </Panel>
                        <Panel header="Awards, honours, and recognition">
                            <p>The Harry Potter series has been recognised by a host of awards since the initial publication of Philosopher's Stone including a platinum award from the Whitaker Gold and Platinum Book Awards ( 2001), three Nestlé Smarties Book Prizes (1997–1999), two Scottish Arts Council Book Awards (1999 and 2001), the inaugural Whitbread children's book of the year award (1999), the WHSmith book of the year (2006), among others. In 2000, Harry Potter and the Prisoner of Azkaban was nominated for a Hugo Award for Best Novel, and in 2001, Harry Potter and the Goblet of Fire won said award. Honours include a commendation for the Carnegie Medal (1997), a short listing for the Guardian Children's Award (1998), and numerous listings on the notable books, editors' Choices, and best books lists of the American Library Association, The New York Times, Chicago Public Library, and Publishers Weekly.

                                <br />In 2002, sociologist Andrew Blake named Harry Potter a British pop culture icon along with the likes of James Bond and Sherlock Holmes. In 2003, four of the books were named in the top 24 of the BBC's The Big Read survey of the best loved novels in the UK. A 2004 study found that books in the series were commonly read aloud in elementary schools in San Diego County, California. Based on a 2007 online poll, the U.S. National Education Association listed the series in its "Teachers' Top 100 Books for Children". Time magazine named Rowling as a runner-up for its 2007 Person of the Year award, noting the social, moral, and political inspiration she has given her fandom. Three of the books placed among the "Top 100 Chapter Books" of all time, or children's novels, in a 2012 survey published by School Library Journal: Sorcerer's Stone ranked number three, Prisoner of Azkaban 12th, and Goblet of Fire 98th. In 2012, the opening ceremony of the 2012 Summer Olympics in London featured a 100-foot tall rendition of Lord Voldemort in a segment designed to show off the UK's cultural icons. In November 2019, the BBC listed the Harry Potter series on its list of the 100 most influential novels.</p>
                        </Panel>
                    </Collapse>
                </div>
            </section>
            <section className="wizards__wrap">
                <div className="wizards__content">
                    <h3 className="wizards__title">Do you want to get to know the best wizards in the magical world?</h3>
                    <p className="wizards__paragrapg">We have all of them!</p>
                    <NavLink to='/' className="wizards__btn">Get acquainted</NavLink>
                </div>
            </section>
            <Footer />
        </div>
    )
}