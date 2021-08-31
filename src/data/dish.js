const dishJson = [
    {
        id: 1,
        title: "Lo mein de pollo",
        ingredients: "Delicioso plato de pasta con pollo, verduras salteadas y chía.",
        calories: 800,
        fat: 6,
        carbohydrates: 108,
        proteins: 42,
        img: "/images/dishes/dish-1.png",
        tags: [
            {img: "/images/tags/low-sodium.png", name: "Bajo en sodio"},
            {img: "/images/tags/low-sugar.png", name: "Bajo en azúcar"},
            {img: "/images/tags/low-gluten.png", name: "Bajo en gluten"},
            {img: "/images/tags/low-lactose.png", name: "Bajo en lactosa"},
            {img: "/images/tags/low-fat.png", name: "Bajo en grasa"}
        ],
        salads: [
            {id: 99, img: "/images/dishes/salad-cesar.jpg", name: "Ensalada Cesar", calories: 200, extra: []}
        ],
        extra: []
    },
    {
        id: 2,
        title: "Alitas de pollo",
        ingredients: "Delicioso plato con alitas de pollo y lechuga orgánica.",
        calories: 850,
        fat: 9,
        carbohydrates: 40,
        proteins: 115,
        img: "/images/dishes/wings.jpg",
        tags: [
            {img: "/images/tags/low-sodium.png", name: "Bajo en sodio"},
            {img: "/images/tags/low-sugar.png", name: "Bajo en azúcar"},
            {img: "/images/tags/low-gluten.png", name: "Bajo en gluten"}
        ],
        salads: [
            {id: 99, img: "/images/dishes/salad-cesar.jpg", name: "Ensalada Cesar", calories: 200, extra: []}
        ],
        extra: []
    },
    {
        id: 3,
        title: "Ensalada con pollo",
        ingredients: "Delicioso plato con pollo, tomate y orégano.",
        calories: 700,
        fat: 7,
        carbohydrates: 55,
        proteins: 95,
        img: "/images/dishes/chicken-salad.jpg",
        tags: [
            {img: "/images/tags/low-sodium.png", name: "Bajo en sodio"},
            {img: "/images/tags/low-gluten.png", name: "Bajo en gluten"},
            {img: "/images/tags/low-fat.png", name: "Bajo en grasa"},
            {img: "/images/tags/low-carbs.png", name: "Bajo en carbohidratos"}
        ],
        salads: [
            {id: 99, img: "/images/dishes/salad-cesar.jpg", name: "Ensalada Cesar", calories: 200, extra: []}
        ],
        extra: []
    }
];
export default dishJson;