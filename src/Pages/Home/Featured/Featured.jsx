import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitles subHeading="Check It out" heading="Featured item"></SectionTitles>

            <div className="md:flex  justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where I can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consectetur nesciunt provident pariatur illum eveniet dignissimos maiores corporis voluptate unde et, quas sint deleniti repellat laboriosam, fugit magnam aperiam ut natus. Rem quaerat similique a nulla ex odio perferendis cum, dolorem repellendus deleniti, illo laboriosam laudantium hic ut aliquid veritatis.</p>
                    <button className="btn glass mt-8 outline-none text-white hover:bg-slate-600 hover:border-none hover:text-white">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;