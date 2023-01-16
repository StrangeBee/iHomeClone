import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form } from 'react-bootstrap';
import gallery1 from './img/bg-1.png';
import gallery2 from './img/bg-2.png';
import Cimg from './img/contact-bg.png';

import './App.css';


function App() {
  return (
    <div>
      <div className='md:flex justify-between mx-32 my-10'>
        <h1 className=' font-bold cursor-pointer'>iHome</h1>

        <div className='hidden md:flex'>
          <ul className='flex gap-8'>
            <li className=' font-bold cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </div>
      </div>

      {/* Learn More */}
      <section className=' bg-background'>
      
        
          <div className=' bg-hero_furn bg-auto bg-no-repeat bg-right mx-20 h-screen '>
            <div className='py-32 ml-12'>
              <h1 className='text-4xl'>
                Simple, Clean and Modern <br />
                <div className='text-6xl font-bold pt-6'>Minimalist Designs</div> <br />
                <div className='text-lg font-bold'>The minimalist look is more than just a <br />design philosophy, it is a way of life.</div>
              </h1>

              <Button className=' bg-button px-10 py-2 my-12 rounded-full text-white' >Learn More</Button>
            </div>
          </div>
      </section>

      <section className=' bg-background my-8'>
        <div className=' grid md:flex md:justify-around p-20'>
          <div>
            <h6 className='text-2xl font-bold'>We design your dream room <br /> with the most efficiency</h6>
            <p className='text-lg pt-7'>With our years of experience, <br /> We can handle any style.</p>

            <Button className=' bg-button px-10 py-2 mt-7 rounded-full text-white'>Contact Us</Button>
          </div>
           
          <div>
            <div className='md:flex'>
            <div className='bg-button w-4 h-4 mx-2 mt-2'></div>
              <div>
                <h6 className=' font-bold text-xl'>Creative Designers</h6>
                 <p>With our years of experience, We can <br /> handle any style and room.</p>
              </div>
            </div>

            <div className='md:flex pt-10'>
            <div className='bg-button w-4 h-4 mx-2 mt-2'></div>
              <div>
                <h6 className=' font-bold text-xl'>Quality</h6>
                 <p>We select well-designed products <br /> that are made of highest standard <br/>quality.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='md:flex'>
            <div className='bg-button w-4 h-4 mx-2 mt-2'></div>
              <div>
                <h6 className=' font-bold text-xl'>Professionals</h6>
                 <p>We're a team of experienced,<br /> competent, and passionate <br />professionals.</p>
              </div>
            </div>

            <div className='md:flex pt-4'>
            <div className='bg-button w-4 h-4 mx-2 mt-2'></div>
              <div>
                <h6 className=' font-bold text-xl'>Experience</h6>
                 <p>Furniture and design are in our DNA. <br />They've been our everyday life for <br />over ten years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className=' mb-32'>
        <div className=' text-center mb-8'>
          <h2 className=' font-extrabold'>Our Gallery</h2>
          <p className=' font-medium pt-3'>Elevating interiors to places <br /> of peace</p>
        </div>
        <div className='px-20'>
          <img src={gallery1} className="w-full" alt="" />
          <img src={gallery2} className="w-full pt-7" alt="" />
        </div>
      </section>

      <section className='flex flex-row relative mb-32'>
        <div className='bg-background py-20 pl-40  ml-20 basis-2/3'>
          <h2 className=' font-normal text-3xl'>Send us a Message <span className="">--</span> Book an appointment</h2>
          <p className='  py-6 text-sm'>Questions and comments are important to us, please use the contact <br /> form we'll reply within 24hr.</p>

          <Form className=''>
            <Form.Group className='mb-3 grid'>
              <Form.Label >Name</Form.Label>
              <Form.Control type="text" className='w-3/4 mt-3 outline-1 '/>
            </Form.Group>

            <Form.Group className='mb-3 grid' controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' className='w-3/4 mt-3' />
            </Form.Group>

            <Form.Group className='mb-3 grid'>
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' rows={4} className='w-3/4 mt-3'/>
            </Form.Group>

            <Button className=' bg-button px-10 py-2 rounded-full text-white'>Send</Button>
          </Form>
        </div>
        <img src={Cimg} className=" py-12 w-80 inset-y-0 right-20 absolute" alt="" />
      </section>

      <section className='flex justify-between mx-16 mb-32'>
        <div>
          <h2 className=' font-bold'>iHome</h2>
          <p className=' font-semibold text-sm pt-3'>We are about achieving <br /> better design through<br />simplicity- a simplicity form,<br />space materiality detail <br /> and color.</p>
        </div>
        <div>
          <h2 className=' font-bold'>Address</h2>
          <p className=' font-semibold text-sm pt-3'>194 greenville est, Victoria Bay, <br /> VB 34562</p>
          <p className=' font-semibold text-sm pt-20'>RTGO + BD Victoria Bay</p>
        </div>
        <div>
          <h2 className=' font-bold'>Contact</h2>
          <p className=' font-semibold text-sm pt-3'>+234 9078-4900 <br /> hello@iHomeinteriordesign.com</p>
          
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </div>
        <div>
          <h2 className=' font-bold'>Office Hours</h2>
          <p className=' font-semibold text-sm pt-3'>Saturday - Sunday <br /> 7AM - 8PM</p>
          <p className=' font-semibold text-sm pt-20'>Other Days - 8AM - 8PM</p>
        </div>
      </section>

      <section className='bg-background flex justify-between px-20 py-4 text-white text-center'>
        <div className='flex gap-4'>
          <h2 className=' font-bold text-lg'>iHome</h2>
          <p className=' font-bold text-xs pt-2'>2022 | all rights reserved</p>
        </div>
        <div >
          <ul className='flex gap-32 font-bold text-xs pt-2'>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
