
/* TODO: here I use IIFE function expression if you don't know what the heck is IIFE so 
you should check out this link -----(https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)------just copy link and past in search bar;
*/

(function () {
  let quotes = [{
    quote:
      "Money is misunderstood. The fact is if you want to be successful the money will follow you. If you are a doctor, something else will follow you. If you are successful, there is an accompaniment and If your goal is just to make money, you won’t succeed. Money is a commodity to use, not to be dictated by.",
    author: "Frank Lowy, former chairman of Westfield Corporation"
  },
  {
    quote:
      "No matter how great the talent or efforts, some things just take time. You can’t produce a baby in one month by getting nine women pregnant.",
    author: "Warren Buffett, Chairman and CEO of Berkshire Hathaway"
  },
  {
    quote:
      "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
    author: " Jack Ma, Founder and Executive Chairman of Alibaba Group "
  },
  {
    quote: "The most important aspect of my personality as far as determining my success goes has been my questioning of conventional wisdom, doubting experts and questioning authority. While it can be painful in your relationship with your parents and teachers, it’s enormously useful in life.",
    author: "Larry Ellison, Co-founder of Oracle Corporation"
  },
  {
    quote:
      "If you’re not stubborn, you will give up on experiments too soon. And if you’re not flexible, you will pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve.",
    author: "Jeff Bezos, Founder and Chairman of Amazon.com"
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk, Founder of spaceX, Tesla, OpenAI, Boring-Company, Paypal"
  }];


  const pictures = ['b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg', 'rollsroyce.jpg', 'headerBcg.jpeg'];

  const generate_quote_button = document.querySelector('#generate-btn');

  const quote_object = document.querySelector('#quote');

  const aurthor = document.querySelector('.quote-author');

  const wallpapers = document.querySelector('.quote-container');

 const index = 0;

  generate_quote_button.addEventListener('click', function () {

    let index = Math.floor(Math.random() * quotes.length);

    wallpapers.style.cssText = `background: linear-gradient(rgba(0,0,0,0.8),rgba(255, 255, 255,0.4)),url(img/${pictures[index]}); background-size: cover; background-repeat: no-repeat;`;

    quote_object.textContent = quotes[index].quote;

    aurthor.textContent = quotes[index].author;

  })

})()