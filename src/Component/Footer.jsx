import React from "react";
import Slider from "react-slick";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Footer() {
      const settings = {
            infinite: true,
            autoplaySpeed: 3000,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true
      };
      return (
            <div className="pt-[100px]">
                  <div>
                        <div className="text-center">
                              <h2 className="text-[32px] leading-[32px] mb-[16px]">BE PART OF CURNON</h2>
                              <p className="text-[14px] mb-[48px]">Ai nói bạn không thể lựa chọn gia đình?</p>
                        </div>
                        <Slider {...settings}>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-2.e5d2c534.jpg&w=384&q=100" />
                                    </div>
                              </div>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-10.a42296be.jpg&w=384&q=100" />
                                    </div>
                              </div>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-3.8d3db520.jpg&w=384&q=100" />
                                    </div>
                              </div>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-6.1a5f25da.jpg&w=384&q=100" />
                                    </div>
                              </div>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-1.b981dc6c.jpg&w=384&q=100" />
                                    </div>
                              </div>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-7.f9fb90f8.jpg&w=384&q=100" />
                                    </div>
                              </div>
                              <div className="px-1">
                                    <div>
                                          <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground.63859f6f.jpg&w=384&q=100" />
                                    </div>
                              </div>
                        </Slider>
                  </div>
                  <div className="flex flex-wrap max-w-[1170px] my-0 mx-auto py-[63px]">
                        <div className="w-1/3">
                              <h6 className="text-[14px] font-[500] leading-[14px] pb-[32px]">
                                    NHẬN THÔNG TIN MỚI NHẤT TỪ CURNON
                              </h6>
                              <div>
                                    <form>
                                          <div className="flex items-end w-full mb-[12px]">
                                                <select className="bg-#f8f7f4 outline-none border-solid border-2 border-gray-200  p-[13px] text-[14px] w-[30%]">
                                                      <option>Giới tính</option>
                                                      <option value="Male">Male</option>
                                                      <option value="Female">Female</option>
                                                </select>
                                                <input className="bg-#f8f7f4 w-[70%] outline-none border-solid border-2 border-gray-200  p-[13px] text-[14px] w-full ml-2" placeholder="Họ tên..." />
                                          </div>
                                          <input className="bg-#f8f7f4 mb-[20px] outline-none border-solid border-2 border-gray-200  p-[13px] text-[14px] w-full" placeholder="Email..." />
                                          <button className="w-full py-[18px] bg-[#161a21] opacity-50 text-white font-[500] text-[14px]">ĐĂNG KÍ NGAY</button>
                                    </form>
                              </div>
                        </div>
                        <div className="w-1/3 pl-[9.9%]">
                              <h6 className="text-[14px] font-[500] leading-[14px] pb-[25px]">
                                    LIÊN LẠC
                              </h6>
                              <div>
                                    <span className="text-[14px] mb-[10px] inline-block">
                                          Email : cskh@curnonwatch.com
                                    </span>
                                    <span className=" text-[14px] inline-block">
                                          Sdt : 0868889103
                                    </span>

                              </div>
                              <div>
                                    <span className="w-[40px] h-[40px] bg-black text-white text-[18px] flex items-center justify-center rounded-[50%] my-[20px]">
                                          <FaFacebookF></FaFacebookF>
                                    </span>
                                    <span className="w-[40px] h-[40px] bg-black text-white text-[18px] flex items-center justify-center rounded-[50%] my-[20px]">
                                          <FaInstagram></FaInstagram>
                                    </span>
                                    <span className="w-[40px] h-[40px] bg-black text-white text-[18px] flex items-center justify-center rounded-[50%] my-[20px]">
                                          <FaYoutube></FaYoutube>
                                    </span>
                              </div>
                              <div className="flex pt-[50px] justify-between">
                                    <img className="max-w-[50px]" src="https://curnonwatch.com/_next/static/media/cod.10bcbd91.png" />
                                    <img className="max-w-[50px]" src="https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png" />
                                    <img className="max-w-[50px]" src="https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png" />
                                    <img className="max-w-[50px]" src="https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png" />
                              </div>
                        </div>
                        <div className="w-1/3 pl-[70px]">
                              <h6 className="text-[14px] font-[500] leading-[14px] pb-[32px]">
                                    NHẬN THÔNG TIN MỚI NHẤT TỪ CURNON
                              </h6>
                              <div>
                                    <ul>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">33 Hàm Long, Hoàn Kiếm.</li>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">9 B7 Phạm Ngọc Thạch, Đống Đa.</li>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">173C Kim Mã, Ba Đình.</li>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">82 Cầu Giấy, Quan Hoa, Cầu Giấy.</li>
                                    </ul>
                              </div>
                              <h6 className="text-[14px] font-[500] leading-[14px] pb-[32px] pt-[20px]">
                                    TP.HCM STORES
                              </h6>
                              <div>
                                    <ul>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">25 Nguyễn Trãi, P.Bến Thành, Quận 1.</li>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">348 Lê Văn Sỹ, Phường 14, Quận 3.</li>
                                          <li className="text-[14px] pb-[22px] leading-[14px]">349 Quang Trung, Phường 10, Quận Gò Vấp.</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
                  <div className="bg-[#ECEBEA] container py-[25px] px-[16px]">
                        <div className="flex justify-between max-w-[1170px] my-0 mx-auto">
                              <div>
                                    <span className="mr-[50px] text-[15px]">
                                          ĐỒNG HỒ NAM
                                    </span>
                                    <span className="mr-[50px] text-[15px]">
                                          ĐỒNG HỒ NỮ
                                    </span>
                                    <ClipLoader
                                          color="#36d7b7"
                                          loading={true}
                                          size={25}
                                    />
                              </div>
                              <div>
                                    <span className="mr-[50px] text-[15px]">Chính sách vận chuyển</span>
                                    <span className="mr-[50px] text-[15px]">Đổi trả & Bảo hành</span>
                              </div>

                        </div>
                  </div>
                  <div className="max-w-[1170px] my-0 mx-auto flex justify-between py-[40px]">
                        <div className="w-[50%]">
                              <h6 className="text-[14px] font-[500]">
                              © 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT
                              </h6>
                              <p className="py-[16px] text-[12px] leading-5">
                              Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội
                              </p>
                        </div>
                        <div>
                              <img src="https://curnonwatch.com/_next/static/media/certificate.e07e4993.png" />
                        </div>
                  </div>
            </div>
      );
}

export default Footer