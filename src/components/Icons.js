import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ fill, height, width }) => (
  <svg
    x="0px"
    y="0px"
    height={height || '100%'}
    width={width || '100%'}
    viewBox="0 0 228 35"
    shapeRendering="geometricPrecision"
    preserveAspectRatio="xMinYMin meet"
  >
    <polygon
      fill={fill}
      points="42.5,26 45.5,26 45.5,12 50.5,12 50.5,9 37.5,9 37.5,12 42.5,12 	"
    />
    <path
      fill={fill}
      d="M56.736,9H53.5l-6.422,17H50l1.5-4h7l1.5,4h3.5l-0.336-0.28L56.736,9z M52.5,19l2.598-7.053h0.047h0.024L57.709,19H52.5z"
    />
    <polygon fill={fill} points="78,9 74.782,9 63.5,26 63.5,26 66.738,26 	" />
    <polygon fill={fill} points="67,9 63.5,9 75,26 78.5,26 	" />
    <polygon
      fill={fill}
      points="88.5,26 91.5,26 91.5,19.001 98.5,19.001 98.5,16 91.5,16 91.5,12 100.5,12 100.5,9 88.5,9 	"
    />
    <path
      fill={fill}
      d="M108.5,8.5c-5,0-8,4.5-8,9s3,9,8,9s8-4.5,8-9S113.5,8.5,108.5,8.5z M108.5,24c-4,0-5-4-5-6.5s1-6.5,5-6.5s5,4,5,6.5S112.5,24,108.5,24z"
    />
    <path
      fill={fill}
      d="M128.5,18.898c0,2.102,0,5.102-4,5.102s-4-3-4-5.102V9h-3v10.872c0,4.128,3,6.628,7,6.628s7-2.5,7-6.628V9h-3V18.898z"
    />
    <polygon
      fill={fill}
      points="144.5,21.512 136.5,9 133.5,9 133.5,26 136.5,26 136.5,13.509 144.5,26 147.5,26 147.5,9 144.5,9 	"
    />
    <path
      fill={fill}
      d="M156.5,9h-7v17h7c5,0,7-4,7-8.503C163.5,13,161.5,9,156.5,9z M155,23.549h-2.5v-12.1h2.5c4.641,0,5.5,2.551,5.5,6.049C160.5,21,159.641,23.549,155,23.549z"
    />
    <rect x="191.5" y="9" fill={fill} width="3" height="17" />
    <path
      fill={fill}
      d="M17.5,1C8.388,1,1,8.387,1,17.5c0,3.438,1.052,6.63,2.852,9.271L4.5,25c0,0,4-2,6-2c1,0,2,0,4,1c-1-2-3-2-4-2c-3,0-6,2-6,2l-1-1c0-0.5,0.5-0.875,1-1c0,0,3-2,5-2c1,0,3,0,4,1c-1-2-3-2-4-2c-2,0-5,2-5,2c0-1,1-2,1-2c0-2,4-5,4-5v-2l1-3l1,3v2c0,0,4,3,4,5c0,0,1,1,1,2c0,0,0,1-1,1c0,0,2,0,2,1l-1,1v1l13.158,3.65C32.355,25.714,34,21.8,34,17.5C34,8.387,26.613,1,17.5,1z"
    />
    <polygon
      fill={fill}
      points="12.5,26 10.5,27 8.5,26 5.5,28 4.5,28 5.5,29 8.5,27 8.5,31 9.5,32 9.5,27.5 10.5,28 11.5,27.5 11.5,32 12.5,33 12.5,27 14.5,27.5 14.5,33 15.5,33 15.5,27.75 17.5,28.25 17.5,33 18.5,33 18.5,28.5 20.5,29 20.5,33 21.5,33 21.5,29.25 23.5,29.75 23.5,33 24.5,32 24.5,30 28.5,31 28.5,30 	"
    />
    <path
      fill={fill}
      d="M172.5,9h-3L163,26h3l1.5-4h7l1.5,4h3L172.5,9z M168.5,19l2.5-7l2.5,7H168.5z"
    />
    <polygon
      fill={fill}
      points="181.5,26 184.5,26 184.5,12 189.5,12 189.5,9 176.5,9 176.5,12 181.5,12 	"
    />
    <polygon
      fill={fill}
      points="223.5,21.512 215.5,9 212.5,9 212.5,26 215.5,26 215.5,13.509 223.5,26 226.5,26 226.5,9 223.5,9 	"
    />
    <path
      fill={fill}
      d="M203.5,8.5c-5,0-8,4.5-8,9s3,9,8,9s8-4.5,8-9S208.5,8.5,203.5,8.5z M203.5,24c-4,0-5-4-5-6.5s1-6.5,5-6.5s5,4,5,6.5S207.5,24,203.5,24z"
    />
  </svg>
);

