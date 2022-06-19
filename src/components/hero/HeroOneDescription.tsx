import { ReactNode } from 'react';

import Image from 'next/image';

type IHeroOneDescriptionProps = {
  title: ReactNode;
  // title2: ReactNode;
};

const HeroOneDescription = (props: IHeroOneDescriptionProps) => {
  return (
    <header className="">
      <div className="text-center leading mt-12">
        <Image
          alt=""
          src="/0xagon_full_bluegrey.png"
          width={369}
          height={111}
        />
        <style jsx>
          {`
            .leading {
              margin-top: 44px;
              line-height: 3rem;
            }
          `}
        </style>
      </div>
      <div className="title-properties mb-6 text-shine">
        {props.title}
        <style jsx>
          {`
            .title-properties {
              @apply whitespace-pre-line ml-auto;
              font-family: 'ibmplexmonoregular';
              width: max-content;
              text-align: end;
              color: #a1aec1;
              opacity: 0.6;
            }
            .text-shine {
              color: #a1aec1;
              padding: 12px 0px 12px 96px;
              background: linear-gradient(
                to right,
                #a1aec1 0,
                white 10%,
                #a1aec1 20%
              );
              background-position: 0;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shine 6s infinite linear;
              animation-fill-mode: forwards;
              -webkit-text-size-adjust: none;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
              white-space: nowrap;
            }
            @keyframes shine {
              0% {
                background-position: 0px;
              }
              5% {
                background-position: 240px;
              }
              100% {
                background-position: 240px;
              }
            }
          `}
        </style>
      </div>
      {/* <div className="title2-properties">
        {props.title2}
        <style jsx>
          {`
            .title2-properties {
              @apply mt-10 pl-1 text-6xl whitespace-pre-line leading-hero;
            }
          `}
        </style>
      </div> */}
    </header>
  );
};
export { HeroOneDescription };