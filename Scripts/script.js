function Search() {
        let searchIcon = document.querySelector("#search_ico");
        let search = document.querySelector("#search_txt");

        let width_adder = 0;
        let width_counter = 10;
        searchIcon.addEventListener("click", () => {
                search.style.display = "inline-block";
                search.style.height = 40 + "px";
                if (search.classList.contains("search_open") == false) {
                        search.style.display = "inline-block";
                        function animate_search() {
                                if (width_adder <= 430) {
                                        width_adder += width_counter;
                                        search.style.width = width_adder + "px";
                                        requestAnimationFrame(animate_search);
                                }
                        }
                        animate_search();
                        search.classList.add("search_open");
                } else {
                        width_adder = 0;
                        search.style.width = width_adder + "px";
                        search.style.display = "none";
                        search.classList.remove("search_open");
                }
        });
}
Search();


function Hamburgary(){
        let homebtn=document.querySelector("#home_element_small");
        let homesub=document.querySelector("#home_sub_small");
       
        homebtn.addEventListener("click",()=>{
               homesub.classList.toggle("hidden")
        })
}
Hamburgary();



function SearchNavbar() {
        let search_ico=document.querySelector("#search_ico2");
        let search_txt=document.querySelector("#search_navbar");
        // let adder=0;
        // let counter=5;
        let adder=0;
        let counter=5;
        let widthSearch=350;
        search_txt.style.width=adder+"px";
        search_ico.addEventListener("click",()=>{

                if(search_txt.classList.contains("open")==false){
                        search_txt.style.height=40+"px";
                        function AnimateSearchNavbar(){
                                if(window.matchMedia("(max-width:400px)")){
                                        widthSearch=250;
                                }
                                if(adder<=widthSearch){
                                adder+=counter;
                                search_txt.style.width=adder+"px";
                                requestAnimationFrame(AnimateSearchNavbar);
                                }
                                search_txt.style.display="block";
                                search_txt.classList.add("open");
                        }
                        AnimateSearchNavbar();
                }else {
                        function AnimateSearchNavbarRev(){
                                if(adder>=0){
                                   adder-=counter
                                   search_txt.style.width=adder+"px";
                                   requestAnimationFrame(AnimateSearchNavbarRev);
                                }
                                if(adder==0){
                                 search_txt.style.height=0+"px";
                                }
                                search_txt.classList.remove("open")
                        }
                        AnimateSearchNavbarRev();
                }
        })
}
SearchNavbar();



function OpenOrCloseNavbar(){
        //select
        let close_btn=document.querySelector("#close_ico");
        let hamburgary_icon=document.querySelector("#hamburgry_ico");
        let hambyrguryMenu=document.querySelector("#hamburgry_menu");
        let adder=-400;
        let counter=5;
        hambyrguryMenu.style.right=adder+"px";
        hamburgary_icon.addEventListener("click",()=>{
                function AnimateOpenHamburgryMenu(){
                        adder+=counter;
                        if(adder<0 ){
                                hambyrguryMenu.style.right=adder+"px"
                          requestAnimationFrame(AnimateOpenHamburgryMenu);
                        }
                }
                AnimateOpenHamburgryMenu();

        })
        close_btn.addEventListener("click",()=>{

                function AnimateCloseHamburguryMenu(){
                        if(adder>-400){
                        adder-=5
                        hambyrguryMenu.style.right=adder+"px";
                        console.log(counter);
                        requestAnimationFrame(AnimateCloseHamburguryMenu);
                        }       
                }
                AnimateCloseHamburguryMenu();
        })
}
OpenOrCloseNavbar();

function AnimateBanner() {
        let leftBanner=document.querySelector(".left_banner");
        let imgbanner=document.querySelector(".div_banner");

        let adder=-400;
        let counter=5;
        leftBanner.style.left=adder+"px";
        imgbanner.style.right=adder+"px";
        window.addEventListener("DOMContentLoaded",()=>{
                leftBanner.classList.add("show_element_banner");
                imgbanner.classList.add("show_element_banner");
                function AnimationOfElementsOfBanner(){
                        if(adder<0){
                        adder+=counter;
                        leftBanner.style.left=adder+"px";
                        imgbanner.style.right=adder+"px"
                        requestAnimationFrame(AnimationOfElementsOfBanner);
                        }
                }

                AnimationOfElementsOfBanner();

        })
}

 AnimateBanner();



function scroll(){

        let gotop=document.querySelector(".gotop");
        let adder=0;
        let counter=1;
        let headerheight=490;
        window.addEventListener("scroll",(e)=>{
                let scrollheight=window.pageYOffset
                if(scrollheight>headerheight){
                        gotop.classList.remove("hidden")

                }else{
                    gotop.classList.add("hidden")
                 }
        })

        gotop.addEventListener("click",()=>{
                window.scrollTo(0,0)
        })

}
scroll();



