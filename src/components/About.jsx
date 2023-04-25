import { FaUserCircle } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="bg-gray-800 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-4xl font-bold text-white mb-8">About Alrian</div>
        <div className="flex flex-col items-center mb-8">
          <FaUserCircle className="text-8xl mb-5 text-yellow-300 " />
          <div className="text-white text-xl text-center">
            <h1 className="text-4xl font-bold mb-2 text-green-200">
              Hi there!
            </h1>
            My name is <b>Alrian</b> and I'm a <b>young</b>, <b>competent</b>, and
            <b> hardworking developer</b>. I created this game to showcase my
            web development skills and to help people improve their General
            Knowledge for various exams, including <b>UPSC Civil Services Examination</b> (India), <b>Graduate Record Examination (GRE)</b> General Test (USA), <b>Scholastic Aptitude Test (SAT)</b> (USA), <b>General Aptitude Test Battery (GATB)</b> (USA), <b>Graduate Management Admission Test (GMAT)</b> (International), <b>Australian Citizenship Test</b> (Australia), <b>United Kingdom Citizenship Test (UK)</b>, <b>Federal Public Service Commission Competitive Examination</b> (Pakistan), <b>National Admissions Test for Law (LNAT)</b> (UK), <b>Common Admission Test (CAT)</b> (India).
          </div>
        </div>
        <div className="text-white text-xl text-center">
        "Test your knowledge with our exciting multiple-choice quiz game! With a variety of challenging questions covering a wide range of topics, you'll be entertained and educated at the same time. See how well you score and challenge your friends to beat your high score!"
        </div>
      </div>
    </div>
  );
}

export default About;
