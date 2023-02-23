import React, { useEffect, useState, useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { useCart } from '../Component/Cart';
import { useDispatchCart } from '../Component/Cart';
import { BsArrowRight, BsPlusCircleDotted, BsDashCircleDotted, BsQuestionCircle } from 'react-icons/bs'
function CheckOut() {
      const { register, formState: { errors }, handleSubmit } = useForm();
      const dispatch = useDispatchCart()
      const items = useCart()
      const totalPrice = useMemo(() => {
            const total = items.reduce((total, item) => total + (item.price * item.CartQuantity), 0)
            return total
      }, [items])
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
      const numberWithComas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const onSubmit = (data) => console.log(data);
      var citis = document.getElementById("city");
      var districts = document.getElementById("district");
      var wards = document.getElementById("ward");
      var Parameter = {
            url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
            method: "GET",
            responseType: "application/json",
      };
      var promise = axios(Parameter);
      promise.then(function (result) {
            renderCity(result.data);
      });

      function renderCity(data) {
            for (const x of data) {
                  citis.options[citis.options.length] = new Option(x.Name, x.Id);
            }
            citis.onchange = function () {
                  district.length = 1;
                  ward.length = 1;
                  if (this.value != "") {
                        const result = data.filter(n => n.Id === this.value);

                        for (const k of result[0].Districts) {
                              district.options[district.options.length] = new Option(k.Name, k.Id);
                        }
                  }
            };
            district.onchange = function () {
                  ward.length = 1;
                  const dataCity = data.filter((n) => n.Id === citis.value);
                  if (this.value != "") {
                        const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

                        for (const w of dataWards) {
                              wards.options[wards.options.length] = new Option(w.Name, w.Id);
                        }
                  }
            };
      }
      return (
            <div className='flex flex-wrap justify-between'>
                  <div className='w-[48%] bg-[#f8f7f4]'>
                        <div className='text-center'>
                              <span className='font-[700] py-[50px] text-[20px] block'>THÔNG TIN KHÁCH HÀNG</span>
                        </div>
                        <div>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='flex justify-center relative'>
                                          {errors.mail && <p role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.mail?.message}</p>}
                                          <input
                                                placeholder='Email'
                                                className='w-[83%] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]'
                                                {...register("mail", { required: "*Email Address is required*" })}
                                                aria-invalid={errors.mail ? "true" : "false"}
                                          />
                                    </div>
                                    <div className='flex justify-center relative'>
                                          {errors.name && <p role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.name?.message}</p>}
                                          <input
                                                placeholder='Họ tên'
                                                className='w-[40%] mr-[10px] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]'
                                                {...register("name", { required: "*First name is required*" })}
                                                aria-invalid={errors.name ? "true" : "false"}
                                          />

                                          {errors.phone && <p role="alert" className='absolute top-[-10px] text-[12px] text-red-600 right-[240px]'>{errors.phone?.message}</p>}
                                          <input
                                                placeholder='Số điện thoại'
                                                className='w-[40%] ml-[10px] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]'
                                                {...register("phone", { required: "*Phone is required*" })}
                                                aria-invalid={errors.phone ? "true" : "false"}
                                          />
                                    </div>
                                    <div className='flex justify-center relative'>
                                          {errors.address && <p role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.address?.message}</p>}
                                          <input
                                                placeholder='Địa chỉ nhận hàng'
                                                className='w-[83%] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]'
                                                {...register("address", { required: "*Address is required*" })}
                                                aria-invalid={errors.address ? "true" : "false"}
                                          />
                                    </div>
                                    <div className='flex justify-center relative'>
                                          {errors.city && <span role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.city?.message}</span>}
                                          <select
                                                className="w-[83%] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]"
                                                id="city"
                                                name="city"
                                                aria-label=".form-select-sm"
                                                {...register("city", { required: '*City is required*' })}
                                          >
                                                <option value="">Chọn tỉnh / thành</option>
                                          </select>
                                    </div>
                                    <div className='flex justify-center relative'>
                                          {errors.district && <span role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.district?.message}</span>}
                                          <select
                                                className="w-[83%] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]"
                                                id="district"
                                                name="district"
                                                aria-label=".form-select-sm"
                                                {...register("district", { required: '*District is required*' })}
                                          >
                                                <option value="">Chọn quận huyện</option>
                                          </select>
                                    </div>
                                    <div className='flex justify-center relative'>
                                          {errors.ward && <span role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.ward?.message}</span>}
                                          <select
                                                className="w-[83%] my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]"
                                                id="ward"
                                                name="ward"
                                                aria-label=".form-select-sm"
                                                {...register("ward", { required: '*Ward is required*' })}
                                          >
                                                <option value="">Chọn phường xã</option>
                                          </select>
                                    </div>
                                    <div className='flex justify-center relative '>
                                          {errors.note && <span role="alert" className='absolute top-[-10px] text-[12px] text-red-600 left-[63px]'>{errors.note?.message}</span>}
                                          <textarea
                                                className='my-[15px] w-[83%] h-[150px] pt-[15px] text-[14px] pl-[15px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4]'
                                                placeholder='Nhập ghi chú nếu cần'
                                                {...register("note", { required: '*Note is required*' })}
                                          >
                                          </textarea>
                                    </div>
                                    <div className='font-[500] text-[14px] flex justify-center pt-[25px] pb-[70px]'>*Phương thức vận chuyển là <span className='text-[#53C66E] font-[700] px-[5px]'> FREESHIP </span> với đơn hàng từ 700.000đ</div>
                                    <div className='max-w-[83%] my-0 mx-auto border-[1px] border-[#12121326] border-solid'>
                                          <div className='flex justify-between w-full'>
                                                <div className='flex justify-between  focus:ring focus:ring-violet-300 cursor-pointer w-[50%] p-[20px]'>
                                                      <span className='text-[14px] w-[70%]'><input  {...register("transfer")} type="radio" value="1" /> Trả tiền mặt khi nhận hàng</span>
                                                      <img className='w-[40px] h-[40px]' src='https://curnonwatch.com/_next/static/media/cod.07bcde3a.png' />
                                                </div>
                                                <div className='flex justify-between w-[50%] p-[20px]'>
                                                      <span className='text-[14px] '><input {...register("transfer")} type="radio" value="2"/>  Trả qua MOMO</span>
                                                      <img className='w-[40px] h-[40px]' src='https://curnonwatch.com/_next/static/media/momo.52530cae.png' />
                                                </div>
                                          </div>
                                          <div className='flex justify-between w-full'>
                                                <div className='flex justify-between w-[50%] p-[20px]'>
                                                      <span className='text-[14px] '><input {...register("transfer")} type="radio" value="3"/>  Trả qua VNPAY</span>
                                                      <img className='w-[40px] h-[40px]' src='https://curnonwatch.com/_next/static/media/vnpay.48dba95e.png' />
                                                </div>
                                                <div className='flex justify-between w-[50%] p-[20px]'>
                                                      <span className='text-[14px] '><input {...register("transfer")} type="radio" value="4"/>  Chuyển khoản</span>
                                                      <img className='w-[40px] h-[40px]' src='https://curnonwatch.com/_next/static/media/banking.ec3bf469.png' />
                                                </div>
                                          </div>
                                          <div className='flex justify-between w-full'>
                                                <div className='flex justify-between w-[50%] p-[20px]'>
                                                      <span className='text-[14px] '><input {...register("transfer")} type="radio" value="5"/>  Trả qua ShoppePay</span>
                                                      <img className='w-[40px] h-[40px]' src='https://curnonwatch.com/_next/static/media/shopeePay.2ac0330e.jpg' />
                                                </div>
                                                <div className='flex justify-between w-[50%] p-[20px]'>
                                                      <div>
                                                            <span className='text-[14px] '><input {...register("transfer")} type="radio" value="6"/>  Fundiin <span className='inline-block'><BsQuestionCircle></BsQuestionCircle></span></span>
                                                            <span className='block'>Trả sau 3 kỳ miễn lãi</span>
                                                      </div>
                                                      <img className='w-[40px] h-[40px]' src='https://curnonwatch.com/_next/static/media/fundiin.2414d9e4.png' />
                                                </div>
                                          </div>
                                    </div>
                                    <div className='flex justify-center relative'>
                                          <button className='flex items-center justify-center text-[14px] text-[#fff]  h-[58px] bg-[#53c66e] px-[22px] w-[50%] rounded-[10px]'> TIẾP TỤC  <span className='pl-[5px]'><BsArrowRight></BsArrowRight></span></button>
                                    </div>
                              </form>
                        </div>
                  </div>
                  <div className='w-[44%] my-0 mx-auto'>
                        <div>
                              <div>
                                    <div className='h-[1000px] '>

                                          <div>
                                                <div className='pt-[50px] flex justify-between pb-[30px]'>
                                                      <span className=' text-[20px] font-[700]'>ĐƠN HÀNG</span>
                                                      <span className='text-[14px]  font-[400] italic underline'>Sửa</span>
                                                </div>
                                                <div className='overflow-y-scroll h-[300px]'>
                                                      {
                                                            items.map(item => (
                                                                  <div className='border-y-[1px] flex justify-between border-[#2b334126] py-[20px]'>
                                                                        <div className='flex py-[20px]'>
                                                                              <div>
                                                                                    <img className='w-[65px]' src={item.image} />
                                                                              </div>
                                                                              <div className='pl-[20px] text-[14px]  text-[#161a21]'>
                                                                                    <span>
                                                                                          {item.name}
                                                                                    </span>
                                                                                    <span className='block pb-[6px] pt-[4px] text-[12px]'>
                                                                                          {item.size} MM
                                                                                    </span>
                                                                                    <div className='flex'>
                                                                                          <button type='button' onClick={() => handleChangeQuantity('minus', item.id)}><BsDashCircleDotted></BsDashCircleDotted></button>
                                                                                          <p className=' px-[5px] text-[12px]'>Qty : {item.CartQuantity}</p>
                                                                                          <button type='button' onClick={() => handleChangeQuantity('add', item.id)}><BsPlusCircleDotted></BsPlusCircleDotted></button>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className='flex items-center text-[14px] text-[#161a21] font-[500]'>
                                                                              <span>{numberWithComas(item.sale)} đ</span>
                                                                        </div>
                                                                  </div>
                                                            ))
                                                      }
                                                </div>
                                                <div className='border-y-[1px] py-[20px] border-[#2b334126]'>
                                                      <form onSubmit={handleSubmit(onSubmit)}>
                                                            <div className='flex justify-center '>
                                                                  <input
                                                                        placeholder='Nhập mã khuyến mãi'
                                                                        className='w-full my-[15px] text-[14px] h-[50px] border-[1px] border-[#12121326] border-solid bg-[#f8f7f4] pl-[10px]'
                                                                        {...register("code")}
                                                                        aria-invalid={errors.code ? "true" : "false"}
                                                                  />

                                                            </div>
                                                      </form>
                                                </div>
                                                <div className='text-[14px] py-[20px] border-b-[1px] border-[#2b334126]'>
                                                      <div className='flex justify-between pb-[20px]'>
                                                            <span>Thành tiền</span>
                                                            <span className='font-[700]'>{numberWithComas(totalPrice)} đ</span>
                                                      </div>
                                                      <div className='flex justify-between pb-[20px]'>
                                                            <span>Mã giảm giá</span>
                                                            <span className='font-[700] text-red-600'>0 đ</span>
                                                      </div>
                                                      <div className='flex justify-between pb-[20px]'>
                                                            <span>Phí ship</span>
                                                            <span className='font-[700]'>0 đ</span>
                                                      </div>
                                                </div>
                                                <div className='text-[15px] py-[20px]'>
                                                      <div className='flex justify-between'>
                                                            <span className=''>TỔNG : </span>
                                                            <span className='text-[20px] font-[700]'>{numberWithComas(totalPrice)} đ</span>
                                                      </div>
                                                      <div className='text-[14px] pt-[20px] text-[rgba(0,0,0,.6)] flex justify-between'>
                                                            <span>(Đã bao gồm VAT)</span>
                                                            <span className=''>hoặc 833.000 đ x 3 kỳ với <span className='text-[#73c4f7]'>Fundin</span></span>
                                                      </div>
                                                </div>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CheckOut