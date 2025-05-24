import classes from "./About.module.css";
import "lazysizes";

// import axios from "axios";
import img1 from "../assets/images/1222.jpg";
import Acl11 from "../assets/images/Acl11.png";
import SecondImg from "../assets/images/SecondImg.jpg";
import Barbi1 from "../assets/images/Barbi1.jpg";
import Barbi2 from "../assets/images/Barbi2.jpg";
import Barbi3 from "../assets/images/Barbi3.jpg";
import Nature from "../assets/images/Nature.png";
import Barbi4 from "../assets/images/Barbi4.jpg";
import Matan3 from "../assets/images/Matan3.JPG";
import _2077 from "../assets/images/_2077.jpg";
import loading from "../assets/images/loading.png";
import { Flex } from "antd";
export default function About() {
  return (
    <div>
      <h1>About Matan </h1>
      <div className={classes.aboutText}>
        <img
          alt="_2077"
          data-src={Nature}
          height="400"
          src={loading}
          className="lazyload"
        />
        <p className={classes.aboutTextP}>
          Matan Ben Zahav, a versatile musician and composer from Israel, is not
          only a skilled lecturer and multi-instrumentalist but also a prominent
          figure in the global music scene. His passion for crafting enchanting
          melodies and harmonies has solidified his position as an expert across
          diverse genres such as classical, theatre, film music, and pop songs.
          Currently, Matan serves as a lecturer for Composition, Harmony and Ear
          Training at "Mizmor" music college in "Givat Washington." In addition
          to his teaching role, he excels as a music producer, breathing life
          into his distinctive vision by creating mesmerizing soundscapes.
          <h3>Instrumentalist Extraordinaire:</h3> With a natural inclination
          for musical instruments, Matan showcases his immense talent on the
          piano, guitar, saxophone, clarinet, and flute. His command over these
          instruments allows him to infuse diverse musical elements into his
          compositions, resulting in an exquisite fusion of styles and sounds.
        </p>
      </div>
      <div className={classes.aboutText}>
        <p>
          <h3>Collaborations and Performances:</h3> Throughout his career, Matan
          has had the privilege of collaborating and playing with renowned
          artists and bands such as Yishay Ribo,Ehud Banay,Miri Mesika,Bar
          Tzabari,Ninet Tayeb, Alon Eder ,Caorlina, Riki Gal,Yuval Dayan,Oriyan
          Shukron, the Moshav Band, the Solomon Brothers, and Mark Eliyahoo.
          These collaborations have enriched his musical journey and have helped
          him evolve as a musician.
          <div className={classes.imgs}>
            <img
              alt="Barbi1"
              data-src={Barbi1}
              src={loading}
              effect="blur"
              width="500"
              height="300"
              className="lazyload"
            />
            <img
              alt="Barbi2"
              data-src={Barbi2}
              src={loading}
              effect="blur"
              width="500"
              height="300"
              className="lazyload"
            />
            <h4>with Yuval Dayan and Oriyan Shukron at the "Barbi" club</h4>
            <img
              alt="Barbi3"
              data-src={Barbi3}
              src={loading}
              effect="blur"
              width="500"
              height="300"
              className="lazyload"
            />
            <h4>with Riki Gal and Oriyan Shukron at the "Barbi" club</h4>
            <img
              alt="Barbi4"
              data-src={Barbi4}
              src={loading}
              effect="blur"
              width="500"
              height="300"
              className="lazyload"
            />
          </div>
          <h3>Academic Background:</h3> Matan's dedication to his craft is
          further exemplified by his academic achievements. He holds a
          Bachelor's and Master's degree in Composition, as well as a Bachelor's
          degree in Education. These qualifications have provided him with a
          strong foundation in music theory, composition techniques, and
          pedagogy.
        </p>
        <img
          alt="img1"
          data-src={img1}
          src={loading}
          effect="blur"
          width="500"
          height="300"
          className="lazyload"
        />
      </div>
      <div className={classes.aboutText}>
        <img
          alt="Acl11 "
          data-src={Acl11}
          src={loading}
          effect="blur"
          width="700"
          height="500"
          cl
          className="lazyload"
        />
        <p>
          <h3>International Recognition:</h3> In 2019, Matan proudly represented
          Israel at the ASL Music Festival in Taipei, Taiwan. His remarkable
          piece of music was showcased on an international platform, captivating
          audiences with its emotive power and intricate composition.
          <h3>Musical Releases:</h3> Matan's extensive repertoire includes a
          piano music album and a self-produced instrumental album. These albums
          reflect his artistic vision and demonstrate his ability to create
          evocative and immersive musical experiences.
        </p>
      </div>
      {/* <img alt="Acl11 " src={ACL3} width="900" height="500" cl /> */}
      <div className={classes.aboutText}>
        <p>
          <h3> Musical educator:</h3>
          Matan is not only an accomplished musician but also an experienced
          music teacher. He served as the music coordinator in "Chavat HaNoar
          Hazioni" high school in Jerusalem, where he shared his passion for
          music with students. As an educator, Matan nurtured young talents and
          inspired them to explore the world of music.
          <h3> Media composer:</h3>
          In addition to his teaching endeavors, Matan has made significant
          contributions as a media composer. He has composed music for four
          theatre shows performed by "Psifaso Theatre," an ultra-orthodox
          women's theatre group in Jerusalem. His compositions added depth,
          emotion, and richness to the theatrical productions, showcasing his
          versatility and ability to create impactful musical experiences.
        </p>
        <img
          alt="SecondImg"
          effect="blur"
          data-src={SecondImg}
          src={loading}
          width="600"
          height="400"
          className="lazyload"
        />
      </div>
      <div className={classes.aboutText}>
        <img
          alt="img1"
          effect="blur"
          data-src={Matan3}
          src={loading}
          width="500"
          height="300"
          className="lazyload"
        />
        <p>
          <h3> Web Development Expertise:</h3>
          Beyond his musical talents, Matan is also a skilled web Full Stack
          developer. He has personally built this website and app, showcasing
          his proficiency in both the realms of music and technology. Matan's
          ability to merge his musical creativity with technical expertise
          allows him to create innovative digital experiences for his audience.
        </p>
      </div>
    </div>
  );
}
