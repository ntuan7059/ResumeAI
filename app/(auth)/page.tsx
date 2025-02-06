"use client";

import Header from "@/components/layout/Header";
import { useUser } from "@clerk/nextjs";
import { ArrowBigUp, AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const user = useUser();

  return (
    <div>
      <Header />
      <section>
        <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
          <h1 className="mt-4 lg:mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Tạo hồ sơ cá nhân với <span className="text-primary-700 max-sm:block">Gemini AI</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
            Tự động xây dựng hồ sơ cá nhân chỉ 1 phút
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
                Bắt đầu
              </span>
            </Link>
            <Link
              href="#learn-more"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-slate-200 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary">
                Đọc thêm
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 md:px-10">
        <h2 className="font-bold text-3xl" id="learn-more">
          Bắt đầu từ đâu?
        </h2>
        <h2 className="text-md text-gray-500">
          Tạo hồ sơ chỉ trong 3 bước
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center md:text-start md:grid-cols-2 lg:grid-cols-3 md:px-24">
          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <AtomIcon className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Tạo template mẫu
            </h2>

            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Bắt đầu từ chọn màu sắc chủ đạo cho hồ sơ của bạn. Hệ thống sẽ
              đảm bảo mọi giao diện và tông màu hợp lý và chuyên nghiệp, đảm bảo
              bạn sẽ ghi điểm trong mắt nhà tuyển dụng.
            </p>
          </div>

          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <Edit className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Cập nhật thông tin cá nhân
            </h2>

            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Nhập thông tin cá nhân, kinh nghiệm làm việc, học vấn và kỹ năng
              vào ô thông tin. Hệ thống trí tuệ nhân tạo sẽ tự động tạo hồ sơ
              cho bạn chỉ trong 1 tíc tắc.
            </p>
          </div>

          <div className="flex flex-col cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300 items-center md:items-start justify-center md:justify-start">
            <Share2 className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Chia sẻ hồ sơ
            </h2>

            <p className="mt-1 text-sm text-gray-600 md:text-justify">
              Sau khi hoàn thành hồ sơ, hệ thống sẽ lưu trữ, bảo mật thông tin
              và tạo một đường dẫn đến hồ sơ của bạn. Bạn có thể cập nhật thông tin
              bất cứ lúc nào, bất cứ nơi đâu và chia sẻ hồ sơ với bạn bè hoặc
              nhà tuyển dụng dễ dàng và tiện lợi.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="#get-started"
            className="inline-block rounded-full bg-primary-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-800 focus:outline-none focus:ring focus:ring-primary-400"
          >
            <div className="flex items-center justify-center">
              <ArrowBigUp className="h-6 w-6 mr-2" />
              Bắt đầu ngay
            </div>
          </Link>
        </div>
      </section>
      <footer className="backdrop-blur-md w-full">
        <div className="w-full mx-auto text-center max-w-screen-xl p-4 flex max-md:flex-col md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <span className="hover:text-primary-500 hover:cursor-pointer">
              ResumeAI™
            </span>
            . All Rights Reserved.
          </span>
          <Link href="https://github.com/Mahmud0808" className="me-4 md:me-6">
            <span className="hover:text-primary-500 mt-3 text-sm font-medium text-gray-500 sm:mt-0">
              Xây dựng bởi Nguyễn Mạnh Tuấn
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default page;
