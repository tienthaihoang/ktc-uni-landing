import AnimationLayout from "./shared/animation-layout";

const steps = [
  {
    title: "Nộp đơn ứng tuyển",
    description: "Ứng viên điền mẫu ứng tuyển trước hạn chót đăng ký",
  },
  {
    title: "Xét duyệt hồ sơ",
    description: "Chọn lọc các hồ sơ phù hợp với yêu cầu chương trình",
  },
  {
    title: "Phỏng vấn đầu vào",
    description:
      "Tham gia phỏng vấn trực tiếp (offline) hoặc trực tuyến (online)",
  },
  {
    title: "Kết nối doanh nghiệp",
    description:
      "Kết nối thực tập sinh với doanh nghiệp phù hợp (tối đa 1 tháng)",
  },
  {
    title: "Thực tập",
    description:
      "Tham gia thực tập với các dự án của doanh nghiệp Hàn Quốc. Chương trình thực tập sẽ được làm từ xa tại Việt Nam trong 3 - 6 tháng",
  },
];

export default function Process() {
  return (
    <div className="container py-[40px] md:py-[120px]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold sm:text-5xl">Quy trình xét tuyển</h2>
      </div>
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="mt-8 md:mt-[60px] max-w-[594px] mx-auto space-y-[30px]">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-y-[30px]">
              <div className="relative flex items-center justify-start min-w-[112px] h-[77px] gap-x-[15px]">
                <span className="text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0F1] to-[#E0F0FE] leading-none">
                  {`0${index + 1}`}
                </span>
                <span className="absolute bottom-4 right-5 w-2 h-2 rounded-full bg-[#F84C63]"></span>
              </div>

              <div className="text-left">
                <p className="text-base md:text-xl font-bold">{step.title}</p>
                <p className="text-sm mt-2 md:text-base text-[#7B7B8C]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimationLayout>
    </div>
  );
}
