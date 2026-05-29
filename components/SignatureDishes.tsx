'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import styles from './SignatureDishes.module.css';

const dishes = [
  {
    name: "Chicken Fry Biryani",
    image: "/images/food/chicken fry biryani.jpg",
    desc: "A legendary coastal Andhra special biryani with crispy fried chicken pieces tossed in spicy masala.",
    price: "₹350"
  },
  {
    name: "Dragon Chicken",
    image: "/images/food/Dragon chiken.jpg",
    desc: "Sweet, spicy, and perfectly crispy chicken strips tossed in our secret Indo-Chinese sauce.",
    price: "₹280"
  },
  {
    name: "Paneer Biryani",
    image: "/images/food/paneer biryani.jpg",
    desc: "Fragrant basmati rice layered with marinated paneer cubes and rich aromatic spices.",
    price: "₹300"
  },
  {
    name: "Shahi Ghost Biryani",
    image: "/images/food/shahi ghost biryani.jpg",
    desc: "A royal treat of tender mutton cooked with basmati rice in true nawabi style.",
    price: "₹420"
  },
  {
    name: "Imperial Fish Apollo",
    image: "/images/food/imparial fish apollo.jpg",
    desc: "Premium boneless fish, deep-fried and tossed in a special blend of curry leaves and spices.",
    price: "₹320"
  },
  {
    name: "Signature Shakes",
    image: "/images/food/shakes.jpg",
    desc: "Thick, creamy, and indulgent milkshakes to perfectly balance your spicy meal.",
    price: "₹150"
  }
];

export const SignatureDishes = () => {
  return (
    <section id="menu" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          title={<>Our Signature <br/><span>Masterpieces</span></>}
          subtitle="Discover The Taste"
        />

        <div className={styles.grid}>
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image src={dish.image} alt={dish.name} fill className={styles.image} />
              </div>
              <div className={styles.overlay} />
              <div className={styles.content}>
                <h3 className={styles.title}>{dish.name}</h3>
                <span className={styles.price}>{dish.price}</span>
                <p className={styles.desc}>{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
