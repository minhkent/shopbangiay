import React from 'react'

export default function Footer() {
  return (
    <div className="grid">
    <div className="row no-gutters footer">
        <div className=" footer-left col l-4 m-4 c-12" >
            <div className="logo-footer ">
                <img src='https://kingshoes.vn/data/upload/media/cua-hang-giay-sneaker-chinh-giay-uy-tin-nhat-den-king-shoes-authenti-hcm-2-1624430336.png'></img>
            </div>
            <h5>
                THÔNG TIN LIÊN HỆ
            </h5>
            <p>
                KINGSHOES.VN Trang Thông Tin Chính Thức.
            </p>
            <p>
            ⛪ Địa chỉ: 192/2 Nguyễn Thái Bình, Phường 12, Quận Tân Bình, Thành phố Hồ Chí Minh
            </p>
        </div>
        <div className=" footer-center col l-4 m-4 c-12">
             <div className="row no-gutters">
                  <div className="col l-6 m-6 c-12 footer-center-left">  
                      <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                      <a>Chăm sóc khách hàng</a>
                      <a>Thanh toán</a>
                      <a>Hướng dẫn thanh toán</a>
                  </div>
                  <div className="col l-6 m-6 c-12 footer-center-right">  
                      <h5>CHÍNH SÁCH</h5> 
                      <a>Chế độ bảo hành</a>
                      <a>Chính sách đổi hàng</a>
                      <a>Bảo mật thông tin</a>
                      <a>Chính sách giao nhận</a>  
                  </div>
             </div>
             <p>
             Số ĐKKD: 41N8041309 cấp ngày 17/8/2018. Nơi cấp Ủy Ban Nhân Dân Quận Tân Bình. Hộ Kinh Doanh: KINGSHOES. Hotline: 0909.300.746
             </p>
        </div>
        <div className="row no-gutters footer-right col l-4 m-4 c-12">
             <h5>FANPAGE</h5>    
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/epcfWIT_Ais" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </div>
    </div>
</div>
  )
}
