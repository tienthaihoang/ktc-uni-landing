import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimationLayout from "./shared/animation-layout";
import benefit_1 from "/public/benefit_1.png";
import benefit_2 from "/public/benefit_2.png";
import ClimbIcon from "/public/ClimbIcon.svg";
import FreeIcon from "/public/FreeIcon.svg";
import GraduateIcon from "/public/GraduateIcon.svg";
import KoreaFlagIcon from "/public/KoreaFlagIcon.svg";
import LegalIcon from "/public/LegalIcon.svg";
import LunchIcon from "/public/LunchIcon.svg";

export default function Benefits() {
  const benefits = [
    {
      icon: FreeIcon,
      text: "Miễn học phí toàn bộ chương trình",
    },
    {
      icon: LunchIcon,
      text: "Hỗ trợ cơm trưa trong suốt khoá học",
    },
    {
      icon: GraduateIcon,
      text: "Học bổng cho sinh viên tốt nghiệp xuất sắc",
    },
    {
      icon: KoreaFlagIcon,
      text: "Đào tạo ngắn hạn tại Hàn Quốc cho sinh viên tốt nghiệp xuất sắc (toàn phần)",
    },
    {
      icon: ClimbIcon,
      text: "Hỗ trợ chương trình kết nối việc làm đến các doanh nghiệp Hàn Quốc",
    },
    {
      icon: LegalIcon,
      text: "Hỗ trợ tư vấn thủ tục pháp lý/ giấy tờ xin visa làm việc tại Hàn Quốc",
    },
  ];

  const features = [
    {
      image: benefit_1,
      title: "Trong quá trình học",
      desc: (
        <div className="space-y-6">
          {benefits.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white p-3 rounded-lg"
            >
              <div className="w-[56px] h-[56px] flex-shrink-0 relative">
                <Image
                  src={item.icon}
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-normal">{item.text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      image: benefit_2,
      title: "Hỗ trợ sau tốt nghiệp",
      desc: (
        <div className="space-y-6">
          {benefits.slice(3, 6).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white p-3 rounded-lg"
            >
              <div className="w-[56px] h-[56px] flex-shrink-0 relative">
                <Image
                  src={item.icon}
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-normal">{item.text}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#F2FAFF] py-[60px] md:py-[120px]">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold md:text-5xl md:leading-[62px]">
              Chính sách hỗ trợ và <br /> phúc lợi dành cho học viên
            </h2>
          </div>
          <div className="mt-[56px] md:mt-[120px] space-y-12">
            {features.map((item, idx) => (
              <AnimationLayout
                className="duration-1000 delay-300"
                isInviewState={{
                  trueState: "opacity-1",
                  falseState: "opacity-0 translate-y-12",
                }}
                key={idx}
              >
                <div
                  className={cn(
                    "mx-auto flex flex-col-reverse md:flex-row gap-x-[100px] items-stretch md:pb-8",
                    idx % 2 !== 1 ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  <div className="w-full md:w-1/2">
                    <div className="w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                    <h3 className="text-[18px] font-semibold sm:text-4xl mb-3 md:mb-8">
                      {item.title}
                    </h3>
                    <div className="mb-4 md:mb-0">{item.desc}</div>
                  </div>
                </div>
              </AnimationLayout>
            ))}
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
