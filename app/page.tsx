'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from './assets/images/hiddenTrack-logo_white.png';

// importing Images
import step1Image from './assets/images/step1Image.webp';
import step2Image from './assets/images/step2Image.webp';

export default function Home() {
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [subStepNumber, setSubStepNumber] = useState<number>(1);
  const [subStepNumber1, setSubStepNumber1] = useState<string>('');
  const subStepsNumber1Data = [
    '0',
    '3 to 5 Days',
    '6 to 9 Days',
    'More than 10 Days',
    'I have exact Dates',
  ];
  const stepsData = [
    { step: 0, title: '', description: '' },
    {
      step: 1,
      subSteps: [
        { subStep: 0, title: '', description: '' },
        {
          subStep: 1,
          title: 'How long would you like to stay in Africa?',
          description: `Your African Adventure starts here. But first, we'd like to get to know you a bit better.
          Answer the following quick questions, and our Travel Expert will be in touch
          with you to start crafting your trip.`,
        },
        {
          subStep: 2,
          title: 'Excellent. When is your planned arrival and departure?',
          description: `Select two date ranges that you would like to stay in Africa. This will help us`,
        },
      ],

      image: step1Image,
    },
    {
      step: 2,
      subSteps: [
        { subStep: 0, title: '', description: '' },
        {
          subStep: 1,
          title: 'Which Year and Month suits you best?',
          description: `Select year and month that you would like to stay in Africa. This will help us`,
        },
      ],

      image: step2Image,
    },
  ];

  return (
    <div className='form'>
      <div className='container'>
        <div className='content'>
          <div className='header'>
            <div className='logo'>
              <Image src={Logo} width={120} height={69} alt='Logo' />
            </div>
            <div className='stepBar'>
              <div
                className='progress'
                style={{ width: stepNumber * 14 + '%' }}
              ></div>
            </div>
            <div className='stepNumber'>
              Step {stepNumber} of {stepsData.length - 1}
            </div>
          </div>
          <div className='stepContent'>
            <div className='stepTitle'>
              {stepsData[stepNumber]?.subSteps?.[subStepNumber].title}
            </div>
            <div className='stepDescription'>
              {stepsData[stepNumber]?.subSteps?.[subStepNumber].description}
            </div>
            <div className='stepForm'>
              {stepNumber === 1 && subStepNumber === 1 ? (
                <div className='stepNumber1'>
                  <div className='substepNumber1'>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[1]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => {
                        setSubStepNumber1(subStepsNumber1Data[1]);
                        setTimeout(() => {
                          setStepNumber(2);
                        }, 400);
                      }}
                    >
                      {subStepsNumber1Data[1]}
                    </div>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[2]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => {
                        setSubStepNumber1(subStepsNumber1Data[2]);
                        setTimeout(() => {
                          setStepNumber(2);
                        }, 400);
                      }}
                    >
                      {subStepsNumber1Data[2]}
                    </div>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[3]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => {
                        setSubStepNumber1(subStepsNumber1Data[3]);
                        setTimeout(() => {
                          setStepNumber(2);
                        }, 400);
                      }}
                    >
                      {subStepsNumber1Data[3]}
                    </div>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[4]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => {
                        setSubStepNumber1(subStepsNumber1Data[4]);
                        setTimeout(() => {
                          setSubStepNumber(2);
                        }, 400);
                      }}
                    >
                      {subStepsNumber1Data[4]}
                    </div>
                  </div>
                </div>
              ) : stepNumber === 1 && subStepNumber === 2 ? (
                <div className='subStepNumber2'>
                  <div>
                    <div className='subStepNumber2From'>Start Date</div>
                    <input type='date' className='subStepNumber2StartDate' />
                  </div>
                  <div>
                    <div className='subStepNumber2To'>End Date</div>
                    <input type='date' className='subStepNumber2EndDate' />
                  </div>
                </div>
              ) : stepNumber === 2 && subStepNumber === 1 ? (
                <div></div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className='image'>
          <Image
            src={stepsData[stepNumber]?.image || Logo}
            width={1000}
            height={1000}
            alt='Image'
          ></Image>
        </div>
      </div>
    </div>
  );
}
