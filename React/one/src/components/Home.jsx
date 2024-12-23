import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Osho Upadhyay</h1>
                    <p>Node Developer & Generative AI Enthusiast</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        Welcome to my portfolio! I specialize in Node.js development and have a keen interest in Generative AI technologies. My goal is to create innovative solutions that leverage the power of AI to solve real-world problems.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>About Me</h1>
                    <p>
                        I am a passionate developer with experience in building scalable applications using Node.js. I enjoy exploring the latest advancements in AI and how they can be integrated into software solutions. My journey in tech has been driven by a desire to learn and innovate.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;