import { Carousel } from "antd";


const contentStyle = {
    width: "full",
    height: "full",
    margin: 0,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#364d79',
};

const SlideShow = () => (
    <Carousel autoplay effect="fade" speed={1000}>
        <div className='bg-red'>
            <img src="/src/assets/slide_show_1.jpeg" alt="Movie" className='w-full h-full object-contain' />
        </div>
        <div className='bg-red'>
            <img src="/src/assets/slide_show_2.jpeg" alt="Movie" className='w-full h-full object-contain' />
        </div>
        <div className='bg-red'>
            <img src="/src/assets/slide_show_3.jpeg" alt="Movie" className='w-full h-full object-contain' />
        </div>
        <div className='bg-red'>
            <img src="/src/assets/slide_show_4.jpeg" alt="Movie" className='w-full h-full object-contain' />
        </div>
        <div className='bg-red'>
            <img src="/src/assets/slide_show_5.jpeg" alt="Movie" className='w-full h-full object-contain' />
        </div>
    </Carousel >

);


export default SlideShow;