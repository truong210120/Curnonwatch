import React, { useState, useEffect } from 'react'
import { WatchMan } from '../Data/Data';
import { useParams } from "react-router";
import { BsStar, BsBookmarkStarFill, BsTruck, BsShieldCheck, BsBoxSeam, BsArrowRight } from 'react-icons/bs'
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import {Link} from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import { useDispatchCart } from '../Component/Cart';
function DetailProduct({item}) {
      const dispatch = useDispatchCart()
      const [product, setProduct] = useState();
      const { id } = useParams()
      const [img, setImg] = useState(null);

      useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const product = WatchMan.find(item => item.id == id)
            setProduct(product)
            setImg(product.images[0])
      }, [])
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const numberWithComas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const handleChangeImg = (img) => {
            setImg(img)
      }
      const addToCart =(item)=>{
            item.CartQuantity = 1
            dispatch({type : "ADD",item})
            
      }
      return (
            <div>
                  <div className='bg-[#E6E7E7] z-10 flex pt-[100px]'>
                        <div className=' max-w-[1170px] my-0 mx-auto flex'>
                              <div className=' pb-[100px] flex  pt-[100px]'>
                                    <div>
                                          {
                                                WatchMan.map((item) => {
                                                      return item.id != id ? '' : item.images.map(item => (
                                                            <div>
                                                                  <div className='w-[70px] h-[70px] mb-[30px] mr-[50px]'>
                                                                        <img className='rounded-[50%]  bg-[#fff]' onClick={() => handleChangeImg(item)} src={item} />
                                                                  </div>
                                                            </div>
                                                      ))
                                                })

                                          }
                                    </div>
                                    <div className='w-[562px] mx-[30px]' >
                                          <img className='w-full object-center' src={img} />
                                    </div>

                              </div>
                              <div className='ml-[50px]'>
                                    {
                                          WatchMan.map(item => {
                                                return item.id != id ? '' : (<div className='text-center'>
                                                      <span className='text-[#B5B5B5] text-[14px] leading-[14px]'>{item.brand}</span>
                                                      <p className='text-[32px] pt-[12px] pb-[24px]'>{item.name}</p>
                                                      <div className='flex justify-center pb-[20px]'>
                                                            <span className='pt-[15px] font-[700] pr-[15px]' >{numberWithComas(item.price)} đ</span>
                                                            <span className='text-[10px] text-gray-500'><BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar></span>
                                                      </div>
                                                      <span className='text-[14px] text-[rgba(22,26,33,.6)]'>hoặc </span>
                                                      <span className='text-[#161a21] text-[14px]'>800.000 đ x 3 kỳ <span className='text-[14px] text-[rgba(22,26,33,.6)]'> với </span> <span className='text-[#12a3ff]'>Fundiin</span></span>
                                                      <div className='flex justify-between py-[30px]'>
                                                            <div className='text-[14px]'>
                                                                  <span>Tình trạng : </span>
                                                                  {
                                                                        item.quantity == 0 ? (<span className='text-[#D30B0B]'> Hết hàng</span>) : (<span className='text-[#3BB100]'> Còn hàng</span>)
                                                                  }
                                                                  
                                                            </div>
                                                            <div className='top-[50%] left-[50%]'>
                                                                  <button className='flex text-[14px] items-center' onClick={handleShow}>
                                                                        <span><BsBookmarkStarFill></BsBookmarkStarFill></span>
                                                                        <span className='pl-[5px] underline italic'> Cỡ cổ tay</span>
                                                                  </button>

                                                                  <Modal show={show} onHide={handleClose} size="lg" className='mt-[10%]' animation={false}>
                                                                        <div className='grid grid-cols-2'>
                                                                              <div className='p-[24px] mx-[20px]'>
                                                                                    <h3 className='text-[20px] font-[500]'>MẶT ĐỒNG HỒ</h3>
                                                                                    <h5 className='pt-[12px] text-[14px] text-[#161a21]'>ĐỐI CHIỀU VỚI CHU VI CỔ TAY</h5>
                                                                                    <div className='flex py-[32px] pl-[20px justify-between'>
                                                                                          <div className=''>
                                                                                                <span className='text-[14px] font-[700]'>Đồng hồ</span>
                                                                                                <ul className='text-[14px]'>
                                                                                                      <li className=' py-[10px]'>Kashmir 40mm</li>
                                                                                                      <li className=' py-[10px]'>Weimar 40mm</li>
                                                                                                      <li className=' py-[10px]'>Jackson 40mm</li>
                                                                                                      <li className=' py-[10px]'>Detroit 40mm</li>
                                                                                                      <li className=' py-[10px]'>Colosseum 42mm</li>
                                                                                                      <li className=' py-[10px]'>Whitesands 38mm</li>
                                                                                                      <li className=' py-[10px]'>Futura 40mm</li>
                                                                                                </ul>
                                                                                          </div>
                                                                                          <div>
                                                                                                <span className='text-[14px] font-[700]'>Cổ tay</span>
                                                                                                <ul className='text-[14px]'>
                                                                                                      <li className='py-[10px]'>15,5-17,5cm</li>
                                                                                                      <li className='py-[10px]'>16-17,5cm</li>
                                                                                                      <li className='py-[10px]'>16-17,5cm</li>
                                                                                                      <li className='py-[10px]'>16-18cm</li>
                                                                                                      <li className='py-[10px]'>16-18cm</li>
                                                                                                      <li className='py-[10px]'>14,5-17cm</li>
                                                                                                      <li className='py-[10px]'>16-18cm</li>
                                                                                                </ul>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <div>
                                                                                    <img className='w-full h-full rounded-r-lg' src='https://curnonwatch.com/_next/static/media/pic-02.e2d7363f.jpg' />
                                                                              </div>
                                                                        </div>

                                                                  </Modal>
                                                            </div>
                                                      </div>
                                                      <Link to={'/checkout'}>
                                                            <button className='w-full py-[20px] bg-[#53c66e] text-[#fff] text-[14px] font-[700] mb-[20px]'>THANH TOÁN NGAY</button>
                                                      </Link>
                                                      <button onClick={()=> addToCart(item)} className='w-full py-[20px] border-solid border-2 border-black  text-[#000] text-[14px] font-[700] mb-[20px]'>THÊM VÀO GIỎ </button>
                                                </div>)
                                          })
                                    }
                              </div>
                        </div>
                  </div>
                  <div className='transfer bg-[#999896] flex flex-wrap  px-10 text-center'>
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
                  <div className='max-w-[1170px] my-0 mx-auto pt-[100px]'>
                        <Tabs
                              defaultActiveKey="infor"
                              id="uncontrolled-tab-example"
                              className="mb-3 gap-16 border-solid border-b-[1px] border-[#999] "
                              
                        >
                              <Tab eventKey="infor" title="THÔNG TIN SẢN PHẨM" >
                                    <div className='grid grid-cols-2 gap-5'>
                                          <div>
                                                <p>
                                                      Đồng hồ nam Curnon Weimar Heinz có thiết kế mặt đen nổi bật trên nền kim loại bạc, mang đến nét hiện đại; Dây kim loại, Mặt kính Sapphire chống xước; Chống nước 3ATM...
                                                </p>
                                          </div>
                                          <div className='flex justify-between gap-4'>
                                                <div className='text-[14px]'>
                                                      <ul>
                                                            <li>Kích thước mặt</li>
                                                            <li>Độ dày</li>
                                                            <li>Màu mặt</li>
                                                            <li>Loại máy</li>
                                                            <li>Kích cỡ dây</li>
                                                            <li>Mặt kính</li>
                                                            <li>Chất liệu dây</li>
                                                      </ul>
                                                </div>
                                                <div>
                                                      {
                                                            product ? (<ul>
                                                                  <li>{product.size} MM</li>
                                                                  <li>{product.thickness} MM</li>
                                                                  <li>{product.colorEye}</li>
                                                                  <li>{product.typeMachine}</li>
                                                                  <li>{product.sizeWire} MM</li>
                                                                  <li>{product.typeFont}</li>
                                                                  <li>{product.typeWire}</li>
                                                            </ul>) : ''
                                                      }

                                                </div>
                                          </div>
                                    </div>
                              </Tab>
                              <Tab eventKey="transfer" title="CHÍNH SÁCH VẬN CHUYỂN">
                                    <div className='text-[14px]'>
                                          <li>
                                                Phí vận chuyển :
                                          </li>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- MIỄN PHÍ VẬN CHUYỂN </span> với đơn hàng từ 700,000đ trở lên</p>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>-  30,000đ </span> với đơn hàng có giá trị thấp hơn 700,000đ</p>
                                          <li>
                                                Thời gian vận chuyển:
                                          </li>
                                          <p className='pl-[20px] py-[4px]'> - Nội thành Hà Nội: 1-2 ngày</p>
                                          <p className='pl-[20px] py-[4px]'> - Miền Trung: 3-5 ngày</p>
                                          <p className='pl-[20px] py-[4px]'> - Miền Nam: 5-7 ngày</p>
                                    </div>
                              </Tab>
                              <Tab eventKey="warranty" title="ĐỔI TRẢ & BẢO HÀNH" >
                              <div className='text-[14px]'>
                                          <li>
                                                Chính sách đổi trả:
                                          </li>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- 1 ĐỔI 1 </span> trong vòng 3 ngày kể từ khi nhận hàng (kèm theo các điều kiện)</p>
                                          
                                          <li>
                                                Chính sách bảo hành:
                                          </li>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- BẢO HÀNH 10 NĂM  </span> đối với những lỗi từ nhà sản xuất</p>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- BẢO HÀNH MIỄN PHÍ (1 lần) trong 1 năm đầu tiên </span> với những lỗi người dùng như: vỡ, nứt kính, hấp hơi nước, va đập mạnh, rơi linh kiện bên trong mặt đồng hồ...</p>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- THAY PIN MIỄN PHÍ TRỌN ĐỜI </span></p>
                                    </div>
                              </Tab>
                              <Tab eventKey="payment" title="HÌNH THỨC THANH TOÁN" >
                                    <div className='text-[14px]'>
                                          <p className=''>Curnon chấp nhận các hình thức thanh toán sau:</p>
                                          <p className='font-[600] leading-[21px]'>Trả tiền mặt khi nhận hàng, Ví điện tử Momo, Ví điện tử VNPay, Trả góp theo kỳ hạn qua Fundiin</p>
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/cod.10bcbd91.png' />
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png' />
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png' />
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png' />
                                          <p className='font-[600] leading-[21px]'>Hoặc chuyển khoản ngân hàng qua tài khoản:</p>
                                          <p>Số tài khoản: 0047041024767</p>
                                          <p>Chủ tài khoản: CTCP Phát triển Sản phẩm Sáng Tạo Việt</p>
                                          <p>Tên ngân hàng: Bản Việt (Viet Capital)</p>
                                          <p>Chi nhánh: Hà Nội</p>
                                    </div>
                              </Tab>
                        </Tabs>
                  </div>
            </div>



      )
}

export default DetailProduct