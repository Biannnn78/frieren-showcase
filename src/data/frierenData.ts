export type Quote = { text: string; author: 'Himmel' | 'Frieren' };
export type Spell = { id: string; name: string; category: 'Utility' | 'Combat'; description: string; note: string; icon: 'flower' | 'sparkles' | 'zap' | 'wind' };
export type Character = { name: string; role: string; party: 'Pahlawan' | 'Sekarang'; quote: string; color: string; initials: string };
export type Memory = { id: number; title: string; location: string; image: string; alt: string };
// Kutipan merupakan adaptasi kreatif untuk showcase, bukan kutipan resmi anime.
export const quotes: Quote[] = [
 {text:'Perjalanan kita mungkin singkat, tetapi kenangannya akan tinggal selamanya.',author:'Himmel'},
 {text:'Kurasa aku ingin mengenal manusia sedikit lebih baik.',author:'Frieren'},
 {text:'Hal-hal kecil itulah yang membuat sebuah perjalanan berarti.',author:'Himmel'},
 {text:'Masih ada begitu banyak sihir yang belum kutemukan.',author:'Frieren'},
];
export const spells: Spell[] = [
 {id:'flower',name:'Ladang Bunga',category:'Utility',description:'Mengubah sebidang tanah menjadi hamparan bunga. Sederhana, namun menyimpan sebuah kenangan.',note:'Mantra favorit Himmel. Dipelajari Frieren dari gurunya, Flamme.',icon:'flower'},
 {id:'bronze',name:'Kilau Perunggu',category:'Utility',description:'Membersihkan patung perunggu hingga kembali berkilau, seolah waktu tak pernah menyentuhnya.',note:'Terkadang, merawat kenangan dimulai dengan membersihkan sebuah patung.',icon:'sparkles'},
 {id:'zoltraak',name:'Zoltraak',category:'Combat',description:'Sihir serangan yang dahulu ditakuti, kini menjadi dasar bagi generasi penyihir yang baru.',note:'Dikembangkan oleh Qual dan kemudian diteliti serta diadaptasi oleh para penyihir manusia.',icon:'zap'},
 {id:'wind',name:'Angin Pencari',category:'Utility',description:'Mantra imajinatif untuk menemukan benda kecil yang hilang di sepanjang perjalanan.',note:'Mantra original untuk demo ini. Karena anting yang hilang pun layak dicari.',icon:'wind'},
];
export const characters: Character[] = [
 {name:'Himmel',role:'Sang Pahlawan',party:'Pahlawan',quote:'Agar kamu tidak sendirian di masa depan.',color:'#b3c9d5',initials:'H'},
 {name:'Heiter',role:'Sang Pendeta',party:'Pahlawan',quote:'Kebaikan kecil juga bisa mengubah hidup.',color:'#b9b5c6',initials:'H'},
 {name:'Eisen',role:'Sang Prajurit',party:'Pahlawan',quote:'Tak apa takut. Tetaplah melangkah.',color:'#be9e82',initials:'E'},
 {name:'Fern',role:'Penyihir Muda',party:'Sekarang',quote:'Aku akan menjaga perjalanan kita.',color:'#ad9fbd',initials:'F'},
 {name:'Stark',role:'Prajurit Muda',party:'Sekarang',quote:'Kali ini, aku tidak akan lari.',color:'#c2917c',initials:'S'},
];
// Foto lanskap adalah placeholder suasana, bukan cuplikan resmi anime.
export const memories: Memory[] = [
 {id:1,title:'Di antara bunga dan waktu',location:'PADANG BUNGA • MUSIM SEMI',image:'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1000&q=85',alt:'Padang bunga berwarna ungu di bawah cahaya matahari'},
 {id:2,title:'Jalan menuju utara',location:'PEGUNUNGAN UTARA',image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',alt:'Puncak gunung menjulang ke langit'},
 {id:3,title:'Hening yang terasa seperti rumah',location:'HUTAN • SENJA',image:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85',alt:'Sinar matahari menembus hutan hijau'},
 {id:4,title:'Langit yang sama, sekali lagi',location:'SEBUAH MALAM DALAM PERJALANAN',image:'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1000&q=85',alt:'Bintang-bintang berpendar di langit malam'},
];
