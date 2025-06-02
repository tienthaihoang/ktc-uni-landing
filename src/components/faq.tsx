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
      q: "Em có cần biết tiếng Hàn trước khi đăng ký tham gia chương trình không? Nếu chưa biết thì có được hỗ trợ học không?",
      a: "Chương trình không yêu cầu học viên phải thành thạo tiếng Hàn. Tuy nhiên để tăng khả năng cạnh tranh, học viên nên có một kỹ năng ngoại ngữ để dễ dàng tiếp cận doanh nghiệp.",
    },
    {
      q: "Chương trình có kiểm tra, đánh giá hay thi cuối kỳ không? Kết quả học tập được đánh giá dựa trên tiêu chí nào?",
      a: "Học viên sẽ có thực hành project lớn ở cuối khoá học. Tiêu chí đánh giá sẽ được thông tin chi tiết khi tham gia chính thức vào khoá học.",
    },
    {
      q: "Có yêu cầu nào về điểm số, kỹ năng lập trình hay phỏng vấn để được tham gia chương trình không?",
      a: "Ứng viên tham gia chương trình cần có nền tảng kiến thức lập trình cơ bản. Chúng tôi sẽ đánh giá năng lực dựa vào các dự án ứng viên đã làm, sau đó sẽ có bài coding test và sau cùng là phỏng vấn chuyên sâu.",
    },
    {
      q: "Sau khi hoàn thành chương trình, em có được giới thiệu cơ hội thực tập hoặc việc làm tại Hàn Quốc không?",
      a: "Chúng tôi sẽ hỗ trợ cung cấp các thông tin tuyển dụng (nếu có) cho học viên trong khuôn khổ chương trình K-Tech College 2025. Tuy nhiên điều này không đồng nghĩa với việc cam kết việc làm.",
    },
    {
      q: "Toàn bộ chương trình có được tài trợ không, hay sinh viên phải đóng một phần chi phí?",
      a: "Chương trình là hoàn toàn miễn phí. Ngoài nội dung đào tạo ra, chúng tôi còn hỗ trợ cơm trưa cho các ứng viên khi tham gia khóa học fulltime.",
    },
    {
      q: "Chương trình học có bao gồm thực hành nhóm hoặc làm project không? Nếu có thì làm theo nhóm như thế nào?",
      a: "Trong suốt quá trình học, học viên sẽ được thực hành đa dạng các bài tập khác nhau. Và sẽ có một project lớn được thực hiện theo team và cũng là project cuối khóa của chương trình.",
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
