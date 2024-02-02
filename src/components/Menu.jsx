import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Menu ({isOpenMenu, setIsOpenMenu}) {
   const [isOpenFeatures, setIsOpenFeatures] = useState(false)
   const [isOpenCompany, setIsOpenCompany] = useState(false)

   return (
      <>
      <motion.div
         className="background-menu"
         initial={{opacity: 0}}
         exit={{opacity: 0}}
         animate={{opacity: 1}}></motion.div>

      <motion.nav
         className={'menu'}
         initial={{x: 300}}
         exit={{x: 300}}
         animate={{x: 0}}>

         <motion.img
            onClick={() => setIsOpenMenu(v => !v)}
            src={'/public/images/icon-close-menu.svg'}
            alt="close"
            initial={{rotate: 0, opacity: 1}}
            exit={{rotate: -280, opacity: 0}}
            animate={isOpenMenu}
            transition={{duration: .5}}
            className={'close-menu'}/>

         <nav>
            <p onClick={() => setIsOpenFeatures(v => !v)}>Features {isOpenFeatures ? <img src="/public/images/icon-arrow-up.svg" alt="up" /> :
               <img src="/public/images/icon-arrow-down.svg" alt="down"/>}</p>
            {isOpenFeatures &&
            <ul>
               <li>
                  <img src="/public/images/icon-todo.svg" alt="todo"/> Todo List
               </li>
               <li>
                  <img src="/public/images/icon-calendar.svg" alt="calendar"/> Calendar
               </li>
               <li>
                  <img src="/public/images/icon-reminders.svg" alt="reminders"/> Reminders
               </li>
               <li>
                  <img src="/public/images/icon-planning.svg" alt="planning"/> Planning
               </li>
            </ul>}

            <p onClick={() => setIsOpenCompany(v => !v)}>Company {isOpenCompany ? <img src="/public/images/icon-arrow-up.svg" alt="up" /> :
               <img src="/public/images/icon-arrow-down.svg" alt="down"/>}</p>
            {isOpenCompany &&
               <ul>
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
               </ul>}

            <p>Careers</p>
            <p>About</p>

            <p className={"login"}>Login</p>
            <p className={"register"}>Register</p>
         </nav>
      </motion.nav>
   </>
   )
}
