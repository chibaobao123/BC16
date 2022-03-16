function Validation() {
  this.ktrRong = function (value, selectorErr, mess) {
    if (value == "") {
      document.querySelector(selectorErr).innerHTML = mess + " không được để trống !";
        return false;
    }
    document.querySelector(selectorErr).innerHTML = "";
    return true;
  };
  this.ktrDoDai = function(value, selectorErr, min, max){
    if(value.trim().length >= min && value.trim().length <= max){
      document.querySelector(selectorErr).innerHTML = "";
      // console.log('true');
      return true;
    }

    document.querySelector(selectorErr).innerHTML = `Vui lòng nhập kí tự từ ${min} -> ${max}`;
    // console.log('false');
    return false;

  };
  this.ktrChuoiKyTu = function (value, selectorErr){
    var letters = /^[A-Za-z]+$/;
    if(value.match(letters)){
      document.querySelector(selectorErr).innerHTML = "";
      return true;
    }
    document.querySelector(selectorErr).innerHTML = "Dữ liệu ko hợp lệ";
    // console.log('false');
    return false;
  };
  this.ktrSo = function (value, selectorErr){
    var letters = /^[0-9]+$/;
    if(value.match(letters)){
      document.querySelector(selectorErr).innerHTML = "";
      return true;
    }
    document.querySelector(selectorErr).innerHTML = "Dữ liệu ko hợp lệ";
    // console.log('false');
    return false;
  };
  this.ktrEmail = function (value, selectorErr){
    var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.match(letters)){
      document.querySelector(selectorErr).innerHTML = "";
      return true;
    }
    document.querySelector(selectorErr).innerHTML = "Dữ liệu ko hợp lệ";
    // console.log('false');
    return false;
  };
  this.ktrDiem = function(value, selectorErr){
    if(value.length >= 0 && value.length <= 10){
      document.querySelector(selectorErr).innerHTML = "";
      // console.log('true');
      return true;
    }
    document.querySelector(selectorErr).innerHTML = "Vui lòng nhập điểm từ 0 -> 10";
    return false;
  };
  this.ktrTrungMa = function (value, arr ,selectorErr){
    let status = true;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].maSV === value){
        status = false;
        break;
      }
    }

    if(status){
      document.querySelector(selectorErr).innerHTML = "";
      return true;
    }

    if(!status){
      document.querySelector(selectorErr).innerHTML = "Mã sinh viên đã tồn tại !";
      return false;
    }

  }
}



// Date:
// 	+ yyyy/mm/dd or yyyy-mm-dd
// 	/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
	
// Letter:
// 	"^[A-Za-z]+$"
	
// 	"^[a-zA-Z_Ă€ĂĂ‚ĂƒĂˆĂ‰Ăáº¾ĂŒĂĂ’Ă“Ă”Ă•Ă™ĂÄ‚ÄÄ¨Å¨Æ Ă Ă¡Ă¢Ă£Ă¨Ă©ĂªĂ¬Ă­Ă²Ă³Ă´ĂµĂ¹ĂºÄƒÄ‘Ä©Å©Æ¡Æ¯Ä‚áº áº¢áº¤áº¦áº¨áºªáº¬áº®áº°áº²áº´áº¶" + "áº¸áººáº¼á»€á»€á»‚Æ°Äƒáº¡áº£áº¥áº§áº©áº«áº­áº¯áº±áº³áºµáº·áº¹áº»áº½á»á»á»ƒáº¿á»„á»†á»ˆá»á»Œá»á»á»’á»”á»–á»˜á»á»œá»á» á»¢á»¤á»¦á»¨á»ªá»…á»‡á»‰á»‹á»á»á»‘á»“á»•á»—á»™á»›á»á»Ÿá»¡á»£" + "á»¥á»§á»©á»«á»¬á»®á»°á»²á»´Ăá»¶á»¸á»­á»¯á»±á»³á»µá»·á»¹\\s]+$"
	
// Number:
// 	interger:
// 	/^[0-9]+$/

// Email:
// 	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	
// Password:
// // 	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/