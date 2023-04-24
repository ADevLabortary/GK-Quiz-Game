import { FaUserCircle } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-4xl font-bold text-white mb-8">
          About Alrian
        </div>
        <div className="flex flex-col items-center mb-8">
          <FaUserCircle className="text-8xl mb-5 text-yellow-300 " />
          <div className="text-white text-xl text-center">
            <h1 className="text-4xl font-bold mb-2 text-green-200">Hi there!</h1>
             My name is Alrian and I'm a <b>young</b>, <b>competent</b>, and
            <b> hardworking developer</b>. I created this game to showcase my web
            development skills and to help people improve their English
            vocabulary for various exams, including <b> ES, MS, HS, KSAT, TOEIC,
            TOEFL, TEPS, SAT, IELTS, GRE, GMAT</b> and <b>more!</b>.
          </div>
        </div>
        <div className="text-white text-xl text-center">
          Word associations are a very effective way to learn vocabulary
          because they help you understand words quickly and memorize them
          effectively. That's why I created this game with 10 levels of
          difficulty, each consisting of 10 questions. Each question gives you
          three related words, and you have to select the two words that are
          most closely related to the first three words.
        </div>
      </div>
    </div>
  );
}

export default About;
