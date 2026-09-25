import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
import { quotes } from '../data/frierenData';
export default function Hero() {
 const [quote, setQuote] = useState(() => Math.floor(Math.random()*quotes.length));
 const next = () => setQuote(q => (q+1)%quotes.length);
 useEffect(() => { const timer = window.setInterval(() => setQuote(q => (q+1)%quotes.length), 9000); return () => clearInterval(timer); }, []);
 return <section id="home" className="hero"><div className="hero-landscape"/><div className="hero-wash"/><div className="hero-content page-width"><div className="eyebrow"><span/> SEBUAH PERJALANAN MELAMPAUI WAKTU</div><h1>Akhir sebuah kisah.<br/><em>Awal sebuah</em><br/><em>perjalanan.</em></h1><p>Waktu terus berjalan. Kenangan tetap tinggal.<br/>Ikuti Frieren memahami arti kehidupan, persahabatan,<br className="desktop-break"/> dan hal-hal kecil yang membuatnya berharga.</p><a className="button primary" href="#lore">Mulai perjalanan <ArrowRight size={16}/></a><div className="hero-caption"><Sparkles size={14}/><span>葬送のフリーレン <i/> BEYOND JOURNEY’S END</span></div></div><div className="hero-note"><span>01 / THE JOURNEY BEGINS</span><p>“Sepuluh tahun…<br/>hanya sekejap bagiku.”</p><small>— FRIEREN</small></div><div className="quote-strip page-width"><span className="quote-mark">“</span><div><p key={quote}>{quotes[quote].text}</p><small>— {quotes[quote].author} <span>· adaptasi</span></small></div><button className="icon-button" aria-label="Tampilkan kutipan berikutnya" onClick={next}><RefreshCw size={17}/></button><a href="#lore" className="discover">SCROLL TO DISCOVER <ArrowDown size={15}/></a></div></section>;
}
