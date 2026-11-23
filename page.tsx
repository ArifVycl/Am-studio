import Link from "next/link";
import { ArrowLeft, LockKeyhole, Cloud, ShieldCheck } from "lucide-react";

export default function GalleryPage() {
  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:22,background:"linear-gradient(145deg,#14243a,#294563)"}}>
    <div style={{width:"min(440px,100%)",background:"white",borderRadius:24,padding:34,boxShadow:"0 25px 80px #08152655"}}>
      <Link href="/" style={{display:"inline-flex",alignItems:"center",gap:7,color:"#8290a2",fontSize:12,marginBottom:30}}><ArrowLeft size={15}/> Kembali ke halaman utama</Link>
      <div style={{width:54,height:54,borderRadius:16,background:"#14243a",display:"grid",placeItems:"center",color:"white",marginBottom:22}}><Cloud size={27}/></div>
      <div style={{fontSize:10,letterSpacing:".16em",fontWeight:800,color:"#8292a8"}}>AM STUDIO DRIVE</div>
      <h1 style={{fontSize:30,margin:"8px 0"}}>Buka galeri Anda</h1>
      <p style={{fontSize:13,lineHeight:1.7,color:"#78869a",marginBottom:25}}>Masukkan kode galeri dan PIN yang diberikan oleh fotografer atau videografer Anda.</p>
      <form action="#" style={{display:"grid",gap:13}}>
        <label style={{fontSize:12,fontWeight:700,color:"#536176"}}>Kode galeri<input placeholder="Contoh: AMS-2026-001" style={field}/></label>
        <label style={{fontSize:12,fontWeight:700,color:"#536176"}}>PIN galeri<input placeholder="Masukkan PIN Anda" inputMode="numeric" maxLength={8} style={field}/></label>
        <button type="button" className="btn btn-primary" style={{width:"100%",marginTop:8,opacity:.75,cursor:"not-allowed"}} disabled><LockKeyhole size={16}/> Akses galeri (segera hadir)</button>
      </form>
      <div style={{display:"flex",gap:8,alignItems:"center",marginTop:24,padding:13,background:"#f5f7fa",borderRadius:12,color:"#8290a2",fontSize:10,lineHeight:1.6}}><ShieldCheck size={17}/> Halaman ini merupakan prototipe tampilan. Verifikasi PIN server-side belum diaktifkan.</div>
    </div>
  </main>;
}
const field: React.CSSProperties = {display:"block",width:"100%",padding:"13px 14px",border:"1px solid #dfe5ec",borderRadius:11,marginTop:8,outline:"none",fontSize:13};
