import React, { useEffect } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollBasedAnimation = () => {
  const { scrollXProgress, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(0,255,0)", "rgb(255,0,0)"]
  );

  return (
    <>
      <motion.div
        style={{
          scaleX: scaleX,
          background: background,
        }}
        className="sticky top-0 w-full h-5 origin-left"
      />
      <div className="font-semibold text-xl p-8 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          dolore, tempore ea reprehenderit magnam tenetur minus distinctio
          eveniet soluta repudiandae harum ipsa sed esse autem asperiores quod
          accusamus consectetur. Voluptatibus. Atque pariatur culpa sed, nemo
          minus distinctio numquam quisquam perspiciatis temporibus hic soluta
          eligendi, nostrum, deleniti facilis nihil ad! Impedit quis facere
          necessitatibus aperiam veritatis quasi eum maxime non ex. Ab beatae
          voluptas excepturi necessitatibus sint. Ex culpa fugiat, aliquid hic
          odio cumque quas autem delectus? Et, praesentium, nulla, deserunt
          eligendi consequuntur repellat esse labore quam eius impedit magni
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis mollitia odit, architecto alias libero minus saepe fuga
          iure corrupti nemo error commodi praesentium? Quae distinctio
          inventore laboriosam asperiores tenetur in!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam quo, esse unde, iste mollitia blanditiis quos dolores nemo,
          in doloribus numquam fugiat dignissimos eum magni. Voluptas
          reprehenderit eius tempora. Non animi sint blanditiis sit? Praesentium
          quas ullam eaque natus ipsam dolorum odio provident a vero odit,
          asperiores aliquam. Aut aliquam, recusandae iure enim quod distinctio
          libero veritatis consequatur accusamus? Libero corporis eveniet
          architecto quaerat nostrum perspiciatis voluptatibus dicta dolorum
          iusto harum qui voluptates necessitatibus, odio atque facere inventore
          modi velit obcaecati nihil vero? Ducimus distinctio a minus accusamus
          dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis, dignissimos inventore assumenda necessitatibus esse
          perspiciatis molestias delectus architecto rerum ducimus, corporis
          nulla adipisci dolorem natus itaque quidem fuga eos nihil?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          dolorum autem sed ratione, eius tempora soluta aliquid quo nesciunt
          fugiat eos hic, voluptas enim esse excepturi modi ipsum eum
          consequuntur! Ipsam fuga modi nostrum ab quod placeat corrupti labore
          odio rerum ducimus dolore expedita illo natus eum accusantium ipsa
          consectetur, tempora voluptates. Minus eveniet sed perferendis
          sapiente magnam, laudantium dicta? Quaerat impedit odio iste saepe at
          nobis, autem, corporis ad reiciendis qui esse quis possimus veritatis,
          repudiandae doloremque exercitationem iure commodi officiis animi
          vero. Quos deserunt vero reprehenderit quaerat. Aspernatur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Libero esse
          doloremque dolor praesentium, veritatis eius est numquam dolorum
          dolorem tenetur veniam voluptatum maxime nihil quas quos cumque?
          Totam, eius debitis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          dolore, tempore ea reprehenderit magnam tenetur minus distinctio
          eveniet soluta repudiandae harum ipsa sed esse autem asperiores quod
          accusamus consectetur. Voluptatibus. Atque pariatur culpa sed, nemo
          minus distinctio numquam quisquam perspiciatis temporibus hic soluta
          eligendi, nostrum, deleniti facilis nihil ad! Impedit quis facere
          necessitatibus aperiam veritatis quasi eum maxime non ex. Ab beatae
          voluptas excepturi necessitatibus sint. Ex culpa fugiat, aliquid hic
          odio cumque quas autem delectus? Et, praesentium, nulla, deserunt
          eligendi consequuntur repellat esse labore quam eius impedit magni
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis mollitia odit, architecto alias libero minus saepe fuga
          iure corrupti nemo error commodi praesentium? Quae distinctio
          inventore laboriosam asperiores tenetur in!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam quo, esse unde, iste mollitia blanditiis quos dolores nemo,
          in doloribus numquam fugiat dignissimos eum magni. Voluptas
          reprehenderit eius tempora. Non animi sint blanditiis sit? Praesentium
          quas ullam eaque natus ipsam dolorum odio provident a vero odit,
          asperiores aliquam. Aut aliquam, recusandae iure enim quod distinctio
          libero veritatis consequatur accusamus? Libero corporis eveniet
          architecto quaerat nostrum perspiciatis voluptatibus dicta dolorum
          iusto harum qui voluptates necessitatibus, odio atque facere inventore
          modi velit obcaecati nihil vero? Ducimus distinctio a minus accusamus
          dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis, dignissimos inventore assumenda necessitatibus esse
          perspiciatis molestias delectus architecto rerum ducimus, corporis
          nulla adipisci dolorem natus itaque quidem fuga eos nihil?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          dolorum autem sed ratione, eius tempora soluta aliquid quo nesciunt
          fugiat eos hic, voluptas enim esse excepturi modi ipsum eum
          consequuntur! Ipsam fuga modi nostrum ab quod placeat corrupti labore
          odio rerum ducimus dolore expedita illo natus eum accusantium ipsa
          consectetur, tempora voluptates. Minus eveniet sed perferendis
          sapiente magnam, laudantium dicta? Quaerat impedit odio iste saepe at
          nobis, autem, corporis ad reiciendis qui esse quis possimus veritatis,
          repudiandae doloremque exercitationem iure commodi officiis animi
          vero. Quos deserunt vero reprehenderit quaerat. Aspernatur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Libero esse
          doloremque dolor praesentium, veritatis eius est numquam dolorum
          dolorem tenetur veniam voluptatum maxime nihil quas quos cumque?
          Totam, eius debitis!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          dolore, tempore ea reprehenderit magnam tenetur minus distinctio
          eveniet soluta repudiandae harum ipsa sed esse autem asperiores quod
          accusamus consectetur. Voluptatibus. Atque pariatur culpa sed, nemo
          minus distinctio numquam quisquam perspiciatis temporibus hic soluta
          eligendi, nostrum, deleniti facilis nihil ad! Impedit quis facere
          necessitatibus aperiam veritatis quasi eum maxime non ex. Ab beatae
          voluptas excepturi necessitatibus sint. Ex culpa fugiat, aliquid hic
          odio cumque quas autem delectus? Et, praesentium, nulla, deserunt
          eligendi consequuntur repellat esse labore quam eius impedit magni
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis mollitia odit, architecto alias libero minus saepe fuga
          iure corrupti nemo error commodi praesentium? Quae distinctio
          inventore laboriosam asperiores tenetur in!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          laboriosam quo, esse unde, iste mollitia blanditiis quos dolores nemo,
          in doloribus numquam fugiat dignissimos eum magni. Voluptas
          reprehenderit eius tempora. Non animi sint blanditiis sit? Praesentium
          quas ullam eaque natus ipsam dolorum odio provident a vero odit,
          asperiores aliquam. Aut aliquam, recusandae iure enim quod distinctio
          libero veritatis consequatur accusamus? Libero corporis eveniet
          architecto quaerat nostrum perspiciatis voluptatibus dicta dolorum
          iusto harum qui voluptates necessitatibus, odio atque facere inventore
          modi velit obcaecati nihil vero? Ducimus distinctio a minus accusamus
          dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis, dignissimos inventore assumenda necessitatibus esse
          perspiciatis molestias delectus architecto rerum ducimus, corporis
          nulla adipisci dolorem natus itaque quidem fuga eos nihil?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          dolorum autem sed ratione, eius tempora soluta aliquid quo nesciunt
          fugiat eos hic, voluptas enim esse excepturi modi ipsum eum
          consequuntur! Ipsam fuga modi nostrum ab quod placeat corrupti labore
          odio rerum ducimus dolore expedita illo natus eum accusantium ipsa
          consectetur, tempora voluptates. Minus eveniet sed perferendis
          sapiente magnam, laudantium dicta? Quaerat impedit odio iste saepe at
          nobis, autem, corporis ad reiciendis qui esse quis possimus veritatis,
          repudiandae doloremque exercitationem iure commodi officiis animi
          vero. Quos deserunt vero reprehenderit quaerat. Aspernatur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Libero esse
          doloremque dolor praesentium, veritatis eius est numquam dolorum
          dolorem tenetur veniam voluptatum maxime nihil quas quos cumque?
          Totam, eius debitis!
        </p>
      </div>
    </>
  );
};

export default ScrollBasedAnimation;
