/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-fixed':'#ffdbcf','secondary-container':'#fe6428','primary-container':'#ff6b2c','primary-fixed-dim':'#ffb59a','surface-variant':'#e5e2e1','surface-container-highest':'#e5e2e1','on-tertiary':'#ffffff','on-surface':'#1c1b1b','on-error':'#ffffff','error':'#ba1a1a','outline-variant':'#e2bfb3','surface-container-low':'#f6f3f2','on-tertiary-container':'#38302b','on-primary-container':'#5c1c00','inverse-on-surface':'#f3f0ef','outline':'#8d7167','on-tertiary-fixed':'#211a16','on-secondary-fixed':'#390c00','surface-dim':'#dcd9d9','secondary':'#ab3600','surface-tint':'#a83900','on-secondary-fixed-variant':'#822700','on-secondary-container':'#591800','surface-container-lowest':'#ffffff','secondary-fixed':'#ffdbcf','on-surface-variant':'#594139','inverse-surface':'#313030','on-secondary':'#ffffff','secondary-fixed-dim':'#ffb59c','on-tertiary-fixed-variant':'#4e453f','surface':'#fcf9f8','tertiary-fixed-dim':'#d2c4bc','surface-bright':'#fcf9f8','tertiary':'#665c56','on-background':'#1c1b1b','on-primary-fixed-variant':'#802900','background':'#fcf9f8','surface-container-high':'#eae7e7','on-error-container':'#93000a','on-primary':'#ffffff','tertiary-container':'#a39790','error-container':'#ffdad6','surface-container':'#f0eded','inverse-primary':'#ffb59a','tertiary-fixed':'#eee0d8','on-primary-fixed':'#380d00','primary':'#a83900'
      },
      borderRadius:{DEFAULT:'0.25rem',lg:'0.5rem',xl:'0.75rem',full:'9999px'},
      spacing:{'gutter-md':'1.5rem','margin-lg':'3rem','margin':'1rem','gutter-lg':'2rem','gutter':'1rem','space-md':'1rem','space-sm':'0.5rem','space-xs':'0.25rem','space-xl':'2rem','space-lg':'1.5rem','margin-md':'2rem'},
      fontFamily:{'display-lg-mobile':['Plus Jakarta Sans'],'headline-sm':['Plus Jakarta Sans'],'headline-lg-mobile':['Plus Jakarta Sans'],'headline-md':['Plus Jakarta Sans'],'label-md':['JetBrains Mono'],'body-sm':['Inter'],'display-lg':['Plus Jakarta Sans'],'label-sm':['JetBrains Mono'],'headline-lg':['Plus Jakarta Sans'],'label-lg':['JetBrains Mono'],'body-lg':['Inter'],'body-md':['Inter']},
      fontSize:{'display-lg-mobile':['36px',{lineHeight:'44px',letterSpacing:'-0.025em',fontWeight:'800'}],'headline-sm':['20px',{lineHeight:'28px',letterSpacing:'-0.01em',fontWeight:'600'}],'headline-lg-mobile':['28px',{lineHeight:'36px',letterSpacing:'-0.015em',fontWeight:'700'}],'headline-md':['24px',{lineHeight:'32px',letterSpacing:'-0.015em',fontWeight:'600'}],'label-md':['12px',{lineHeight:'16px',letterSpacing:'0.03em',fontWeight:'500'}],'body-sm':['13px',{lineHeight:'20px',letterSpacing:'0em',fontWeight:'400'}],'display-lg':['56px',{lineHeight:'64px',letterSpacing:'-0.03em',fontWeight:'800'}],'label-sm':['11px',{lineHeight:'14px',letterSpacing:'0.04em',fontWeight:'500'}],'headline-lg':['36px',{lineHeight:'44px',letterSpacing:'-0.02em',fontWeight:'700'}],'label-lg':['14px',{lineHeight:'20px',letterSpacing:'0.02em',fontWeight:'600'}],'body-lg':['18px',{lineHeight:'28px',letterSpacing:'-0.005em',fontWeight:'400'}],'body-md':['15px',{lineHeight:'24px',letterSpacing:'0em',fontWeight:'400'}]}
    }
  },
  plugins: []
}
