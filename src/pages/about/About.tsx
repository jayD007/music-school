import React from 'react';
import {
  introductionLessonDetails,
  introductionLessonHeader,
  introLessonQuestions,
} from '../lessons/data';
import './style/about.css';

interface Props {}

const About: React.FC<Props> = (props) => {
  return (
    <div className="introduction">
      <h1 className="header">{introductionLessonHeader}</h1>
      <ul>
        {introLessonQuestions.map((question, index) => (
          <li key={index}>{question.question}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: introductionLessonDetails }} />
    </div>
  );
};

export default About;
