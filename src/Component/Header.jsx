import React, { useMemo, useState } from 'react'
import { BsBagCheck, BsSearch, BsArrowRight, BsTruck, BsPlusCircleDotted, BsDashCircleDotted } from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom'
import { useCart } from './Cart';
import { WatchMan } from '../Data/Data';
import { useDispatchCart } from './Cart';
function Header() {
      const items = useCart()
      localStorage.setItem('item', JSON.stringify(items))
      const dispatch = useDispatchCart()
      const handleRemove = index => {
            dispatch({ type: 'REMOVE', index })
      }
      const handleChangeQuantity = (type, id) => {
            const carts = JSON.parse(localStorage.getItem('item'))
            const index = carts.findIndex(item => item.id == id)
            switch (type) {
                  case 'add':
                        carts[index].CartQuantity++
                        localStorage.setItem('item', JSON.stringify(carts))
                        dispatch({ type: 'CHANGE_QUANTITY', payload: carts })
                        break;

                  case 'minus':
                        if (carts[index].CartQuantity > 1) {
                              carts[index].CartQuantity--
                        } else {
                              carts[index].CartQuantity = 1
                        }
                        localStorage.setItem('item', JSON.stringify(carts))
                        dispatch({ type: 'CHANGE_QUANTITY', payload: carts })
                        break;

                  default:
                        break;
            }
      }
      const [search, setSearch] = useState('')
      const [productSearch, setProductSearch] = useState('')
      const handleSearch = (e) => {
            setSearch(e.target.value)
            const product = WatchMan.filter(item => (item.name === search.toUpperCase()))
            setProductSearch(product)
      }

      const numberWithComas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const [show, setShow] = useState(false);
      const [showSearch, setShowSearch] = useState(false)
      const handleCloseSearch = () => setShowSearch(false);
      const handleShowSearch = () => setShowSearch(true);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const totalPrice = useMemo(() => {
            const total = items.reduce((total, item) => total + (item.price * item.CartQuantity), 0)
            return total
      }, [items])

      return (
            <div className='relative h-[84px] z-20 '>
                  <div className='container fixed  bg-[#F8F7F4] border-b-2 border-[#CACBCA]'>
                        <div className='flex mx-auto px-24  justify-between leading-[82px]  '>
                              <div>
                                    <button className='px-3 h-[100%] text-[14px] text-left leading-[80px]  text-[#5B5E62] cursor-pointer group/item  hover:transition-all  duration-150'>
                                          <Link to={'/man'}>
                                                <span className='h-[100%]'>NAM GIỚI</span>
                                          </Link>
                                    </button>
                                    <Link to={'/woman'}>
                                          <span className='px-3 text-[14px] h-[100%] text-[#5B5E62] cursor-pointer'>
                                                NỮ GIỚI
                                          </span>
                                    </Link>
                                    <span className='px-3 text-[14px] h-[100%] text-[#5B5E62] cursor-pointer'>
                                          VỀ CURNON
                                    </span>
                              </div>
                              <Link to={'/'}>
                                    <img
                                          src='https://curnonwatch.com/_next/static/media/logo.cc5d661a.svg'
                                          className='w-[90px] pt-[15px] h-[70px] object-cover'
                                    ></img>
                              </Link>
                              <div className='flex justify-between'>
                                    <div onClick={handleShow} className='flex items-center'>
                                          <span className='px-3 text-[14px] h-[100%] text-[#5B5E62] cursor-pointer'>
                                                GIỎ HÀNG
                                          </span>
                                          <span className=' text-[18px] pt-[31px] h-[100%] text-[#5B5E62] cursor-pointer '>
                                                <BsBagCheck></BsBagCheck>
                                          </span>
                                          <span className='text-[14px]'> ({items.length})</span>
                                    </div>


                                    <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                                          <Offcanvas.Header className='h-[80px] bg-black
                                          '>
                                                <Offcanvas.Title className='text-[#fff] font-[700]'>GIỎ HÀNG CỦA BẠN</Offcanvas.Title>
                                                <span onClick={handleClose} className='bg-[#fff] cursor-pointer inline-block'><GrClose></GrClose></span>
                                          </Offcanvas.Header>
                                          <Offcanvas.Body>
                                                {
                                                      items.length === 0 ? (<div className='text-center py-[160px] px-[20px]'>
                                                            <p>
                                                                  Hiện đang chưa có sản phẩm nào trong giỏ hàng của bạn.
                                                            </p>
                                                            <button className='bg-black w-full h-[50%] p-[18px] text-[#fff] font-[700] text-[14px] mt-[50px]'>
                                                                  MUA HÀNG NGAY <span className='inline-block'><BsArrowRight></BsArrowRight></span>
                                                            </button>
                                                      </div>) : (<div className=''>
                                                            <p className='text-[11px] font-[500] text-center pb-[10px]'><span className='inline-block pr-[10px]'><BsTruck></BsTruck></span>MIỄN PHÍ VẬN CHUYỂN ĐƠN HÀNG 700K</p>
                                                            <div className='h-[430px] overflow-y-scroll'>
                                                                  {
                                                                        items.map(item => (
                                                                              <div className='flex justify-around py-[20px] items-center'>
                                                                                    <span onClick={handleRemove} className='text-[10px]'><GrClose></GrClose></span>
                                                                                    <div><img className='w-[50px] h-[50px]' src={item.image} /></div>
                                                                                    <div className='text-[14px]'>
                                                                                          <div className='pb-[10px]'>{item.name}</div>
                                                                                          <div>{item.size}</div>
                                                                                    </div>
                                                                                    <div>
                                                                                          <div className='text-[14px] font-[700] pb-[10px]'>{numberWithComas(item.price)}</div>
                                                                                          <div className='flex'>
                                                                                                <button type='button' onClick={() => handleChangeQuantity('minus', item.id)}><BsDashCircleDotted></BsDashCircleDotted></button>
                                                                                                <p className='text-[14px] px-[5px]'>Qty : {item.CartQuantity}</p>
                                                                                                <button type='button' onClick={() => handleChangeQuantity('add', item.id)}><BsPlusCircleDotted></BsPlusCircleDotted></button>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        ))
                                                                  }

                                                            </div>
                                                            <div className='border-t-2 border-[#999]'>
                                                                  <div className='flex justify-between py-[30px]'>
                                                                        <span className='text-[14px]'>Thành tiền : </span>
                                                                        <span className='text-[14px] text-[#ff5e57] font-[700]'>{numberWithComas(totalPrice)}</span>
                                                                  </div>
                                                                  <Link to={'/checkout'}>
                                                                        <button className='bg-[#53c66e] w-full text-[#fff] flex items-center justify-center font-[700] py-[15px]'>Thanh toán ngay <span className='inline-block'><BsArrowRight></BsArrowRight></span></button>
                                                                  </Link>
                                                            </div>
                                                      </div>)
                                                }


                                          </Offcanvas.Body>
                                    </Offcanvas>
                                    <span onClick={handleShowSearch} className='px-10  text-[20px] pt-[27px] h-[100%] text-[#5B5E62] cursor-pointer'>
                                          <BsSearch></BsSearch>
                                    </span>
                                    <Offcanvas show={showSearch} onHide={handleCloseSearch} className='h-auto' placement={'top'}>
                                          <Offcanvas.Header className='flex justify-center'>
                                                <Offcanvas.Title className='text-[#fff] font-[700]'>
                                                      <img
                                                            src='https://curnonwatch.com/_next/static/media/logo.cc5d661a.svg'
                                                            className='w-[90px] pt-[15px] h-[70px] object-cover '
                                                      ></img>
                                                </Offcanvas.Title>

                                          </Offcanvas.Header>
                                          <Offcanvas.Body>
                                                <div className='  max-w-[800px] my-0 mx-auto flex items-center'>
                                                      <input className='w-full py-[10px] outline-none border-b-2 border-[#999]' onChange={handleSearch} placeholder='Nhập từ khoá ...' />
                                                      <span onClick={handleCloseSearch} className='bg-[#fff] cursor-pointer inline-block'><GrClose></GrClose></span>
                                                </div>
                                                <div className='max-w-[800px] my-0 mx-auto flex'>
                                                      {
                                                            productSearch && productSearch.map(item => (
                                                                  <div className='w-[23%] mx-[11px] group/item shadow mt-[20px] border-2 border-[#999] hover:shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] ease-in duration-300' >
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
                                                            ))
                                                      }
                                                </div>
                                          </Offcanvas.Body>
                                    </Offcanvas>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Header
