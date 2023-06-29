

const Pricing = ({breed}) => {
    return (
        <div>
            <h2>
                <span className="text-blue-400 text-5xl font-extrabold">{breed.life_span}</span>
                <span className="text-2xl">/mon</span>
            </h2>
        </div>
    );
};

export default Pricing;