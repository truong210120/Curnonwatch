import React from 'react'
import { BsTruck, BsShieldCheck, BsBoxSeam, BsArrowRight } from 'react-icons/bs'
import { WatchMan } from '../Data/Data'
import { Link } from 'react-router-dom';
function Home() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const numberWithComas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return (

            <>
                  <div className='banner w-full h-full'>
                        <img className='z-10 relative' src='https://cms.curnonwatch.com/uploads/Banner_Homepage_237c7e6d0a.jpeg' ></img>
                        <div className='banner-content absolute top-[30%] left-[24%] z-[11] text-center'>
                              <div className='text-[16px] font-[700] text-[#fff]'>NEW WOMEN COLLECTION</div>
                              <div className='text-[40px] mb-[12px] font-[700] text-[#fff]'>SICILY</div>
                              <div className='text-[16px] mb-[24px] text-[#fff]'>15% OFF</div>
                              <div className='text-[16px] mb-[24px] text-[#fff]'>"TRỌN" NỮ TÍNH</div>
                              <button className='border py-[13px] px-[55px] hover:bg-[#fff]'>
                                    <a className='font-[700] text-[#fff] text-[14px] '>SHOP NOW</a>
                              </button>
                        </div>

                  </div>
                  <div className='transfer bg-[#ECEBEA] flex flex-wrap  px-10 text-center'>
                        <div className='w-1/3 pt-[17px] mb-4'>
                              <span className='inline-block text-[30px] flex justify-center pb-2'>
                                    <BsTruck></BsTruck>
                              </span>
                              <span className='text-[12px] '> FREESHIP ĐƠN HÀNG 700K</span>

                        </div>
                        <div className='w-1/3 pt-[17px] mb-4'>
                              <span className='inline-block text-[30px] flex justify-center pb-2'>
                                    <BsShieldCheck></BsShieldCheck>
                              </span>
                              <span className='text-[12px] '> BẢO HÀNH 10 NĂM</span>

                        </div>
                        <div className='w-1/3 pt-[17px] mb-4'>
                              <span className='inline-block text-[30px] flex justify-center pb-2'>
                                    <BsBoxSeam></BsBoxSeam>
                              </span>
                              <span className='text-[12px] '> ĐỔI TRẢ MIỄN PHÍ TRONG VÒNG 3 NGÀY</span>

                        </div>

                  </div>
                  <div className='categories my-8 flex flex-wrap px-10 justify-center gap-1'>
                        <div className='w-[30%] relative group  flex justify-end flex-col p-4 bg-center h-[260px] bg-cover mb-4 bg-[url("https://cms.curnonwatch.com/uploads/nu_83e94c34eb.jpg")]'>
                              <div className=' text-[#fff] flex '>
                                    <div className='flex  justify-between items-center min-w-full'>
                                          <span className='text-[20px] font-[500]'>ĐỒNG HỒ NAM</span>
                                          <span className='border  flex group-hover:bg-white group-hover:text-black transition duration-150 ease-out hover:ease-in justify-center items-center  rounded-[50%] w-[30px] h-[30px] leading-[30px]'><BsArrowRight></BsArrowRight></span>
                                    </div>
                              </div>
                        </div>
                        <div className='w-[30%] relative group  flex justify-end flex-col p-4 bg-center h-[260px] bg-cover mb-4 bg-[url("https://cms.curnonwatch.com/uploads/nam_ff98c9d171.jpg")]'>
                              <div className=' text-[#fff] flex '>
                                    <div className='flex  justify-between items-center min-w-full'>
                                          <span className='text-[20px] font-[500]'>ĐỒNG HỒ NAM</span>
                                          <span className='border  flex group-hover:bg-white group-hover:text-black transition duration-150 ease-out hover:ease-in justify-center items-center  rounded-[50%] w-[30px] h-[30px] leading-[30px]'><BsArrowRight></BsArrowRight></span>
                                    </div>
                              </div>
                        </div>
                        <div className='w-[30%] relative group  flex justify-end flex-col p-4 bg-center h-[260px] bg-cover mb-4 bg-[url("https://cms.curnonwatch.com/uploads/pk_515e1b9dce.jpg")]'>
                              <div className=' text-[#fff] flex '>
                                    <div className='flex  justify-between items-center min-w-full'>
                                          <span className='text-[20px] font-[500]'>ĐỒNG HỒ NAM</span>
                                          <span className='border  flex group-hover:bg-white group-hover:text-black transition duration-150 ease-out hover:ease-in justify-center items-center  rounded-[50%] w-[30px] h-[30px] leading-[30px]'><BsArrowRight></BsArrowRight></span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='max-w-[1170px] py-[100px] h-[750px] my-0 mx-auto'>
                        <h3 className='text-[32px] text-center font-[300] pb-[20px]'>
                              MEN'S BEST SELLERS
                        </h3>
                        <div className='text-center cursor-pointer'>
                              <a className='pb-[50px] inline-block text-[14px] font-[500]'>XEM TẤT CẢ <span className='pl-[5px] inline-block'><BsArrowRight></BsArrowRight></span></a>
                        </div>
                        <div className='flex flex-wrap justify-center '>
                              {
                                    WatchMan.slice(0, 4).map((item, index) => {
                                          return (
                                                <div className='w-[23%] mx-[11px] group/item shadow  hover:shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] ease-in duration-300' >
                                                      <Link to={`/home/detail-product/${item.id}`}>
                                                            <div className='relative '>
                                                                  <img src={item.image} />
                                                                  <span className='absolute font-[700] ml-[16px] mt-[16px] text-[#fff] p-[8px] leading-[14px] rounded-[100px] bg-[#ff5e57] text-[14px] top-0 left-0'>- {item.discount}%</span>
                                                                  <div className='group/edit invisible group-hover/item:visible  py-[10px] absolute bottom-0 bg-[#d3d0cd] text-center w-full'>
                                                                        <span className='text-[#000] font-[700] text-[14px]'>THÊM VÀO GIỎ</span>
                                                                  </div>
                                                            </div>
                                                      </Link>
                                                      <div>
                                                            <p className='text-center text-[12px] text-[rgba(0,0,0,.6)] leading-[12px] mt-[12px]'>{item.brand}</p>
                                                            <p className='text-center font-[500] text-[14px] leading-[12px] mt-[12px]'>{item.name}</p>
                                                            <div className='text-center mt-[16px] pb-[20px]'>
                                                                  <span className='font-[700] text-[14px] leading-[14px]'>{numberWithComas(item.price)} đ</span>
                                                                  <span className='font-[300] text-[12px] leading-[14px] line-through ml-[8px]'>{item.sale} đ</span>
                                                            </div>
                                                      </div>
                                                </div>

                                          )
                                    })
                              }
                        </div>
                  </div>
                  <div className='max-w-[1170px] pb-[100px] h-[645px] my-0 mx-auto'>
                        <h3 className='text-[32px] text-center font-[300] pb-[20px]'>
                              WOMEN'S BEST SELLERS
                        </h3>
                        <div className='text-center cursor-pointer'>
                              <a className='pb-[50px] inline-block text-[14px] font-[500]'>XEM TẤT CẢ <span className='pl-[5px] inline-block'><BsArrowRight></BsArrowRight></span></a>
                        </div>
                        <div className='flex flex-wrap justify-center'>
                              {
                                    WatchMan.slice(4, 8).map((item, index) => {
                                          return (
                                                <div key={index} className='w-[23%] mx-[11px] group/item shadow  hover:shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] ease-in duration-300' >
                                                      <Link to={`/home/detail-product/${item.id}`}>
                                                      <div className='relative'>
                                                            <img src={item.image} />
                                                            <span className='absolute font-[700] ml-[16px] mt-[16px] text-[#fff] p-[8px] leading-[14px] rounded-[100px] bg-[#ff5e57] text-[14px] top-0 left-0'>- {item.discount}%</span>
                                                            <div className='group/edit group-hover/item:visible invisible py-[10px] absolute bottom-0 bg-[#d3d0cd] text-center w-full'>
                                                                  <span className='text-[#000] font-[700] text-[14px]'>THÊM VÀO GIỎ</span>
                                                            </div>
                                                      </div>
                                                      </Link>
                                                      <div>
                                                            <p className='text-center text-[12px] text-[rgba(0,0,0,.6)] leading-[12px] mt-[12px]'>{item.brand}</p>
                                                            <p className='text-center font-[500] text-[14px] leading-[12px] mt-[12px]'>{item.name}</p>
                                                            <div className='text-center mt-[16px] pb-[20px]'>
                                                                  <span className='font-[700] text-[14px] leading-[14px]'>{numberWithComas(item.price)} đ</span>
                                                                  <span className='font-[300] text-[12px] leading-[14px] line-through ml-[8px]'>{item.sale} đ</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
                  <div>
                        <div className='relative group'>
                              <img src='https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fcms.curnonwatch.com%2Fuploads%2FColo_Featured_Desk_c28ebc846d.jpeg&w=1920&q=100' />
                              <div className='absolute w-full top-0 left-0 pt-[150px] pl-[180px] text-[#fff]'>
                                    <span className='text-[14px] leading-[26px] mr-[15px] text-[#C7C6C4]'>#COLOSSEUM #CURNONWATCH</span>
                                    <h6 className='text-[32px] leading-[32px] mb-[15px] font-[500]'>COLOSSEUM COLLECTION</h6>
                                    <p className='text-[20px] leading-[20px] mb-[15px] tracking-[0.02] text-[#C7C6C4]'>Đại diện cho sự mạnh mẽ và phiêu lưu</p>
                                    <button className='mt-[48px] w-[272px] text-[14px] font-[700] group-hover:bg-[#C7C6C4] group-hover:text-[#000] border py-[13px] px-[55px]' >KHÁM PHÁ NGAY</button>
                              </div>
                        </div>
                  </div>
                  <div className='max-w-[1170px] pt-[100px] my-0 mx-auto'>
                        <div className='text-center'>
                              <div className='flex justify-center pb-[20px]'>
                                    <img className='w-[35px] flex justify-center pt-[15px] h-[100%] object-cover ' src='https://curnonwatch.com/_next/static/media/logo_small.f2cdcd68.svg' />
                              </div>
                              <span className='inline-block pb-[50px] text-[20px]'>THE STORY OF CURNON</span>
                              <p className='text-[14px] leading-[24px] text-[rgba(22,26,33,.6)] w-[700px] my-0 mx-auto pb-[90px] tracking-[0.02]'>
                                    Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành lập Curnon, nhưng ngay từ đầu, chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao hơn, không chỉ dừng lại là một thương hiệu đồng hồ. Chúng tôi muốn mang tới một nguồn cảm hứng, một sự thay đổi về tư duy, về suy nghĩ và chính những cái chúng tôi gọi là trải nghiệm cho người trẻ.
                              </p>
                        </div>
                        <div>
                              <img src='https://curnonwatch.com/_next/static/media/storyLarge.b54806b1.png' />
                        </div>
                  </div>
            </>
      )
}

export default Home