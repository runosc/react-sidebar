export function calculateAge(dogumTarihi) {
    if (dogumTarihi == null) {
      return "xxx"
    }
    const myArray = dogumTarihi.split("-", 3);
    var tarihGun = myArray[2].slice(0, 2);
    console.log("tarih", myArray[0], myArray[1], tarihGun)
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var todayMonth = todayDate.getMonth();
    var todayDay = todayDate.getDate();
    var age = todayYear - myArray[0];

    if (todayMonth < myArray[1] - 1) {
      age--;
    }
    if (myArray[1] - 1 == todayMonth && todayDay < tarihGun) {
      age--;
    }
    return age;
  }

  export function dogumTarihiHesapla (dogumTarihi){
    if (dogumTarihi == null) {
        return "xxx"
      }
      const myArray = dogumTarihi.split("-", 3);
      var tarihGun = myArray[2].slice(0, 2);
      var tarih= tarihGun+"/"+myArray[1]+"/"+myArray[0];
      return tarih;
  }