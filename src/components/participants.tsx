import Image from "next/image";
import AnimationLayout from "./shared/animation-layout";
import BookOpenIcon from "/public/BookOpenIcon.svg";
import KoreanIcon from "/public/KoreanIcon.svg";
import UsersTwoIcon from "/public/UsersTwoIcon.svg";

const text = [
  {
    icon: UsersTwoIcon,
    title: "Đối tượng tham gia",
    desc: "Sinh viên lập trình năm cuối hoặc mới tôt nghiệp tại các trường Đại học",
  },
  {
    icon: BookOpenIcon,
    title: "Chương trình đào tạo",
    desc: "Tập trung vào phát triển phần mềm thực tiễn thông qua các dự án ứng dụng CN",
  },
  {
    icon: KoreanIcon,
    title: "Đào tạo văn hóa",
    desc: "Học tiếng Hàn, tác phong chuyên nghiệp và văn hóa doanh nghiệp Hàn Quốc",
  },
  // {
  //   icon: BuildingsIcon,
  //   title: "Kết nối doanh nghiệp",
  //   desc: "Cơ hội thực tập và làm việc tại các startup Hàn Quốc",
  // },
];

export default function Participant() {
  return (
    <section className="bg-[#F5FAFF] py-[60px] md:py-[120px]">
      <div className="container">
        {/* <div className="mx-auto md:text-center text-left">
          <h2 className="text-xl text-center font-bold sm:text-5xl">
            Đối tượng tham gia
          </h2>
        </div> */}
        <div className="mt-8 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.map((item, idx) => (
            <AnimationLayout
              className="h-full duration-1000 delay-300"
              isInviewState={{
                trueState: "opacity-1",
                falseState: "opacity-0 translate-y-12",
              }}
              key={idx}
            >
              <div className="h-full bg-white rounded-[20px] p-[32px_16px] flex flex-col items-center text-center shadow-[0px_64px_64px_-48px_#0F0F0F1A]">
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDEFF3] via-[#EEF6FF] to-[#EEF6FF] mb-8">
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="w-[38px] h-[38px]"
                  />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-2">
                  {item.title}
                </h4>
                <p className="text-[#7B7B8C] text-base">{item.desc}</p>
              </div>
            </AnimationLayout>
          ))}
        </div>
        {/* <div className="mt-10 md:mt-[60px] flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4">
          <Button size="lg" className="w-full md:w-auto" asChild>
            <Link href={site.registrationUrl} target="_blank">
              Ứng tuyển ngay
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
