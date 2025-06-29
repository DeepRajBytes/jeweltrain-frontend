/* eslint-disable @typescript-eslint/no-explicit-any */
// import TeamData from "../../assets/content/content.json"
// import { motion } from "motion/react";
// import { AnimatedTestimonials } from "../../UI/animated-testimonials";

// interface PeopleItem {
//   name: string;
//   role: string;
//   imageUrl: string;
//   id: number;
// }

// interface TeamDatatype {
//   Team: {
//     people: PeopleItem[];
//   };
// }

// const Team = ({ content }: any) => {
//   const data: TeamDatatype = content;
//   const people = data.Team.people;
//   const testimonials = people.map((person) => ({
//     name: person.name,
//     designation: person.role,
//     src: person.imageUrl,
//     quote: "This person brings tremendous value to our team and clients.",
//   }));

//   return (
//     <motion.div
//       initial={{ opacity: 0.0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: 0.3,
//         duration: 0.8,
//         ease: "easeInOut",
//       }}
//       className="relative flex flex-col gap-4 items-center justify-center px-4"
//     >
//       <div className="font-mono bg-transparent relative isolate">
//         {/* Top Left Shape */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>

//         {/* Content */}
//         <div className="py-24 sm:py-32">
//           <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
//             <div className="max-w-xl">
//               <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
//                 Meet our leadership
//               </h2>
//               <p className="mt-6 text-lg/8 text-gray-600">
//                 We’re a dynamic group of individuals who are passionate about
//                 what we do and dedicated to delivering the best results for our
//                 clients.
//               </p>
//             </div>
//             <div className="xl:col-span-2">
//               <AnimatedTestimonials testimonials={testimonials} />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Right Shape */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Team;

/* eslint-disable @typescript-eslint/no-explicit-any */
// import TeamData from "../../assets/content/content.json"
import { motion } from "motion/react";
// import { AnimatedTestimonials } from "../../UI/animated-testimonials";

interface PeopleItem {
  name: string;
  role: string;
  imageUrl: string;
  id: number;
}

interface TeamDatatype {
  Team: {
    people: PeopleItem[];
  };
}

const Team = ({ content }: any) => {
  const data: TeamDatatype = content;
  const people = data.Team.people;
  const testimonials = people.map((person) => ({
    name: person.name,
    designation: person.role,
    src: person.imageUrl,
    quote: "This person brings tremendous value to our team and clients.",
  }));
  console.log("testimonials", testimonials);
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="font-mono bg-transparent relative isolate">
        {/* Top Left Shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Content */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {/* <AnimatedTestimonials testimonials={testimonials} />; */}
              {people.map((person) => (
                <li key={person.id}>
                  <div className="flex items-center gap-x-6">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="size-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm/6 font-semibold text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Right Shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
