import { Gallery4, Gallery4Props } from "@/components/gallery4";
import React from "react";

const demoData: Gallery4Props = {
  title: "Projects",
  description:
    "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items: [
    {
      id: "hs-connect",
      title: "HS Connect: Unified Digital Workspace Platform",
      description:
        "Khám phá nền tảng kết nối doanh nghiệp all-in-one của chúng tôi, tích hợp CRM, ERP và công cụ collaboration vào một giao diện duy nhất, giúp tăng 40% hiệu suất làm việc và hợp lý hóa quy trình vận hành.",
      href: "https://connect.hsdigital.com",
      image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "aix-dashboard",
      title: "HS AIDashboard: AI-Powered Business Intelligence",
      description:
        "Hệ thống dashboard thông minh ứng dụng AI để phân tích dữ liệu thời gian thực, dự báo xu hướng và đưa ra insights hành động, giúp nhà quản trị đưa ra quyết định dựa trên dữ liệu chính xác.",
      href: "https://ai.hsdigital.com",
      image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "cloud-secure",
      title: "HS CloudSecure: Next-Gen Cybersecurity Suite",
      description:
        "Bộ giải pháp bảo mật đám mây toàn diện, sử dụng machine learning để phát hiện và phản ứng với các mối đe dọa zero-day, bảo vệ dữ liệu quan trọng của doanh nghiệp 24/7.",
      href: "https://cloudsecure.hsdigital.com",
      image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "omni-channel",
      title: "HS OmniChannel: Customer Engagement Platform",
      description:
        "Nền tảng tiếp thị và chăm sóc khách hàng đa kênh, giúp doanh nghiệp cá nhân hóa trải nghiệm khách hàng trên mọi điểm chạm từ website, mobile app, đến social media và email.",
      href: "https://omnichannel.hsdigital.com",
      image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "iot-suite",
      title: "HS IoT Suite: Smart Industrial Automation",
      description:
        "Giải pháp công nghiệp 4.0 kết nối thiết bị, cảm biến và dữ liệu sản xuất vào một nền tảng thống nhất, tối ưu hóa hiệu suất vận hành và bảo trì dự đoán cho nhà máy thông minh.",
      href: "https://iot.hsdigital.com",
      image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
    },
  ],
};

function LeadershipSection() {
  return (
    <>
      <section
        className={`
              relative w-full flex items-center justify-center text-white
              h-[100vh]
              bg-[url('https://www.hsenterprise.co.kr/img/business-bg.webp')] bg-cover bg-center bg-no-repeat
              transition-all duration-1000
            `}
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
        }}
      >
        {/* Section background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <Gallery4 {...demoData} />;
        </div>
      </section>
    </>
  );
}

export default LeadershipSection;
