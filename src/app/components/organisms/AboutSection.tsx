import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/about.jpg" alt="About" className="rounded-lg shadow-lg"/>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <Heading level={2} className="text-3xl mb-4">About Me</Heading>
          <Text className="mb-4">
            I'm a passionate front-end developer with a knack for creating engaging digital experiences.
          </Text>
          <Text>
            Whether I'm coding a new project or exploring the latest design trends, I bring creativity and precision to every task.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
