const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

const { useState } = React;

function TShirtStore() {
  const [inventory, setInventory] = useState(tshirts);

  const buyTshirt = (index) => {
    const quantitySelect = document.getElementById(`select-${index}`);
    const selectedQuantity = parseInt(quantitySelect.value);
    
    const updatedInventory = [...inventory];
    updatedInventory[index].stock -= selectedQuantity;
    setInventory(updatedInventory);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>T-Shirts</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {inventory.map((shirt, index) => {
          let options = [];
          for (let i = 1; i <= shirt.stock; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
          }

          return (
            <div key={index} style={{ width: "300px" }}>
              <img src={`images/${shirt.image}`} alt={shirt.title} style={{ width: "100%", backgroundColor: "#f0f0f0" }} />
              <h2 style={{ margin: "10px 0 5px 0" }}>{shirt.title}</h2>
              <p style={{ fontWeight: "bold", margin: "5px 0" }}>$ {shirt.price}</p>

              {shirt.stock > 0 ? (
                <div>
                  <p style={{ color: "#333", margin: "10px 0" }}>{shirt.stock} left!</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <select id={`select-${index}`} style={{ padding: "5px", width: "100px" }}>
                      {options}
                    </select>
                    <button 
                      onClick={() => buyTshirt(index)}
                      style={{ padding: "5px 15px", backgroundColor: "#6c757d", color: "white", border: "none", cursor: "pointer" }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ) : (
                <p style={{ color: "red", margin: "10px 0" }}>Out of stock</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TShirtStore />);