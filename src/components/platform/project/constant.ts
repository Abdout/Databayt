export type lead = {
    value: string
    label: string
    image?: string
  }
  
 export const leads: lead[] = [
    {
      value: "الحركة الوطنية",
      label: "الحركة الوطنية",
      image: "/author/nmbd.png"
    },
    {
      value: "المقداد الهجان",
      label: "المقداد الهجان",
      image: "/author/almgdad.png"
    },
    {
      value: "هشام احمد",
      label: "هشام احمد",
      image: "/author/hesham.png"
    },
    {
      value: "قاسم الظافر",
      label: "قاسم الظافر",
      image: "/author/gasm.png"
    },
    {
      value: "ابو بكر جيكوني",
      label: "ابو بكر جيكوني",
      image: "/author/hesham.png"
    },
  ]

  export type status = {
    value: string
    label: string
    image?: string
  }
  
 export const statuses: status[] = [
    {
      value: "on progress",
      label: " جاري",
      
    },
    {
      value: " stuck",
      label: "متوقف",
     
    },
    {
      value: "done",
      label: "تم",
    },
  ]