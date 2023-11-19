import React from 'react';
import Navbar from './components/navbar';
import myImage from './img/pic.jpg';
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className='w-full h-screen bg-blue-200'>
      <Navbar logo='YA' />
      <div className='flex flex-col justify-center items-center'>
        <Element name='home' className='w-full max-w-3x1 flex flex-row justify-center gap-9' style={{ height: '88vh' }}>
          <div className='hero-1 w-full max-w-lg flex flex-col gap-3 items-start'>
            <div className='uppercase text-5xl font-semibold justify-center' style={{ marginTop: '250px' }}>
              Hi, I'm Ysabel Andrei, A future Computer Engineer
            </div>
            <div className='flex flex-row gap-5 items-center'>
              <div>Data Visualization</div>
              <div>Statistics</div>
              <div>Problem Solving</div>
            </div>

            <div className='flex flex-row gap-4 items-center'>
              <button className='px-4 py-1 border border-black rounded-full'>
                Read more 
              </button>
              <button className='text-white px-4 py-1 border bg-blue-500 rounded-full'>
                Hire now
              </button>
            </div>
          </div>
          <img src={myImage} alt='My Image' style={{ height: '500px', padding: '10px', borderRadius: '40px', marginTop: '120px' }} />
        </Element>
      </div>
      <div className='w-full h-screen bg-blue-200'>
        <div className='flex flex-col justify-center items-center'>
          <Element name='about' className='w-full max-w-3x1 flex flex-col items-center' style={{ height: '100vh' }}>
            <div className='uppercase text-5xl font-semibold' style={{ marginTop: '150px' }}>
              <h1 >ABOUT Me</h1>
            </div>
            <br />
            <div className='flex flex-col items-center'>
              <h1 style={{ paddingLeft: '100px', paddingRight: '100px', textAlign:'Justify'}}>
              Hey there! I'm Ysabel Andrei G. Tapnio, a tech enthusiast diving into the world of Computer Engineering. From a young age,
              I've been captivated by how things work and the potential for innovation in technology. That fascination led me here—to
              explore the fusion of creativity and technical skills in Computer Engineering. Beyond the circuits and codes, I thrive 
              on problem-solving and the thrill of creating solutions that enhance lives. I'm excited to explore the realms of 
              artificial intelligence, cybersecurity, and the endless possibilities that technology offers to revolutionize industries 
              and society. When I'm not immersed in the digital realm, you'll find me seeking adventures in nature, capturing moments 
              through photography, or indulging in a good book. I believe in the importance of a well-rounded life, where diverse 
              experiences fuel creativity and broaden perspectives.
              <br></br>
              <br></br>
              Ever since I can remember, I've been fascinated by how things work, especially tech gadgets. That curiosity grew into a 
              deep interest in understanding the nuts and bolts of technology, which led me to pursue a path in Computer Engineering.
              What drives me is the thrill of problem-solving. I love tackling puzzles and finding solutions that can make a real 
              difference in people's lives. That's why I'm excited about diving into areas like artificial intelligence and 
              cybersecurity—there's so much potential there to create impactful solutions. Beyond my love for all things tech, I'm also 
              someone who enjoys the simple pleasures of life. You'll often find me outdoors, exploring nature or capturing moments with my camera. I believe in the power of diverse experiences, whether through books or traveling, to broaden our horizons and inspire creativity.
              I'm eager to start this journey into the world of Computer Engineering. My goal is to use my skills and knowledge to 
              innovate and contribute to a future where technology isn't just powerful but also positively shapes the world around us.
              <br></br>
              <br></br>
              While I'm passionate about technology, I believe balance is key. Striking a chord between the digital and the analog 
              worlds, I find solace in the beauty of nature, the depth of a good book, and the vibrancy of cultural exploration.
              Embarking on this journey into Computer Engineering isn't just about a career path; it's a canvas where I aim to paint a 
              future woven with innovation, empathy, and purpose. I'm eager to channel my skills and knowledge toward shaping a world 
              where technology harmonizes seamlessly with human aspirations, making a tangible difference in people's lives.
              </h1>
            </div>
          </Element>
          </div>
        </div>
      
      <div className='w-full h-screen bg-blue-200'>
        <div className='flex flex-col justify-center items-center'>
          <Element name='portfolio' className='w-full max-w-3x1 flex flex-col items-center' style={{ height: '100vh' }}>
          <div className='uppercase text-5xl font-semibold' style={{ marginTop: '110px' }}>
          <h1>Portfolio</h1></div>
            <div className='flex flex-row uppercase text-3xl items-center' style={{ marginTop: '110px', gap: '350px' }}>
              <h1>Student Database</h1> <h1>Website using HTML </h1></div>
            <div className='flex flex-row gap-4 items-center'  >
              <img src='src/img/proj1.png' style={{ height: '300px', padding: '10px'}} />
              <img src='src/img/proj4.png' style={{ height: '300px', padding: '10px'}} /> 
             </div>
            </Element>
        </div>
    </div>

    <Element name='contacts' className='p-6 w-full flex flex-row justify-between items-start bg-blue-100  shadow-md z-10'>
    <div className='flex flex-col  items-center gap-2'  style={{marginTop: '50px'}}>
              <h1 className='text-5xl font-semibold'>Ysabel Andrei G. Tapnio</h1>
              <h1>Future Computer Engineer</h1>
        </div>
    
    <div className='flex flex-col  items-start gap-2'  >

              <h1 className='uppercase font-semibold'>Facebook:</h1>
              <a href='https://www.facebook.com/ysabelandreitapnio/'>Ysabel Andrei Tapnio</a>
              <h1 className='uppercase font-semibold'>Instagram:</h1>
              <a href='https://www.instagram.com/ysabelandreii_/'>ysabelandreii_</a>
              <h1 className='uppercase font-semibold'>Gmail:</h1>
              <a href='ysabeltapnio@gmail.com'>ysabeltapnio</a>
        </div>

        <div className='flex flex-col  items-end gap-2'  >
              <h1>Email: ysabeltapnio@gmail.com</h1>
              <button className='text-white px-4 py-1 border bg-blue-500 rounded-full'>
                Email Now
              </button>
        </div>

      </Element>
      
    
</div>
    
  );
}

export default App;



