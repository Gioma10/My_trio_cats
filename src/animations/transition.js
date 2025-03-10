export const slideUp = (duration = 0.8, delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration, delay } },
    viewport:{ once: false, amount: 0.5 }, // Attiva quando il 50% dell'elemento è visibile
    exit: { opacity: 0, y: -50, transition: { duration } }
  });

export const slideDown = (duration = 0.8, delay = 0) => ({
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration, delay } },
    viewport:{ once: false, amount: 0.5 }, // Attiva quando il 50% dell'elemento è visibile
    exit: { opacity: 0, y: -50, transition: { duration } }
  });



  export const slideLeft = (duration = 0.8, delay = 0) => ({
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0, transition: { duration, delay } },
    viewport:{ once: false, amount: 0.5 }, // Attiva quando il 50% dell'elemento è visibile
    exit: { opacity: 0, x: -100, transition: { duration } }
  });



  export const slideRight = (duration = 0.8, delay = 0) => ({
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0, transition: { duration, delay } },
    viewport:{ once: false, amount: 0.5 }, // Attiva quando il 50% dell'elemento è visibile
    exit: { opacity: 0, x: -100, transition: { duration } }
  });



  
  export const scaleUp = (duration = 0.8, delay = 0) => ({
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1, transition: { duration, delay } },
    viewport:{ once: false, amount: 0.5 }, // Attiva quando il 50% dell'elemento è visibile
    exit: { opacity: 0, scale: 0.8, transition: { duration } }
  });


  

  export const bottomLine = (duration = 0.8, delay = 0) => ({
    initial:{width: '0%'},
    whileInView: {width: '100%', transition: { duration, delay } },
    viewport:{ once: false, amount: 0.5 }, // Attiva quando il 50% dell'elemento è visibile
    exit: { opacity: 0, scale: 0.8, transition: { duration } }
  });