import { motion } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones, BugOff, ShieldAlertIcon, ShieldCheckIcon, ShieldCheck } from 'lucide-react';

import warehouseImg from '@assets/Termite-Control-1536x1082.jpeg';
import truckImg from '@assets/Rat.webp';
import packageImg from '@assets/Fly.webp';
import barChart3Img from '@assets/americanCockroachAdult.jpg';
import shieldImg from '@assets/mosquito-CDC-JamesGathany.jpg';
import headphonesImg from '@assets/oo2.tawon.png';

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Basmi Rayap',
    description: 'Membasmi rayap membandel, yang berpotensi merusak properti Anda, dan menimbulkan kerugian besar .',
    image: warehouseImg,
  },
  {
    icon: ShieldCheck,
    title: 'Basmi Tikus',
    description: 'Membasmi tikus dari properti Anda, untuk menciptakan lingkungan yang aman, nyaman, dan higienis.',
    image: truckImg,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Basmi Lalat',
    description: 'Membasmi lalat yang berpotensi meyebarkan penyakit dan ketidaknyamanan di lingkungan Anda.',
    image: packageImg,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Basmi Kecoak',
    description: 'Membasmi kecoak yang berpotensi meyebarkan penyakit dan bau tak sedap di lingkungan Anda.',
    image: barChart3Img,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Basmi Nyamuk',
    description: 'Membasmi nyamuk yang berpotensi meyebarkan penyakit dan ketidaknyamanan di lingkungan Anda.',
    image: shieldImg,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Basmi Tawon',
    description: 'Membasmi tawon dan sarangnya yang berpotensi untuk membahayakan keselamatan manusia.',
    image: headphonesImg,
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

