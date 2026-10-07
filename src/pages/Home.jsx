import React, { useEffect, useRef, useState } from 'react';
 
import referenceBody from '../referenceBody.html?raw';

export default function Home() {
  const rootRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const drawer = root.querySelector('#mobile-drawer');
    const backdrop = root.querySelector('#drawer-backdrop');
    const menuBtn = root.querySelector('#menu-btn');
    const closeDrawer = () => setDrawerOpen(false);
    const openDrawer = () => setDrawerOpen(true);
    menuBtn?.addEventListener('click', openDrawer);
    root.querySelectorAll('#mobile-drawer a, #mobile-drawer button').forEach(el => el.addEventListener('click', closeDrawer));
    backdrop?.addEventListener('click', closeDrawer);

    const keydown = e => { if (e.key === 'Escape') closeDrawer(); };
    document.addEventListener('keydown', keydown);

    let touchStartX = 0, touchStartY = 0;
    const ts = e => { touchStartX=e.changedTouches[0].clientX; touchStartY=e.changedTouches[0].clientY; };
    const te = e => { const dx=e.changedTouches[0].clientX-touchStartX, dy=e.changedTouches[0].clientY-touchStartY; if(dx < -45 && Math.abs(dx)>Math.abs(dy)) closeDrawer(); };
    drawer?.addEventListener('touchstart', ts, {passive:true});
    drawer?.addEventListener('touchend', te, {passive:true});

    const filterButtons = [...root.querySelectorAll('#filter-bar button')];
    const activeFilter = filterButtons[0];
    const activateFilter = button => {
      filterButtons.forEach(btn => btn.className='px-4 py-2 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant whitespace-nowrap min-h-[38px] active:scale-95 transition-all');
      button.className='px-4 py-2 rounded-full font-label-sm text-label-sm bg-primary-container text-on-primary whitespace-nowrap min-h-[38px] active:scale-95 shadow-sm transition-all';
    };
    filterButtons.forEach(btn => btn.addEventListener('click', () => activateFilter(btn)));
    if(activeFilter) activateFilter(activeFilter);

    const viewport=root.querySelector('#featured-carousel-viewport');
    const track=root.querySelector('#featured-carousel-track');
    const slides=[...root.querySelectorAll('.carousel-slide')];
    const prev=root.querySelector('#carousel-prev'), next=root.querySelector('#carousel-next');
    const play=root.querySelector('#carousel-play-pause'), icon=root.querySelector('#carousel-play-pause-icon');
    const dots=root.querySelector('#carousel-dots'), progress=root.querySelector('#carousel-progress-bar');
    let index=0, paused=false, hoverPaused=false, raf=0, start=0, elapsed=0, restartTimer=0;
    const visible=()=>window.innerWidth>=768?3:1;
    const maxIndex=()=>Math.max(0, slides.length-visible());
    const renderDots=()=>{
      if(!dots)return;
      dots.innerHTML='';
      for(let i=0;i<=maxIndex();i++){
        const d=document.createElement('button'); d.setAttribute('aria-label',`Go to Slide ${i+1}`); d.className=i===index?'carousel-dot h-2 w-6 rounded-full bg-primary-container transition-all duration-300':'carousel-dot h-2 w-2 rounded-full bg-surface-container-high hover:bg-outline-variant transition-all duration-300';
        d.addEventListener('click',()=>update(i)); dots.appendChild(d);
      }
    };
    const apply=()=>{
      if(!track)return;
      if(visible()===1) track.style.transform=`translateX(-${index*100}%)`;
      else { const a=slides[0],b=slides[1]; const off=a&&b?b.offsetLeft-a.offsetLeft:0; track.style.transform=`translateX(-${index*(off||100/visible())}${off?'px':'%'})`; }
      dots?.querySelectorAll('.carousel-dot').forEach((d,i)=>d.className=i===index?'carousel-dot h-2 w-6 rounded-full bg-primary-container transition-all duration-300':'carousel-dot h-2 w-2 rounded-full bg-surface-container-high hover:bg-outline-variant transition-all duration-300');
    };
    const progressFrame=ts=>{ if(paused||hoverPaused)return; if(!start)start=ts-elapsed; const p=Math.min(((ts-start)/4000)*100,100); if(progress)progress.style.width=`${p}%`; if(p>=100){ update(index+1); } else raf=requestAnimationFrame(progressFrame); };
    const startProgress=()=>{cancelAnimationFrame(raf); start=0;elapsed=0;raf=requestAnimationFrame(progressFrame)};
    const update=i=>{index=i>maxIndex()?0:i<0?maxIndex():i;apply();if(paused){if(progress)progress.style.width='0%';}else startProgress();};
    const pauseProgress=()=>{if(start)elapsed=performance.now()-start;cancelAnimationFrame(raf);};
    const beginInteraction=()=>{if(paused)return;hoverPaused=true;pauseProgress();clearTimeout(restartTimer)};
    const endInteraction=()=>{if(paused)return;clearTimeout(restartTimer);restartTimer=setTimeout(()=>{hoverPaused=false;startProgress()},800)};
    const toggle=()=>{paused=!paused;if(icon)icon.textContent=paused?'play_arrow':'pause'; if(paused){pauseProgress();if(progress)progress.style.width='0%'}else{hoverPaused=false;startProgress()}};
    prev?.addEventListener('click',()=>update(index-1)); next?.addEventListener('click',()=>update(index+1)); play?.addEventListener('click',toggle);
    viewport?.addEventListener('mouseenter',beginInteraction); viewport?.addEventListener('mouseleave',endInteraction);
    let cX=0,cY=0; viewport?.addEventListener('touchstart',e=>{beginInteraction();cX=e.touches[0].clientX;cY=e.touches[0].clientY},{passive:true});
    viewport?.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-cX,dy=e.changedTouches[0].clientY-cY;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){update(index+(dx<0?1:-1))}else endInteraction()},{passive:true});
    const resize=()=>{index=Math.min(index,maxIndex());renderDots();apply()}; window.addEventListener('resize',resize);
    renderDots();apply();startProgress();

    return ()=>{
      menuBtn?.removeEventListener('click',openDrawer); backdrop?.removeEventListener('click',closeDrawer); document.removeEventListener('keydown',keydown); drawer?.removeEventListener('touchstart',ts); drawer?.removeEventListener('touchend',te); window.removeEventListener('resize',resize); cancelAnimationFrame(raf); clearTimeout(restartTimer);
    };
  }, []);

  useEffect(()=>{
    const root=rootRef.current; const drawer=root?.querySelector('#mobile-drawer'); const backdrop=root?.querySelector('#drawer-backdrop');
    if(!drawer||!backdrop)return;
    drawer.classList.toggle('translate-x-0',drawerOpen); drawer.classList.toggle('-translate-x-full',!drawerOpen);
    backdrop.classList.toggle('opacity-100',drawerOpen); backdrop.classList.toggle('pointer-events-auto',drawerOpen); backdrop.classList.toggle('opacity-0',!drawerOpen); backdrop.classList.toggle('pointer-events-none',!drawerOpen);
    document.body.style.overflow=drawerOpen?'hidden':'';
    return ()=>{document.body.style.overflow=''};
  },[drawerOpen]);

  return <div ref={rootRef} className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen w-full" dangerouslySetInnerHTML={{__html: referenceBody.replace(/\s+onclick="[^"]*"/g,'')}} />;
}

 
