import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import loc from './../img/loc.png'
import mail from './../img/mail.png'
import telegram from './../img/telegram.png'
import watsapp from './../img/watsapp.png'
import ww from './../img/ww.png'
import lumos from './../img/lumos.png'
import fb from './../img/fb.png'
import dh from './../img/dh.png'
import logo from './../img/logo.png'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__top-left'>
                    <div className='footer__address'>
                        <a href='https://goo.gl/maps/XMrLmwMjwLAKFAjg9' target='_blank' className='footer__address-link'><img src={loc} alt='location' /> Hogwarts Castle, Alnwick, UK</a>
                    </div>
                    <div className='footer__contacts'>
                        <div className='footer__number'>
                            <p className='footer__number-par'>Do you want to contact us?</p>
                            <a className='footer__number-link' href='tel:+74957873422'>+7 495-787-34-22</a>
                        </div>
                        <div className='footer__media'>
                            <p className='footer__number-par'>Write us:</p>
                            <div className='footer__media-wrap'>
                                <NavLink to='/home'><img src={mail} alt='mail' /></NavLink>
                                <NavLink to='/home'><img src={telegram} alt='telegram' /></NavLink>
                                <NavLink to='/home'><img src={watsapp} alt='watsapp' /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__top-right'>
                    <div className='footer__links'>
                        <p className='footer__links-title'>Our friends:</p>
                        <div className='footer__links-wrap'>
                            <NavLink to='/home'><img className='footer__soc' src={ww} alt='ww' /></NavLink>
                            <NavLink to='/home'><img className='footer__soc' src={lumos} alt='lumos' /></NavLink>
                            <NavLink to='/home'><img className='footer__soc' src={fb} alt='fb' /></NavLink>
                            <NavLink to='/home'><img className='footer__soc' src={dh} alt='dh' /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__bot'>
                <div className='footer__bot-left'>
                    <div className='footer__bot-right-top'>
                        <NavLink to='/home' className='footer__logo-link'><img src={logo} alt='logo' className='footer__logo' />HP wiki</NavLink>
                        <p className='footer__bot-desc'>We find you all about HP universe.</p>
                        <p className='footer__bot-desc'>Easy. Fast. Magically.</p>
                    </div>
                    <div className='footer__bot-right-bot'>
                        <p className='footer__copyright'>&copy; 2001 - 2022 Ltd. 'HP Wiki'</p>
                        <p className='footer__rights'>All rights reserved.</p>
                    </div>
                </div>
                <div className='footer__bot-right'>
                    <ul className='footer__nav-list'>
                        <p className='footer__nav-title'>Explore</p>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Main page</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>All characters</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Houses</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Sorting Hat</NavLink></li>
                    </ul>
                    <ul className='footer__nav-list'>
                        <p className='footer__nav-title'>Community</p>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Forums</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Policies</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Administrators</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Help</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Recent changes</NavLink></li>
                    </ul>
                    <ul className='footer__nav-list'>
                        <p className='footer__nav-title'>Books</p>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>The Seven Novels</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Rowling's books</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/home' className='footer__nav-link'>Additional issues</NavLink></li>
                        <li className='footer__nav-item'><NavLink to='/characters' className='footer__nav-link'>Characters</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}