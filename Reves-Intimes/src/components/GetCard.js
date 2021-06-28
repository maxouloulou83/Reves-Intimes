import React from 'react';
// import FlipCard from 'react-flipcard';

const FeatureCard = (props) => {
    const { svg, title } = props;

    return (
        <div className="mx-2 flex">
            {/*<FlipCard type="vertical">*/}
                <div className="w-full py-2 px-2 items-center justify-center shadow-2xl shadow-inner rounded-3xl bg-opacity-60">
                    <div className="w-6/8 ">
                        {svg}
                    </div>
                    <div className="w-3/5">
                        <h4 className="text-black text-xl">
                            {title}
                        </h4>
                    </div>
                </div>
            {/*</FlipCard>*/}
        </div>
    );
}
export default FeatureCard;