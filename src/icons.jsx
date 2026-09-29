import React from 'react'

const P = ({d}) => <path d={d} />
export function Icon({name, size=20, className=''}) {
  const common = {width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round',className,'aria-hidden':'true'}
  const icons = {
    arrow: <><P d="M5 12h14"/><P d="m13 6 6 6-6 6"/></>,
    down: <><P d="M12 5v14"/><P d="m6 13 6 6 6-6"/></>,
    external: <><P d="M14 5h5v5"/><P d="M10 14 19 5"/><P d="M19 13v6H5V5h6"/></>,
    download: <><P d="M12 3v12"/><P d="m7 10 5 5 5-5"/><P d="M5 21h14"/></>,
    github: <><P d="M9 19c-4 1.5-4-2.5-5-3"/><P d="M15 22v-3.5c0-1 .1-1.4-.5-2 3.5-.4 7-1.7 7-7.5A5.8 5.8 0 0 0 20 5c.2-.8.2-2.2-.3-3 0 0-1.2-.4-3.8 1.5a13 13 0 0 0-7 0C6.3 1.6 5 2 5 2c-.5.8-.5 2.2-.2 3A5.8 5.8 0 0 0 3 9c0 5.8 3.5 7.1 7 7.5-.5.5-.6 1.1-.6 2V22"/></>,
    linkedin: <><P d="M6 9v10"/><P d="M6 5v.01"/><P d="M10 19V9"/><P d="M10 13c1-5 8-5 8 1v5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><P d="m3 7 9 6 9-6"/></>,
    menu: <><P d="M4 7h16"/><P d="M4 12h16"/><P d="M4 17h16"/></>,
    close: <><P d="m6 6 12 12"/><P d="m18 6-12 12"/></>,
    moon: <P d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>,
    sun: <><circle cx="12" cy="12" r="4"/><P d="M12 2v2"/><P d="M12 20v2"/><P d="m4.93 4.93 1.41 1.41"/><P d="m17.66 17.66 1.41 1.41"/><P d="M2 12h2"/><P d="M20 12h2"/><P d="m6.34 17.66-1.41 1.41"/><P d="m19.07 4.93-1.41 1.41"/></>,
    code: <><P d="m8 9-4 3 4 3"/><P d="m16 9 4 3-4 3"/><P d="m14 5-4 14"/></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><P d="M7 7h.01"/><P d="M7 17h.01"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><P d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><P d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2"/><P d="M11 18h2"/></>,
    api: <><circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><P d="m7 11 10-4"/><P d="m7 13 10 4"/></>,
    tools: <><P d="M14.7 6.3a4 4 0 0 0-5-5l2.2 2.2-2.8 2.8-2.2-2.2a4 4 0 0 0 5 5L20 17.2a2 2 0 0 1-2.8 2.8l-8.1-8.1a4 4 0 0 0-5-5"/></>,
    certificate: <><rect x="4" y="3" width="16" height="14" rx="2"/><P d="M8 7h8"/><P d="M8 11h5"/><P d="m9 17-1 5 4-2 4 2-1-5"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><P d="M8 7V4h8v3"/><P d="M3 12h18"/></>,
    graduation: <><P d="m2 10 10-5 10 5-10 5Z"/><P d="M6 12v5c3 2 9 2 12 0v-5"/></>,
    location: <><P d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    check: <P d="m5 12 4 4L19 6"/>,
    spark: <><P d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3Z"/><P d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/></>,
    copy: <><rect x="9" y="9" width="10" height="10" rx="2"/><P d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>
  }
  return <svg {...common}>{icons[name] || icons.code}</svg>
}
