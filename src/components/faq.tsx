"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";
import AnimationLayout from "./shared/animation-layout";

interface FaqsCardProps {
  faqsList: {
    q: string;
    a: ReactNode;
  };
  idx: number;
}

const FaqsCard = (props: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
        .offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div
      className={cn(
        "space-y-3 mt-5 overflow-hidden rounded-lg",
        state ? "bg-[#DEF2FF]" : "bg-[#F2FAFF]"
      )}
      key={idx}
    >
      <h4
        className="cursor-pointer flex items-center justify-between text-base md:text-lg font-semibold px-6 pt-6 pb-2"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 px-6"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="text-sm md:text-base">{faqsList.a}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "Chương trình có yêu cầu về độ tuổi và kinh nghiệm của ứng viên không ạ?",
      a: (
        <div>
          <p>
            Dự án tiếp nhận ứng viên dưới 35 tuổi, lý lịch rõ ràng, không có
            tiền án tiền sự.
          </p>
          <p>
            Quá trình xét tuyển bao gồm thẩm định hồ sơ, kiểm tra đầu vào và
            phỏng vấn chuyên sâu, không yêu cầu số năm kinh nghiệm cụ thể.
          </p>
        </div>
      ),
    },
    {
      q: "Các khoá đào tạo có mở thêm không ạ?",
      a: "Chương trình chỉ được tổ chức một lần trong năm 2025 thôi, vậy nên hãy quyết định nhanh chóng bạn nhé.",
    },
    {
      q: "Cuối kỳ thực tập có đánh giá đầu ra không ạ? Tiêu chí đánh giá ra sao?",
      a: "Thực tập sinh sẽ được đánh giá  trong suốt quá trị thực tập trên các dự án thực tế, đồng thời sẽ được kết nối tham gia phỏng vấn trực tiếp với các doanh nghiệp có nhu cầu tuyển dụng nhân lực. Nếu ứng viên phù hợp với doanh nghiệp sẽ được nhận lời mời làm việc chính thức.",
    },
    {
      q: "Dự án thực tế trong khoá đào tạo có phải là do doanh nghiệp tuyển dụng ra đề?",
      a: "Đúng vậy. Doanh Nghiệp là người ra đề và học viên dựa theo yêu cầu để thực hiện. Sau đó, doanh nghiệp sẽ đánh giá dựa trên bài nhóm và năng lực từng cá nhân.",
    },
    {
      q: "Khi phỏng vấn với doanh nghiệp cần dùng Tiếng Hàn và Tiếng Anh phải không ạ?",
      a: "Điều này còn dựa vào quy trình tuyển dụng của công ty bạn ứng tuyển, tuy nhiên sẽ có thông dịch viên Hàn-Việt hỗ trợ.",
    },
    {
      q: "Khi làm việc tại Hàn có yêu cầu Tiếng Anh không?",
      a: "Không yêu cầu, tuy nhiên có tiếng Anh cơ bản sẽ giúp bạn dễ dàng trao đổi công việc và thực hiện các sinh hoạt khác tại Hàn Quốc.",
    },
    {
      q: "Ứng tuyển K-Tech College 2025 có mất phí không?",
      a: "Ứng viên ứng tuyển K-Tech College 2025 hoàn toàn miễn phí. Chương trình cam kết không phát sinh thêm bất cứ chi phí nào khác trong suốt quá trình ứng tuyển.",
    },
  ];

  return (
    <section className="leading-relaxed py-[40px] md:py-[80px]" id="faqs">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="space-y-3 text-center">
            <h2 className="text-xl md:text-5xl font-bold md:leading-[62px]">
              Các câu hỏi thường gặp <br />
              về dự án K-Tech College 2025
            </h2>
          </div>
          <div className="mt-8 md:mt-14 max-w-[740px] mx-auto">
            {faqsList.map((item, idx) => (
              <FaqsCard key={idx} idx={idx} faqsList={item} />
            ))}
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
