const http=require("http"),fs=require("fs"),path=require("path");
const T={".html":"text/html",".svg":"image/svg+xml",".js":"text/javascript",".webmanifest":"application/manifest+json"};
http.createServer((q,r)=>{let p=q.url.split("?")[0];if(p==="/")p="/index.html";
 const f=path.join(__dirname,"public",path.normalize(p));
 if(!f.startsWith(path.join(__dirname,"public")))return r.writeHead(403).end();
 fs.readFile(f,(e,d)=>{if(e)return r.writeHead(404).end("Not found");r.writeHead(200,{"Content-Type":T[path.extname(f)]||"text/plain"});r.end(d)})
}).listen(3000,()=>console.log("Demo Digital Bank: http://localhost:3000"));