function ReviewOfEngineers() {

        // lists of engineers
        const engineers = [
                
                {
                        id : 1,
                        img : "./Media/img/img3-large.jpg",
                        name : "الکس واندروالسی",
                        educate : "ارشد مهندسی عمران",
                        description : `لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و
                        طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری
                       و کلی طرح سفارش گرفته شده استفاده می نماید `
                },

                {
                        id : 2,
                        img : "./Media/img/Man-PNG-Pic.png",
                        name : "جان اکلیلی",
                        educate : "دکترا معماری",
                        description : `لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و
                        طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری
                        از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
                        از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری 
                        از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری  
                       و کلی طرح سفارش گرفته شده استفاده می نماید `
                },

                {
                        id : 3,
                        img : "./Media/img/bigstock-Young-handsome-man-looking-tho-283640422.jpg",
                        name : " تونی بردیپای",
                        educate : "دکترا دیزاین داخلی",
                        description : `لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و
                        طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری
                        از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری 
                        از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری 

                       و کلی طرح سفارش گرفته شده استفاده می نماید `
                },

                {
                        id : 4,
                        img : "./Media/img/testimonial-sx-ema1-open.jpg",
                        name : "مایکل شرنوبی",
                        educate : "دکترا مهندسی عمران",
                        description : `لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و
                        از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری 
                       و کلی طرح سفارش گرفته شده استفاده می نماید `
                }
        ]
        // Select Elements
        let next_btn = document.querySelector("#next");
        let previous_btn = document.querySelector("#previous");
        let imgS = document.querySelector("#img_eng");
        let nameS = document.querySelector("#name");
        let educateS = document.querySelector("#educate");
        let descriptionS = document.querySelector(".description");
        let num = 0;

        next_btn.addEventListener("click",()=>{
          
                num++;
                if(num>3){
                        num=0;
                        GetEngineers();
                }else {
                        GetEngineers();
                }
        })
        previous_btn.addEventListener("click",()=>{
      
                num--;
                if(num<0){
                        num=3;
                        GetEngineers();
                }else {
                GetEngineers();
                }
        })

        function GetEngineers(){
                let item = engineers[num];
                imgS.src=item.img
                descriptionS.innerHTML=item.description;
                nameS.innerHTML=item.name;
                educateS.innerHTML=item.educate;
        }
}
ReviewOfEngineers();



function SwitchSignPage() {
        let signup_page_btn=document.querySelector("#signup_page")
        let signin_page_btn=document.querySelector("#signin_page")
        let signup_page_btn2=document.querySelector("#signup_page2")
        let signin_page_btn2=document.querySelector("#signin_page2")
        let signup_form=document.querySelector(".signup");
        let signin_form=document.querySelector(".signin");
        let signup_form2=document.querySelector(".signup2");
        let signin_form2=document.querySelector(".signin2");

        signin_page_btn.addEventListener("click",()=>{
           PageHideShow();
        })

        signup_page_btn.addEventListener("click",()=>{
             PageHideShow();
        })

        signin_page_btn2.addEventListener("click",()=>{
                PageHideShow2();
             })
     
             signup_page_btn2.addEventListener("click",()=>{
                  PageHideShow2();
             })

        function PageHideShow(){
                signin_page_btn.classList.toggle("active_sign");
                signup_page_btn.classList.toggle("active_sign");
                signin_form.classList.toggle("hidden");
                signup_form.classList.toggle("hidden")
        }

        function PageHideShow2(){
                signin_page_btn2.classList.toggle("active_sign");
                signup_page_btn2.classList.toggle("active_sign");
                signin_form2.classList.toggle("hidden");
                signup_form2.classList.toggle("hidden")
        }
}

SwitchSignPage();



