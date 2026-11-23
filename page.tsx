import Link from "next/link";
import { ArrowLeft, Users, HardDrive, Images, CreditCard, Plus, MoreHorizontal } from "lucide-react";

const clients = [
  {name:"Wedding Andi & Sinta",code:"AMS-2026-001",plan:"Silver",used:"36.5 GB",quota:"50 GB",status:"Aktif",expiry:"01 Feb 2027"},
  {name:"Prewedding Raka & Nia",code:"AMS-2026-002",plan:"Gold",used:"72 GB",quota:"100 GB",status:"Aktif",expiry:"15 Feb 2027"},
  {name:"Wedding Fajar & Putri",code:"AMS-2026-003",plan:"Basic",used:"8.2 GB",quota:"10 GB",status:"Segera habis",expiry:"28 Nov 2026"},
];

export default function AdminPage() {
  return <main style={{minHeight:"100vh",background:"#f5f7fa"}}>
    <aside style={{position:"fixed",inset:"0 auto 0 0",width:240,background:"#14243a",color:"white",padding:24,display:"flex",flexDirection:"column",gap:28}}>
      <Link href="/" style={{display:"flex",alignItems:"center",gap:10,fontWeight:800,fontFamily:"Manrope"}}><span style={{background:"#fff",color:"#14243a",borderRadius:10,padding:9}}><HardDrive size={19}/></span> AM STUDIO DRIVE</Link>
      <div style={{fontSize:9,color:"#8fa2b9",letterSpacing:".15em",fontWeight:800}}>MENU UTAMA</div>
      <div style={{display:"grid",gap:8,fontSize:13}}>
        <div style={navActive}>▦ &nbsp; Dashboard</div><div style={navItem}>♙ &nbsp; Data Klien</div><div style={navItem}>▤ &nbsp; Galeri</div><div style={navItem}>▣ &nbsp; Langganan</div><div style={navItem}>⚙ &nbsp; Pengaturan</div>
      </div>
      <div style={{marginTop:"auto",fontSize:10,color:"#8fa2b9"}}>ADMIN PREVIEW · MVP</div>
    </aside>
    <section style={{marginLeft:240,padding:32}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:15,marginBottom:30,flexWrap:"wrap"}}>
        <div><div style={{fontSize:11,color:"#8492a5",fontWeight:700}}>OVERVIEW</div><h1 style={{fontSize:30,margin:"5px 0"}}>Dashboard</h1><div style={{fontSize:12,color:"#8290a2"}}>Selamat datang di panel admin AM Studio Drive.</div></div>
        <Link href="/" className="btn btn-light"><ArrowLeft size={15}/> Lihat website</Link>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:15,marginBottom:25}}>
        {[[Users,"Total Klien","24"],[Images,"Total Galeri","31"],[HardDrive,"Penyimpanan","428 GB"],[CreditCard,"Langganan Aktif","19"]].map(([I,t,v]:any)=><div className="card" key={t} style={{padding:20}}><div style={{display:"flex",justifyContent:"space-between",color:"#8492a5",fontSize:11}}>{t}<I size={17}/></div><div style={{fontSize:27,fontWeight:800,fontFamily:"Manrope",marginTop:12}}>{v}</div></div>)}
      </div>
      <div className="card" style={{padding:22}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}><div><h2 style={{fontSize:18,margin:"0 0 5px"}}>Galeri klien terbaru</h2><p style={{fontSize:11,color:"#8290a2",margin:0}}>Contoh tampilan data klien</p></div><button className="btn btn-primary" style={{fontSize:11}}><Plus size={15}/> Tambah klien (demo)</button></div>
        <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:11,minWidth:650}}><thead><tr style={{textAlign:"left",color:"#8290a2",borderBottom:"1px solid #edf0f4"}}>{["NAMA GALERI","KODE","PAKET","STORAGE","STATUS","BERAKHIR",""].map(x=><th key={x} style={{padding:"12px 8px"}}>{x}</th>)}</tr></thead><tbody>{clients.map(c=><tr key={c.code} style={{borderBottom:"1px solid #f0f2f5"}}><td style={{padding:"16px 8px",fontWeight:700}}>{c.name}</td><td style={{padding:"16px 8px",color:"#8290a2"}}>{c.code}</td><td style={{padding:"16px 8px"}}>{c.plan}</td><td style={{padding:"16px 8px"}}>{c.used} / {c.quota}</td><td style={{padding:"16px 8px"}}><span style={{background:c.status==="Aktif"?"#e9f5ee":"#fff4df",color:c.status==="Aktif"?"#28734d":"#9a6b1c",padding:"5px 8px",borderRadius:20,fontWeight:700}}>{c.status}</span></td><td style={{padding:"16px 8px"}}>{c.expiry}</td><td style={{padding:"16px 8px"}}><MoreHorizontal size={17}/></td></tr>)}</tbody></table></div>
        <div style={{padding:12,background:"#fff8e9",borderRadius:10,marginTop:18,fontSize:11,color:"#8c6a2e"}}>Data di halaman ini hanya data contoh. Login admin, database, upload, dan pengelolaan klien belum dihubungkan.</div>
      </div>
    </section>
  </main>;
}
const navActive: React.CSSProperties = {padding:"12px 13px",background:"#2b405a",borderRadius:10,fontWeight:700};
const navItem: React.CSSProperties = {padding:"12px 13px",color:"#c2cedb"};
