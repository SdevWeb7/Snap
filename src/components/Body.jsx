
export function Body () {

   return (
      <main className={'main'}>
         <img className={'hero-small'} src="/public/images/image-hero-desktop.png" alt="hero" />
         <article>
            <h1 className={'title1'}>Make</h1>
            <h1 className={'title'}>remote work</h1>

            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

            <button className="learn-more">
               Learn more
            </button>

            <nav className={'partners'}>
               <img src="/public/images/client-databiz.svg" alt="databiz" />
               <img src="/public/images/client-audiophile.svg" alt="audiophile" />
               <img src="/public/images/client-meet.svg" alt="meet" />
               <img src="/public/images/client-maker.svg" alt="maker" />
            </nav>
         </article>


         <img className={'hero'} src="/public/images/image-hero-desktop.png" alt="hero" />
      </main>
   )
}