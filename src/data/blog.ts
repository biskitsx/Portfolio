export const blogDetail = [
  {
    title: "รีวิวฝึกงานที่ Appsynth ✨",
    link: "https://medium.com/appsynth/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-appsynth-5b817564317d",
    image: "/as.jpg",
    description:
      "สวัสดีครับทุกคน 👋🏻 ผมชื่อกฤต เด็กวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์ วันนี้ผมอยากมาแชร์ประสบการณ์ฝึกงานที่ Appsynth ในตำแหน่ง Full Stack Developer ระยะเวลา 6 + 1 เดือน",
  },
  {
    title: "GitOps คืออะไร? ทำไมถึงช่วยให้ทำ DevOps ได้ง่ายขึ้นเยอะ",
    link: "https://medium.com/gofive/%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-argocd-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3-deployment-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94-gitops-247aad73a94e",
    image: "/gitops.webp",
    description:
      "เคยไหมครับ เวลาจะ deploy ระบบขึ้น Kubernetes แล้วต้องคอยระวังไม่ให้ config เพี้ยนจากที่อยู่ใน Git … หรือบางทีเจอว่า dev แต่ละคนแก้ config กันคนละที่ จนสุดท้ายบน production นั้น config มันทับกันหรือพังไปหมด 😂 นี่แหละครับคือจุดที่ “GitOps” เข้ามาช่วยชีวิต",
  },
  {
    title: "ตอนที่ 1 เริ่มต้นเขียน API ด้วยภาษา Go (Fiber) 🔥",
    link: "https://medium.com/@kitsugarr/%E0%B8%9E%E0%B8%B2%E0%B8%97%E0%B8%B3-rest-api-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2-go-fiber-37cf95fde4ed",
    image: "/gomedium.webp",
    description:
      "ในบทความนีเราจะมาหัดเขียน API แบบง่ายๆ กัน โดยเหมาะกับคนที่มีพื้นฐานในการเขียนโปรแกรมเบื้องต้น หากใครไม่มีก็สามารถลองทำดูคร่าวๆตามไปได้ครับ 😄",
  },
  {
    title: "ตอนที่ 2 สร้าง RESTful API ด้วยภาษา Go (Fiber) 🔥",
    link: "https://medium.com/@kitsugarr/%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-2-%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-api-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2-go-fiber-d4e85e610941",
    image: "/go2.webp",
    description:
      "จากบทความที่แล้วเราได้มีการสร้างโปรเจกต์ง่ายๆ ด้วย Fiber (เว็บเฟรมเวิร์กบนภาษา Go) ในบทความนี้เราจะมาเจาะลึกขึ้นในการใช้ Method ต่างๆ ว่าแต่ละตัวต่างกันยังไง มีหน้าที่แบบไหน พร้อมแล้วก็ไปลุยกันเลย 😊",
  },
  {
    title: "สอนติดตั้ง NFS (Network File System) บน Linux/Ubuntu",
    link: "https://medium.com/@kitsugarr/%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-nfs-network-file-system-%E0%B8%9A%E0%B8%99-linux-ubuntu-a56c135d83fb",
    image:
      "https://miro.medium.com/v2/resize:fit:1020/format:webp/0*wHwf95tD87f4Z8AE.gif",
    description:
      "Network File System หรือ NFS คือ บริการที่ทำให้เครื่องคอมพิวเตอร์สามารถเข้าถึง File และ Directory บนเครื่องคอมพิวเตอร์เครื่องอื่นได้เหมือนกับใช้งานเครื่องของตัวเอง โดยสามารถใช้บริการได้อย่างสะดวก",
  },
  {
    title: "มารู้จักกับ Web Environtment Integrity (WEI)",
    link: "https://medium.com/@kitsugarr/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A-web-environtment-integrity-wei-863191229ec4",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*RworqKhTERbxBLLT.png",
    description:
      "WEI คืออะไร WEI (Web Environment Integrity) เป็นมาตรฐานของเว็บเบราว์เซอร์แบบใหม่ ที่ถูกเสนอโดย Google ซึ่งจะช่วยให้การเข้าถึง internet ของเรา ๆ มีความปลอดภัย น่าเชื่อถือ ไม่มีการดัดแปลง",
  },
  {
    title: "Write Amplification คืออะไร ?",
    link: "https://medium.com/@kitsugarr/write-amplification-%E0%B8%84-a8e1452db4f0",
    image:
      "https://miro.medium.com/v2/resize:fit:1340/format:webp/1*Zb3csgNYWACwPJq83rEtXg.jpeg",
    description:
      "ข้อมูลที่เก็บอยู่บน SSD จะถูกเรียกว่าเซลล์ของหน่วยความจำแบบแฟลช (Flash memory cell) ซึ่งมันจะถูกเรียงรวมกันเป็นส่วนที่เรียกว่า บล็อก (Block) โดยแต่ละบล็อก ก็จะมีการแบ่งออกเป็นสิ่งที่เรียกว่า เพจ (Page)",
  },
  {
    title: "Distributed File Systems คืออะไร ?",
    link: "https://medium.com/@kitsugarr/distributed-file-systems-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-9c460b2c2fdf",
    image:
      "https://miro.medium.com/v2/resize:fit:1376/format:webp/1*XYysRW_NwtfDEwnQfRxHww.png",
    description:
      "ระบบไฟล์แบบกระจายศูนย์ (DFS) คือ ระบบไฟล์ที่เก็บข้อมูลไว้ในหลาย ๆ เครื่องเซิร์ฟเวอร์ที่เชื่อมต่อกันบนเครือข่าย เพื่อให้ผู้ใช้สามารถเข้าถึงข้อมูลได้จากทุกที่ และเข้าถึงไฟล์ได้ราวกับว่าไฟล์นั้น ๆ ถูกเก็บไว้ในเครื่องของตนเอง",
  },
];
