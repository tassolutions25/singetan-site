import { Target, Eye } from "lucide-react";

export default function AboutUs({ language }) {
  const translations = {
    en: {
      title: "About Singetan Business Group",
      subtitle: "Building the future of Ethiopian commerce",
      story:
        "Founded in 2017 by Mr. Addisu Katama Jote, Singetan Business Group PLC has grown into a dynamic and diversified company. We are committed to delivering excellence across all our business lines, from essential supplies to lifestyle services. Our foundation is built on integrity, customer satisfaction, and a deep-rooted commitment to sustainable growth within our community.",
      visionTitle: "Our Vision",
      visionText:
        "To be a leading and innovative business group recognized for excellence, integrity, and sustainable growth, empowering our stakeholders and making a positive impact.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver high-quality products and services through efficient management and dedicated teamwork, fostering long-term relationships with clients and partners.",
    },
    am: {
      title: "ስለ ሲንጌታን ንግድ ቡድን",
      subtitle: "የኢትዮጵያን የንግድ የወደፊት ጊዜ መገንባት",
      story:
        "በ2017 በአቶ አዲሱ ከተማ ጆቴ የተመሰረተው ሲንጌታን ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር ወደ ተለዋዋጭ እና የተለያየ ኩባንያ አድጓል። ከቢሮ እቃዎች እስከ የህይወት ዘይቤ አገልግሎቶች ድረስ በሁሉም የንግድ መስመሮቻችን የላቀ ደረጃን ለማድረስ ቁርጠኞች ነን።",
      visionTitle: "ራዕይ",
      visionText:
        "በላቀ፣ በአቋም እና በዘላቂ እድገት፣ ባለድርሻዎቻችንን በማብቃት እና በማህበረሰባችን ውስጥ አወንታዊ ተፅእኖ በመፍጠር መሪ መሆን።",
      missionTitle: "ተልዕኮ",
      missionText:
        "ከፍተኛ ጥራት ያላቸውን ምርቶች እና አገልግሎቶችን በብቃት አስተዳደር እና በቡድን ለመስራት፣ ከደንበኞች እና አጋሮች ጋር የረጅም ጊዜ ግንኙነቶችን በማጎልበት።",
    },
    om: {
      title: "Waa'ee Garee Daldalaa Singetan",
      subtitle: "Gara fuulduraa daldala Itoophiyaa ijaaruu",
      story:
        "Bara 2017tti Obbo Addisuu Katamaa Joteetiin, Garee Daldalaa Singetan PLC gara dhaabbata dinamikii fi garaagaraatti guddateera. Sarara daldalaa keenya hunda keessatti, meeshaalee barbaachisoo irraa kaasee hanga tajaajila jireenyaatti, olaantummaa fiduuf kutannoo qabna.",
      visionTitle: "Mul'ata",
      visionText:
        "Garee daldalaa adda duree fi kalaqaan hojjetamee fi olaantummaa, qulqullinaa fi guddina itti fufiinsa qabu ta'uu.",
      missionTitle: "Ergama",
      missionText:
        "Hoggansa gahumsa qabuu fi hojii gareetiin oomishaalee fi tajaajiloota qulqullina olaanaa qaban dhiyeessuu.",
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Replaced Training Photo with a Branded Content Box */}
          <div className="relative h-[400px] bg-[#0b47a8] rounded-2xl flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <img
                src="/logo.jpg"
                className="w-full h-full object-cover scale-150"
                alt="Background"
              />
            </div>
            <div className="relative z-10 text-center">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#c5a044]"
              />
              <div className="text-[#c5a044] text-4xl font-bold mb-2">
                SINCE 2017
              </div>
              <div className="text-white font-medium tracking-widest uppercase">
                Excellence in Ethiopia
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#c5a044] font-bold uppercase text-sm tracking-widest">
              About Our Group
            </span>
            <h2 className="text-4xl font-extrabold text-[#0b47a8] mt-2 mb-6">
              Building The Future Together
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2017 by Mr. Addisu Katama Jote, Singetan Business Group
              PLC has grown into a dynamic and diversified company. Our
              foundation is built on integrity, customer satisfaction, and a
              deep-rooted commitment to sustainable growth within our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
