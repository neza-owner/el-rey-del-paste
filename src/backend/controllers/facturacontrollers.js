const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbName = "miBaseDeDatos";
const collectionName = "facturas";

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}

// CREATE - Insertar una factura
exports.createFactura = async (req, res) => {
  try {
    const collection = await connectDB();
    const result = await collection.insertOne(req.body);
    res.status(201).json({ message: "Factura creada", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Error al insertar factura", error });
  }
};

// READ - Obtener todas las facturas
exports.getFacturas = async (req, res) => {
  try {
    const collection = await connectDB();
    const facturas = await collection.find({}).toArray();
    res.status(200).json(facturas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener facturas", error });
  }
};

// UPDATE - Actualizar una factura
exports.updateFactura = async (req, res) => {
  try {
    const collection = await connectDB();
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }

    res.status(200).json({ message: "Factura actualizada" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar factura", error });
  }
};

// DELETE - Eliminar una factura
exports.deleteFactura = async (req, res) => {
  try {
    const collection = await connectDB();
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }

    res.status(200).json({ message: "Factura eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar factura", error });
  }
};

// LOGIN (Sencillo sin JWT)
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.status(200).json({ message: "Login exitoso" });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas" });
  }
};
