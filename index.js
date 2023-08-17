   AOS.init();
   const quotes=document.getElementById('quotes')
   const author=document.getElementById('author')
   const newQ=document.getElementById('newQ')
   const tweetMe=document.getElementById('tweetMe')
   let realData=""
   let quotesData=""

   function tweetNow()
   {
        let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text} By ${quotesData.author}`     
        window.open(tweetPost);
   }

   function getNewQuotes()
    {
        let rNum=Math.round(Math.random()*100)
        quotesData=realData[rNum]
        quotes.innerText=`${quotesData.text}`
        quotesData.author===null?(author.innerText='unKnown'): (author.innerText=`${quotesData.author}`);
    }

    const getQuotes=async ()=>
    {
        const api="https://type.fit/api/quotes"

        try {
            let data=await fetch(api)
            realData= await data.json()
            getNewQuotes()

        } catch (error) {
                console.log(error);
        }
    }

    tweetMe.addEventListener('click',tweetNow)
    newQ.addEventListener('click',getNewQuotes)
    getQuotes()


