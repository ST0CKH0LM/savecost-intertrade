export type ProductCategory = "Chemical" | "Grease" | "Industrial Sprays" | "Industrial Water Filters";

export type CatalogProduct = {
  category: ProductCategory;
  description: string;
  id: string;
  name: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  Chemical: "เคมีภัณฑ์",
  Grease: "จารบี",
  "Industrial Sprays": "สเปรย์อุตสาหกรรม",
  "Industrial Water Filters": "สารกรองน้ำ",
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "SC-1001",
    name: "Scale inhibitor",
    category: "Chemical",
    description: "น้ำยาป้องกันตะกรันและสนิมในระบบคูลลิ่งทาวเวอร์ ช่วยปรับค่า pH และปลอดภัยกับโลหะ พลาสติก ซีล และวาล์ว",
  },
  {
    id: "SC-1002",
    name: "Biocide",
    category: "Chemical",
    description: "น้ำยาป้องกันตะไคร่และจุลินทรีย์ในระบบน้ำ ช่วยลดการอุดตันตามท่อและแผงกระจายน้ำ พร้อมลดการสิ้นเปลืองพลังงาน",
  },
  {
    id: "SC-1003",
    name: "Corrosion inhibitor",
    category: "Chemical",
    description: "น้ำยาป้องกันสนิมและการกัดกร่อนในระบบน้ำเย็น ไม่ทำปฏิกิริยากับโลหะและวัสดุในระบบน้ำ",
  },
  {
    id: "SC-1004",
    name: "Scale remove",
    category: "Chemical",
    description: "น้ำยาล้างตะกรันและสนิมในระบบน้ำ ช่วยละลายตะกรันในคูลลิ่งทาวเวอร์โดยไม่ทำอันตรายต่อพื้นผิว",
  },
  {
    id: "SC-1005",
    name: "Corrosion Remover",
    category: "Chemical",
    description: "น้ำยาล้างสนิมประสิทธิภาพสูง ไม่ทำปฏิกิริยากับโลหะ และช่วยขจัดสนิมได้อย่างรวดเร็ว",
  },
  {
    id: "SC-1006",
    name: "Aluminum fins coil cleaner",
    category: "Chemical",
    description: "น้ำยาเข้มข้นสำหรับทำความสะอาดฟินคอยล์เย็นและแผ่นกรอง ขจัดสิ่งสกปรกโดยไม่ทำลายอลูมิเนียม",
  },
  {
    id: "SC-1007",
    name: "Chemical cleaner SC1",
    category: "Chemical",
    description: "หัวเชื้อน้ำยาเข้มข้นชนิดพิเศษสำหรับทำความสะอาดพื้นผิวโลหะทุกชนิด ผสมน้ำได้เป็นสีน้ำนมและไม่ทำให้เกิดสนิม",
  },
  {
    id: "SC-1008",
    name: "Chemical cleaner SC2",
    category: "Chemical",
    description: "น้ำยาล้างมอเตอร์ แห้งเร็ว ไม่เป็นสื่อนำไฟฟ้า ไม่ทำปฏิกิริยากับพลาสติก วานิช และไม่ติดไฟ",
  },
  {
    id: "SC-1009",
    name: "Corrosion inhibitor",
    category: "Chemical",
    description: "สารป้องกันการกัดกร่อนในระบบหม้อไอน้ำ ช่วยกำจัดออกซิเจนซึ่งเป็นสาเหตุหลักของการเกิดสนิม",
  },
  {
    id: "SC-1010",
    name: "Scale inhibitor",
    category: "Chemical",
    description: "น้ำยาป้องกันตะกรัน สนิม และการกัดกร่อนในระบบบอยเลอร์และท่อไอน้ำ ใช้งานสะดวกและประหยัด",
  },
  {
    id: "SC-1011",
    name: "Rust Remover",
    category: "Chemical",
    description: "น้ำยากำจัดสนิมบนผิวเหล็ก เพิ่มประสิทธิภาพในการทำปฏิกิริยากับสนิมและช่วยเคลือบผิวโลหะ",
  },
  {
    id: "SC-2001",
    name: "Multi-purpose grease",
    category: "Grease",
    description: "จารบีอเนกประสงค์ ให้การหล่อลื่นดี ป้องกันน้ำ และเหมาะสำหรับงานหล่อลื่นทั่วไปในหลายช่วงอุณหภูมิ",
  },
  {
    id: "SC-2002",
    name: "Anti sieze grease",
    category: "Grease",
    description: "จารบีสีทองผสมสารทองแดง ป้องกันการจับตายของโลหะกับโลหะ และทนความร้อนได้สูงถึง 1,450 องศาเซลเซียส",
  },
  {
    id: "SC-2003",
    name: "Synthetic grease",
    category: "Grease",
    description: "จารบีสังเคราะห์เกรดพิเศษ เหมาะสำหรับงานหนักและลูกปืนที่ทำงานในอุณหภูมิสูงอย่างต่อเนื่อง",
  },
  {
    id: "SC-2004",
    name: "Lithium complex grease",
    category: "Grease",
    description: "จารบีลิเธียมคอมเพล็กซ์ จุดหลอมตัวสูง รับแรงกระแทกได้ดี ป้องกันน้ำ สนิม และการกัดกร่อนของโลหะ",
  },
  {
    id: "SC-3001",
    name: "Contact cleaner",
    category: "Industrial Sprays",
    description: "น้ำยาล้างหน้าคอนแทค แห้งเร็ว ไม่ทิ้งคราบ ไม่ทำปฏิกิริยากับพลาสติก และไม่เป็นอันตรายต่อร่างกาย",
  },
  {
    id: "SC-3002",
    name: "Penetrating oil (P.O)",
    category: "Industrial Sprays",
    description: "น้ำมันเคมีพิเศษสำหรับแทรกซึมชิ้นส่วนที่ติดแน่นจากสนิม ช่วยละลายสนิม หล่อลื่น และลดการเสียดสี",
  },
  {
    id: "SC-3003",
    name: "Rust inhibitor",
    category: "Industrial Sprays",
    description: "น้ำยาเคลือบป้องกันสนิมและการกัดกร่อน ใช้กับโมลด์ แม่พิมพ์ เครื่องจักร และเครื่องมือที่มีเหล็กเป็นส่วนประกอบ",
  },
  {
    id: "SC-3004",
    name: "Silicone mold release",
    category: "Industrial Sprays",
    description: "สเปรย์หล่อลื่นแม่พิมพ์สำหรับงานถอดแบบหรือชิ้นพลาสติก ช่วยให้ถอดชิ้นงานง่ายและรวดเร็ว",
  },
  {
    id: "SC-3005",
    name: "Mold cleaner",
    category: "Industrial Sprays",
    description: "สเปรย์ทำความสะอาดคราบน้ำมัน ไขมัน และยางเหนียวของโมลด์หรือแม่พิมพ์ได้อย่างรวดเร็ว",
  },
  {
    id: "SC-3006",
    name: "Moly dry",
    category: "Industrial Sprays",
    description: "จารบีแห้งสำหรับฉีดโซ่และเฟืองที่มีแรงเสียดทานสูง ทนความร้อนสูงและช่วยลดการสึกหรอ",
  },
  {
    id: "SC-3007",
    name: "Non slip drive belt dressing",
    category: "Industrial Sprays",
    description: "สเปรย์ป้องกันการลื่นไหลของสายพาน ลดเสียงดัง ใช้ได้กับสายพานทุกประเภท และช่วยยืดอายุการใช้งาน",
  },
  {
    id: "SC-3008",
    name: "Red insulating varnish",
    category: "Industrial Sprays",
    description: "สเปรย์เคลือบลวดมอเตอร์เพื่อป้องกันความร้อน ใช้งานง่าย แห้งเร็ว และไม่ต้องผ่านการอบแห้ง",
  },
  {
    id: "SC-3009",
    name: "Electric motor cleaner",
    category: "Industrial Sprays",
    description: "สเปรย์ฉีดล้างมอเตอร์ ไม่เป็นสื่อนำไฟฟ้า ไม่ทำปฏิกิริยากับพลาสติก และไม่ติดไฟ",
  },
  {
    id: "SC-3010",
    name: "Food grade silicone",
    category: "Industrial Sprays",
    description: "สเปรย์ฉีดแม่พิมพ์สำหรับหล่อลื่นและรักษาแม่พิมพ์ เหมาะสำหรับโรงงานอุตสาหกรรมผลิตอาหาร",
  },
  {
    id: "SC-3011",
    name: "Grease food grade",
    category: "Industrial Sprays",
    description: "จารบีเกรดอาหารสำหรับหล่อลื่นแม่พิมพ์ งานถอดแบบ หรือพลาสติก ช่วยให้ถอดชิ้นงานได้ง่าย",
  },
  {
    id: "SC-5001",
    name: "Sodium chloride",
    category: "Industrial Water Filters",
    description: "เกลืออุตสาหกรรมสำหรับทำความสะอาดสารกรองน้ำ",
  },
  {
    id: "SC-5002",
    name: "Ion exchange resins",
    category: "Industrial Water Filters",
    description: "สารกรองน้ำเรซิ่นสำหรับกำจัดความกระด้าง หินปูน แคลเซียม แมกนีเซียม และดูดซับสี เหมาะสำหรับการทำน้ำอ่อน",
  },
  {
    id: "SC-5003",
    name: "Activated carbon",
    category: "Industrial Water Filters",
    description: "สารกรองสำหรับกำจัดความขุ่น สารแขวนลอย สารอินทรีย์ กลิ่น คลอรีน และสีในน้ำ",
  },
  {
    id: "SC-5004",
    name: "Mangganis",
    category: "Industrial Water Filters",
    description: "สารกรองน้ำบาดาลที่มีสนิมเหล็กปะปน ช่วยลดกลิ่น สีแดง คราบสนิม และปรับคุณภาพน้ำ",
  },
];

export const catalogCategories = Object.keys(categoryLabels) as ProductCategory[];
