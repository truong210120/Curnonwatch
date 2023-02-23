import React from 'react'
import { Link } from 'react-router-dom';
import { WatchMan } from '../Data/Data'
function WomanWatch() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const numberWithComas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return (
            <div className=''>
                  <div className='p-[30px]'>
                        <img className='max-w-full max-h-full object-center object-cover' src='https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2Fwomen.jpg&w=1920&q=75' />
                  </div>
                  <div className='max-w-[1170px] my-0 mx-auto'>
                        <h1 className='text-[32px] leading-[32px] font-[700] pb-[22px] pt-[30px]'>WOMEN'S BEST SELLERS</h1>
                        <div className='flex justify-between text-[16px] text-[#969799]'>
                              <p className='w-[522px]'>Những mẫu đồng hồ nữ được yêu thích nhất bởi các cô gái hiện đại của Curnon. Hãy lựa chọn sản phẩm của riêng bạn trước khi quá muộn.</p>
                              <span className='text-[#555] italic'>{WatchMan.length} trên {WatchMan.length} sản phẩm</span>
                        </div>
                  </div>
                  <div className='flex flex-wrap max-w-[1170px] my-0 mx-auto pt-[70px]'>
                        {
                              WatchMan.map((item, index) => {
                                    return (
                                          <div key={index} className='w-[23%] mx-[11px] group/item shadow my-[10px] hover:shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] ease-in duration-300' >
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
      )
}

export default WomanWatch