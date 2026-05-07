import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/food-delivery';

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  rating: Number,
  deliveryTime: String,
  minimumOrder: Number,
  image: String,
  description: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const restaurants = [
  { name: "Pizza Palace", cuisine: "Italian", rating: 4.5, deliveryTime: "30-40 min", minimumOrder: 15, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500", description: "Authentic Italian pizzas" },
  { name: "Burger Barn", cuisine: "American", rating: 4.3, deliveryTime: "20-30 min", minimumOrder: 10, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500", description: "Juicy handcrafted burgers" },
  { name: "Sushi Spot", cuisine: "Japanese", rating: 4.7, deliveryTime: "40-50 min", minimumOrder: 20, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500", description: "Fresh sushi and sashimi" },
  { name: "Taco Town", cuisine: "Mexican", rating: 4.2, deliveryTime: "25-35 min", minimumOrder: 12, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500", description: "Authentic Mexican street food" },
  { name: "Curry House", cuisine: "Indian", rating: 4.6, deliveryTime: "35-45 min", minimumOrder: 15, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500", description: "Rich and flavorful curries" },
];

console.log('Connecting to MongoDB...');
mongoose.connect(uri).then(async () => {
  console.log('Connected!');
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurants);
  console.log('✅ Seeded', restaurants.length, 'restaurants!');
  mongoose.connection.close();
}).catch(err => {
  console.log('Failed:', err.message);
});