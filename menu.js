/* ==== ÇIRAĞAN SARAYI — MENÜ VERİSİ ====
   Görsel önceliği: urunler/<id>.jpg → temsilci görsel → emoji */
const POSET=1;
const WA='905550160001';               // WhatsApp sipariş hattı: 0555 016 00 01
const CODES={ILKSIPARIS:10, AKKAPI5:5}; // kupon kodları: %10, %5
const TODAY=[5,4,22];                  // "fırından yeni çıktı" rafı (ürün id'leri) — sabah güncelle
const BR={
 y:{n:'Yeşiloba TOKİ',a:'Yeşiloba TOKİ, Seyhan/Adana',t:'0322 428 21 01'},
 k:{n:'Akkapı',a:'Akkapı Mah. Şıh Cemil Cad. No:124/A, Seyhan/Adana',t:'0555 016 00 01'}};
const CATS=[
 {l:'Kahvaltılık Fırın',m:'#C98A3D',s:'#FAEEDC',e:'🥐'},
 {l:'Sütlü Tatlılar',m:'#D9A441',s:'#FBF3E2',e:'🍮'},
 {l:'Pastalar',m:'#C42B4E',s:'#FBE3E8',e:'🍰'},
 {l:'İçecekler',m:'#6FA287',s:'#EAF3EE',e:'🥤'},
 {l:'Kiloluk Börekler',m:'#A69076',s:'#F2ECE4',e:'🥧'},
 {l:'Kiloluk Tatlılar',m:'#5A3E2B',s:'#F3E9DF',e:'🍯'},
 {l:'Kiloluk Kuru Pastalar',m:'#9C6B3F',s:'#F5EADB',e:'🍪'}];
const G='https://image.qwenlm.ai/public_source/3173e33e-5673-4f5f-96fe-7cbe99c8c650/';
const P=[
 {id:1,n:'Sade Poğaça',d:'adet olarak servis edilir',p:40,e:'🥐',f:0,img:G+'0b801c865-bf18-49ee-938d-5d5e6349d9998625.png'},
 {id:2,n:'Peynirli Poğaça',d:'adet olarak servis edilir',p:50,e:'🧀',f:0,img:G+'1b801c865-bf18-49ee-938d-5d5e6349d9995352.png'},
 {id:3,n:'Simit',d:'adet olarak servis edilir',p:23,e:'🥯',f:0,img:G+'0b801c865-bf18-49ee-938d-5d5e6349d9998143.png'},
 {id:4,n:'Sade Açma',d:'adet olarak servis edilir',p:40,e:'🥨',f:0,img:G+'5b801c865-bf18-49ee-938d-5d5e6349d9999787.png'},
 {id:5,n:'Fırın Sütlaç',d:'adet olarak servis edilir',p:130,e:'🍮',f:1,chef:1,img:G+'4b801c865-bf18-49ee-938d-5d5e6349d9996863.png'},
 {id:6,n:'Kazandibi',d:'adet olarak servis edilir',p:140,e:'🍮',f:1,img:G+'0b801c865-bf18-49ee-938d-5d5e6349d9993568.png'},
 {id:7,n:'Çikolatalı Puding',d:'tek kişilik',p:140,e:'🍫',f:1,img:''},
 {id:8,n:'Çikolatalı Profiterol',d:'tek kişilik',p:160,e:'🧁',f:1,img:G+'3b801c865-bf18-49ee-938d-5d5e6349d9994255.png'},
 {id:9,n:'Sütlaç',d:'tek kişilik',p:90,e:'🍚',f:1,img:G+'2b801c865-bf18-49ee-938d-5d5e6349d9996327.png'},
 {id:10,n:'Tiramisu (Dilim)',d:'dilim olarak servis edilir',p:250,e:'🍰',f:1,img:G+'4b801c865-bf18-49ee-938d-5d5e6349d9996148.png'},
 {id:11,n:'Meyveli Pasta (6 Kişilik)',d:'muz, çilek, kivi',p:800,e:'🍰',f:2,img:G+'3b801c865-bf18-49ee-938d-5d5e6349d9998193.png'},
 {id:12,n:'Çikolatalı Pasta (6 Kişilik)',d:'6 kişilik olarak servis edilir',p:800,e:'🍫',f:2,img:G+'0b801c865-bf18-49ee-938d-5d5e6349d9991299.png'},
 {id:13,n:'Meyveli Pasta (8 Kişilik)',d:'8 kişilik olarak servis edilir',p:950,e:'🍰',f:2,img:G+'5b801c865-bf18-49ee-938d-5d5e6349d9995396.png'},
 {id:14,n:'Çikolatalı Pasta (8 Kişilik)',d:'8 kişilik olarak servis edilir',p:950,e:'🍫',f:2,img:G+'0b801c865-bf18-49ee-938d-5d5e6349d9991299.png'},
 {id:15,n:'Meyveli Pasta (10 Kişilik)',d:'10 kişilik olarak servis edilir',p:1050,e:'🎂',f:2,img:G+'2b801c865-bf18-49ee-938d-5d5e6349d9993788.png'},
 {id:16,n:'Sarıyer Kola (33 cl.)',d:'kutu içecek',p:70,e:'🥤',f:3,img:''},
 {id:17,n:'Su (50 cl.)',d:'pet şişe',p:25,e:'💧',f:3,img:''},
 {id:18,n:'Sütaş Ayran (17.5 cl.)',d:'küçük boy',p:40,e:'🥛',f:3,img:''},
 {id:19,n:'Beypazarı Soda (20 cl.)',d:'şişe içecek',p:40,e:'🫧',f:3,img:''},
 {id:20,n:'Peynirli Su Böreği (500 gr.)',d:'500 gr. olarak servis edilir',p:350,e:'🥧',f:4,chef:1,img:G+'2b801c865-bf18-49ee-938d-5d5e6349d9993648.png'},
 {id:21,n:'Cevizli Baklava (500 gr.)',d:'ceviz, şerbet',p:400,e:'🌰',f:5,img:G+'6b801c865-bf18-49ee-938d-5d5e6349d9993969.png'},
 {id:22,n:'Fıstıklı Baklava (500 gr.)',d:'fıstık, şerbet',p:600,e:'🍯',f:5,chef:1,img:G+'0b801c865-bf18-49ee-938d-5d5e6349d9999011.png'},
 {id:23,n:'Bülbülyuvası (500 gr.)',d:'fıstık, şerbet',p:400,e:'🍯',f:5,img:G+'1b801c865-bf18-49ee-938d-5d5e6349d9994795.png'},
 {id:24,n:'Karışık Kuru Pasta (1 kg.)',d:'günün kuru pasta çeşitleri',p:750,e:'🍪',f:6,img:G+'2b801c865-bf18-49ee-938d-5d5e6349d9998020.png'}];