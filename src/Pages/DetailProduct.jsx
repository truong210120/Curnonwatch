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
                                                            <span className='pt-[15px] font-[700] pr-[15px]' >{numberWithComas(item.price)} ??</span>
                                                            <span className='text-[10px] text-gray-500'><BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar> <BsStar></BsStar></span>
                                                      </div>
                                                      <span className='text-[14px] text-[rgba(22,26,33,.6)]'>ho???c </span>
                                                      <span className='text-[#161a21] text-[14px]'>800.000 ?? x 3 k??? <span className='text-[14px] text-[rgba(22,26,33,.6)]'> v???i </span> <span className='text-[#12a3ff]'>Fundiin</span></span>
                                                      <div className='flex justify-between py-[30px]'>
                                                            <div className='text-[14px]'>
                                                                  <span>T??nh tr???ng : </span>
                                                                  {
                                                                        item.quantity == 0 ? (<span className='text-[#D30B0B]'> H???t h??ng</span>) : (<span className='text-[#3BB100]'> C??n h??ng</span>)
                                                                  }
                                                                  
                                                            </div>
                                                            <div className='top-[50%] left-[50%]'>
                                                                  <button className='flex text-[14px] items-center' onClick={handleShow}>
                                                                        <span><BsBookmarkStarFill></BsBookmarkStarFill></span>
                                                                        <span className='pl-[5px] underline italic'> C??? c??? tay</span>
                                                                  </button>

                                                                  <Modal show={show} onHide={handleClose} size="lg" className='mt-[10%]' animation={false}>
                                                                        <div className='grid grid-cols-2'>
                                                                              <div className='p-[24px] mx-[20px]'>
                                                                                    <h3 className='text-[20px] font-[500]'>M???T ?????NG H???</h3>
                                                                                    <h5 className='pt-[12px] text-[14px] text-[#161a21]'>?????I CHI???U V???I CHU VI C??? TAY</h5>
                                                                                    <div className='flex py-[32px] pl-[20px justify-between'>
                                                                                          <div className=''>
                                                                                                <span className='text-[14px] font-[700]'>?????ng h???</span>
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
                                                                                                <span className='text-[14px] font-[700]'>C??? tay</span>
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
                                                            <button className='w-full py-[20px] bg-[#53c66e] text-[#fff] text-[14px] font-[700] mb-[20px]'>THANH TO??N NGAY</button>
                                                      </Link>
                                                      <button onClick={()=> addToCart(item)} className='w-full py-[20px] border-solid border-2 border-black  text-[#000] text-[14px] font-[700] mb-[20px]'>TH??M V??O GI??? </button>
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
                              <span className='text-[12px] '> FREESHIP ????N H??NG 700K</span>

                        </div>
                        <div className='w-1/3 pt-[17px] mb-4'>
                              <span className='inline-block text-[30px] flex justify-center pb-2'>
                                    <BsShieldCheck></BsShieldCheck>
                              </span>
                              <span className='text-[12px] '> B???O H??NH 10 N??M</span>

                        </div>
                        <div className='w-1/3 pt-[17px] mb-4'>
                              <span className='inline-block text-[30px] flex justify-center pb-2'>
                                    <BsBoxSeam></BsBoxSeam>
                              </span>
                              <span className='text-[12px] '> ?????I TR??? MI???N PH?? TRONG V??NG 3 NG??Y</span>

                        </div>

                  </div>
                  <div className='max-w-[1170px] my-0 mx-auto pt-[100px]'>
                        <Tabs
                              defaultActiveKey="infor"
                              id="uncontrolled-tab-example"
                              className="mb-3 gap-16 border-solid border-b-[1px] border-[#999] "
                              
                        >
                              <Tab eventKey="infor" title="TH??NG TIN S???N PH???M" >
                                    <div className='grid grid-cols-2 gap-5'>
                                          <div>
                                                <p>
                                                      ?????ng h??? nam Curnon Weimar Heinz c?? thi???t k??? m???t ??en n???i b???t tr??n n???n kim lo???i b???c, mang ?????n n??t hi???n ?????i; D??y kim lo???i, M???t k??nh Sapphire ch???ng x?????c; Ch???ng n?????c 3ATM...
                                                </p>
                                          </div>
                                          <div className='flex justify-between gap-4'>
                                                <div className='text-[14px]'>
                                                      <ul>
                                                            <li>K??ch th?????c m???t</li>
                                                            <li>????? d??y</li>
                                                            <li>M??u m???t</li>
                                                            <li>Lo???i m??y</li>
                                                            <li>K??ch c??? d??y</li>
                                                            <li>M???t k??nh</li>
                                                            <li>Ch???t li???u d??y</li>
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
                              <Tab eventKey="transfer" title="CH??NH S??CH V???N CHUY???N">
                                    <div className='text-[14px]'>
                                          <li>
                                                Ph?? v???n chuy???n :
                                          </li>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- MI???N PH?? V???N CHUY???N </span> v???i ????n h??ng t??? 700,000?? tr??? l??n</p>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>-  30,000?? </span> v???i ????n h??ng c?? gi?? tr??? th???p h??n 700,000??</p>
                                          <li>
                                                Th???i gian v???n chuy???n:
                                          </li>
                                          <p className='pl-[20px] py-[4px]'> - N???i th??nh H?? N???i: 1-2 ng??y</p>
                                          <p className='pl-[20px] py-[4px]'> - Mi???n Trung: 3-5 ng??y</p>
                                          <p className='pl-[20px] py-[4px]'> - Mi???n Nam: 5-7 ng??y</p>
                                    </div>
                              </Tab>
                              <Tab eventKey="warranty" title="?????I TR??? & B???O H??NH" >
                              <div className='text-[14px]'>
                                          <li>
                                                Ch??nh s??ch ?????i tr???:
                                          </li>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- 1 ?????I 1 </span> trong v??ng 3 ng??y k??? t??? khi nh???n h??ng (k??m theo c??c ??i???u ki???n)</p>
                                          
                                          <li>
                                                Ch??nh s??ch b???o h??nh:
                                          </li>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- B???O H??NH 10 N??M  </span> ?????i v???i nh???ng l???i t??? nh?? s???n xu???t</p>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- B???O H??NH MI???N PH?? (1 l???n) trong 1 n??m ?????u ti??n </span> v???i nh???ng l???i ng?????i d??ng nh??: v???, n???t k??nh, h???p h??i n?????c, va ?????p m???nh, r??i linh ki???n b??n trong m???t ?????ng h???...</p>
                                          <p className='py-[4px]'><span className='leading-[22px] pl-[20px] font-[700]'>- THAY PIN MI???N PH?? TR???N ?????I </span></p>
                                    </div>
                              </Tab>
                              <Tab eventKey="payment" title="H??NH TH???C THANH TO??N" >
                                    <div className='text-[14px]'>
                                          <p className=''>Curnon ch???p nh???n c??c h??nh th???c thanh to??n sau:</p>
                                          <p className='font-[600] leading-[21px]'>Tr??? ti???n m???t khi nh???n h??ng, V?? ??i???n t??? Momo, V?? ??i???n t??? VNPay, Tr??? g??p theo k??? h???n qua Fundiin</p>
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/cod.10bcbd91.png' />
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png' />
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png' />
                                          <img className='w-[48px]' src='https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png' />
                                          <p className='font-[600] leading-[21px]'>Ho???c chuy???n kho???n ng??n h??ng qua t??i kho???n:</p>
                                          <p>S??? t??i kho???n: 0047041024767</p>
                                          <p>Ch??? t??i kho???n: CTCP Ph??t tri???n S???n ph???m S??ng T???o Vi???t</p>
                                          <p>T??n ng??n h??ng: B???n Vi???t (Viet Capital)</p>
                                          <p>Chi nh??nh: H?? N???i</p>
                                    </div>
                              </Tab>
                        </Tabs>
                  </div>
            </div>



      )
}

export default DetailProduct