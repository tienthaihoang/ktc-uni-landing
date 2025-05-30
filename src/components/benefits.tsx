import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import benefit_1 from "/public/benefit_1.jpg";
import benefit_2 from "/public/benefit_2.png";
import benefit_3 from "/public/benefit_3.png";
import benefit_4 from "/public/benefit_4.png";

export default function Benefits() {
  const features = [
    {
      image: benefit_1,
      title: "Đào tạo kỹ năng và thực hành trên dự án thực tế",
      desc: "Thực hành trên các dự án thực tế của các doanh nghiệp Hàn Quốc nâng cao chuyên môn làm việc. Được tham gia đạo kỹ năng mềm và văn hóa làm việc Hàn Quốc.",
    },
    {
      image: benefit_2,
      title: "Lợi ích thiết thực sau kỳ thực tập",
      desc: "Cơ hội tham gia đào tạo ngắn hạn miễn phí tại Hàn Quốc, nhận học bổng cuối kỳ thực tập và được đào tạo bổ sung kỹ năng tiếng Anh chuyên ngành Business.",
    },
    {
      image: benefit_3,
      title: "Cơ hội nhận offer làm việc tại Hàn Quốc",
      desc: "Sau khi hoàn thành 3 tháng thực tập với kết quả tốt, ứng viên có thể nhận được offer làm việc từ công ty Hàn Quốc. Những thực tập sinh được nhận offer sẽ được hỗ trợ tư vấn thủ tục xin VISA làm việc tại Hàn Quốc.",
    },
    {
      image: benefit_4,
      title: "Tăng thu nhập cá nhân",
      desc: (
        <p>
          Đạt mức lương ngang bằng với lập trình viên Hàn Quốc. Trung bình mỗi
          tháng cho nhân sự ngành IT tại Hàn là từ $2,544 - $6,169. Xem thêm
          thông tin{" "}
          <Link
            href="https://www.paylab.com/kr/salaryinfo/information-technology"
            className="underline text-[#016DB8]"
            target="_blank"
          >
            tại đây
          </Link>
        </p>
      ),
    },
  ];

  return (
    <section className="py-[60px] md:py-[120px]">
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
              Quyền lợi ứng viên
            </h2>
            <p className="mt-8 text-xl">
              Ứng tuyển tham gia K-Tech College 2025, bạn sẽ được
            </p>
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
                    <h3 className="text-[18px] font-semibold sm:text-4xl mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <div className="text-sm md:text-base mb-4">{item.desc}</div>
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
