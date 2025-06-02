"use client";

import Image from "next/image";
import { useState } from "react";
import ArrowDownIcon from "/public/ArrowDownIcon.svg";
import ArrowUpIcon from "/public/ArrowUpIcon.svg";
import CalendarDotsIcon from "/public/CalendarDotsIcon.svg";
import ClockIcon from "/public/ClockIcon.svg";
import HourglassLowIcon from "/public/HourglassLowIcon.svg";

export default function TrainingProgram() {
  const [expanded, setExpanded] = useState(false);

  const text = [
    {
      icon: HourglassLowIcon,
      title: "THỜI LƯỢNG",
      content: "800h",
    },
    {
      icon: CalendarDotsIcon,
      title: "LỊCH HỌC",
      content: "Thứ 2 - Thứ 6",
    },
    {
      icon: ClockIcon,
      title: "GIỜ HỌC",
      content: (
        <>
          <p className="text-lg md:text-xl font-blod mb-2">Sáng: 9h - 12h</p>
          <p className="text-lg md:text-xl font-blod">Chiều: 13h - 18h</p>
        </>
      ),
    },
  ];

  const schedule = [
    { week: "TUẦN 1", title: "Web Development Basics & React Introduction" },
    { week: "TUẦN 2", title: "Advanced JavaScript & React Fundamentals" },
    { week: "TUẦN 3", title: "React Advanced 1" },
    { week: "TUẦN 4", title: "React Advanced 2 + Introduction to Next.js" },
    { week: "TUẦN 5", title: "Frontend Advanced & State Management" },
    { week: "TUẦN 6", title: "Optimization & Deployment Preparation" },
    { week: "TUẦN 7", title: "Project Finalization & Presentation" },
    { week: "TUẦN 8", title: "Spring Boot Overview & REST API Development" },
    { week: "TUẦN 9", title: "Database & Authentication System Development" },
    { week: "TUẦN 10", title: "Deployment Basics & Hands-on Practice" },
    {
      week: "TUẦN 11",
      title: "Performance Optimization & Deployment Operations",
    },
    { week: "TUẦN 12-14", title: "Full-Stack Team" },
    { week: "TUẦN 15", title: "Final Project Presentation & Feedback" },
  ];

  const shownSchedule = expanded ? schedule : schedule.slice(0, 5);

  return (
    <section className="py-[40px] md:py-[100px]" id="chuong-trinh-dao-tao">
      <div className="container">
        <div className="max-w mx-auto text-center">
          <h2 className="text-xl font-bold sm:text-5xl">
            Chương trình đào tạo
          </h2>
        </div>
        <div className="mt-8 md:mt-[60px] flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex flex-col w-full lg:w-[30%] space-y-2">
            {text.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl bg-[#FCFCFD] p-3 min-h-[100px]"
              >
                <div className="flex-shrink-0 w-[76px] h-[76px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FFF0F1] to-[#E0F0FE]">
                  <Image src={item.icon} alt="icon" width={38} height={38} />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm font-bold text-[#A3A3A3] mb-2">
                    {item.title}
                  </p>
                  <div className="text-lg md:text-xl font-bold">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-[70%] w-full space-y-3">
            {shownSchedule.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center gap-[10px] px-6 py-4 bg-white border rounded-lg text-sm md:text-base"
              >
                <div className="absolute left-0 top-[1px] h-[95%] w-[4px] rounded-l-lg bg-gradient-to-b from-[#ED174C] to-[#006DB8]" />
                <div className="font-bold  whitespace-nowrap min-w-[92px]">
                  {item.week}
                </div>
                <div className="text-[#666666]">{item.title}</div>
              </div>
            ))}

            <button
              className="relative flex items-center gap-[10px] px-6 py-4 border rounded-lg text-sm md:text-base font-bold w-full"
              onClick={() => setExpanded(!expanded)}
            >
              <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-lg bg-gradient-to-b from-[#ED174C] to-[#006DB8]" />
              <div className="whitespace-nowrap text-[#ED174C]">
                {expanded ? "Thu gọn" : "Xem thêm"}
              </div>
              <Image
                src={expanded ? ArrowUpIcon : ArrowDownIcon}
                alt={expanded ? "Thu gọn" : "Xem thêm"}
                width={20}
                height={20}
              />
            </button>

            <p className="text-sm text-[#666666] mt-6">
              *Lưu ý: Nội dung đào tạo có thể thay đổi tùy theo học phần của
              sinh viên và yêu cầu của Nhà Trường.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
