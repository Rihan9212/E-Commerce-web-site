import { assets } from "../assets/assets"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] " src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe molestiae officia ab, consequatur mollitia repellat amet repudiandae quidem sequi nesciunt ea illum officiis quam odio, in at exercitationem porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero non, eos placeat animi laborum voluptatibus quas eum necessitatibus? Recusandae voluptatum nihil fuga accusantium veritatis, aliquid explicabo esse qui aspernatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste veritatis voluptates animi enim! Explicabo asperiores repellendus tempora ullam doloremque modi ipsum a sit! Saepe tempora culpa eius suscipit nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto aut harum dolore, facilis eligendi voluptates maiores laborum laboriosam optio ipsa totam, labore explicabo, dolorum error at illo suscipit quaerat.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptate ducimus beatae dolorem harum ab officia numquam quae. Cupiditate voluptates amet voluptas ex nam iusto veniam tempora inventore et sunt.</p>
      </div>
    </div>
  )
}

export default About