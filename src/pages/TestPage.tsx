import React from 'react';

const TestPage: React.FC = () => {
    return <div className='flex flex-col items-center h-full'>
        <div className='my-auto justify-center md:w-1/2'>
            <div className='md:bg-amber-500 rounded-xl p-10 text-center'>
                <h1 className='text-3xl'>Warning, this is a test</h1>
                {/* eslint-disable-next-line max-len */}
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim rutrum justo ut viverra. Phasellus tortor turpis, dignissim quis sollicitudin et, malesuada porta eros. Quisque sit amet mollis quam. Aenean ornare, neque ut vestibulum lobortis, augue justo rhoncus orci, vel lobortis ex sem sed velit. Quisque condimentum luctus nisi quis fermentum. Nam eget felis et nisl venenatis vulputate vitae eu ex. Maecenas condimentum porta gravida. Nam scelerisque aliquet risus, quis pulvinar justo. Ut vitae pellentesque tellus, non efficitur leo. Vestibulum ut magna quam. Fusce sit amet nunc vestibulum, faucibus sem ut, malesuada odio. </span>
            </div>
        </div>
    </div>
};

export default TestPage;