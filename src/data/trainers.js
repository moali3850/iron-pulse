import { images } from './images'

export const trainers = [
  {
    id: 'marcus-cole', name: 'Marcus Cole', specialty: 'Strength & Conditioning', category: 'Strength', image: images.trainerMarcus,
    bio: 'Former powerlifter with 10 years coaching beginners to competitive lifters.',
    longBio: 'Former competitive powerlifter with 10 years of coaching experience. Marcus specialises in teaching safe, effective technique and building long-term strength for beginners through to competitors.',
    experience: '10 yrs', clients: '120+', rating: '4.9', bestFor: 'Building strength & muscle', available: 'Mon–Sat', certifications: ['NASM-CPT', 'CSCS', 'USAPL Coach'],
  },
  {
    id: 'lena-hart', name: 'Lena Hart', specialty: 'Weight Loss & Nutrition', category: 'Nutrition', image: images.trainerLena,
    bio: 'Certified nutrition coach helping members build sustainable fat-loss habits.',
    longBio: 'Certified nutrition coach helping members build sustainable fat-loss habits. Lena blends strength training with practical nutrition coaching that fits real life.',
    experience: '7 yrs', clients: '150+', rating: '4.9', bestFor: 'Fat loss & healthy habits', available: 'Mon–Fri', certifications: ['PN Level 2', 'ACE-CPT'],
  },
  {
    id: 'darius-reed', name: 'Darius Reed', specialty: 'Cardio & HIIT', category: 'Cardio', image: images.trainerDarius,
    bio: 'Endurance specialist running high-energy HIIT and conditioning classes.',
    longBio: 'Endurance specialist running high-energy HIIT and conditioning classes. Darius helps members build stamina, burn fat and enjoy hard work.',
    experience: '8 yrs', clients: '200+', rating: '4.8', bestFor: 'Endurance & conditioning', available: 'Tue–Sun', certifications: ['ACSM-CPT', 'RRCA Coach'],
  },
  {
    id: 'nora-vance', name: 'Nora Vance', specialty: 'Mobility & Functional', category: 'Mobility', image: images.trainerNora,
    bio: 'Movement coach focused on injury prevention, mobility and functional strength.',
    longBio: 'Movement coach focused on injury prevention, mobility and functional strength. Nora helps members move better, recover faster and train pain-free.',
    experience: '9 yrs', clients: '110+', rating: '5.0', bestFor: 'Mobility & injury prevention', available: 'Mon–Thu', certifications: ['FMS Level 2', 'NASM-CES'],
  },
]

export const trainerCategories = ['All', 'Strength', 'Cardio', 'Nutrition', 'Mobility']
