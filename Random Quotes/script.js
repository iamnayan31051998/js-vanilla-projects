function generate(){
    const quotes ={

        "-Douglas Horton":`Smile, it's free therapy.`,
        "- Lewis B. Smedes":`To forgive is to set a prisoner free and discover that the prisoner was you.`,
        "-A. P. J. Abdul Kalam":`
        Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.`,
        "-Josh Billings":`Life consists not in holding good cards but in playing those you hold well.`,
        "-Marie Curie":`Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.`,
        "-Buddha":`The mind is everything. What you think you become.`,
        "-Joyce Brothers":`A strong, positive self-image is the best possible preparation for success.`,
        "-Kobe Bryant":`The most important thing is to try and inspire people so that they can be great in whatever they want to do.`,
        "-Willie Nelson":`Once you replace negative thoughts with positive ones, you'll start having positive results.`,
        "-Roger Clemens":`I think anything is possible if you have the mindset and the will and desire to do it and put the time in.`,
        "-Elon Musk":`When something is important enough, you do it even if the odds are not in your favor.`,
        "-Nelson Mandela":`It always seems impossible until it's done.`
    };

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}