import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";
import about from "/public/about.jpg";

const text = [
  {
    title: "Giới thiệu về K-Tech",
    description: (
      <div>
        <p>
          <b>K-Tech College 2025</b> là chương trình đặc biệt, cung cấp cho các
          lập trình viên các kỹ năng cần thiết, hiểu rõ về văn hóa làm việc tại
          Hàn Quốc và tạo điều kiện để bạn tìm được công việc mong muốn tại Hàn
          Quốc.
        </p>
        <p>
          K-Tech College 2025 đóng vai trò là cầu nối việc làm tại Hàn Quốc cho
          các lập trình viên chất lượng cao ở Việt Nam <b>hoàn toàn miễn phí</b>
          , với nguồn tài trợ 100% từ Chính phủ Hàn Quốc.
        </p>
      </div>
    ),
    img: about,
  },
];

export default function AboutUs() {
  return (
    <section id="gioi-thieu" className="bg-[#F2FAFF] py-[60px] md:py-[120px]">
      <div className="container">
        <div className="space-y-12">
          {text.map((item, idx) => (
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
                  "mx-auto text-gray-600 gap-x-12 items-start justify-between lg:flex",
                  idx % 2 != 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="hidden lg:block lg:max-w-xl">
                  <Image
                    src={item.img}
                    className="rounded-lg"
                    alt={item.title}
                  />
                </div>

                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                  <div className="max-w-2xl">
                    <h3 className="text-gray-800 text-[20px] text-center md:text-left font-bold sm:text-5xl mb-4">
                      {item.title}
                    </h3>
                    <div className="[&_p]:mb-3">{item.description}</div>
                    <Button size="lg" className="w-full md:w-auto mt-4" asChild>
                      <Link href={site.registrationUrl} target="_blank">
                        Ứng tuyển ngay
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationLayout>
          ))}
        </div>
      </div>
    </section>
  );
}
