import Footer from "./components/Footer";
import Header from "./components/Header";
import MyCard from "./components/MyCard";

import dogs from "./data/dogs.json";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Header title="Adopta un perrito" />

            <main>
                {dogs.map((dog, key) => (
                    <MyCard
                        key         = {key}
                        name        = {dog.name}
                        description = {dog.description}
                        thumbnail   = {dog.thumbnail}
                        tag         = {dog.tag}
                    />
                ))}

                {/*
                <MyCard 
                    name        = "Bartolo"
                    description = "Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
                    thumbnail   = "https://placedog.net/400/200"
                    tag         = {{
                        text  : "Husky",
                        color : "#198754"
                    }}
                />
                <MyCard
                    name        = "Niki"
                    description = "Es juguetona, amigable y se lleva bien con niños y otros animales. ¡Haz de Niki parte de tu familia hoy mismo!"
                    thumbnail   = "https://placedog.net/400/201"
                    tag         = {{
                        text  : "Bobtail",
                        color : "#0d6efd"
                    }}
                />
                <MyCard
                    name        = "Gohan"
                    description = "Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
                    thumbnail   = "https://placedog.net/400/202"
                    tag         = {{
                        text  : "Shar Pei",
                        color : "#dc3545"
                    }}
                />
                <MyCard
                    name        = "Princesa"
                    description = "Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
                    thumbnail   = "https://placedog.net/400/203"
                    tag         = {{
                        text  : "Beagle",
                        color : "#ffc107"
                    }}
                />
                */}
            </main>

            <Footer text="
                Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. 
                Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso.
                Cada imagen captura su esencia única.
                Adopta un perro y bríndale una segunda oportunidad.
                Encuentra a tu compañero peludo para siempre.
            "/>
        </>
    );
};

export default App;
