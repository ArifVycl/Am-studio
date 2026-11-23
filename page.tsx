import Link from "next/link";
import { ArrowRight, Cloud, ShieldCheck, Images, HardDrive, Clock3, LockKeyhole, PlayCircle, Check } from "lucide-react";

const plans = [
  { name:"Basic", storage:"10 GB", price:"Rp49.000", note:"Untuk dokumentasi pilihan" },
  { name:"Silver", storage:"50 GB", price:"Rp99.000", note:"Untuk album foto & video ringkas", featured:true },
  { name:"Gold", storage:"100 GB", price:"Rp179.000", note:"Untuk dokumentasi lebih lengkap" },
  { name:"Platinum", storage:"250 GB", price:"Rp349.000", note:"Untuk file dokumentasi berukuran besar" },
];

export default function Home() {
  return <main>
    <header style={{background:"#fff",borderBottom:"1px solid #e9edf2"}}>
      <div className="container" style={{height:76,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Link href="/" style={{display:"flex",alignItems:"center",gap:11,fontWeight:800,color:"#14243a"}}>
          <span style={{width:40,height:40,borderRadius:13,background:"#14243a",display:"grid",placeItems:"center",color:"white"}}><Cloud size={23}/></span>
          <span style={{fontFamily:"Manrope",letterSpacing:"-.04em"}}>AM STUDIO <span style={{color:"#8a9bb0"}}>DRIVE</span></span>
        </Link>
        <nav style={{display:"flex",gap:26,alignItems:"center",fontSize:13,fontWeight:600,color:"#65748a"}} className="desktop-nav">
          <a href="#fitur">Fitur</a><a href="#paket">Paket</a><a href="#cara-kerja">Cara Kerja</a>
          <Link className="btn btn-primary" href="/gallery">Akses Galeri <ArrowRight size={16}/></Link>
        </nav>
      </div>
    </header>

    <section style={{background:"linear-gradient(120deg,#122239 0%,#1c3451 62%,#294563 100%)",color:"white",padding:"88px 0 92px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-5%",top:"-30%",width:560,height:560,border:"1px solid #ffffff18",borderRadius:"50%"}}/>
      <div style={{position:"absolute",right:"3%",top:"-15%",width:410,height:410,border:"1px solid #ffffff18",borderRadius:"50%"}}/>
      <div className="container" style={{display:"grid",gridTemplateColumns:"1.2fr .8fr",gap:50,alignItems:"center",position:"relative"}}>
        <div>
          <div className="eyebrow" style={{color:"#a9bbd0",marginBottom:20}}>PRIVATE DIGITAL GALLERY</div>
          <h1 style={{fontSize:"clamp(42px,6vw,68px)",lineHeight:1.08,margin:"0 0 22px",maxWidth:680}}>Your memories,<br/><span style={{color:"#b9cbe0"}}>always accessible.</span></h1>
          <p style={{fontSize:17,lineHeight:1.8,color:"#d1dbe7",maxWidth:540,margin:"0 0 30px"}}>Satu tempat pribadi untuk menyimpan, melihat, dan mengunduh foto serta video dokumentasi berharga Anda.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <Link className="btn" style={{background:"white",color:"#14243a"}} href="/gallery">Buka Galeri Saya <ArrowRight size={17}/></Link>
            <a className="btn" style={{borderColor:"#ffffff55",color:"white"}} href="#paket">Lihat Paket</a>
          </div>
          <div style={{display:"flex",gap:22,marginTop:38,flexWrap:"wrap",color:"#d4deea",fontSize:12}}>
            <span style={{display:"flex",alignItems:"center",gap:7}}><ShieldCheck size={16}/> Galeri privat</span>
            <span style={{display:"flex",alignItems:"center",gap:7}}><LockKeyhole size={16}/> Akses PIN</span>
            <span style={{display:"flex",alignItems:"center",gap:7}}><HardDrive size={16}/> Kuota personal</span>
          </div>
        </div>
        <div className="card" style={{padding:22,color:"#14243a",transform:"rotate(1deg)",maxWidth:410,width:"100%",justifySelf:"end"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
            <div><div style={{fontSize:11,color:"#8491a3",fontWeight:700}}>CLIENT GALLERY</div><div style={{fontWeight:800,fontFamily:"Manrope",fontSize:18}}>Wedding Gallery</div></div>
            <span style={{background:"#eaf5ef",color:"#26734b",borderRadius:20,padding:"6px 10px",fontSize:10,fontWeight:800}}>PRIVATE</span>
          </div>
          <div style={{height:150,borderRadius:14,background:"linear-gradient(135deg,#dce4eb,#9aabbc)",display:"grid",placeItems:"center",color:"#fff",marginBottom:15}}><Images size={44}/></div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:9}}><b>Storage used</b><span style={{color:"#748196"}}>36.5 GB / 50 GB</span></div>
          <div style={{height:7,background:"#edf0f4",borderRadius:10,overflow:"hidden"}}><div style={{height:"100%",width:"73%",background:"#2c7654",borderRadius:10}}/></div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:19,fontSize:11,color:"#78869a"}}><span>Plan: Silver</span><span>Access protected</span></div>
        </div>
      </div>
    </section>

    <section id="fitur" className="container" style={{padding:"78px 0"}}>
      <div style={{textAlign:"center",maxWidth:620,margin:"0 auto 38px"}}><div className="eyebrow">WHY AM STUDIO DRIVE</div><h2 style={{fontSize:36,margin:"12px 0"}}>Semua kenangan dalam satu tempat.</h2><p style={{color:"#738197",lineHeight:1.7}}>Akses dokumentasi Anda dengan mudah melalui ponsel, tablet, maupun komputer.</p></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
        {[
          [LockKeyhole,"Akses PIN pribadi","Setiap galeri memiliki akses khusus untuk klien."],
          [Images,"Foto & video","Lihat dokumentasi dalam satu galeri digital."],
          [HardDrive,"Kuota personal","Kapasitas penyimpanan disesuaikan dengan paket."],
          [Clock3,"Masa aktif jelas","Pantau masa aktif dan perpanjang langganan."],
        ].map(([Icon,title,desc]:any)=><div className="card" key={title} style={{padding:24}}><div style={{width:44,height:44,borderRadius:13,background:"#eef2f7",color:"#203650",display:"grid",placeItems:"center"}}><Icon size={21}/></div><h3 style={{fontSize:17,margin:"18px 0 8px"}}>{title}</h3><p style={{fontSize:13,color:"#7a8799",lineHeight:1.7,margin:0}}>{desc}</p></div>)}
      </div>
    </section>

    <section id="cara-kerja" style={{background:"#eef2f7",padding:"72px 0"}}>
      <div className="container"><div style={{textAlign:"center",marginBottom:35}}><div className="eyebrow">HOW IT WORKS</div><h2 style={{fontSize:34,margin:"10px 0"}}>Akses galeri dalam 3 langkah.</h2></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:20}}>
          {[[1,"Terima link galeri","Admin membagikan link dan PIN khusus setelah dokumentasi siap."],[2,"Masukkan PIN","Buka galeri pribadi dengan kode akses yang diberikan."],[3,"Lihat & unduh","Nikmati foto dan video selama masa aktif berlangganan."]].map(([n,t,d]:any)=><div key={n} style={{background:"white",padding:25,borderRadius:18}}><div style={{fontSize:12,fontWeight:800,color:"#8292a8"}}>STEP 0{n}</div><h3 style={{fontSize:18,margin:"12px 0 8px"}}>{t}</h3><p style={{fontSize:13,lineHeight:1.7,color:"#7a8799",margin:0}}>{d}</p></div>)}
        </div>
      </div>
    </section>

    <section id="paket" className="container" style={{padding:"78px 0"}}>
      <div style={{textAlign:"center",marginBottom:38}}><div className="eyebrow">STORAGE PLANS</div><h2 style={{fontSize:36,margin:"10px 0"}}>Pilih ruang untuk kenangan Anda.</h2><p style={{color:"#738197"}}>Contoh paket penyimpanan, berlaku selama 3 bulan.</p></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
        {plans.map(p=><div key={p.name} className="card" style={{padding:23,border:p.featured?"2px solid #203650":"1px solid #e7ebf0",position:"relative"}}>
          {p.featured&&<div style={{position:"absolute",right:15,top:15,fontSize:9,fontWeight:800,color:"#fff",background:"#203650",padding:"5px 8px",borderRadius:20}}>POPULAR</div>}
          <div style={{fontWeight:800,color:"#8292a8",fontSize:12}}>{p.name.toUpperCase()}</div><div style={{fontFamily:"Manrope",fontSize:32,fontWeight:800,margin:"13px 0 3px"}}>{p.storage}</div><div style={{fontSize:12,color:"#8491a3"}}>Kapasitas penyimpanan</div>
          <div style={{fontSize:24,fontWeight:800,marginTop:23}}>{p.price}</div><div style={{fontSize:11,color:"#8491a3"}}>/ 3 bulan</div>
          <p style={{fontSize:12,color:"#78869a",minHeight:35}}>{p.note}</p>
          <div style={{borderTop:"1px solid #edf0f4",paddingTop:15,fontSize:12,color:"#536176",display:"grid",gap:9}}><span><Check size={14} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/>Galeri pribadi</span><span><Check size={14} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/>Akses foto & video</span><span><Check size={14} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/>Download selama aktif</span></div>
        </div>)}
      </div>
      <p style={{fontSize:11,color:"#8a96a6",textAlign:"center",marginTop:20}}>Harga di atas merupakan contoh awal dan dapat diubah oleh admin sebelum layanan diluncurkan.</p>
    </section>

    <section style={{padding:"0 0 78px"}}><div className="container"><div style={{background:"#172a43",borderRadius:24,padding:"38px 30px",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",gap:20,flexWrap:"wrap"}}><div><div className="eyebrow" style={{color:"#aabbd0"}}>YOUR PRIVATE GALLERY</div><h2 style={{fontSize:28,margin:"10px 0"}}>Kenangan Anda, selalu dekat.</h2><p style={{color:"#c2cfde",margin:0,fontSize:13}}>Masuk menggunakan kode galeri dari admin.</p></div><Link href="/gallery" className="btn" style={{background:"white",color:"#172a43"}}>Akses Galeri <ArrowRight size={16}/></Link></div></div></section>
    <footer style={{borderTop:"1px solid #e6eaf0",padding:"25px 0",background:"#fff"}}><div className="container" style={{display:"flex",justifyContent:"space-between",gap:15,flexWrap:"wrap",fontSize:11,color:"#8491a3"}}><b style={{color:"#203650"}}>AM STUDIO DRIVE</b><span>Private Digital Gallery · © {new Date().getFullYear()} AM Studio Drive</span></div></footer>
  </main>;
}
