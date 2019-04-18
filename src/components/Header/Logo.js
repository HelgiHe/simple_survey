import React from 'react';

const Logo = () => (
  <svg
    width="208px"
    height="38px"
    viewBox="0 0 208 38"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        x="-6.0%"
        y="-40.0%"
        width="112.0%"
        height="180.0%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="sportabler_logo"
        filter="url(#filter-1)"
        transform="translate(4.000000, 2.000000)"
        fill="#FFFFFF"
      >
        <path
          d="M74.7868078,20.6634215 C71.9861023,20.6634215 70.0876896,18.5861728 70.0876896,15.6267372 C70.0876896,12.7329101 71.7571781,10.5882892 74.7525926,10.5882892 C77.7487125,10.5882892 79.4164374,12.7332628 79.4164374,15.6267372 C79.4164374,18.5861728 77.5099118,20.6634215 74.7868078,20.6634215 M74.7525926,7.28634921 C69.5102646,7.28634921 66.5473016,10.9628924 66.5473016,15.6267372 L66.5473016,29.9960494 L70.2577072,29.9960494 L70.2577072,21.4112169 C71.2231393,22.9445503 73.2160847,23.9657143 75.3314286,23.9657143 C79.928254,23.9657143 83.1275485,20.5188007 83.1275485,15.6267372 C83.1275485,10.9628924 79.9952734,7.28634921 74.7525926,7.28634921"
          id="Fill-1"
          fillRule="nonzero"
        />
        <path
          d="M198.511429,7.49153439 C196.774921,7.49153439 194.868748,8.51305115 194.289559,10.759612 L194.289559,7.6957672 L190.579153,7.6957672 L190.579153,23.6619048 L194.289559,23.6619048 L194.289559,16.5465608 C194.289559,12.938448 195.889912,10.9638448 198.511429,10.9638448 C199.089912,10.9638448 199.396437,10.9638448 199.974921,11.0319224 L199.974921,7.62768959 C199.566455,7.52539683 199.089912,7.49153439 198.511429,7.49153439"
          id="Fill-3"
        />
        <path
          d="M175.868254,14.0519224 C176.032628,11.8515697 177.904233,10.2423986 180.23545,10.2423986 C182.796649,10.2423986 183.946208,12.0159436 183.946208,14.0519224 L175.868254,14.0519224 Z M180.268607,7.28719577 C175.507055,7.28719577 171.927866,10.6367549 171.927866,15.7263492 C171.927866,20.8491005 175.539859,23.9683245 180.399824,23.9683245 C183.388183,23.9683245 185.620988,22.9175309 187.164198,20.8162963 L184.537037,18.714709 C183.650265,19.962328 182.337037,20.7503351 180.367019,20.7503351 C178.068607,20.7503351 176.032628,19.1087125 175.868254,16.8759083 L187.853792,16.8759083 C187.886596,16.514709 187.886596,16.1859612 187.886596,15.8247619 C187.886596,10.1439859 184.668607,7.28719577 180.268607,7.28719577 Z"
          id="Fill-5"
          fillRule="nonzero"
        />
        <path
          d="M154.492416,20.6655026 C151.698413,20.6655026 149.792945,18.6231746 149.792945,15.6256437 C149.792945,12.6330511 151.698413,10.5907231 154.492416,10.5907231 C157.21552,10.5907231 159.120988,12.6662081 159.120988,15.6256437 C159.120988,18.5900176 157.21552,20.6655026 154.492416,20.6655026 M155.27231,7.2859612 C153.026808,7.2859612 150.918166,8.30712522 149.963316,9.83904762 L149.963316,0.0111816578 L146.251852,0.0111816578 L146.251852,23.6619753 L149.963316,23.6619753 L149.963316,21.4125926 C150.918166,22.9491005 152.927337,23.9702646 155.036332,23.9702646 C159.631393,23.9702646 162.832099,20.5282892 162.832099,15.6256437 C162.832099,10.6238801 159.801764,7.2859612 155.27231,7.2859612"
          id="Fill-7"
          fillRule="nonzero"
        />
        <polygon
          id="Fill-9"
          points="165.524621 23.6504762 169.235379 23.6504762 169.235379 3.52733684e-05 165.524621 0.0113227513"
        />
        <path
          d="M58.3102998,13.7585891 C55.7663845,13.2040917 54.4619753,12.9106173 54.4619753,11.7039153 C54.4619753,10.6929806 55.5381658,10.105679 57.1364021,10.105679 C59.1582716,10.105679 60.658448,10.9536508 61.4408113,12.128254 L63.8217637,9.84500882 C62.4845503,8.05100529 60.4630335,6.87640212 57.3321693,6.87640212 C53.2877249,6.87640212 50.874321,8.80126984 50.874321,11.8668783 C50.874321,15.4552381 54.1032451,16.4009171 56.6471605,16.9226102 C59.0930159,17.4450088 60.2672663,17.7384832 60.2672663,19.0100882 C60.2672663,20.2495944 59.1258201,20.7719929 57.462328,20.7719929 C55.3423986,20.7719929 53.4182363,20.0541799 52.4073016,18.3578836 L49.9938977,20.673933 C51.3635626,22.9571781 54.1356966,23.9681129 57.2341093,23.9681129 C61.1476896,23.9681129 63.8545679,22.3702293 63.8545679,18.7822222 C63.8545679,15.624903 61.0824339,14.3786949 58.3102998,13.7585891"
          id="Fill-12"
        />
        <path
          d="M93.8099824,20.6660317 C90.8142152,20.6660317 89.1461376,18.5214109 89.1461376,15.6275838 C89.1461376,12.7341093 90.8142152,10.5894885 93.8099824,10.5894885 C96.8057496,10.5894885 98.4738272,12.7341093 98.4738272,15.6275838 C98.4738272,18.5214109 96.8057496,20.6660317 93.8099824,20.6660317 M93.8099824,7.28719577 C88.5676543,7.28719577 85.4353792,10.9640917 85.4353792,15.6275838 C85.4353792,20.2914286 88.5676543,23.9683245 93.8099824,23.9683245 C99.0526631,23.9683245 102.184586,20.2914286 102.184586,15.6275838 C102.184586,10.9640917 99.0526631,7.28719577 93.8099824,7.28719577"
          id="Fill-14"
          fillRule="nonzero"
        />
        <path
          d="M108.587584,10.7596825 L108.587584,7.69583774 L104.876825,7.69583774 L104.876825,23.6619753 L108.587584,23.6619753 L108.587584,16.5466314 C108.587584,12.9385185 110.187584,10.9639153 112.808748,10.9639153 C113.387584,10.9639153 113.694109,10.9639153 114.272593,11.0319929 L114.272593,7.62776014 C113.864127,7.52546737 113.387584,7.49160494 112.808748,7.49160494 C111.072593,7.49160494 109.16642,8.51276896 108.587584,10.7596825"
          id="Fill-16"
        />
        <path
          d="M120.291182,17.3298413 L120.291182,10.9640564 L124.188183,10.9640564 L124.188183,7.69597884 L120.291182,7.69597884 L120.291182,3.33301587 L116.580423,3.33301587 L116.580423,18.1809877 C116.580423,23.5256085 119.916578,23.7640564 121.721164,23.7640564 C122.810758,23.7640564 123.899647,23.6617637 124.478836,23.5598236 L124.478836,20.2913933 C124.104586,20.3594709 123.185362,20.4279012 122.606173,20.4279012 C121.142681,20.4279012 120.291182,20.0871605 120.291182,17.3298413"
          id="Fill-18"
        />
        <path
          d="M134.55037,20.658448 C131.827266,20.658448 129.920741,18.581552 129.920741,15.6217637 C129.920741,12.7282892 131.588466,10.5833157 134.584586,10.5833157 C137.58,10.5833157 139.249489,12.7282892 139.249489,15.6217637 C139.249489,18.581552 137.351076,20.658448 134.55037,20.658448 M134.584586,7.28137566 C129.341905,7.28137566 126.20963,10.9582716 126.20963,15.6217637 C126.20963,20.5138272 129.408924,23.9607407 134.00575,23.9607407 C136.121093,23.9607407 138.114039,22.9399295 139.079471,21.4062434 L139.079471,23.6556261 L142.789877,23.6559788 L142.789877,15.6217637 C142.789877,10.9579189 139.826914,7.28137566 134.584586,7.28137566"
          id="Fill-20"
          fillRule="nonzero"
        />
        <polygon
          id="Fill-22"
          points="19.9975309 0.000105820106 6.6659612 6.66571429 6.6659612 14.9983422 19.9975309 8.33238095 33.3291005 14.9983422 39.9950617 18.33097 39.9950617 9.99869489"
        />
        <polygon
          id="Fill-25"
          points="3.52733687e-05 11.665291 3.52733687e-05 19.9975661 19.9975661 29.9961552 33.3291358 23.3305467 33.3291358 14.9982716 19.9975661 21.6638801"
        />
      </g>
    </g>
  </svg>
);

export default Logo;
