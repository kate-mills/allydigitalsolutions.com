import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const CreditCards = ({ width = 200, height = 98 }) => {
  const {palette:{
    primary:{main:primaryMain},
    secondary:{main:secondaryMain},
  }} = useTheme()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 200 98"
    >
      <path
        fill={secondaryMain}
        d="M195.134 64.49l-54.279 31.44c-3.179 1.842-8.376 1.846-11.601 0L38.086 44.006c-3.229-1.839-3.264-4.824-.085-6.666l54.28-31.42c3.182-1.842 8.375-1.846 11.601 0l91.167 51.924c3.229 1.82 3.268 4.804.085 6.647z"
      ></path>
      <path
        fill={secondaryMain}
        d="M197.636 61.133l-54.275 31.42c-3.183 1.842-8.381 1.846-11.602 0L40.592 40.629c-3.23-1.839-3.268-4.824-.085-6.666L94.793 2.54c3.183-1.842 8.38-1.846 11.602 0l91.167 51.924c3.218 1.85 3.256 4.828.074 6.67z"
      ></path>
      <path
        fill={secondaryMain}
        d="M195.661 62.28L141.386 93.7c-3.183 1.841-8.38 1.845-11.601 0L38.617 41.774c-3.229-1.838-3.264-4.823-.081-6.665L92.81 3.69c3.183-1.843 8.38-1.846 11.601 0l91.168 51.924c3.24 1.854 3.264 4.823.081 6.665z"
      ></path>
      <path
        fill="url(#paint0_linear)"
        d="M195.66 62.276l-54.279 31.423a8.87 8.87 0 01-1.265.597c-3.163 1.219-7.509 1.019-10.34-.589L38.608 41.783c-3.225-1.835-3.264-4.82-.085-6.662l24.87-14.392 29.39-17.027c3.179-1.843 8.376-1.847 11.601 0l91.164 51.924c3.271 1.842 3.295 4.811.112 6.65z"
        opacity="0.58"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M88.74 6.13l103.167 57.99-18.292 10.616L71.102 16.093 88.74 6.13z"
        opacity="0.58"
      ></path>
      <path
        fill="url(#paint2_linear)"
        d="M164.986 79.896l-24.87 14.397c-3.163 1.219-7.509 1.019-10.34-.589L38.608 41.78c-3.225-1.834-3.264-4.82-.085-6.662l24.87-14.392c3.16-1.22 7.51-1.02 10.34.588l91.168 51.92c3.225 1.84 3.264 4.824.085 6.662z"
        opacity="0.58"
      ></path>
      <path
        fill={primaryMain}
        d="M106.364 27.249l-11.679 6.754c-1.763 1.023-4.64 1.023-6.435 0l-14.308-8.15c-1.79-1.02-1.81-2.693-.046-3.697l11.678-6.761c1.764-1.02 4.64-1.023 6.435 0l14.309 8.15c1.79 1.03 1.809 2.685.046 3.704z"
      ></path>
      <path
        fill={primaryMain}
        d="M98.822 31.542l-1.934 1.108-5.96-3.4a6.168 6.168 0 01-3.17.323l-.286-.054-.225-.123c-.498-.27-4.93-2.654-5.936-3.389-1.067-.77-.514-1.923 0-2.63l-4.752-2.693 1.933-1.108 6.188 3.527-.515.515c-.549.574-.839 1.277-.688 1.447.615.45 3.395 1.992 5.31 3.027.404-.035.79-.18 1.117-.42l.948-.661 7.97 4.53zM102.393 29.468l1.933-1.108-5.97-3.4c.827-.715.773-1.442.537-1.823l-.097-.165-.209-.127c-.475-.285-4.667-2.808-5.951-3.381-1.365-.608-3.372-.28-4.582 0L83.3 16.772l-1.934 1.107 6.188 3.527.9-.288c.998-.32 2.22-.493 2.518-.408.774.35 3.48 1.923 5.31 3.023-.027.135-.155.385-.72.646l-1.14.55 7.97 4.539zM100.931 30.4l-.406.234-20.744-11.82.402-.234 20.748 11.82zM94.595 34.07l-.406.23-20.744-11.815.406-.235 20.744 11.82zM107.267 26.73l-.403.234-20.747-11.82.406-.234 20.744 11.82z"
      ></path>
      <path
        fill={secondaryMain}
        d="M115.164 34.434a3.284 3.284 0 01-1.492.309 3.083 3.083 0 01-1.433-.407c-.487-.276-.705-.597-.652-.965.055-.367.374-.719.956-1.056l.395-.228c.382-.22.785-.376 1.211-.467.427-.089.844-.107 1.249-.054.408.052.777.171 1.108.358.438.248.668.517.688.808.022.29-.16.571-.547.845l-.548-.31c.28-.215.414-.41.402-.585-.01-.173-.157-.34-.441-.5-.348-.197-.749-.277-1.203-.242-.452.037-.914.192-1.386.465l-.397.23c-.446.257-.707.515-.783.773-.076.258.055.482.391.672.303.17.602.263.898.275.3.013.645-.064 1.036-.23l.548.31zm2.618 1.07l-.97-.547-1.661.96-.547-.31 4.105-2.373 1.367.772c.465.263.717.526.756.788.041.264-.14.512-.542.745a2.126 2.126 0 01-.878.268 2.937 2.937 0 01-1.004-.08l-.773 1.555-.034.02-.584-.33.765-1.467zm-.527-.803l.836.472c.27.153.554.234.852.243.3.01.567-.051.8-.186.253-.147.371-.303.354-.467-.016-.164-.167-.328-.452-.491l-.834-.471-1.556.9zm5.161 3.152l-1.789-1.011-1.455.841 2.079 1.175-.443.256-2.623-1.483 4.105-2.373 2.595 1.466-.445.257-2.051-1.158-1.319.763 1.789 1.01-.443.257zm-.93 1.644l4.105-2.374 1.165.658c.36.203.598.428.716.676a.773.773 0 01-.036.75c-.14.254-.398.49-.774.71l-.262.152a3.903 3.903 0 01-1.245.46c-.44.084-.878.092-1.314.024a3.615 3.615 0 01-1.212-.41l-1.143-.646zm4.204-1.809l-3.217 1.86.573.324a2.53 2.53 0 001.367.328c.494-.018.98-.165 1.46-.442l.239-.139c.467-.27.718-.541.754-.815.04-.274-.14-.526-.541-.757l-.635-.359zm.191 4.292l-.545-.307 4.106-2.374.544.307-4.105 2.374zm7.425.012l-1.327-.75-3.66 2.116-.541-.306 3.66-2.116-1.325-.748.446-.258 3.193 1.804-.446.258zm2.619 4.175a3.277 3.277 0 01-1.491.308 3.086 3.086 0 01-1.433-.406c-.487-.276-.705-.598-.652-.965.055-.367.373-.719.956-1.056l.395-.228c.381-.22.785-.376 1.211-.467.427-.09.844-.107 1.249-.055.408.052.777.172 1.107.359.439.248.668.517.689.808.022.29-.16.571-.547.845l-.548-.31c.28-.215.414-.41.402-.585-.011-.174-.157-.34-.441-.5-.348-.197-.749-.278-1.203-.242-.452.037-.914.191-1.386.464l-.398.23c-.445.258-.706.516-.782.774-.076.257.054.482.391.672.302.17.602.262.898.275.299.012.645-.064 1.036-.23l.547.31zm2.795 1.844l-1.73-.978-1.46.4-.561-.317 5.682-1.483.476.27-2.526 3.266-.558-.316.677-.842zm-1.12-1.142l1.404.793 1.217-1.508-2.621.715zm4.732 2.51l-.97-.549-1.661.96-.547-.309 4.105-2.374 1.367.773c.465.262.717.525.756.788.041.264-.14.512-.542.745a2.126 2.126 0 01-.878.267 2.937 2.937 0 01-1.004-.08l-.773 1.555-.034.02-.584-.33.765-1.467zm-.527-.805l.836.473c.271.153.555.234.853.243.299.01.566-.052.799-.187.254-.146.372-.302.354-.467-.016-.164-.167-.327-.452-.49l-.834-.472-1.556.9zm.93 2.931l4.106-2.374 1.165.659c.359.203.598.428.716.675a.773.773 0 01-.036.75c-.14.254-.398.49-.774.71l-.262.152a3.903 3.903 0 01-1.245.46 3.83 3.83 0 01-1.315.025 3.617 3.617 0 01-1.212-.411l-1.143-.646zm4.205-1.809l-3.218 1.86.573.324c.42.237.876.347 1.368.328.493-.017.98-.165 1.459-.442l.24-.139c.466-.269.717-.54.754-.815.04-.274-.141-.526-.541-.757l-.635-.359zM92.821 60.386L48.307 34.824c-.987-.566-.863-1.539.274-2.212 1.137-.654 2.862-.723 3.848-.157l44.514 25.562c.986.565.863 1.538-.278 2.207-1.137.654-2.858.727-3.844.162z"
      ></path>
      <path
        fill={secondaryMain}
        d="M159.496 62.467l-54.26 31.416c-3.183 1.842-8.38 1.846-11.601 0L2.463 41.959c-3.225-1.839-3.264-4.823-.08-6.666l54.274-31.42c3.183-1.842 8.38-1.846 11.602 0l91.167 51.924c3.214 1.839 3.252 4.824.07 6.67z"
      ></path>
      <path
        fill={secondaryMain}
        d="M160.022 60.25l-54.275 31.42c-3.182 1.842-8.38 1.842-11.601 0L2.978 39.746c-3.229-1.839-3.267-4.823-.085-6.666L57.165 1.657c3.182-1.843 8.38-1.847 11.6 0l91.168 51.924c3.237 1.842 3.272 4.827.089 6.669z"
      ></path>
      <path
        fill="url(#paint3_linear)"
        d="M160.027 60.246l-54.279 31.42a8.719 8.719 0 01-1.265.6c-3.163 1.22-7.514 1.02-10.344-.588L2.97 39.754c-3.225-1.839-3.264-4.82-.081-6.662L27.756 18.7 57.164 1.672c3.183-1.842 8.376-1.846 11.601 0l91.168 51.924c3.233 1.827 3.271 4.808.093 6.65z"
        opacity="0.58"
      ></path>
      <path
        fill="url(#paint4_linear)"
        d="M129.349 77.87l-24.866 14.397c-3.163 1.22-7.514 1.02-10.344-.588L2.97 39.755c-3.225-1.839-3.264-4.82-.081-6.662l24.866-14.392c3.163-1.22 7.51-1.02 10.34.588l91.168 51.924c3.225 1.835 3.264 4.82.085 6.658z"
        opacity="0.58"
      ></path>
      <path
        fill={secondaryMain}
        d="M70.725 25.223L59.05 31.985c-1.764 1.019-4.64 1.023-6.439 0l-14.308-8.15c-1.79-1.024-1.814-2.693-.047-3.697l11.68-6.757c1.766-1.024 4.64-1.024 6.438 0l14.308 8.15c1.787 1.015 1.81 2.673.043 3.692z"
      ></path>
      <path
        fill={primaryMain}
        d="M63.181 29.51l-1.914 1.112-5.967-3.4a6.22 6.22 0 01-3.171.323l-.29-.058-.22-.119c-.503-.269-4.931-2.654-5.937-3.388-1.067-.77-.518-1.923 0-2.631l-4.748-2.692 1.914-1.108 6.187 3.523-.499.52c-.545.576-.835 1.28-.688 1.45.615.45 3.395 1.992 5.31 3.026a2.254 2.254 0 001.121-.419l.947-.662 7.955 4.524zM66.76 27.442l1.914-1.107-5.975-3.4c.824-.72.774-1.443.538-1.823l-.1-.166-.21-.127c-.471-.284-4.663-2.807-5.951-3.38-1.365-.608-3.368-.281-4.583 0l-4.752-2.693-1.934 1.108 6.187 3.527.898-.293c.997-.315 2.22-.488 2.521-.403.773.35 3.48 1.923 5.31 3.023-.027.134-.155.384-.724.646l-1.16.55 8.02 4.538zM65.294 28.372l-.402.231-20.747-11.816.406-.234 20.743 11.82zM58.954 32.04l-.402.235-20.747-11.816.406-.234L58.954 32.04zM71.63 24.706l-.406.235L50.48 13.12l.407-.234 20.743 11.82z"
      ></path>
      <path
        fill={secondaryMain}
        d="M79.523 32.403a3.28 3.28 0 01-1.491.308 3.083 3.083 0 01-1.433-.406c-.488-.276-.705-.598-.653-.965.055-.367.374-.719.957-1.056l.394-.228c.382-.22.785-.376 1.211-.467.428-.09.844-.107 1.25-.054.407.051.776.17 1.107.358.439.248.668.517.688.808.023.29-.16.571-.547.845l-.547-.31c.28-.215.413-.41.401-.585-.01-.174-.157-.34-.44-.5-.348-.197-.75-.278-1.203-.242-.453.037-.915.192-1.386.464l-.398.23c-.446.258-.706.516-.782.773-.076.258.054.482.39.673.303.17.602.262.898.275.3.012.646-.064 1.037-.23l.547.31zm2.618 1.07l-.97-.548-1.66.96-.548-.309 4.106-2.373 1.366.772c.465.263.717.525.756.788.041.264-.14.512-.542.745a2.126 2.126 0 01-.878.268 2.94 2.94 0 01-1.004-.081l-.773 1.556-.034.02-.584-.331.765-1.467zm-.527-.804l.836.473c.27.153.555.234.853.243.3.01.566-.052.799-.186.254-.147.372-.303.354-.468-.016-.163-.167-.327-.452-.49l-.834-.472-1.556.9zm5.162 3.153l-1.79-1.011-1.454.84 2.078 1.175-.442.256-2.623-1.482 4.105-2.374 2.594 1.467-.445.257-2.05-1.158-1.32.763 1.79 1.01-.443.257zm-.93 1.643l4.104-2.373 1.166.658c.359.203.598.428.716.675a.773.773 0 01-.036.75c-.14.255-.398.491-.774.71l-.262.153a3.911 3.911 0 01-1.245.46c-.44.084-.88.092-1.315.024a3.619 3.619 0 01-1.212-.41l-1.143-.647zm4.203-1.808l-3.217 1.86.573.324c.42.237.876.346 1.367.328.494-.018.98-.165 1.46-.442l.24-.14c.466-.269.717-.54.754-.814.04-.274-.14-.527-.541-.757l-.636-.36zm.191 4.292l-.544-.308 4.105-2.373.544.307-4.105 2.374zm7.426.012l-1.327-.75-3.66 2.116-.542-.306 3.66-2.116-1.324-.748.445-.258 3.193 1.804-.445.258zm2.619 4.175a3.28 3.28 0 01-1.492.308 3.081 3.081 0 01-1.432-.407c-.488-.275-.706-.597-.653-.965.055-.366.374-.718.957-1.055l.394-.228c.382-.221.785-.377 1.211-.467.427-.09.844-.108 1.249-.055.408.052.777.171 1.108.358.438.248.668.518.688.809.022.29-.16.57-.547.844l-.547-.309c.279-.216.413-.41.401-.585-.01-.174-.157-.34-.441-.5-.347-.197-.748-.278-1.203-.242-.452.036-.914.191-1.386.464l-.397.23c-.446.258-.706.515-.782.773-.076.258.054.482.39.672.303.171.602.263.898.276.3.012.645-.065 1.037-.23l.547.309zm2.794 1.843l-1.729-.977-1.46.4-.562-.317 5.682-1.483.476.269-2.525 3.266-.559-.315.677-.843zm-1.12-1.142l1.404.793 1.217-1.507-2.621.714zm4.732 2.51l-.97-.548-1.66.96-.548-.31 4.106-2.373 1.366.772c.465.263.717.526.756.789.041.264-.139.512-.542.744a2.121 2.121 0 01-.878.268 2.94 2.94 0 01-1.004-.08l-.773 1.555-.033.02-.585-.33.765-1.467zm-.527-.804l.837.473c.27.152.554.233.852.243.3.01.566-.052.799-.187.254-.147.372-.303.354-.467-.016-.164-.166-.328-.452-.491l-.834-.471-1.556.9zm.931 2.93L111.2 47.1l1.165.658c.36.203.598.428.716.676a.773.773 0 01-.036.75c-.14.254-.398.49-.774.71l-.262.152a3.903 3.903 0 01-1.245.46c-.44.084-.878.092-1.314.025a3.628 3.628 0 01-1.213-.411l-1.142-.646zm4.204-1.808l-3.217 1.86.573.324a2.53 2.53 0 001.367.328c.494-.018.98-.165 1.46-.442l.239-.139c.466-.27.718-.541.754-.815.04-.274-.14-.526-.541-.757l-.635-.359zM109.195 80.042l-89.404-51.34c-.986-.565-.863-1.538.274-2.207 1.137-.654 2.862-.723 3.848-.158l89.404 51.34c.986.565.863 1.538-.278 2.207-1.137.658-2.858.724-3.844.158zM57.184 58.36L12.67 32.799c-.986-.569-.863-1.557.274-2.211 1.141-.654 2.862-.723 3.848-.158l44.515 25.562c.986.566.862 1.539-.275 2.208-1.14.654-2.862.727-3.848.162zM102.492 84.387l-32.24-18.508c-.987-.57-.863-1.558.278-2.212 1.137-.654 2.861-.723 3.848-.158l32.236 18.512c.986.566.862 1.539-.278 2.208-1.137.635-2.862.708-3.844.158z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="60.729"
          x2="136.873"
          y1="80.522"
          y2="-53.883"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.13" stopOpacity="0.69"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="50715"
          x2="32618.2"
          y1="9832.44"
          y2="45141.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.13" stopOpacity="0.69"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="237799"
          x2="276590"
          y1="-69763.8"
          y2="-90874.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.13" stopOpacity="0.69"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="295988"
          x2="349821"
          y1="-92581.5"
          y2="-119907"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.13" stopOpacity="0.69"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="230428"
          x2="269218"
          y1="-73139.6"
          y2="-94251.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.13" stopOpacity="0.69"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

CreditCards.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CreditCards;
