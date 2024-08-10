import type { FC } from "react";

interface SeparatorProps {
  isWhite?: boolean;
}

const Separator: FC<SeparatorProps> = ({ isWhite }) => {
  return (
    <svg className='w-full' width='1096' height='97' viewBox='0 0 1096 97' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M802.25 48.3795L791.509 36.3162L780.768 48.3795L791.509 60.4427L802.25 48.3795Z' fill={isWhite ? '#FAF9F5' : '#D6B66B'}></path>
      <path d='M315.244 48.3833L304.503 36.32L293.762 48.3833L304.503 60.4465L315.244 48.3833Z' fill={isWhite ? '#FAF9F5' : '#D6B66B'}></path>
      <path d='M36.0919 48.3773L29.3867 40.8466L22.6816 48.3773L29.3867 55.908L36.0919 48.3773Z' fill={isWhite ? '#FAF9F5' : '#D6B66B'}></path>
      <path d='M1073.33 48.3813L1066.62 40.8506L1059.92 48.3813L1066.63 55.912L1073.33 48.3813Z' fill={isWhite ? '#FAF9F5' : '#D6B66B'}></path>
      <path d='M354.646 38.24L350.906 28.27L335.681 47.19H347.443L354.646 38.24Z' fill={isWhite ? '#FAF9F5' : '#179999'}></path>
      <path d='M346.971 49H335.209L350.915 68.5L354.788 58.71L346.971 49Z' fill={isWhite ? '#FAF9F5' : '#0B7373'}></path>
      <path d='M356.267 59.44L352.394 69.24H539.319L530.602 59.44H356.267Z' fill={isWhite ? '#FAF9F5' : '#004040'}></path>
      <path d='M739.975 59.44H565.639L556.913 69.24H743.848L739.975 59.44Z' fill={isWhite ? '#FAF9F5' : '#004040'}></path>
      <path d='M749.029 47.48H760.791L745.325 28.27L741.595 38.23L749.029 47.48Z' fill={isWhite ? '#FAF9F5' : '#0B7373'}></path>
      <path d='M740.188 37.32L743.857 27.52H556.913L565.639 37.32H740.188Z' fill={isWhite ? '#FAF9F5' : '#179999'}></path>
      <path d='M352.375 27.52L356.052 37.32H530.602L539.318 27.52H352.375Z' fill={isWhite ? '#FAF9F5' : '#179999'}></path>
      <path d='M567.25 57.63H740.134L747.587 48.38L740.134 39.13H567.25L575.486 48.38L567.25 57.63Z' fill={isWhite ? '#FAF9F5' : '#0B7373'}></path>
      <path d='M528.981 39.13H356.097L348.653 48.38L356.097 57.63H528.99L520.745 48.38L528.981 39.13Z' fill={isWhite ? '#FAF9F5' : '#0B7373'}></path>
      <path d='M741.443 58.71L745.317 68.5L760.791 49.29H749.029L741.443 58.71Z' fill={isWhite ? '#FAF9F5' : '#004040'}></path>
      <path d='M548.135 35.189L536.368 48.4049L548.135 61.6207L559.902 48.4049L548.135 35.189Z' fill={isWhite ? '#FAF9F5' : '#D6B66B'}></path>
      <path d='M547.119 63.64L534.529 49.5H524.557L547.119 74.84V63.64Z' fill={isWhite ? '#FAF9F5' : '#B39859'}></path>
      <path d='M549.113 33.12L561.703 47.26H571.675L549.113 21.92V33.12Z' fill={isWhite ? '#FAF9F5' : '#EDD395'}></path>
      <path d='M547.119 33.12V21.92L524.557 47.26H534.529L547.119 33.12Z' fill={isWhite ? '#FAF9F5' : '#D6B66B'}></path>
      <path d='M549.113 63.64V74.84L571.675 49.5H561.703L549.113 63.64Z' fill={isWhite ? '#FAF9F5' : '#B39859'}></path>
      <path d='M791.509 48.38H1066.62' stroke={isWhite ? '#FAF9F5' : '#D6B66B'} strokeWidth='3.9' strokeMiterlimit='10'></path>
      <path d='M29.3828 48.38H304.491' stroke={isWhite ? '#FAF9F5' : '#D6B66B'} strokeWidth='3.9' strokeMiterlimit='10'></path>
    </svg>
  );
};

export default Separator;
