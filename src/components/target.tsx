// import { CircleDollarSign, LandPlot, Laptop, Soup } from "lucide-react";
import Link from "next/link";
import { site } from "@/config/site";
import { Button } from "./ui/button";

export default function Target() {
  const features = [
    {
      //   icon: <Soup className="size-6" strokeWidth={1.5} />,
      title: "Trình độ học vấn",
      desc: "Tốt nghiệp đại học chuyên ngành CNTT hoặc chuyên ngành liên quan",
    },
    {
      //   icon: <Laptop className="size-6" strokeWidth={1.5} />,
      title: "Kinh nghiệm làm việc",
      desc: "Có từ 2 năm kinh nghiệm làm việc trong lĩnh vực lập trình",
    },
    {
      //   icon: <LandPlot className="size-6" strokeWidth={1.5} />,
      title: "Kỹ năng chuyên môn",
      desc: "Sở hữu các kỹ năng chuyên môn của lập trình viên Front-End hoặc Back-End",
    },
    {
      //   icon: <CircleDollarSign className="size-6" strokeWidth={1.5} />,
      title: "Yêu cầu khác",
      desc: "Ứng viên từ 23-35 tuổi, có kỹ năng tiếng Anh hoặc tiếng Hàn là một lợi thế (không bắt buộc)",
    },
  ];

  return (
    <section className="py-14 bg-orange-100">
      <div className="container text-gray-600">
        <div className="max-w-2xl mx-auto md:text-center text-left">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Đối tượng tham gia
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 p-6 rounded-xl bg-white border-orange-300 border-[0.5px]"
              >
                <div className="w-[51px] border-orange-600 border-[4px]"></div>
                {/* <div className="flex-none size-12 bg-orange-400 rounded-lg flex items-center justify-center border text-white">
                  {item.icon}
                </div> */}
                <h4 className="md:text-xl text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <div>{item.desc}</div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4 mt-12">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href={site.registrationUrl} target="_blank">
                Ứng tuyển ngay
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