function FormValidation() {

        //small Nav
        let username_signup2 = document.querySelector(".txt7")
        let password_signup2 = document.querySelector(".txt9")
        let repass_signup2 = document.querySelector(".txt10")
        let email_signup2 = document.querySelector(".txt8")
        let username_signin2 = document.querySelector(".txt11")
        let password_signin2 = document.querySelector(".txt12")
        //button
        let btn_signup2=document.querySelector(".btn_signup2")
        let btn_signin2=document.querySelector(".btn_signin2")
        //errors
        let error7=document.querySelector(".error7")
        let error8=document.querySelector(".error8")
        let error9=document.querySelector(".error9")
        let error10=document.querySelector(".error10")
        let error11=document.querySelector(".error11")
        let error12=document.querySelector(".error12")


        //inputs
        let username_signup = document.querySelector(".txt1")
        let password_signup = document.querySelector(".txt3")
        let repass_signup = document.querySelector(".txt4")
        let email_signup = document.querySelector(".txt2")
        let username_signin = document.querySelector(".txt5")
        let password_signin = document.querySelector(".txt6")
        //button
        let btn_signup=document.querySelector(".btn_signup")
        let btn_signin=document.querySelector(".btn_signin")
        //errors
        let error1=document.querySelector(".error1")
        let error2=document.querySelector(".error2")
        let error3=document.querySelector(".error3")
        let error4=document.querySelector(".error4")
        let error5=document.querySelector(".error5")
        let error6=document.querySelector(".error6")

        function CheckInputSignUp(input,error){
                btn_signup.addEventListener("click",(e)=>{
                        e.preventDefault();
                        InputCheck();
                })
                btn_signup2.addEventListener("click",(e)=>{
                        e.preventDefault();
                        InputCheck();
                })
                function InputCheck(){
                     if(input.value==""){
                             error.style.color="red"
                     }else {
                             error.style.color="#fff";
                             if(password_signup.value==repass_signup.value) {
                                     error3.style.color="#ffff"
                                     error4.style.color="#ffff"
                             }else {
                                  error3.style.color="red"
                                  error4.style.color="red"
                             }
                     }
                }
               input.addEventListener("keydown",()=>{
                        if(input.value.length>0){
                                error.style.color="#fff"
                        }else {
                                error.style.color="red"
                        }
                })
        }
        CheckInputSignUp(username_signup,error1);
        CheckInputSignUp(email_signup,error2);
        CheckInputSignUp(password_signup,error3);
        CheckInputSignUp(repass_signup,error4);

        CheckInputSignUp(username_signup2,error7);
        CheckInputSignUp(email_signup2,error8);
        CheckInputSignUp(password_signup2,error9);
        CheckInputSignUp(repass_signup2,error10);

        function CheckInputSignIn(input,error){
                btn_signin.addEventListener("click",(e)=>{
                        e.preventDefault();
                        InputCheckIn();
                })

                btn_signin2.addEventListener("click",(e)=>{
                        e.preventDefault();
                        InputCheckIn();
                })

                function InputCheckIn(){
                        if(input.value==""){
                                error.style.color="red"
                        }else {
                                error.style.color="#fff";
                        }  
                }

                input.addEventListener("keydown",()=>{
                        if(input.value.length>0){
                                error.style.color="#fff"
                        }else {
                                error.style.color="red"
                        }
                })
        }
        CheckInputSignIn(username_signin,error5);
        CheckInputSignIn(password_signin,error6);
        CheckInputSignIn(username_signin2,error11);
        CheckInputSignIn(password_signin2,error12);
}
FormValidation();

function Slider(){

        let sliders = document.querySelectorAll(".slider");

        sliders.forEach((slide,index)=>{
                slide.style.left=`${index * 200}%`
        })

        let btn_next = document.querySelector("#next_slider");
        let btn_prev = document.querySelector("#previous_slider");
        let adder=0;
        btn_next.addEventListener("click",()=>{
                   if(adder < 3){
                      adder++;
                      GetSliders();
                   }else {
                     adder=0;           
                     GetSliders();
                   }
        })

        btn_prev.addEventListener("click",()=>{
                if(adder <= 3 ){
                        adder--;
                        GetSliders();
                }
                if(adder < 0) {
                        adder=3;
                        GetSliders();
                }
        })

        function GetSliders(){
                sliders.forEach((slider)=>{
                        slider.style.transform=`translateX(-${adder * 200}%)`;
                })
        }

}
Slider();



function SmallSign() {

        let sign_element_small = document.querySelector("#sign_small_element");
        let nav_small = document.querySelector(".listOfnav");
        let signSide=document.querySelector(".signup10");

        sign_element_small.addEventListener("click",()=>{
                nav_small.classList.toggle("hidden");
                signSide.classList.toggle("hidden");
        })

}
SmallSign();



function MyCanvas() {

        let canvas = document.querySelector("canvas");
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        let mycanvas=canvas.getContext("2d");

        class AnimateCanvas {
                constructor(widther,heighter) {
                       this.widther = widther || 40;
                        this.add_widther =5;
                        this.heighter =  heighter || 40;
                        this.add_heighter = 5;
                        this.radius = 10;
                }

                draw() {
                        mycanvas.beginPath();
                        mycanvas.arc(this.widther,this.heighter,this.radius,0,2 * Math.PI);
                        mycanvas.fillStyle=this.GetColor;
                        mycanvas.fill();
                        this.logical();
                }

               get GetColor() {
                       let colors = ["#1e65fe","#ffcc33"]
                         let random = Math.floor(Math.random() * (colors.length+0)-0)
                        return colors[random]
                }

                logical() {
                        if (this.widther + this.radius > window.innerWidth || this.widther - this.radius < 0){
                                this.add_widther = -this.add_widther
                        }
                        if(this.heighter+this.radius > window.innerHeight || this.heighter-this.radius < 0){
                                this.add_heighter = -this.add_heighter
                        }
                        this.widther+=this.add_widther;
                        this.heighter+=this.add_heighter;
                }
        }
        let balls = [];
        for(let j =0;j<5;j++){
                balls.push(new AnimateCanvas);
        }

        function AnimationOfCanvas() {
                mycanvas.clearRect(0,0,innerWidth,innerHeight);
                balls.forEach((ball)=>{
                        ball.draw();
                })
                requestAnimationFrame(AnimationOfCanvas);
        }
        AnimationOfCanvas();

        window.addEventListener("click",(e)=>{
                balls.push(new AnimateCanvas(e.clientX,e.clientY))
        })

        window.addEventListener("resize",()=>{
                canvas.width=window.innerWidth;
                canvas.height=window.innerHeight;
        })
        
}
MyCanvas();