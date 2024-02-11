const PlayIcon = () => {
  return (
    <button className="py-8">
      <svg
        width="123"
        height="80"
        viewBox="0 0 123 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_204_155)">
          <rect
            x="10.5"
            y="6.5"
            width="101.5"
            height="59"
            rx="4.5"
            fill="#030617"
            stroke="#ECFEFF"
          />
          <path
            d="M45 46.913V24.9559C45 23.5405 46.43 22.573 47.7439 23.0994L73.6219 33.468C75.2609 34.1247 75.3069 36.4282 73.6954 37.1499L47.8174 48.7383C46.4943 49.3308 45 48.3627 45 46.913Z"
            fill="#ECFEFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_204_155"
            x="0"
            y="0"
            width="122.5"
            height="80"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_204_155"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_204_155"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default PlayIcon;
