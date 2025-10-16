export function H1({ children, className = "" }) {
    return (
      <h1
        className={`font-[Instrument-Sans] font-medium 
        text-[64px] leading-[70px] 
        sm:text-[36px] sm:leading-[40px] 
        text-laranjaescuro ${className}`}
      >
        {children}
      </h1>
    );
  }
  
  export function H2({ children, className = "" }) {
    return (
      <h2
        className={`font-[Lexend-Deca] font-normal 
        text-[48px] leading-[54px] 
        sm:text-[28px] sm:leading-[32px] 
        text-black ${className}`}
      >
        {children}
      </h2>
    );
  }
  
  export function H2Subtitulo({ children, className = "" }) {
    return (
      <h3
        className={`font-[Lexend-Deca] font-normal 
        text-[32px] leading-[38px] 
        sm:text-[22px] sm:leading-[26px] 
        text-white ${className}`}
      >
        {children}
      </h3>
    );
  }
  
  export function H3({ children, className = "" }) {
    return (
      <h4
        className={`font-[Itim] font-normal 
        text-[28px] leading-[34px] 
        sm:text-[20px] sm:leading-[24px] 
        text-white ${className}`}
      >
        {children}
      </h4>
    );
  }
  
  export function P({ children, className = "" }) {
    return (
      <p
        className={`font-[Instrument-Sans] font-normal 
        text-[24px] leading-[30px] 
        sm:text-[18px] sm:leading-[22px] 
        text-black ${className}`}
      >
        {children}
      </p>
    );
  }
  