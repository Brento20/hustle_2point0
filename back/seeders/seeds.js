const hustleDB = require("../config/connection");
const { User, Product, Category } = require('../models');

hustleDB.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Lighting Equipment' },
    { name: 'Camera Equipment' },
    { name: 'Sound Equipment' },
    { name: 'Consumables' },
  ]);

  console.log('categories seeds planted 🌱');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "CANON EOS C500 MARK II",
      description:
      "Employing the DV7 high-speed image processing platform, the camera enables 5.9K/60p, 4K/60p and 2K/120p recording for the highest resolution. In-camera 5.9K Cinema RAW Light Recording is also possible.",
      image: 'CANON-C500MII.jpg',
      category: categories[1]._id,
      price: 23695.99,
      quantity: 3
    },
    {
      name: "ARRI ALEXA MINI LF",
      description:
      "The ALEXA Mini LF has a higher data rate as the ALEXA Mini, since it has a sensor which is twice as big as the Mini's sensor. There are two steps you can take to reduce that data rate. First, shoot LF 16:9 (3840 x 2160) or LF 2.39:1 (4448 x 1856) instead of LF Open Gate (4448 x 3096).",
      image: 'ARRIMINI.jpg',
      category: categories[1]._id,
      price: 84668.58,
      quantity: 1
    },
    {
      name: "APUTURE LS1200D PRO LIGHT STORM",
      category: categories[0]._id,
      description:
      "LS 1S use aero-aluminum to achieve the best balance performance of heat, density, strength, workability, etc. So that the function parameters can get a perfect show. Delicate design and elaborate production combine for a robust but exquisite housing that can fulfill low forward heat of the fixture.",
      image: "LS1200D.jpg",
      price: 5149,
      quantity: 20
    },
    {
      name: "LaCie 16TB 2big RAID USB Type-C External Desktop Storage Solution",
      category: categories[3]._id,
      description:
        'Whether a seasoned creative pro or just getting started, the LaCie 2big family has something for everyone: a docking solution with an array of helpful ports hardware RAID 0/1 for controlling speed, capacity, or data redundancy; huge capacity for archiving; smooth USB-C and Thunderbolt 3 speeds; Rescue Data Recovery services for long-term peace of mind; and enterprise-class drives dishing out intense performance so you can do what you do — better.',
      image: 'LACIE16.jpg',
      price: 1199.90,
      quantity: 12
    },
    {
      name: "Sennheiser Pro Audio Ew 100",
      category: categories[2]._id,
      description: 
      "A broadcast quality sound solution. Providing the highest flexibility for your video sound and field recording applications. A robust wireless microphone system that offers excellent sound quality, simple mounting and ease of use. Multi-purpose set for mobile journalism and documentary. The powerful plug-on transmitter SKP 100 turns every wired dynamic microphone into a wireless transmitter while the easy to use clip-on microphone ME 2-II (omni-directional) offers excellent speech intelligibility during interviews.",
      image: 'ENGG4.jpg',
      price: 1014.99,
      quantity: 100
    }
  ]);

  console.log('product seeds planted 🌱');

  await User.deleteMany();

  await User.create({
    firstName: 'Brenton',
    lastName: 'Testing',
    email: 'testing@test.com',
    password: 'password123'
  });

  console.log('users seeds planted 🌱');

  process.exit();
});
