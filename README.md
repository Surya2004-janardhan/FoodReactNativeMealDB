# 🍽️ React Native Expo - Stunning Food App using TheMealDB 🍽️


## 📌 About the Project
This is a beautifully animated **React Native Expo** app that fetches delicious meal recipes from [TheMealDB](https://www.themealdb.com/). It displays **high-quality images, ingredients, instructions, and YouTube video tutorials** for each dish! 🍜✨

## 🔥 Features
✅ **Fetch meals from TheMealDB API**  
✅ **Display stunning images of each dish** 📸  
✅ **Show ingredients & cooking instructions** 📝  
✅ **Play YouTube recipe videos directly inside the app** 🎥  
✅ **Smooth & elegant animations for a delightful experience** ✨  
✅ **Dark Mode Support** 🌙  
✅ **Built with React Native & Expo for cross-platform (iOS & Android)**  


## 🚀 Tech Stack
- **React Native** (Expo)
- **TheMealDB API** (For fetching recipes)
- **React Navigation** (For smooth transitions)
- **Reanimated & Gesture Handler** (For stunning animations)
- **Axios** (For API requests)
- **React Native YouTube iframe** (For playing recipe videos)


## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies
```bash
npm install
# OR
yarn install
```

### 3️⃣ Run the App on Expo
```bash
expo start
```
Scan the QR code in the Expo Go app to run on your device 📱.  

## 🔗 API Integration (TheMealDB)
We fetch meal details using [TheMealDB API](https://www.themealdb.com/). Example API call:
```javascript
const fetchMeal = async (id) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  setMeal(response.data.meals[0]);
};
```

## ✨ Cool Animations (Reanimated & Gesture Handler)
We've added **smooth animations** to enhance user experience:
- **Fade-in Effects** for images  
- **Swipe Gestures** for navigation  
- **Animated Buttons** for a modern look  

Example fade-in animation:
```javascript
const fadeAnim = useSharedValue(0);
useEffect(() => {
  fadeAnim.value = withTiming(1, { duration: 1000 });
}, []);
```



## 👨‍💻 Contributing
Feel free to **fork** this repo and submit a PR with improvements! 🚀  

## 💡 Acknowledgments
🙏 Thanks to **[TheMealDB](https://www.themealdb.com/)** for providing a free API!  
🔗 Inspired by amazing food apps & UI designs.  

