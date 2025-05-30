import Image from "next/image";
import CalendarDotsIcon from "/public/CalendarDotsIcon.svg";
import HandshakeIcon from "/public/HandshakeIcon.svg";
import HourglassLowIcon from "/public/HourglassLowIcon.svg";
import UsersFourIcon from "/public/UsersFourIcon.svg";
import TrainingProgramImage from "/public/training_program.png";

export default function TrainingProgram() {
  const text = [
    {
      icon: HourglassLowIcon,
      title: "THỜI LƯỢNG",
      content: "3 - 6 tháng",
    },
    {
      icon: CalendarDotsIcon,
      title: "HÌNH THỨC",
      content: (
        <>
          Toàn thời gian
          <p className="text-sm font-normal">(8 tiếng / 5 ngày / tuần)</p>
        </>
      ),
    },
    {
      icon: UsersFourIcon,
      title: "SỐ LƯỢNG",
      content: "140 lập trình viên",
    },
    {
      icon: HandshakeIcon,
      title: "TRỢ CẤP ĐÀO TẠO",
      content: "Có trợ cấp trong quá trình đào tạo tại Việt Nam",
    },
  ];

  return (
    <section className="py-[40px] md:py-[100px]" id="chuong-trinh-dao-tao">
      <div className="container">
        <div className="max-w mx-auto text-center">
          <h2 className="text-xl font-bold sm:text-5xl">
            Chương trình thực tập
          </h2>
          <p className="mt-8 text-base md:text-xl">
            Tiếng Anh cơ bản, văn hóa làm việc tại Hàn Quốc và thực hành dự án
            thực tế
          </p>
        </div>
        <div className="mt-8 md:mt-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex flex-col w-full lg:w-1/2 space-y-2">
            {text.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl bg-[#FCFCFD] p-3 min-h-[100px]"
              >
                <div className="flex-shrink-0 w-[76px] h-[76px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FFF0F1] to-[#E0F0FE]">
                  <Image src={item.icon} alt="icon" width={38} height={38} />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm font-bold text-[#A3A3A3]">
                    {item.title}
                  </p>
                  <div className="text-lg md:text-xl font-bold">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={TrainingProgramImage}
              alt="training"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