Logo.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

const MenuIcon = ({ fill }) => (
  <svg height="100%" viewBox="0 0 32 32" shapeRendering="geometricPrecision">
    <path
      fill={fill}
      d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
    />
  </svg>
);

MenuIcon.propTypes = { fill: PropTypes.string };

const CloseIcon = ({ fill }) => (
  <svg viewBox="0 0 12 12" height="100%">
    <line x1="1" y1="11" x2="11" y2="1" stroke={fill} strokeWidth="2" />
    <line x1="1" y1="1" x2="11" y2="11" stroke={fill} strokeWidth="2" />
  </svg>
);

CloseIcon.propTypes = { fill: PropTypes.string };

const TaxProm = () => (
  <svg x="0px" y="0px" viewBox="0 0 683 94">
    <g>
      <g>
        <path
          fill="#FCC70B"
          d="M107.37,18.2h-26.3v68.9h-1.2V18.2h-26.5v-1.1h54V18.2z"
        />
        <path
          fill="#FCC70B"
          d="M160.21,87.1h-0.9c-0.3,0-0.5-0.17-0.6-0.5l-9.75-23.4h-36.9l-9.75,23.4c-0.1,0.33-0.33,0.5-0.7,0.5h-0.8
			l29.2-70h1L160.21,87.1z M148.56,62.2l-17.25-41.4c-0.17-0.37-0.31-0.72-0.42-1.05c-0.12-0.33-0.24-0.68-0.38-1.05
			c-0.13,0.37-0.26,0.72-0.38,1.05c-0.12,0.33-0.26,0.68-0.43,1.05l-17.25,41.4H148.56z"
        />
        <path
          fill="#FCC70B"
          d="M222.93,87.1h-1.1c-0.27,0-0.46-0.09-0.58-0.27c-0.12-0.18-0.22-0.33-0.32-0.43l-25.05-34.6
			c-0.07,0.1-0.13,0.2-0.17,0.3s-0.14,0.23-0.27,0.4l-24.7,33.9c-0.17,0.17-0.31,0.33-0.42,0.48c-0.12,0.15-0.27,0.23-0.48,0.23
			h-1.1l26.35-35.85L169.93,17.1h1.1c0.27,0,0.46,0.09,0.57,0.27c0.12,0.18,0.23,0.33,0.33,0.43l23.95,32.85
			c0.07-0.13,0.13-0.25,0.2-0.35c0.07-0.1,0.15-0.23,0.25-0.4l23.4-32.1c0.1-0.17,0.23-0.33,0.38-0.48s0.33-0.23,0.52-0.23h1.1
			l-25.05,34.05L222.93,87.1z"
        />
        <path
          fill="#FCC70B"
          d="M283.97,17.1c7.63,0,13.49,1.65,17.58,4.95c4.08,3.3,6.13,8.32,6.13,15.05c0,2.9-0.58,5.58-1.73,8.02
			c-1.15,2.45-2.77,4.56-4.88,6.33c-2.1,1.77-4.6,3.15-7.5,4.15s-6.1,1.5-9.6,1.5h-14.6v30h-1.2v-70H283.97z M283.97,56.1
			c3.43,0,6.53-0.49,9.3-1.48c2.77-0.98,5.13-2.33,7.07-4.05c1.95-1.72,3.46-3.73,4.52-6.02c1.07-2.3,1.6-4.78,1.6-7.45
			c0-6.23-1.88-10.96-5.63-14.17s-9.38-4.83-16.88-4.83h-14.6v38H283.97z"
        />
        <path
          fill="#FCC70B"
          d="M366.53,87.1h-0.8c-0.27,0-0.48-0.02-0.65-0.08c-0.17-0.05-0.38-0.22-0.65-0.52l-26.2-31.4
			c-0.27-0.33-0.54-0.62-0.83-0.85c-0.28-0.23-0.6-0.42-0.95-0.57c-0.35-0.15-0.77-0.25-1.25-0.3c-0.48-0.05-1.08-0.07-1.77-0.07
			h-10.9v33.8h-1.2v-70h16.2c7.3,0,12.91,1.42,16.83,4.25c3.92,2.83,5.88,7.25,5.88,13.25c0,2.83-0.55,5.39-1.65,7.67
			c-1.1,2.28-2.65,4.23-4.65,5.83s-4.39,2.85-7.18,3.75c-2.78,0.9-5.86,1.38-9.23,1.45c0.33,0.13,0.63,0.31,0.9,0.52
			c0.27,0.22,0.53,0.48,0.8,0.77L366.53,87.1z M322.53,52.3h14.1c3.43,0,6.52-0.41,9.27-1.23c2.75-0.82,5.1-1.98,7.05-3.5
			c1.95-1.52,3.45-3.37,4.5-5.55c1.05-2.18,1.57-4.66,1.57-7.42c0-5.7-1.85-9.88-5.55-12.52s-9.02-3.98-15.95-3.98h-15V52.3z"
        />
        <path
          fill="#FCC70B"
          d="M437.17,52.1c0,5.53-0.79,10.5-2.38,14.9c-1.58,4.4-3.8,8.14-6.65,11.23c-2.85,3.08-6.26,5.45-10.23,7.1
			s-8.35,2.48-13.15,2.48c-4.77,0-9.13-0.83-13.07-2.48c-3.95-1.65-7.35-4.02-10.2-7.1c-2.85-3.08-5.07-6.83-6.65-11.23
			c-1.58-4.4-2.38-9.37-2.38-14.9c0-5.5,0.79-10.46,2.38-14.88c1.58-4.42,3.8-8.17,6.65-11.27s6.25-5.48,10.2-7.15
			c3.95-1.67,8.31-2.5,13.07-2.5c4.8,0,9.18,0.82,13.15,2.47c3.97,1.65,7.38,4.03,10.23,7.13c2.85,3.1,5.07,6.86,6.65,11.28
			C436.38,41.59,437.17,46.57,437.17,52.1z M435.87,52.1c0-5.43-0.76-10.3-2.27-14.6c-1.52-4.3-3.64-7.95-6.38-10.95
			c-2.73-3-6.01-5.29-9.83-6.88c-3.82-1.58-8.02-2.38-12.63-2.38c-4.53,0-8.7,0.79-12.5,2.38c-3.8,1.58-7.07,3.88-9.82,6.88
			s-4.9,6.65-6.45,10.95c-1.55,4.3-2.33,9.17-2.33,14.6c0,5.43,0.78,10.29,2.33,14.58s3.7,7.92,6.45,10.9
			c2.75,2.98,6.02,5.27,9.82,6.85c3.8,1.58,7.97,2.38,12.5,2.38c4.6,0,8.81-0.79,12.63-2.38c3.82-1.58,7.09-3.87,9.83-6.85
			c2.73-2.98,4.86-6.62,6.38-10.9C435.11,62.39,435.87,57.53,435.87,52.1z"
        />
        <path
          fill="#FCC70B"
          d="M519.35,17.1v70h-1V20.2c0-0.17,0-0.33,0-0.48s0.02-0.31,0.05-0.48L487.75,72.6c-0.23,0.33-0.47,0.5-0.7,0.5
			h-0.3c-0.23,0-0.47-0.17-0.7-0.5L454.4,19.2c0.03,0.17,0.05,0.33,0.05,0.5c0,0.17,0,0.33,0,0.5v66.9h-1v-70h0.4
			c0.3,0,0.53,0.13,0.7,0.4l31.8,53.55c0.13,0.2,0.24,0.38,0.33,0.55c0.08,0.17,0.16,0.33,0.22,0.5c0.07-0.17,0.14-0.33,0.23-0.5
			c0.08-0.17,0.19-0.35,0.33-0.55l30.8-53.55c0.17-0.27,0.4-0.4,0.7-0.4H519.35z"
        />
      </g>
      <g>
        <path
          fill="#0B93B4"
          d="M533.45,82.94h9.18c2.92,0,4.27-0.77,5.94-3.38h1.67l-2.83,7.78h-20.88l0.4-2.38
			c15.03-11.97,20.34-18.36,20.34-24.61c0-3.46-1.94-5.76-5.08-5.76c-3.51,0-6.25,2.79-6.25,6.17c0,2.7,1.53,4.27,4.23,4.27
			c-0.54,1.49-2.02,2.39-3.87,2.39c-2.93,0-4.9-2.25-4.9-5.53c0-5.35,5.26-9.67,11.74-9.67c5.67,0,9.45,3.28,9.45,8.28
			c0,6.12-5.35,12.37-19.12,22.23V82.94z"
        />
        <path
          fill="#0B93B4"
          d="M556.9,75.74c0-11.52,8.46-23.49,16.56-23.49c5.17,0,8.64,4.59,8.64,11.47c0,11.43-8.73,24.07-16.6,24.07
			C560.36,87.8,556.9,82.94,556.9,75.74z M561.89,79.29c0,3.87,1.53,6.12,4.19,6.12c5.17,0,10.98-13.23,10.98-24.97
			c0-3.73-1.44-5.85-4.05-5.85C567.83,54.59,561.89,67.78,561.89,79.29z"
        />
        <path
          fill="#0B93B4"
          d="M595.76,75.29c-0.58,2.38-1.21,4.59-1.21,6.34c0,2.38,1.13,3.92,4.81,3.92l-0.5,1.8h-16.65l0.5-1.8
			c4.19,0,6.21-1.31,7.42-6.25l4.59-18.49c0.04-0.27,0.09-0.54,0.09-0.72c0-0.45-0.18-0.58-0.67-0.58c-0.99,0-3.1,0.72-6.57,0.72
			l0.27-1.89c5.17,0,8.82-2.88,12.06-6.07h1.67L595.76,75.29z"
        />
        <path
          fill="#0B93B4"
          d="M620.05,52.25c5.89,0,9.58,4.86,9.58,12.6c0,11.88-8.64,22.95-17.86,22.95c-4,0-7.02-2.07-7.02-4.81
			c0-1.53,0.95-2.56,2.43-2.56c1.26,0,2.21,0.81,2.21,2.48c0,1.93,0.54,2.88,2.38,2.88c4.81,0,9.63-5.49,11.61-13.27l-0.13-0.09
			c-1.98,1.21-3.96,1.8-6.17,1.8c-5.62,0-9.4-3.78-9.4-9.4C607.67,58.1,613.48,52.25,620.05,52.25z M625.09,61.79
			c0-4.86-1.67-7.51-4.77-7.51c-4.14,0-7.29,4.73-7.29,10.8c0,4.59,1.67,6.93,4.86,6.93C622.21,72.01,625.09,67.91,625.09,61.79z"
        />
      </g>
    </g>
  </svg>
);

export { Logo, MenuIcon, CloseIcon, TaxProm };
