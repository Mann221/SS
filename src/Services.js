import './index.css';
// import Newsletter from './components/Newsletter';

const Services = () => {
  const services = [
    {
      title: 'Mental Counseling',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.',
      imageUrl: 'https://images.unsplash.com/photo-1',
    },
    {
      title: 'Inner circle',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.',
      imageUrl: 'https://images.unsplash.com/photo-2',
    },
    // Add more service objects here
    {
      title: 'Book Appointments',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.',
     // component: <HolisticApproach />,
    },
    {
      title: 'Community groups',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.',
      imageUrl: '',
    },
    {
      title: 'Your Gpt',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.',
      imageUrl: '',
    },
    {
      title: 'Chatrooms',
      description: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.',
      imageUrl: '',
    },
  ];

  return (
    <>
      <div className="min-h-screen p-10 flex flex-col items-center">
        <div className="text-center text-black text-3xl font-bold mt-10 mb-8 border-b-2 border-green-800">Services</div>
        <div className='text-center text-black text-xl font-semibold mb-8'>Empowering Minds Our Mental Health Consulting Services</div>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="relative h-[200px] w-[300px]">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 shadow-xl rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-black">{service.title}</h1>
                <p className="mt-2 text-sm text-gray-700">
                  {service.description}
                  <button className="mt-2 inline-flex cursor-pointer items-center text-lg font-semibold text-black ml-45">
                    →
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Newsletter /> */}
     
    </>

  );
}

export default Services;
