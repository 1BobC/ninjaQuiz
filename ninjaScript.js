
const correctAnswers= ['B', 'B', 'B', 'B'];         // store the correct answers in an array
const form = document.querySelector('.quiz-form');  //attaching event listener to form
const result= document.querySelector('.result');    //required for showing result
form.addEventListener('submit', e =>{
    e.preventDefault();
    let score= 0;
    const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value ];
    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
        //console.log(score);   //code works!!
    scrollTo(0, 0);      // and how do we get to the top to see the result?? can be done before or after showing score
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');          //required for showing result
        let output = 0;                          //start of score animation
        const timer= setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if(output === score){
                clearInterval(timer);
            }else{
                output++;
            }
        }, 100);
    });

//understanding the window object - but don't mention it!!
    //first - window object, global object
    // console.log('hello 1');
    // window.console.log('hello 2');
    // console.log(document.querySelector('form'));
    // console.log(window.document.querySelector('form'));
    //alert('hello 3');
    //window.alert('hello 4');
//intervals and animating the score
    // setTimeout(() =>{
    //     alert('Hello, June');
    // }, 3000);
    // let i= 0;// to control and stop the setInterval
    // const timer = setInterval(() => {
    //      console.log('hello, hello!')
    // i++;
    // if(i === 5){
    //     clearInterval(timer);
    // }
    // }, 1000 );                   //BEWARE this runs forever without i limit
//now go back up to line 19 for score animation