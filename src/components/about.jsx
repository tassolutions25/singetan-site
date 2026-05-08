import { Target, Eye } from "lucide-react";

export default function AboutUs({ language }) {
  const translations = {
    en: {
      sectionLabel: "About Our Group",
      mainHeading: "Building The Future Together",
      established: "SINCE 2024",
      tagline: "Excellence in Ethiopia",
      story:
        "Founded in 2024 by Mr. Addisu Katama Jote, Singetan Business Group PLC has grown into a dynamic and diversified company. Our foundation is built on integrity, customer satisfaction, and a deep-rooted commitment to sustainable growth within our community.",
      visionTitle: "Our Vision",
      visionText:
        "To be a leading and innovative business group recognized for excellence, integrity, and sustainable growth, empowering our stakeholders and making a positive impact.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver high-quality products and services through efficient management and dedicated teamwork, fostering long-term relationships with clients and partners.",
    },
    am: {
      sectionLabel: "ስለ ቡድናችን",
      mainHeading: "የወደፊቱን አብረን እንገነባለን",
      established: "ከ2016 ዓ.ም ጀምሮ",
      tagline: "ልህቀት በኢትዮጵያ",
      story:
        "በ2016 ዓ.ም በአቶ አዲሱ ከተማ ጆቴ የተመሰረተው ሲንጌታን ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር ወደ ተለዋዋጭ እና የተለያዩ ዘርፎች ወዳለው ኩባንያ አድጓል። መሠረታችን በታማኝነት፣ በደንበኞች እርካታ እና በማህበረሰባችን ውስጥ ለዘላቂ እድገት ባለን ጥልቅ ቁርጠኝነት ላይ የተገነባ ነው።",
      visionTitle: "ራዕይ",
      visionText:
        "በላቀ፣ በአቋም እና በዘላቂ እድገት፣ ባለድርሻዎቻችንን በማብቃት እና በማህበረሰባችን ውስጥ አወንታዊ ተፅእኖ በመፍጠር መሪ መሆን።",
      missionTitle: "ተልዕኮ",
      missionText:
        "ከፍተኛ ጥራት ያላቸውን ምርቶች እና አገልግሎቶችን በብቃት አስተዳደር እና በቡድን ለመስራት፣ ከደንበኞች እና አጋሮች ጋር የረጅም ጊዜ ግንኙነቶችን በማጎልበት።",
    },
    om: {
      sectionLabel: "Waa'ee Garee Keenyaa",
      mainHeading: "Gara Fuulduraa Waliin Ijaarru",
      established: "BARA 2016 JALQABEE",
      tagline: "Itoophiyaa Keessatti Olaantummaa",
      story:
        "Bara 2016tti Obbo Addisuu Katamaa Joteetiin kan hundeeffame, Gareen Daldalaa Singetan gara dhaabbata daldalaa garaagaraatti guddateera. Hundeen keenya amanamaa ta'uu, quuqa dhabuun maamiltootaa fi guddina hawaasa keenyaa irratti kan xiyyeeffate dha.",
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
          {/* Branded Content Box */}
          <div className="relative h-[400px] bg-[#0b47a8] rounded-2xl flex items-center justify-center p-8 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <img
                src="/logo.jpg"
                className="w-full h-full object-cover scale-150"
                alt="Background Overlay"
              />
            </div>
            <div className="relative z-10 text-center">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#c5a044]"
              />
              <div className="text-[#c5a044] text-4xl font-bold mb-2">
                {t.established}
              </div>
              <div className="text-white font-medium tracking-widest uppercase">
                {t.tagline}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-[#c5a044] font-bold uppercase text-sm tracking-widest">
              {t.sectionLabel}
            </span>
            <h2 className="text-4xl font-extrabold text-[#0b47a8] mt-2 mb-6">
              {t.mainHeading}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t.story}
            </p>

            {/* Vision & Mission integrated here for better UI flow */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-[#c5a044] pl-4">
                <h3 className="font-bold text-[#0b47a8] flex items-center gap-2">
                  <Eye size={20} /> {t.visionTitle}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{t.visionText}</p>
              </div>
              <div className="border-l-4 border-[#0b47a8] pl-4">
                <h3 className="font-bold text-[#c5a044] flex items-center gap-2">
                  <Target size={20} /> {t.missionTitle}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{t.missionText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
