import React from 'react'
import "./_sporcularCard.scss"
import { calculateAge, dogumTarihiHesapla } from '../../Helpers/ageHelper'
import { useNavigate } from 'react-router'
const SporcularCard = (sporcu) => {
    console.log("deneme sporcu", sporcu)

    const navigate = useNavigate();

    const navigateToProfilePage = (oyuncuId) => {
        console.log(oyuncuId);
        navigate(`/profil/${oyuncuId}`);
    };
    return (


        <div className="pc_container pc_background1" onClick={() => navigateToProfilePage(sporcu.sporcu.id)}>
            <div className="pc_header d-flex img-fluid">
                <img
                    src={"https://apipanel.performa.nz/api/Dosyalar/GetDosyaWithFkId/" +sporcu.sporcu.id}
                    alt="Federico Valverde" />
                <p className='pc_text1'>OM</p>
            </div>
            <div className="pc_name pc_background2">
                <p className='pc_text2'> {sporcu.sporcu.ad + " " + sporcu.sporcu.soyad}</p>
            </div>
            <div className="pc_footer">
                <div className="pc_uyruk d-flex justify-content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/945px-Flag_of_Uruguay.svg.png" alt="Uruguay" />
                    <p className='pc_text1'>Uruguay</p>
                </div>
                <div className="pc_yas_container d-flex justify-content-center">
                    <p className='pc_yas me-2 pc_text1'><b>{calculateAge(sporcu.sporcu.dogumTarihi)}</b></p>
                    <p className='pc_yas_tarih pc_text1'>{dogumTarihiHesapla(sporcu.sporcu.dogumTarihi)}</p>
                </div>

            </div>

        </div>
    )
}

export default SporcularCard