export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  categoryId: string;
  isOffer?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: 'c1', name: 'Fresh Fruits', icon: 'Apple', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 'c2', name: 'Vegetables', icon: 'Carrot', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 'c3', name: 'Dairy & Eggs', icon: 'Egg', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 'c4', name: 'Snacks', icon: 'Cookie', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 'c5', name: 'Beverages', icon: 'Coffee', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400&h=400' },
  { id: 'c6', name: 'Household', icon: 'Home', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400&h=400' },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Fresh Bananas', price: 1.99, unit: 'per bunch', image: 'https://images.unsplash.com/photo-1571501478200-811cce69a111?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c1' },
  { id: 'p2', name: 'Organic Apples', price: 4.50, originalPrice: 5.50, unit: '1 kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcc6?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c1', isOffer: true },
  { id: 'p3', name: 'Red Onions', price: 2.20, unit: '1 kg', image: 'https://images.unsplash.com/photo-1618512496248-a07ce83aa8cb?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c2' },
  { id: 'p4', name: 'Fresh Tomatoes', price: 3.10, unit: '1 kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c2' },
  { id: 'p5', name: 'Whole Milk', price: 3.50, unit: '1 Gallon', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c3' },
  { id: 'p6', name: 'Farm Fresh Eggs', price: 5.99, originalPrice: 7.99, unit: '1 Dozen', image: 'https://images.unsplash.com/photo-1587486913049-53fc88f61536?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c3', isOffer: true },
  { id: 'p7', name: 'Potato Chips', price: 2.50, unit: '150g', image: 'https://images.unsplash.com/photo-1566478989037-eade3e8cb5b2?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c4' },
  { id: 'p8', name: 'Basmati Rice', price: 14.50, unit: '5 kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500&h=500', categoryId: 'c6' },
];
