import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import { Menu } from "./Menu.jsx";

export function Header () {
   const [isOpenMenu, setIsOpenMenu] = useState(false)
   const [isOpenFeatures, setIsOpenFeatures] = useState(false)
   const [isOpenCompany, setIsOpenCompany] = useState(false)

   const handleFeatures = (e) => {
      e.preventDefault()
      setIsOpenFeatures(v => !v)
   }
   const handleCompany = (e) => {
      e.preventDefault()
      setIsOpenCompany(v => !v)
   }
   return (
      <header className={'header'}>
         <nav className={'navlinks'}>
            <a className={'logo'} href="#">
               <img src="/public/images/logo.svg" alt="logo" />
            </a>
            <a href="#" onClick={handleFeatures} className="navlink">
               Features &nbsp;
               {isOpenFeatures ? <>
                  <img src="/public/images/icon-arrow-up.svg" alt="up" />
                  <div className={'modal-features'}>
                     <p><img src="/public/images/icon-todo.svg" alt="todolist" /> Todo List</p>
                     <p><img src="/public/images/icon-calendar.svg" alt="calendar" /> Calendar</p>
                     <p><img src="/public/images/icon-reminders.svg" alt="reminders" /> Reminders</p>
                     <p><img src="/public/images/icon-planning.svg" alt="planning" /> Planning</p>
                  </div>
               </> : <img src="/public/images/icon-arrow-down.svg" alt="down"/>}
            </a>

            <a href="#" onClick={handleCompany} className="navlink">
               Company &nbsp;
               {isOpenCompany ? <>
                  <img src="/public/images/icon-arrow-up.svg" alt="up" />
                  <div className={'modal-company'}>
                     <p>History</p>
                     <p>Our Team</p>
                     <p>Blog</p>
                  </div>
               </> : <img src="/public/images/icon-arrow-down.svg" alt="down"/>}
            </a>

            <a href="#" className="navlink">
               Careers
            </a>
            <a href="#" className="navlink">
               About
            </a>
         </nav>

         <nav className={'auth'}>
            <a href="#">Login</a>
            <a href="#">Register</a>
         </nav>

         <div className="burger">
            <AnimatePresence mode={'popLayout'}>
               {!isOpenMenu &&
                  <motion.img
                     onClick={() => setIsOpenMenu(v => !v)}
                     src="/public/images/icon-menu.svg"
                     alt="burger"
                     initial={{rotate: 0, opacity: 1}}
                     exit={{rotate: -280, opacity: 0}}
                     animate={isOpenMenu}
                     transition={{duration: .5}} />}
            </AnimatePresence>

            <AnimatePresence>
               {isOpenMenu && <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />}
            </AnimatePresence>
         </div>
      </header>
   )
}