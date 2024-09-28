import React from 'react';
import {
  introductionLessonDetails,
  introductionLessonHeader,
  introLessonQuestions,
} from '../lessons/data';
import './style/about.css';
import Loading from '../../components/skeleton/Loading';

const Tarief = () => {
  return introLessonQuestions.length > 0 ? (
    <>
      <div className="introduction" id="about">
        <h1 className="header">{introductionLessonHeader}</h1>
        <ul className="text-main">
          {introLessonQuestions.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
        <div
          className="text-main"
          dangerouslySetInnerHTML={{ __html: introductionLessonDetails }}
        />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Tarief;
