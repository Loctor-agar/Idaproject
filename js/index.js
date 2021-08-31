const formProduct = document.querySelector('#formProduct');
const inputProductName = document.querySelector('#inputProductName');
const linkProduct = document.querySelector('#linkProduct');
const priceProduct = document.querySelector('#priceProduct');
const btnSuccess = document.querySelector('.btn-add-product');
let inp = document.querySelectorAll('.inp');

$("input[type='text']").on("input", function () {    	
  canChangeColor();
});

function canChangeColor(){  
  	
  let changeColor = true;  

  $("input[type='text']").each(function(){
     if($(this).val()==''){
      changeColor = false;
     }
  });
  
  if(changeColor){
    $('.btn-add-product').css({background:'#7BAE73'})
    $('.btn-add-product').css({color:'white'})
  }else{
    $('.btn-add-product').css({background:'#EEEEEE'})
  }

}

inputProductName.addEventListener('input', (e) => {
  if(e.target.value === '') {
		setErrorFor(inputProductName, 'Поле является обязательным');
	} else {
    setSuccessFor(inputProductName);
  }
});


linkProduct.addEventListener('input', (e) => {
  if(e.target.value === '') {
		setErrorFor(linkProduct, 'Поле является обязательным');
	} else {
    setSuccessFor(linkProduct);
  }
});

priceProduct.addEventListener('input', (e) => {
  if(e.target.value === '') {
		setErrorFor(priceProduct, 'Поле является обязательным');
	} else {
    setSuccessFor(priceProduct);
  }
});

formProduct.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});


function checkInputs() {
  const nameValue = inputProductName.value.trim();
  const linkValue = linkProduct.value.trim();
  const priceValue = priceProduct.value.trim();

  if(nameValue === '') {
		setErrorFor(inputProductName, 'Поле является обязательным');
	} else {
    setSuccessFor(inputProductName);
  }

  if(linkValue === '') {
		setErrorFor(linkProduct, 'Поле является обязательным');
	} else {
    setSuccessFor(linkProduct);
  }
  console.log(linkValue)

  if(priceValue === '') {
		setErrorFor(priceProduct, );
	} else {
    setSuccessFor(priceProduct);
  }
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
	formGroup.className = 'form-group success';
  small.innerText = '';
}

